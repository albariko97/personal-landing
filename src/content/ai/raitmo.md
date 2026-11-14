---
title: "RAItmo — Deep Learning Melody Composer"
description: "Undergraduate engineering thesis researching generative deep learning models (Improv RNN / Magenta) to synthesize original melodic lines conditioned over harmonic chord progressions."
date: "2020-11-20"
tags: ["Python", "TensorFlow", "Magenta", "Improv RNN", "Music Information Retrieval"]
status: "Research"
repoUrl: "https://github.com/alvaroyepes97"
demoUrl: "https://github.com/alvaroyepes97"
featured: true
---

RAItmo was my dual degree engineering thesis bridging Systems Engineering, Data Science, and Music Theory. The project explored how recurrent neural networks (specifically LSTM-based Improv RNN architectures from Google Magenta) can generate coherent melodic improvisation over arbitrary harmonic progressions.

### Key Highlights
- **Harmonic Conditioning:** Fed chord lead sheets into the model to constrain the note output space to tonally relevant pitches.
- **Data Preprocessing:** Built custom MIDI extraction and quantizing pipelines to convert classical and jazz chord-melody pairs into suitable training tensors.
- **Evaluation:** Evaluated melodic entropy, rhythmic variation, and pitch distribution against human-composed baselines.
