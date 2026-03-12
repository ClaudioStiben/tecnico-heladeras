# Plan de Mejoras Web — Service de Heladeras CRS

## Objetivo
Convertir la landing en una máquina de conversión.
No es una web informativa. Es una landing de performance.
Principios: **velocidad visual · confianza inmediata · CTA siempre visible · claridad extrema**.

---

## Estructura de la página (orden final)

```
Header (fijo, siempre visible)
│
├── 1. HERO              → Urgencia + CTA grande inmediato
├── 2. PROBLEMA-SOLUCIÓN → Conecta con la búsqueda del usuario
├── 3. CAROUSEL EQUIPOS  → Muestra qué reparamos
├── 4. AUTORIDAD         → Especialización + filtro Samsung/LG
├── 5. CONFIANZA         → Por qué elegirnos (bullets cortos)
├── 6. TESTIMONIOS       → Prueba social (reseñas con estrellas)
├── 7. URGENCIA          → CTA repetición estratégica
├── 8. CÓMO TRABAJAMOS   → 5 pasos simples
├── 9. ZONA DE ATENCIÓN  → CABA + Zona Norte (Google Ads friendly)
└── 10. CIERRE           → CTA final de conversión
│
Footer + WhatsApp flotante (siempre visible)
```

---

## TODO por sección

### [ ] 1. Hero
- H1: `¿Tu heladera no enfría? Servicio técnico en el día.`
- Subtítulo: `Reparación de heladeras y freezers en CABA. Especialistas en Side by Side y equipos de alta gama.`
- Bullets: Atención rápida a domicilio / Reparaciones en el acto / Garantía escrita 90 días / Trato directo con el técnico
- CTA: Botón verde WhatsApp (grande) + Botón oscuro "Llamar ahora"
- Zona debajo: `📍 Zona de atención: CABA y alrededores`
- Foto Claudio a la derecha (fondo gradiente azul limpio, sin imagen de heladera)

### [ ] 2. Problema-Solución
- Título: `Solucionamos tu problema rápido y sin vueltas`
- Texto corto (2 líneas máx)
- Lista visual de problemas comunes: no enfría / no congela / hace hielo atrás / pierde agua / no corta / fallas SBS
- CTA WhatsApp al final de la sección

### [ ] 3. Carousel Equipos
- Mantener Swiper
- Mejorar diseño de botones prev/next: más grandes, estilo sólido, no circulares chicos
- Cards con imagen grande (4:3), título y descripción debajo del borde

### [ ] 4. Autoridad
- Título: `Especialistas en heladeras de alta gama y Side by Side`
- Texto corto enfocado en diferenciación
- Marcas: Whirlpool, Electrolux, GE, Bosch, Patrick
- **Texto destacado: "No trabajamos Samsung ni LG"** (filtro de tráfico, genera confianza)
- Bullets: Atención directa con el dueño / Diagnóstico profesional / Experiencia comprobable

### [ ] 5. Confianza — ¿Por qué elegirnos?
- 5 cards cortas, sin texto largo
- Formato: ícono grande + título + 1 línea
- Quitar ícono numérico, volver a íconos representativos pero limpios

### [ ] 6. Testimonios
- Mantener sección existente
- Asegurarse que los testimonios sean los del documento (Mariana Palermo, Carlos Caballito, Laura Recoleta)

### [ ] 7. Urgencia
- Título: `No dejes pasar el problema`
- 2 líneas de texto que generan urgencia real
- 2 CTAs grandes (WhatsApp + Llamar)

### [ ] 8. Cómo trabajamos
- 5 pasos simplificados, sin texto largo en cada uno
- Solo: número + título corto + 1 línea

### [ ] 9. Zona de atención
- Título: `Atendemos en CABA`
- Barrios en grid simple (los del documento)
- Sin mapa de Google (pesado, no aporta conversión)
- CTA de contacto integrado

### [ ] 10. Cierre
- H2: `¿Tu heladera necesita reparación?`
- Texto: 1 línea
- CTA WhatsApp grande + Llamar
- Debajo: ✔ Respuesta rápida · ✔ Atención directa · ✔ Sin intermediarios

---

## Reglas de diseño

- **Texto**: nunca más de 2 líneas por párrafo. Si hay más, convertir en bullets.
- **CTA**: mínimo 4 apariciones en la página (Hero / Problema / Urgencia / Cierre)
- **Colores**: gradiente azul `#1e40af → #2563eb → #3b82f6`. Acento amarillo `#fde047`. Verde WhatsApp `#25d366`.
- **Tipografía**: Inter, bold para H1/H2, medium para body
- **Dark mode**: mantener el sistema existente
- **Mobile first**: todos los layouts colapsan a 1 columna, CTAs son full-width en mobile

---

## Archivos a modificar

| Archivo | Cambio |
|---|---|
| `Hero.jsx` + `Hero.module.scss` | Nuevo contenido según brief |
| `ProblemSolution.jsx` + scss | Lista de problemas, CTA al final |
| `EquipmentCarousel.jsx` + scss | Botones nav mejorados |
| `Authority.jsx` + scss | Especialización SBS, no Samsung/LG |
| `Trust.jsx` + scss | Volver a íconos, texto más corto |
| `Testimonials` | Verificar testimonios del doc |
| `Urgency.jsx` + scss | Nuevo contenido |
| `HowWeWork.jsx` + scss | Pasos más cortos |
| `Coverage.jsx` + scss | Sin mapa, lista de barrios, CTA |
| `FinalCTA.jsx` + scss | Nuevo cierre con trust signals |
