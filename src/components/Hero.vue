<template>
  <section id="home" class="hero">
    <div class="hero-background"></div>
    <div class="hero-content">
      <div class="hero-logo">
        <img src="/images/logo.png" alt="NOVIND Logo" class="logo-image" />
      </div>
      <h1 class="hero-title">
        새로운 사고로 아이디어를 현실로
      </h1>
      <p class="hero-subtitle">
        전략·브랜딩·개발·문서를 하나의 흐름으로 묶는 실행형 컨설팅<br />
        기획부터 MVP, 지원사업 문서, 런칭까지 함께 설계하고 구현합니다
      </p>
      <div class="hero-buttons">
        <a href="#services" class="btn btn-primary" @click="scrollTo('services')">
          서비스 보기
        </a>
        <a href="#contact" class="btn btn-secondary" @click="scrollTo('contact')">
          프로젝트 문의
        </a>
      </div>
    </div>
    <div class="scroll-indicator">
      <span></span>
    </div>
  </section>
</template>

<script setup>
const scrollTo = (section) => {
  const element = document.getElementById(section)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
</script>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding-top: 80px;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.25) 100%), url('/images/hero.jpeg');
  background-size: cover;
  background-position: center;
  opacity: 0.35;
  z-index: 0;
}

.hero-background::before {
  content: '';
  position: absolute;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(0, 0, 0, 0.05) 0%, transparent 70%);
  animation: rotate 25s linear infinite;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.hero-content {
  position: relative;
  z-index: 1;
  text-align: center;
  max-width: 800px;
  padding: 2rem;
  animation: fadeInUp 1s ease;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero-logo {
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo-image {
  height: 120px;
  width: auto;
  object-fit: contain;
  max-width: 100%;
}

.hero-title {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  color: #333;
  line-height: 1.2;
}

.hero-subtitle {
  font-size: 1.25rem;
  color: #666;
  margin-bottom: 2.5rem;
  line-height: 1.8;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn {
  padding: 1rem 2.5rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  display: inline-block;
  cursor: pointer;
  border: none;
  font-size: 1rem;
}

.btn-primary {
  background: linear-gradient(135deg, #ff6b35 0%, #f7931e 100%);
  color: white;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.6);
}

.btn-secondary {
  background: white;
  color: #ff6b35;
  border: 2px solid #ff6b35;
}

.btn-secondary:hover {
  background: #ff6b35;
  color: white;
  transform: translateY(-2px);
}

.scroll-indicator {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  animation: bounce 2s infinite;
}

.scroll-indicator span {
  display: block;
  width: 30px;
  height: 50px;
  border: 2px solid #ff6b35;
  border-radius: 25px;
  position: relative;
}

.scroll-indicator span::before {
  content: '';
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  width: 6px;
  height: 6px;
  background: #ff6b35;
  border-radius: 50%;
  animation: scroll 2s infinite;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateX(-50%) translateY(0);
  }
  40% {
    transform: translateX(-50%) translateY(-10px);
  }
  60% {
    transform: translateX(-50%) translateY(-5px);
  }
}

@keyframes scroll {
  0% {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateX(-50%) translateY(20px);
  }
}

@media (max-width: 768px) {
  .hero-logo {
    margin-bottom: 1.5rem;
  }
  
  .logo-image {
    height: 80px;
  }
  
  .hero-title {
    font-size: 2rem;
  }
  
  .hero-subtitle {
    font-size: 1rem;
  }
  
  .hero-buttons {
    flex-direction: column;
    align-items: center;
  }
  
  .btn {
    width: 100%;
    max-width: 300px;
  }
}
</style>

