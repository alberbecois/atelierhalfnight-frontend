<script setup>
    const props = defineProps({
        label: String,
    })
</script>

<template>
    <div class="inline-block me-3">
        <button class="bg-yellow-600 px-3 py-1 rounded-xl text-white">
            {{ props.label }}
        </button>
    </div>
</template>