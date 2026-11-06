<script setup>
import DefaultTheme from 'vitepress/theme'
const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #layout-bottom>
      <footer class="national-footer" aria-label="Republic website footer">
        <div class="page-width footer-grid">
          <div class="footer-identity"><img src="https://github.com/Goodfellows-Republic.png?size=512" alt="" width="48" height="48" /><div><strong>Goodfellows Republic</strong><p>National information portal</p></div></div>
          <nav aria-label="Explore the Republic"><h2>The Republic</h2><a href="/about">About the Republic</a><a href="/constitution">Constitution</a><a href="/values">Our values</a><a href="/community">Civic life</a></nav>
          <nav aria-label="Website and bot information"><h2>Information</h2><a href="/contact">Contact</a><a href="https://discord.gg/9TQ76stCZZ" target="_blank" rel="noopener noreferrer">Discord ↗</a><a href="/privacy">Privacy policy</a><a href="/terms">Terms of service</a></nav>
        </div>
        <div class="page-width footer-bottom"><span>© {{ new Date().getFullYear() }} Goodfellows Republic</span><span>A country. A community. A shared future.</span></div>
      </footer>
    </template>
  </Layout>
</template>
