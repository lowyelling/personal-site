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
- Week 5 = 38 conversations. ~$151 in Claude API costs


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

We had one system design lecture this week on [web crawling](https://github.com/fractal-nyc/bootcamp-monorepo/blob/main/curriculum/system-design/web-crawler/web-crawler.md), which was excellent. I loved the topic and I enjoy system design lectures. Lecture was Wednesday the 4th, then we had two recitations on it Thurs and Sat. I called the diagram a [spider-looking thing](https://github.com/fractal-nyc/bootcamp-monorepo/blob/main/curriculum/system-design/web-crawler/web-crawler.png?raw=true)

<br>

### Day 36 - Monday

Skipped daily post ;(

*Daily Posts:
[Substack](https://substack.com/@lowyelling/note/c-223691610?r=1mz4jf&utm_source=notes-share-action&utm_medium=web)
|
[Twitter](https://x.com/lowyelling/status/2029725032612778114?s=20)*

<br>

### Day 37 - Tuesday

Skipped daily post ;(


<br>

### Day 38 - Wednesday

Skipped daily post ;(

<br>

### Day 39 - Thursday


<br>

### Day 40 - Friday


<br>

### Day 41 - Saturday - Demo Day!


---

## Future Considerations
Braindump for what I can improve, other ideas etc

### Near Term
- 


### Long Term
- 