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
-


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



<br>

### Day 37 - Tuesday

Skipped daily post ;(


<br>

### Day 38 - Wednesday

*Daily Posts:
[Substack](https://substack.com/@michaeldean9/note/c-226453464?r=1mz4jf&utm_source=notes-share-action&utm_medium=web)
|
[Twitter](https://x.com/lowyelling/status/2032129503300878679?s=20)*

<br>

### Day 39 - Thursday

Skipped daily post ;(

<br>

### Day 40 - Friday

*Daily Posts:
[Substack](d)
|
[Twitter](hd0)*

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