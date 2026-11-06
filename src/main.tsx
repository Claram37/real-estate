import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { LucideProvider } from 'lucide-react'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* Every icon in the design uses a 1.5px line, whatever its size */}
    <LucideProvider strokeWidth={1.5} nonScalingStroke>
      <App />
    </LucideProvider>
  </StrictMode>,
)
