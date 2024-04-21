<template>
  <q-card
    :class="[
      'card project-card',
      orientationValue == 'horizontal'
        ? 'project-card__horizontal'
        : 'project-card__vertical',
    ]"
  >
    <q-card-section class="visuals">
      <q-img
        :src="projectData.image"
        :alt="projectData.name"
        fit="cover"
        class="project-image"
      ></q-img>
    </q-card-section>
    <q-card-section class="informatives">
      <header class="project-tags">
        <q-chip v-for="tag in projectData.tags" :key="tag" dense square>{{
          tag
        }}</q-chip>
      </header>
      <h2 class="project-name">{{ projectData.name }}</h2>
      <p class="project-description">
        {{ projectData.description }}
      </p>
      <q-card-actions class="card-buttons">
        <q-btn
          class="cta-btn"
          unelevated
          color="primary"
          :href="projectData.demoLink"
          target="_blank"
          >demo</q-btn
        >
        <q-btn
          class="cta-btn"
          outline
          color="primary"
          :href="projectData.codeLink"
          target="_blank"
          >code</q-btn
        >
      </q-card-actions>
    </q-card-section>
    <q-resize-observer @resize="reOrient" />
  </q-card>
</template>

<script setup>
import { ref } from "vue";

const prop = defineProps({
  projectData: {
    type: Object,
    required: true,
  },
  orientation: {
    type: String,
    required: false,
    default: "horizontal",
  },
});

const orientationValue = ref(prop.orientation);
function reOrient(size) {
  if (size.width <= 420) {
    orientationValue.value = "vertical";
  } else orientationValue.value = prop.orientation;
}
</script>

<style lang="scss" scoped>
.project-card {
  display: flex;

  &__horizontal {
    flex-flow: row nowrap;

    .visuals {
      flex: 0 0 40%;
      padding-right: 0;
    }
  }
  &__vertical {
    flex-flow: column nowrap;

    .visuals {
      width: 100%;
      padding-bottom: 0;
    }

    .card-buttons {
      display: flex;
      flex-flow: column nowrap;
      margin: 0;

      .q-btn {
        width: 100%;
        margin: 0.25rem;
        height: 2.5rem;
      }
    }
  }

  .project-image {
    border-radius: 10px;
    width: 100%;
    height: 100%;
  }

  .informatives {
    padding-top: 0.5rem;

    .project-tags {
      margin: 0 -0.25rem;
    }

    .project-description {
      margin: 0;
    }
    .card-buttons {
      margin: 0 -0.5rem;
      padding-bottom: 0;

      .q-btn {
        padding: 0 1.5rem;
      }
    }
  }
}
</style>
