---
  title: "Week Three - Music Bopper Group Project"
  date: 2026-02-24
  description: "Creating Guitar Hero/DDR/OSU from scratch in the dream team"
---

Josh Citarella: https://substack.com/@lowyelling/note/c-216705652?r=1mz4jf&utm_source=notes-share-action&utm_medium=web

Michael Dean essay visualizer: https://substack.com/@lowyelling/note/c-217188332?r=1mz4jf&utm_source=notes-share-action&utm_medium=web

---
## Reflection

<br>


<br>

### Learning about Learning
-

### Key Concepts
-

### Random
-

---
## Tech Stack
- **Terminal:** Still inside VS Code :)
- **IDE:** Visual Studio Code
- **Github:** [Music Bopper repo](https://github.com/flatspider/music-bopper)
- **AI:** Claude Code Opus 4.6
- **Runtime:** Bun
- **Languages:** TypeScript, HTML, CSS
- **Frontend:** PixiJS (WebGL/Canvas 2D rendering), Tone.js (Web Audio synthesis + MIDI playback), @tonejs/midi (MIDI file parsing), lil-gui (runtime debug/tuning panel)
- **Backend:** None (static web app)
- **Styling:** None (all rendering through PixiJS canvas)
- **Database:** None
- **Testing:** Vitest, jsdom
- **Linting:** ESLint, typescript-eslint
- **Dev Tooling:** Vite, Husky (git hooks), Bun scripts for MIDI-to-JSON conversion
- **Live Deployment:** None yet (builds to dist/ via Vite)
- **System Diagrams:** Pen and paper, Excalidraw, draw.io, Mermaid

---
## Daily Logs

My daily posts on Substack and Twitter were fully written by me. But for the PR logs below, I let Claude Code read my git commit history and write the summaries, with me as the editor. 

The system design diagrams were made by our instructors. Once I make my own, I'll replace them/add them alongside the official ones. 

<br>

### Day 14 - "Software engineers are their own bottleneck now; AI is a coordination problem"

*Daily Posts:
[Substack](https://substack.com/@lowyelling/note/c-215390508?r=1mz4jf&utm_source=notes-share-action&utm_medium=web)
|
[Twitter](https://x.com/lowyelling/status/2023466020489322624?s=20)*

Technically I wrote this on Day 15 since I attended a potato party on Sunday instead of Claude-maxxing, but I did spend Sunday/half of Monday stewing on it after an AI reading group on Saturday blew my mind. I plan on extrapolating on the future of work in a proper Substack essay. 

<br>

### Day 15 - Claude Game Day

*Daily Posts:
[Substack](https://substack.com/@lowyelling/note/c-215751340?r=1mz4jf&utm_source=notes-share-action&utm_medium=web)
|
[Twitter](https://x.com/lowyelling/status/2023766297188717004?s=20)*

Experimentation day — everyone at Fractal built individual games from a Snake base file using Claude Code. I originally wanted to build Unrailed but pivoted with 4 hours left and made a Bubblegum Bomberman (泡泡堂), a childhood Chinese game. Claude one-shot the entire thing without me reading any code, though debugging enemy logic ate an hour. The cohort played each other's creations: Pokemon, Civ 1, an FPS, and a mobile "Pigeon Pooper." After game day, the team scaffolded Music Bopper — I set up testing infrastructure, linting with Husky pre-commit hooks, and generated mermaid system diagrams with Claude.

- PR #3 `mermaid` (Lily) — Added mermaid diagram drawing skill
- PR #4 `husky` (Lily) — Added Husky, Prettier, ESLint, and Vitest pre-commit hooks
- PR #5 `prd/edits` (Conor) — PRD and README updates
- PR #6 `system-diagrams` (Lily) — Mermaid diagrams from Claude one-shot MVP
- PR #7 `feat/architecture` (Josh) — Target architecture diagram and technical considerations
- PR #8 `feat/midi-logic` (Josh) — MIDI asset folder with JSON song structures, parser, and lane assignment strategies
- PR #9 `feat/gameenginescaffolding` (Conor) — Game engine scaffolding: initial main, input setup, scene types
- PR #10 `lily-testinstall` (Lily) — Installed Vitest + jsdom, configured test environment, wrote first passing test
- PR #11 `feat/basicscene` (Conor) — Basic scene with manager running, "Hello World" rendering
- PR #12 `feat/audio` (Josh) — Audio engine with Tone.js, currentTime functionality


<br>

### Day 16 - Building the game engine from scratch

*Daily Posts:
[Substack](https://substack.com/@lowyelling/note/c-216208846?r=1mz4jf&utm_source=notes-share-action&utm_medium=web)
|
[Twitter](https://x.com/lowyelling/status/2024121782710546837?s=20)*


First day of the group project. The team — me, Conor, and Josh — decided to build a rhythm game (Guitar Hero/DDR/OSU style). Conor wrote the PRD with phased milestones, Josh prototyped an MVP to understand the problem space, and I set up CLAUDE.md to configure how Claude would work with us on the project. My daily post wasn't about the game — it was about AI as a coordination problem, barbell economics, and the disappearing middle of software engineering. The frontier moves so fast that even engaged observers underestimate it.


First full build day on the rhythm game. The big insight: games are fundamentally different from web apps — continuous (game loop ticking every frame) vs. event-driven (respond to user actions). We coded manually from scratch while using Claude to generate an MVP for understanding system diagrams. I took ownership of the input engine using TDD — wrote 12 descriptive tests first to document current behavior, then 5 prescriptive/failing tests for desired behavior, then implemented repeat filtering and held-key tracking. Also built the RhythmWorld shared state object and InputManager scaffold. Made a beatmap for a Shrek song that turned out way too hard. Claude also made me a whole recording sub-app in addition to the actual game.

- PR #1 `docs/prd` (Conor) — Initial PRD: scope, phases, mermaid system diagram, learning goals for beatmaps
- PR #2 `claude/docs` (Lily) — Added CLAUDE.md and claude-game commands/skills
- PR #13 `feat/managers` (Josh) — Notes about manager architecture
- PR #14 `feat/midi-assets` (Josh) — MIDI assets, pre-converted JSON charts, and conversion script
- PR #15 `feat/audio-manager` (Josh) — AudioManager wired into RhythmScene
- PR #16 `lily-inputengine` (Lily) — 12 passing + 5 failing input tests, repeat event filtering, held key Set tracking
- PR #17 `feat/initialdesign` (Conor) — Initial design: lane manager skeleton, circle rendering, dummy elapsed time
- PR #18 `lily-inputengine` (Lily) — RhythmWorld shared state, scene type fixes (key lanes, onKeyHold), InputManager scaffold
- PR #19 `feat/visuals` (Conor) — Visual rendering: lane building, note appearances, color change on keypress, basic timing check
- PR #20 `feat/ui-menu` (Josh) — Interactive song selection menu, SongSelectScene, SongSelectWorld


<br>

### Day 17/18 - Wiring audio, scoring, and first real GitHub collaboration

*Daily Posts:
[Substack](https://substack.com/@lowyelling/note/c-217018396?r=1mz4jf&utm_source=notes-share-action&utm_medium=web)
|
[Twitter](https://x.com/lowyelling/status/2024675343102099499?s=20)*

Two intense days. Didn't have a working MVP by day 17 but pushed through. Josh wired up the audio system — Tone.js playing full MIDI separated by instrument channels, notes only rendering in the viewport, spacebar to start. I built the entire scoring system: hit detection with graded timing windows (Perfect/Great/Good/Miss), combo multiplier, score/combo/hitCounts fields on RhythmWorld, and UI rendering for score, combo counter, and hit grade feedback. This was my first time ever collaborating in a GitHub repo — Conor and Josh taught me better git workflows and PR review processes. The team spent significant time diagramming the system architecture.

- PR #21 `feat/wiring-audio` (Josh) — Wired audio to gameplay: Tone.js MIDI playback, maxPolyphony 64, audio time raised to world, notes rendered in viewport
- PR #29 `lily-scoring` (Lily) — Full scoring system: hit detection with graded windows and combo multiplier, miss detection, score/combo/hitCounts on RhythmWorld, UI for score and hit grade, caught and fixed architecture drift from Claude refactoring
- PR #30 `feat/music-selection` (Josh) — New tracks added, full MIDI played separated by Tones
- PR #34 `feature/song-select-styling` (Josh) — Song selection scene styling, bgMusicPlayer positioning
- PR #35 `feat/fix-main` (Josh) — Fixed BgMusicPlayer import path for song select manager


<br>

### Day 19 - Architecture drift and the entropy of teamwork

*Daily Posts:
[Substack](https://substack.com/@lowyelling/note/c-217498706?r=1mz4jf&utm_source=notes-share-action&utm_medium=web)
|
[Twitter](https://x.com/lowyelling/status/2025034402690929143?s=20)*

Teamwork naturally tends toward entropy — even with a shared vision, everyone's mental models diverge over time. I noticed our codebase had drifted from our established architecture, so I used Claude to refactor it back in ~15 minutes instead of a full day of manual work. But human oversight was essential: "My attention still needed to be part of the feedback loop, otherwise Claude would've happily chugged away on the wrong architecture." Our earlier investment in system diagramming paid off here — it gave us a shared reference to correct against. Also cleaned up unused React/Vite template files, fixed the tick rate from 150ms to 16ms for smooth 60Hz updates, and made the Manager interface generic.

- PR #36 `lily-cleanup` (Lily) — Removed unused React/Vite template files and empty StartScene, lowered tick rate to 16ms for 60Hz, made Manager interface generic over World type, removed duplicate midi directories
- PR #38 `feat/scoring` (Josh) — Cleaned up pause screen, press Enter to quit, adjusted width and song percentage display


<br>

### Day 20 - Demo Day

*Daily Posts:
[Substack](https://substack.com/@lowyelling/note/c-217836032?r=1mz4jf&utm_source=notes-share-action&utm_medium=web)
|
[Twitter](https://x.com/lowyelling/status/2025329054337909135?s=20)*

Polish and demo. I built a lil-gui runtime control panel — centralized all hardcoded game constants into a GameConfig, wired every manager to read from it, added a toggleable debug panel on backtick key with presets (Easy/Hard/Chaos) and reset-to-defaults. Fixed config defaults for the final canvas size. Other demos included Frogger, a corporate strategy game, an AR item collection game, and a Schelling Point game with mobile responses. Takeaway: "I never want to build a game again! I had the dream team and it was still a terribly hard experience." Genuine respect for game developers — they are REAL software engineers.

- PR #37 `lily-panel` (Lily) — Centralized GameConfig, wired managers to read from config, added lil-gui control panel with backtick toggle, presets (Easy/Hard/Chaos), reset-to-defaults
- PR #40 `feat/adjust-bg` (Josh) — Fixed build
- PR #41 `lily-fix2` (Lily) — Fixed config defaults for 760x740 canvas, removed audio panel


---

## Future Considerations
Braindump for what I can improve, other ideas etc

### Near Term
- Add start menu with DFJK keys
- Remove or update Game Config panel
- Polish up UI

### Long Term
- Add more music
- Make system diagram for flow
