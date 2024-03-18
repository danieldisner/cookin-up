<script lang="ts">
import type IRecipe from '@/interfaces/IRecipe';
import type { PropType } from 'vue';

export default {
    props: {
        recipe: { type: Object as PropType<IRecipe>, required: true }
    }
}
</script>

<template>
    <article class="recipe">
        <header class="recipe__header">
            <img class="recipe__image" :src="`/images/recipes/${recipe.image}`" :alt="`Photo of ${recipe.name}`">
        </header>

        <section class="recipe__body">
            <h2 class="paragraph recipe__name">
                {{ recipe.name }}
            </h2>
        </section>
    </article>
</template>

<style scoped>
.recipe {
    display: flex;
    width: 17.625rem;
    max-width: 19.5rem;
    flex-direction: column;
    align-items: center;

    border-radius: 1rem;
    background: var(--white, #FFF);
    box-shadow: 4px 4px 12px 0px rgba(68, 68, 68, 0.08);
}

.recipe__body {
    padding: 2rem 1rem;
}

.recipe__image {
    width: 100%;
    border-radius: 1rem 1rem 0rem 0rem;
    display: block;
}

.recipe__name {
    font-weight: 700;
    color: var(--grey, #444);
}
</style>
