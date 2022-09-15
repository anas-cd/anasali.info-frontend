<template>
  <div class="card">
    <h2>Training</h2>
    <div class="TEntry">
      <h3 class="title">&bull; Project developing</h3>
      <p class="by">
        By -
        <a href="https://www.frontendmentor.io/" target="_blank"
          >Frontend mentor</a
        >
      </p>
      <p class="description">
        Frontend Mentor provides designs so that anyone can practice their
        front-end skills using a real-life workflow.
      </p>
    </div>
    <div class="TEntry">
      <h3 class="title">&bull; Vue course</h3>
      <p class="by">
        By -
        <a href="https://www.vuemastery.com/" target="_blank">Vuemastery</a>
      </p>
      <p class="description">
        Vue Mastery is the ultimate learning resource for Vue.js developers.
      </p>
    </div>
    <div class="TEntry">
      <h3 class="title">&bull; Fullstack PHP course</h3>
      <p class="by">
        By -
        <a href="https://www.udemy.com/user/phptraining/" target="_blank"
          >Srini Vanamala [Udemy]</a
        >
      </p>
      <p class="description">
        Learning to build websites with HTML , CSS , JAVASCRIPT , Bootstrap ,
        PHP , MySQL , WordPress , OOP & more!
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TrainingCard',
};
</script>

<style scoped lang="scss">
.TEntry {
  font-weight: 500;
  border-bottom: 1px solid $orange-red;
  &:nth-last-child(1) {
    border-bottom: none;
  }
  a {
    color: $azure-blue;
    text-decoration: none;
  }
  & > .title {
    margin-left: 1rem;
  }
  & > .description {
    font-weight: 400;
  }
}
</style>
