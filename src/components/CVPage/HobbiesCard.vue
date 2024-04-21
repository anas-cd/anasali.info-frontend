<template>
  <q-card id="hobbies" class="card hobbies-card">
    <q-card-section class="header">
      <h1>hobbies</h1>
    </q-card-section>
    <q-card-section class="informatives">
      <ul class="hobbies-list">
        <li v-for="item in data" :key="item.name" class="hobby-item">
          <q-img :src="item.image" :alt="item.name" fit="cover"></q-img>
          <h3 class="hobby-name">{{ item.name }}</h3>
        </li>
      </ul>
    </q-card-section>
  </q-card>
</template>

<script setup>
import { ref } from "vue";
import { usePortfolioStore } from "src/stores/portfolio";

const store = usePortfolioStore();

const data = ref(store.hobbies);
</script>

<style lang="scss" scoped>
.q-card {
  .header {
    padding-bottom: 0;
  }
  .informatives {
    padding-top: 0;

    .hobbies-list {
      padding: 0;
      list-style: none;
      display: flex;
      flex-flow: column nowrap;

      .hobby-item {
        .q-img {
          border-radius: 10px;
          height: 7rem;
        }
        h3 {
          margin: 0;
          margin-top: -0.5rem;
          font-size: 1.3rem;
        }
      }
    }
  }
}
</style>
