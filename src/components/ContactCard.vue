<template>
  <div class="card" id="contact">
    <h2>You have an idea in mind? let’s get in touch:</h2>
    <form @submit.prevent="sendMail">
      <label for="name">Name *</label>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="WALL-E"
        class="input"
        required
      />

      <label for="email">Email *</label>
      <input
        type="text"
        name="email"
        id="email"
        placeholder="wall-e@earth.home"
        class="input"
        required
      />

      <label for="subject">Subject</label>
      <input
        type="text"
        name="subject"
        id="subject"
        placeholder="got a plant!"
        class="input"
      />

      <label for="message">Message *</label>
      <textarea
        name="message"
        id="message"
        cols="30"
        rows="10"
        class="input"
        placeholder="Do̷ ̷y̵o̴u̷ ̷k̷n̸o̶w̸ ̷w̷h̶e̶r̴e̴ ̸c̴a̴n̶ ̵I̸ ̶f̴i̷n̶d̴ ̵E̸v̴e̵   ( message ^_^' )"
        required
      ></textarea>

      <button type="submit" id="submit" class="subtn">Send</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'ContactCard',
  methods: {
    sendMail() {
      console.log('sending message');
      // testing axios stuff:
      let name = document.getElementById('name');
      let email = document.getElementById('email');
      let subject = document.getElementById('subject');
      let message = document.getElementById('message');
      let submit = document.getElementById('submit');
      submit.value = 'Sending ...';
      axios.defaults.headers.post['Content-Type'] = 'application/json';
      axios
        .post('https://formspree.io/f/mbjbdead', {
          name: name.value,
          email: email.value,
          _subject: 'web contact anasali.info: ' + subject.value,
          message: message.value,
        })
        .then((response) => {
          console.log(response);
          name.value = '';
          email.value = '';
          subject.value = '';
          message.value = '';
          submit.innerHTML = 'Message sent';
          submit.style.backgroundColor = 'lightgreen';
          submit.style.color = 'darkgreen';
          setTimeout(() => {
            submit.innerHTML = 'Send';
            submit.style.backgroundColor = '#2F80ED';
            submit.style.color = 'white';
          }, 2000);
        })
        .catch((error) => console.log(error));
      /* 
      axios.defaults.headers.post['Content-Type'] = 'application/json';
      axios
        .post('https://formsubmit.co/ajax/7776bd2921b05480eb94c7a4c1dfffb4', {
          name: name,
          email: email,
          _subject: 'testing axios emailing',
          message: message,
        })
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
      */
    },
  },
};
</script>

<style scoped lang="scss">
.card {
  & > h2 {
    margin: 1rem;
  }
}
form {
  display: flex;
  flex-flow: column nowrap;
  padding: 1rem;
  & > label {
    margin-bottom: 0.5rem;
    font-weight: 500;
  }
  .input {
    height: 3.3rem;
    background: $cultured-gray;
    box-shadow: inset 1px 2px 27px -16px rgba(0, 0, 0, 0.25);
    border-radius: 12px;
    border: none;
    margin-bottom: 1rem;
    padding: 1rem;

    &::placeholder {
      font-weight: 500;
      font-size: 1rem;
    }
  }

  & > #message {
    height: 10rem;
    resize: none;
  }

  .subtn {
    height: 3.3rem;
    background-color: $azure-blue;
    border: none;
    border-radius: 0.5rem;
    color: $white;
    font-size: 1.5rem;
    font-weight: 500;
    transition-duration: 200ms;
    &:hover {
      cursor: pointer;
      opacity: 0.8;
    }
  }
}
</style>
