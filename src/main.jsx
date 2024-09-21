import { createRoot } from 'react-dom/client'
import './index.css'
import {Rotas} from "./routes/index.jsx"

createRoot(
  document.getElementById('root'))
  .render(
  <Rotas />
)
