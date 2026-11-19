export const defaultLang = 'en' as const;
export const languages = {
  en: 'English',
  es: 'Español',
} as const;

export type Lang = keyof typeof languages;

export const ui = {
  en: {
    // Navigation
    'nav.about': 'About',
    'nav.ai': 'AI Projects',
    'nav.tools': 'Tools',
    'nav.music': 'Music',
    'nav.diving': 'Scuba Diving',
    'nav.events': 'Events',
    'nav.contact': 'Contact',
    'nav.cta': 'Get in touch',

    // Hero
    'hero.ticker': 'Available for Platform Architecture & AI Advisory',
    'hero.headline': 'Full Stack & Platform Engineer building resilient cloud architecture, AI-driven tools, and original music.',
    'hero.subheadline': 'Bridging end-to-end product development (Angular, .NET, Java, Node.js) with high-scale cloud platform engineering (Azure, Kubernetes, Terraform). Outside enterprise systems, I explore marine depths as an Open Water Diver and produce music.',
    'hero.stackLabel': 'Core Stack:',
    'hero.ctaContact': 'Contact Me',
    'hero.ctaCopyEmail': 'Copy Email',
    'hero.copied': 'Copied to clipboard!',

    // About & Bento
    'about.index': '00 // ABOUT & ROLES',
    'about.title': 'Systems Engineering at Enterprise Scale & Creative Intersections',
    'about.description': 'Engineering resilient digital platforms, distributed microservices, and specialized AI developer tools.',
    'about.bio1': 'I’m a Systems & Computer Engineer and Industrial Engineer from Universidad de los Andes, with a minor in Music Recording Techniques and certified as a PADI Open Water Diver.',
    'about.bio2': 'Over the past 6+ years, I’ve designed and shipped software across the entire stack—from consumer-facing Angular apps, Java Spring Boot microservices, and .NET APIs to mission-critical airline platforms at Amadeus. Today, as a Specialist Platform Engineer, I focus on cloud edge capabilities (API Gateway, custom hosting, CIAM), Infrastructure as Code with Terraform, Kubernetes, and OpenTelemetry observability.',
    'about.bio3': 'My curiosity sits at the intersection of systems engineering and real-world creativity: from early thesis research using deep learning to compose musical melodies (RAItmo) to building CLI-driven AI agents, open-source developer utilities, underwater coral exploration, and recording original demos.',
    
    // Fast facts
    'facts.title': 'Fast Facts & Credentials',
    'facts.eduLabel': 'Education',
    'facts.eduVal': 'Systems & Computer Eng. + Industrial Eng.',
    'facts.eduSub': 'Universidad de los Andes',
    'facts.minorLabel': 'Creative Minor',
    'facts.minorVal': 'Music Recording Techniques',
    'facts.divingLabel': 'Ocean Certification',
    'facts.divingVal': 'PADI Open Water Diver (18m / 60ft)',
    'facts.expLabel': 'Experience',
    'facts.expVal': '6+ Years in Platforms & Full Stack',
    'facts.expSub': 'Specialist Platform Engineer',
    'facts.focusLabel': 'Core Focus',
    'facts.focusVal': 'Cloud Edge, Terraform, K8s, Observability, MCP',

    // Bento Pillars
    'pillar1.title': 'Full Stack Engineering',
    'pillar1.sub': 'End-to-End Enterprise Systems',
    'pillar1.desc': 'Building responsive frontends and resilient backend services capable of scaling to millions of transactions. Deep experience in enterprise patterns and domain-driven design.',

    'pillar2.title': 'Platform & Cloud Architecture',
    'pillar2.sub': 'Cloud Edge, IaC & High Reliability',
    'pillar2.desc': 'Architecting cloud-native platforms, container orchestration, and automated delivery pipelines with zero downtime, robust telemetry, and rigorous security boundaries.',

    'pillar3.title': 'AI Systems & Sound Engineering',
    'pillar3.sub': 'Generative Workflows & Audio Production',
    'pillar3.desc': 'Exploring algorithmic composition, Model Context Protocol (MCP) agents, and multi-track audio production with studio-grade signal processing and mix engineering.',

    // Section 01: AI
    'ai.index': '01 // AI PROJECTS',
    'ai.title': 'Applied Machine Learning & Generative Systems',
    'ai.desc': 'From deep learning melody synthesis models to real-world multi-pass LLM document pipelines.',
    'card.source': 'Source',
    'card.explore': 'Explore',
    'card.article': 'Read Article',

    // Section 02: Tools
    'tools.index': '02 // TOOLS & OPEN SOURCE',
    'tools.title': 'Developer Tooling & Platform Utilities',
    'tools.desc': 'Command-line interfaces, Model Context Protocol servers, and cloud engineering utilities built for speed.',
    'tools.roadmapBadge': 'ROADMAP // IN DEVELOPMENT',
    'tools.roadmapTitle': 'Upcoming Open Source Tooling & Apple Watch Ultra Dive Computer',
    'tools.roadmapDesc': 'Future open-source projects currently in the pipeline, including an open-source dive computer for the Apple Watch Ultra (Swift, watchOS, and Bühlmann ZHL-16C decompression algorithms) and cloud platform utilities. Follow my GitHub for repository drops.',
    'tools.roadmapFollow': 'Follow on GitHub',
    'card.repo': 'Repository',
    'card.live': 'Documentation / Live',

    // Section 03: Music
    'music.index': '03 // MUSIC & PRODUCTION',
    'music.title': 'Sound Engineering, Composition & Releases',
    'music.desc': 'Applying acoustic principles, gain staging, and analog-modeled mix techniques to original recorded tracks.',
    'music.streamCta': 'Stream Single',

    // Section 04: Diving
    'diving.index': '04 // SCUBA DIVING & EXPEDITIONS',
    'diving.title': 'Open Water Exploration & Marine Ecosystems',
    'diving.desc': 'Certified PADI Open Water Diver. Translating the discipline of underwater life-support, gas management, and situational awareness into high-stakes systems engineering.',
    'diving.badge': 'PADI Certified',
    'diving.depthLabel': 'Max Depth',
    'diving.logLabel': 'Field Notes',
    'diving.statDives': 'Logged Dives',
    'diving.statBottomTime': 'Bottom Time',
    'diving.statRegions': 'Global Regions',
    'diving.statCertSite': 'Certified Site',

    // Section 05: Events
    'events.index': '05 // EVENTS & TALKS',
    'events.title': 'Speaking Engagements, Conferences & Workshops',
    'events.desc': 'Sharing real-world learnings on platform engineering, distributed observability, and AI tooling.',
    'events.teaserBadge': 'UPCOMING // TO BE ANNOUNCED',
    'events.teaserTitle': 'New talks, meetups & sessions coming soon',
    'events.teaserDesc': 'I am currently preparing new technical sessions on cloud platform resilience, OpenTelemetry observability, and MCP developer workflows. Stay tuned for dates and locations.',
    'events.teaserCta': 'Propose a Talk or Invite Me',

    // Section 06: Contact / Footer
    'contact.index': '06 // INITIATE CONTACT',
    'contact.title': 'Let’s build resilient platforms and creative tools together.',
    'contact.desc': 'Open to platform engineering architecture advisory, AI tooling collaborations, speaking invites, or discussing music production and diving expeditions.',
    'contact.sendMsg': 'Send Direct Message',
    'contact.rights': 'All rights reserved.',

    // Contact Form
    'form.title': 'Send a Direct Message',
    'form.nameLabel': 'Your Name',
    'form.namePlaceholder': 'Álvaro or Jane Doe',
    'form.emailLabel': 'Your Email',
    'form.emailPlaceholder': 'you@example.com',
    'form.topicLabel': 'Subject / Topic',
    'form.topicDefault': 'Select a topic...',
    'form.topicPlatform': 'Platform Architecture & Cloud Edge',
    'form.topicAi': 'AI Agents & Developer Automation',
    'form.topicMusic': 'Music Production & Recording',
    'form.topicDiving': 'Scuba Diving Expeditions',
    'form.topicGeneral': 'General Inquiry & Networking',
    'form.messageLabel': 'Message',
    'form.messagePlaceholder': 'Describe your project, ideas, or how we can collaborate...',
    'form.submit': 'Send Message',
    'form.submitting': 'Sending message...',
    'form.successTitle': 'Message Delivered!',
    'form.successDesc': 'Thank you! Your message was sent directly to my inbox. I will get back to you shortly.',
    'form.errorTitle': 'Failed to Send',
    'form.errorDesc': 'Something went wrong while submitting. You can reach out directly via',
    'form.sendAnother': 'Send another message',
  },

  es: {
    // Navigation
    'nav.about': 'Sobre mí',
    'nav.ai': 'Proyectos IA',
    'nav.tools': 'Herramientas',
    'nav.music': 'Música',
    'nav.diving': 'Buceo',
    'nav.events': 'Eventos',
    'nav.contact': 'Contacto',
    'nav.cta': 'Escríbeme',

    // Hero
    'hero.ticker': 'Disponible para Asesoría en Arquitectura Cloud e IA',
    'hero.headline': 'Ingeniero Full Stack & Platform construyendo arquitectura cloud resiliente, herramientas de IA y música original.',
    'hero.subheadline': 'Uniendo el desarrollo de producto end-to-end (Angular, .NET, Java, Node.js) con ingeniería de plataformas en la nube a gran escala (Azure, Kubernetes, Terraform). Fuera de los sistemas empresariales, exploro las profundidades marinas como buzo certificado Open Water y produzco música.',
    'hero.stackLabel': 'Stack Principal:',
    'hero.ctaContact': 'Contáctame',
    'hero.ctaCopyEmail': 'Copiar Correo',
    'hero.copied': '¡Copiado al portapapeles!',

    // About & Bento
    'about.index': '00 // SOBRE MÍ & ROLES',
    'about.title': 'Ingeniería de Sistemas a Escala Empresarial & Conexiones Creativas',
    'about.description': 'Diseñando plataformas digitales resilientes, microservicios distribuidos y herramientas de IA para desarrolladores.',
    'about.bio1': 'Soy Ingeniero de Sistemas y Computación e Ingeniero Industrial de la Universidad de los Andes, con opción académica en Técnicas de Grabación de Audio y certificación PADI Open Water Diver.',
    'about.bio2': 'Durante más de 6 años he diseñado e implementado software en todo el stack—desde aplicaciones en Angular, microservicios Java Spring Boot y APIs .NET, hasta plataformas críticas para aerolíneas en Amadeus. Hoy, como Specialist Platform Engineer, me enfoco en capacidades de cloud edge (API Gateway, hosting a la medida, CIAM), Infraestructura como Código con Terraform, Kubernetes y observabilidad con OpenTelemetry.',
    'about.bio3': 'Mi curiosidad se encuentra en el punto de encuentro entre la ingeniería de sistemas y la creatividad: desde mi tesis de grado investigando aprendizaje profundo para componer melodías (RAItmo), hasta la creación de agentes de IA y utilidades CLI, expediciones submarinas en arrecifes y la grabación de demos musicales originales.',

    // Fast facts
    'facts.title': 'Datos Clave & Credenciales',
    'facts.eduLabel': 'Educación',
    'facts.eduVal': 'Ing. de Sistemas + Ing. Industrial',
    'facts.eduSub': 'Universidad de los Andes',
    'facts.minorLabel': 'Opción Creativa',
    'facts.minorVal': 'Técnicas de Grabación de Audio',
    'facts.divingLabel': 'Certificación Marina',
    'facts.divingVal': 'PADI Open Water Diver (18m / 60 pies)',
    'facts.expLabel': 'Experiencia',
    'facts.expVal': '6+ Años en Plataformas y Full Stack',
    'facts.expSub': 'Specialist Platform Engineer',
    'facts.focusLabel': 'Foco Principal',
    'facts.focusVal': 'Cloud Edge, Terraform, K8s, Observabilidad, MCP',

    // Bento Pillars
    'pillar1.title': 'Ingeniería Full Stack',
    'pillar1.sub': 'Sistemas Empresariales End-to-End',
    'pillar1.desc': 'Construcción de frontends interactivos y microservicios backend de alta escala y rendimiento. Amplia experiencia en patrones empresariales y arquitectura orientada al dominio.',

    'pillar2.title': 'Arquitectura Cloud & Plataforma',
    'pillar2.sub': 'Cloud Edge, IaC y Alta Disponibilidad',
    'pillar2.desc': 'Diseño de plataformas cloud-native, orquestación de contenedores y pipelines de entrega automatizada sin caídas de servicio, con observabilidad integral y seguridad estricta.',

    'pillar3.title': 'Sistemas de IA & Ingeniería de Sonido',
    'pillar3.sub': 'Flujos Generativos y Producción Musical',
    'pillar3.desc': 'Exploración de composición algorítmica, agentes bajo el estándar Model Context Protocol (MCP) y producción de audio multipista con procesamiento y mezcla de nivel de estudio.',

    // Section 01: AI
    'ai.index': '01 // PROYECTOS DE IA',
    'ai.title': 'Machine Learning Aplicado y Sistemas Generativos',
    'ai.desc': 'Desde modelos de deep learning para síntesis melódica hasta pipelines de LLMs para procesamiento de documentos de alta precisión.',
    'card.source': 'Código Fuente',
    'card.explore': 'Explorar',
    'card.article': 'Leer Artículo',

    // Section 02: Tools
    'tools.index': '02 // HERRAMIENTAS & OPEN SOURCE',
    'tools.title': 'Herramientas para Desarrolladores y Cloud',
    'tools.desc': 'Herramientas de línea de comandos (CLI), servidores MCP y utilidades de ingeniería en la nube construidas para acelerar flujos técnicos.',
    'tools.roadmapBadge': 'HOJA DE RUTA // EN DESARROLLO',
    'tools.roadmapTitle': 'Próximas Herramientas Open Source & Dive Computer para Apple Watch Ultra',
    'tools.roadmapDesc': 'Proyectos de código abierto en desarrollo, incluyendo una computadora de buceo open source para Apple Watch Ultra (Swift, watchOS y algoritmos de descompresión Bühlmann ZHL-16C) junto con utilidades de ingeniería cloud. Sigue mi perfil en GitHub para los primeros lanzamientos.',
    'tools.roadmapFollow': 'Seguir en GitHub',
    'card.repo': 'Repositorio',
    'card.live': 'Documentación / En vivo',

    // Section 03: Music
    'music.index': '03 // MÚSICA & PRODUCCIÓN',
    'music.title': 'Ingeniería de Audio, Composición y Lanzamientos',
    'music.desc': 'Aplicación de fundamentos acústicos, estructura de ganancia y técnicas de mezcla analógica en grabaciones originales.',
    'music.streamCta': 'Escuchar Sencillo',

    // Section 04: Diving
    'diving.index': '04 // BUCEO SCUBA & EXPEDICIONES',
    'diving.title': 'Exploración Submarina & Ecosistemas Marinos',
    'diving.desc': 'Buzo certificado PADI Open Water. Trasladando la disciplina del soporte vital bajo el agua, el cálculo de gases y el control de flotabilidad a la ingeniería de sistemas críticos.',
    'diving.badge': 'Certificado PADI',
    'diving.depthLabel': 'Profundidad Máx',
    'diving.logLabel': 'Notas de Campo',
    'diving.statDives': 'Inmersiones Registradas',
    'diving.statBottomTime': 'Tiempo de Fondo',
    'diving.statRegions': 'Regiones Globales',
    'diving.statCertSite': 'Sitio Certificación',

    // Section 05: Events
    'events.index': '05 // EVENTOS & CHARLAS',
    'events.title': 'Charlas Técnicas, Conferencias y Talleres',
    'events.desc': 'Compartiendo aprendizajes prácticos sobre ingeniería de plataformas, observabilidad en sistemas distribuidos y herramientas de IA.',
    'events.teaserBadge': 'PRÓXIMAMENTE // POR ANUNCIAR',
    'events.teaserTitle': 'Pronto habrá novedades sobre conferencias y talleres',
    'events.teaserDesc': 'Actualmente estoy preparando nuevas charlas técnicas sobre resiliencia en plataformas cloud, observabilidad con OpenTelemetry y agentes MCP. Pronto anunciaré fechas y eventos.',
    'events.teaserCta': 'Proponer una Charla o Invitación',

    // Section 06: Contact / Footer
    'contact.index': '06 // CONTACTO',
    'contact.title': 'Construyamos plataformas resilientes y herramientas creativas juntos.',
    'contact.desc': 'Abierto a asesorías en arquitectura cloud, colaboraciones en herramientas de IA, invitaciones a conferencias o conversaciones sobre producción musical y buceo.',
    'contact.sendMsg': 'Enviar Mensaje Directo',
    'contact.rights': 'Todos los derechos reservados.',

    // Contact Form
    'form.title': 'Enviar un Mensaje Directo',
    'form.nameLabel': 'Nombre',
    'form.namePlaceholder': 'Tu nombre',
    'form.emailLabel': 'Correo Electrónico',
    'form.emailPlaceholder': 'tu@ejemplo.com',
    'form.topicLabel': 'Tema / Asunto',
    'form.topicDefault': 'Selecciona un tema...',
    'form.topicPlatform': 'Arquitectura Cloud & Platform Engineering',
    'form.topicAi': 'Agentes de IA y Automatización',
    'form.topicMusic': 'Producción Musical & Grabación',
    'form.topicDiving': 'Buceo & Expediciones Marinas',
    'form.topicGeneral': 'Consulta General & Networking',
    'form.messageLabel': 'Mensaje',
    'form.messagePlaceholder': 'Describe tu proyecto, ideas o cómo podemos colaborar...',
    'form.submit': 'Enviar Mensaje',
    'form.submitting': 'Enviando mensaje...',
    'form.successTitle': '¡Mensaje Enviado!',
    'form.successDesc': '¡Muchas gracias! Tu mensaje ha llegado directamente a mi correo. Te responderé lo antes posible.',
    'form.errorTitle': 'Error al Enviar',
    'form.errorDesc': 'Ocurrió un error al enviar el formulario. Puedes escribirme directamente a',
    'form.sendAnother': 'Enviar otro mensaje',
  },
} as const;
