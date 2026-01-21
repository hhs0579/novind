# NOVIND - 개발 외주 전문 홈페이지

Vue 3 + Vite로 제작된 모던하고 세련된 개발 외주 홈페이지입니다.

## 주요 기능

- ✅ 반응형 디자인 (모바일, 태블릿, 데스크톱 지원)
- ✅ 스무스 스크롤 네비게이션
- ✅ 서비스 소개 섹션
- ✅ 포트폴리오 갤러리 (이미지 모달 포함)
- ✅ 문의 폼
- ✅ 모던한 UI/UX 디자인

## 프로젝트 시작하기

### 의존성 설치
```bash
npm install
```

### 개발 서버 실행
```bash
npm run dev
```

### 프로덕션 빌드
```bash
npm run build
```

### 빌드 미리보기
```bash
npm run preview
```

## 이미지 추가 방법

### 로고 추가
`src/assets/` 폴더에 다음 형식 중 하나로 로고를 추가하세요:
- `logo.png`
- `logo.svg`
- `logo.jpg`

### 포트폴리오 이미지 추가
`src/assets/portfolio/` 폴더에 다음 형식으로 이미지를 추가하세요:
- `portfolio-1.jpg` (또는 .png, .jpeg, .webp)
- `portfolio-2.jpg`
- `portfolio-3.jpg`
- ...

**추천 이미지 크기**: 800x600px 이상 (가로형 권장)

이미지는 자동으로 감지되어 포트폴리오 갤러리에 표시됩니다.

## 프로젝트 구조

```
novind/
├── src/
│   ├── assets/
│   │   ├── portfolio/      # 포트폴리오 이미지 폴더
│   │   └── logo.png        # 로고 이미지 (선택)
│   ├── components/
│   │   ├── Header.vue      # 헤더/네비게이션
│   │   ├── Hero.vue        # 히어로 섹션
│   │   ├── Services.vue    # 서비스 소개
│   │   ├── Portfolio.vue   # 포트폴리오 갤러리
│   │   ├── Contact.vue     # 문의 폼
│   │   └── Footer.vue      # 푸터
│   ├── App.vue
│   ├── main.js
│   └── style.css
└── package.json
```

## 커스터마이징

### 색상 변경
각 컴포넌트의 CSS에서 그라데이션 색상을 수정할 수 있습니다:
- 기본 그라데이션: `#667eea` → `#764ba2`
- `style.css` 및 각 컴포넌트의 `<style>` 섹션에서 수정 가능

### 연락처 정보 변경
`src/components/Contact.vue`와 `src/components/Footer.vue`에서 연락처 정보를 수정하세요.

### 서비스 내용 변경
`src/components/Services.vue`의 `services` 배열을 수정하세요.

## 기술 스택

- **Vue 3** - 프론트엔드 프레임워크
- **Vite** - 빌드 도구
- **CSS3** - 스타일링 (Grid, Flexbox, 애니메이션)

## 라이선스

MIT
