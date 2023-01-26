<template>
  <div>
    <h1>{{ genre }}</h1>

    <div
      v-for="(book, i) of books"
      :key="`book-${i}`"
    >
      <ModulesBookThumb :book="book" />
    </div>
  </div>
</template>

<script setup>
const route = useRoute();

const { data } = await useAsyncGql("booksByGenreQuery", {
  genre: route.params.slug
});

const genre = data?.value.booksByGenre.items[0].name;

const books = data?.value.booksByGenre.items[0].linkedFrom.bookCollection.items;
</script>

<style lang="scss" scoped></style>
