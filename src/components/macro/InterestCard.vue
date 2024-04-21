<template>
  <q-card
    :class="[
      'card interest-card',
      orientationValue == 'horizontal'
        ? 'interest-card__horizontal'
        : 'interest-card__vertical',
    ]"
  >
    <q-card-section class="informatives">
      <h2 class="title">{{ interestData.name }}</h2>
      <sub class="sub-text">{{ interestData.subText }}</sub>
      <p class="description">{{ interestData.description }}</p>
      <q-btn
        v-if="interestData.link"
        class="cta"
        :href="interestData.link"
        target="_blank"
        outline
        color="primary"
        >view more</q-btn
      >
    </q-card-section>
    <q-card-section class="visuals">
      <q-img
        :src="interestData.image"
        :alt="interestData.name"
        fit="cover"
      ></q-img>
    </q-card-section>
    <q-resize-observer @resize="reOrient" />
  </q-card>
</template>

<script setup>
import { ref } from "vue";
const props = defineProps({
  interestData: {
    type: Object,
    required: true,
  },
  orientation: {
    type: String,
    required: false,
    default: "horizontal",
  },
});

const orientationValue = ref(props.orientation);
function reOrient(size) {
  if (size.width <= 420) {
    orientationValue.value = "vertical";
  } else orientationValue.value = props.orientation;
}
</script>

<style lang="scss" scoped>
.interest-card {
  display: flex;
  flex-flow: row nowrap;

  &__horizontal {
    .visuals {
      flex: 0 0 40%;

      .q-img {
        height: 100%;
      }
    }
  }
  &__vertical {
    flex-flow: column nowrap;

    .visuals {
      width: 100%;
      order: 1;

      .q-img {
        height: 10rem;
      }
    }
    .informatives {
      order: 2;
      padding-top: 0;
    }
  }
  .informatives {
    .title {
      margin: 0;
      line-height: 1;
    }
    .sub-text {
      font-weight: bold;
      color: $text-light;
      font-size: 0.8rem;
    }
    .description {
      margin: 0.5rem 0;
    }
    .cta {
      border-radius: 7px;
      width: 100%;
    }
  }

  .visuals {
    .q-img {
      border-radius: 10px;
    }
  }
}
</style>
