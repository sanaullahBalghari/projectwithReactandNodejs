import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import '@/assets/css/index.css'
import { PrimeReactProvider } from 'primereact/api'
import 'primereact/resources/themes/bootstrap4-light-blue/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import { CartProvider } from './context/CartContext.jsx'
createRoot(document.getElementById('root')).render(
  <PrimeReactProvider>
    <StrictMode>
 
  <CartProvider>
    <App />
  </CartProvider>

    </StrictMode>,
  </PrimeReactProvider>
)
