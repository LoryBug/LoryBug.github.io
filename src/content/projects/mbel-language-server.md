## Why it exists

AI coding assistants are powerful, but they often lose track of project context, decisions, constraints, and active work. MBEL explores a different way to structure that context: a compact language that both humans and tools can navigate.

MBEL stands for Memory Bank Expression Language. The project includes a DSL, a Language Server, CLI tooling, editor integration, and APIs designed for AI agents.

## What it does

The Language Server implements the features expected from serious developer tooling:

- real-time diagnostics
- hover documentation
- completions
- document symbols
- go to definition
- find references
- workspace symbols
- CodeLens indicators
- semantic queries for AI agents

The CLI adds agent-oriented commands such as validation, impact analysis, context extraction, grammar lookup, simulation, and atomic merge of memory-bank deltas.

## Engineering value

This project forced me to think deeply about parsers, language tooling, DX, structured context, and testing. The codebase is a TypeScript monorepo in strict mode, with more than 1,100 tests and around 93 percent coverage.

The most interesting part is not only the language itself. It is the idea that AI tools should be able to query project state through a narrow, typed, and deterministic interface instead of reading everything from scratch.

## What it shows

MBEL shows my interest in the intersection between developer tools and AI systems: not just using LLMs, but building infrastructure that makes them more reliable, navigable, and useful inside real software projects.
