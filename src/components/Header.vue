<template>
  <header class="header" :class="{ scrolled: isScrolled }">
    <div class="container">
      <div class="logo-container">
        <img v-if="logoExists" :src="logoSrc" alt="Novind Logo" class="logo" />
        <span v-else class="logo-text">NOVIND</span>
      </div>
      <nav class="nav">
        <a href="#home" @click="scrollTo('home')">홈</a>
        <a href="#about" @click="scrollTo('about')">소개</a>
        <a href="#services" @click="scrollTo('services')">서비스</a>
        <a href="#capabilities" @click="scrollTo('capabilities')">역량</a>
        <a href="#portfolio" @click="scrollTo('portfolio')">포트폴리오</a>
        <a href="#contact" @click="scrollTo('contact')">문의</a>
      </nav>
      <button class="menu-toggle" @click="toggleMenu" :aria-label="menuOpen ? '메뉴 닫기' : '메뉴 열기'">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
    <nav class="mobile-nav" :class="{ open: menuOpen }">
      <a href="#home" @click="scrollTo('home')">홈</a>
      <a href="#about" @click="scrollTo('about')">소개</a>
      <a href="#services" @click="scrollTo('services')">서비스</a>
      <a href="#capabilities" @click="scrollTo('capabilities')">역량</a>
      <a href="#portfolio" @click="scrollTo('portfolio')">포트폴리오</a>
      <a href="#contact" @click="scrollTo('contact')">문의</a>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const menuOpen = ref(false)

// 로고 이미지 경로
const logoSrc = '/images/logo.png'
const logoExists = ref(true)

onMounted(() => {
  // 로고 파일 존재 여부 확인
  const img = new Image()
  img.onload = () => {
    logoExists.value = true
  }
  img.onerror = () => {
    logoExists.value = false
  }
  img.src = logoSrc
  
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const scrollTo = (section) => {
  menuOpen.value = false
  const element = document.getElementById(section)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.header.scrolled {
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  background: rgba(255, 255, 255, 0.98);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo-container {
  display: flex;
  align-items: center;
}

.logo {
  height: 35px;
  width: auto;
  object-fit: contain;
}

.logo-text {
  font-size: 1.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, #ff6b35 0%, #f7931e 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.nav {
  display: flex;
  gap: 2rem;
}

.nav a {
  color: #333;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
  position: relative;
}

.nav a:hover {
  color: #ff6b35;
}

.nav a::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(135deg, #ff6b35 0%, #f7931e 100%);
  transition: width 0.3s ease;
}

.nav a:hover::after {
  width: 100%;
}

.menu-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
}

.menu-toggle span {
  width: 25px;
  height: 3px;
  background: #333;
  transition: all 0.3s ease;
  border-radius: 2px;
}

.mobile-nav {
  display: none;
  flex-direction: column;
  background: white;
  padding: 1rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
}

.mobile-nav.open {
  max-height: 300px;
}

.mobile-nav a {
  padding: 0.75rem 0;
  color: #333;
  text-decoration: none;
  border-bottom: 1px solid #eee;
  transition: color 0.3s ease;
}

.mobile-nav a:hover {
  color: #ff6b35;
}

@media (max-width: 768px) {
  .nav {
    display: none;
  }
  
  .menu-toggle {
    display: flex;
  }
  
  .mobile-nav {
    display: flex;
  }
  
  .container {
    padding: 1rem;
  }
}
</style>

