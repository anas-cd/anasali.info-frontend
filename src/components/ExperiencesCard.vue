<template>
  <div class="card">
    <h2>Experiences</h2>
    <div class="xpEntry">
      <a href="https://www.frontendmentor.io/" target="_blank">
        <img
          src="@/assets/images/front-end_mentor_icon.png"
          alt="front-end mentor icon"
        />
      </a>

      <div class="info">
        <p class="date">Feb 2020 - Current</p>
        <p class="title">Productino level projects training</p>
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
