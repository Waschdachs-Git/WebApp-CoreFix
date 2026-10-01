import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Eroeffnung } from './Eroeffnung'
import '../index.css'
import './eroeffnung.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Eroeffnung />
  </StrictMode>,
)
