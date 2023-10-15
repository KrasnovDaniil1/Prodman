<script>
import { RouterView } from "vue-router";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
    components: {
        Header,
        Footer,
    },
};
</script>

<template>
    <link
        rel="stylesheet"
        href="https://pro.fontawesome.com/releases/v5.15.2/css/all.css"
    />
    <div class="app">
        <Header />
        <div class="main" >
            <RouterView />
        </div>
        <Footer />
    </div>
</template>

<style lang="scss">
#app {
    // background: var(--bg-secondary);
    max-width: 100vw;
    overflow: hidden;
    // font-family: "Montserrat", sans-serif !important;
}
.main {
    max-width: 1500px;
    margin: 0 auto;
}

::-webkit-scrollbar {
    background: var(--bg-dark);
    width: 5px;
    height: 5px;
}
::-webkit-scrollbar-thumb {
    background: var(--bg-decor);
}
</style>
