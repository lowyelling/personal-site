---
  title: "Week Three - Music Bopper Group Project"
  date: 2026-02-24
  description: "Creating Guitar Hero/DDR/OSU from scratch with the dream team"
---

Writing this reflection of week 3 in the middle of week 4. First (and only?) group project done at Fractal Tech. And the last structured week, which is crazy to say. AI is just moving too fast for us to keep following the structured work from last cohort; we were meant to keep manually coding, but now we're fully unleashing Claude. Not vibecoding, but steering it properly. I still plan on learning the fundamentals over the next year, since I don't think I can properly steer without the background knowledge. It's a strange time to learn software engineering--or anything, really. As I asked in my last blog post, what does it mean to be behind (or ahead) in the age of AI? 

I can't answer that without writing a real essay, not a blog post. That's the writing-as-thinking painful autotelic process, asking a question and meandering through research and personal experience until the answer reveals itself to me as a true feeling. I have an idea that I've been discussing with Claude around cybernetics; that's my directional answer for now. Cybernetics, from the Greek word kybernḗtēs, meaning steersman. Kubernetes, Google's solution for steering servers, analogous to software engineers steering AI agents. Cybernetics, where feedback into a system's memory changes the future actions of the system. Cybernetics, man merging with machine through presence. That's what I'm doing and must continue doing: giving my attention to Claude. May the answer spring from me, from personal experience, in the upcoming weeks. 

If you read the last paragraph and went, what the hell? Welcome to a preview of what I consider my "real writing." Random tangents come together in the end. To me, they're not so random. Let me show you. The theme of my third week was entropy, the tendency towards disorder. Claude-slop within a few turns. Team vision and architecture drifting over time. My attention leaving the game and back towards writing, towards a group discussing an essay. And what was the essay about? Cybernetics. The self-correcting, temporary answer to entropy. A dream envisioned by math prodigy Norbert Wiener, the reality I am living in this AI bootcamp.  


## Reflection

I think I'm writing partially from a dream-state because I've been so tired. I tired easily from making the music bopper game last week; it was the first time I felt my attention slipping from the bootcamp. I wrote in my feedback to the instructors that it's because I don't care for games, which isn't totally true. Claude helped me realize that what I really don't care for are predetermined execution paths because I lose all exploratory agency. When I'm allowed to meander and investigate, I dive deep. For example, I learned so much about the history of game engines and audio clocks because I like testing the boundary of things. 

Why can you use React to make Snake, but not Bomberman? Why can you use the same game engine for a Rhythm music bopper game and Snake? Why do we pick the audio chip time instead of CPU time for music syncing? In other words -- what makes a thing belong with a set of other things? 

Alas, most of the time, I couldn't ask those types of questions. I was timeboxed for execution, and only piecemeal at that. The audio part of the codebase remains rather inscrutable to me, since I didn't own that pipeline. So despite having the best team one could ask for, I think I would've gained more if I was off on my own for this project. But then again, I collaborated on a project for the first time ever on Github, which was its own priceless experience. Especially when paired with such patient and experienced software engineers. The next team won't get so many weird merge conflicts from me anymore :) 

I'm too tired to write more, so I'll send it now. Maybe I'll read this tomorrow with fresh eyes and add a sprinkle more. I won't ask Claude to help me write the bulk of this; I don't want to pollute my training data for this week's project. 

<br>

### Learning about Learning
- Week 3 = 39 conversations. ~$80 in Claude API costs
- Continued measuring gaps using the architecture/mechanical/syntax framework  
- Claude told me I am much more confident prompting it compared to week 1! I no longer type things like "damn I messed it up again" to Claude, I just ask it questions haha

### Key Concepts
4 principles of steering Claude aka not-gambling-not-vibecoding: 
- context is your only lever 
- compaction turns noise into signal
- subagents keep your context clean
- human attention belongs at the top of the pipeline

Games are fundamentally different from web apps — continuous (game loop ticking every frame) vs. event-driven (respond to user actions)

