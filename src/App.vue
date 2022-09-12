<script setup lang="ts">
import "destyle.css"

// Components
import Header from "./components/Header.vue"
import Home from "./pages/Home.vue"
import Footer from "./components/Footer.vue";
</script>

<template>
	<Header />
	<main class="main">
		<Home class="main__inner" />
	</main>
	<Footer />
</template>

<style scoped>
.main {
	margin-inline: auto;
	max-width: var(--max-container-width);
}

.main__inner {
	padding-inline: 1rem;
}
</style>
