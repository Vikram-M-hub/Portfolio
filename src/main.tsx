import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// #region agent log
fetch('http://127.0.0.1:7242/ingest/0d52f6f9-ef94-455e-9ffa-eb23af4e1c34', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    runId: 'tailwind-postcss-run',
    hypothesisId: 'H-app-mounts',
    location: 'src/main.tsx:10',
    message: 'React root render invoked',
    data: {},
    timestamp: Date.now(),
  }),
}).catch(() => {})
// #endregion agent log

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
