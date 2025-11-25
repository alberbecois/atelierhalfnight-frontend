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

// Date Formattting
const formatDate = (date) => {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('.');
}

// Nuxt Content
const { data: docs, status, error } = await useAsyncData('blogs', () => {
  return queryCollection('docs')
    .where('draft', '=', 'false')
    .order('date', 'DESC')
    .select('title', 'year', 'slug', 'date', 'description')
    .all()
})
</script>

<template>
    <section>
        <div class="max-w-screen-xl mx-auto pt-8 pb-20 px-2 font-poppins text-stone-800">
            <div class="relative ps-10 xl:ps-0">
                <img class="w-[100px] absolute -z-10 top-1/2 -translate-y-1/2" id="magicStar" src="/icons/MagicStar.svg" />
                <h1 class="py-10 ps-10 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl" id="pageTitle">
                    Latest from the Atelier
                </h1>
            </div>
            <div class="grid grid-cols-12 gap-5 ps-10 xl:ps-0">
                <div class="col-span-6 pt-20">
                    <div v-for="doc in docs" :key="doc.slug" :to="doc.year +'/'+ doc.slug" class="pb-3">
                        <hr class="border-stone-400">
                        <span class="pe-5 font-bold">{{ formatDate(doc.date) }}</span>
                        <h3 class="py-4 inline-block font-crimson text-lg"><NuxtLink to="/">{{ doc.title }}</NuxtLink></h3>
                        <hr class="border-stone-400">
                    </div>
                </div>
                <div class="col-span-6">
                    <img src="/images/Sabine.png" />
                </div>
            </div>
        </div>
    </section>
</template>