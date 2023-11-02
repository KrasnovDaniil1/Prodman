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
    <footer class="p-1 fs-footer color-title">
        <div class="left">
            <img :src="logo" alt="продман" />
            <p class="px-1">
                <span> ООО «Продман»</span>
                <span> ИНН: 3906387320</span>
                <span>КПП: 390601001</span>
                <span>ОГРН: 1203900000017</span>
            </p>
        </div>
        <div class="right text-center">
            <img :src="logo" alt="prodman" />
            <p class="px-1">
                <span>Сайт разработан:</span>
                <span>студией Продман</span>
            </p>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
footer {
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    div {
        display: flex;
        align-items: center;
        font-size: 1rem;
        img {
            max-width: 50px;
            max-height: 100%;
        }
        p {
            display: flex;
            flex-direction: column;
        }
    }
    .right {
        img {
            max-width: 25px;
        }
    }
}

@media screen and (max-width: 768px) {
    footer {
        div {
            img {
                max-width: 35px;
            }
        }
        .right {
            img {
                max-width: 20px;
            }
        }
    }
}
</style>
