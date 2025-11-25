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
        <div class="max-w-screen-xl mx-auto pt-8 pb-10 px-2">
            <div class="relative">
                <img class="w-[100px] absolute -z-10 top-1/2 -translate-y-1/2" id="magicStar" src="/icons/MagicStar.svg" />
                <h1 class="py-10 ps-7 text-4xl text-stone-800 font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl font-poppins" id="pageTitle">
                    About Me
                </h1>
            </div>
        </div>
    </section>
    <section>
        <div class="max-w-4xl mx-auto px-4 pb-20">
            <p class="font-light font-crimson text-xl text-stone-600">Hello, and thank you for visiting my page! I know that these days there is no shortage of media dividing 
                our attentions so I appreciate you spending some of your time with me and my work. If you're interested in what I do, let me tell you a little about myself.
            </p>
            <br>
            <p class="font-light font-crimson text-xl text-stone-600">I'm a Montreal based artist working primarily digitally, although I'm also trying to work more traditional
                media into my practice. I do mostly character art with graphic design elements to fill out my compositions and add decorative or symbolic elements. I'm heavily
                inspired by the works of Japanese artists such as Yoshitaka Amano, Tomomi Kobayashi, and Ayami Kojima. I'm also inspired by Western artists such as Gerald Brom
                and Moebius and of course golden age illustrators such as Harry Clarke, and Edmund DuLac.
            </p>
            <br>
            <p class="font-light font-crimson text-xl text-stone-600">When I'm not drawing, I'm probably spending time with my friends or gaming. I'm a huge fan of turn-based 
                RPGs like Final Fantasy, Persona, or my current favorite the Trails (Kiseki) series. I also play TTRPGs with my partner whenever we have the opportunity.
            </p>
            <br>
            <p class="font-light font-crimson text-xl text-stone-600">I often have too many personal projects on the go, and I love to learn new skills. If you'd like to know
                more about what I'm currently working on, feel free to visit the Projects page. If you would like to work with me on a project, then I would love to hear from you
                please feel free to reach out to me with the details of your project to see if we're a good fit. Thanks again for taking an interest in me and what I do.
            </p>
        </div>
    </section>
</template>