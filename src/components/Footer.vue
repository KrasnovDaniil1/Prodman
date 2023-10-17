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
    <footer class="p-1 fs-text color-title">
        <div class="left">
            <img :src="logo" />
            <p class="p-1">
                <span> ООО «Продман»</span>
                <span> ИНН: 3906387320</span>
                <span>КПП: 390601001</span>
                <span>ОГРН: 1203900000017</span>
            </p>
        </div>
        <div class="right text-center">
            <img :src="logo" />
            <p class="p-1">
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
    position: relative;
    div {
        display: flex;
        align-items: center;
        img {
            // width: 15%;
            // min-width: 100px;
            height: 100%;
            max-width: 100px;
        }
        p {
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
    }
    .right {
        img {
            max-width: 50px;
        }
    }
}

@media screen and (max-width: 768px) {
    footer {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        div {
            img {
                max-width: 75px;
            }
        }
        .right {
            flex-direction: row;
            justify-content: center;
            img {
                max-width: 50px;
            }
        }
    }
}
</style>
