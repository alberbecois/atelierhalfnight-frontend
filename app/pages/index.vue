<script setup>
import { gsap } from "gsap";
import { onMounted, ref } from 'vue';
import Axios from 'axios';

// IG API
const ig_endpoint = import.meta.env.VITE_IG_API_ENDPOINT;
const ig_token = import.meta.env.VITE_INSTAGRAM_TOKEN;
let portfolio = ref([]);
await useFetch(`${ig_endpoint}${ig_token}`, {
    onResponse({ request, response, options }) {
        portfolio.value = response._data.data.filter((el) => el.media_type == "IMAGE");
    },
    onRequestError({ request, options, error }) {
        console.log(error);
    }
})

// Animations
onMounted(() => {
    gsap.from(
        "#heroText",
        { 
            y: -24,
            opacity: 0,
            duration: 0.8,
            ease: 'ease'
        }
    )
    gsap.from(
        "#heroImage",
        {
            y: 24,
            opacity: 0,
            duration: 1,
            ease: 'ease'
        }
    )
    gsap.from(
        ".pointer",
        {
            y: -5,
            opacity: 0,
            duration: 0.8,
            ease: 'ease',
            yoyo: true,
            repeat: -1
        }
    )
    gsap.to(
        "#magicCircle",
        { rotation: 360, duration: 20, repeat: -1, ease: "linear" }
    )
    gsap.to(
        ".star-group-one",
        { rotation: 360, duration: 20, repeat: -1, ease: "linear", delay: 0.05 },
    )
    gsap.to(
        ".star-group-two",
        { rotation: -360, duration: 20, repeat: -1, ease: "linear", delay: 0.05 }
    )
});

</script>

<template>
    <!-- Hero Section -->
    <section id="hero">
        <div class="grid max-w-screen-xl px-4 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div class="mr-auto place-self-center lg:col-span-7">
                <div class="relative -z-50">
                    <img class="absolute" id="magicCircle" src="/images/MagicCircle.svg" />
                </div>
                <div id="heroText" class="md:ps-3">
                    <h1
                        class="max-w-2xl pt-10 text-4xl text-stone-800 font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl font-poppins mb-4">
                        Welcome to my workshop
                    </h1>

                    <p class="max-w-2xl mb-6 font-light font-crimson text-xl text-stone-600 lg:mb-8 md:text-lg lg:text-xl py-4">
                    Hi, my name is Josh I'm an artist, designer and programmer. Here you can find my artwork, projects, and if you're interested in supporting
                    what I do, my shop. Treat yourself to something. I won't tell anybody.
                    </p>
                    <div class="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                        <a href="" target="_blank"
                            class="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-gray-900 border border-gray-200 rounded-lg sm:w-auto hover:bg-gray-100 focus:ring-4 focus:ring-gray-100">
                            <svg class="w-4 h-4 mr-2 text-gray-600" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 496 512">
                                <path
                                    d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z">
                                </path>
                            </svg> <span class="font-poppins">View on GitHub</span>
                        </a>

                        <a href="" target="_blank"
                            class="inline-flex items-center justify-center w-full px-5 py-3 mb-2 mr-2 text-sm font-medium text-white font-poppins bg-yellow-600 rounded-lg sm:w-auto focus:outline-none hover:bg-yellow-100 hover:text-gray-800 focus:z-10 focus:ring-4 focus:ring-yellow-200">
                            Contact Me
                        </a>
                    </div>
                </div>
            </div>

            <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
                <img src="/images/LeonineAndSorin.jpg" alt="hero image" id="heroImage">
            </div>
        </div>

        <div class="flex justify-center items-center py-5 bg-white">
            <img src="/icons/down_arrow.svg" class="w-5 pointer select-none"/>
        </div>
    </section>

    <!-- Gallery Section -->
    <section class="bg-starTexture bg-cover relative">
        <div class="absolute w-full h-full bg-zinc-600 bg-opacity-70"></div>
        <div class="relative pt-6"><h1 class="text-white font-light font-crimson text-3xl text-center">Recent Artworks</h1></div>
        <div class="relative z-10" v-if="(portfolio.length > 0)">
            <div class="py-6 pb-10 md:pb-20 z-20"><Gallery :images="portfolio" /></div>
        </div>
        <div v-else>
            <div class="relative h-[40rem] w-100 z-20">
                <img class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[6rem] star-group-one" src="/images/Star.svg" />
                <img class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[32.5rem] star-group-two" src="/images/StarCircle.svg" />
                <img class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[18rem] star-group-one" src="/images/StarRing.svg" />
                <img class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[35rem] star-group-two" src="/images/Stardust.svg" />
                <h1 class="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl text-amber-50 font-poppins opacity-80">Loading...</h1>
            </div>
        </div>
    </section>

    <!-- Mailing List Section -->
    <section class="bg-violet-400">
        <div id="mc_embed_shell">
            <div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
                <div class="px-6 py-6 md:px-12 lg:flex lg:items-center lg:px-16">
                    <div class="lg:flex-1 xl:w-0">
                        <h2 class="text-2xl font-poppins font-extrabold tracking-tight text-white sm:text-3xl">Email Newsletter</h2>
                        <p class="mt-3 max-w-3xl text-xl font-crimson leading-6 text-indigo-200">Sign up to my mailing list for shop updates and more.</p>
                    </div>
                    <div class="mt-8 sm:w-full sm:max-w-md xl:mt-0 xl:ml-8" id="mc_embed_signup">
                        <form action="https://gmail.us13.list-manage.com/subscribe/post?u=517624ed61694d9d71df1382c&amp;id=d7435149db&amp;f_id=0081f7e7f0" method="post" class="validate" id="mc-embedded-subscribe-form" target="_self" name="mc-embedded-subscribe-form" novalidate="">
                            <div id="mc_embed_signup_scroll">
                                <div class="mc-field-group sm:flex">
                                    <div id="mce-responses" class="clear foot">
                                        <div class="response" id="mce-error-response" style="display: none;"></div>
                                        <div class="response" id="mce-success-response" style="display: none;"></div>
                                    </div>
                                    <div aria-hidden="true" style="position: absolute; left: -5000px;">
                                        /* real people should not fill this in and expect good things - do not remove this or risk form bot signups */
                                        <input type="text" name="b_517624ed61694d9d71df1382c_d7435149db" tabindex="-1" value="">
                                    </div>
                                    <input type="email" autocomplete="email" name="EMAIL" id="mce-EMAIL" required="" class="w-full rounded-md border-white px-5 py-3 font-poppins placeholder-gray-500 focus:outline-none focus:ring-0" placeholder="Enter your email">
                                    <button type="submit" name="subscribe" id="mc-embedded-subscribe" class="mt-3 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-500 px-5 py-3 text-base font-medium font-poppins text-white shadow hover:bg-indigo-400 focus:outline-none focus:ring-0 sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0">Subscribe</button>
                                </div>
                            </div>
                        </form>
                        <p class="mt-3 text-sm font-crimson text-indigo-200">No spam, just relevant info. Promise.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
#hero {
    background: rgb(0,0,0);
    background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(255,255,255,1) 85%);
}
</style>