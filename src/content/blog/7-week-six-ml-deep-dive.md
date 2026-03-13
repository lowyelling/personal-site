---
  title: "Week Six - Can AI Automate My Writing? Part 2"
  date: 2026-03-14
  description: "Fine tuning continued during ML/AI week at Fractal "
  draft: true
---


## Reflection


---
<br>

### Learning about Learning
- Week 6 = 28+ conversations. ~$76+ in Claude API costs (through Mar 12, still in progress!)


### Key Concepts
- 

### Random
- My mulled wines/hot toddies are way better than the one I got at a bar...should've picked the normal apple cider
- Placing in a contest feels like a regular day. Getting the writing out was the real catharsis.


---
## Tech Stack
- **Terminal:** Still inside VS Code :)
- **IDE:** Visual Studio Code
- **Github:** [Voice Fine-Tuning repo](https://github.com/lowyelling/voice-fine-tuning)
- **AI:** Claude Code Opus 4.6
- **Languages:** Python, Markdown (training data curation)
- **Models:** LLaDA 8B (masked diffusion fine-tuning via QLoRA)
- **ML Libraries:** transformers, peft==0.9.0 (LoRA adapters, pinned for compatibility), bitsandbytes (4-bit quantization), datasets, accelerate
- **Custom Training:** LLaDA required writing a custom training loop (SFTTrainer assumes autoregressive loss) and custom inference loop (`model.generate()` assumes left-to-right decoding)
- **Data Processing:** tiktoken (tokenization), custom Python scripts (preprocess, format, truncate). Reused existing `llama_train.jsonl` pairs for LLaDA — same data, different training mechanism
- **Training Infrastructure:** Google Colab with GPU progression: T4 (16GB) → L4 (24GB) → A100 (40GB) → RTX PRO 6000 Blackwell (96GB). Each upgrade driven by OOM errors at the previous tier. Google Drive for checkpoint persistence. Continued using the 100 compute credits.
- **Frontend:** None
- **Backend:** None
- **Database:** None
- **Testing:** Canary prompts (A/B/C fixed across all runs) + one-variable-at-a-time experiment isolation. Six LLaDA experiment runs testing: learning rate, temperature, quantization precision, block length, inference steps, EOS handling. Evals skipped in favor of human judgment. 
- **Dev Tooling:** HuggingFace Hub (model access), JSONL training format
- **Live Deployment:** None (research project)
- **System Diagrams:** None this week!

---
## Daily Logs

My daily posts on Substack/Twitter and the daily summaries below are fully written by me. For the bulleted PR logs, I let Claude Code read my git commit history and write the summaries, with me as the editor.

<br>

### Day 36 - Monday

*Daily Posts: [Substack](https://substack.com/@lowyelling/note/c-225234136?r=1mz4jf&utm_source=notes-share-action&utm_medium=web)*

One of the least productive days in recent memory, and it was still fairly productive compared to my old baseline. 

Spent time trying to go over bootcamp [day 1 materials](https://github.com/fractal-nyc/bootcamp-monorepo/blob/main/curriculum/weeks/06-models-and-evals/sp2026/day1.md) and having Claude help me make a [bash-based voice transcription tool](https://github.com/lowyelling/lilywhisper). 

The sun came out today in NYC :O

// insert lily-whisper

<br>

### Day 37 - Tuesday

*Daily Posts: [Substack](https://substack.com/@lowyelling/note/c-225786836?r=1mz4jf&utm_source=notes-share-action&utm_medium=web)*

Another unproductive but immensely happy day. Accidentally got into Substack beef with the gracious and excellent Erik Hoel, reviewed a technical blog post by my classmate, scored 4/5 on [NYT quiz](https://www.nytimes.com/interactive/2026/03/09/business/ai-writing-quiz.html) AI vs human writing (too quickly dismissed Carl Sagan smh), researched a potential internship opportunity. 

Stretched and journaled on the Fractal rooftop with my lovely cohort. 

Finally, also attended a book launch featuring Kat Rosenfeld. A much needed wordceling day. 

// insert lily-whisper

<br>

### Day 38 - Wednesday

*Daily Posts:
[Substack](https://substack.com/@michaeldean9/note/c-226453464?r=1mz4jf&utm_source=notes-share-action&utm_medium=web)
|
[Twitter](https://x.com/lowyelling/status/2032129503300878679?s=20)*

Placed 3rd in the Best Internet Essays of 2025. Announcement finally came out so I could blast it everywhere. 

Spent time finishing up the portfolio section of this website. Was avoiding doing it for as long as I could, but we needed to submit our profiles for recruiting so a "WIP under construction" wasn't gonna cut it anymore. 

// insert personal-site

<br>

### Day 39 - Thursday

Skipped daily post ;(

Real work day today with fine-tuning LlaDa. Most of this blog post is about work done on Thursday. 

Went out for drinks afterwards. Only the 2nd time I've had drinks since moving to NYC end of January. 

// insert voice-fine-tuning

<br>

### Day 40 - Friday

*Daily Posts:
[Substack](d)
|
[Twitter](hd0)*

Today is Friday woohoo! Spent the time napping and writing this blog post. 

<br>

### Day 41 - Saturday - Blog Demo Day

To be written after Saturday blog exchanges are done! I'll link the blogs I reviewed :) 

---

## Future Considerations
Braindump for what I can improve, other ideas etc

### Near Term
- Actually go through our bootcamp materials in detail


### Long Term
- Learn maths
- Get a PhD or something