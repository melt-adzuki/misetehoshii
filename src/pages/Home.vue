<script lang="ts" setup>
import { ref, onMounted, watch, computed } from "vue"
import { buttonImages } from "../assets"
import { draw } from "../canvas"

const canvas = ref<HTMLCanvasElement>()
const input = ref<string>("見せてほしい")
const color = ref<string>("blue")

const buttonImage = computed(() => buttonImages[color.value])

const updateCanvas = (): void => {
	const context = canvas.value!.getContext("2d")!
	draw({ context, text: input.value, button: buttonImage.value })
}

onMounted(() => {
	// We need this fix for an unknown reason
	setTimeout(() => {
		updateCanvas()
		updateCanvas()
	}, 100)
})

watch([input, color], updateCanvas)

async function download(): Promise<void> {
	const linkElement = document.createElement("a")
	
	linkElement.href = canvas.value!.toDataURL("image/png")
	linkElement.download = input.value + ".png"
	linkElement.click()
}
</script>

<template>
    <div class="maker">
        <section class="section">
			<figure class="hero">
				<img class="hero__image" src="../assets/quiz_man_maru.png" alt="Hero image" />
				<figcaption class="hero__caption">「見せてほしい」ボタンの文字を入れ替えたり、色を変えたりすることができるメーカーです。</figcaption>
			</figure>
        </section>
        <section class="section">
			<h2 class="sectioning-title">プレビュー</h2>
			<div class="preview">
				<canvas class="preview__content" ref="canvas" width="64" height="30" />
			</div>
        </section>
		<section class="section">
			<h2 class="sectioning-title">文字</h2>
			<input class="input" type="text" id="text" v-model="input" required />
		</section>
		<section class="section">
			<h2 class="sectioning-title">カラー</h2>
			<div class="radio-buttons">
				<div>
					<input type="radio" id="blue" value="blue" v-model="color" />
					<label for="blue">青</label>
				</div>
				<div>
					<input type="radio" id="green" value="green" v-model="color" />
					<label for="green">緑</label>
				</div>
				<div>
					<input type="radio" id="white" value="disabled" v-model="color" />
					<label for="white">白</label>
				</div>
			</div>
		</section>
		<section class="section">
			<h2 class="sectioning-title">ダウンロード</h2>
			<div class="buttons">
				<button class="button" :onclick="download">ダウンロードする</button>
			</div>
		</section>
    </div>
</template>

<style scoped>
.section {
	margin-block: 4rem;
}

.sectioning-title {
	display: block;
    text-align: center;
	font-weight: bold;
	font-size: 1.5rem;
	margin-block-end: 0.5rem;
	color: rgba(0, 0, 0, 0.3);
}

.hero__image {
    width: 10rem;
	display: block;
	margin-inline: auto;
}

.hero__caption {
	--triangle-length: 16px;
	--border-color: orange;

	position: relative;
	margin-top: calc(var(--triangle-length) + 1rem);
	padding: 2rem;
	border-color: var(--border-color);
	border-radius: 1rem;
	border-width: 0.5rem;
    background: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.05));
}

.hero__caption::before {
	position: absolute;
	content: "";
	top: calc(var(--triangle-length) * -2);
	left: calc(100% / 2 - var(--triangle-length) / 2);
	width: 0;
	height: 0;
	border-style: solid;
	border-width: 0 var(--triangle-length) calc(var(--triangle-length) * 2 * 0.86) var(--triangle-length);
	border-color: transparent transparent var(--border-color) transparent;
}

.preview {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 10rem;
}

.preview__content {
	scale: 1.5;
}

.input {
	width: 100%;
	padding: 0.25rem 1rem;
	border: 2px solid rgba(0, 0, 0, 0.25);
	border-radius: 0.5rem;
	background-color: white;
}

.radio-buttons {
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	gap: 1.5rem;
}

.radio-buttons [type="radio"] {
	margin-inline-end: 4px;
}

.buttons {
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	gap: 1.5rem;
}

.button {
	padding: 0.5rem 1rem;
	border-radius: 0.5rem;
	background-color: rgb(34, 172, 160);
	color: white;
}
</style>
