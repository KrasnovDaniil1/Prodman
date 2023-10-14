<script>
import menuImage from "../assets/menu.png";
export default {
    setup() {
        return {
            menuImage,
        };
    },
};
</script>

<template>
    <header>
        <nav class="d-flex justify-content-between color-icon fs-icon">
            <div>
                <a href="" target="_blank"
                    ><i class="fab fa-telegram anim-scale p-1"></i
                ></a>
                <a href="" target="_blank"
                    ><i class="fab fa-whatsapp anim-scale p-1"></i
                ></a>
                <a href="" target="_blank"
                    ><i class="fas fa-envelope anim-scale p-1"></i
                ></a>
            </div>
            <div>
                <a href="" target="_blank"
                    ><i class="far fa-home anim-scale p-1"></i
                ></a>
                <a href="" target="_blank"
                    ><i class="far fa-chevron-right anim-scale p-1"></i
                ></a>
            </div>
        </nav>
        <img class="menu" :src="menuImage" />
    </header>
</template>
<style lang="scss" scoped>
header {
    width: 100%;
    height: 100vh;
    .menu {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100vh;
        max-height: 100vh;
        max-width: 100%;
    }
}
</style>
