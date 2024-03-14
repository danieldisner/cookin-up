<script lang="ts">
import Tag from './Tag.vue';

export default {
    components: { Tag },
    props: {
        ingredient: { type: String, required: true }
    },
    data() {
        return {
            selected: false
        }
    },
    methods: {
        onClick() {
            this.selected = !this.selected;
            if (this.selected) {
                this.$emit('addIngredient', this.ingredient);
            } else {
                this.$emit('remIngredient', this.ingredient);
            }
        }
    },
    emits: ['addIngredient', 'remIngredient']
}
</script>
<template>
    <button class="ingredient" @:click="onClick()">
        <Tag :text="ingredient" :active="selected" />
    </button>
</template>
<style scoped>
.ingredient {
    cursor: pointer;
}
</style>