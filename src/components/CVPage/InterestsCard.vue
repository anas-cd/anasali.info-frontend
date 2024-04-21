<template>
  <div class="interests-card">
    <q-card id="interests" class="card card-title">
      <q-card-section class="header">
        <h1>other interests</h1>
      </q-card-section>
    </q-card>
    <ul class="interests-list">
      <li v-for="item in data" :key="item.name" class="interest-item">
        <InterestCard :interest-data="item"></InterestCard>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { usePortfolioStore } from "src/stores/portfolio";
import InterestCard from "../macro/InterestCard.vue";

const store = usePortfolioStore();

const data = ref(store.interests);
</script>

<style lang="scss" scoped>
.interests-card {
  display: flex;
  flex-flow: column nowrap;

  .interests-list {
    margin: 1rem;
    margin-top: 0;
    padding: 0;
    list-style: none;

    .interest-item {
      margin: 1rem 0;
    }
  }
}
</style>
