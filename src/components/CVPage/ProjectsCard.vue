<template>
  <div class="projects-card">
    <q-card id="projects" class="card card-title">
      <q-card-section class="header">
        <h1>projects</h1>
      </q-card-section>
    </q-card>
    <q-virtual-scroll
      v-slot="{ item, index }"
      :items="data"
      style="max-height: 35rem"
      class="projects-list"
    >
      <q-item :key="index">
        <ProjectCard :project-data="item"></ProjectCard>
      </q-item>
    </q-virtual-scroll>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { usePortfolioStore } from "src/stores/portfolio";
import ProjectCard from "../macro/ProjectCard.vue";

const store = usePortfolioStore();

/**
 * NOTE: data shouldn't be reactive if it's a large list for q-virtual-scroll
 * for more info visit
 * https://quasar.dev/vue-components/virtual-scroll#usage
 */
const data = ref(store.projects);
</script>

<style lang="scss" scoped>
.projects-card {
  display: flex;
  flex-flow: column nowrap;

  .projects-list {
    position: relative;
    &::after {
      content: "";
      display: block;
      position: sticky;
      bottom: -2px;
      width: 100%;
      height: 2rem;
      background: $page-bg-40;
      background: linear-gradient(0deg, $page-bg 0%, #f5f5f500 100%);
    }
  }
  .card-title {
    box-shadow: $small-shadow;
    z-index: 1;
  }
}
</style>
