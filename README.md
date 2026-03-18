# 🌌 Merai — AI Interface Framework

<p align="center">
  <img src="https://img.shields.io/badge/Framework-React_18-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React">
  <img src="https://img.shields.io/badge/Build_Tool-Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite">
  <img src="https://img.shields.io/badge/Language-JavaScript_ES6+-f7df1e?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/Styling-CSS3-1572b6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS">
</p>

---

<details open>
<summary>## 📖 Introductie</summary>

Welkom bij **Merai**. Dit project is een moderne, high-performance webapplicatie die fungeert als een robuust fundament voor AI-geïntegreerde interfaces. 

Door de snelheid van **Vite** te combineren met de modulariteit van **React**, biedt Merai een naadloze ervaring voor zowel ontwikkelaars als eindgebruikers. Het is ontworpen om schaalbaar te zijn, van simpele experimenten tot volledige AI-dashboards.
</details>

<details>
<summary>## 🚀 Core Functionaliteiten</summary>

* **⚡ Razendsnelle Runtime:** Dankzij de Vite-bundler start de applicatie in milliseconden met instant Hot Module Replacement (HMR).
* **🤖 AI Integration Ready:** Geoptimaliseerde structuur voor communicatie met Large Language Models (LLM's) via API-aanroepen.
* **🧩 Modulair Componenten Systeem:** Gebouwd met herbruikbare React-componenten voor een schaalbare codebase.
* **📱 Mobile-First Design:** Een volledig responsive interface die zich aanpast aan elk schermformaat.
* **🛠️ Developer Experience:** Geconfigureerd met moderne tooling voor een soepele workflow.
</details>

<details>
<summary>## 🏗️ Tech Stack</summary>

| Categorie | Technologie | Opmerking |
| :--- | :--- | :--- |
| **Library** | React 18 | Component-based UI ontwikkeling. |
| **Build Tool** | Vite | Next-generation frontend tooling. |
| **Taal** | JavaScript (ES6+) | Moderne scripting met async/await. |
| **Styling** | CSS3 / Modules | Schaalbare en onderhoudbare styling. |
| **Pakketbeheer** | npm | Dependency management en scripts. |
</details>

<details>
<summary>## ⚙️ Installatie en Run Local</summary>

Volg deze stappen om het project lokaal op te zetten.

### 1. Repository clonen
```bash
git clone [https://github.com/SukunaRaven/merai.git](https://github.com/SukunaRaven/merai.git)
cd merai
```

### 2. Dependencies installeren
```bash
npm install
```

### 3. Environment Setup
Maak een .env bestand aan in de root en voeg je API-sleutels toe indien nodig.
```bash
# Voorbeeld
VITE_API_KEY=jouw_sleutel_hier
```

### 4. Development Server starten
Draai de applicatie in de ontwikkelmodus:
```bash
npm run dev
```
De applicatie is nu bereikbaar op http://localhost:5173.

### 5. Build voor Productie
Om een geoptimaliseerde versie te maken voor deployment:
```bash
npm run build
```
</details>

<details>
<summary>📂 Project Structure (Key Files)</summary>

* Een overzicht van de belangrijkste mappen en bestanden in Merai:
* src/App.jsx: Het centrale punt van de applicatie waar routing en hoofdcomponenten samenkomen.
* src/components/: Map voor alle herbruikbare UI-elementen (knoppen, kaarten, formulieren).
* src/hooks/: Bevat custom React hooks voor het afhandelen van AI-logica en data-fetching.
* src/main.jsx: Het startpunt waar de React-applicatie aan de DOM wordt gekoppeld.
* vite.config.js: Configuratiebestand voor Vite-plugins en aliassen.

</details>

<details>
<summary>📊 Architectuur Diagram</summary>

De onderstaande grafiek visualiseert de dataflow binnen de Merai-applicatie:
```bash
graph LR
    A[Gebruiker] --> B[React UI]
    B --> C[Custom Hooks]
    C --> D[Vite Dev Server]
    D --> E[AI Backend / API]
    E --> D
    D --> C
    C --> B
```
</details>

