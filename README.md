# 🎮 Game Hub

A dynamic web app built with React, TypeScript, and Chakra UI that allows users to browse video games fetched from the [RAWG Video Games Database API](https://rawg.io/apidocs).

Live: [game-hub-pi-sandy-39.vercel.app](https://game-hub-pi-sandy-39.vercel.app/)  
Repo: [github.com/Kebhino/game-hub](https://github.com/Kebhino/game-hub)

## ✨ Features

- 🔍 Filter games by platform, genre, and sort order
- 📦 Modular and reusable components
- 📡 Fetches data from external API using custom `useData` hook
- 🧠 Written in **TypeScript** for type safety
- 💅 Responsive and accessible UI with **Chakra UI**
- 🔄 Skeleton loaders for smooth UX
- 💾 Game covers, release dates, platform icons and metascore info
- 🧱 Clean, scalable folder structure

## 📸 Screenshots

> You can add screenshots here using markdown:
>  
> `![screenshot](./public/screenshot.png)`

## 🚀 Tech Stack

- **React** (Vite)
- **TypeScript**
- **Chakra UI**
- **RAWG API**
- **Vercel** (deployment)

## 🧰 Setup & Usage

1. Clone the repo:

```bash
git clone https://github.com/Kebhino/game-hub.git
cd game-hub
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file with your RAWG API key:

```bash
VITE_RAWG_API_KEY=your_api_key_here
```

4. Run the app:

```bash
npm run dev
```

5. Build for production:

```bash
npm run build
```

## 📁 Folder Structure

```
src/
├── components/         # Reusable UI components
├── hooks/              # Custom React hooks (e.g. useGames, useGenres)
├── services/           # API logic
├── pages/              # Main page layout
├── theme/              # Chakra theme config
```

## 📌 Future Improvements

- Add pagination or infinite scroll
- Implement dark mode toggle
- Add detailed game pages
- Search input for game titles

## 🧑‍💻 Author

Built with ❤️ by **Jakub Wróbel**  
Feel free to connect: [GitHub](https://github.com/Kebhino)

---

> This project was created for learning purposes and showcases skills in React, API integration, and frontend architecture.
