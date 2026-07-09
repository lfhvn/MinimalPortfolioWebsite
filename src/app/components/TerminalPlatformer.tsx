import React, { useRef, useEffect, useState, useCallback } from 'react';
import { useColorScheme } from './ColorSchemeProvider';

interface GameState {
  player: {
    x: number;
    y: number;
    velocityY: number;
    isJumping: boolean;
    isGrounded: boolean;
    sprite: string;
    animFrame: number;
  };
  camera: {
    x: number;
  };
  obstacles: Array<{
    x: number;
    y: number;
    width: number;
    height: number;
    type: string;
    sprite: string[];
  }>;
  collectibles: Array<{
    x: number;
    y: number;
    type: string;
    sprite: string;
    collected: boolean;
  }>;
  background: Array<{
    x: number;
    y: number;
    text: string;
    opacity: number;
  }>;
  score: number;
  lives: number;
  speed: number;
  distance: number;
  gameOver: boolean;
  paused: boolean;
}

interface TerminalPlatformerProps {
  onClose: () => void;
}

export function TerminalPlatformer({ onClose }: TerminalPlatformerProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const gameStateRef = useRef<GameState | null>(null);
  const animationIdRef = useRef<number | null>(null);
  const keysRef = useRef<{ [key: string]: boolean }>({});
  const { currentScheme } = useColorScheme();
  
  const [isVisible, setIsVisible] = useState(false);
  const [highScore, setHighScore] = useState(0);

  // ASCII sprites for game elements
  const sprites = {
    player: {
      idle: '█',
      running: ['▌', '█', '▐'],
      jumping: '▲'
    },
    obstacles: {
      bug: ['▓▓', '▒▒'],
      api: ['╔═╗', '║?║', '╚═╝'],
      merge: ['◄►', '><'],
      loop: ['∞∞', '88']
    },
    collectibles: {
      patent: '©',
      launch: '★',
      model: '◆',
      commit: '→',
      coffee: '☕',
      duck: '🦆',
      breakthrough: '💡'
    },
    terrain: {
      ground: '▁',
      platform: '▬'
    }
  };

  // Background code snippets
  const codeSnippets = [
    'import { AI } from "meta"',
    'const glasses = new SmartGlasses()',
    'function designInterface() {',
    'class WearableAI extends Device',
    'export default RayBanMeta',
    'async handleVoiceCommand()',
    'interface HumanAIInteraction',
    'type ConversationalAI = {}',
    'const ethicalAI = require("ethics")',
    'npm install philosophy',
    'git commit -m "ship it"',
    'console.log("reality.sim")',
    'mkdir future_of_wearables',
    'chmod +x breakthrough.sh',
    'ls -la career_achievements/'
  ];

  // Initialize game state
  const initializeGame = useCallback((): GameState => {
    const obstacles = [];
    const collectibles = [];
    const background = [];

    // Generate initial obstacles
    for (let i = 0; i < 10; i++) {
      const x = 800 + i * 300 + Math.random() * 200;
      const obstacleTypes = Object.keys(sprites.obstacles);
      const type = obstacleTypes[Math.floor(Math.random() * obstacleTypes.length)];
      
      obstacles.push({
        x,
        y: 400,
        width: 40,
        height: 40,
        type,
        sprite: sprites.obstacles[type as keyof typeof sprites.obstacles]
      });
    }

    // Generate collectibles
    for (let i = 0; i < 15; i++) {
      const x = 600 + i * 250 + Math.random() * 150;
      const collectibleTypes = Object.keys(sprites.collectibles);
      const type = collectibleTypes[Math.floor(Math.random() * collectibleTypes.length)];
      
      collectibles.push({
        x,
        y: 300 + Math.random() * 100,
        type,
        sprite: sprites.collectibles[type as keyof typeof sprites.collectibles],
        collected: false
      });
    }

    // Generate background code
    for (let i = 0; i < 30; i++) {
      background.push({
        x: Math.random() * 2000,
        y: Math.random() * 500,
        text: codeSnippets[Math.floor(Math.random() * codeSnippets.length)],
        opacity: 0.1 + Math.random() * 0.2
      });
    }

    return {
      player: {
        x: 100,
        y: 350,
        velocityY: 0,
        isJumping: false,
        isGrounded: true,
        sprite: sprites.player.idle,
        animFrame: 0
      },
      camera: { x: 0 },
      obstacles,
      collectibles,
      background,
      score: 0,
      lives: 3,
      speed: 2,
      distance: 0,
      gameOver: false,
      paused: false
    };
  }, []);

  // Draw text with terminal styling
  const drawTerminalText = (
    ctx: CanvasRenderingContext2D, 
    text: string, 
    x: number, 
    y: number, 
    size: number = 16,
    color?: string
  ) => {
    ctx.font = `${size}px "SF Mono", "Fira Code", monospace`;
    ctx.fillStyle = color || currentScheme.text;
    ctx.textAlign = 'left';
    ctx.textBaseline = 'top';
    ctx.fillText(text, x, y);
  };

  // Game physics and collision detection
  const updateGame = (gameState: GameState) => {
    if (gameState.gameOver || gameState.paused) return;

    const { player, obstacles, collectibles, background } = gameState;
    
    // Player physics
    if (keysRef.current['Space'] || keysRef.current['ArrowUp']) {
      if (player.isGrounded) {
        player.velocityY = -15;
        player.isJumping = true;
        player.isGrounded = false;
      }
    }

    // Gravity
    player.velocityY += 0.8;
    player.y += player.velocityY;

    // Ground collision
    if (player.y >= 350) {
      player.y = 350;
      player.velocityY = 0;
      player.isGrounded = true;
      player.isJumping = false;
    }

    // Update player animation
    player.animFrame += 0.2;
    if (player.isJumping) {
      player.sprite = sprites.player.jumping;
    } else {
      const runSprites = sprites.player.running;
      player.sprite = runSprites[Math.floor(player.animFrame) % runSprites.length];
    }

    // Move world
    gameState.camera.x += gameState.speed;
    gameState.distance += gameState.speed;

    // Increase speed over time
    gameState.speed = Math.min(2 + gameState.distance / 1000, 8);

    // Update obstacles
    obstacles.forEach(obstacle => {
      obstacle.x -= gameState.speed;
    });

    // Update collectibles
    collectibles.forEach(collectible => {
      collectible.x -= gameState.speed;
    });

    // Update background
    background.forEach(bg => {
      bg.x -= gameState.speed * 0.3;
      if (bg.x < -200) {
        bg.x = 800 + Math.random() * 400;
        bg.text = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
      }
    });

    // Remove off-screen obstacles and add new ones
    for (let i = obstacles.length - 1; i >= 0; i--) {
      if (obstacles[i].x < -100) {
        obstacles.splice(i, 1);
        
        // Add new obstacle
        const x = obstacles[obstacles.length - 1]?.x + 250 + Math.random() * 200 || 800;
        const obstacleTypes = Object.keys(sprites.obstacles);
        const type = obstacleTypes[Math.floor(Math.random() * obstacleTypes.length)];
        
        obstacles.push({
          x,
          y: 400,
          width: 40,
          height: 40,
          type,
          sprite: sprites.obstacles[type as keyof typeof sprites.obstacles]
        });
      }
    }

    // Collision detection - obstacles
    obstacles.forEach(obstacle => {
      if (
        player.x + 20 > obstacle.x &&
        player.x < obstacle.x + obstacle.width &&
        player.y + 40 > obstacle.y &&
        player.y < obstacle.y + obstacle.height
      ) {
        gameState.lives--;
        if (gameState.lives <= 0) {
          gameState.gameOver = true;
          if (gameState.score > highScore) {
            setHighScore(gameState.score);
            localStorage.setItem('terminal-platformer-high-score', gameState.score.toString());
          }
        } else {
          // Reset player position
          player.x = 100;
          player.y = 350;
          player.velocityY = 0;
          gameState.camera.x -= 100;
        }
      }
    });

    // Collision detection - collectibles
    collectibles.forEach(collectible => {
      if (
        !collectible.collected &&
        player.x + 20 > collectible.x &&
        player.x < collectible.x + 20 &&
        player.y + 40 > collectible.y &&
        player.y < collectible.y + 20
      ) {
        collectible.collected = true;
        
        // Score based on collectible type
        const scoreMap: { [key: string]: number } = {
          patent: 100,
          launch: 150,
          model: 200,
          commit: 50,
          coffee: 25,
          duck: 75,
          breakthrough: 300
        };
        
        gameState.score += scoreMap[collectible.type] || 25;
      }
    });

    // Remove off-screen collectibles and add new ones
    for (let i = collectibles.length - 1; i >= 0; i--) {
      if (collectibles[i].x < -50) {
        collectibles.splice(i, 1);
        
        // Add new collectible
        const x = collectibles[collectibles.length - 1]?.x + 300 + Math.random() * 200 || 900;
        const collectibleTypes = Object.keys(sprites.collectibles);
        const type = collectibleTypes[Math.floor(Math.random() * collectibleTypes.length)];
        
        collectibles.push({
          x,
          y: 300 + Math.random() * 100,
          type,
          sprite: sprites.collectibles[type as keyof typeof sprites.collectibles],
          collected: false
        });
      }
    }
  };

  // Render game
  const renderGame = (ctx: CanvasRenderingContext2D, gameState: GameState) => {
    const canvas = ctx.canvas;
    
    // Clear canvas
    ctx.fillStyle = currentScheme.background;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw background code
    ctx.save();
    gameState.background.forEach(bg => {
      ctx.globalAlpha = bg.opacity;
      drawTerminalText(ctx, bg.text, bg.x - gameState.camera.x * 0.3, bg.y, 12, currentScheme.accent);
    });
    ctx.restore();

    // Draw ground
    ctx.fillStyle = currentScheme.text;
    ctx.fillRect(0, 440, canvas.width, 2);
    for (let i = 0; i < canvas.width; i += 20) {
      drawTerminalText(ctx, sprites.terrain.ground, i, 442, 16);
    }

    // Draw obstacles
    gameState.obstacles.forEach(obstacle => {
      const screenX = obstacle.x - gameState.camera.x;
      if (screenX > -100 && screenX < canvas.width + 100) {
        obstacle.sprite.forEach((line, index) => {
          drawTerminalText(ctx, line, screenX, obstacle.y + index * 16, 16, currentScheme.accent);
        });
      }
    });

    // Draw collectibles
    gameState.collectibles.forEach(collectible => {
      if (!collectible.collected) {
        const screenX = collectible.x - gameState.camera.x;
        if (screenX > -50 && screenX < canvas.width + 50) {
          drawTerminalText(ctx, collectible.sprite, screenX, collectible.y, 16, currentScheme.accent);
        }
      }
    });

    // Draw player
    drawTerminalText(ctx, gameState.player.sprite, gameState.player.x, gameState.player.y, 24);

    // Draw UI
    drawTerminalText(ctx, `SCORE: ${gameState.score}`, 20, 20, 14);
    drawTerminalText(ctx, `LIVES: ${'█'.repeat(gameState.lives)}`, 20, 40, 14);
    drawTerminalText(ctx, `DISTANCE: ${Math.floor(gameState.distance)}m`, 20, 60, 14);
    drawTerminalText(ctx, `SPEED: ${gameState.speed.toFixed(1)}x`, 20, 80, 14);
    drawTerminalText(ctx, `HIGH: ${highScore}`, canvas.width - 150, 20, 14);

    // Draw game over screen
    if (gameState.gameOver) {
      ctx.fillStyle = currentScheme.background + 'CC';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      
      ctx.textAlign = 'center';
      drawTerminalText(ctx, 'SYSTEM ERROR', centerX - 60, centerY - 80, 20, currentScheme.accent);
      drawTerminalText(ctx, '▓▓▓ CAREER CRASHED ▓▓▓', centerX - 120, centerY - 50, 16);
      drawTerminalText(ctx, `FINAL SCORE: ${gameState.score}`, centerX - 80, centerY - 20, 16);
      drawTerminalText(ctx, `HIGH SCORE: ${highScore}`, centerX - 80, centerY, 16);
      drawTerminalText(ctx, 'PRESS R TO RESTART', centerX - 90, centerY + 40, 14);
      drawTerminalText(ctx, 'PRESS ESC TO EXIT', centerX - 80, centerY + 60, 14);
      ctx.textAlign = 'left';
    }

    // Draw pause screen
    if (gameState.paused && !gameState.gameOver) {
      ctx.fillStyle = currentScheme.background + 'AA';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      
      ctx.textAlign = 'center';
      drawTerminalText(ctx, 'PAUSED', centerX - 30, centerY - 20, 20);
      drawTerminalText(ctx, 'PRESS P TO RESUME', centerX - 80, centerY + 20, 14);
      ctx.textAlign = 'left';
    }
  };

  // Game loop
  const gameLoop = useCallback(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    
    if (!canvas || !ctx || !gameStateRef.current) return;

    updateGame(gameStateRef.current);
    renderGame(ctx, gameStateRef.current);
    
    animationIdRef.current = requestAnimationFrame(gameLoop);
  }, [currentScheme]);

  // Handle keyboard input
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      keysRef.current[e.code] = true;
      
      if (e.code === 'KeyP') {
        if (gameStateRef.current) {
          gameStateRef.current.paused = !gameStateRef.current.paused;
        }
      }
      
      if (e.code === 'KeyR' && gameStateRef.current?.gameOver) {
        gameStateRef.current = initializeGame();
      }
      
      if (e.code === 'Escape') {
        onClose();
      }
      
      e.preventDefault();
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      keysRef.current[e.code] = false;
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [initializeGame, onClose]);

  // Initialize game
  useEffect(() => {
    // Load high score
    const savedHighScore = localStorage.getItem('terminal-platformer-high-score');
    if (savedHighScore) {
      setHighScore(parseInt(savedHighScore, 10));
    }

    gameStateRef.current = initializeGame();
    setIsVisible(true);
    
    if (animationIdRef.current) {
      cancelAnimationFrame(animationIdRef.current);
    }
    
    gameLoop();

    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
    };
  }, [initializeGame, gameLoop]);

  if (!isVisible) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      backgroundColor: currentScheme.background,
      zIndex: 9999,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--terminal-font)'
    }}>
      <div style={{
        marginBottom: '20px',
        textAlign: 'center',
        color: currentScheme.text
      }}>
        <h2 style={{ 
          fontSize: '24px', 
          margin: '0 0 10px 0',
          color: currentScheme.accent
        }}>
          CODE RUNNER v1.0
        </h2>
        <p style={{ 
          fontSize: '14px', 
          margin: '0 0 10px 0' 
        }}>
          Navigate your AI career through digital obstacles
        </p>
        <p style={{ 
          fontSize: '12px', 
          opacity: 0.7,
          margin: 0
        }}>
          SPACE/↑ = Jump | P = Pause | R = Restart | ESC = Exit
        </p>
      </div>
      
      <canvas
        ref={canvasRef}
        width={800}
        height={500}
        style={{
          border: `2px solid ${currentScheme.text}`,
          borderRadius: '4px',
          imageRendering: 'pixelated'
        }}
      />
      
      <div style={{
        marginTop: '20px',
        fontSize: '11px',
        color: currentScheme.text,
        opacity: 0.6,
        textAlign: 'center',
        maxWidth: '600px'
      }}>
        Collect patents (©), product launches (★), AI models (◆), and commits (→). 
        Avoid bugs, deprecated APIs, merge conflicts, and infinite loops.
        Coffee (☕), rubber ducks (🦆), and breakthroughs (💡) provide extra points!
      </div>
    </div>
  );
}