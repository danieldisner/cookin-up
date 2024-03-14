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
    }
}
</script>
<template>
    <button class="ingredient" @:click="selected = !selected">
        <Tag :text="ingredient" :active="selected" />
    </button>
</template>
<style scoped>
.ingredient {
    cursor: pointer;
}
</style>