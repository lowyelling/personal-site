---
  title: "Week Six - Can AI Automate My Writing? Part 2"
  date: 2026-03-14
  description: "Fine tuning continued during ML/AI week at Fractal "
  draft: false
---

>"I'm like a ghost stuck, stuck in the limbo"

A LlaDa [model](https://huggingface.co/GSAI-ML/LLaDA-8B-Base) fine-tuned [on my writing](https://github.com/lowyelling/voice-fine-tuning) produced that eerie line. 

But the rest of the outputs looked more like this:

> **Prompt:** Write a personal Substack Note/Tweet about class in America, told from the perspective of a Chinese first generation immigrant whose family is lower-middle class
>
> **Output:** I love America because I am able to breathe my life.
>
> I love America because I am breathe to breathe my life.
>
> I love America because I am breathe to breathe my life.
>
> I love America because I am breathe to breathe my air.
>
> I love America because I am breathe to breathe my air.
>
> I love America because I am able to breathe my air.
>
> I love America because I am able to breathe my air.
>
> I love America because I am able to breathe my air.单项金额assistantassassistant

Honestly, these are #Blacklivesmatter [Stanford-acceptance](https://stanforddaily.com/2017/04/05/admits-outside-the-box-essay-says-blacklivesmatter-100-times/) level outputs. Congrats to LlaDa! 

But seriously...this is nowhere near a "Yes" to my research question: can AI automate my writing? I don't write American propaganda slogans, for one. 

Three weeks ago, I [attempted this fine-tuning experiment](https://www.lowyelling.com/blog/5-week-four-do-the-impossible) on two opensource LLM models, GPT-2 and Llama. I thought LlaDa would perform better than them, but it actually had far worse results. 

Three questions I'll attempt to answer with this round 2 blog post: 
1. What is LlaDa and how is it different from Large Language Models (LLMs)?
2. How did I (or rather, Claude) finetune LlaDa?
3. Why did LlaDa produce mostly gibberish? 


## LlaDa (Large Language Diffusion with mAsking) vs regular LLMs

LlaDa is a text diffusion model, not an autoregressive one like LLMs. Well, what is text diffusion, and what is autoregressive? Let's start with the latter. 

"Auto" = self, "regressive" = looking back at previous values. Autoregressive is first and foremost a statistics term e.g. a time series model. In autoregressive models, each output becomes input to the next prediction so that token *N* is predicted from tokens 1 through *N-1*. Once a token is committed, it joins the context for everything downstream. In other words, autoregressive models generate text in a linear left-to-right fashion. 

A text diffusion model is very different. It borrows architecture from image generators like Dalle-2, Midjourney, Stable Diffusion etc. Diffusion models learn by destroying something, then learning to un-destroy it. Take a photo, sprinkle static over it like an old TV. Sprinkle more, a little more, even more. Eventually it's pure static, no image left. Now train a neural network to reverse each step: given slightly-noisy static, make it slightly less noisy. Stack enough small de-noising steps together, and you can start from pure static and end up with an image. Crucially, the model sees the *whole canvas at once* every pass. It doesn't paint left-to-right; it refines everything simultaneously, committing to the high-confidence regions first (broad shapes, composition) and filling in the uncertain details last.  

Image diffusion works because pixels are continuous. You can add a little Gaussian noise, a lot, or anything in between. But text is discrete. There's no meaningful halfway point between 'the' and 'cat', so you can't add Gaussian noise. LLaDA's genius: replace "add noise" with "mask." Instead of "making pixels noisy", it's "randomly replace tokens with [MASK]," like redacting the Epstein files. Light destruction: redact 10% of perpetrators' names. Heavy destruction: redact 90% of names. Full destruction: redact everything, nothing to see here. Then you can train the model to predict what's behind each [MASK].

To analogize, autoregressive models are typewriters — fully committed once written, no takebacks. LLaDA is an editor/painter that can see the whole draft at once, which is much more similar to the actual writing process. What human writes an essay token by token? A human writes one good sentence and wraps the whole paragraph around it. A human writes the first paragraph, then realizes it should be cut. A human rewrites the conclusion over and over again.   

You can see why I thought LlaDa would be far better for training on voice instead of autoregressive models. The latter hides the inherently nonlinear process of writing, while the former is truer to the real process of writing. 

## Fine-tuning LlaDa

### Setup

Same data as [week 4](https://www.lowyelling.com/blog/5-week-four-do-the-impossible): 158 training pairs and 12 validation holdouts, drawn from ~20 Substack essays and ~100 substantive Substack Notes. Each pair has a prompt (one of two tiers) and a response (the finished piece). The two tiers of pairs: opening → continuation (split an essay at paragraph 1-2, model completes it) and thesis → finished piece (given a topic, write the whole thing). The validation pairs come from different essays/Notes than the training pairs to prevent the model from cheating. 

Most important were the three fixed "canary" prompts run before and after each training iteration. These were used to compare apples to apples across runs:
- **Canary A** (known topic, short): Write about class in America as a Chinese first-gen immigrant
- **Canary B** (novel topic, short): Write about Eileen Gu and Alyssa Liu (tests whether the model learned *voice* or just memorized *content*)
- **Canary C** (known topic, long): Write an essay about Jacques Ellul (tests essay-level architecture)

The data and training pipeline: curate pairs in markdown → preprocess with Python scripts → format as JSONL → upload to Google Colab → run canary prompts on baseline -> train on GPU → run canary prompts on inference → save outputs as JSON → convert to readable markdown locally. No programmatic eval layer; I read every output myself for "taste", since presumably I can recognize my own writing voice. 

### LlaDa fine-tuning details

LlaDa training was customized (thanks Claude). The standard HuggingFace tools — `SFTTrainer` for training, `model.generate()` for inference — assume autoregressive generation.  

**Training:** Instead of predicting the next token, LlaDa randomly masks some percentage of the response tokens and predicts all masked positions simultaneously. The loss divides by the masking probability so the model learns equally from light masking (10% redacted) and heavy masking (90% redacted). However, the prompt is never masked and thus fully visible context.  

**Inference:** Instead of `model.generate()`, Claude wrote a `generate_llada` function that starts with the prompt + some distribution of [MASK] tokens, runs a forward pass where the model predicts what goes in every blank, keeps the most confident predictions, remasks the rest, and repeats. 16 steps, each unmasking ~8 tokens, until the whole "canvas" is filled.

**GPUs:** LlaDa doesn't support gradient checkpointing (a memory optimization that trades speed for VRAM), so training required progressively larger GPUs as I pushed sequence length up. I climbed the GPU ladder available on Google Colab: T4 (16GB, OOM) → L4 (24GB, OOM) → A100 (40GB, barely fits) → RTX PRO 6000 Blackwell (96GB, finally breathing room). 


## Why LlaDa produces garbage

TL;DR: I was asking the model to do something it was never designed to do. 

I was generating 1024-token essays/Notes, 8x the model's tested length. Even the base LlaDa model produced gibberish like my example in the intro, and fine-tuning often made the problem worse. 

The LlaDa team's [evaluation page](https://github.com/ML-GSAI/LLaDA/blob/main/EVAL.md) and [paper](https://arxiv.org/html/2502.09992v3) had the following benchmarks: multiple-choice questions (1-3 tokens), math problems (max ~512 tokens), code completion, and classical Chinese poetry couplets (~10 tokens). No essays. No stories. No open-ended creative text. The paper's claim to fame is that "masked diffusion can match autoregressive on standard benchmarks", so parity, not superiority. And certainly not on novel tasks. 

The LlaDa paper doesn't discuss repetition or degeneration because they probably didn't encounter it with their short-form outputs, though they do cite one paper ["The curious case of neural text degeneration"](https://arxiv.org/abs/1904.09751). 


### The degenerating cascade problem

Why does LlaDa degenerate? In an autoregressive model, each token sees a *different* left context. Position 50 builds on positions 1-49. Position 100 builds on positions 1-99. Even if the model gets repetitive, each position has unique context to work from.

In LlaDa, all masked positions see the **same** context simultaneously. When a common token like "the" or "," gets committed with high confidence in step 1, *every* remaining masked position sees it at once. They all become more confident about predicting the same token. Step 2: more common tokens committed. Step 3: cascade. The whole sequence collapses into "conformity conformity conformity" or "Eileen Eileen Eileen Eileen."

The more voice the fine-tuning learns, the worse this gets. Voice fine-tuning makes the model more opinionated aka prefer specific words and rhythms. In a model lilke Llama, that's pure upside. In LlaDa, those opinionated predictions appear at ALL positions simultaneously. **The more voice it learns, the faster it degenerates.**

### Isolating the problem: five experiments, one variable at a time

To isolate the cascading problem, I ran as close to a scientific diagnostic as I could by changing one variable per run. 

But before the systematic experiments, Claude and I fixed the most obvious issue: learning rate. Run 1 used 2e-4 (same as Llama) and produced immediate catastrophe — "class class class," comma cascades, zero coherent words. Run 2 dropped to 5e-5, a 4x reduction, and that single change moved the model from instant degeneration to 30-200 coherent words before collapse. Why such a dramatic cut? LLaDA's loss function has a `1/p_mask` weighting term. This means that when few tokens are masked, the gradient signal is huge e.g. if the model masks 10% of tokens, it's like getting 1 question wrong in a 10 question test that costs 10 points. Whereas masking 90% of tokens means getting 1 question wrong in a 100 question test, which costs just 1 point. But because both types of masking are given equal influence in the model weight nudging, the 10% masking was causing 10x shifts which was best corrected by dropping the learning rate (since model weight updates are `learning_rate x gradient`)

After fixing learning rate, Claude and I toggled variables one at a time. I'll be honest, Claude wrote most of the text below and I'm not sure I can explain what each of these are, but I'm leaving them here for the sake of record keeping. 

**A: Temperature = 0 (greedy) → WORSE.** Was randomness letting bad tokens win. Turns out the randomness was *helping* by breaking symmetry. Without it, every masked position predicts the same common token and they all get committed simultaneously.

**B: Smaller blocks, more steps → PARTIAL.** The LlaDa team found that quality degrades dramatically with too few unmasking steps. Smaller blocks (64 instead of 128 tokens) with more refinement steps: short outputs improved, some fully coherent. Long outputs got more runway before cascading.

**C: fp16 precision, no quantization → PARTIAL.** LlaDa needs to accurately rank confidence across hundreds of positions simultaneously. 4-bit quantization (16 possible values per weight) doesn't have enough resolution as tiny confidence differences get distorted through 32 layers of matrix multiplications. fp16 (65,536 possible values) was both more accurate *and* 2.4x faster which was counterintuitive to me. (Claude says 4-bit actually dequantizes back to fp16 for every computation anyway, which I'm not sure I grok)

**D: Suppress end-of-sequence tokens → WORSE.** EOS tokens were acting as natural filler — once committed, they're "done" and stop competing. Removing them forced every position to be a content token, giving the cascade more surface area.

**E: Combine 5b + 5c → BEST.** Stacked the two changes that helped. This is the run that produced the ghost line in the intro. It also created the best long-form results: ~500 words of coherent essay with section headers, and a new behavior — when one section cascaded, later sections sometimes *recovered*. But short-form generation was arguably destabilized by fine-tuning.

### Fun findings along the way

**Chinese characters leak through during degeneration.** The LlaDa researchers are from the Harvard of China (Beijing University), and their training data includes a [large classical Chinese poetry dataset](https://github.com/ML-GSAI/LLaDA/blob/main/data/poem_data.json). When the model degenerated, it seemed to fall back on Chinese tokens. In one output, the word "technology" in English seamlessly switched to "技术" (jishu / technology) mid-repetition. You'd never see this in an autoregressive model because each token is conditioned on previous tokens, which tend to be a single language. Pretty cool! 

**The base model produces safety refusals** Several baseline canary outputs: "I'm sorry, but I can't assist with that." I was surprised at this, because I didn't think LlaDa had any RLHF (reinforcement learnin from human feedback). Perhaps the web is so saturated with safety outputs that the pattern got absorbed into the pretraining data, so that LlaDa learned refusal as a statistical pattern, not as an alignment behavior. Mimicry without mechanism.

### What next

Two main realizations: I need more training data and I need to break my essays apart into paragraphs (which then produces more training data, solving my first problem!). 

In part 1, I initially saw GPT-2's 1024-token context window as a limitation. But I think it's actually the right constraint for training on voice.

Voice isn't an essay-level property. An essay is *assembled from* paragraphs with voice. Training on full essays asks the model to learn essay architecture AND voice simultaneously, which is asking too much. If I chunked my essays into paragraphs instead, I could get ~1000 pairs from the same source material and isolate the voice signal at the paragraph level. 

More pairs also addresses overfitting — or rather, the two opposite failure modes I saw. GPT-2 memorized aggressively (training loss dropped to 0.83 while validation loss climbed) and LlaDa's validation loss spiked after a single epoch. Llama was the opposite: LoRA's rank-16 constraint prevented memorization, so loss stayed flat, but the canary outputs clearly shifted toward my voice. The loss numbers were undercalling what Llama had actually learned. In any case, more data means more gradient diversity, which should help GPT-2 and LlaDa generalize instead of memorize, and give Llama even more signal.

To end...I'm both glad and not-glad that AI can't automate my writing(yet). It's only a matter of time and skill. The bottleneck, as per usual, is me. 

---
<br>

### Learning about Learning
- Week 6 = 28+ conversations. ~$76+ in Claude API costs (through Mar 12, still in progress!)
- Fine-tuning was interesting, but letting Claude do most of the work was too much "Jesus take the wheels" for me
- I only feel like I'm properly learning if I know the fundamentals, otherwise it all feels too glossy


### Key Concepts
- **Autoregressive vs diffusion:** Two fundamentally different generation mechanisms. Autoregressive = typewriter (left to right, committed once written). Diffusion = editor/painter (sees everything at once, refines by confidence).  
- **The cascade problem:** Bidirectional attention + confidence-based unmasking = positive feedback loop. Common tokens win early → all remaining positions see them → more common tokens win → degeneration. The autoregressive guardrail (each position sees different context) doesn't exist in diffusion.
- **Quantization tradeoffs:** 4-bit saves memory but costs speed and accuracy. LlaDa needs precise confidence *rankings across positions* — 16 possible values per weight isn't enough resolution. fp16 was both more accurate and faster.
- **One variable at a time:** Scientific method applied to ML debugging. Change one thing, observe the result, then stack the winners. This process produced the ghost line.
- **Overfitting:** Model memorizes training data instead of learning generalizable patterns. GPT-2 memorized aggressively (train loss 2.87 → 0.83, val loss rising). LlaDa overfit after a single epoch.I need more data!
- **Working within a model's design:** Pushing beyond a model's natural limits (1024-token essays from a model benchmarked on 3-512 tokens) is probably not a fair test


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
- **Testing:** Canary prompts (A/B/C fixed across all runs) + one-variable-at-a-time experiment isolation. Five LLaDA experiment runs testing: temperature, quantization precision, block length, inference steps, EOS handling. Evals skipped in favor of human judgment. 
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

- PR #1 `bash` — Bash script for push-to-talk dictation: `rec` captures audio → wav file → `whisper-cli` transcribes locally → `pbpaste` into active window. Line-by-line annotated walkthrough and Q&A reference doc covering shebangs, AppleScript vs bash, variable expansion, and the history of delimiter styles from ALGOL to C to modern languages

<br>

### Day 37 - Tuesday

*Daily Posts: [Substack](https://substack.com/@lowyelling/note/c-225786836?r=1mz4jf&utm_source=notes-share-action&utm_medium=web)*

Another unproductive but immensely happy day. Still on [day 1 of bootcamp materials](https://github.com/fractal-nyc/bootcamp-monorepo/blob/main/curriculum/weeks/06-models-and-evals/sp2026/day1.md)[on Github](https://github.com/lowyelling/lilywhisper). [Day 2 materials](https://github.com/fractal-nyc/bootcamp-monorepo/blob/main/curriculum/weeks/06-models-and-evals/sp2026/day2.md) are even more interesting (fine-tuning!) so I will have to make-up for the lesson later. 

Accidentally got into Substack beef with the gracious and excellent Erik Hoel, reviewed a technical blog post by my classmate, scored 4/5 on [NYT quiz](https://www.nytimes.com/interactive/2026/03/09/business/ai-writing-quiz.html) AI vs human writing (too quickly dismissed Carl Sagan smh), researched a potential internship opportunity. 

Stretched and journaled on the Fractal rooftop with my lovely cohort. 

Finally, also attended a book launch featuring Kat Rosenfeld. A much needed wordceling day. 

- PR #2 `learn` — Day 1 ecosystem exploration notes: LM Studio vs Ollama comparison, vocabulary definitions (parameters, inference, quantization), benchmark marketing critique, first local model run (Gemma 3 4B on 8GB RAM — froze my Macbook Air 2022 with the M2 chip, learned why quantization matters the hard way), "Attention Is All You Need" explained, I likened it to PageRank and HDBSCAN

<br>

### Day 38 - Wednesday

*Daily Posts:
[Substack](https://substack.com/@michaeldean9/note/c-226453464?r=1mz4jf&utm_source=notes-share-action&utm_medium=web)
|
[Twitter](https://x.com/lowyelling/status/2032129503300878679?s=20)*

Placed 3rd in the Best Internet Essays of 2025. Announcement finally came out so I could blast it everywhere (I did not haha, barely posted about it). 

Instead of training a model from scratch following [day 3 bootcamp materials](https://github.com/fractal-nyc/bootcamp-monorepo/blob/main/curriculum/weeks/06-models-and-evals/sp2026/day3.md), I spent time finishing up the portfolio section of [this website](https://github.com/lowyelling/personal-site). Was avoiding doing it for as long as I could, but we needed to submit our profiles for recruiting so a "WIP under construction" wasn't gonna cut it anymore. 

- PR #7 `art` — Art portfolio gallery: 28 painting assets, 4-column square-cropped grid, click-to-enlarge lightbox, dev-only tools for drag-and-drop reordering (individual + row swap) and crop position adjustment with API persistence. Portfolio index redesigned as 3-column card layout with crossfading art slideshow
- PR #8 `writing` — Writing portfolio: essay cards with cover images, descriptions, and source tags (Substack). Dynamic quote carousel on portfolio index cycling through selected essay lines with length-adaptive timing
- PR #9 `dev` — Now page refactored into content collection with archive system (each update gets its own page). Portfolio verbiage updates. Gitignore cleanup for `.claude/` and `.github/`

<br>

### Day 39 - Thursday

Skipped daily post ;(

Real work day today with [fine-tuning LlaDa](https://github.com/lowyelling/voice-fine-tuning). Most of this blog post is about work done on Thursday. I am once again skipping the [day 4 bootcamp materials](https://github.com/fractal-nyc/bootcamp-monorepo/blob/main/curriculum/weeks/06-models-and-evals/sp2026/day4.md) on building Evals, since I will work on Evals in the upcoming weeks. 

Went out for drinks afterwards. Only the 2nd time I've had drinks since moving to NYC end of January. 

- PR #7 `llada` — Add LLaDA 8B masked diffusion model as third fine-tuning target, expanding comparison from four-way to five-way. New Colab notebook with QLoRA training, custom inference (iterative unmasking), and canary pipeline. Documented GPU progression (T4 → L4 → A100) and OOM debugging. Key finding: training succeeds (loss converges) but canary outputs degenerate
- PR #8 `llada2` — LLaDA runs 2-4: lowered LR from 2e-4 → 5e-5 (degeneration went from immediate to delayed ~30-200 words). Switched to FULL inference config (128 steps). Added exponential repetition penalty. Discovered the base model itself degenerates — not a fine-tuning problem but structural to LLaDA's unmasking mechanism. Added `temperature-as-voice.md` discussion doc
- PR #9 `llada3` — LLaDA runs 5-6: systematic one-variable-at-a-time exploration across temperature (0 vs 0.8), block length (64), inference steps (256), fp16 (no quantization), and EOS/EOT token handling. GPU progression up to RTX PRO 6000 Blackwell (96GB). Run 5e (combined config) produced best results: ~500 words coherent, cross-block cascade recovery, structured essays. Fine-tuning learns real voice ("I'm like a ghost stuck, stuck in the limbo") but destabilizes short-form generation

<br>

### Day 40 - Friday

*Daily Posts:
[Substack](https://substack.com/profile/99056571-lily/note/c-227374968?r=1mz4jf&utm_source=notes-share-action&utm_medium=web)
|
[Twitter](https://x.com/lowyelling/status/2032552837842915646)*

Spent the day looking at LlaDa results and trying to reason about it. Wrote most of the blog post as well with ample help from Claude. 

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