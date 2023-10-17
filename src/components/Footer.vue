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
    <footer class="p-1 fs-title color-title">
        <div class="left">
            <img :src="logo" />
            <p class="p-1">
                <span> ООО «Продман»</span>
                <span> ИНН: 3906387320</span>
                <span>КПП: 390601001</span>
                <span>ОГРН: 1203900000017</span>
            </p>
        </div>
        <div class="right fs-text text-center">
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
        img {
            // width: 15%;
            // min-width: 100px;
            max-width: 200px;
        }
        p {
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
    }
    .right {
        img {
            max-width: 75px;
        }
    }
}
@media screen and (max-width: 1024px) {
    footer {
        flex-direction: column;
        align-items: center;
        div {
            img {
                max-width: 150px;
            }
        }
        .right {
            width: 100%;
            height: auto;
            align-self: flex-start;
            justify-content: end;
            img {
                max-width: 50px;
            }
        }
    }
}
@media screen and (max-width: 420px) {
    footer {
        div {
            flex-direction: column;
            align-items: center;
            text-align: center;
            img {
                max-width: 100px;
            }
        }
        .right {
            flex-direction: row;
            justify-content: center;
        }
    }
}
</style>
