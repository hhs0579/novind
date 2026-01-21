<template>
  <section id="services" class="services">
    <div class="container">
      <h2 class="section-title">어떤 상황인가요?</h2>
      <p class="section-subtitle">NOVIND는 모든 단계를 강요하지 않습니다.<br />필요한 지점부터 함께합니다.</p>
      <div class="steps">
        <div class="step-card" v-for="step in steps.slice(0, 3)" :key="step.id">
          <div class="step-label">{{ step.label }}</div>
          <div class="step-title">{{ step.title }}</div>
          <div class="step-subtitle">{{ step.subtitle }}</div>
          <ul class="step-list">
            <li v-for="item in step.items" :key="item">{{ item }}</li>
          </ul>
        </div>
      </div>
      <div class="steps-bottom">
        <div class="step-card" v-for="step in steps.slice(3)" :key="step.id">
          <div class="step-label">{{ step.label }}</div>
          <div class="step-title">{{ step.title }}</div>
          <div class="step-subtitle">{{ step.subtitle }}</div>
          <ul class="step-list">
            <li v-for="item in step.items" :key="item">{{ item }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const steps = ref([
  {
    id: 1,
    label: 'CASE 01',
    title: '아이디어는 있는데 어디서부터 시작해야 할지 모르겠을 때',
    subtitle: '아이디어 정리 · 초기 기획',
    items: [
      '머릿속 아이디어를 말로 설명하지 않아도 되는 상태로 정리합니다',
      '유저 페르소나와 사용 흐름을 기준으로 구조를 잡습니다',
      '무엇을 만들고, 무엇을 만들지 않을지 명확히 구분합니다',
      'MVP 범위와 핵심 기능을 정의합니다',
      '실행 가능한 초기 비즈니스 구조를 설계합니다'
    ]
  },
  {
    id: 2,
    label: 'CASE 02',
    title: '설명하고 설득해야 할 때 (투자자·심사위원·파트너 앞에서)',
    subtitle: '브랜딩 · IR · 문서 설계',
    items: [
      '서비스의 정체성을 한 문장으로 설명 가능하게 만듭니다',
      '브랜드 네이밍, 톤앤매너, 핵심 메시지를 정리합니다',
      'IR덱, 사업계획서, 발표자료를 하나의 논리로 설계합니다',
      '지원사업 신청서·발표자료를 심사 관점에 맞춰 구성합니다',
      '“잘 만든 자료”가 아니라 “통과 가능한 구조”를 만듭니다'
    ]
  },
  {
    id: 3,
    label: 'CASE 03',
    title: '말이 아니라 실제로 돌아가는 걸 보여줘야 할 때',
    subtitle: 'MVP · 프로토타입 개발',
    items: [
      '기획과 디자인을 실제 기능으로 연결합니다',
      'Flutter, Vue.js 기반 웹·앱 MVP를 개발합니다',
      '노코드 툴을 활용해 빠른 테스트용 프로토타입을 구축합니다',
      '실제 사용자가 눌러보고 검증할 수 있는 상태까지 만듭니다',
      '데모 시연 영상과 연동 문서를 함께 제공합니다'
    ]
  },
  {
    id: 4,
    label: 'CASE 04',
    title: '유입은 있는데 전환이 일어나지 않을 때',
    subtitle: '랜딩페이지 · 퍼널 설계',
    items: [
      '서비스 소개 흐름을 사용자 관점에서 다시 설계합니다',
      '유입 → 행동 → 문의로 이어지는 퍼널을 구조화합니다',
      'Notion, Webflow, 코드 기반 중 상황에 맞게 선택 제작합니다',
      '브랜드와 일관된 비주얼과 메시지를 유지합니다',
      '신청 폼, CTA, 데이터 연동까지 한 번에 구축합니다'
    ]
  },
  {
    id: 5,
    label: 'CASE 05',
    title: '이제 키우고 운영해야 할 때, 혼자 남고 싶지 않을 때',
    subtitle: '고도화 · 운영 · 지속 협업',
    items: [
      'MVP 이후 단계의 기능 추가와 성능 개선을 진행합니다',
      '사용자 피드백 기반으로 UX/UI를 개선합니다',
      '서비스 흐름과 정보 구조를 재정비합니다',
      '내부 운영팀을 위한 가이드 문서를 정리합니다',
      '베타에서 정식 서비스로 확장하는 과정을 함께 설계합니다'
    ]
  }
])

const services = ref([
  {
    id: 1,
    title: '스타트업 기획 컨설팅',
    icon: '💡',
    features: [
      '아이디어 정제 및 구조화',
      '유저 페르소나 / 사용자 여정 시나리오 작성',
      '핵심 기능 도출 및 MVP 정의',
      '시장 진입 전략 및 린캔버스 설계',
      '실행 가능한 초기 비즈니스 구조 제안'
    ]
  },
  {
    id: 2,
    title: '브랜딩 및 시각 커뮤니케이션 디자인',
    icon: '🎨',
    features: [
      '브랜드 네이밍, 슬로건 개발',
      '톤앤매너 및 핵심 키비주얼 기획',
      'IR덱, 사업계획서, 피치덱 디자인',
      '로고 / 키컬러 / 타이포 시스템 구축',
      '웹·앱 인터페이스 디자인(Figma 기준)'
    ]
  },
  {
    id: 3,
    title: 'MVP 및 프로토타입 개발',
    icon: '⚙️',
    features: [
      'Flutter,Vue.js 활용한 웹/앱 개발',
      '노코드 툴을 활용한 빠른 프로토타입 구축',
      '피그마 디자인 → 기능 연결형 MVP 개발',
      '실제 테스트 가능한 기능 구현',
      '데모 시연 영상 및 연동 문서 제공'
    ]
  },
  {
    id: 4,
    title: '지원사업 대응 및 문서 설계',
    icon: '📄',
    features: [
      '예비창업패키지 등 정부지원사업 컨설팅',
      '신청서, 사업계획서, 발표자료 일괄 제작',
      'IR 자료 구성 및 피칭 스크립트 지원',
      '심사 관점의 시각적 구성 및 논리 구조 설계',
      '각종 양식 기반 보고서 대응 가능'
    ]
  },
  {
    id: 5,
    title: '랜딩페이지 및 퍼널 설계',
    icon: '🌐',
    features: [
      '서비스 소개용 웹페이지 기획 및 제작',
      '사용자 유입 → 행동 유도 흐름 구조화',
      'Notion, Webflow, 또는 코드 기반 선택 제작',
      '브랜딩과 일관된 비주얼 연출',
      '신청 폼, CTA, 퍼널 연동까지 일괄 구축'
    ]
  },
  {
    id: 6,
    title: '고도화 작업',
    icon: '🚀',
    features: [
      'MVP 이후 단계의 기능 추가 및 성능 개선',
      '사용자 피드백 기반 UX/UI 개선',
      '서비스 흐름 재정비 및 정보 구조 리디자인',
      '브랜드 완성도 강화를 위한 콘텐츠 고도화',
      '베타에서 정식 서비스로의 확장 설계'
    ]
  },
  {
    id: 7,
    title: '운영 지원 및 지속 관리',
    icon: '🔧',
    features: [
      '기술·디자인 유지보수 및 수정 대응',
      '내부 운영팀을 위한 운영 가이드 문서화',
      '지원사업 완료 후 성과보고서 및 정산자료 제작',
      '장기 관점에서의 기능 업그레이드 계획 수립',
      '파트너십 기반 지속적 협업 가능'
    ]
  }
])
</script>

<style scoped>
.services {
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
  line-height: 1.8;
}

.steps {
  display: grid;
  grid-template-columns: repeat(3, minmax(260px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3.5rem;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  justify-items: stretch;
}

.step-card {
  position: relative;
  background: #fff;
  border: 2px solid #e5e5e5;
  border-radius: 12px;
  padding: 2rem 2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
}

.step-label {
  font-size: 0.85rem;
  font-weight: 700;
  color: #ff6b35;
  margin-bottom: 0.75rem;
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.35rem 0.75rem;
  background: rgba(255, 107, 53, 0.1);
  border-radius: 999px;
}

.step-title {
  font-size: 1.15rem;
  font-weight: 700;
  color: #222;
  margin-bottom: 0.6rem;
  line-height: 1.4;
}

.step-subtitle {
  font-size: 0.95rem;
  color: #444;
  margin-bottom: 1rem;
}

.step-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.step-list li {
  font-size: 0.95rem;
  color: #555;
  line-height: 1.6;
  padding-left: 0.9rem;
  position: relative;
}

.step-list li::before {
  content: '•';
  position: absolute;
  left: 0;
  color: #ff6b35;
  font-weight: 700;
}

.step-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
  border-color: #ff6b35;
}

.steps-bottom {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 3.5rem;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}

.steps-bottom .step-card {
  flex: 0 0 calc((1200px - 3rem) / 3);
  min-width: 260px;
  max-width: calc((1200px - 3rem) / 3);
}


@media (max-width: 768px) {
  .services {
    padding: 60px 1rem;
  }
  
  .section-title {
    font-size: 2rem;
  }

  .steps {
    grid-template-columns: 1fr;
    max-width: 100%;
  }
  
  .steps-bottom {
    flex-direction: column;
    align-items: center;
  }
  
  .steps-bottom .step-card {
    flex: 1 1 100%;
    max-width: 100%;
  }
}

@media (max-width: 1024px) and (min-width: 769px) {
  .steps {
    grid-template-columns: repeat(2, minmax(260px, 1fr));
  }
}
</style>
