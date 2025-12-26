# 📱 Wearly Styles — Mobile App

**Wearly Styles** là ứng dụng di động mua sắm thời trang hiện đại được xây dựng trên nền tảng **React Native CLI**. Dự án tập trung vào kiến trúc sạch (clean architecture), khả năng mở rộng và tối ưu hóa quy trình làm việc nhóm.

---

## 1. Tech Stack

Dự án sử dụng các công nghệ mới nhất để đảm bảo hiệu suất và trải nghiệm người dùng:

* **⚛️ React Native 0.83.1** — Mobile framework.
* **⚛️ React 19** — Core UI library.
* **🟦 TypeScript** — Static typing cho code an toàn hơn.
* **📱 React Native CLI** — Native development workflow.
* **🎨 Tailwind (NativeWind)** — Utility-first styling.
* **📦 Node.js** >= 20.
* **🤖 Android Studio / Emulator** — Môi trường phát triển Android.

---

## 2. Getting Started

Thực hiện các bước sau để thiết lập dự án trên môi trường local:

### 1. Clone the repository

```bash
    git clone 
    cd wearlyStylesFeMobile


### 2. Install dependencies 

```bash
    npm install

### 3. Start Android Emulator

#### Open Android Studio

#### Start any available Emulator (Pixel / API level)

### 4. Run the application

```bash
    npm run android

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