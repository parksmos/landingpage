import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // public 디렉토리 파일은 / 경로에서 사용 가능
  publicDir: 'public',
  // 기본 경로 설정 (배포 시 상대 경로 사용)
  base: './',
  build: {
    // 빌드 시 소스맵 생성
    sourcemap: true,
    // 스타일시트 분할 방지
    cssCodeSplit: false,
  },
  server: {
    // 정적 파일 제공 설정
    fs: {
      strict: false,
    }
  },
})
