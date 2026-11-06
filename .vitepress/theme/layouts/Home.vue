<script setup>
const topics = [
  { number: '01', title: 'The Republic', description: 'An introduction to our country, its identity, and the flag that brings us together.', link: '/about', label: 'Discover the Republic' },
  { number: '02', title: 'Our Constitution', description: 'The supreme law of the Republic. Read its preamble, articles, and formal promulgation.', link: '/constitution', label: 'Read the Constitution' },
  { number: '03', title: 'Civic life', description: 'A country is shaped by its people. Learn, exchange ideas, and join the conversation.', link: '/community', label: 'Take part' },
]
</script>

<template>
  <main id="main-content" class="republic-home">
    <section class="country-hero page-width" aria-labelledby="welcome-heading">
      <div class="hero-intro"><span class="flag-mini" aria-hidden="true"></span><p class="eyebrow">Goodfellows Republic · National information</p></div>
      <div class="hero-grid">
        <div>
          <h1 id="welcome-heading">One Republic.<br />A future <em>we share.</em></h1>
          <p class="hero-summary">A country built around fellowship. A community with a voice. Welcome to Goodfellows Republic.</p>
          <a class="primary-link" href="/about">Discover the Republic <span aria-hidden="true">↗</span></a>
        </div>
        <div class="identity-panel">
          <div class="identity-heading"><span>National identity</span><span aria-hidden="true">GR / 01</span></div>
          <div class="flag-display"><img src="/brand/flag.svg" alt="National flag: three equal horizontal stripes of white, golden sand, and forest green." width="900" height="600" /></div>
          <div class="identity-caption"><span>Different colors.<br />A common identity.</span><a href="/about#our-national-colors" aria-label="Learn about our national colors">↗</a></div>
        </div>
      </div>
      <div class="hero-bottom"><span>Our people. Our principles. Our Republic.</span><a href="#explore">Explore below <span aria-hidden="true">↓</span></a></div>
    </section>

    <section id="explore" class="explore-section" aria-labelledby="explore-heading">
      <div class="page-width">
        <div class="section-heading"><p class="eyebrow">Know your Republic</p><h2 id="explore-heading">A place to begin.</h2><p>Clear information about our country and the things we share.</p></div>
        <div class="topic-grid">
          <a v-for="topic in topics" :key="topic.number" :href="topic.link" class="topic-card">
            <span class="topic-number">{{ topic.number }} <span aria-hidden="true">↗</span></span>
            <h3>{{ topic.title }}</h3><p>{{ topic.description }}</p><span class="topic-link">{{ topic.label }} <span aria-hidden="true">→</span></span>
          </a>
        </div>
      </div>
    </section>

    <section class="civic-section page-width" aria-labelledby="civic-heading">
      <div><p class="eyebrow">Public participation</p><h2 id="civic-heading">The next chapter<br />starts with <em>us.</em></h2></div>
      <div class="civic-copy"><p>Goodfellows Republic is a shared endeavor. Get to know our values, bring your perspective, and help keep the conversation open.</p><a class="primary-link" href="/community">Explore civic life <span aria-hidden="true">↗</span></a><a class="text-link" href="/contact">Questions? Contact the Republic →</a></div>
    </section>
  </main>
</template>
