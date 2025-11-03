# 🍓 FoodyWoody - Health & Food Tracker

A modern health and food tracking web application built with React and Tailwind CSS. Track your meals, calories, and water intake with beautiful animations and a clean design! 💖✨

![FoodyWoody](https://img.shields.io/badge/FoodyWoody-Health%20Tracker-FF69B4?style=for-the-badge)
![React](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.x-38B2AC?style=for-the-badge&logo=tailwind-css)

## ✨ Features

- 🎀 **User Authentication** - Sign up and login to keep your progress saved
- 🍎 **Meal Tracking** - Log breakfast, lunch, dinner, and snacks with calorie counts
- 💧 **Water Intake Tracker** - Monitor daily water consumption (8 glasses goal)
- 📊 **Progress Dashboard** - Beautiful stats cards showing total calories, meals logged, and more
- 💖 **Smooth Animations** - Sparkle effects, floating hearts, and smooth transitions
- 🎨 **Modern Design** - Clean pink aesthetic with gradient colors
- 💾 **Local Storage** - All your data is saved locally in your browser

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
 
   git clone https://github.com/yourusername/foodywoody.git
   cd foodywoody
   ```

2. **Install dependencies**

   npm install
   ```

3. **Start the development server**

   npm run dev
   ```

4. **Open your browser**
   ```
   http://localhost:5173
   ```

## 🏗️ Project Structure

```
foodywoody/
├── public/
│   └── icon.png
├── src/
│   ├── components/
│   │   ├── SparkleAnimation.jsx
│   │   ├── BackgroundHearts.jsx
│   │   ├── LandingPage.jsx
│   │   ├── AuthForm.jsx
│   │   ├── Navigation.jsx
│   │   ├── StatsCard.jsx
│   │   ├── MealForm.jsx
│   │   ├── MealItem.jsx
│   │   ├── MealsList.jsx
│   │   └── Dashboard.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── tailwind.config.js
└── postcss.config.js
```

## 🎨 Tech Stack

- **React** - UI library for building component-based interfaces
- **Tailwind CSS** - Utility-first CSS framework for styling
- **Lucide React** - Beautiful icon library
- **Vite** - Fast build tool and development server
- **LocalStorage API** - Client-side data persistence

## 📦 Dependencies

```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "lucide-react": "^0.263.1"
  },
  "devDependencies": {
    "tailwindcss": "^3.4.1",
    "postcss": "^8.4.35",
    "autoprefixer": "^10.4.17",
    "vite": "^5.0.0"
  }
}
```

## 🎯 How to Use

1. **Sign Up/Login** - Create an account or login with existing credentials
2. **Log Meals** - Add your meals with name, calories, and meal type
3. **Track Water** - Click "Add Water" to track your daily water intake
4. **View Stats** - Monitor your total calories and meals logged
5. **Stay Consistent** - Your data is automatically saved!

## 🎀 Component Architecture

### Main Components

- **`App.jsx`** - Main application logic and state management
- **`LandingPage.jsx`** - Welcome screen with animations
- **`AuthForm.jsx`** - User authentication interface
- **`Dashboard.jsx`** - Main dashboard layout
- **`Navigation.jsx`** - Top navigation bar
- **`StatsCard.jsx`** - Reusable statistics display cards
- **`MealForm.jsx`** - Form for logging meals
- **`MealsList.jsx`** - Display list of logged meals
- **`SparkleAnimation.jsx`** - Sparkle effect overlay

## 🌈 Color Palette

```css
Primary Pink: #EC4899 (pink-500)
Secondary Purple: #A855F7 (purple-500)
Accent Blue: #60A5FA (blue-400)
Background: Gradient from pink-50 to purple-100
```

## 🔮 Future Enhancements

- [ ] Backend API with Express.js
- [ ] Database integration (MongoDB/PostgreSQL)
- [ ] Weekly/Monthly analytics charts
- [ ] Recipe suggestions based on calorie goals
- [ ] Dark mode toggle
- [ ] Export data as PDF/CSV
- [ ] Social sharing features
- [ ] Meal photo uploads
- [ ] Nutritional information API integration
- [ ] PWA support for mobile app experience

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👩‍💻 Author

**Your Name**
- GitHub: [@Nouhaila](https://github.com/nohailal)


## 🙏 Acknowledgments

- Icons from [Lucide Icons](https://lucide.dev/)
- Built with modern web technologies

---

🍓 **FoodyWoody** - Making healthy eating fun!