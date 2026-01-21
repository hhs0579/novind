<template>
  <section id="capabilities" class="capabilities">
    <div class="container">
      <h2 class="section-title">핵심 역량</h2>
      <p class="section-subtitle">왜 NOVIND인가</p>
      <div class="capabilities-grid">
        <div class="capability-card" v-for="capability in capabilities" :key="capability.id">
          <div class="capability-icon">{{ capability.icon }}</div>
          <h3 class="capability-title">{{ capability.title }}</h3>
          <p class="capability-description">{{ capability.description }}</p>
        </div>
      </div>
      <div class="capabilities-highlight">
        <p class="highlight-text">
          <strong>우리는 '잘 만들어서 제출되는 것'이 아닌, '실제로 작동하는 것'을 만듭니다.</strong><br />
          복잡한 스타트업 여정을 한 팀이 따라가며, 팀 내부 인력처럼 함께 일하는 방식을 지향합니다.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const capabilities = ref([
  {
    id: 1,
    icon: '🎯',
    title: '전략 + 실행 결합',
    description: '단순 외주가 아닌 전략 컨설팅과 제작 실행을 결합한 하이브리드 팀. 아이디어 진단부터 MVP 정의까지 초기 전략단에서부터 참여합니다.'
  },
  {
    id: 2,
    icon: '🎨',
    title: '디자인·개발 융합',
    description: '디자인과 개발을 분리하지 않고 융합하여 설계 → 프로토타입 → 결과물까지의 전환 속도가 빠릅니다. IR덱·브랜딩·웹 등 다채널에서 일관성 있는 톤을 유지합니다.'
  },
  {
    id: 3,
    icon: '📄',
    title: '문서화 전문',
    description: '지원사업/IR 컨설팅 경험이 풍부해 사업계획서, 발표자료, 보고서 등 문서 기반 실적 구축까지 가능합니다. 정부지원 연계나 보고 체계 구축도 맞춤형으로 대응합니다.'
  },
  {
    id: 4,
    icon: '⚡',
    title: '현실적 실행',
    description: '프론트엔드 중심 MVP, 노코드 툴 활용, Vue.js/Flutter 기반 개발 등 현실적인 실행을 기반으로 개발합니다. 불필요한 과정은 제거하고 결과 중심의 흐름을 설계합니다.'
  },
  {
    id: 5,
    icon: '🤝',
    title: '밀착 협업',
    description: '1:1 매니저 배정과 공동작업환경을 통해 창업자의 흐름 속에 녹아드는 작업방식을 채택합니다. 슬랙, 피그마, 구글드라이브 등 협업 툴을 적극 활용합니다.'
  },
  {
    id: 6,
    icon: '🎓',
    title: '정확한 컨텍스트',
    description: '사용자의 상황을 컨텍스트 기반으로 해석하고, 너무 이르거나 너무 늦은 제안을 하지 않는 정확도를 갖고 있습니다. 실행을 대행하는 것이 아니라, 실행을 가능하게 만드는 프로세스를 설계합니다.'
  }
])
</script>

<style scoped>
.capabilities {
  padding: 100px 2rem;
  background: #f8f9fa;
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

.capabilities-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}

.capability-card {
  background: white;
  padding: 2.5rem;
  border-radius: 20px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  text-align: center;
}

.capability-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.2);
}

.capability-icon {
  font-size: 4rem;
  margin-bottom: 1.5rem;
}

.capability-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #333;
}

.capability-description {
  color: #666;
  line-height: 1.8;
  font-size: 1rem;
}

.capabilities-highlight {
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
  padding: 3rem;
  border-radius: 20px;
  border-left: 4px solid #ff6b35;
  text-align: center;
}

.highlight-text {
  font-size: 1.2rem;
  line-height: 2;
  color: #555;
  margin: 0;
}

.highlight-text strong {
  color: #333;
  font-size: 1.3rem;
  background: linear-gradient(135deg, #ff6b35 0%, #f7931e 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

@media (max-width: 768px) {
  .capabilities {
    padding: 60px 1rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .capabilities-grid {
    grid-template-columns: 1fr;
  }
  
  .capabilities-highlight {
    padding: 2rem;
  }
  
  .highlight-text {
    font-size: 1rem;
  }
  
  .highlight-text strong {
    font-size: 1.1rem;
  }
}
</style>

