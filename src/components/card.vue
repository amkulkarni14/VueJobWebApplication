<script setup>

defineProps({
    bg:{
        default:'bg-gray-100 p-6 rounded-lg shadow-md'
    }
});
</script>

<template>
    <div :class="bg">
        <slot></slot>
    </div>
</template>