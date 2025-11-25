<script setup>
import { gsap } from "gsap";
import { onMounted, ref } from 'vue';

// Animations
onMounted(() => {
    gsap.from(
        "#pageTitle",
        { 
            x: +24,
            opacity: 0,
            duration: 0.8,
            ease: 'ease'
        }
    )
    gsap.to(
        "#magicStar",
        { rotation: 360, duration: 20, repeat: -1, ease: "linear" }
    )
});
</script>

<template>
    <section>
        <div class="max-w-screen-xl mx-auto pt-8 pb-20 px-2">
            <div class="relative">
                <img class="w-[100px] absolute -z-10 top-1/2 -translate-y-1/2" id="magicStar" src="/icons/MagicStar.svg" />
                <h1 class="py-10 ps-8 text-4xl text-stone-800 font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl font-poppins" id="pageTitle">
                    Projects Past and Present
                </h1>
            </div>
        </div>
    </section>
</template>