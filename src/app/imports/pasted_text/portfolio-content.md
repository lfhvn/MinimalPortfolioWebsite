Understood. The goal is not just layout—it’s a finished, shippable narrative + design system that:
	•	reflects your actual voice
	•	feels intentional and authored
	•	converts into “I want to talk to this person”

Below is a production-ready package you can copy into Figma Make or your codebase. It includes:
	1.	Final homepage content (in your voice)
	2.	Page structure (clean + scalable)
	3.	Design tokens (simple, no plugin needed)
	4.	Component patterns
	5.	Exact build instructions for Figma Make

⸻

1. Final Homepage Content (Use This)

This is tuned to be:
	•	understated authority
	•	intellectually oriented
	•	not resume-y
	•	not try-hard

Paste this directly.

⸻

HERO

# Leif Martinson

Designing interfaces for AI systems, agents,  
and multimodal computing.

Work across conversational AI, wearables,  
and voice interaction systems.


⸻

SELECTED WORK

## Selected Work

**Ray-Ban Meta**  
AI-powered smart glasses and multimodal capture.

**Facebook Portal**  
Conversational AI in the home.

**Oculus Voice**  
Voice interaction systems for immersive computing.

**AI Assistant Systems**  
Tools and platforms for building AI-driven experiences.


⸻

TIMELINE

## Timeline

**2022–**  
AI wearables and multimodal systems

**2019–2022**  
Conversational AI for home computing

**2016–2019**  
Voice interaction systems for immersive computing


⸻

IDEAS

(Even if you don’t have these yet—include them)

## Ideas

Agents as Cognitive Prosthetics

The Interface Layer of Alignment

Designing Interaction for LLM Systems


⸻

FIELD NOTES

## Field Notes

**017**  
Persistent memory changes the interaction model of AI agents.

**016**  
Prompting is interface design for probabilistic systems.

**015**  
Users attribute intent when system boundaries are unclear.


⸻

ABOUT (SHORT VERSION FOR HOME)

## About

Leif Martinson is a product designer working on AI systems,  
multimodal interfaces, and human-AI interaction.

His work spans conversational AI, wearables, and voice systems,  
including products used by millions of people.


⸻

2. Site Structure (Use This Exactly)

/app
  page.tsx        # homepage
  work/page.tsx
  ideas/page.tsx
  notes/page.tsx
  about/page.tsx

/components
  Section.tsx
  Entry.tsx
  Timeline.tsx
  Note.tsx

/styles
  globals.css


⸻

3. Design Tokens (Simple, No Plugin)

Paste into your CSS:

:root {
  --text-primary: #111;
  --text-secondary: #555;
  --border: #e5e5e5;

  --font-body: "Source Serif 4", Georgia, serif;

  --content-width: 700px;

  --space-xl: 96px;
  --space-lg: 64px;
  --space-md: 32px;
  --space-sm: 18px;
}


⸻

4. Layout System (Critical)

This is what makes it feel “AI-2027 level readable”.

main {
  max-width: var(--content-width);
  margin: 0 auto;
  padding: 80px 20px;
}

section {
  margin-top: var(--space-xl);
}

h1 {
  font-size: 44px;
  margin-bottom: 24px;
}

h2 {
  font-size: 28px;
  margin-bottom: 16px;
  border-bottom: 2px solid black;
  padding-bottom: 6px;
}

p {
  font-size: 17px;
  line-height: 1.65;
  margin-bottom: var(--space-sm);
}


⸻

5. Components (Copy/Paste Ready)

Section

export function Section({ title, children }) {
  return (
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  );
}


⸻

Entry (for work + ideas)

export function Entry({ title, description }) {
  return (
    <div style={{ marginBottom: "24px" }}>
      <strong>{title}</strong>
      <p>{description}</p>
    </div>
  );
}


⸻

Timeline

export function TimelineItem({ year, text }) {
  return (
    <div style={{ display: "flex", marginBottom: "12px" }}>
      <div style={{ width: "120px" }}>{year}</div>
      <div>{text}</div>
    </div>
  );
}


⸻

Note

export function Note({ number, text }) {
  return (
    <div style={{ marginBottom: "12px" }}>
      <strong>{number}</strong>
      <p>{text}</p>
    </div>
  );
}


⸻

6. Figma Make Instructions (Important)

Inside Figma Make:

Step 1

Create a frame:

1440 width

Step 2

Create a centered container:

700px width
centered

Step 3

Paste homepage content into text layers

Step 4

Create styles:
	•	H1 → 44px
	•	H2 → 28px
	•	Body → 17px
	•	Line height → 1.65

Step 5

Spacing:

section gap = 96px
paragraph gap = 18px


⸻

7. What This Achieves

This version:
	•	immediately signals AI systems designer
	•	shows real work
	•	introduces thinking layer
	•	creates forward momentum (ideas + notes)

Most importantly:

It makes someone think:

“I want to talk to this person”


⸻

8. Next Step (High Leverage)

Once this is in Figma or code, the next upgrade is:

Add 2–3 real pieces of writing

Even short:
	•	500–800 words
	•	or expanded field notes

That’s what will flip the site from:

strong portfolio

to:

distinct point of view


⸻

If you want, next I can:
	•	refine tone to be even more you (less generic, more sharp)
	•	design the visual identity layer (symbols, diagrams, typography tweaks)
	•	or generate a fully styled Figma file layout with real typography and spacing applied

That’s where this becomes genuinely standout.