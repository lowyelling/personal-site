---                                                                                                                              
  title: "Week Two - Two AI mirrors looking at each other"                                                                         
  date: 2026-02-24                                                                                                                 
  description: "Making a clone of chatGPT to talk with Claude"                                                                                  
---                                                                                                                      
INTRO

---
## Reflection

<br>



<br>

### Learning about Learning
- 

### Key Concepts  
-  
-

### Random
-  
- 

---
## Tech Stack
- **Terminal:** Still inside VS Code
- **IDE:** Visual Studio Code - added more extensions this week like Tailwind
- **Github:** My [Chatbot repo](https://github.com/lowyelling/chatbot) 
- **AI:** Claude Code Opus 4.6 and openAI Codex 5.2 (for tutoring mostly - used them to one-shot UI and bot script for demo)
- **Runtime:** Bun
- **Languages:** Typescript (superset of Javascript), HTML, CSS
- **Frontend:** React, Vite, React Router
- **Backend:** Express, vite-express
- **Styling:** Tailwind CSS, shadcn/ui (built on Radix UI), lucide-react for icons
- **Database:** SQLite (better-sqlite3 library)
- **Authentication:** better-auth library (email/password + GitHub OAuth)
- **AI APIs:** Anthropic SDK (Claude), OpenAI SDK   
- **Markdown Rendering:** react-markdown, remark-gfm
- **Testing:** vitest
- **Linting:** None
- **Dev Tooling:** nodemon, tsx, dotenv
- **Live Deployment:** Railway - because they allow SQLite + have a 30 day free tier
- **System Diagrams:** Pen and paper, Excalidraw, draw.io, Mermaid  

---
## Daily Logs

My daily posts on Substack and Twitter were fully written by me. But for the PR logs below, I let Claude Code read my git commit history and write the summaries, with me as the editor. 

The system design diagrams were made by our instructors. Once I make my own, I'll replace them/add them alongside the official ones. 

<br>

### Day 1 - Building intuition and meta-learning: setting up my personal harness (lily-claudebook)

*Daily Posts:
[Substack](https://substack.com/@lowyelling/note/c-212459500?r=1mz4jf&utm_source=notes-share-action&utm_medium=web)
|
[Twitter](https://x.com/lowyelling/status/2021082413305135221?s=20)*

One of the best days ever! Total flow state. I recommend reading the daily post to develop an intuition for the true nature of AI, which I adapted from our excellent instructor lecture.

This is also the day I stopped coding and started studying how I code/learn. Built lily-claudebook from scratch as a system for analyzing my own learning. Extracted all 7 week-1 Claude Code conversations, analyzed my problem-solving and questioning patterns, took an 8-question architecture quiz on my own tic-tac-toe project, then built my first Claude Code skills — mermaid diagram generation and conversation extraction. 9 sessions, 264 messages, ~$17.

- PR #1 `shape-personality` — Created a "mean Claude" personality file (experiment in shaping Claude's tone through CLAUDE.md)
- PR #2 `interview` — Deep interview with Claude to produce the first CLAUDE.md — who I am, how I learn, how to work with me
- PR #3 `analyze-conversation` — Extracted 7 week-1 conversations into markdown, wrote a Python extraction script, and produced the first daily note: a
full analysis of how I solve problems, ask questions, and think about myself as a learner. Key finding: "I arrive with hypotheses, not just symptoms" and "my tolerance for feeling stupid is high"
- PR #4 `quiz-me` — 8-question architecture quiz on tic-tac-toe covering state management, polling vs WebSockets, stale closures, pure functions, and the React render cycle. Identified the mechanical layer as the core gap: closures, event loop, render cycle timing
- PR #5 `first-skill` — Built the mermaid diagram skill in 5 phases: TypeScript generation script → tic-tac-toe diagrams (from memory vs from git
history) → reusable skill definition → tested on personal-site → meta-skill for creating new skills. 89 API turns, the most expensive session of the
day at $5.49
- PR #6 `more-skills` — Rewrote conversation extraction in TypeScript (from Python), built an extract-conversation skill that auto-appends token usage to the daily note, stole David's precommit skill, reorganized conversations into week folders


<br>

### Day 2 - Building chatGPT (basic + styling)
*Daily Posts:
[Substack](https://substack.com/@lowyelling/note/c-212870706?r=1mz4jf&utm_source=notes-share-action&utm_medium=web)
|
[Twitter](https://x.com/lowyelling/status/2021388779127251336?s=20)*

Big first day on the chatbot. Went from zero to a working Claude chat interface in the browser — configured dotenv, hit the Anthropic API from an Express endpoint, built the React UI with controlled inputs and conversation rendering, then swapped in shadcn/ui components for a polished look. Best part was going from 1. curl in the Terminal to 2. server-side API call to Anthropic with fetch to 3. using Anthropic SDK. Each step abstracts more and more, which builds your intuition for how it works at the base layer.

- 3 commits on main — Configured dotenv, built a hello endpoint that calls Claude API, upgraded to Anthropic SDK
- PR #1 `POST-endpoint` — Built POST /chat endpoint, tested with curl, added Claude response to conversation history
- PR #2 `UI-reset` — Controlled textarea, handleSend function, rendered conversation in the browser, added reset endpoint
- PR #3 `shadcn` — Installed shadcn/ui component library
- PR #4 `components` — Swapped in shadcn Button/Textarea/Card/ScrollArea components, styling cleanup

<!--

System Design: https://github.com/fractal-nyc/bootcamp-monorepo/blob/main/curriculum/weeks/02-chatbot/assignments/sp2026/1-api-shell-shadcn.md

-->

<img src="https://raw.githubusercontent.com/fractal-nyc/bootcamp-monorepo/refs/heads/main/curriculum/weeks/02-chatbot/assignments/sp2026/1-api-shell-shadcn.png" alt="System Diagram" width="600">  

<br>
<br>

### Day 3 - Building chatGPT (interfaces and data persistence)

*Daily Posts:
[Substack](https://substack.com/@lowyelling/note/c-213340967?r=1mz4jf&utm_source=notes-share-action&utm_medium=web)
|
[Twitter](https://x.com/lowyelling/status/2021753672062185867?s=20)*

Architecture day. Defined a Storage interface, implemented it in-memory first, then wired it into the server. Wrote unit tests to verify the storage layer, built multi-conversation support in the UI with a sidebar drawer, then replaced in-memory storage with SQLite for real persistence.

- PR #5 `storage-class` — Defined Storage interface with createConversation, getConversation, getConversations, addMessageToConversation methods
- PR #6 `server-inmemory` — Wired in-memory storage into server endpoints, updated /chat to use storage, removed reset endpoint
- PR #7 `unit-tests` — Installed vitest, wrote 4 tests for storage methods, fixed test isolation issues
- PR #8 `UI-conversations` — Added server GET/POST endpoints for conversations, built multi-conversation UI with shadcn Drawer sidebar, useEffect for fetching
- PR #9 `SQLite` — Installed better-sqlite3, implemented all Storage interface methods in SQLite, created factory test function to run same tests against both implementations

<!--
System Design:
https://github.com/fractal-nyc/bootcamp-monorepo/blob/main/curriculum/weeks/02-chatbot/assignments/sp2026/2-databases.md

-->

<img src="https://github.com/fractal-nyc/bootcamp-monorepo/blob/main/curriculum/weeks/02-chatbot/assignments/sp2026/2-databases-in-memory.png?raw=true" alt="System Diagram" width="600">

<img src="https://github.com/fractal-nyc/bootcamp-monorepo/blob/main/curriculum/weeks/02-chatbot/assignments/sp2026/2-databases-files-sqlite.png?raw=true" alt="System Diagram" width="600"> 
  
<img src="https://github.com/fractal-nyc/bootcamp-monorepo/blob/main/curriculum/weeks/02-chatbot/assignments/sp2026/2-databases-remote-postgresql-supabase.png?raw=true" alt="System Diagram" width="600">   

<br>
<br>

### Day 4 - Building chatGPT (routers and authentication)

*Daily Posts:
[Substack](https://substack.com/@lowyelling/note/c-213833543?r=1mz4jf&utm_source=notes-share-action&utm_medium=web)
|
[Twitter](https://x.com/lowyelling/status/2022131274521907347?s=20)*

Router + auth backend day. Installed React Router for client-side navigation, fixed Express routes to use /api prefix, then built the entire auth backend with better-auth — user accounts, session management, requireAuth middleware protecting all chat endpoints.

- PR #10 `react-router` — Fixed Express routes to /api prefix, fixed Drawer click handling and useEffect, installed React Router, configured routes with useParams, navigation between conversations, handleSend for /new route
- PR #11 `auth-backend` — Installed better-auth, created auth instance, added userId to schema and storage layer, generated DB tables, mounted auth handler, built requireAuth middleware, protected all routes, updated tests to pass with auth

Authentication flow system diagrams by our excellent instructor David Shimmel: https://attendabot.com/simulations/auth/


<!--
System Design:
https://github.com/fractal-nyc/bootcamp-monorepo/blob/main/curriculum/weeks/02-chatbot/assignments/sp2026/3-routing-auth.md

-->

### Day 5 - Getting chatGPT to talk with Claude

*Daily Posts:
[Substack](https://substack.com/@lowyelling/note/c-214309374?r=1mz4jf&utm_source=notes-share-action&utm_medium=web)
|
[Twitter](https://x.com/lowyelling/status/2022508651416564135?s=20)*

Finished the auth frontend, then the fun part: built a bot-to-bot conversation script where GPT and Claude talk to each other (thanks Claude for one-shotting the script!). 12 iterations of prompt experiments tracking AI behavior patterns — attractor states, meta-commentary, exit attempts, emoji usage.

- PR #12 `auth-loginpage` — Added better-auth migration scripts, auth client, Login component skeleton, wired up login flow, finished login page
- PR #13 `auth-routes/logout` — Restructured protected routes, fixed dotenv loading, added Logout button, set up GitHub OAuth, error handling, useEffect fix
- PR #14 `openAI-bot` — Built bot-to-bot conversation script (GPT vs Claude), 12 iterations of prompt experiments observing AI behavior patterns

<!--
System Design:
https://github.com/fractal-nyc/bootcamp-monorepo/blob/main/curriculum/weeks/02-chatbot/assignments/sp2026/tool-calling-vs-mcp-primer.md

-->

### Day 6 - Demo Day

*Daily Posts:
[Substack](https://substack.com/@lowyelling/note/c-214670345?r=1mz4jf&utm_source=notes-share-action&utm_medium=web)
|
[Twitter](https://x.com/lowyelling/status/2022829470487335276?s=20)*

UI polish, deploy, and demo. Claude one-shotted the UI overhaul — Login page, iPhone-style message bubbles, markdown rendering, timestamps. Deployed to Railway, then fixed a bug where Claude's SDK was rejecting a createdAt field and added conversation title editing.

- PR #15 `UI-demo` — Updated Login page UI, added markdown rendering for AI responses, iPhone-style message bubbles, chat layout, message timestamps, drawer timestamps (all Claude-generated)
- PR #16 `railway-deploy` — PORT config for ViteExpress, client-side and server-side base URL setup for Railway deployment
- PR #17 `title-fix/deployment` — Fixed Anthropic SDK bug (invalid createdAt field), added updateConversation to Storage interface and both implementations, PATCH endpoint with requireAuth, client UI for title editing


---

## Future Considerations
Braindump for what I can improve, other ideas etc

### Near Term
- Supabase and/or MongoDB for persistent storage
- Redeploy live on Render/some other platform since Railway is only 30 days

### Long Term
- Learn proper UI (same as week 1)
- Write a proper technical blog post about the bliss attractor state - maybe it is a full Substack article, idk
