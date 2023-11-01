<script>
export default {
    setup() {
        const text = [
            {
                num: "1",
                text: "Анализ текущего состояния предприятия: определение основных проблем и слабых мест, которые требуют реинжиниринговых решений.",
            },
            {
                num: "2",
                text: "Разработка архитектуры реинжиниринга: определение целей и задач, разработка стратегии и плана действий.",
            },
            {
                num: "3",
                text: "Создание новых бизнес-процессов: разработка и внедрение новых процессов, которые будут более эффективными и результативными.",
            },
            {
                num: "4",
                text: "Внедрение новых технологий и автоматизация: использование современных технологий и автоматизированных систем для улучшения бизнес-процессов.",
            },
            {
                num: "5",
                text: "Обучение персонала: проведение обучающих программ и тренингов для сотрудников, чтобы они могли эффективно работать в новых условиях.",
            },
            {
                num: "6",
                text: "Мониторинг и контроль: постоянное отслеживание результатов реинжиниринга, анализ и корректировка процессов при необходимости.",
            },
            {
                num: "7",
                text: "Оценка результатов: анализ достигнутых результатов и эффективности реинжиниринговых мероприятий, принятие решений о необходимости дальнейших изменений.",
            },
        ];
        return {
            text,
        };
    },
};
</script>

<template>
    <main class="fs-text">
        <div class="line-vertical bg-second"></div>
        <div class="line-decor bg-second"></div>
        <h1 class="p-1 uppercase fs-title bg-second br-10 color-title">
            Этапы разработки
        </h1>
        <nav v-for="i in text" :key="i">
            <p
                class="border-second br-10 p-1 text-center bg-white"
                :class="{ 'opacity-0': i.num % 2 == 0 }"
            >
                {{ i.text }}
            </p>
            <div
                class="line-horizontal bg-second"
                :class="{ 'opacity-0': i.num % 2 == 0 }"
            ></div>
            <div class="br-50 bg-second color-title square fs-title">
                {{ i.num }}
            </div>
            <div
                class="line-horizontal bg-second"
                :class="{ 'opacity-0': i.num % 2 != 0 }"
            ></div>
            <p
                class="border-second br-10 p-1 text-center bg-white"
                :class="{ 'opacity-0': i.num % 2 != 0 }"
            >
                {{ i.text }}
            </p>
        </nav>
        <h2 class="border-second p-1 br-10 text-center bg-white">
            Создаём инструменты управления, которые гарантировано увеличивают
            важнейшие для вашей компании показатели.
        </h2>
        <div class="line-vertical bg-second"></div>
    </main>
</template>

<style lang="scss" scoped>
main {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    .line-vertical {
        min-width: 3px;
        min-height: 5rem;
    }
    .line-decor {
        position: absolute;
        width: 3px;
        height: 100%;
    }
    h1 {
        margin-bottom: 5rem;
        z-index: 1;
    }
    nav {
        z-index: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        .square {
            min-width: 5rem;
            min-height: 5rem;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .line-horizontal {
            min-width: 5rem;
            min-height: 3px;
        }
    }
    h2 {
        margin-top: 5rem;
        z-index: 1;
    }
}
@media screen and (max-width: 1024px) {
    main {
        .line-vertical {
            min-width: 3px;
            min-height: 3rem;
        }
        h1 {
            margin-bottom: 0px;
        }
        nav {
            flex-direction: column;
            p:first-child,
            .line-horizontal {
                display: none;
            }
            p:last-child {
                opacity: 1;
            }
            .square {
                margin: 3rem 0;
            }
        }
        h2 {
            margin-top: 3rem;
        }
    }
}
</style>
