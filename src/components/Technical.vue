<script>
export default {
    setup() {},
};
</script>

<template>
    <main>
        <div class="line-vertical bg-fifth"></div>
        <h1
            class="uppercase fs-title bg-fifth p-1 br-10 color-title text-center"
        >
            Технология исполнения проектов
        </h1>
        <div class="line-vertical bg-fifth"></div>
        <span class="text-center fs-text border-fifth br-10 p-1"
            >Мы предлагаем двухнедельные «Сессии» как базовую единицу измерения
            и отслеживания прогресса проекта. В конце каждой сессии вы получаете
            ожидаемые результаты и платите только за выполненную работу. Мы
            также придерживаемся определенных правил на протяжении каждой
            сессии, включая ежедневные пятиминутные встречи, отчетность по
            средам, планирование следующей недели по пятницам и общий комитет
            для обсуждения новых требований. Оплата осуществляется по схеме
            50/50 за каждую сессию, что позволяет обеспечить гибкость и доверие
            в нашей совместной работе.
        </span>
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
@media screen and (max-width: 1024px) {
    main {
        .line-vertical {
            min-width: 3px;
            min-height: 3rem;
        }
    }
}
</style>
