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
                title: "Ощутимый результат Ощутимый результат Ощутимый результат",
                alt: "Игорь Кобзарев, главный инженер рыбзавода «За Родину",
                href: "https://www.kaliningrad.kp.ru/daily/27572/4842214/?erid=Kra23zEQ7",
            },
            {
                src: second,
                text: "Была организована секция по водному полу для любителей. По начало оплата занятий была неудобной – мы переводили деньги на счёт через мобильное приложение банка. Иногда возникали ситуации, когда человек оплачивал тренировку, но не приходил. Это требовало дополнительного учёта для переноса оплаченной тренировки на следующее занятие.С увеличением числа участников стало сложно вести все эти процедуры и учёты. За помощью мы обратились в компанию 'Продман'. По итогу была внедрена CRM система, которая не только упорядочила нашу команду, но и появился способ принимать платежи в соответствии с ФЗ-54. В ней мы организовали автоматизацию и процесс купли продажи стал гораздо проще, а учёт легче.",
                alt: "Клуб любителей Водного поло",
                title: "Водное поло",
                href: "https://yandex.ru/web-maps/org/157134517860/reviews?reviews[publicId]=kv749g9rdxz8y8upaj3w2z9aj8&utm_source=my_review",
            },
            {
                src: first,
                text: "Во-первых, нужно было регламентировать все действия по ремонту оборудования, обязательно отследить порядок их выполнения, а затем подтвердить. Поэтому на первом этапе для того, чтобы сформировать в автоматическом режиме годовой план планово-предупредительных работ, мы создали технологические карты. Этим занимались специалисты службы главного инженера под моим руководством. Затем технологические карты были оцифрованы. Эти работы выполнила калининградская IT-компания «Продман». Технологические карты сведены программным продуктом для автоматического формирования и визуализации годового плана планово-предупредительных работ», - отметил Игорь Кобзарев",
                title: "Ощутимый результат",
                alt: "Игорь Кобзарев, главный инженер рыбзавода «За Родину",
                href: "https://www.kaliningrad.kp.ru/daily/27572/4842214/?erid=Kra23zEQ7",
            },
            {
                src: second,
                text: "Была организована секция по водному полу для любителей. По начало оплата занятий была неудобной – мы переводили деньги на счёт через мобильное приложение банка. Иногда возникали ситуации, когда человек оплачивал тренировку, но не приходил. Это требовало дополнительного учёта для переноса оплаченной тренировки на следующее занятие.С увеличением числа участников стало сложно вести все эти процедуры и учёты. За помощью мы обратились в компанию 'Продман'. По итогу была внедрена CRM система, которая не только упорядочила нашу команду, но и появился способ принимать платежи в соответствии с ФЗ-54. В ней мы организовали автоматизацию и процесс купли продажи стал гораздо проще, а учёт легче.",
                alt: "Клуб любителей Водного поло",
                title: "Водное поло",
                href: "https://yandex.ru/web-maps/org/157134517860/reviews?reviews[publicId]=kv749g9rdxz8y8upaj3w2z9aj8&utm_source=my_review",
            },
        ];
        const carusel = ref();
        const rightSlide = () => {
            let elemCarusel = 3;
            let elemWidth = 33.5;
            let widthClient = document.documentElement.clientWidth;
            if (widthClient <= 768 && widthClient > 420) {
                elemCarusel = 2;
                elemWidth = 50.5;
            } else if (widthClient <= 420) {
                elemCarusel = 1;
                elemWidth = 100;
            }
            stepSlide.value += 1;
            if (stepSlide.value > carusel.value.children.length - elemCarusel) {
                stepSlide.value = 0;
            }
            carusel.value.style.transform = `translateX(-${
                elemWidth * stepSlide.value
            }%)`;
        };
        const leftSlide = () => {
            let elemCarusel = 3;
            let elemWidth = 33.5;
            let widthClient = document.documentElement.clientWidth;
            if (widthClient <= 768 && widthClient > 420) {
                elemCarusel = 2;
                elemWidth = 50.5;
            } else if (widthClient <= 420) {
                elemCarusel = 1;
                elemWidth = 100;
            }
            stepSlide.value -= 1;
            if (stepSlide.value < 0) {
                stepSlide.value = carusel.value.children.length - elemCarusel;
            }
            carusel.value.style.transform = `translateX(-${
                elemWidth * stepSlide.value
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
        <div class="carusel fs-news border-sixth br-10 p-1">
            <nav class="carusel__btn-block color-title">
                <button class="btn color-news p-1 br-10" @click="leftSlide">
                    <i class="fas fa-chevron-left"></i>
                    Предыдущее
                </button>
                <button class="btn color-news p-1 br-10" @click="rightSlide">
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
                        <h2 class="card__title">{{ item.title }}</h2>
                        <img
                            class="card__img br-10"
                            :src="item.src"
                            :alt="item.alt"
                        />
                        <p class="card__des">
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
                    width: 33%;
                    max-width: 33%;
                    min-width: 33%;
                    margin-right: 0.5%;
                    transition: all 0.5s;
                    &:hover {
                        background: rgb(205, 205, 205);
                    }
                    .card__img {
                        aspect-ratio: 16/9;
                        object-fit: cover;
                        object-position: top;
                    }
                    .card__des {
                        display: -webkit-box;
                        -webkit-line-clamp: 6;
                        -webkit-box-orient: vertical;
                        overflow: hidden;
                    }
                    .card__link {
                        margin-top: 1rem;
                        display: block;
                        &:visited {
                            color: white;
                        }
                    }
                    .card__title {
                        font-weight: bold;
                        display: -webkit-box;
                        -webkit-line-clamp: 1;
                        -webkit-box-orient: vertical;
                        overflow: hidden;
                        margin-bottom: 1rem;
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
@media screen and (max-width: 768px) {
    main {
        .carusel {
            .carusel__block {
                .carusel__cards-block {
                    .card {
                        width: 49.5%;
                        max-width: 49.5%;
                        min-width: 49.5%;
                        margin-right: 1%;
                    }
                }
            }
        }
    }
}
@media screen and (max-width: 420px) {
    main {
        .carusel {
            .carusel__block {
                .carusel__cards-block {
                    .card {
                        width: 100%;
                        max-width: 100%;
                        min-width: 100%;
                        margin-right: 0;
                    }
                }
            }
        }
    }
}
</style>
