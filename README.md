# 개인 포트폴리오 랜딩페이지

이 프로젝트는 개발자의 퍼스널 브랜딩을 위한 랜딩페이지입니다. React와 Tailwind CSS를 사용하여 제작되었으며, 개발자의 기술 스택과 포트폴리오를 효과적으로 보여주기 위한 목적으로 제작되었습니다.

## 🚀 주요 기능

- **개인 소개:** 개발자에 대한 간략한 소개와 전문성을 보여줍니다.
- **포트폴리오 섹션:** 완료된 프로젝트들을 카드 형태로 소개하고 기술 태그별 필터링 기능을 제공합니다.
- **기술 스택:** 개발자가 보유한 기술들을 카테고리별로 분류하여 숙련도와 함께 시각적으로 표시합니다.
- **반응형 디자인:** 모바일, 태블릿, PC 등 다양한 화면 크기에 최적화되어 있습니다.
- **다크 모드 지원:** 다크 모드를 지원하여 사용자 경험을 향상시켰습니다.
- **연락처 폼:** 방문자가 쉽게 연락할 수 있는 폼을 제공합니다.

## 🛠️ 기술 스택

- **프론트엔드:** React, TypeScript, Tailwind CSS
- **개발 도구:** Vite
- **스타일링:** Tailwind CSS
- **배포:** GitHub Pages 또는 Vercel

## 📦 프로젝트 구조

```
/personal-landing-page/
├── public/              # 정적 파일 (이미지, 파비콘 등)
├── src/
│   ├── assets/          # 이미지, 아이콘 등
│   │   ├── Header.tsx   # 헤더 컴포넌트
│   │   ├── Hero.tsx     # 히어로 섹션 컴포넌트
│   │   ├── ... 기타 컴포넌트
│   ├── data/            # JSON 데이터 파일
│   │   ├── projects.json # 프로젝트 데이터
│   │   ├── skills.json   # 기술 스택 데이터
│   ├── App.tsx          # 메인 App 컴포넌트
│   ├── main.tsx         # 진입점
│   └── index.css        # 전역 스타일
├── tailwind.config.js   # Tailwind CSS 설정
├── vite.config.ts       # Vite 설정
└── ... 기타 설정 파일
```

## 🚀 시작하기

### 로컬 개발 환경 설정

1. 저장소 클론
   ```bash
   git clone https://github.com/yourusername/personal-landing-page.git
   cd personal-landing-page
   ```

2. 의존성 설치
   ```bash
   npm install
   ```

3. 개발 서버 실행
   ```bash
   npm run dev
   ```

4. 빌드
   ```bash
   npm run build
   ```

## 🌱 커스터마이징

### 개인 정보 수정

1. `src/components/Hero.tsx` 파일에서 이름과 직무, 자기소개를 수정합니다.
2. `src/components/Contact.tsx` 및 `src/components/Footer.tsx` 파일에서 연락처 정보와 SNS 링크를 변경합니다.

### 프로젝트 수정

`src/data/projects.json` 파일을 수정하여 자신의 프로젝트 정보를 업데이트할 수 있습니다.

### 기술 스택 수정

`src/data/skills.json` 파일을 수정하여 자신의 기술 스택을 업데이트할 수 있습니다.

## 📝 라이선스

MIT

## 👤 제작자

- 개발자이름 - [GitHub](https://github.com/yourusername)

## 💖 지원 및 피드백

기능 개선이나 버그 제보는 이슈 트래커를 통해 알려주세요.
