<template>
  <div class="card">
    <h2>Experiences</h2>
    <div class="xpEntry">
      <a href="#" target="_blank">
        <img
          src="@/assets/images/main-logo.png"
          alt="anas ali services"
          style="padding: 5px"
        />
      </a>

      <div class="info">
        <p class="date">Nov 2022 - Dec 2022</p>
        <p class="title">Full-Stack Web Development</p>
        <p class="description">
          Building and testing Full-Stack SPAs Web projects.
        </p>
      </div>
    </div>
    <div class="xpEntry">
      <a href="https://www.brainnest.consulting/" target="_blank">
        <img
          src="@/assets/images/Brainnest.png"
          alt="Brainnest consulting company"
        />
      </a>

      <div class="info">
        <p class="date">Mar 2023 - present</p>
        <p class="title">Front-end Development Industry Training Program</p>
        <p class="description">
          Building and testing professional level front-end projects using best
          coding practices.
        </p>
      </div>
    </div>
    <div class="xpEntry">
      <a href="https://www.frontendmentor.io/" target="_blank">
        <img
          src="@/assets/images/front-end_mentor_icon.png"
          alt="front-end mentor icon"
        />
      </a>

      <div class="info">
        <p class="date">Feb 2020 - Current</p>
        <p class="title">Production level projects training</p>
        <p class="description">
          Building front-end projects using common industry standard
          technologies.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ExperiencesCard',
};
</script>

<style scoped lang="scss">
.xpEntry {
  display: flex;
  flex-flow: row nowrap;
  align-items: flex-start;
  margin-bottom: 1rem;
  img {
    width: 3.18rem;
    margin-right: 0.5rem;
    border: 1px solid $azure-blue;
    border-radius: 1rem;
  }
  & > .info {
    p {
      margin: 0;
      margin-bottom: 0.5rem;
    }

    & > .date {
      font-size: 0.8rem;
    }
    & > .title {
      font-weight: 500;
    }
    & > .description {
    }
  }
}
</style>
