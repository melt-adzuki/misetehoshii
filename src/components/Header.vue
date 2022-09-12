<template>
    <header class="header">
        <div class="header__inner">
            <h1 class="logo">見せてほしいメーカー</h1>
        </div>
    </header>
</template>

<style scoped>
.header {
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.1));
    padding: 1rem;
}

.header__inner {
    margin-inline: auto;
    max-width: var(--max-container-width);
}

.logo {
    font-size: 0;
    width: calc(362px / 2);
    height: calc(161px / 2);
    background-image: url("../assets/logo.svg");
}
</style>
