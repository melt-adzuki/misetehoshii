<script lang="ts" setup>
import { ref, onMounted } from "vue"
import html2canvas from "html2canvas"

const preview = ref<HTMLButtonElement>()

async function download(): Promise<void> {
	if (typeof preview.value === "undefined") return

	const canvas = await html2canvas(preview.value)
	const linkElement = document.createElement("a")

	linkElement.href = canvas.toDataURL("image/png")
	linkElement.download = "ifilter_.png"
	linkElement.click()
}
</script>

<template>
    <div class="maker">
        <section class="section hero">
          <figure class="hero__inner">
            <img class="hero__inner__image" src="../assets/quiz_man_maru.png" alt="Hero image" />
            <figcaption class="hero__inner__caption">「見せてほしい」ボタンの文字を入れ替えたり、色を変えたりすることができるメーカーです。</figcaption>
          </figure>
        </section>
        <section class="section">
          <div class="preview" ref="preview">
            <div class="preview__button is-capturing">見せてほしい</div>
          </div>
          <fieldset>
            <legend class="section-title">文字</legend>
            <div>
              <input type="text" id="text" value="text" required />
            </div>
          </fieldset>
          <fieldset>
            <legend class="section-title">カラー</legend>
            <div>
              <input type="radio" id="blue" value="blue" checked />
              <label for="blue">青</label>
            </div>
            <div>
              <input type="radio" id="green" value="green" />
              <label for="green">緑</label>
            </div>
            <div>
              <input type="radio" id="white" value="disabled" />
              <label for="white">白</label>
            </div>
          </fieldset>
        </section>
		<section>
			<button :onclick="download">ダウンロード</button>
		</section>
    </div>
</template>

<style scoped>
.section {
	margin-block: 2rem;
}

.section-title {
	font-size: 1.25rem;
	font-weight: bold;
	color: rgba(0, 0, 0, 0.25);
}

.hero__inner__image {
    width: 10rem;
	display: block;
	margin-inline: auto;
}

.hero__inner__caption {
	--triangle-length: 16px;
	--border-color: orange;

	position: relative;
	margin-top: calc(var(--triangle-length) + 1rem);
	padding: 2rem;
	border-color: var(--border-color);
	border-radius: 1rem;
	border-width: 0.5rem;
    background: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.1));
}

.hero__inner__caption::before {
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

.preview__button {
	position: relative;
	color: white;
	scale: 1.5;
	height: 30px;
	padding-inline: 1rem;
	background-image: url("../assets/bar_blue_middle.png");
}

.preview__button::before, .preview__button::after {
	position: absolute;
	content: "";
	width: 16px;
	height: 30px;
}

.preview__button::before {
	left: -16px;
	background-image: url("../assets/bar_blue_start.png");
}

.preview__button::after {
	right: -16px;
	background-image: url("../assets/bar_blue_end.png");
}

.preview__button.is-capturing {
	scale: 1;
}
</style>
