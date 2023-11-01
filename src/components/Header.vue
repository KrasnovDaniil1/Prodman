<script>
import menuImage from "../assets/menu-min.png";
export default {
    setup() {
        const url = [
            {
                href: "https://t.me/pavel_prodman",
                icon: "fab fa-telegram ",
            },
            {
                href: "https://api.whatsapp.com/send?phone=79062376543&text=%D0%94%D0%BE%D0%B1%D1%80%D1%8B%D0%B9%20%D0%B4%D0%B5%D0%BD%D1%8C.%20%D0%AF%20%D1%81%20%D1%81%D0%B0%D0%B9%D1%82%D0%B0,%20%D1%85%D0%BE%D1%87%D1%83%20%D0%B7%D0%B0%D0%B4%D0%B0%D1%82%D1%8C%20%D0%B2%D0%BE%D0%BF%D1%80%D0%BE%D1%81",
                icon: "fab fa-whatsapp",
            },
            {
                href: "mailto:prodman@prodman.pro",
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
        <nav class="color-icon fs-icon" style="opacity: 0">
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
        <nav
            class="color-icon fs-icon bg-white"
            style="position: fixed; top: 0"
        >
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
        <p class="uppercase fs-title text-center color-icon">
            Выполняем реинжиниринг процессов и их автоматизацию
        </p>
        <div class="menu">
            <img :src="menuImage" />
        </div>
    </header>
</template>
<style lang="scss" scoped>
header {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    nav {
        z-index: 2;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        div {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin: 0 3rem;
        }
    }
    .menu {
        position: relative;
        width: auto;
        height: 100%;
        max-height: 100%;
        aspect-ratio: 1/1;

        img {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
        }
    }
    p {
        margin: 0 10%;
    }
}
@media screen and (max-width: 1024px) {
    header {
        height: 100%;
        nav {
            div {
                margin: 0 1rem;
            }
        }
        .menu {
            width: 100%;
            height: auto;
        }
        p {
            margin: 0 1rem;
        }
    }
}
</style>
