import { projectId, publicAnonKey, isSupabaseConfigured } from './info';

// Generate or get persistent user ID
export function getUserId(): string {
  let userId = localStorage.getItem('user_id');
  if (!userId) {
    userId = `user_${Math.random().toString(36).substr(2, 16)}`;
    localStorage.setItem('user_id', userId);
  }
  return userId;
}

// Supabase API client
export class SupabaseApiClient {
  private baseUrl: string;
  private headers: Record<string, string>;

  constructor() {
    this.baseUrl = `https://${projectId}.supabase.co/functions/v1/make-server-ca6a59aa`;
    this.headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${publicAnonKey}`,
    };
  }

  async getAvailableProviders(): Promise<{ providers: string[]; error?: string }> {
    if (!isSupabaseConfigured()) {
      return { 
        providers: [], 
        error: 'Supabase backend not configured' 
      };
    }

    try {
      const response = await fetch(`${this.baseUrl}/providers`, {
        method: 'GET',
        headers: this.headers,
      });

      const data = await response.json();
      
      if (!response.ok) {
        return { providers: [], error: data.error || 'Failed to fetch providers' };
      }

      return { providers: data.providers };
    } catch (error) {
      console.error('Error fetching providers:', error);
      return { providers: [], error: error instanceof Error ? error.message : 'Network error' };
    }
  }

  async saveSystemPrompt(systemPrompt: string): Promise<{ success: boolean; error?: string }> {
    if (!isSupabaseConfigured()) {
      // Fallback to localStorage for prompt storage
      try {
        localStorage.setItem('ai_system_prompt_fallback', systemPrompt);
        return { success: true };
      } catch (error) {
        return { success: false, error: 'Failed to save prompt locally' };
      }
    }

    try {
      const response = await fetch(`${this.baseUrl}/system-prompt`, {
        method: 'POST',
        headers: this.headers,
        body: JSON.stringify({
          userId: getUserId(),
          systemPrompt
        }),
      });

      const data = await response.json();
      
      if (!response.ok) {
        return { success: false, error: data.error || 'Failed to save system prompt' };
      }

      return { success: true };
    } catch (error) {
      console.error('Error saving system prompt:', error);
      return { success: false, error: error instanceof Error ? error.message : 'Network error' };
    }
  }

  async getSystemPrompt(): Promise<{ systemPrompt: string | null; error?: string }> {
    if (!isSupabaseConfigured()) {
      // Fallback to localStorage for prompt retrieval
      try {
        const prompt = localStorage.getItem('ai_system_prompt_fallback');
        return { systemPrompt: prompt };
      } catch (error) {
        return { systemPrompt: null, error: 'Failed to load prompt from local storage' };
      }
    }

    try {
      const response = await fetch(`${this.baseUrl}/system-prompt/${getUserId()}`, {
        method: 'GET',
        headers: this.headers,
      });

      const data = await response.json();
      
      if (!response.ok) {
        return { systemPrompt: null, error: data.error || 'Failed to fetch system prompt' };
      }

      return { systemPrompt: data.systemPrompt };
    } catch (error) {
      console.error('Error fetching system prompt:', error);
      return { systemPrompt: null, error: error instanceof Error ? error.message : 'Network error' };
    }
  }

  async sendChatMessage(
    message: string, 
    provider: 'openai' | 'anthropic', 
    model?: string, 
    systemPrompt?: string
  ): Promise<{ 
    response?: string; 
    model?: string; 
    timestamp?: string; 
    error?: string; 
  }> {
    if (!isSupabaseConfigured()) {
      return { 
        error: 'Backend not configured - Supabase connection required for AI chat functionality' 
      };
    }

    try {
      const response = await fetch(`${this.baseUrl}/chat`, {
        method: 'POST',
        headers: this.headers,
        body: JSON.stringify({
          message,
          provider,
          userId: getUserId(),
          model,
          systemPrompt
        }),
      });

      const data = await response.json();
      
      if (!response.ok) {
        // Handle rate limiting specifically
        if (response.status === 429) {
          return { error: `⏱️ Rate Limit: ${data.error}` };
        }
        return { error: data.error || 'Chat request failed' };
      }

      return {
        response: data.response,
        model: data.model,
        timestamp: data.timestamp
      };
    } catch (error) {
      console.error('Error sending chat message:', error);
      return { error: error instanceof Error ? error.message : 'Network error' };
    }
  }

  async getChatHistory(limit = 20): Promise<{ history: any[]; error?: string }> {
    if (!isSupabaseConfigured()) {
      return { 
        history: [], 
        error: 'Supabase backend not configured - chat history unavailable' 
      };
    }

    try {
      const response = await fetch(`${this.baseUrl}/chat-history/${getUserId()}?limit=${limit}`, {
        method: 'GET',
        headers: this.headers,
      });

      const data = await response.json();
      
      if (!response.ok) {
        return { history: [], error: data.error || 'Failed to fetch chat history' };
      }

      return { history: data.history };
    } catch (error) {
      // Only log if it's not a configuration issue
      console.error('Error fetching chat history:', error);
      return { 
        history: [], 
        error: error instanceof Error ? error.message : 'Network error - chat history unavailable' 
      };
    }
  }

  async getUsageStats(): Promise<{ 
    requestsUsed?: number; 
    requestsRemaining?: number; 
    resetInMinutes?: number; 
    maxRequestsPerHour?: number; 
    error?: string; 
  }> {
    if (!isSupabaseConfigured()) {
      return { 
        error: 'Supabase backend not configured - usage stats unavailable' 
      };
    }

    try {
      const response = await fetch(`${this.baseUrl}/usage/${getUserId()}`, {
        method: 'GET',
        headers: this.headers,
      });

      const data = await response.json();
      
      if (!response.ok) {
        return { error: data.error || 'Failed to fetch usage stats' };
      }

      return data;
    } catch (error) {
      // Only log if it's not a configuration issue
      console.error('Error fetching usage stats:', error);
      return { 
        error: error instanceof Error ? error.message : 'Network error - usage stats unavailable' 
      };
    }
  }

  // Health check for server connectivity
  async healthCheck(): Promise<{ 
    healthy: boolean; 
    providers?: { openai: boolean; anthropic: boolean }; 
    error?: string; 
    configured?: boolean;
  }> {
    // First check if Supabase is configured
    if (!isSupabaseConfigured()) {
      return { 
        healthy: false, 
        configured: false,
        error: 'Supabase not configured - using placeholder credentials' 
      };
    }

    try {
      const response = await fetch(`${this.baseUrl}/health`, {
        method: 'GET',
        headers: this.headers,
      });

      const data = await response.json();

      if (response.ok) {
        return { 
          healthy: true, 
          configured: true,
          providers: data.providers 
        };
      } else {
        return { 
          healthy: false, 
          configured: true,
          error: `Server returned ${response.status}` 
        };
      }
    } catch (error) {
      console.error('Health check failed:', error);
      return { 
        healthy: false, 
        configured: true,
        error: error instanceof Error ? error.message : 'Network error' 
      };
    }
  }
}

// Singleton instance
export const supabaseClient = new SupabaseApiClient();