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
            >Весь опыт организации сконцентрированы вокруг разработки
            архитектуры цифровой системы учёта по направлениям: управление
            взаимоотношениями с клиентами, продажи, закупки, складская
            логистика, производство, качество, управление финансами, управление
            обслуживанием и ремонтом оборудования. Основные клиенты - это
            производственные предприятия из сектора лёгкой промышленности,
            пищевой промышленности и индустриальной промышленности. Первым делом
            мы разбираемся с задачей, которую вам предстоит решить. Слышим вас и
            ваши потребности.
        </span>
        <div class="line-vertical bg-first"></div>
        <iframe
            class="border-first br-10"
            src="https://www.youtube.com/embed/OCv7KfJat40"
            title="Элдос Алмазов - Я начал расти | Stand Up"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
        ></iframe>
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
}
</style>
