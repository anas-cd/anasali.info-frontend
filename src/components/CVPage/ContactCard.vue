<template>
  <q-card id="contact" class="card contact-card">
    <q-card-section class="header">
      <h1>let's get in touch!</h1>
    </q-card-section>
    <q-card-section class="inputs">
      <q-form
        :ref="(el) => (inputRefs.form = el)"
        class="contact-form"
        greedy
        autocapitalize="off"
        @submit.prevent="sendMail"
        @validation-error="resetValidations(10000)"
      >
        <q-input
          :ref="(el) => (inputRefs.name = el)"
          v-model="inputValues.name"
          :rules="inputRules.name"
          lazy-rules="ondemand"
          clearable
          clear-icon="r_close"
          class="input name-input"
          standout="page-bg small-shadow"
          label="name *"
          placeholder="what to call you"
          aria-autocomplete="list"
          autocomplete="name"
          dense
        ></q-input>
        <q-input
          :ref="(el) => (inputRefs.email = el)"
          v-model="inputValues.email"
          :rules="inputRules.email"
          debounce="500"
          lazy-rules="ondemand"
          clearable
          clear-icon="r_close"
          class="input email-input"
          standout="page-bg small-shadow"
          label="email *"
          aria-autocomplete="list"
          autocomplete="email"
          dense
        ></q-input>
        <q-input
          :ref="(el) => (inputRefs.subject = el)"
          v-model="inputValues.subject"
          :rules="inputRules.subject"
          debounce="500"
          lazy-rules="ondemand"
          clearable
          clear-icon="r_close"
          class="input subject-input"
          standout="page-bg small-shadow"
          label="subject"
          dense
        ></q-input>
        <q-input
          :ref="(el) => (inputRefs.message = el)"
          v-model="inputValues.message"
          :rules="inputRules.message"
          debounce="500"
          lazy-rules="ondemand"
          clearable
          clear-icon="r_close"
          class="input message-input"
          standout="page-bg small-shadow"
          label="message *"
          type="textarea"
        ></q-input>
        <q-btn
          :class="inputProps.submitBtn.class"
          type="submit"
          :icon="inputProps.submitBtn.icon"
          unelevated
          :label="inputProps.submitBtn.label"
          :loading="inputProps.submitBtn.loading"
          :disable="inputProps.submitBtn.disable"
        ></q-btn>
      </q-form>
    </q-card-section>
  </q-card>
</template>

<script setup>
import { ref } from "vue";
import { useQuasar, patterns, copyToClipboard } from "quasar";
import { usePortfolioStore } from "src/stores/portfolio";
import mailsAPI from "src/services/mailsAPI";
import handleError from "src/utils/handleError";

const q = useQuasar();
const { testPattern } = patterns;
const store = usePortfolioStore();

// temp fix for error icon on forms when using rounded material icons
q.iconSet.field.error = "r_priority_high";

/* --- form logic start --- */
// -- values --
const inputValues = ref({
  name: null,
  email: null,
  subject: null,
  message: null,
});
// -- refs --
const inputRefs = ref({
  form: null,
  name: null,
  email: null,
  subject: null,
  message: null,
});
// -- props --
const inputProps = ref({
  submitBtn: {
    class: ["cta-btn", "send-btn"],
    icon: "r_send",
    label: "send",
    loading: false,
    disable: false,
  },
});
// -- input rules --
const inputRules = {
  name: [(val) => (val && val.trim().length > 0) || "please enter your name"],
  email: [(val) => testPattern.email(val) || "email not valid"],
  subject: [],
  message: [(val) => (val && val.trim().length > 0) || "message missing"],
};

async function sendMail() {
  // - change style for user feedback -
  inputProps.value.submitBtn.loading = true;
  inputProps.value.submitBtn.disable = true;

  // -- constructing api request body --
  let requestBody = {
    ...inputValues.value,
  };

  // - call send email api and pass the email data -
  await mailsAPI
    .sendEmail500(requestBody) // production :: sendEmail(), dev :: sendEmail200() || sendEmail500()
    .then((res) => {
      console.log(res);
      // -- on success --
      console.log("email sent");
      inputProps.value.submitBtn.class.push("send-btn__done");
      inputProps.value.submitBtn.icon = "r_done";
      inputProps.value.submitBtn.label = "done";
      inputProps.value.submitBtn.loading = false;
      inputProps.value.submitBtn.disable = false;

      // - reset fields -
      inputValues.value = {
        name: null,
        email: null,
        subject: null,
        message: null,
      };
    })
    .catch((error) => {
      // -- on failure --
      // - report error -
      handleError(error, error.message, true);

      // - change styling for user feedback -
      inputProps.value.submitBtn.class.push("send-btn__faild");
      inputProps.value.submitBtn.icon = "r_error";
      inputProps.value.submitBtn.loading = false;
      inputProps.value.submitBtn.disable = false;

      // - saving email to clipboard -
      inputProps.value.submitBtn.label =
        "error sending email (email address is saved to your clipboard instead)";
      copyToClipboard(store.profile.email)
        .then(() => {
          // - show toast after copy -
          q.notify("email address copied");
        })
        .catch((error) => {
          // - show toast of error -
          q.notify("another error, well this is just great -_-");
          // - send error report to backend -
          handleError(error);
        });

      // TODO: redirect to the user's default email service provider
    });

  // -- resetting styling to default --
  setTimeout(() => {
    inputProps.value.submitBtn.class = inputProps.value.submitBtn.class.filter(
      (item) => !["send-btn__faild", "send-btn__done"].includes(item),
    );
    inputProps.value.submitBtn.icon = "r_send";
    inputProps.value.submitBtn.label = "send";
    inputProps.value.submitBtn.loading = false;
    inputProps.value.submitBtn.disable = false;
  }, 15000);
}

async function resetValidations(time) {
  setTimeout(() => {
    inputRefs.value.form.resetValidation();
  }, time);
}
/* --- end form logic --- */
</script>

<style lang="scss" scoped>
.q-card {
  .header {
    padding-bottom: 0;
  }
  .contact-form {
    .input {
      margin: 0.25rem 0;

      &.q-field--standout {
        :deep(.q-field__control) {
          transition-duration: 0.2s;
          border: 1px solid $track-bg-40;
          border-radius: 10px;
        }
      }

      &.q-field--standout {
        &.q-field--highlighted {
          // quasar standout text color fix
          :deep(
              .q-field__native,
              .q-field__prefix,
              .q-field__suffix,
              .q-field__prepend,
              .q-field__append,
              .q-field__input
            ) {
            color: $text-dark;
          }
          // highlighted style
          :deep(.q-field__control) {
            border-color: $primary-70;
          }
        }
        // error style
        &.q-field--error {
          :deep(.q-field__control) {
            border-color: $negative-70;
            background: $page-bg;
          }
        }
        // clear icon style
        &:deep(
            .q-icon.notranslate.material-icons-round.q-field__focusable-action
          ) {
          color: $text-dark-70;
          background-color: $track-bg-70;
          border-radius: 7px;
          transition-duration: 0.2s;

          &.q-field__focusable-action:focus,
          &.q-field__focusable-action:hover {
            color: $text-dark;
            background-color: $track-bg;
          }
        }
      }

      &.subject-input {
        margin-bottom: 1.65rem;
      }
    }
    .send-btn {
      width: 100%;
      background: $primary;
      color: $cards-bg;
      transition-duration: 0.2s;

      &__done {
        background: $positive;
        color: $text-dark-70;
      }
      &__faild {
        background: $negative;
        color: $text-dark-70;
      }
    }
  }
}
</style>
