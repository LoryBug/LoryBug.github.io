## Why it exists

Glutenix started from a personal constraint and a technical question: can gluten-free food experimentation be made less random?

Gluten-free formulation is difficult because structure depends on starches, proteins, fibers, hydrocolloids, hydration, temperature, process timing, and many small interactions. The project is not meant to replace physical testing. It is meant to narrow the search space before spending time, ingredients, and money on weak candidates.

## What it does

Glutenix models gluten-free formulations from ingredient data and process parameters, then ranks candidates for target applications such as bread, pizza, sweet doughs, pastry, and fresh pasta.

The current system includes:

- blend property calculation from ingredient composition
- fermentation and baking simulation
- pasta cooking simulation
- process sweeps across time, temperature, and hydration
- application-specific target profiles
- flavor heuristics to reject technically plausible but unpleasant blends
- literature-backed calibration reports
- Bayesian optimization and Gaussian Process Regression components
- an experiment feedback loop for comparing predictions with real trials

## Engineering value

This project is interesting to me because it connects many layers that usually stay separate: domain research, data modeling, heuristics, API design, optimization, and a practical user workflow.

The backend is a FastAPI application. The frontend is a Vue 3 interface for interacting with the simulation and optimization endpoints. The project also stores runs, candidates, and experimental observations so the system can gradually become more evidence-driven.

## What it shows

Glutenix is a strong example of how I like to build: start from a real problem, model the domain, expose useful interfaces, and make uncertainty explicit instead of hiding it behind a polished demo.

The project is still experimental, but that is the point. It is a system for informed experimentation, not a magic recipe generator.
