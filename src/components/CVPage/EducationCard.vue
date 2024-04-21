<template>
  <q-card id="education" class="card education-card">
    <q-card-section class="header">
      <h1>education</h1>
    </q-card-section>
    <q-card-section class="informatives">
      <ul class="diplomas-list">
        <li v-for="diploma in data" :key="diploma.name" class="diploma-item">
          <p class="diploma-name">
            <q-icon name="r_school" class="icon"></q-icon>{{ diploma.name }}
          </p>
          <sub class="sub-text">{{
            diploma.source + " - " + diploma.country
          }}</sub>
          <ul class="diploma-courses-list">
            <li
              v-for="course in diploma.courses"
              :key="course"
              class="diploma-course-item"
            >
              {{ course }}
            </li>
          </ul>
        </li>
      </ul>
    </q-card-section>
  </q-card>
</template>

<script setup>
import { ref } from "vue";
import { usePortfolioStore } from "src/stores/portfolio";

const store = usePortfolioStore();

const data = ref(store.education);
</script>

<style lang="scss" scoped>
.q-card {
  .header {
    padding-bottom: 0;
  }
  .informatives {
    padding-top: 0.5rem;

    .diplomas-list {
      margin: 0;
      padding: 0;
      list-style: none;

      .diploma-item {
        .diploma-name {
          margin: 0;
          font-size: 1rem;
          font-weight: bold;

          .icon {
            margin: 0 0.5rem;
          }
        }

        .sub-text {
          font-weight: bold;
          color: $text-light;
        }

        .diploma-courses-list {
          margin: 0.5rem 0;
          padding-left: 1.5rem;
        }
      }
    }
  }
}
</style>
