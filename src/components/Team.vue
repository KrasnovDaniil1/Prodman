<script>
import TeamStructure from "../assets/TeamStructure.svg";
export default {
    setup() {
        return {
            TeamStructure,
        };
    },
};
</script>

<template>
    <main>
        <h1 class="uppercase fs-title bg-fourth p-1 br-10 color-title">
            Продман - это команда
        </h1>
        <div class="line-vertical bg-fourth"></div>

        <img class="border-fourth br-10" :src="TeamStructure" />
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
