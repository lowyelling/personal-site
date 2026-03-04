---
  title: "Week Four - Can AI Automate My Writing?"
  date: 2026-03-04
  description: "Do the impossible with AI with voice fine-tuning"
---

First week I slipped on the daily Tech Bro'ing out at Fractal posts. Blame the blizzard! 

Nah, I was just having an off-week. Still having an off-week, to be honest. Hope it'll be cured once I finish writing this blog post. The process of writing almost never makes me feel better, but I think it uncongests a lot of background noise. If you're curious about one of the things making me low-key crash out, I [published an article](https://furniturecoins.substack.com/p/what-ai-is-really-doing-to-work) earlier this week re: the future of white-collar work. Soon after I published, I learned about [Howard Marks](https://substack.com/inbox/post/189345212) and what [he had to say](https://www.oaktreecapital.com/insights/memo/ai-hurtles-ahead) last month about AI and labor. It's time to start smoking again. #itsjoever

But actually, we're so back. I'm grieving and wondrous at the same time. Living in contradiction, as my bio says everywhere. I want to cry, but the tears won't come, and I'm not sure if they're tears of joy or sadness or both/neither. Such an expansive claustrophobia. In any case, Howard Marks ended his investment memo with the right sentiment, a quote I have written down on the cover page of every journal I have: "I'd rather be an optimist and be proven wrong than a pessimist and be proven right." 

Onwards and upwards to post-scarcity space communism. 

## Reflection

Week 4 at Fractal Tech was the first totally unstructured week. I peeked at past cohorts, and they were doing leetcode drills and such in week 4. But now, Claude Code has gotten so good that we'd be remiss not to full send and just Opus-pill and Claude-maxx. Too bad, because I really could use the drills. 

Our challenge: do what you think is impossible using AI. Most classmates went for superscale, inspired by the likes of [isometric NYC](https://isometric.nyc/). We saw some insane demos at the end of week one like [Google Mars](https://google-mars.vercel.app/) and [NYC in Guassian splats](https://supersplat-cyan.vercel.app/). 

But for me, scale is meh. This probably bodes poorly for me as a future software engineer, but I just have to honor my authentic tiny tinkerer self. I don't find it interesting. Scale tempts me to troll incredible engineers like Mr. Isometric NYC with links to my much superior project [Tic Tac Toe](https://www.lowyelling.com/blog/2-week-one-tic-tac-toe). 

For real though, what IS interesting to me is highly personal (and unfortunately PhD frontier research). 

I think it's impossible for AI to automate my writing. Or to generalize, writing in general. It's counterintuitive to me that AI can in fact draw but cannot write. I really thought the opposite would be true. And I'm not saying this out of my usual vibes-based analysis either; I'm a very good painter, and an even better writer (or more specifically, I have a much higher ceiling with writing than I do art). You can be the judge yourself once I get my art portfolio up and running on this site. For now, see my [single Substack post](https://furniturecoins.substack.com/p/how-i-arted) about my art gallery showing as proof.

Thus my week was spent on a data science/machine learning experiment. I cracked open the black magic box to fine-tune AI to sound like me, trained on my own data. This was a totally different stack from the usual fullstack webapp stuff: Python, opensource models like GPT-2 and Llama, ML libraries etc. I remember a bit of Python from my once-in-a-blue moon scripting days (I still write .append everytime I mean to write .push, curse you Javascript), but Claude basically did all the work for me. It wrote my preprocessing scripts, setup my Google Colab notebooks with the opensource models, even ran the Google Colab notebook via Claude in Chrome. The real work though was done and bottlenecked by me: my own writing samples and my curated training dataset. 

Unfortunately, I only had about ~20 articles, ~8 of which were real essays, and about 170 or so shorter Substack Notes that could be used for training. I need about 10x the amount to even qualify as a small training dataset, so I better write a helluva lot more over the next few years if I want to really automate my writing. But maybe we'll hit AGI by then, so who cares if AI can write like me? 

So spoiler alert: neither GPT-2 nor Llama were able to sound like me by the end of the week. Not even close. On occasion, they would spit out a directionally correct sentence i.e. mean and homosexual sounding, but the training loss curves indicate they were more likely memorizing than generalizing, especially GPT-2. Pretty normal for a tiny dataset of ~160 prompt-response pairs and ~10 holdouts. 

I'll stop here and consider writing a more technical blog post explaining my reasoning with links to papers and such, because I want to continue this experiment over the years. My hunch is that AI can't write because of architectural (and maybe mathematical?) limitations. AI image generators are great at taking metaphorical descriptions and slowly diffusing the whole canvas over time to mood match. They "see" the whole painting from the very beginning. However, LLMs output text in a linear fashion, even though the writing process is just as nonlinear as the painting process. So my intuition says that using an AI image generation process for writing would get us much closer to automating writing, and lo and behold, frontier research into text diffusion models like (LlaDA)(https://huggingface.co/GSAI-ML/LLaDA-8B-Base) are attempting to tackle this very problem. The tricky part is that pixels are continuous, whereas text is discrete, so you probably have to do some weird advanced math to make it work. Each day my regret at not studying mathematics grows ever stronger. 


### Learning about Learning
- Week 4 = 42 conversations. ~$120 in Claude API costs
- Claude sees to fixate on time pretty heavily. I made the mistake of telling it was week 4 at Fractal, so it kept the scope of my project much smaller than it could've been e.g. I could've used headless GPUs instead of Google Colab
- Claude hates spinning up subagents on its own - you have to ask it explicitly


### Key Concepts
- Philosophical conversations lead to technical decisions e.g. I asked why earlier models were better at writing poetry, and thus GPT-2 was added to the experiment
- Constraints are teachers e.g. GPT-2 1,024 token limit

### Random
- Want to try Lattice + context engineering
- Want to try literally speaking to Claude through a local voice model


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
