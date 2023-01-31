<template>
  <ScaleTransition>
    <div>
      <h1>All Genres</h1>
      <ul
        v-for="(genre, i) of allGenres"
        :key="`genre-${i}`"
      >
        <li v-if="genre.linkedFrom.bookCollection.total > 0">
          <NuxtLink :to="`/genres/${genre.slug}`">{{ genre.name }}</NuxtLink>
          ({{ genre.linkedFrom.bookCollection.total }})
        </li>
      </ul>
    </div>
  </ScaleTransition>
</template>

<script setup>
import ScaleTransition from "@/components/transitions/ScaleTransition.vue";
const { data, error } = await useAsyncGql("allGenresQuery");
const allGenres = data?.value.allGenres?.items;
</script>
