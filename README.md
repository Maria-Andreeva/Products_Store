# 🛒 Products Store
## 🇬🇧 Description
A product management application: add, edit, and delete products. Built with **React 19 + TypeScript + Redux Toolkit**, using **Firebase** for data storage.

## 🇩🇪 Beschreibung
Eine Produktverwaltungsanwendung: Produkte hinzufügen, bearbeiten und löschen. Entwickelt mit **React 19 + TypeScript + Redux Toolkit**, unter Verwendung von **Firebase** zur Datenspeicherung.

## 📂 Project Structure / Projektstruktur
```
products-store/
├── public/
│ └── index.html
├── src/
│ ├── api/
│ │ └── apiClient.ts # Firebase API integration / Firebase API Integration
│ ├── components/
│ │ └── ProductList.tsx # Product list component / Produktlisten-Komponente
│ ├── pages/
│ │ ├── CreateProductPage.tsx # Create product page / Seite zur Produkterstellung
│ │ ├── EditProductPage.tsx # Edit product page / Seite zur Produktbearbeitung
│ │ └── HomePage.tsx # Home page / Startseite
│ ├── redux/
│ │ └── productSlice.ts # Redux slice for products / Redux-Slice für Produkte
│ ├── store/
│ │ └── store.ts # Redux store configuration / Redux-Store Konfiguration
│ ├── types/
│ │ └── Product.ts # Data types / Datentypen
│ ├── App.tsx # Main routing / Haupt-Routing
│ ├── index.tsx # Entry point / Einstiegspunkt
│ └── main.css # Global styles / Globale Styles
├── .env # Environment variables (Firebase keys) / Umgebungsvariablen (Firebase)
├── package.json
├── tsconfig.json
└── vite.config.ts / webpack.config.js
```

## 🚀 Technologies / Technologien

* **React 19** - latest version / neueste Version  
* **TypeScript** - strict typing / strenge Typisierung  
* **Redux Toolkit** - state management / Zustandsverwaltung  
* **React Router v6** - routing / Routing  
* **Firebase Realtime Database / Firestore** - data storage / Datenspeicherung  
* **Axios (or native fetch)** - API requests / API-Anfragen  
* **Vite** - project build / Projekt-Build  

## ⚙️ Installation and Run / Installation und Ausführung

** 1. Clone the repository / Repository klonen:**
```
git clone https://github.com/your-username/products-store.git
cd products-store
```

**2. Install dependencies / Abhängigkeiten installieren:**
```
npm install
```
>**If dependency conflicts occur (ERESOLVE errors) / Bei Abhängigkeitskonflikten:**
>```
>npm install --legacy-peer-deps
>```
>или
>```
>npm install --force
>```

**3. Set up the **.env** file / .env Datei erstellen:**
```
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
VITE_FIREBASE_DATABASE_URL=https://your_project_id.firebaseio.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

**4. Run the project / Projekt starten:**
```
npm start
```

Access:
```
http://localhost:3000 - locally / lokal
```
и на
```
https://maria-andreeva.github.io/project_test/ - remotely / remote
```

## 📦 Key Files / Wichtige Dateien
* **api/apiClient.ts** - Firebase setup via REST API or SDK / Firebase-Konfiguration via REST API oder SDK  
* **redux/productSlice.ts** - product state + async thunk for CRUD / Produktspeicher + Async-Thunk für CRUD  
* **pages/CreateProductPage.tsx** - create new product page / Seite zur Produkterstellung  
* **pages/EditProductPage.tsx** - edit existing product page / Seite zur Produktbearbeitung  
* **components/ProductList.tsx** - display product list / Produktlisten-Komponente  

## 🛠 Scripts / Befehle

| **Script** | **Description / Beschreibung** |
|-----------|-------------------------------|
| `npm run dev` | Run in development mode / Entwicklungsmodus starten |
| `npm run build` | Build project for production / Projekt für Produktion bauen |
| `npm run preview` | Preview production build / Vorschau Produktions-Build |

## 🧠 Features / Besonderheiten
* Firebase as backend / Firebase als Backend  
* `.env` to protect API keys / `.env` zum Schutz der API-Schlüssel  
* Clean project structure / Saubere Projektstruktur  
* Easy to extend with new pages / Einfach erweiterbar
  
## 📜 License / Lizenz
All rights reserved. Unauthorized use, copying, distribution or modification is prohibited.  
Alle Rechte vorbehalten. Nutzung, Kopieren, Verbreitung oder Modifikation ohne schriftliche Genehmigung ist verboten.

---

## 💬 Contact / Kontakte
[Maria Andreeva](https://github.com/Maria-Andreeva)


