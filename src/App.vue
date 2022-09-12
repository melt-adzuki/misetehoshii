<script setup lang="ts">
import "destyle.css"

// Components
import Header from "./components/Header.vue"
import Maker from "./components/Maker.vue"
</script>

<template>
	<Header />
	<main class="main">
		<Maker class="main__inner" />
  </main>
</template>

<style scoped>
.main__inner {
	padding-inline: 1rem;
}
</style>
