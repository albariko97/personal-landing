---
title: "Generador de Actas de Asambleas con IA"
description: "Aplicación web impulsada por IA que transforma grabaciones de audio de asambleas residenciales y documentos de soporte en actas estructuradas y con validez legal."
date: "2024-08-15"
tags: ["LLM", "Whisper", "TypeScript", "Node.js", "RAG", "Prompt Engineering"]
status: "Production"
repoUrl: "https://github.com/alvaroyepes97"
demoUrl: "https://github.com/alvaroyepes97"
featured: true
lang: "es"
---

Las asambleas de copropietarios en Colombia exigen actas rigurosas que documenten con precisión quórum, votaciones, aprobación de presupuestos y nombramientos de consejos.

### Arquitectura y Capacidades
- **Preprocesamiento Acústico:** Supresión de ruido ambiental y diarización de múltiples oradores sobre grabaciones de salón de varias horas.
- **Resumen Jerárquico:** Pipeline multi-etapa con LLMs que divide transcripciones extensas por temas del orden del día, abstrayendo acuerdos sin alucinaciones.
- **Validación Documental:** Ingesta de anexos y presupuestos en PDF para contrastar lo hablado en sala con las propuestas formales.
