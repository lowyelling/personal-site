---
  title: "Week Four - Can AI Automate My Writing?"
  date: 2026-03-03
  description: "Challenged to do the impossible with AI"
---

First week I slipped on the daily Tech Bro posts. 


## Reflection



<br>

### Learning about Learning
- Week 3 = 39 conversations. ~$80 in Claude API costs
-

### Key Concepts
- Temporal


### Random
- 


---
## Tech Stack
- **Terminal:** Still inside VS Code :)
- **IDE:** Visual Studio Code
- **Github:** [Voice Fine-Tuning repo](https://github.com/lowyelling/voice-fine-tuning)
- **AI:** Claude Code Opus 4.6
- **Languages:** Python, Markdown (training data curation)
- **Models:** Llama 3.1 8B (LoRA fine-tuning), GPT-2-XL (full fine-tuning)
- **ML Libraries:** transformers, peft (LoRA adapters), bitsandbytes (4-bit quantization), datasets, accelerate
- **Data Processing:** tiktoken (tokenization), custom Python scripts (preprocess, format, truncate)
- **Training Infrastructure:** Google Colab (T4 GPU, free tier but I did pay for 100 compute credits), Google Drive (checkpoint persistence)
- **Frontend:** None
- **Backend:** None
- **Database:** None
- **Testing:** Manual evaluation via canary prompts + scoring rubric (very loosely...)
- **Dev Tooling:** HuggingFace Hub (model access), JSONL training format
- **Live Deployment:** None (research project)
- **System Diagrams:** Pen and paper, Excalidraw (why doesn't Excalidraw let you make a free account??)

---
## Daily Logs

My daily posts on Substack and Twitter are fully written by me. But for the PR logs below, I let Claude Code read my git commit history and write the summaries, with me as the editor.

We had one system design lecture this week, I think on Wednesday the 25th. Our instructor made this fun simulation about [scaling to millions](https://attendabot.com/simulations/scaling)

<br>

### Day 21 - Blizzard day one!

First Sunday I actually rested. Besides doing chores, I basically spent all day sleeping.

### Day 22 - Blizzard day

*Daily Posts:
[Substack](https://substack.com/@lowyelling/note/c-218614487?r=1mz4jf&utm_source=notes-share-action&utm_medium=web)*

Walking through fresh powder in the middle of usually busy roads was amazing. 

Class was canceled which I don't think ever happens with Fractal, but 7 people/half the group still made it in today. We spent the day thinking about what it means to do the impossible with AI. I had no interest in trying anything except automating my writing, so I looked into research papers and talked to Claude about it all day. 

<br>

### Day 23 - Project Setup and Planning Docs

*Daily Posts:
[Substack](https://substack.com/@lowyelling/note/c-219336442?r=1mz4jf&utm_source=notes-share-action&utm_medium=web)
|
[Twitter](https://x.com/lowyelling/status/2026837788012740802?s=20)*

Skipped posting a Tech Bro daily, shared photos I stole from Julian instead. Wish I made it to Central Park myself yesterday! 

Otherwise, today was repo creation and architecture day. Used compound engineering e.g. Claude's plan skill to generate the initial docs (PRD, engineering design doc, execution plan), then had a second Claude instance review and make significant updates. Set up both Colab training notebooks.

- Initial commit: README, project docs, gitignore
- Made plan using compound engineering — one Claude instance drafted, another reviewed and revised
- Added Llama 3.1 8B and GPT-2-XL Colab notebooks (second Claude caught and fixed an error in GPT-2's)
- Added PRD detail on text diffusion models (research horizon, all Claude-written)
- PR #1 plan — Project foundation: docs, notebooks, and 3 GPT-2 fixes for full open-source model differences

<br>

### Day 24 - Canary Prompts and Smoke Test

*Daily Posts:
[Substack](https://substack.com/@lowyelling/note/c-219836742?r=1mz4jf&utm_source=notes-share-action&utm_medium=web)
|
[Twitter](https://x.com/lowyelling/status/2027038366877790565?s=20)*

Caught up on blog posts! On low energy days, it feels good to write a lot. 

I also ran the first end-to-end smoke test on 3 pairs of training data, a term from hardware engineering. Made sure the whole pipeline runs on very limited data before I went off to get more data. 

- Wrote canary prompts v1, then edited to be more generalized
- Added cell maps and output-saving steps to both notebooks
- Generated GPT-2 baseline outputs and Llama outputs (10min run)
- GPT-2 smoke test passed — experiment logs written by Claude
- Fixed Llama: HF_TOKEN, training data loading, warmup steps (10→2)
- Fixed Llama: swapped data collator — model was training on full sequence including chat/user prompt, causing training loss to increase
- Llama smoke test passed — training loss still increased on round 2, possibly noise
- PR #2 canary-smoke — End-to-end pipeline validated: canary prompts, baselines, and 3-pair smoke test for both models

<br>

### Day 25 - "Do the impossible - make AI automate my writing"

*Daily Posts:
[Substack](https://substack.com/@lowyelling/note/c-220312774?r=1mz4jf&utm_source=notes-share-action&utm_medium=web)
|
[Twitter](https://x.com/lowyelling/status/2027199229664379308?s=20)*

Actually wrote my daily Tech Bro post today! Also had Claude build out the entire data processing pipeline, connected GitHub to Colab, then ran 15-pair training on both models. GPT-2 at 15 pairs was noticeably better. Llama was heading in the right direction on voice. After our instructor came by to chat about my project, I realized I should create some sort of front-end/inference notebook too. So Claude built a Gradio web UI where each model got its own T4 GPU runtime.

- Built Python scripts: preprocess (strip Substack artifacts), footnote extraction, token budget analyzer, prompts→Llama pairs, Llama→GPT-2 truncation
- Connected GitHub to Colab — no more manual notebook reuploads
- Tracked JSONL training files in repo so Colab can clone them directly
- Updated Llama max sequence length to 8192 with gradient checkpointing
- 15-pair training results: GPT-2 noticeably better, Llama heading right direction on voice
- Built Gradio web UI for live inference, split into two notebooks for two T4 runtimes
- PR #3 15-pairs — Data pipeline + 15-pair training runs with experiment logs
- PR #4 web-ui — Gradio inference UI for live model comparison

<br>

### Day 26 - Full Dataset Training

Skipped daily post ;(
  
A lot of manual work today creating the full dataset: 158 training pairs for both models. Had to adjust Llama's Colab settings to fit T4 GPU memory constraints. Logged results for both models. Added optional training data upload from GitHub or local for training data privacy. 

- Added optional GitHub/local training data upload to Colab notebooks
- Changed Llama settings to fit T4 GPU constraints
- GPT-2 158-pair results logged
- Llama 158-pair results logged
- PR #5 full-pairs — Full dataset preparation and JSONL formatting
- PR #6 train — Full dataset training runs for both models

<br>

### Day 27 - Demo Day

*Daily Posts:
[Substack](https://substack.com/@lowyelling/note/c-221437299?r=1mz4jf&utm_source=notes-share-action&utm_medium=web)
|
[Twitter](https://x.com/lowyelling/status/2028142357703483825?s=20)*

Instead of writing about Demo Day, I wrote about partying it up with NYC models which might be the most glamorous thing that'll ever happen to me. 

My demo slides - 3 min once again. I actually had about 45 sec left to fill. 

<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vTgm3_5ZiKWqa7GUyMf9P7kgGQ_62y_XBs1PX7H9oTIW6MaogkyWpczBlesEoTxs9vSEM7jAlizA9Sp/pubembed?start=false&loop=false&delayms=3000" frameborder="0" width="600" height="338" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>


Could've prepped a lot more for the demo. Claude helped update the Gradio UI to show base vs fine-tuned outputs side by side with canary prompts. I then spent the rest of the morning fighting the Demo Gods: added request queues so live demo traffic wouldn't crash Llama, fixed PyTorch overloading CPU RAM by having GPT-2 stream weights by shard, password-gated Llama access, and ultimately had to restrict to GPT-2-only for the live demo.

- Combined inference into one notebook with updated Gradio UI (base + canary outputs)
- Added request queues to prevent live demo from crashing Llama
- Fixed RAM: PyTorch overloading CPU — GPT-2 now streams weights by shard instead of loading all at once
- Password-gated Llama for the demo
- Final fallback: demo loads GPT-2 only (Llama too heavy for live traffic on free Colab T4)

<br>

---

## Future Considerations
Braindump for what I can improve, other ideas etc

### Near Term
- Publish permanent Gradio link

### Long Term
- Redesign training pairs so that each essay is broken into paragraphs, 10x the training data
- Switch infrastructure from Google Colab to headless GPUs e.g. Modal
- Add in other low hanging fruit training data e.g. Twitter threads
- Write a lot more so that I increase my training dataset
- Try discriminator and generator model pairs
- Try text diffusion models
