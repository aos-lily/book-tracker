<template>
  <div class="book-thumb">
    <NuxtLink :to="`/books/${slug}`"><img :src="cover" /></NuxtLink>
    <p>
      <NuxtLink :to="`/books/${slug}`">{{ title }}</NuxtLink>
    </p>

    <p>
      By
      <span
        v-for="(author, index) in authors?.items"
        :key="index"
      >
        <NuxtLink :to="`/authors/${author.slug}`">{{ author.name }}</NuxtLink
        ><span v-if="index != authors?.items.length - 1">, </span>
      </span>
    </p>
  </div>
</template>

<script setup>
const props = defineProps({
  book: {
    type: Object,
    default: () => ({
      cover: {
        contentType: "image/jpeg",
        url: null
      },
      title: "",
      slug: "",
      authors: {
        name: "",
        slug: ""
      }
    })
  }
});

const cover = computed(() => props.book?.cover?.url);
const title = computed(() => props.book?.title);
const slug = computed(() => props.book?.slug);
const authors = computed(() => props.book?.authors);
</script>

<style lang="scss" scoped>
.book-thumb {
  background-color: #999;
  margin: 3rem;
}
</style>
