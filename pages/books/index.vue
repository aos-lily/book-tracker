<template>
  <div>
    <h1>AllBooks</h1>
    <div ref="main">
      <div
        class="book"
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

const { data, error } = await useAsyncGql("allBooksQuery", { limit: 100 });

const books = data?.value.allBooks.items;

const main = ref();

animateFadeUp(main);
</script>
