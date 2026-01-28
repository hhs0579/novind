<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <div class="footer-logo">
            <img
              v-if="logoExists"
              :src="logoSrc"
              alt="Novind Logo"
              class="logo"
            />
            <span v-else class="logo-text">NOVIND</span>
          </div>
          <p class="footer-description">
            혁신적인 웹/모바일 애플리케이션 개발을 통해<br />
            고객의 비즈니스 성장을 함께합니다.
          </p>
        </div>

        <div class="footer-section">
          <h4 class="footer-title">빠른 링크</h4>
          <ul class="footer-links">
            <li><a href="#home" @click="scrollTo('home')">홈</a></li>
            <li><a href="#about" @click="scrollTo('about')">소개</a></li>
            <li>
              <a href="#services" @click="scrollTo('services')">서비스</a>
            </li>
            <li>
              <a href="#capabilities" @click="scrollTo('capabilities')">역량</a>
            </li>
            <li>
              <a href="#portfolio" @click="scrollTo('portfolio')">포트폴리오</a>
            </li>
            <li><a href="#contact" @click="scrollTo('contact')">문의</a></li>
          </ul>
        </div>

        <div class="footer-section">
          <h4 class="footer-title">연락처</h4>
          <ul class="footer-contact">
            <li>📧 contact@novind.site</li>
            <li>📱 010-3035-8049</li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <p>&copy; {{ currentYear }} NOVIND. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref, onMounted } from "vue";

const currentYear = new Date().getFullYear();

const logoSrc = "/images/logo.png";
const logoExists = ref(true);

onMounted(() => {
  // 로고 파일 존재 여부 확인
  const img = new Image();
  img.onload = () => {
    logoExists.value = true;
  };
  img.onerror = () => {
    logoExists.value = false;
  };
  img.src = logoSrc;
});

const scrollTo = (section) => {
  const element = document.getElementById(section);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};
</script>

<style scoped>
.footer {
  background: #ffffff;
  color: #333;
  padding: 4rem 2rem 2rem;
  border-top: 1px solid #e5e5e5;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
  margin-bottom: 3rem;
}

.footer-section {
  display: flex;
  flex-direction: column;
}

.footer-logo {
  margin-bottom: 1.5rem;
}

.logo {
  height: 60px;
  width: 100px;
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

.footer-description {
  color: #666;
  line-height: 1.8;
  font-size: 0.95rem;
}

.footer-title {
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: #333;
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li {
  margin-bottom: 0.75rem;
}

.footer-links a {
  color: #666;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: #ff6b35;
}

.footer-contact {
  list-style: none;
  padding: 0;
  margin: 0;
  color: #666;
}

.footer-contact li {
  margin-bottom: 0.75rem;
  font-size: 0.95rem;
}

.footer-bottom {
  border-top: 1px solid #e5e5e5;
  padding-top: 2rem;
  text-align: center;
  color: #666;
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .footer {
    padding: 3rem 1rem 1.5rem;
  }

  .footer-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}
</style>
