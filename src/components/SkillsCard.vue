<template>
  <div class="card">
    <div class="focus">
      <h2>Focus on skills</h2>
      <div class="FSkill">
        <p>CSS / SCSS</p>
        <div class="meterBar">
          <div class="meter meter__95"></div>
        </div>
      </div>
      <div class="FSkill">
        <p>Javascript</p>
        <div class="meterBar">
          <div class="meter meter__70"></div>
        </div>
      </div>
      <div class="FSkill">
        <p>Vue</p>
        <div class="meterBar">
          <div class="meter meter__80"></div>
        </div>
      </div>
      <div class="FSkill">
        <p>Laravel PHP</p>
        <div class="meterBar">
          <div class="meter meter__80"></div>
        </div>
      </div>
      <div class="FSkill">
        <p>APIs</p>
        <div class="meterBar">
          <div class="meter meter__70"></div>
        </div>
      </div>
      <div class="FSkill">
        <p>Jquery</p>
        <div class="meterBar">
          <div class="meter meter__50"></div>
        </div>
      </div>
      <div class="FSkill">
        <p>HTML</p>
        <div class="meterBar">
          <div class="meter meter__90"></div>
        </div>
      </div>
    </div>
    <div class="other">
      <h2>Other skills</h2>
      <p>PHP -</p>
      <p>MySQL -</p>
      <p>Java -</p>
      <p>Python -</p>
      <p>Azure -</p>
      <p>C -</p>
      <p>Semantic HTML5 -</p>
      <p>Multibrowser testing -</p>
      <p>Fully/Semi responsive design -</p>
      <p>Attention to UI/UX details -</p>
      <p>Doc Maintainence -</p>
      <p>Quality coding</p>
    </div>
    <div class="soft">
      <h2>Soft skills</h2>
      <p>Teamwork -</p>
      <p>Openness to criticism -</p>
      <p>Communication -</p>
      <p>Adaptability -</p>
      <p>Time management -</p>
      <p>Problem solving -</p>
      <p>Interpersonal skills -</p>
      <p>pro-active</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SkillsCard',
};
</script>

<style scoped lang="scss">
.focus {
  .FSkill {
    display: flex;
    flex-flow: row nowrap;
    align-items: baseline;
    @media #{$mq-768-down} {
      flex-flow: column nowrap;
    }
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

      @media #{$mq-768-down} {
        margin-bottom: 1rem;
      }
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
      }
    }
  }
}

.other {
  & > p {
    display: inline-block;
    margin-right: 0.5rem;
    margin-top: 0;
    font-weight: 500;
  }
}
.soft {
  & > p {
    display: inline-block;
    margin-right: 0.5rem;
    margin-top: 0;
    font-weight: 500;
  }
}
</style>
