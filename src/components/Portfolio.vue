<template>
  <section id="portfolio" class="portfolio">
    <div class="container">
      <h2 class="section-title">포트폴리오</h2>
      <p class="section-subtitle">다양한 프로젝트를 통해 검증된 개발 역량</p>
      
      <div v-if="portfolioItems.length > 0" class="portfolio-grid">
        <div 
          class="portfolio-item" 
          v-for="item in portfolioItems" 
          :key="item.id"
          @click="openProject(item)"
        >
          <div class="portfolio-image-wrapper">
            <img 
              :src="item.thumbnail" 
              :alt="item.title" 
              class="portfolio-image"
              @error="(e) => handleImageError(e, item)"
            />
            <div class="portfolio-overlay">
              <h3 class="portfolio-title">{{ item.title }}</h3>
            </div>
          </div>
        </div>
      </div>
      
      <div v-else class="portfolio-placeholder">
        <div class="placeholder-content">
          <div class="placeholder-icon">📁</div>
          <h3>포트폴리오 준비 중</h3>
          <p>이미지를 불러오는 중...</p>
        </div>
      </div>
      
      <!-- 프로젝트 상세 모달 -->
      <div v-if="selectedProject" class="modal" @click="closeModal">
        <div class="modal-content" @click.stop>
          <div class="project-header">
            <h2 class="project-title">{{ selectedProject.title }}</h2>
            <button class="modal-close" @click="closeModal">
              <span>&times;</span>
            </button>
          </div>
          <div class="project-images">
            <img 
              v-for="(image, index) in selectedProject.images" 
              :key="index"
              :src="image" 
              :alt="`${selectedProject.title} - 이미지 ${index + 1}`" 
              class="project-image"
              @load="onImageLoad"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const portfolioItems = ref([])
const selectedProject = ref(null)

// 프로젝트 정보 (폴더명: 제목)
const projects = [
  { folder: 'project1', title: 'A사 학습관리 웹 개발' },
  { folder: 'project2', title: 'A사 AI 지문 웹 개발' },
  { folder: 'project3', title: 'D사 스킨케어 앱 개발' },
  { folder: 'project4', title: 'L사 SDGs 웹 개발' },
  { folder: 'project5', title: 'M사 쇼핑몰 앱 개발' },
  { folder: 'project6', title: 'E사 영어교육 웹 개발' },
  { folder: 'project7', title: 'S사 스킨케어 앱 개발' },
  { folder: 'project8', title: 'T사 구강관리솔루션 앱 개발' },
  { folder: 'project9', title: 'H사 고객관리 웹 개발' },
  { folder: 'project10', title: 'H대 배팅 앱 개발' }
]

onMounted(async () => {
  await loadPortfolioItems()
})

// URL 경로 생성 함수 (영어 폴더명 사용, 인코딩 불필요)
const getImagePath = (folder, filename) => {
  return `/images/portfolio/${folder}/${filename}`
}

const loadPortfolioItems = async () => {
  // 이미지 체크 없이 바로 표시 (브라우저가 처리)
  // 이미지가 없으면 onerror로 처리되도록 함
  portfolioItems.value = projects.map((project) => {
    const mainPath = getImagePath(project.folder, 'main.jpg')
    const fallbackPath = getImagePath(project.folder, '1.jpg')
    
    return {
      id: project.folder,
      title: project.title,
      folder: project.folder,
      thumbnail: mainPath,
      fallback: fallbackPath,
      images: []
    }
  })
  
  console.log('포트폴리오 아이템 로드 완료:', portfolioItems.value.length, '개')
}

const checkImageExists = (url, timeout = 3000) => {
  return new Promise((resolve) => {
    const img = new Image()
    let resolved = false
    
    img.onload = () => {
      if (!resolved) {
        resolved = true
        resolve(true)
      }
    }
    
    img.onerror = () => {
      if (!resolved) {
        resolved = true
        resolve(false)
      }
    }
    
    // URL 인코딩 처리 (한글 경로 지원)
    try {
      img.src = url
    } catch (e) {
      console.error('이미지 로드 에러:', url, e)
      resolve(false)
    }
    
    setTimeout(() => {
      if (!resolved) {
        resolved = true
        resolve(false)
      }
    }, timeout)
  })
}

