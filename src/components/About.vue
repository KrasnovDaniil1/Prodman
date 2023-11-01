<script>
export default {
    setup() {},
};
</script>

<template>
    <main>
        <h1 class="uppercase fs-title bg-first p-1 br-10 color-title">О нас</h1>
        <div class="line-vertical bg-first"></div>
        <span class="text-center fs-text border-first br-10 p-1"
            >Реинжиниринг бизнес-процессов компании заключается в радикальном
            пересмотре и обновлении архитектуры цифровой системы учета. Мы
            фокусируем свою работу на основных аспектах: управление
            взаимодействием с клиентами, продажи, закупки, логистика склада,
            производство, контроль качества, управление финансами, обслуживание
            и ремонт оборудования. Наши заказчики - это организации из различных
            сфер промышленности и торговли.
        </span>
        <!-- <div class="line-vertical bg-first"></div> -->
        <!-- <iframe
            class="border-first br-10"
            src="https://www.youtube.com/embed/OCv7KfJat40"
            title="Элдос Алмазов - Я начал расти | Stand Up"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
        ></iframe> -->
    </main>
</template>

<style lang="scss" scoped>
main {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 3rem;
    .line-vertical {
        min-width: 3px;
        min-height: 5rem;
    }
}
@media screen and (max-width: 1024px) {
    main {
        .line-vertical {
            min-width: 3px;
            min-height: 3rem;
        }
    }
}
</style>
