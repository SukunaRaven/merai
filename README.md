# 🌌 Merai — Fullstack AI Interface Framework

<p align="center">
  <img src="https://img.shields.io/badge/Frontend-React_18-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React">
  <img src="https://img.shields.io/badge/API_Connection-Fetch_API-ff69b4?style=for-the-badge&logo=javascript&logoColor=white" alt="Fetch API">
  <img src="https://img.shields.io/badge/Language-JavaScript_ES6+-f7df1e?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/Styling-Tailwind_CSS-38bdf8?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind">
</p>

---

<details open>
<summary>## 📖 Introductie</summary>

Welkom bij **Merai**. Dit project focust op het leveren van een hoogwaardige gebruikerservaring voor AI-gedreven platformen. De frontend is volledig gescheiden van de backend-logica, wat zorgt voor een schaalbaar en veilig systeem.

De interface is volledig gestyled volgens een **custom styleguide** in Tailwind CSS, waardoor kleuren, typografie en spacing consistent zijn over de gehele applicatie. Data wordt in real-time opgehaald van de Merai API via beveiligde endpoints.
</details>

<details>
<summary>## 🚀 Core Functionaliteiten</summary>

* **⚛️ React Dynamic UI:** Een snelle, component-gebaseerde interface die direct reageert op data-updates.
* **📡 Live Data Fetching:** Naadloze integratie met de externe API via de native Fetch API voor real-time updates.
* **🎨 Custom Styleguide:** Een diepgaande Tailwind-implementatie van ons eigen design system voor visuele consistentie.
* **🤖 AI Workflow:** De interface is geoptimaliseerd voor het weergeven en verwerken van AI-gegenereerde content en prompts.
* **📱 Responsive Design:** Mobile-first benadering waardoor de tool op elk apparaat bruikbaar is.
</details>

<details>
<summary>## 🏗️ Tech Stack</summary>

| Categorie | Technologie | Opmerking |
| :--- | :--- | :--- |
| **Frontend** | React 18 | Kern van de applicatie. |
| **Styling** | Tailwind CSS | Utility-first CSS met custom configuratie. |
| **Design System** | Custom Styleguide | Eigen implementatie van UI-standaarden. |
| **Data Fetching** | Fetch API | Directe communicatie met de backend. |
| **Backend API** | Node.js / MySQL | Extern gehost op `http://145.24.237.168:8000/`. |
</details>

<details>
<summary>## ⚙️ Installatie en Run Local</summary>

Volg deze stappen om de Merai frontend lokaal te draaien. De verbinding met de backend is al geconfigureerd.

### 1. Repository clonen
```bash
git clone [https://github.com/SukunaRaven/merai.git](https://github.com/SukunaRaven/merai.git)
cd merai
```

### 2. Dependencies installeren
```bash
npm install
```

### 3. Development Server starten
```bash
npm run dev
```
De applicatie start automatisch op http://localhost:5173. De data wordt direct opgehaald van de live productie-API.

### 4. Build voor Productie
Om een geoptimaliseerde versie te maken voor deployment:
```bash
npm run build
```
</details>

<details>
<summary>📂 Project Structure</summary>

Een overzicht van hoe de Merai frontend is georganiseerd:
```bash
merai/
├── src/
│   ├── components/  # Herbruikbare UI-elementen (Buttons, Cards, Modals)
│   ├── hooks/       # Custom React hooks voor Fetch-logica
│   ├── assets/      # Afbeeldingen en globale styles
│   ├── App.jsx      # De centrale hub en routing
│   └── index.js     # Entry point voor de React DOM
├── tailwind.config.js # De definitie van onze Custom Styleguide
└── package.json     # Project scripts en dependencies
```
</details>