const openProject = async (item) => {
  // 프로젝트 이미지들 로드 - 병렬로 빠르게 체크
  const imagePromises = []
  
  // 최대 20개까지 병렬로 체크
  for (let index = 1; index <= 20; index++) {
    const imagePath = getImagePath(item.folder, `${index}.jpg`)
    imagePromises.push(
      checkImageExists(imagePath, 1500).then(exists => ({ index, path: imagePath, exists }))
    )
  }
  
  const results = await Promise.all(imagePromises)
  const images = results
    .filter(result => result.exists)
    .sort((a, b) => a.index - b.index)
    .map(result => result.path)
  
  if (images.length > 0) {
    selectedProject.value = {
      ...item,
      images: images
    }
    document.body.style.overflow = 'hidden'
  } else {
    alert('이미지를 불러올 수 없습니다.')
  }
}

const closeModal = () => {
  selectedProject.value = null
  document.body.style.overflow = 'auto'
}

const onImageLoad = (event) => {
  // 이미지 로드 완료 시 추가 처리 (필요시)
}

const handleImageError = (event, item) => {
  // main.jpg가 없으면 1.jpg로 대체
  if (event.target.src.includes('main.jpg') && item.fallback) {
    console.log('main.jpg 로드 실패, fallback으로 변경:', item.fallback)
    event.target.src = item.fallback
  } else if (!event.target.src.includes(item.fallback)) {
    // fallback도 실패하면 로그만 남김
    console.error('이미지 로드 실패:', event.target.src)
  }
}
</script>

<style scoped>
.portfolio {
  padding: 100px 2rem;
  background: white;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.section-title {
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 1rem;
  color: #333;
}

.section-subtitle {
  text-align: center;
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 4rem;
}

.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
}

.portfolio-item {
  cursor: pointer;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.portfolio-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
}

.portfolio-image-wrapper {
  position: relative;
  width: 100%;
  padding-top: 75%; /* 4:3 비율 */
  overflow: hidden;
}

.portfolio-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.portfolio-item:hover .portfolio-image {
  transform: scale(1.1);
}

.portfolio-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
  padding: 2rem;
  color: white;
  transform: translateY(100%);
  transition: transform 0.3s ease;
}

.portfolio-item:hover .portfolio-overlay {
  transform: translateY(0);
}

.portfolio-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.portfolio-placeholder {
  text-align: center;
  padding: 4rem 2rem;
}

.placeholder-content {
  max-width: 600px;
  margin: 0 auto;
}

.placeholder-icon {
  font-size: 5rem;
  margin-bottom: 2rem;
}

.placeholder-content h3 {
  font-size: 2rem;
  color: #333;
  margin-bottom: 1rem;
}

.placeholder-content p {
  color: #666;
  font-size: 1.1rem;
  margin-bottom: 2rem;
}

/* 프로젝트 상세 모달 */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.95);
  z-index: 2000;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 0;
  overflow-y: auto;
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.modal-content {
  width: 100%;
  max-width: 1400px;
  background: #1a1a1a;
  position: relative;
  padding: 3rem 2rem;
  animation: slideUp 0.3s ease;
  min-height: 100vh;
}

@keyframes slideUp {
  from {
    transform: translateY(50px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.modal-close {
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  background: rgba(150, 150, 150, 0.9);
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  transition: background-color 0.3s ease;
  color: #333;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  transform: translateX(20px);
}

.modal-close span {
  font-size: 2rem;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  transition: color 0.3s ease, transform 0.3s ease;
  pointer-events: none;
  transform: translateY(-2.5px);
  transform-origin: center center;
}

.modal-close:hover {
  background-color: #ff6b35;
  transform: translateX(20px);
}

.modal-close:hover span {
  color: white;
  
  transform-origin: center center;
}

.project-header {
  margin: 0 auto 2rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0.5rem 3.5rem 0.5rem 0;
  max-width: 1200px;
  width: 100%;
}

.project-title {
  margin: 0;
  color: #ffffff;
  font-size: 2rem;
  font-weight: 700;
  text-align: left;
  width: auto;
  max-width: calc(100% - 70px);
  padding-right: 1rem;
}

.project-images {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
}

.project-image {
  width: 100%;
  max-width: 1200px;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
  display: block;
  background: #2a2a2a;
  transition: transform 0.3s ease;
}

.project-image:hover {
  transform: scale(1.02);
}

@media (max-width: 768px) {
  .portfolio {
    padding: 60px 1rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .portfolio-grid {
    grid-template-columns: 1fr;
  }
  
  .modal-content {
    padding: 2rem 1rem;
  }
  
  .modal-close {
    top: 1rem;
    right: 1rem;
    width: 40px;
    height: 40px;
    font-size: 1.5rem;
  }
  
  .project-title {
    font-size: 1.8rem;
  }
  
  .project-images {
    gap: 1.5rem;
  }
}
</style>
