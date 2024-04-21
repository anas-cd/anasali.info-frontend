<template>
  <q-card class="course-card card">
    <a
      :href="courseData.sourceLink"
      target="_blank"
      @click.prevent="localBrowser.openLink(courseData.sourceLink)"
    >
      <header>
        <h2 class="course-title">{{ courseData.name }}</h2>
      </header>
      <q-separator></q-separator>
      <q-card-section class="informatives">
        <p class="course-source">
          By -
          <span class="course-source-name">{{ courseData.sourceName }}</span>
        </p>
        <p class="course-description">{{ courseData.description }}</p>
      </q-card-section>
    </a>
  </q-card>
</template>

<script setup>
import localBrowser from "src/utils/localBrowser";

const props = defineProps({
  courseData: {
    type: Object,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.q-card {
  overflow: hidden;
  transition-duration: 0.2s;

  a {
    text-decoration: none;
    color: $text-dark;

    header {
      padding: 1rem;
      padding-bottom: 0.65rem;
    }

    .informatives {
      font-size: 1rem;

      .course-source {
        color: $text-dark-40;
        .course-source-name {
          font-weight: bold;
          color: $primary-70;
        }
      }
      .course-description {
        margin: 0;
      }
    }
  }
}
</style>
