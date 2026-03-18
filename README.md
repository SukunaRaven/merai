# 🌌 Merai

**Merai** is een krachtig, modern AI-interface framework gebouwd met **React** en **Vite**. Het project is ontworpen voor ontwikkelaars die een snelle, responsieve en modulaire frontend nodig hebben voor AI-gedreven applicaties.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/SukunaRaven/merai/pulls)

---

## ✨ Functies

* **⚡ Bliksemsnel:** Ontwikkeld met Vite voor een bijna instant HMR (Hot Module Replacement).
* **🤖 AI-Ready:** Geoptimaliseerd voor integratie met LLM-API's (zoals OpenAI of Anthropic).
* **🧩 Modulair:** Een component-gebaseerde structuur die schalen en onderhoud makkelijk maakt.
* **📱 Responsive:** Werkt naadloos op desktop, tablet en mobiele apparaten.
* **🎨 Clean UI:** Een minimalistisch design gefocust op gebruikerservaring.

---

## 🛠️ Installatie & Setup

Volg deze stappen om Merai lokaal op te zetten:

1.  **Clone de repository:**
    ```bash
    git clone [https://github.com/SukunaRaven/merai.git](https://github.com/SukunaRaven/merai.git)
    cd merai
    ```

2.  **Installeer de dependencies:**
    ```bash
    npm install
    ```

3.  **Configureer je omgeving:**
    Maak een `.env` bestand aan in de root-map voor je API-sleutels:
    ```env
    VITE_API_KEY=jouw_sleutel_hier
    ```

4.  **Start de development server:**
    ```bash
    npm run dev
    ```
    Open [http://localhost:5173](http://localhost:5173) in je browser.

---

## 📂 Project Structuur

```text
merai/
├── src/
│   ├── components/     # Herbruikbare UI-elementen
│   ├── hooks/          # Custom React hooks voor AI-logica
│   ├── assets/         # Afbeeldingen en styling
│   └── App.jsx         # De centrale hub van de applicatie
├── public/             # Statische assets
├── package.json        # Project informatie en scripts
└── vite.config.js      # Vite configuratie-instellingen
