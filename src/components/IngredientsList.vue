<script lang="ts">
import type { PropType } from 'vue';
import Tag from './Tag.vue';
export default {
    components: { Tag },
    props: {
        ingredients: { type: Array as PropType<string[]>, required: true }
    },
}
</script>

<template>
    <section>
        <span class="subtitle-lg text-list">
            Your List
        </span>

        <ul v-if="ingredients.length" class="ingredients-list">
            <li v-for="ingredient in ingredients" :key="ingredient">
                <Tag :text="ingredient" active />
            </li>
        </ul>

        <p v-else class="paragraph empty-list">
            <img src="../assets/images/icons/empty-list.svg" alt="Search Icon">
            Your list is empty, please, select some ingredients.
        </p>
    </section>
</template>

<style scoped>
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
</style>