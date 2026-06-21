## Why it exists

Enduro Market Analytics started from a practical decision: I was evaluating the purchase of a used enduro motorcycle. Instead of relying only on listings and intuition, I turned the problem into an operational analytics project.

The goal is not to predict the exact price of a single listing. The goal is to understand the market well enough to support better buying decisions.

## What it does

The project builds an end-to-end pipeline for used motorcycle listings:

- historical data collection through the Internet Archive CDX API
- current listing collection from live pages
- raw data consolidation
- preprocessing and aggregation
- descriptive analysis by age and mileage
- forecasting of median prices
- cluster-level recommendations for better buying windows

The most reliable results came from segmenting the market by age and mileage. Global forecasting was useful as a baseline, but cluster-level analysis produced more stable and interpretable recommendations.

## Engineering value

The project combines data collection, reproducible pipelines, statistical thinking, forecasting, and prescriptive analytics. It also shows a pattern I like: transforming a personal question into a structured software and data system.

## What it shows

This is not just a notebook exercise. It is a complete analytical workflow from raw data to decision support, with the limits of the model made explicit.
