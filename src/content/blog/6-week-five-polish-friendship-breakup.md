---
  title: "Week Five - Friend Breakup: A Data Story"
  date: 2026-03-08
  description: "Polish something you know you can do"
---
App link

Gif

I felt curious and then calm. Doing this project helped pull me out of the future of work/work identity crash out. 

Looking at it now that it's (mostly) done, there's a sense of peace and appreciation for what I think is a beautiful artifact. 

For others - I don't think about other people tbh when I share anything these days. But if someone sees it and can relate to it, that's great. Sometimes the super personal is how you get to the universal.


## Reflection





---
## Tech Stack
- **Terminal:** Still inside VS Code :)
- **IDE:** Visual Studio Code
- **Github:** [Discord Dashboard repo - private, sorry!](https://github.com/lowyelling/discord-dashboard)
- **AI:** Claude Code Opus 4.6
- **Languages:** Python, TypeScript
- **Frontend:** React 19, Vite 7, TypeScript 5.9
- **Data Visualization:** D3.js v7 — custom-built charts (streamgraphs, heatmaps, latency EKGs, bar charts, line charts, annotation timelines). No charting libraries.
- **NLP & Sentiment:** sentence-transformers (semantic embeddings for TextTiling topic segmentation), VADER (valence/sentiment analysis), OpenAI Whisper (voice message transcription)
- **Data Processing:** pandas, NumPy, custom Python pipeline (parse → metrics → export)
- **Data Formats:** Discord JSON exports → Parquet (intermediate) → JSON (dashboard consumption)
- **Exploratory Analysis:** Jupyter notebooks (8 notebooks: exploration → activity → embeddings → topics → bids → Gottman → TextTiling → valence), Plotly (notebook visualizations)
- **Backend:** None (static site, all data pre-computed)
- **Database:** None (static JSON pipeline)
- **Testing:** Manual notebook-based validation
- **Dev Tooling:** ESLint, typescript-eslint, setuptools (Python packaging)
- **Live Deployment:** Vercel
- **System Diagrams:** Pen and paper

---
## Daily Logs

My daily posts on Substack and Twitter are fully written by me. For the PR logs below, I let Claude Code read my git commit history and write the summaries, with me as the editor.

We had one system design lecture this week on web crawling! I think on Wednesday the 25th. Our instructor made this fun simulation about [scaling to millions](https://attendabot.com/simulations/scaling)

<br>

### Day 28 - Sunday

I wrote and published [What AI is really doing to work](https://furniturecoins.substack.com/p/what-ai-is-really-doing-to-work) on Substack.

The future of work was causing me to crash out last week and half of this week...a self-induced problem! 

<br>

### Day 29 - Monday

Skipped daily post ;(

No PRs; too busy crashing out about work identity. My former friend texted me to end our relationship formally, which didn't help the crash out. I exported oue raw Discord message history with a nice CLI tool, so I toyed around with the idea of rebuilding it, but [Discord Chat Exporter](https://github.com/Tyrrrz/DiscordChatExporter) was pretty perfect already. So then I considered making a Substack tool, but exploring Substack's [API for Developers](https://support.substack.com/hc/en-us/articles/45099095296916-Substack-Developer-API) page made me ragequit. They have a single GET endpoint for looking up a LinkedIn profile on Substack...bro, if this is your API support, just put a "fuck you" page instead ok? Save us both the trouble.

I could barely tolerate Substack to begin with, and now I really can't stand it. 

Nonetheless, I'll probably still build a Substack Export Tool because yes, I want to export my stuff off their ridiculous platform. 

<br>

### Day 30 - Tuesday

Skipped daily post ;(

Still crashing out. I checked in with my Claudebook re: my learning patterns and tested out a "voice DNA" Claude skill for capturing writing voice patterns. The guy who made the skill proclaimed: "i got claude to actually sound like me, and it's kinda ruining my ability to tell which drafts i wrote myself lol" - total bullshit. Either a pure marketing gimmick, or his writing really is that terrible. 

Wrote most of my [week four blog post](https://www.lowyelling.com/blog/5-week-four-do-the-impossible). 

<br>

### Day 31 - Wednesday

Skipped daily post ;(

Decided to go full tech bro and turn my dead friendship into a data science project. Went through a full compound engineering loop: brainstorming, planning, work, code review. Thanks Claude skills!

- 3 commits on main — Scaffolded the repo, added brainstorm and PRD docs, added initial Python scripts (parser + metrics)
- PR #1 `plan` — Addressed all P1 code review findings: privacy fixes, parquet list handling, clustering corrections, row count validation

<br>

### Day 32 - Thursday

*Daily Posts:
[Substack](https://substack.com/@lowyelling/note/c-223691610?r=1mz4jf&utm_source=notes-share-action&utm_medium=web)
|
[Twitter](https://x.com/lowyelling/status/2029725032612778114?s=20)*

Crashout half-exited. Went from Jupyter notebooks to a working NYT-style scrollytelling dashboard with 6 d3.js visualizations. I did ask Claude briefly whether analyzing a friendship through data is even a healthy thing to do, but decided to continue down my sociopathic path. 

- PR #2 `review` — Compound engineering review of notebooks and pipeline code
- PR #3 `work` — Massive cleanup: vectorized response_latency from O(n²) to O(n), extracted dead_air_gaps(), fixed timezone handling, hardened Claude API parsing with caching, replaced sys.path hack with pip install -e ., saved row-level metrics for dashboard drill-down
- PR #4 `plan2` — Added extract_bid_pairs and create_conversation_chunks to metrics module, built notebooks 05-bids and 06-gottman for relationship dynamics analysis
- PR #5 `nb5-6` — Fixed bids notebook (idempotent merge, retry failed pairs, filter noisy months), re-scored Gottman horsemen as interpersonal-only, deduplicated bid pairs in metrics
- PR #6 `dashboard` — The big one: brainstorm and implementation plan docs, reorganized data into pipeline/cache/metrics/raw, built parquet-to-JSON export script, created the React + D3 scrollytelling data essay with 6 initial visualizations

<br>

### Day 33 - Friday

Skipped daily post ;(

Story building and feedback time. Iterated on charts, wrote narrative content. Feedback from two peers made their way into the dashboard - shoutout to John for the emotional valence idea and Josh for removing the left-to-right Github scrolling. 

- PR #7 `datastory` — Replaced bid/Gottman charts with shadow profile story arc, added asymmetry toggle (initiation vs presence vs volume), contribution ratios with hover tooltips, voice message latency chart, text latency prototypes, river graph with zero-baseline stacked area styling, fixed EKG time domain axis
- PR #8 `plan3` — Added README (oops finally), brainstorm docs for 4 planned features (TextTiling, content refactor, valence scoring, scrollytelling), Claude-reviewed all plans
- PR #9 `refactor/markdown-content` — Extracted all narrative content from App.tsx into a markdown file with a Python parser, built a Vite plugin for content.md hot reload, unified annotation data shape across all charts
- PR #10 `feat/texttiling` — Implemented TextTiling topic segmentation with sentence-transformers embeddings achieving 100% message coverage, addressed code review findings (2 P1, 5 P2), added architecture and product docs

<br>

### Day 34 - Saturday - Demo Day

*Daily Posts:
[Substack](https://substack.com/@lowyelling/note/c-224547686?r=1mz4jf&utm_source=notes-share-action&utm_medium=web)
|
[Twitter](https://x.com/lowyelling/status/2030403808526778689?s=20)*

Ship and demo day! Switched from HBDscan to TextTiling for the final river charts, polished every chart, and [deployed on Vercel](https://goodbyefriend.vercel.app/). 

- PR #11 `feat/valence` — Built emotional valence scoring pipeline for conversation segments using VADER sentiment analysis
- PR #12 `scrolltell` — Prototype page combining TextTiling topic segmentation with emotional valence charts
- PR #13 `demo` — Final polish: swapped all charts from HBDscan to TextTiling view, added SVG emotional valence on hover, built a general on-hover asides system for markdown content, renamed "User A/B" to "Friend #1/Friend #2", stripped HTML comments from prose parser, finalized the shadow profile chart
- 4 commits on main — Deployed to Vercel: committed JSON data files for build, resolved TypeScript errors, added vercel.json config

<br>

---

## Future Considerations
Braindump for what I can improve, other ideas etc

### Near Term
- Add signature - a "Made by lowyelling" somewhere
- Make the on-hover sparkline charts much larger! They're tiny right now
- Update verbiage; some of the sections (especially on hover) could use a second pass


### Long Term
- Could this be a real product (or open source tool?) I don't want to be in charge of anyone's private/personal data, nor do I want to keep paying for an API key
- But if I were to productize this in some day, it'd have to be two separate products: 1) Python analysis layer and 2) Data visualization layer
- Python part would be relatively easier (extract Jupyter notebook functions)
- Data viz is hard because every relationship story is different
- Maybe this is the one I host on Raspberry Pi :)
