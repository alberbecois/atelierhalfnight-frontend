<script setup>
import { onMounted, onUnmounted, ref } from 'vue';

const props = defineProps({
    images: Array
})

let visibleCards = ref(0);
let firstCardIndex = ref(0);

onMounted(() => {
  window.addEventListener("resize", myEventHandler);
  myEventHandler({});
})

onUnmounted(() => {
  window.removeEventListener("resize", myEventHandler);
})

const myEventHandler = (e) => {
    // your code for handling resize...
    let vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
    visibleCards.value = Math.min(Math.floor(vw / 382), 5);
}

const isCardHidden = (index) => {
    const isVisible = index >= firstCardIndex.value && index < (firstCardIndex.value + visibleCards.value);
    return !isVisible;
}

const incrementCardIndex = () => {
    if (visibleCards.value + firstCardIndex.value < props.images.length) {
        firstCardIndex.value++;
    }
}

const decrementCardIndex = () => {
    if (firstCardIndex.value > 0) {
        firstCardIndex.value--;
    }
}
</script>

<template>
    <div class="flex flex-row gap-4 px-4 place-content-center items-center">
        <svg @click="decrementCardIndex()" class="h-10 cursor-pointer fill-white hover:fill-gray-200" :class="{invisible: firstCardIndex == 0}" width="100%" height="100%" viewBox="0 0 437 800" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
            <g transform="matrix(1,0,0,1,-181.818,-0.00151513)">
                <path id="Left-Arrow" serif:id="Left Arrow" d="M269.607,400.01L607.532,62.078C621.733,47.876 621.733,24.853 607.532,10.652C593.331,-3.549 570.308,-3.549 556.107,10.655L192.47,374.301C185.648,381.118 181.818,390.366 181.818,400.01C181.818,409.656 185.651,418.904 192.47,425.724L556.107,789.35C563.205,796.451 572.512,800 581.818,800C591.125,800 600.432,796.451 607.532,789.348C621.733,775.147 621.733,752.124 607.532,737.922L269.607,400.01Z"/>
            </g>
        </svg>
        <div v-for="image, index in images" class="flex shrink-0 w-[350px] p-6 bg-cardBackground border border-gray-200 rounded-lg shadow h-[600px] justify-center items-center" :class="{hidden: isCardHidden(index)}">
            <img :src=image.media_url class="w-64 border-2 border-cardStroke border- rounded-lg select-none"/>
        </div>
        <svg @click="incrementCardIndex()" class="h-10 cursor-pointer fill-white hover:fill-gray-200" :class="{invisible: firstCardIndex + visibleCards == props.images.length}" width="100%" height="100%" viewBox="0 0 346 800" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
            <g transform="matrix(1,0,0,1,-227.273,-0.000453138)">
                <path id="Right-Arrow" serif:id="Right Arrow" d="M565.456,378.172L292.73,14.548C280.677,-1.52 257.889,-4.773 241.822,7.275C225.754,19.326 222.498,42.119 234.549,58.184L490.911,399.993L234.549,741.816C222.498,757.881 225.756,780.676 241.822,792.725C248.362,797.632 256.018,800 263.611,800C274.667,800 285.586,794.977 292.73,785.452L565.456,421.808C575.153,408.88 575.153,391.101 565.456,378.172Z"/>
            </g>
        </svg>
    </div>
</template>

<style scoped>
</style>