<template>
  <div>
    <h1>AllBooks</h1>
    <div
      v-for="(book, i) of books"
      :key="`book-${i}`"
    >
      <ModulesBookThumb :book="book" />
    </div>
  </div>
</template>

<script setup>
const { data, error } = await useAsyncGql("allBooksQuery", { limit: 100 });

const books = data?.value.allBooks.items;
</script>
