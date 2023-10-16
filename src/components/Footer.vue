<script>
import logo from "../assets/logo.svg";
export default {
    setup() {
        return {
            logo,
        };
    },
};
</script>

<template>
    <footer class="p-1">
        <img :src="logo" />
        <p class="uppercase color-title fs-title p-1">Prodman</p>
    </footer>
</template>

<style lang="scss" scoped>
footer {
    background: rgba(0, 0, 0, 0.8);
    // height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
        width: 15%;
        min-width: 100px;
        max-width: 200px;
    }
}
</style>
