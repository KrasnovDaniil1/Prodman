<script>
import { ref } from "vue";
import first from "../assets/feedback/1.webp";
import second from "../assets/feedback/2.jpg";

export default {
    setup() {
        const stepSlide = ref(0);
        const feedback = [
            {
                src: first,
                text: "Во-первых, нужно было регламентировать все действия по ремонту оборудования, обязательно отследить порядок их выполнения, а затем подтвердить. Поэтому на первом этапе для того, чтобы сформировать в автоматическом режиме годовой план планово-предупредительных работ, мы создали технологические карты. Этим занимались специалисты службы главного инженера под моим руководством. Затем технологические карты были оцифрованы. Эти работы выполнила калининградская IT-компания «Продман». Технологические карты сведены программным продуктом для автоматического формирования и визуализации годового плана планово-предупредительных работ», - отметил Игорь Кобзарев",
                alt: "Игорь Кобзарев, главный инженер рыбзавода «За Родину",
                href: "#",
            },
            {
                src: second,
                text: "Была организована секция по водному полу для любителей. По начало оплата занятий была неудобной – мы переводили деньги на единый счёт через мобильное приложение банка. Иногда возникали ситуации, когда человек оплачивал тренировку, но не приходил. Это требовало дополнительного учёта для переноса оплаченной тренировки на следующее занятие.С увеличением числа участников стало сложно вести все эти процедуры и учёты. За помощью мы обратились в компанию 'Продман'. По итогу была внедрена CRM система, которая не только упорядочила нашу команду, но и появился способ принимать платежи в соответствии с ФЗ-54. В ней мы организовали автоматизацию и процесс купли продажи стал гораздо проще, а учёт легче.",
                alt: "Клуб любителей Водного поло",
                href: "https://yandex.ru/web-maps/org/157134517860/reviews?reviews[publicId]=kv749g9rdxz8y8upaj3w2z9aj8&utm_source=my_review",
            },
        ];
        const carusel = ref();
        const rightSlide = () => {
            stepSlide.value += 1;
            if (stepSlide.value > carusel.value.children.length - 2) {
                stepSlide.value = 0;
            }
            carusel.value.style.transform = `translateX(-${
                50 * stepSlide.value
            }%)`;
        };
        const leftSlide = () => {
            stepSlide.value -= 1;
            if (stepSlide.value < 0) {
                stepSlide.value = carusel.value.children.length - 2;
            }
            carusel.value.style.transform = `translateX(-${
                50 * stepSlide.value
            }%)`;
        };
        return {
            stepSlide,
            feedback,
            leftSlide,
            rightSlide,
            carusel,
            first,
        };
    },
};
</script>

<template>
    <main>
        <div class="line-vertical bg-sixth"></div>
        <h1
            class="uppercase fs-title bg-sixth p-1 br-10 color-title text-center"
        >
            Отзывы
        </h1>
        <div class="line-vertical bg-sixth"></div>
        <div class="carusel fs-text border-sixth br-10 p-1">
            <nav class="carusel__btn-block color-title">
                <button class="btn bg-sixth p-1 br-10" @click="leftSlide">
                    <i class="fas fa-chevron-left"></i>
                    Предыдущее
                </button>
                <button class="btn bg-sixth p-1 br-10" @click="rightSlide">
                    Следующее
                    <i class="fas fa-chevron-right"></i>
                </button>
            </nav>
            <div class="carusel__block">
                <div class="carusel__cards-block" ref="carusel">
                    <div
                        class="card text-center br-10 border-sixth p-1"
                        v-for="(item, index) in feedback"
                        :key="index"
                    >
                        <img
                            class="card__img br-10"
                            :src="item.src"
                            :alt="item.alt"
                        />
                        <p class="card__des font-text">
                            {{ item.text }}
                        </p>
                        <a
                            :href="item.href"
                            class="card__link bg-sixth color-title p-1 br-10"
                            >Весь отзыв</a
                        >
                    </div>
                </div>
            </div>
        </div>
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
    .carusel {
        width: 100%;
        .carusel__btn-block {
            display: flex;
            justify-content: space-between;
            margin-bottom: 1rem;
        }
        .carusel__block {
            overflow-x: hidden;
            .carusel__cards-block {
                display: flex;
                flex-wrap: nowrap;
                transition: 0.5s;
                .card {
                    width: 50%;
                    max-width: 50%;
                    min-width: 50%;
                    .card__img {
                        aspect-ratio: 16/9;
                        object-fit: cover;
                        object-position: top;
                    }
                    .card__des {
                        display: -webkit-box;
                        -webkit-line-clamp: 15;
                        -webkit-box-orient: vertical;
                        overflow: hidden;
                    }
                    .card__link {
                        margin-top: 1rem;
                        display: block;
                    }
                }
            }
        }
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
