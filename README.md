# 📱 Wearly Styles — Mobile App

**Wearly Styles** 
This is a modern fashion shopping mobile application built on the **React Native CLI** platform. The project focuses on clean architecture, scalability, and optimized team workflows..

---

## 1. Tech Stack

The project utilizes the latest technologies to ensure performance and user experience:

* **⚛️ React Native 0.83.1** — Mobile framework.
* **⚛️ React 19** — Core UI library.
* **🟦 TypeScript** — Static typing makes code safer.
* **📱 React Native CLI** — Native development workflow.
* **🎨 Tailwind (NativeWind)** — Utility-first styling.
* **📦 Node.js** >= 20.
* **🤖 Android Studio / Emulator** — Android development environment.

---

## 2. Getting Started

Follow these steps to set up the project in your local environment:

### 1. Clone the repository

```
    git clone https://github.com/MinhHoang1225/wearlystyles-fe-mobile.git
    cd wearlyStylesFeMobile
```


### 2. Install dependencies 

```
    npm install
```

### 3. Start Android Emulator

#### Open Android Studio

#### Start any available Emulator (Pixel / API level)

### 4. Run the application

```
    npm run android
```

## 3. Project Structure


```plaintext
    src/
    │
    ├── assets/
    │   ├── images/
    │   ├── icons/
    │   └── index.ts
    │
    ├── components/
    │   ├── Button.tsx
    │   ├── Input.tsx
    │   └── index.ts
    │
    ├── screens/
    │   ├── Auth/
    │   │   ├── LoginScreen.tsx
    │   │   ├── RegisterScreen.tsx
    │   ├── Home/
    │   │   ├── HomeScreen.tsx
    │   └── index.ts
    │
    ├── navigation/
    │   ├── RootNavigator.tsx
    │   ├── AuthNavigator.tsx
    │   └── MainTabNavigator.tsx
    │
    ├── services/
    │   ├── api.ts
    │   ├── auth.service.ts
    │   ├── user.service.ts
    │   └── index.ts
    │
    ├── hooks/
    │   ├── useAuth.ts
    │   ├── useDebounce.ts
    │   └── index.ts
    │
    ├── constants/
    │   ├── routes.ts
    │   └── index.ts
    │
    ├── utils/
    │   ├── storage.ts
    │   └── index.ts
    │
    ├── types/
    │   ├── auth.ts
    │   └── index.ts
    │
    └── App.tsx
```