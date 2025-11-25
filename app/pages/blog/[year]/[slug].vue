<script setup>

const route = useRoute();

</script>

<template>
    <article>
        <ContentDoc :path="`/posts/${route.params.year}/${route.params.slug}`" v-slot="{ doc }">
            <div class="text-center p-5">
                <ContentRenderer :value="doc"></ContentRenderer>
            </div>
        </ContentDoc>
    </article>
</template>