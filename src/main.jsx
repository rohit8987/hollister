import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { WishlistProvider } from './components/mylist/WishlistContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WishlistProvider>
    <App />
    </WishlistProvider>
  </StrictMode>,
)
