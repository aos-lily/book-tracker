<template>
  <div>
    <h1>{{ genre }}</h1>

    <div ref="main">
      <div
        v-for="(book, i) of books"
        :key="`book-${i}`"
      >
        <ModulesBookThumb :book="book" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { animateFadeUp } from "@/composables/animateFadeUp";

const route = useRoute();

const { data } = await useAsyncGql("booksByGenreQuery", {
  genre: route.params.slug
});

const genre = data?.value.booksByGenre.items[0].name;

const books = data?.value.booksByGenre.items[0].linkedFrom.bookCollection.items;

const main = ref();

animateFadeUp(main);
</script>

<style lang="scss" scoped></style>
