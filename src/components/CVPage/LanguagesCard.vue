<template>
  <q-card id="languages" class="card languages-card">
    <q-card-section class="header">
      <h1>languages</h1>
    </q-card-section>
    <q-card-section class="informatives">
      <ul class="languages-list">
        <li v-for="item in data" :key="item.lang" class="language-item">
          <p>
            <span class="language-name">{{ item.lang + " " }}</span
            >-{{ " " + item.level }}
          </p>
        </li>
      </ul>
    </q-card-section>
  </q-card>
</template>

<script setup>
import { ref } from "vue";
import { usePortfolioStore } from "src/stores/portfolio";

const store = usePortfolioStore();

const data = ref(store.languages);
</script>

<style lang="scss" scoped>
.q-card {
  .header {
    padding-bottom: 0;
  }
  .informatives {
    padding-top: 0;

    .languages-list {
      padding: 0;
      list-style: none;

      .language-item {
        margin-bottom: 0.5rem;
        p {
          margin: 0;
          font-size: 1rem;

          .language-name {
            font-weight: bold;
          }
        }
      }
    }
  }
}
</style>
