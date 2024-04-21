<template>
  <q-card id="skills" class="card skills-card">
    <q-card-section class="skill-type-section skill-type-section__primary">
      <h1 class="skill-type">primary skills</h1>
      <ul class="skills-list">
        <li v-for="skill in data.primary" :key="skill.label" class="skill-item">
          <q-icon :name="`r_${skill.icon}`" class="skill-icon"></q-icon>
          <div class="skill-info">
            <p class="skill-label">{{ skill.label }}</p>
            <sub v-if="skill.description" class="skill-description">{{
              skill.description
            }}</sub>
          </div>
        </li>
      </ul>
    </q-card-section>
    <q-card-section
      v-if="data.supportive"
      class="skill-type-section skill-type-section__supportive"
    >
      <h1 class="skill-type">supportive skills</h1>
      <ul class="skills-list">
        <li
          v-for="(skill, index) in data.supportive"
          :key="skill"
          class="skill-item"
        >
          <p class="skill">{{ skill }}</p>
          <span v-if="index != data.supportive.length - 1" class="space">
            -
          </span>
        </li>
      </ul>
    </q-card-section>
    <q-card-section class="skill-type-section skill-type-section__soft">
      <h1 class="skill-type">soft skills</h1>
      <ul class="skills-list">
        <li v-for="(skill, index) in data.soft" :key="skill" class="skill-item">
          <p class="skill">{{ skill }}</p>
          <span v-if="index != data.soft.length - 1" class="space"> - </span>
        </li>
      </ul>
    </q-card-section>
  </q-card>
</template>

<script setup>
import { ref } from "vue";
import { usePortfolioStore } from "src/stores/portfolio";

const store = usePortfolioStore();

const data = ref(store.skills);
</script>

<style lang="scss" scoped>
.q-card {
  display: flex;
  flex-flow: column nowrap;
  font-size: 1rem;
  .skill-type-section {
    display: flex;
    flex-flow: column nowrap;
    padding-bottom: 0;

    .skills-list {
      margin-bottom: 0;
      padding: 0;
      list-style: none;
    }

    &__primary {
      .skills-list {
        .skill-item {
          display: flex;
          flex-flow: row nowrap;
          align-items: flex-start;
          margin-bottom: 0.75rem;

          .skill-icon {
            font-size: 1.75rem;
          }

          .skill-info {
            margin-inline-start: 1rem;

            .skill-label {
              margin: 0;
              margin-bottom: -0.5rem;
            }
            .skill-description {
              color: $text-light;
              line-height: 1rem;
            }
          }
        }
      }
    }
    &__supportive {
      .skills-list {
        display: flex;
        flex-flow: row wrap;

        .skill-item {
          display: flex;
          flex-flow: row nowrap;
          margin: 0.5rem 0;

          .skill {
            margin: 0;
          }

          .space {
            margin: 0 0.25rem;
          }
        }
      }
    }
    &__soft {
      .skills-list {
        display: flex;
        flex-flow: row wrap;

        .skill-item {
          display: flex;
          flex-flow: row nowrap;
          margin: 0.5rem 0;

          .skill {
            margin: 0;
          }

          .space {
            margin: 0 0.25rem;
          }
        }
      }
    }
  }
}
</style>
