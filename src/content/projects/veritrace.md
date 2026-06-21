## Why it exists

Veritrace is an experimental framework for traceability-first agentic systems. The core idea is that agent decisions should be inspectable, reviewable, and connected to explicit rules and traces.

I am interested in the boundary between LLM-based authoring and symbolic reasoning. LLMs are useful for drafting and transforming knowledge, but critical systems also need review, structure, and traceability.

## What it explores

The project combines several directions:

- human-reviewed LLM rule authoring
- symbolic BDI reasoning with Jason and AgentSpeak
- trace contracts and expected outputs
- golden cases for validation
- a review console for rule inspection
- optional DSPy evaluation harnesses

## Engineering value

Veritrace is not presented as a finished product. It is a research-oriented prototype for exploring how agentic systems can be made more auditable.

The interesting part is the architecture: separating generated suggestions from approved runtime rules, and treating traces as first-class artifacts instead of logs added at the end.

## What it shows

This project reflects my interest in AI systems that are not only impressive, but also understandable. I want to build software that can explain where its outputs come from and what assumptions were used.
