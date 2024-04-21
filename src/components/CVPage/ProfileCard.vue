<template>
  <q-card id="profile" class="card profile-card">
    <q-card-section class="informatives">
      <h1 class="name gugi-regular">
        <span class="label">
          <!-- lols ^_^; -->
          <q-img
            src="https://cdn11.bigcommerce.com/s-balh3740/images/stencil/1280x1280/products/38548/73312/EMINEM-2022__06421.1637581985.jpg?c=2?imbypass=on"
            width="12px"
          ></q-img>
          my name is
        </span>
        {{ data.name }}
      </h1>
      <p class="speciality">
        <span class="label">I'm a </span>{{ data.speciality }}
      </p>
      <address class="contacts">
        <ul>
          <li>
            <q-icon name="r_email"></q-icon>
            <a :href="`mailto:${data.email}`">{{ data.email }}</a>
            <q-btn
              flat
              unelevated
              size="sm"
              icon="r_content_copy"
              @click="copyContact(data.email)"
            ></q-btn>
          </li>
          <li>
            <q-icon name="r_perm_phone_msg"></q-icon>
            <a :href="`tel:${data.phone}`">{{ data.phone }}</a>
            <q-btn
              flat
              unelevated
              size="sm"
              icon="r_content_copy"
              @click="copyContact(data.phone)"
            ></q-btn>
          </li>
        </ul>
      </address>
      <p class="description">{{ data.description }}</p>
    </q-card-section>
    <q-separator></q-separator>
    <q-card-actions class="actionables">
      <q-btn
        class="cta-btn"
        outline
        unelevated
        color="primary"
        href="https://dev.anasali.info/Anas Ali Banshamlan CV_Frontend web developer.pdf"
        target="_blank"
        tabindex="0"
        >Download CV</q-btn
      >
      <q-btn
        class="cta-btn"
        unelevated
        color="primary"
        @click="scrollToElement({ elId: 'contact' })"
        >Get A Free Consultation</q-btn
      >
    </q-card-actions>
  </q-card>
</template>

<script setup>
import { ref } from "vue";
import { useQuasar, copyToClipboard } from "quasar";
import { usePortfolioStore } from "src/stores/portfolio";
import scrollToElement from "src/utils/scrollToElement";

const q = useQuasar();

// -- data --
const store = usePortfolioStore();
const data = ref(store.profile);

// -- functions --
function copyContact(string) {
  copyToClipboard(string)
    .then(() => {
      q.notify("copied to clipboard");
    })
    .catch(() => {
      q.notify("no access to clipboard");
    });
}
</script>

<style lang="scss" scoped>
.q-card {
  .informatives {
    display: flex;
    flex-flow: column nowrap;

    .name {
      display: flex;
      flex-flow: column nowrap;
      margin: 0rem 0;
      line-height: 2rem;
      font-size: 1.3rem;
      text-transform: capitalize;

      .label {
        font-size: 0.7rem;
        color: $text-light;
        line-height: 1rem;
      }
    }

    .speciality {
      display: flex;
      flex-flow: column nowrap;
      margin: 0;
      font-size: 1.3rem;
      font-weight: bold;

      .label {
        font-size: 0.7rem;
        color: $text-light;
        line-height: 1rem;
      }
    }

    .contacts {
      ul {
        margin: 0;
        padding: 0;
        list-style: none;

        li {
          display: flex;
          flex-flow: row nowrap;
          align-items: center;
          margin: 0.5rem 0;
          font-size: 1rem;

          a {
            margin-inline-start: 1rem;
            text-decoration: none;
          }

          .q-btn {
            margin: 0 0.5rem;
            padding: 0.5rem 1rem;
            border-radius: 10px;
          }
        }
      }
    }

    .description {
      margin: 0;
      font-size: 1.1rem;
    }
  }

  .actionables {
    display: flex;
    flex-flow: column nowrap;
    padding: 1rem;

    .q-btn {
      margin: 0.25rem 0;
      width: 100%;
    }
  }
}
</style>
