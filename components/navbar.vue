<script setup>
// Imports //
import { ref, onMounted } from 'vue';
const route = useRoute();

// Catch window scroll //
const scrolling = ref(false);
const headerScroll = () => {
    if(window.scrollY >= 30){
        scrolling.value = true;
    }else{
        scrolling.value = false;
    }
}
onMounted(() => {
    window.addEventListener("scroll", headerScroll);})
</script>

<template>
    <div class="header sticky top-0 flex items-center justify-between px-4 py-4 font-crimson text-lg transition ease-in-out delay-150 z-30 h-[72px]" 
        :class="{ 'bg-white text-stone-800': !scrolling, 'bg-stone-800 text-white': scrolling }">
        <div>
            <svg 
                width="100%" 
                height="100%" 
                viewBox="0 0 300 236" 
                version="1.1" xmlns="http://www.w3.org/2000/svg" 
                xmlns:xlink="http://www.w3.org/1999/xlink" 
                xml:space="preserve" 
                xmlns:serif="http://www.serif.com/" 
                style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;" 
                class="h-10 px-3" 
                :class="{ 'transition ease-in-out fill-stone-800': !scrolling, 'transition ease-in-out fill-white':scrolling }"
            >
                <g transform="matrix(1,0,0,1,-390.589,-336.382)">
                    <g transform="matrix(1,0,0,1,-661.163,-4.28452)">
                        <g transform="matrix(0.84094,0,0,0.84094,741.012,119.069)">
                            <path d="M401.743,543.358C381.44,514.465 369.516,479.265 369.516,441.303C369.516,343.177 449.181,263.512 547.306,263.512C645.432,263.512 725.097,343.177 725.097,441.303C725.097,479.265 713.173,514.465 692.869,543.358C702.321,522.926 707.595,500.175 707.595,476.201C707.595,387.735 635.772,315.912 547.306,315.912C458.841,315.912 387.018,387.735 387.018,476.201C387.018,500.175 392.292,522.926 401.743,543.358Z"/>
                        </g>
                    </g>
                </g>
            </svg>
        </div>
        <div class="menu">
            <nav class="px-3">
                <ul class="flex gap-[20px]">
                    <li class="hover:text-yellow-600" :class="{ 'transition ease-in-out text-yellow-600': !scrolling && route.fullPath == '/', 'transition ease-in-out text-stone-400': scrolling && route.fullPath == '/' }">
                        <NuxtLink to="/">Home</NuxtLink>
                    </li>
                    <li class="hover:text-yellow-600" :class="{ 'transition ease-in-out text-yellow-600': !scrolling && route.fullPath == '/about', 'transition ease-in-out text-stone-400': scrolling && route.fullPath == '/about' }">
                        <NuxtLink to="/about">About</NuxtLink>
                    </li>
                    <li class="hover:text-yellow-600" :class="{ 'transition ease-in-out text-yellow-600': !scrolling && route.fullPath == '/projects', 'transition ease-in-out text-stone-400': scrolling && route.fullPath == '/projects' }">
                        <NuxtLink to="/projects">Projects</NuxtLink>
                    </li>
                    <li class="hover:text-yellow-600" :class="{ 'transition ease-in-out text-yellow-600': !scrolling && route.fullPath == '/events', 'transition ease-in-out text-stone-400': scrolling && route.fullPath == '/events' }">
                        <NuxtLink to="/events">Events</NuxtLink>
                    </li>
                    <li class="hover:text-yellow-600" :class="{ 'transition ease-in-out text-yellow-600': !scrolling && route.fullPath == '/blog', 'transition ease-in-out text-stone-400': scrolling && route.fullPath == '/blog' }">
                        <NuxtLink to="/blog">Blog</NuxtLink>
                    </li>
                    <li class="hover:text-yellow-600">
                        <a href="http://atelierhalfnight.bigcartel.com" target="_blank">Shop</a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<style scoped>
</style>