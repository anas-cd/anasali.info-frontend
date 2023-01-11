<template>
  <div class="card" id="projects">
    <h2>Projects</h2>
    <!-- filtering deprecated for now as of 15/9/22 -->
    <!-- <div class="tagsFilter">
      <button>HTML</button>
      <button>JS</button>
      <button>Vue</button>
    </div> -->
  </div>

  <div class="projectsList">
    <div class="card">
      <img src="@/assets/images/BlueLine-project.png" alt="Blueline website" />
      <div class="info">
        <!-- tags -->
        <div class="tags">
          <p>#Semantic HTML5</p>
          <p>css functions</p>
        </div>
        <!-- project title -->
        <h3>BlueLine</h3>
        <p>
          A simple multipage website was made with vanilla HTML and CSS, this
          project is only to show case the use of semantic HTML values as well
          as the file structure for quick code navigation.
        </p>
        <div class="btns">
          <a
            href="https://anas-cd.github.io/brainnest-w2-mainpr/"
            class="demo"
            target="_blank"
            >Demo</a
          >
          <a
            href="https://github.com/anas-cd/brainnest-w2-mainpr"
            class="code"
            target="_blank"
            >Code</a
          >
        </div>
      </div>
    </div>
    <div class="card">
      <img src="@/assets/images/rest-api.jpg" alt="rest countries api" />
      <div class="info">
        <!-- tags -->
        <div class="tags">
          <p>#Semantic HTML5</p>
          <p>#Bootstrap</p>
          <p>#JS</p>
          <p>#Vue-composition-API</p>
          <p>#SCSS</p>
          <p>#Axios</p>
          <p>#Gsap</p>
          <p>#Vue-router</p>
        </div>
        <!-- project title -->
        <h3>Countries Vue app</h3>
        <p>
          Using the
          <a href="https://restcountries.com/">REST Countries API</a> this is a
          multipage Vue app for searching and viewing country information, the
          user can switch themes, search for a country by name, filter coutnries
          by region and more.
        </p>
        <div class="btns">
          <a
            href="https://rest-countries-api.onrender.com/"
            class="demo"
            target="_blank"
            >Demo</a
          >
          <a
            href="https://github.com/anas-cd/rest_api"
            class="code"
            target="_blank"
            >Code</a
          >
        </div>
      </div>
    </div>
    <div class="card">
      <img
        src="@/assets/images/Calculator-project.png"
        alt="calculator project"
      />
      <div class="info">
        <!-- tags -->
        <div class="tags">
          <p>#HTML</p>
          <p>#JS</p>
          <p>#Vue</p>
          <p>#Semantic HTML5</p>
        </div>
        <!-- project title -->
        <h3>Calculator app</h3>
        <p>
          Multi-theme Calculator for basic math operations with many features
          like Memory display, operations chaining, Smart theme switching,
          dynamic error/confirmation messages, and more.
          <sub>
            you can see all features at the README.md in the repo by clicking on
            'Code' bellow.
          </sub>
        </p>
        <div class="btns">
          <a
            href="https://anas-cd.github.io/brainnest-w4-mainpr/"
            class="demo"
            target="_blank"
            >Demo</a
          >
          <a
            href="https://github.com/anas-cd/brainnest-w4-mainpr"
            class="code"
            target="_blank"
            >Code</a
          >
        </div>
      </div>
    </div>
    <div class="card">
      <img src="@/assets/images/social-dash.jpg" alt="social media dashboard" />
      <div class="info">
        <!-- tags -->
        <div class="tags">
          <p>#HTML</p>
          <p>#JS</p>
          <p>#Vue</p>
          <p>#SCSS</p>
          <p>#Gulp</p>
          <p>#Jquery</p>
          <p>#Semantic HTML5</p>
        </div>
        <!-- project title -->
        <h3>Social Media Dashboard</h3>
        <p>
          Ready to use social media dashboard with Json data, built with Vue.js
          framework, available with two themes dark or light and the theme will
          be autoselected at first depending on the user system preference.
        </p>
        <div class="btns">
          <a
            href="https://anas-cd.github.io/social-media-dashboard/"
            class="demo"
            target="_blank"
            >Demo</a
          >
          <a
            href="https://github.com/anas-cd/social-media-dashboard"
            class="code"
            target="_blank"
            >Code</a
          >
        </div>
      </div>
    </div>
    <div class="card">
      <img
        src="@/assets/images/intro-dropdown.jpg"
        alt="intro with dropdown menu"
      />
      <div class="info">
        <!-- tags -->
        <div class="tags">
          <p>#HTML</p>
          <p>#SCSS</p>
          <p>#Gulp</p>
        </div>
        <!-- project title -->
        <h3>Intro With Dropdown Menu</h3>
        <p>
          The CSS-only dropdown menu is trackable to enable optimizing user
          experience. all the menus and submenus are activated using a checkbox
          element, this way data can be easily collected to optimize catagory
          tree navigation.
        </p>
        <div class="btns">
          <a
            href="https://anas-cd.github.io/Intro-section/index.html"
            class="demo"
            target="_blank"
            >Demo</a
          >
          <a
            href="https://github.com/anas-cd/Intro-section"
            class="code"
            target="_blank"
            >Code</a
          >
        </div>
      </div>
    </div>
    <div class="card">
      <img
        src="@/assets/images/interactive-comments.jpg"
        alt="interactive comments section"
      />
      <div class="info">
        <!-- tags -->
        <div class="tags">
          <p>#HTML</p>
          <p>#JS</p>
          <p>#SCSS</p>
          <p>#Vue-cli</p>
          <p>#Axios</p>
        </div>
        <!-- project title -->
        <h3>Interactive Comments Section</h3>
        <p>
          Interactive comments section using Vue.js framework, ready to be
          implemented as CRUD application as all data is read and from a Json
          data file and saved to local storage acting like the server database
        </p>
        <div class="btns">
          <a
            href="https://interactive-comments-section.onrender.com/"
            class="demo"
            target="_blank"
            >Demo</a
          >
          <a
            href="https://github.com/anas-cd/Interactive-comments-section"
            class="code"
            target="_blank"
            >Code</a
          >
          <!-- <button class="demo">Demo</button>
          <button class="code">Code</button> -->
        </div>
      </div>
    </div>
    <div class="card">
      <img src="@/assets/images/advice-generator.jpg" alt="advice-generator" />
      <div class="info">
        <!-- tags -->
        <div class="tags">
          <p>#HTML</p>
          <p>#JS</p>
          <p>#SCSS</p>
          <p>#Gulp</p>
          <p>#Fetch API</p>
        </div>
        <!-- project title -->
        <h3>Advice Generator APP</h3>
        <p>
          Advice generator app using Fetch to call a free API for advice
          generation, using SCSS and Gulp to manage file compressions.
        </p>
        <div class="btns">
          <a
            href="https://anas-cd.github.io/advice-generator-app/"
            class="demo"
            target="_blank"
            >Demo</a
          >
          <a
            href="https://github.com/anas-cd/advice-generator-app"
            class="code"
            target="_blank"
            >Code</a
          >
          <!-- <button class="demo">Demo</button>
          <button class="code">Code</button> -->
        </div>
      </div>
    </div>
    <div class="card">
      <img src="@/assets/images/job-listing.jpg" alt="job listing" />
      <div class="info">
        <!-- tags -->
        <div class="tags">
          <p>#HTML</p>
          <p>#JS</p>
          <p>#SCSS</p>
          <p>#Vue</p>
          <p>#Gulp</p>
          <p>#Fetch API</p>
        </div>
        <!-- project title -->
        <h3>Job Listing</h3>
        <p>
          Filterable job listing app to filter job entries by their tags, also
          featured and new job listings are labeled to be identified easily.
        </p>
        <div class="btns">
          <a
            href="https://anas-cd.github.io/Job-listings/"
            class="demo"
            target="_blank"
            >Demo</a
          >
          <a
            href="https://github.com/anas-cd/Job-listings"
            class="code"
            target="_blank"
            >Code</a
          >
          <!-- <button class="demo">Demo</button>
          <button class="code">Code</button> -->
        </div>
      </div>
    </div>
    <div class="card">
      <img
        src="@/assets/images/interactive-pricing.jpg"
        alt="interactive-pricing"
      />
      <div class="info">
        <!-- tags -->
        <div class="tags">
          <p>#HTML</p>
          <p>#JS</p>
          <p>#SCSS</p>
          <p>#Gulp</p>
        </div>
        <!-- project title -->
        <h3>Interactive Pricing Component</h3>
        <p>
          Interactive slider pricing component that's accessible via mouse or
          keyboard, with dynamic pricing depending on the billing plan chosen.
        </p>
        <div class="btns">
          <a
            href="https://anas-cd.github.io/interactive-pricing-component/index.html"
            class="demo"
            target="_blank"
            >Demo</a
          >
          <a
            href="https://github.com/anas-cd/interactive-pricing-component"
            class="code"
            target="_blank"
            >Code</a
          >
          <!-- <button class="demo">Demo</button>
          <button class="code">Code</button> -->
        </div>
      </div>
    </div>
    <div class="card">
      <img src="@/assets/images/faq-accordion.jpg" alt="faq-accordion" />
      <div class="info">
        <!-- tags -->
        <div class="tags">
          <p>#HTML</p>
          <p>#JS</p>
          <p>#SCSS</p>
          <p>#Gulp</p>
        </div>
        <!-- project title -->
        <h3>FAQ Accordion Component</h3>
        <p>
          With a responsive FAQ accordion, the user can expand a question topic
          to see more details, the expanding option makes better use of the
          screen size as it utilizes the screen to show more topics at once.
        </p>
        <div class="btns">
          <a
            href="https://anas-cd.github.io/faq-accordion-card/"
            class="demo"
            target="_blank"
            >Demo</a
          >
          <a
            href="https://github.com/anas-cd/faq-accordion-card"
            class="code"
            target="_blank"
            >Code</a
          >
          <!-- <button class="demo">Demo</button>
          <button class="code">Code</button> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectsCard',
  components: {},
};
</script>

