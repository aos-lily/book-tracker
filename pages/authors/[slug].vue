<template>
  <div>
    <h1>{{ author }}</h1>

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

const { data } = await useAsyncGql("booksByAuthorQuery", {
  author: route.params.slug
});

const author = data?.value.booksByAuthor.items[0].name;

const books =
  data?.value.booksByAuthor.items[0].linkedFrom.bookCollection.items;
</script>

<style lang="scss" scoped></style>
