<template>
  <q-card id="experience" class="card experience-card">
    <q-card-section class="header">
      <h1>experience</h1>
    </q-card-section>
    <q-card-section class="informatives">
      <ul class="experience-list">
        <li
          v-for="(item, index) in data"
          :key="item.employer.startDate"
          class="experience-item"
        >
          <a :href="item.employer.website">
            <q-img
              :src="item.employer.image"
              :alt="item.employer.name"
              class="employer-image"
              fit="cover"
            ></q-img>
          </a>
          <div class="informatives">
            <header>
              <sup v-if="item.employer.name" class="employer-name">
                {{ item.employer.name }}
              </sup>
              <sup class="dates">
                {{ formatDate(item.startDate, "MMM YYYY") }}
                {{
                  item.endDate
                    ? " - " + formatDate(item.endDate, "MMM YYYY")
                    : " - Current"
                }}
              </sup>
              <sup class="employer-refs">
                {{
                  item.employer.refName
                    ? "reference: " + item.employer.refName + "."
                    : ""
                }}{{
                  item.employer.refContact
                    ? " ref contact: " + item.employer.refContact + "."
                    : ""
                }}
              </sup>
            </header>
            <h2>{{ item.role }}</h2>
            <p>{{ item.description }}</p>
            <q-separator v-if="index != data.length - 1"></q-separator>
          </div>
        </li>
      </ul>
    </q-card-section>
  </q-card>
</template>

<script setup>
import { ref } from "vue";
import { date } from "quasar";
import { usePortfolioStore } from "src/stores/portfolio";

const { formatDate } = date;
const store = usePortfolioStore();

const data = ref(store.experience);
</script>

<style lang="scss" scoped>
.q-card {
  .header {
    padding: 1rem;
    padding-bottom: 0;
  }
  .informatives {
    padding-top: 0;

    .experience-list {
      display: flex;
      flex-flow: column nowrap;
      padding: 0;
      list-style: none;

      .experience-item {
        display: flex;
        flex-flow: row nowrap;
        margin-bottom: 1rem;

        a {
          max-width: 3rem;
          width: 100%;
          transition-duration: 0.2s;

          &:hover {
            transform: translateY(-5px);
            .q-img {
              box-shadow: $small-shadow;
            }
          }
        }
        .informatives {
          margin-inline-start: 0.5rem;

          header {
            display: flex;
            flex-flow: column nowrap;
            color: $text-light;
            font-weight: bold;

            .employer-refs {
              font-weight: normal;
              font-size: smaller;
            }
          }

          & > p {
            margin: 0;
            margin-bottom: 0.25rem;
          }
        }
      }
    }
  }
}
</style>
