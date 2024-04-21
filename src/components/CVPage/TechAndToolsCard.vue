<template>
  <q-card id="tech-and-tools" class="card tech-and-tools-card">
    <q-card-section class="header">
      <h1>tech stack</h1>
    </q-card-section>
    <q-card-section class="tech-stack-section">
      <!-- -- primary tech -- -->
      <h2>primary tech</h2>
      <ul class="primary-tech-list">
        <li
          v-for="item in data.tech.primary"
          :key="item.label"
          class="primary-tech-item"
        >
          <a :href="item.link" target="_blank">
            <q-img
              :src="item.img"
              :alt="item.tip"
              class="tech-image"
              fit="fill"
            ></q-img>
            <div class="informatives">
              <p class="tech-label">{{ item.label }}</p>
              <q-linear-progress
                size="10px"
                rounded
                :value="item.progress"
              ></q-linear-progress>
            </div>
          </a>
          <q-tooltip>{{ item.tip }}</q-tooltip>
        </li>
      </ul>
      <!-- -- supportive tech -- -->
      <h2 v-if="data.tech.supportive">supportive tech</h2>
      <ul v-if="data.tech.supportive" class="supportive-tech-list">
        <li
          v-for="item in data.tech.supportive"
          :key="item.label"
          class="supportive-tech-item"
        >
          <a :href="item.link">
            <q-img
              :src="item.img"
              :alt="item.tip"
              class="tech-image"
              fit="fill"
            ></q-img>
            <p class="tech-label">{{ item.label }}</p>
          </a>
          <q-tooltip>{{ item.tip }}</q-tooltip>
        </li>
      </ul>
    </q-card-section>
    <q-separator></q-separator>
    <!-- -- tools -- -->
    <q-card-section class="tools-section">
      <h1>tools</h1>
      <ul class="tools-list">
        <li v-for="item in data.tools" :key="item.label" class="tool-item">
          <a :href="item.link" target="_blank">
            <q-img
              :src="item.img"
              :alt="item.tip"
              class="tool-image"
              fit="fill"
            ></q-img>
            <p class="tool-label">{{ item.label }}</p>
          </a>
          <q-tooltip>{{ item.tip }}</q-tooltip>
        </li>
      </ul>
    </q-card-section>
  </q-card>
</template>

<script setup>
import { ref } from "vue";
import { usePortfolioStore } from "src/stores/portfolio";

const store = usePortfolioStore();

const data = ref(store.techAndTools);
</script>

<style lang="scss" scoped>
.q-card {
  display: flex;
  flex-flow: column nowrap;

  .header {
    padding-bottom: 0;
  }
  .tech-stack-section {
    display: flex;
    flex-flow: column nowrap;

    .primary-tech-list {
      padding: 0;
      list-style: none;
      margin: 0.25rem 0;

      .primary-tech-item {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        margin-bottom: 0.5rem;

        &:hover {
          a {
            color: $primary;

            .tech-image {
              transform: translateY(-5px);
            }
          }
        }
        a {
          display: flex;
          flex-flow: row nowrap;
          width: 100%;
          text-decoration: none;
          color: $text-dark;

          .tech-image {
            max-width: 2rem;
            width: 100%;
            transition-duration: 0.2s;
          }

          .informatives {
            display: flex;
            flex-flow: column nowrap;
            width: 100%;
            margin-inline-start: 0.5rem;

            .tech-label {
              margin: 0;
              font-size: 1rem;
            }
          }
        }
      }
    }

    .supportive-tech-list {
      display: flex;
      flex-flow: row wrap;
      margin: 0.25rem 0;
      padding: 0;
      list-style: none;

      .supportive-tech-item {
        margin: 0.25rem 0.75rem;
        max-width: 2.5rem;
        width: 100%;
        transition-duration: 0.2s;

        &:hover {
          transform: translateY(-5px);
        }
        a {
          display: flex;
          flex-flow: column nowrap;
          align-items: center;
          justify-content: space-between;
          height: 100%;
          text-decoration: none;
          color: $text-dark;

          .tech-image {
            margin-bottom: 0.25rem;
          }
          .tech-label {
            margin: 0;
          }
        }
      }
    }
  }

  .tools-section {
    .tools-list {
      display: flex;
      flex-flow: row wrap;
      margin: 0.25rem 0;
      padding: 0;
      list-style: none;

      .tool-item {
        margin: 0.25rem 0.75rem;
        max-width: 2.5rem;
        width: 100%;
        transition-duration: 0.2s;

        &:hover {
          transform: translateY(-5px);
        }
        a {
          display: flex;
          flex-flow: column nowrap;
          align-items: center;
          justify-content: space-between;
          height: 100%;
          text-decoration: none;
          color: $text-dark;

          .tool-image {
            margin-bottom: 0.25rem;
          }
          .tool-label {
            margin: 0;
          }
        }
      }
    }
  }
}
</style>
