<script lang="ts">
import SelectIngredient from './SelectIngredients.vue';
import Tag from './Tag.vue';
import IngredientsList from './IngredientsList.vue';
export default {
    data() {
        return {
            ingredients: [] as string[]
        };
    },
    components: { SelectIngredient, Tag, IngredientsList },
    methods: {
        addIngredient(ingredient: string) {
            this.ingredients.push(ingredient)
        },
        remIngredient(ingredient: string) {
            this.ingredients = this.ingredients.filter(iList => ingredient !== iList);
        }
    }
}
</script>
<template>
    <main class="main-content">
        <IngredientsList :ingredients="ingredients" />
        <SelectIngredient @add-ingredient="addIngredient" @rem-ingredient="remIngredient" />
    </main>
</template>
<style scoped>
.main-content {
    padding: 6.5rem 7.5rem;
    border-radius: 3.75rem 3.75rem 0rem 0rem;
    background: var(--creme, #FFFAF3);
    color: var(--cinza, #444);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5rem;
}

.text-list {
    color: var(--coral, #F0633C);
    display: block;
    text-align: center;
    margin-bottom: 1.5rem;
}

.ingredients-list {
    display: flex;
    justify-content: center;
    gap: 1rem 1.5rem;
    flex-wrap: wrap;
}

.empty-list {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.25rem;
    color: var(--coral, #F0633C);
    text-align: center;
}

@media only screen and (max-width: 1300px) {
    .main-content {
        padding: 5rem 3.75rem;
        gap: 3.5rem;
    }
}

@media only screen and (max-width: 767px) {
    .main-content {
        padding: 4rem 1.5rem;
        gap: 4rem;
    }
}
</style>./SelectIngredients.vue