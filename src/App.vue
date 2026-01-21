<script setup>
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Services from './components/Services.vue'
import Capabilities from './components/Capabilities.vue'
import Portfolio from './components/Portfolio.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div id="app">
    <Header />
    <Hero />
    <About />
    <Services />
    <Capabilities />
    <Portfolio />
    <Contact />
    <Footer />
  </div>
</template>

<style>
#app {
  width: 100%;
  overflow-x: hidden;
}
</style>