<style scoped lang="scss">
.card {
  margin-bottom: 1rem;
  & > .tagsFilter {
    button {
      margin-right: 0.5rem;
      border: 1px solid $dark-gray;
      padding: 0.5rem;
      border-radius: 0.8rem;
      background-color: transparent;
      color: $dark-gray;
      font-size: 1rem;
      letter-spacing: 1.1px;
      font-weight: 500;
      transition-duration: 200ms;

      &:hover {
        cursor: pointer;
        opacity: 0.8;
        border-color: $azure-blue;
        color: $azure-blue;
      }
    }
  }
}
.projectsList {
  height: 40rem;
  overflow: auto;
  &::after {
    content: '';
    display: block;
    width: 100%;
    height: 5rem;
    background: rgb(194, 194, 194);
    background: linear-gradient(
      0deg,
      $cultured-gray 0%,
      rgba(246, 174, 45, 0) 100%
    );
    position: sticky;
    bottom: 0rem;
  }
  & > div.card {
    width: 99% !important;
    display: flex;
    flex-flow: row nowrap;
    @media #{$mq-1024-down} {
      flex-flow: column nowrap;
    }

    &:last-child {
      margin-bottom: 2rem;
    }
    & > img {
      width: 15.8rem;
      object-fit: cover;
      border-radius: 1rem;
      @media #{$mq-1024-down} {
        width: 100%;
        margin-bottom: 1rem;
      }
    }
    & > .info {
      margin-left: 1rem;
      display: flex;
      flex-flow: column nowrap;

      @media #{$mq-1024-down} {
        margin: 0;
      }
      & > .tags {
        p {
          display: inline-block;
          margin: 0;
          margin-right: 1rem;
        }
      }

      & > h3 {
        font-weight: 500;
        margin-bottom: 0;
      }

      & > .btns {
        display: flex;
        flex-flow: row nowrap;
        margin-top: auto;

        @media #{$mq-1024-down} {
          display: flex;
          flex-flow: column nowrap;
        }
        & > a {
          padding: 0.5rem 2rem;
          width: 8.75rem;
          border-radius: 1rem;
          font-weight: 500;
          font-size: 1.2rem;
          letter-spacing: 1.1px;
          text-decoration: none;
          transition-duration: 200ms;
          text-align: center;

          @media #{$mq-1024-down} {
            width: 100%;
            margin-bottom: 1rem;
            padding: 1rem 2rem;
          }
          &:hover {
            cursor: pointer;
            opacity: 0.8;
          }
          &:first-child {
            margin-right: 0.5rem;
          }
        }

        .demo {
          color: $white;
          background-color: $azure-blue;
          border: none;
          @media #{$mq-1024-down} {
            order: 2;
          }
        }
        .code {
          color: $azure-blue;
          border: 1px solid $azure-blue;
          background-color: transparent;
          @media #{$mq-1024-down} {
            order: 1;
          }
        }
      }
    }
  }
}
</style>
