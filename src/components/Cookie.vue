<script>
import { onMounted, ref } from "vue";
export default {
    setup() {
        const cookieModal = ref(true);
        const cookieAgree = () => {
            document.cookie = "agree=true;";
            checkCookie();
        };
        const checkCookie = () => {
            document.cookie.split("; ").reduce((acc, item) => {
                const [name, value] = item.split("=");
                if (name == "agree") {
                    cookieModal.value = false;
                }
            }, {});
        };
        onMounted(() => {
            checkCookie();
        });
        return {
            cookieModal,
            cookieAgree,
            checkCookie,
        };
    },
};
</script>

<template>
    <main class="cookie fs-text color-title p-1" v-if="cookieModal">
        <span>
            Этот сайт использует cookie для хранения данных. Продолжая
            использовать сайт, Вы даёте согласие на работу с этими файлами.
        </span>
        <button class="colot-text p-1 br-10" @click="cookieAgree">
            Принять
        </button>
    </main>
</template>

<style lang="scss" scoped>
.cookie {
    z-index: 999 !important;
    position: fixed;
    top: 100%;
    right: 0;
    transform: translateY(-100%);
    // max-width: 500px;
    width: 100%;
    background: rgba(0, 0, 0, 0.8);
    text-align: center;
    display: flex;
    // flex-direction: column;
    align-items: center;
    justify-content: space-between;
    button {
        margin-top: 10px;
        background: rgb(230, 230, 230);
    }
}

</style>
