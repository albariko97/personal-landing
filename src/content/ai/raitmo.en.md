---
title: "Melody Generator for Reggaeton Music — Google Magenta Improv RNN"
description: "Generative deep learning research using Google Magenta's Improv RNN architecture to compose original, syncopated melodies conditioned over Latin Urban chord progressions."
date: "2020-11-20"
tags: ["Python", "TensorFlow", "Google Magenta", "Improv RNN", "Music Information Retrieval", "Reggaeton"]
status: "Research"
repoUrl: "https://github.com/alvaroyepes97"
articleUrl: "https://alvaroyepes97.medium.com/melody-generator-for-reggaeton-music-2ba75eb1d563"
featured: true
lang: "en"
---

Published research exploring how recurrent neural networks (specifically LSTM-based Improv RNN architectures from Google Magenta) can generate coherent melodic improvisation over arbitrary Latin Urban and Reggaeton harmonic progressions.

### Key Highlights
- **Curated Dataset:** Built a custom dataset of Latin Urban / Reggaeton MIDI tracks and extracted melodic lines aligned to harmonic lead sheets.
- **Protocol Buffer Pipeline:** Converted polyphonic and monophonic MIDI tracks into Magenta `NoteSequence` protocol buffers and serialized them into `TFRecord` format for efficient model training.
- **Harmonic Conditioning:** Fed chord lead sheets as continuous conditioning signals to ensure generated syncopated melodies remain tonally coherent with underlying chord changes.
- **Publication:** Full methodology, audio samples, and training analysis published on [Medium](https://alvaroyepes97.medium.com/melody-generator-for-reggaeton-music-2ba75eb1d563).
