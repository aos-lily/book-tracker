<template>
  <div>
    <div class="book-cover">
      <img :src="book.cover?.url" />
    </div>
    <div class="book-detail">
      <h1 class="book-title">{{ book.title }}</h1>
      <h2
        class="book-series"
        v-if="book.series"
      >
        (<NuxtLink :to="`/series/${book.series.slug}`"
          >{{ book.series.title }}
          <span v-if="book.seriesOrder">#{{ book.seriesOrder }}</span></NuxtLink
        >)
      </h2>
      <p class="book-author">
        By
        <span
          v-for="(author, index) in book.authors?.items"
          :key="index"
        >
          <NuxtLink :to="`/authors/${author.slug}`">{{ author.name }}</NuxtLink
          ><span v-if="index != book.authors?.items.length - 1">, </span>
        </span>
      </p>
      <p
        class="book-published-date"
        v-if="publishedDate"
      >
        {{ publishedDate }}
      </p>
      <div
        class="book-synopsis"
        v-if="synopsis"
      >
        <div v-html="synopsis"></div>
      </div>
    </div>
    <div
      class="book-notes"
      v-if="book.rating || startDate || completedDate || review"
    >
      <p
        class="book-rating"
        v-if="book.rating"
      >
        Rating: {{ book.rating }}
      </p>

      <p
        class="book-start-date"
        v-if="startDate"
      >
        Started on: {{ startDate }}
      </p>

      <p
        class="book-completed-date"
        v-if="completedDate"
      >
        Completed on: {{ completedDate }}
      </p>

      <div
        class="book-review"
        v-if="review"
      >
        Review:
        <div v-html="review"></div>
      </div>
    </div>
    <div
      class="book-genres"
      v-if="book.genres"
    >
      <ul
        v-for="(genre, index) in book.genres?.items"
        :key="index"
      >
        <li>
          <NuxtLink :to="`/genres/${genre.slug}`">{{ genre.name }}</NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
const { $translateRichText, $dateTranslate } = useNuxtApp();

const { data } = await useAsyncGql("bookBySlugQuery", {
  slug: route.params.slug
});

const book = data?.value.book.items[0];

const synopsis = computed(() =>
  book.synopsis?.json ? $translateRichText(book.synopsis.json) : null
);

const review = computed(() =>
  book.review?.json ? $translateRichText(book.review.json) : null
);

const publishedDate = computed(() =>
  book.publishedDate ? $dateTranslate(book.publishedDate).long : ""
);

const startDate = computed(() =>
  book.startDate ? $dateTranslate(book.startDate).long : ""
);

const completedDate = computed(() =>
  book.completedDate ? $dateTranslate(book.completedDate).long : ""
);
</script>

<style lang="scss" scoped></style>
