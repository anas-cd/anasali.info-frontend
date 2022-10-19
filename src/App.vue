<template>
  <!-- nav side menu -->
  <nav>
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> -->
    <div class="social">
      <a href="https://github.com/anas-cd">
        <img src="@/assets/images/github-icon.png" alt="github-link" />
      </a>
      <a href="https://tr.linkedin.com/in/anas-ali-banshamlan-612667245">
        <img src="@/assets/images/linkedin-icon.png" alt="linkedin-link" />
      </a>
      <div class="vl"></div>
      <a href="#contact">
        <img src="@/assets/images/send-inbox-icon.png" alt="send-mail" />
      </a>
      <a href="Anas's Resume dev.pdf" target="_blank" download>
        <img
          class="cvbtn"
          src="@/assets/images/rmbg-download-whight-resume-icon.png"
          alt="download-resume-button"
        />
      </a>
    </div>
  </nav>

  <!-- cv -->
  <div class="cvgrid" id="cvgrid">
    <div class="content CProfile">
      <div class="item">
        <!-- <img src="@/assets/test/1.png" alt="1" /> -->
        <ProfileCard />
      </div>
    </div>
    <div class="content CSkills">
      <div class="item">
        <!-- <img src="@/assets/test/2.png" alt="2" /> -->
        <SkillsCard />
      </div>
    </div>
    <div class="content CTools">
      <div class="item">
        <!-- <img src="@/assets/test/3.png" alt="3" /> -->
        <ToolsCard />
      </div>
    </div>
    <div class="content CLanguages">
      <div class="item">
        <!-- <img src="@/assets/test/4.png" alt="4" /> -->
        <LanguagesCard />
      </div>
    </div>
    <div class="content CXP">
      <div class="item">
        <!-- <img src="@/assets/test/5.png" alt="5" /> -->
        <ExperiencesCar />
      </div>
    </div>
    <div class="content CTraining">
      <div class="item">
        <!-- <img src="@/assets/test/6.png" alt="6" /> -->
        <TrainingCard />
      </div>
    </div>
    <div class="content CProjects">
      <div class="item">
        <!-- <img src="@/assets/test/7.png" alt="7" /> -->
        <ProjectsCard />
      </div>
    </div>
    <div class="content CHobbies">
      <div class="item">
        <!-- <img src="@/assets/test/8.png" alt="8" /> -->
        <HobbiesCard />
      </div>
    </div>
    <!-- <div class="content c9">
      <div class="item">
        <img src="@/assets/test/9.png" alt="9" />
        <RouterView />
      </div>
    </div> -->
    <!-- <div class="content c10">
      <div class="item">
        <img src="@/assets/test/10.png" alt="10" />
      </div>
    </div> -->
    <div class="content CInterests">
      <div class="item">
        <!-- <img src="@/assets/test/11.png" alt="11" /> -->
        <InterestsCard />
      </div>
    </div>
    <div class="content CContact">
      <div class="item">
        <!-- <img src="@/assets/test/12.png" alt="12" /> -->
        <ContactCard />
      </div>
    </div>
  </div>
  <!-- <router-view /> -->
</template>

<script>
import ProfileCard from '@/components/ProfileCard.vue';
import SkillsCard from '@/components/SkillsCard.vue';
import ToolsCard from './components/ToolsCard.vue';
import LanguagesCard from './components/LanguagesCard.vue';
import ExperiencesCar from './components/ExperiencesCard.vue';
import TrainingCard from './components/TrainingCard.vue';
import HobbiesCard from './components/HobbiesCard.vue';
import InterestsCard from './components/InterestsCard.vue';
import ContactCard from './components/ContactCard.vue';
import ProjectsCard from './components/ProjectsCard.vue';

export default {
  name: 'App',
  components: {
    ProfileCard,
    SkillsCard,
    ToolsCard,
    LanguagesCard,
    ExperiencesCar,
    TrainingCard,
    HobbiesCard,
    InterestsCard,
    ContactCard,
    ProjectsCard,
  },
};
</script>

<style lang="scss">
nav {
  min-width: 4rem;
  max-width: 4rem;

  @media #{$mq-768-down} {
    width: 100%;
    min-width: unset;
    max-width: unset;
  }
  & > div.social {
    display: flex;
    flex-flow: column nowrap;
    margin-bottom: 1rem;
    position: sticky;
    top: 1rem;
    width: 3.5rem;
    padding: 0.4rem;
    // border gradiant effect
    background: linear-gradient($cultured-gray, $cultured-gray) padding-box,
      linear-gradient(to top, $orange-red, $honey-yellow) border-box;
    border-radius: 1rem;
    border: 3px solid transparent;

    @media #{$mq-768-down} {
      flex-flow: row nowrap;
      align-items: center;
      width: 100%;
    }
    img {
      width: 100%;
      margin-top: 0.4rem;
      @media #{$mq-768-down} {
        width: 2.5rem;
        margin: 0.4rem 0.5rem;
      }
    }

    .cvbtn {
      background-color: $azure-blue;
      border-radius: 0.5rem;
      padding-left: 5px;
      padding-top: 5px;
      padding-bottom: 3px;
      padding-right: 1px;
    }

    & > .vl {
      width: 0px;
      height: 3rem;
      margin: 0.5rem auto;
      border: 1px solid $gray;

      @media #{$mq-768-down} {
        width: 30%;
        height: 0;
      }
    }
  }

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

// cvgrid css for grid effects are in _global.css styling file
.cvgrid {
  width: 100%;

  & > div {
    width: fit-content;
  }
}
</style>
