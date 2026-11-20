# Neural activity as a language: a plan for later

- **author:** [Nancy](../../../.claude/library/..teamsmanship/..team/nancy/nancy-or-the-weight-of-evidence/.cover.md)

---

**This chapter is a planning notebook. Nothing in it has been run. QDA comes first** (Doug, the same message: *"But
QDA first! We need to be SUPER specifc, clear, justified or we must express uncertainty"*).

Doug, 2026-11-19, whole:

> *"Do research to. Digital twins, similar types of models for neuroscience, and for modeling language etc.. It has an
> LLMish quality when I realized that neural activity is a interpetation literal, it represents not the external
> world but an interpretaion of it - as hallucinations could only be in an interpreation. A repersentation of the
> outside world can only possibly fail due to noise. But a representaion literal - neural activity as a
> representation for something, and that thing is a representation of the external world - it means this is a
> language to language translation problem. I even wonder if you could read it... Maybe you can run tha texperiment
> as you research - write this down somewhere you will definitely look and use that as a notebook for planning. We
> want to do this in the future. Researching techniques in thsi domain based on our network or other mdoels we might
> invent using LLM-like technology. That would be cool."*

And, minutes later, on when: *"Keep going on patterns ... And when we are done, we can start looking for tools that
might help us comprehend all this in other similar models. The AI literature has to be useful here and we just focus
on the digital twin from Tolains in isolation."* So this waits until the pattern work is done, and it has a second
part: tools from the AI literature for understanding what a network represents, applied to our twin, which so far we
have studied on its own.

**My reading** (mine until he confirms it).
- The report's first slide already says it: neural activity is an interpretation of the image, and the twin models
  the literal. A representation of the outside world could fail only by noise. A hallucination is not noise, so it
  can only live in an interpretation.
- So there are two representations, and the neural activity is a representation of the other one. Going between
  them is translation between two languages, and the twin is the dictionary we hold for one direction (image to
  literal).
- "Could you read it": whether a language model, given neural activity written out in some form, can say what it
  represents.

## Where it stands

*(edited, never appended; last edited 2026-11-19)*

- Written down the day he said it. Nothing run, nothing built, no paper read (the list below is from one search).
- What we already hold that is translation in his sense: a held-out sample names its own image among 100, 90% of the
  time, by the report's QDA (`three_qdas.py`). That is reading with the twin as the dictionary, one sample at a time.
- Next, when he says: read the papers below and write what each does in our words; then his word on which experiment.

## What "reading it" could be: experiments to choose from (mine, for his word)

1. **A language model reads a sample with a dictionary.** Each of the 548 neurons is a word, and its meaning is its
   MEI and its place, described in a line. A sample is written as its most raised neurons. The task is the one the
   QDA already does: which of several images was on the screen, on held-out test samples, where the answer is known.
   The reference is the QDA's 90% among 100. Small, no GPU. It says whether the activity is readable from the
   dictionary alone.
2. **The same, then no image.** Samples of spontaneous neural activity before and after DOI, read the same way. What
   does the reader say is represented? This is the hallucination, read. It has no known answer, so it comes after 1.
3. **A sentence, not a word.** Every analysis so far scores one 0.5 s sample alone. A language has order. Whether
   consecutive samples read as more than each alone has not been asked of this data.
4. **A model of our own with a language model's technique.** Neurons or samples as tokens, trained to predict
   activity (the published models below), with our twin as the part that knows images.

**To decide before any of it** (his): what the two languages are (neural activity and the literal; neural activity
and words); and what counts as having read it.

## What is published (found by search 2026-11-19; none of it read yet)

- **Digital twins as foundation models.** Wang et al. 2025, *Foundation model of neural activity predicts response to
  new stimulus types* (Nature 640, 470): the lab's own lineage; code at https://github.com/cajal/fnn.
- **Spikes as tokens.** Azabou et al. 2023, *A Unified, Scalable Framework for Neural Population Decoding* (POYO):
  each spike a token, a unit embedding and a time; https://arxiv.org/abs/2310.16046.
- **A GPT for neural activity, with images.** Antoniades et al. 2024, *Neuroformer* (ICLR): autoregressive over
  neural activity, with visual and behavioural inputs, on mouse two-photon data; https://arxiv.org/abs/2311.00136.
- **A language model proposes, an encoding model scores.** Tang, LeBel, Jain and Huth 2023, *Semantic reconstruction
  of continuous language from non-invasive brain recordings* (Nature Neuroscience). The same shape as our QDA: an
  encoding model as the likelihood, candidates scored against recorded activity.
- **Brain activity as tokens in a language model's input.** CorText, https://arxiv.org/abs/2509.23941; BrainLLM,
  https://arxiv.org/abs/2311.09889.
- **Off-the-shelf language models on calcium imaging.** NLP4Neuro, https://arxiv.org/abs/2507.02264.
- **Mouse visual cortex described in words.** *Can neurons speak?* (NEURRATOR),
  https://www.alphaxiv.org/abs/2606.18667: by the search's summary, spiking activity from mouse visual cortex mapped
  to an image-and-text embedding and described by a frozen vision-language model. The nearest to his question. To
  read first.

Each of these is a search result's summary. None is cited anywhere until it is read.
