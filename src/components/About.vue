<template>
  <section id="about" class="about">
    <div class="container">

      <div class="about-content">
        <div class="about-text">
          <p class="lead">
            노바인드(NOVIND)는 <strong>Nova(새로움)</strong>와 <strong>Mind(사고방식)</strong>의 결합으로,<br>
            기존의 틀을 넘어서는 <strong>새로운 사고방식으로 실행의 전환을 만들어내는 팀</strong>입니다.
          </p>
          <p>
            스타트업의 시작을 전략적으로 설계하고, 실질적으로 실현하는 컨설팅 스튜디오입니다.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about {
  padding: 100px 2rem;
  background: white;
}

.container {
  max-width: 900px;
  margin: 0 auto;
}

.section-title {
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;
  color: #333;
}

.about-content {
  max-width: 100%;
}

.about-text {
  text-align: center;
  font-size: 1.1rem;
  line-height: 2;
  color: #555;
}

.about-text p {
  margin-bottom: 1.5rem;
}

.about-text .lead {
  font-size: 1.3rem;
  font-weight: 600;
  color: #333;
  line-height: 1.8;
  margin-bottom: 2rem;
}

.about-text strong {
  color: #ff6b35;
  font-weight: 600;
}

@media (max-width: 768px) {
  .about {
    padding: 60px 1rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .about-text {
    font-size: 1rem;
  }
  
  .about-text .lead {
    font-size: 1.1rem;
  }
}
</style>
