<script>
export default {
    setup() {
        const text = [
            {
                num: "1",
                text: "Разработка устава. Тут мы фиксируем технологию выполнения и правила проекта, периметр задачи, описываем соглашения по коммуникациям, команде, управлению рисками.",
            },
            {
                num: "2",
                text: "Составляем реестр процессов по зафиксированному периметру проекту. Интервью с каждым ключевым учатсником процессов предприятия.",
            },
            {
                num: "3",
                text: "Выделяем ключевые процессы из реестра и составляем модель «Как есть», которая включает: блок-схему процессов в нотации BPMN или удобной для заказчика, реестр по форме с описанием «Вход - Выход» процесса, общее описание деятельности. Оформляем в отчёт об обследовании «Как есть»",
            },
            {
                num: "4",
                text: "Полученную модель сравниваем в отношении трёх сторон: требованиязадачи, возможности учётной системы, лучшие практики. В результате этого анализа получаем реестр отклонений того как организованного от того как будет.",
            },
            {
                num: "5",
                text: "По каждому блоку отклонений проводим работу в части принятия решения: отстраиваем/корректируем текущий процесс или реализуем программное обеспечение.",
            },
            {
                num: "6",
                text: "На основании принятых решений формируем функциональные требования к системе и составляем техническое задание на внедрение: процессов или разработку/внедрение системы.",
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
            Мы создаём инструменты бизнеса, которые гарантировано увеличат
            важный для вашей компании показатель.
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
