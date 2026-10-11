# Binge

## Overview
Binge is a modern TV show discovery and tracking web application built with React. It provides a premium, cinematic interface for browsing television shows using the TVMaze API. The application allows users to search for their favorite shows, view detailed information, and manage a personalized watchlist complete with custom ratings and tracking notes. 

## Features
- **Effortless Discovery**: Search through a massive database of television shows instantly with real-time API integration.
- **Persistent Watchlist**: Add shows to a dedicated Watchlist managed seamlessly with Redux state.
- **Custom Notes & Ratings**: Track your streaming progress by assigning star ratings and personal text notes to saved shows.
- **Premium Cinematic UI**: A sleek, dark-themed browsing experience featuring animated gradient backgrounds and a responsive "Bento Box" showcase grid.
- **Detailed Profiles**: View comprehensive show data including high-quality posters, genres, premiere dates, status, and plot summaries.

## Technologies Used

### Frontend
- **React**: Modern JavaScript library for building user interfaces
- **React Router**: For dynamic, seamless page navigation (`/home`, `/shows`, `/details/:id`, `/watchlist`)
- **Redux Toolkit**: For global state management, specifically handling the persistent Watchlist
- **Bootstrap 5**: For responsive grid layouts and pre-styled components
- **CSS Modules**: For scoped, component-level styling and custom animations
- **Axios**: For handling asynchronous HTTP requests to the API
- **Lucide React**: For clean, modern SVG icons (like loading spinners)

### Development Tools
- **Vite**: Next-generation frontend tooling for blazing-fast development and optimized builds
- **ESLint**: For code linting and maintaining code quality
- **npm**: Package manager for JavaScript

### API
- **TVMaze API**: Free, robust RESTful API that provides extensive television show data, schedules, and images.

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm (v7 or higher)

### Installation

1. Clone the repository
   ```bash
   git clone [https://github.com/Mmo7amed/Binge.git](https://github.com/Mmo7amed/Binge.git)
   cd binge

2. npm install

3. npm run dev (Open your browser and navigate to http://localhost:5173)