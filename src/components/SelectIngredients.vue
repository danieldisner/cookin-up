<script lang="ts">
import { getCategories } from '@/http/index';
import type ICategory from '@/interfaces/ICategory';
import CardCategory from '@/components/CardCategory.vue';

export default {
    data() {
        return {
            categories: [] as ICategory[]
        }
    },
    async created() {
        this.categories = await getCategories();
    },
    components: { CardCategory },
    emits: ['addIngredient', 'remIngredient']
}
</script>

<template>
    <section class="select-ingredients">
        <h1 class="header ingredients-title">Ingredients</h1>
        <p class="paragraph-lg instructions">
            Select the ingredients you would like in your recipe
        </p>
        <ul class="categories">
            <li v-for="category in categories" :key="category.name">
                <CardCategory :category="category" @add-ingredient="$emit('addIngredient', $event)"
                    @rem-ingredient="$emit('remIngredient', $event)" />
            </li>
        </ul>

        <ul class="paragraph hint">
            *Attention: we assume you have salt, pepper and water at home.
        </ul>
    </section>
</template>

<style scoped>
.select-ingredients {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.ingredients-title {
    color: var(--verde-medio, #3D6D4A);
    display: block;
    margin-bottom: 1.5rem;
}

.instructions {
    margin-bottom: 2rem;
}

.categories {
    margin-bottom: 1rem;
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    flex-wrap: wrap;
}

.hint {
    align-self: flex-start;
    margin-bottom: 3.5rem;
}

@media only screen and (max-width: 767px) {
    .hint {
        margin-bottom: 2.5rem;
    }
}
</style>
