import './index.css'
import App from './App'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import ScrollToTop from './ScrollToTop'

const root = createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <RecoilRoot>
      <ScrollToTop />
      <App />
    </RecoilRoot>
  </BrowserRouter>
)
