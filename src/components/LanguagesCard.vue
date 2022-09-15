<template>
  <div class="card">
    <h2>Langueges</h2>
    <div class="lang">
      <p>English</p>
      <div class="meterBar">
        <div class="meter meter__90"></div>
      </div>
    </div>
    <div class="lang">
      <p>Arabic</p>
      <div class="meterBar">
        <div class="meter meter__100"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LanguageCard',
};
</script>

<style scoped lang="scss">
.lang {
  display: flex;
  flex-flow: row nowrap;
  align-items: baseline;

  p {
    margin-top: 0;
    flex-basis: 50%;
    font-weight: 500;
  }
  .meterBar {
    width: 100%;
    height: 0.5rem;
    background-color: $gray;
    border-radius: 1rem;
    overflow: hidden;

    & > .meter {
      height: 100%;
      background-color: $azure-blue;
      border-radius: 1rem;

      &__50 {
        width: 50%;
      }
      &__60 {
        width: 60%;
      }
      &__70 {
        width: 70%;
      }
      &__80 {
        width: 80%;
      }
      &__90 {
        width: 90%;
      }
      &__95 {
        width: 95%;
      }
      &__100 {
        width: 100%;
      }
    }
  }
}
</style>
