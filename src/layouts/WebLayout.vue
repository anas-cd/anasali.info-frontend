<template>
  <q-layout view="hHh lpR fFf">
    <!-- body width limiter -->
    <div class="bwl layout-container">
      <!-- header -->
      <q-header reveal class="text-white">
        <div class="bwl">
          <q-img
            class="brand"
            src="~assets/brand/header-logo.png"
            alt="welcome to my portfolio website"
          ></q-img>
        </div>
      </q-header>

      <q-page-container>
        <!-- quick actions panel -->
        <q-toolbar v-if="store.profile" class="quick-buttons">
          <!-- social links -->
          <q-btn flat :href="store.profile.social.github.link" target="_blank">
            <q-tooltip :offset="[8, 8]" transition-duration="100">
              {{ store.profile.social.github.tip }}
            </q-tooltip>
            <q-img
              :src="store.profile.social.github.img"
              :alt="store.profile.social.github.tip"
            ></q-img>
          </q-btn>
          <q-btn
            flat
            :href="store.profile.social.linkedin.link"
            target="_blank"
          >
            <q-tooltip :offset="[8, 8]" transition-duration="100">
              {{ store.profile.social.linkedin.tip }}
            </q-tooltip>
            <q-img
              :src="store.profile.social.linkedin.img"
              :alt="store.profile.social.linkedin.tip"
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
            :href="store.profile.cvLink"
            target="_blank"
          >
            <q-tooltip>view CV</q-tooltip>
          </q-btn>
        </q-toolbar>
        <q-skeleton v-else width="100%" class="quick-buttons"></q-skeleton>

        <!-- page view -->
        <router-view />
      </q-page-container>

      <!-- footer -->
      <q-footer>
        <q-toolbar>
          <q-img
            class="brand"
            src="~assets/brand/header-logo.png"
            alt="welcome to my portfolio website"
          ></q-img>
        </q-toolbar>
        <div v-if="store.profile" class="links">
          <ul>
            <q-item-label header> Social </q-item-label>
            <li v-for="(link, key) in store.profile.social" :key="key">
              <a :href="link.link" target="_blank">{{ key }}</a>
            </li>
          </ul>
          <ul>
            <q-item-label header> Contact </q-item-label>
            <li>
              <a :href="`mailto:${store.profile.email}`">{{
                store.profile.email
              }}</a>
            </li>
            <li>
              <q-tooltip>via direct call or WhatsApp</q-tooltip>
              <a :href="`tel:${store.profile.phone}`">{{
                store.profile.phone
              }}</a>
            </li>
          </ul>
        </div>
        <small class="copyrights">
          &copy; <time datetime="2023">2023</time> - present Anas Shamlan.
        </small>
        <small class="version"> v{{ version }} ~ [MVP] </small>
      </q-footer>
    </div>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";
import { usePortfolioStore } from "src/stores/portfolio";
import scrollToElement from "src/utils/scrollToElement";

const store = usePortfolioStore();

// -- versioning --
const version = ref(process.env.VERSION.slice(0, -2));
</script>

<style lang="scss">
.q-layout {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  padding: 1rem;
  background-color: $page-bg;

  &__section--marginal {
    color: unset;
  }

  .layout-container {
    // --- shared classes ---
    .brand {
      max-width: 19rem;
    }
    // --- header ---
    .q-header {
      display: flex;
      justify-content: center;
      padding: 0.5rem 1rem;
      padding-bottom: 0;
      backdrop-filter: blur(5px);
      background: $page-bg-70;

      .bwl {
        box-shadow: $small-shadow;

        @media #{$mq-480-down} {
          .brand {
            max-width: 14rem;
          }
        }
      }
    }

    .q-page-container {
      display: flex;
      flex-flow: row nowrap;
      padding: 5rem 0 2rem 0 !important;

      @media #{$mq-480-down} {
        flex-flow: column nowrap;
        padding-top: 3.5rem !important;
      }

      // -- quick actions toolbar --
      .quick-buttons {
        position: sticky;
        top: 4.75rem;
        display: flex;
        flex-flow: column nowrap;
        box-shadow: $small-shadow;
        border-radius: 10px;
        border: 2px solid transparent;
        max-width: 3.5rem;
        height: fit-content;
        padding: 0.25rem;

        // border gradient coloring
        border-color: transparent;
        background:
          linear-gradient($page-bg, $page-bg) padding-box,
          $gradient-0 border-box;

        @media #{$mq-480-down} {
          order: 2;
          top: unset;
          bottom: 0;
          flex-flow: row nowrap;
          transform: translateY(-5px);
          box-shadow: $small-shadow;
          max-width: unset;
          z-index: 1; // for broader mobile browser support
        }
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
    }

    // --- footer ---
    .q-footer {
      position: relative;
      background: red;
      box-shadow: $small-shadow;
      border-radius: 12px;
      border-bottom: 2px solid transparent;
      background:
        linear-gradient($cards-bg, $cards-bg) padding-box,
        $gradient-90 border-box;
      overflow: hidden;

      .brand {
        margin: 0.5rem 0.5rem;
      }
      .links {
        display: flex;
        flex-flow: row wrap;
        margin-bottom: 0.5rem;

        @media #{$mq-480-down} {
          flex-flow: column nowrap;
        }

        ul {
          margin: 0.5rem;
          padding: 0;
          list-style: none;

          .q-item__label {
            padding: 0.5rem 1rem;
          }
          li {
            margin: 0.15rem 1rem;
            transition-duration: 0.2s;

            &:hover {
              cursor: pointer;
              color: $primary;
              transform: translateX(5px);
            }

            a {
              text-decoration: none;
              color: unset;
            }
          }
        }
      }
      .copyrights {
        margin: 1.5rem;
      }
      .version {
        color: $text-light;
      }
    }
  }
}
</style>
