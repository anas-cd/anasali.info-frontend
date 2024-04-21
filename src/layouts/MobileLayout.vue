<template>
  <q-layout view="hHh lpR fFf">
    <!-- body width limiter -->
    <div class="bwl">
      <!-- no header needed -->

      <q-page-container>
        <!-- page view -->
        <router-view />
      </q-page-container>
    </div>

    <!-- quick actions toolbar -->
    <q-toolbar class="quick-buttons">
      <!-- social links -->
      <q-btn flat href="https://github.com/anas-cd" target="_blank">
        <q-tooltip :offset="[8, 8]" transition-duration="100">
          check Github
        </q-tooltip>
        <q-img
          src="~assets/social/github_icon.png"
          alt="check out github account"
        ></q-img>
      </q-btn>
      <q-btn
        flat
        href="https://www.linkedin.com/in/anas-shamlan/"
        target="_blank"
      >
        <q-tooltip :offset="[8, 8]" transition-duration="100">
          check Linkedin
        </q-tooltip>
        <q-img
          src="~assets/social/linkedin_icon.png"
          alt="check out linkedin profile"
        ></q-img>
      </q-btn>
      <q-separator></q-separator>
      <!-- quick action buttons -->
      <!-- ||||||||||||| showing the contact form option -->
      <q-btn
        flat
        icon="r_contact_mail"
        @click="scrollToElement({ elId: 'contact' })"
      >
        <q-tooltip> send an email </q-tooltip>
      </q-btn>
      <!-- ||||||||||||| redirecting to the user's default mailing service option -->
      <!-- <q-btn
        flat
        icon="r_contact_mail"
        :href="`mailto:${store.profile.email}`"
        target="_blank"
      >
        <q-tooltip> send an email </q-tooltip>
      </q-btn> -->
      <!-- ||||||||||||| -->
      <q-btn
        flat
        icon="r_description"
        href="https://dev.anasali.info/Anas Ali Banshamlan CV_Frontend web developer.pdf"
        target="_blank"
      >
        <q-tooltip>view CV</q-tooltip>
      </q-btn>
    </q-toolbar>

    <!-- footer -->
    <q-footer>
      <small class="copyrights">
        &copy; <time datetime="2023">2023</time> - present Anas Shamlan.
      </small>
      <small class="version"> v{{ version }} ~ [MVP] </small>
    </q-footer>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";
import scrollToElement from "src/utils/scrollToElement";

/* --- data --- */
// -- versioning --
const version = ref(process.env.VERSION.slice(0, -2));
</script>

<style lang="scss">
.q-layout {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  padding-bottom: 0;
  backdrop-filter: blur(5px);
  background-color: $page-bg;

  &__section--marginal {
    color: unset;
  }

  .bwl {
    padding: 1rem;
  }
  .q-page-container {
    display: flex;
    flex-flow: column nowrap;
  }

  // --- quick actions toolbar ---
  .quick-buttons {
    position: sticky;
    bottom: 0rem;
    display: flex;
    flex-flow: row nowrap;
    margin-top: 1rem;
    box-shadow: $small-shadow-up;
    border: 2px solid transparent;
    width: 100%;
    padding: 0.25rem;
    z-index: 1;
    border-color: transparent;
    border-width: 3px 0 0 0;
    background:
      linear-gradient($page-bg, $page-bg) padding-box,
      $gradient-90 border-box;

    .q-btn {
      margin: 0.2rem 0;
      border-radius: 7px;
      width: 100%;
      padding: 0rem 0.2rem;
      font-size: 1.1rem;

      .q-img {
        width: 32px;
      }
    }

    .q-separator {
      &--horizontal {
        margin: 0.5rem;
        border: 1.5px solid $track-bg;
        border-radius: 1rem;
        height: 2rem;
      }
    }
  }

  // --- footer ---
  .q-footer {
    transform: translateY(-5rem);
    background: red;
    margin: 0 1rem;
    box-shadow: $small-shadow;
    border-radius: 12px;
    border-bottom: 2px solid transparent;
    padding: 1rem;
    background:
      linear-gradient($cards-bg, $cards-bg) padding-box,
      $gradient-90 border-box;
    overflow: hidden;
    z-index: 0;
    .copyrights {
      margin: 1.5rem;
    }
    .version {
      color: $text-light;
    }
  }
}
</style>
