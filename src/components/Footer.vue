<template>
    <footer class="footer">
        <div class="footer__inner">
            <p>このサイトで使用しているアセットはそれぞれの著作者が所有しており、認められている範囲を超えて無断で使用することはできません。</p>
            <p class="copyright"><small>Copyright © 2022 melt_adzuki</small></p>
        </div>
    </footer>
</template>

<style scoped>
.footer {
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.1));
    padding: 1rem;
}

.footer__inner {
    margin-inline: auto;
    max-width: var(--max-container-width);
}

.footer__inner :last-child {
    margin-top: 1rem;
}

.copyright {
    text-align: center;
}
</style>
