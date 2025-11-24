<script setup>
const props = defineProps({
    type: String,
    value: String,
    label: String,
    onSelect: Function,
    onDeselect: Function
});

const onClick = (e) => {
    if(e.target.checked) {
        props.onSelect(props.type, props.value);
    } else {
        props.onDeselect(props.type, props.value);
    }
}
</script>

<template>
    <div class="">
        <input class="me-2" type="checkbox" :id="props.value" @click="onClick"/><label :for="props.value">{{ props.label }}</label>
    </div>
</template>