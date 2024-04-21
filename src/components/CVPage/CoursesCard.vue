<template>
  <div class="courses-card">
    <q-card id="courses" class="card card-header">
      <q-card-section class="header">
        <h1>Courses</h1>
      </q-card-section>
      <q-card-actions class="swiper-nav-buttons">
        <q-btn
          icon="r_navigate_before"
          flat
          color="primary"
          @click="slide('prev')"
        ></q-btn>
        <q-btn
          icon="r_navigate_next"
          flat
          color="primary"
          @click="slide('next')"
        ></q-btn>
      </q-card-actions>
    </q-card>
    <div class="courses-list">
      <swiper-container ref="swiperEl" init="false">
        <swiper-slide v-for="course in data" :key="course.name">
          <CourseCard :course-data="course"></CourseCard>
        </swiper-slide>
      </swiper-container>
    </div>
  </div>
</template>

<script setup>
import CourseCard from "components/macro/CourseCard.vue";
import { onMounted, ref } from "vue";
import { usePortfolioStore } from "src/stores/portfolio";

const swiperEl = ref(null);
const store = usePortfolioStore();

const data = ref(store.courses);

/* --- Swiper logic start ---*/
// -- swiper props --
const swiperParams = {
  scrollbar: {
    hide: "false",
  },
  keyboard: true,
  freeMode: true,
  rewind: true,
  slidesPerView: 1,
  breakpoints: {
    1024: {
      slidesPerView: 2,
    },
  },
  autoplay: {
    delay: 2000,
    disableOnInteraction: true,
  },
};

// -- sliding function --
function slide(direction) {
  switch (direction) {
    case "next":
      swiperEl.value.swiper.slideNext(200, false);
      break;
    case "prev":
      swiperEl.value.swiper.slidePrev(200, false);
      break;

    default:
      break;
  }
}

onMounted(async () => {
  Object.assign(swiperEl.value, swiperParams);
  swiperEl.value.initialize();
});
/* --- end Swiper logic ---*/
</script>

<style lang="scss" scoped>
.courses-card {
  display: flex;
  flex-flow: column nowrap;

  .card-header {
    display: flex;
    flex-flow: row wrap;

    .swiper-nav-buttons {
      margin-inline-start: auto;

      .q-btn {
        border-radius: 7px;
        margin: 0 0.5rem;
      }
    }
  }

  .courses-list {
    margin: 0 0.5rem;
    display: grid;
    swiper-container {
      max-width: 100%; //
      width: 100%; // NOTE:
      max-height: 100vh; // these properties are needed for
      min-height: 0; // fixing the Swiper overflow problem
      min-width: 0; //

      swiper-slide {
        .course-card {
          box-shadow: $small-shadow;
          border: 1px solid transparent;
          margin: 1rem 0.5rem;
          height: 15rem;

          &:hover {
            transform: translateY(-5px);
            border-color: $accent;
          }
        }
      }
    }
  }
}
</style>
