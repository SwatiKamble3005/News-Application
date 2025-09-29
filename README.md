# NewsMag – Real-time News App

Description:
NewsMag is a responsive, real-time news application built with React and Bootstrap. It fetches the latest headlines from NewsAPI and allows users to browse news by categories like Technology, Business, Health, Science, Sports, and Entertainment.

Features:
Real-time updates when switching news categories
Responsive card layout using Bootstrap
Loading spinner while fetching news
Safe handling of missing images, titles, or descriptions
External links open in a new tab for safe navigation
Easy to maintain and extend

Technologies Used:
React (Functional Components + Hooks)
Bootstrap 5
NewsAPI for news data
Vite for development

NewsApp/
│
├─ src/
│ ├─ Components/
│ │ ├─ Navbar.jsx
│ │ ├─ NewsBoard.jsx
│ │ └─ NewsItem.jsx
│ ├─ assets/
│ │ └─ default.jpeg
│ ├─ App.jsx
│ └─ main.jsx
│
├─ package.json
├─ vite.config.js
└─ README.md


## Getting Started

### Prerequisites
- Node.js installed on your system  
- NPM or Yarn package manager  

### Steps
1. **Clone the repository:**
```bash
git clone https://github.com/yourusername/NewsApp.git

2. Navigate to the project folder:

cd NewsApp


3. Install dependencies:

npm install


4. Create a .env file in the root directory and add your NewsAPI key:

VITE_API_KEY=YOUR_NEWS_API_KEY


5. Start the development server:

npm run dev


6. Open your browser at http://localhost:5173 (default Vite port).


# Usage

Use the navbar to select a news category.
The app will automatically fetch and display the latest news for that category.
Click Read More to open the full article in a new tab.
