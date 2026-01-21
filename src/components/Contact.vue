<template>
  <section id="contact" class="contact">
    <div class="container">
      <h2 class="section-title">프로젝트 문의</h2>
      <p class="section-subtitle">언제든지 연락주세요. 빠르게 답변 드리겠습니다.</p>
      
      <div class="contact-content">
        <form class="contact-form" @submit.prevent="handleSubmit">
          <div class="form-group">
            <label for="name">이름</label>
            <input 
              type="text" 
              id="name" 
              v-model="form.name" 
              required 
              placeholder="이름을 입력하세요"
            />
          </div>
          
          <div class="form-group">
            <label for="email">이메일</label>
            <input 
              type="email" 
              id="email" 
              v-model="form.email" 
              required 
              placeholder="이메일을 입력하세요"
            />
          </div>
          
          <div class="form-group">
            <label for="phone">전화번호</label>
            <input 
              type="tel" 
              id="phone" 
              v-model="form.phone" 
              placeholder="전화번호를 입력하세요"
            />
          </div>
          
          <div class="form-group">
            <label for="message">프로젝트 설명</label>
            <p class="form-hint">단순 견적 문의보다는, 지금 어떤 단계인지 편하게 적어주세요. 정리되지 않아도 괜찮습니다.</p>
            <textarea 
              id="message" 
              v-model="form.message" 
              required 
              rows="6"
              placeholder="아이디어, 현재 상황, 목표, 예상 일정 등 프로젝트에 대해 설명해주세요"
            ></textarea>
          </div>
          
          <button type="submit" class="submit-btn" :disabled="isSubmitting">
            {{ isSubmitting ? '전송 중...' : '문의하기' }}
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  phone: '',
  message: ''
})

const isSubmitting = ref(false)

const handleSubmit = async () => {
  isSubmitting.value = true
  
  // 실제로는 백엔드 API로 전송
  // 여기서는 콘솔에 출력하고 폼을 초기화합니다
  console.log('Form submitted:', form.value)
  
  // 시뮬레이션을 위한 딜레이
  setTimeout(() => {
    alert('문의가 성공적으로 전송되었습니다. 빠른 시일 내에 답변 드리겠습니다!')
    form.value = {
      name: '',
      email: '',
      phone: '',
      message: ''
    }
    isSubmitting.value = false
  }, 1000)
}
</script>

<style scoped>
.contact {
  padding: 100px 2rem;
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
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

.contact-content {
  max-width: 800px;
  margin: 0 auto;
}

.contact-form {
  background: white;
  padding: 3rem;
  border-radius: 20px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: #333;
}

.form-hint {
  font-size: 0.95rem;
  color: #666;
  margin-bottom: 0.75rem;
  line-height: 1.6;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 1rem;
  border: 2px solid #e0e0e0;
  border-radius: 10px;
  font-size: 1rem;
  font-family: inherit;
  transition: all 0.3s ease;
  box-sizing: border-box;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #ff6b35;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

.form-group textarea {
  resize: vertical;
  min-height: 120px;
}

.submit-btn {
  width: 100%;
  padding: 1.2rem;
  background: linear-gradient(135deg, #ff6b35 0%, #f7931e 100%);
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1rem;
}

.submit-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(102, 126, 234, 0.4);
}

.submit-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

@media (max-width: 768px) {
  .contact {
    padding: 60px 1rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .contact-form {
    padding: 2rem;
  }
}
</style>

