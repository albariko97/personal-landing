---
title: "RAItmo — Compositor de Melodías con Deep Learning"
description: "Tesis de grado en ingeniería investigando modelos generativos de deep learning (Improv RNN / Magenta) para sintetizar melodías originales condicionadas a progresiones armónicas de acordes."
date: "2020-11-20"
tags: ["Python", "TensorFlow", "Magenta", "Improv RNN", "Music Information Retrieval"]
status: "Research"
repoUrl: "https://github.com/alvaroyepes97"
demoUrl: "https://github.com/alvaroyepes97"
featured: true
lang: "es"
---

RAItmo fue mi tesis de doble titulación que unió la Ingeniería de Sistemas, la Ciencia de Datos y la Teoría Musical. El proyecto investigó cómo las redes neuronales recurrentes (específicamente arquitecturas Improv RNN basadas en LSTM de Google Magenta) pueden generar improvisaciones melódicas coherentes sobre secuencias armónicas arbitrarias.

### Puntos Destacados
- **Condicionamiento Armónico:** Entrada de tablas de acordes al modelo para restringir el espacio de notas a alturas tonalmente consistentes.
- **Preprocesamiento de Datos:** Construcción de pipelines en Python para extraer, cuantizar y vectorizar pares de melodía-acorde en tensores de entrenamiento.
- **Evaluación Musical:** Medición de entropía melódica, variabilidad rítmica y distribución de tonos frente a composiciones de referencia humanas.
