# Repository Finder 🔍

A sleek and intuitive web application for discovering GitHub repositories with beautiful UI and smooth user experience.

## ✨ Features

- **Smart Search**: Search for repositories with real-time results
- **Dual Search Modes**: Choose between user repositories or organization repositories
- **Beautiful UI**: Modern, responsive design with smooth animations
- **Loading States**: Elegant loading animations for better user feedback
- **Fast Performance**: Built with Vite for lightning-fast development and build times

## 🛠️ Tech Stack

- **HTML5** - Semantic markup structure
- **CSS3 & SASS** - Modern styling with preprocessor capabilities
- **JavaScript (ES6+)** - Interactive functionality and API integration
- **Vite** - Next-generation frontend build tool

## 🚀 Live Demo

[🔗 View Live Demo](https://karem-abdelkarem.github.io/repo-finder/)

## 🚀 Getting Started

### Prerequisites

Make sure you have Node.js installed on your machine:
- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/karem-abdelkarem/repo-finder.git
   cd repo-finder
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` (or the port shown in your terminal)

## 🎯 How to Use

1. **Choose Search Type**: Select whether you want to search for user repositories or organization repositories
2. **Enter Search Term**: Type the username or organization name in the search field
3. **View Results**: Browse through the fetched repositories with detailed information
4. **Enjoy the Experience**: Smooth loading animations and responsive design enhance your browsing

## 📁 Project Structure

```
repo-finder/
├── index.html              # Main HTML file
├── src/
│   ├── main.js       # Main JavaScript file   
│   ├── style.scss       # Main SASS stylesheet   
│   ├── scripts/
│       ├── elements.js          # JavaScript module
│       └── getMessage.js        # JavaScript module 
│       └── performSearch.js     # JavaScript module 
│       └── setLoadingState.js   # JavaScript module 
│       └── setMessage.js        # JavaScript module 
│       └── setSearchResult.js   # JavaScript module 
├── package.json            # Project dependencies and scripts
├── vite.config.js          # Vite configuration
└── README.md              # This file
```

## 🔧 Build Commands

- **Development**: `npm run dev` - Start development server with hot reload
- **Build**: `npm run build` - Create production build
- **Preview**: `npm run preview` - Preview production build locally
- **Lint**: `npm run lint` - Run code linting (if configured)

## 🎨 Features in Detail

### Search Functionality
- Real-time search with debounced input
- Toggle between user and organization search modes
- Error handling for invalid searches or API issues

### UI/UX Design
- Responsive design that works on all devices
- Smooth transitions and micro-interactions
- Loading skeletons and spinners for better perceived performance
- Clean, modern interface with intuitive navigation

### Performance Optimizations
- Vite's fast HMR (Hot Module Replacement)
- Optimized SASS compilation
- Efficient JavaScript bundling

## 🌟 Customization

### Configuration
Modify `vite.config.js` to adjust:
- Build settings
- Plugin configurations
- Development server options


## 📧 Contact

If you have any questions or suggestions, feel free to reach out:

- GitHub: [Karem-Abdelkarem](https://github.com/karem-abdelkarem)

---

⭐ **Star this repository if you found it helpful!** ⭐
