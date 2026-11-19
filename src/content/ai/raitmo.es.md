---
title: "Generador de Melodías de Reggaetón — Google Magenta Improv RNN"
description: "Investigación en aprendizaje profundo generativo usando la arquitectura Improv RNN de Google Magenta para componer melodías sincopadas condicionadas a progresiones armónicas urbanas."
date: "2020-11-20"
tags: ["Python", "TensorFlow", "Google Magenta", "Improv RNN", "Music Information Retrieval", "Reggaetón"]
status: "Research"
repoUrl: "https://github.com/alvaroyepes97"
articleUrl: "https://alvaroyepes97.medium.com/melody-generator-for-reggaeton-music-2ba75eb1d563"
featured: true
lang: "es"
---

Investigación publicada explorando cómo las redes neuronales recurrentes (específicamente la arquitectura Improv RNN basada en LSTM de Google Magenta) pueden generar improvisaciones melódicas coherentes sobre progresiones armónicas de música urbana y reggaetón.

### Aspectos Destacados
- **Dataset Curado:** Construcción de un conjunto de datos personalizado a partir de pistas MIDI de reggaetón y música urbana latina, extrayendo líneas melódicas alineadas a cifrados armónicos.
- **Pipeline con Protocol Buffers:** Conversión de archivos MIDI a estructuras `NoteSequence` de Magenta serializadas en formato `TFRecord` para un entrenamiento eficiente en TensorFlow.
- **Condicionamiento Armónico:** Alimentación de progresiones de acordes como señales continuas de condicionamiento para garantizar que las melodías sincopadas generadas mantengan coherencia tonal.
- **Publicación:** Metodología completa, muestras de audio y análisis del modelo publicados en [Medium](https://alvaroyepes97.medium.com/melody-generator-for-reggaeton-music-2ba75eb1d563).