### Random
- It might be time to start full-time hot mic'ing/speaking to Claude, sigh (I quite like typing)
- Met my first publisher [Josh Citarella](https://substack.com/@lowyelling/note/c-216705652?r=1mz4jf&utm_source=notes-share-action&utm_medium=web). Topic was cybernetics - very fitting  
- Michael Dean made a [braided essay visualizer](https://substack.com/@lowyelling/note/c-217188332?r=1mz4jf&utm_source=notes-share-action&utm_medium=web) featuring my essay!

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

Another Monday, another experimentation day. Everyone at Fractal built individual games from a Snake base file using Claude Code. I originally wanted to build Unrailed, but spent half the day writing my Day 14 scary-future-of-work post, so pivoted with 4 hours left and made Bubblegum (泡泡堂), a childhood Chinese game whose Western equivalent is Bomberman. Claude one-shot the entire thing without me reading any code, though debugging enemy logic ate an hour. We had a blast playing each other's games: Pokemon, Civ 1, an FPS, a mobile "Pigeon Pooper" etc. 

- PR #9 `brainstorm` — Brainstorm: Paopaotang (Bomberman-style) game design using /workflows:brainstorm
- PR #16 `plan` — Brainstorm and plan docs with two review sessions via /workflows:plan
- PR #18 `work` — Full Bomberman game implementation: destructible walls, power-ups, enemy AI, player movement
- PR #27 `work` — Enemy AI iteration: BFS flee logic, enemies can die to own bombs, medium enemies place bombs near player, flee from blast zones, safety buffer, power-up seeking. 11 bug fix commits
- PR #30 `review` — Refactor enemy AI state machine, per-entity bomb colors, compound doc for the enemy AI fix
- PR #32 `ui-plan` — UI planning: visual overhaul with PixiJS Graphics and animations, two rounds of refinement
- PR #35 `ui-work` — UI and sprite visual overhaul: tile gradients with depth, character eyes/expressions, bomb glow, power-up float animations, HUD icons, styled menu overlays, retained layer rendering

<br>
Snake system diagram:
<br>
<img src="https://github.com/fractal-nyc/bootcamp-monorepo/blob/main/curriculum/weeks/03-group-project/sp2026/2-Tuesday-game-architecture-diagram.png?raw=true" alt="System Diagram" width="600">  

<br>
<br>

### Day 16 - Building the game engine from scratch

*Daily Posts:
[Substack](https://substack.com/@lowyelling/note/c-216208846?r=1mz4jf&utm_source=notes-share-action&utm_medium=web)
|
[Twitter](https://x.com/lowyelling/status/2024121782710546837?s=20)*

First day of the group project. The dream team #1  — Conor, Josh, and I — decided instantly (almost telepathically) to build a rhythm game (Guitar Hero/DDR/OSU style). Conor wrote the PRD with phased milestones while Josh and I prototyped an MVP using the Snake claude-game base file. In my version, Claude made me a whole recording sub-app in addition to the actual game so I could record beatmaps myself. I made a beatmap for the meme Shrek song Allstar by Smashmouth, which turned out hilariously too hard. 

- PR #1 `docs/prd` (Conor) — Initial PRD: scope, phases, mermaid system diagram, learning goals for beatmaps
- PR #2 `claude/docs` (Lily) — Added CLAUDE.md and claude-game commands/skills
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
- PR #13 `feat/managers` (Josh) — Notes about manager architecture


### Day 17/18 - Building the game scenes/logic - wiring audio, scoring, and first real GitHub collaboration

*Daily Posts:
[Substack](https://substack.com/@lowyelling/note/c-217018396?r=1mz4jf&utm_source=notes-share-action&utm_medium=web)
|
[Twitter](https://x.com/lowyelling/status/2024675343102099499?s=20)*

Two intense days of manual coding. The first day, the team spent significant time learning the Snake system diagramming and practicing diagramming our music bopper system architecture. I took ownership of the input engine using TDD — we were allowed to use Claude to write tests, so I had Claude write 12 descriptive tests, then 5 prescriptive/failing tests for desired behavior, then implemented repeat filtering and held-key tracking. The second day, I built the RhythmWorld shared state object and InputManager scaffold. Josh wired up the audio system — Tone.js playing full MIDI separated by instrument channels, notes only rendering in the viewport, spacebar to start. Conor was in charge of the LaneManager, a difficult combination of UI management and game logic since we hadn't stitched everything together yet. Didn't have a fully working MVP by day 18 as planned.   

- PR #14 `feat/midi-assets` (Josh) — MIDI assets, pre-converted JSON charts, and conversion script
- PR #15 `feat/audio-manager` (Josh) — AudioManager wired into RhythmScene
- PR #16 `lily-inputengine` (Lily) — 12 passing + 5 failing input tests, repeat event filtering, held key Set tracking
- PR #17 `feat/initialdesign` (Conor) — Initial design: lane manager skeleton, circle rendering, dummy elapsed time
- PR #18 `lily-inputengine` (Lily) — RhythmWorld shared state, scene type fixes (key lanes, onKeyHold), InputManager scaffold
- PR #19 `feat/visuals` (Conor) — Visual rendering: lane building, note appearances, color change on keypress, basic timing check
- PR #20 `feat/ui-menu` (Josh) — Interactive song selection menu, SongSelectScene, SongSelectWorld
- PR #21 `feat/wiring-audio` (Josh) — Wired audio to gameplay: Tone.js MIDI playback, maxPolyphony 64, audio time raised to world, notes rendered in viewport


<br>

### Day 19 - Architecture drift/the entropy of teamwork

*Daily Posts:
[Substack](https://substack.com/@lowyelling/note/c-217498706?r=1mz4jf&utm_source=notes-share-action&utm_medium=web)
|
[Twitter](https://x.com/lowyelling/status/2025034402690929143?s=20)*

All systems trend toward entropy. Even with a shared vision, everyone's mental models diverge over time. I noticed our codebase had drifted from our established architecture, so I used Claude to refactor it back in ~15 minutes instead of a full day of manual work. But human oversight was essential; our earlier investment in system diagramming paid off. 

Since we only had 1 day left until demo day, we leaned on Claude code. Claude perfected the scoring system: hit detection with graded timing windows (Perfect/Great/Good/Miss), combo multiplier, score/combo/hitCounts fields on RhythmWorld, and UI rendering for score, combo counter, and hit grade feedback. It also cleaned up unused React/Vite template files, fixed the tick rate from 150ms to 16ms for smooth 60Hz updates, and made the Manager interface generic.

- PR #29 `lily-scoring` (Lily) — Full scoring system: hit detection with graded windows and combo multiplier, miss detection, score/combo/hitCounts on RhythmWorld, UI for score and hit grade, caught and fixed architecture drift from Claude refactoring
- PR #30 `feat/music-selection` (Josh) — New tracks added, full MIDI played separated by Tones
- PR #34 `feature/song-select-styling` (Josh) — Song selection scene styling, bgMusicPlayer positioning
- PR #35 `feat/fix-main` (Josh) — Fixed BgMusicPlayer import path for song select manager
- PR #36 `lily-cleanup` (Lily) — Removed unused React/Vite template files and empty StartScene, lowered tick rate to 16ms for 60Hz, made Manager interface generic over World type, removed duplicate midi directories
- PR #38 `feat/scoring` (Josh) — Cleaned up pause screen, press Enter to quit, adjusted width and song percentage display


<br>

### Day 20 - Demo Day

*Daily Posts:
[Substack](https://substack.com/@lowyelling/note/c-217836032?r=1mz4jf&utm_source=notes-share-action&utm_medium=web)
|
[Twitter](https://x.com/lowyelling/status/2025329054337909135?s=20)*

Polish and demo day. With Claude, I built a lil-gui runtime control panel, a centralized area for previously hardcoded game constants. Conor took the lead on the slide deck and Josh worked on prepping the repo for deployment on Render. 

<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vQqiFge7rJTOJ_bZHJ0ICUhXKSQ0teRGGSG5MFYbrAQ8bMI9k4sQUrbm8SHcsJHtay3ctw6KlmjxLnx/pubembed?start=false&loop=false&delayms=3000"  frameborder="0" width="600" height="338" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>

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
- Make system diagram for music bopper from scratch
