<script>
import menuImage from "../assets/menu.png";
export default {
    setup() {
        const url = [
            {
                href: "",
                icon: "fab fa-telegram ",
            },
            {
                href: "https://api.whatsapp.com/send?phone=79062376543&text=%D0%94%D0%BE%D0%B1%D1%80%D1%8B%D0%B9%20%D0%B4%D0%B5%D0%BD%D1%8C.%20%D0%AF%20%D1%81%20%D1%81%D0%B0%D0%B9%D1%82%D0%B0,%20%D1%85%D0%BE%D1%87%D1%83%20%D0%B7%D0%B0%D0%B4%D0%B0%D1%82%D1%8C%20%D0%B2%D0%BE%D0%BF%D1%80%D0%BE%D1%81",
                icon: "fab fa-whatsapp",
            },
            {
                href: "",
                icon: "fas fa-envelope ",
            },
        ];
        return {
            menuImage,
            url,
        };
    },
};
</script>

<template>
    <header>
        <nav class="color-icon fs-icon p-1">
            <div>
                <a
                    v-for="(item, index) in url"
                    :href="item.href"
                    target="_blank"
                    :key="index"
                    ><i class="anim-scale p-1" :class="item.icon"></i
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
    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
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
