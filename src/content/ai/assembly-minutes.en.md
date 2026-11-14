---
title: "AI Assembly Minutes Generator"
description: "AI-powered enterprise web application transforming hours of noisy multi-speaker residential assembly audio recordings and supporting documents into structured, legally-compliant meeting minutes."
date: "2024-08-15"
tags: ["LLM", "Whisper", "TypeScript", "Node.js", "RAG", "Prompt Engineering"]
status: "Production"
repoUrl: "https://github.com/alvaroyepes97"
demoUrl: "https://github.com/alvaroyepes97"
featured: true
lang: "en"
---

Residential homeowners' assemblies in Colombia require meticulous, legally-defensible minutes covering voting results, quorum counts, budget approvals, and council decisions.

### Architecture & Capabilities
- **Acoustic Pre-processing:** Noise suppression and speaker diarization applied to raw multi-hour hall recordings.
- **Hierarchical Summarization:** Multi-pass LLM pipeline breaking lengthy transcripts into agenda topics, extracting exact voting counts and board resolutions without hallucination.
- **Document Grounding:** Ingests PDF budgets and legal notices to cross-reference spoken remarks with formal agenda items.
