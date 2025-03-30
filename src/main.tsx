import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// CSS 파일 가져오기가 모든 import 중 가장 먼저 와야함
import './index.css'
import App from './App.tsx'

// DOM 요소 찾기
const rootElement = document.getElementById('root');

// 루트 요소가 없는 경우 에러 처리
if (!rootElement) {
  throw new Error('Root element not found. Make sure there is a div with id "root" in your HTML file.');
}

// React 앱 렌더링
createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
