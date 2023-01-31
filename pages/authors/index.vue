<template>
  <div>
    <h1>All Authors</h1>
    <div
      ref="authorsList"
      v-for="(author, i) of authors"
      :key="`author-${i}`"
    >
      <li v-if="author.linkedFrom.bookCollection.total > 0">
        <NuxtLink :to="`/authors/${author.slug}`">{{ author.name }}</NuxtLink>
        ({{ author.linkedFrom.bookCollection.total }})
      </li>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { animateInOut } from "@/composables/animateInOut";

const { data, error } = await useAsyncGql("allAuthorsQuery", { limit: 100 });

const authors = data?.value.allAuthors.items;

const authorsList = ref();

animateInOut(authorsList);
</script>
