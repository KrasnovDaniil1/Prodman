<script>
export default {
    setup() {
        const products = [
            {
                href: "",
                img: "https://pmskills.ru/wp-content/uploads/2020/06/czel-e1597352671426.jpg",
                title: "Завод",
            },
            {
                href: "",
                img: "https://sky.pro/media/wp-content/uploads/2022/03/glavnaya-22-1.png",
                title: "Школа",
            },
            {
                href: "",
                img: "https://pmskills.ru/wp-content/uploads/2020/06/czel-e1597352671426.jpg",
                title: "Промышленность",
            },
        ];
        return {
            products,
        };
    },
};
</script>

<template>
    <main>
        <h1 class="uppercase fs-title bg-third p-1 br-10 color-title">
            Наши проекты
        </h1>
        <div class="line-vertical bg-third"></div>
        <nav class="border-third br-10 p-1">
            <a
                v-for="(item, index) in products"
                :href="item.href"
                class="border-third br-10"
                :key="index"
            >
                <img :src="item.img" />
                <p class="fs-title color-title">{{ item.title }}</p>
            </a>
        </nav>
    </main>
</template>

<style lang="scss" scoped>
main {
    display: flex;
    flex-direction: column;
    align-items: center;
    .line-vertical {
        min-width: 3px;
        min-height: 5rem;
    }
    nav {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1rem;
        a {
            overflow: hidden;
            position: relative;
            img {
                aspect-ratio: 16/9;
            }
            p {
                position: absolute;
                top: -100%;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.5);
                display: flex;
                justify-content: center;
                align-items: center;
                transition: top 0.5s;
            }
            &:hover {
                p {
                    top: 0%;
                }
            }
        }
    }
}
@media screen and (max-width: 920px) {
    main {
        .line-vertical {
            min-height: 3rem;
        }
        nav {
            grid-template-columns: repeat(2, 1fr);
            a {
                p {
                    top: 0;
                }
            }
        }
    }
}
@media screen and (max-width: 420px) {
    main {
        nav {
            grid-template-columns: repeat(1, 1fr);
        }
    }
}
</style>
