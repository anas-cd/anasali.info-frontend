<template>
  <div class="card">
    <!-- profile picture -->
    <div class="pic">
      <!-- <img src="@/assets/images/dinasor-loader.gif" alt="anas ali picture" /> -->
      <!-- <img src="@/assets/images/profile-pic.jpeg" alt="anas ali picture" /> -->
    </div>
    <div class="info">
      <h1>Anas Ali Shamlan</h1>
      <p>Junior Front-end Developer</p>
      <div class="contact">
        <img src="@/assets/images/email-icon.png" alt="email" />
        <a href="mailto:contact@anasali.info" target="”_blank”"
          >contact@anasali.info</a
        >
      </div>
      <div class="contact">
        <img src="@/assets/images/chat-icon.png" alt="phone" />
        <a href="tel:+905522759886">(+90) 552 275 98 86</a>
      </div>
      <p>
        Autodidact individual excited about web development and looking forward
        to starting a role in Frontend while pressing to learn new skills. I've
        practiced building production-level pages using industry-standard
        technologies like Vue.js, APIs, CSS preprocessors, semantic HTML, and
        more.
      </p>
    </div>
    <div class="buttons">
      <!-- incase buttons needs to be used later on -->
      <!-- <button class="btn getq flexer">
        <img src="@/assets/images/send-inbox-icon.png" alt="send a message">
        Get a quote
      </button>
      <button class="btn cv flexer">
        <img src="@/assets/images/rmbg-download-whight-resume-icon.png" alt="download resume">
        Download CV
      </button> -->
      <a href="#contact" class="btn getq flexer">
        <!-- <img src="@/assets/images/send-inbox-icon.png" alt="send a message"> -->
        Get a quote
      </a>
      <a
        href="Anas Ali_Junior Front-end Developer.pdf"
        class="btn cv flexer"
        target="_blank"
        download
      >
        <!-- <img src="@/assets/images/rmbg-download-whight-resume-icon.png" alt="download resume"> -->
        Download CV
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileCard',
};
</script>

<style scoped lang="scss">
.pic {
  & > img {
    width: 100%;
    border-radius: 1rem;
  }
}
.info {
  display: flex;
  flex-flow: column nowrap;

  & > h1 {
    margin-bottom: 0;
    font-size: 1.5rem;
    font-family: 'Gugi', cursive;
  }
  & > p {
    margin: 0.4rem 0;
    font-size: 1rem;
  }
  & > .contact {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    a {
      text-decoration: none;
      margin: 0.8rem 0rem;
    }
    & > img {
      width: 1.6rem;
      margin-right: 0.7rem;
    }
  }
}
.buttons {
  & > .getq {
    border: 1px solid $azure-blue;
    background-color: transparent;
    color: $azure-blue;
    text-decoration: none;
  }
  & > .cv {
    border: none;
    background-color: $azure-blue;
    color: $white;
    text-decoration: none;
  }

  img {
    width: 25px;
  }

  // helpers
  .flexer {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-evenly;
  }
  .btn {
    margin-top: 1rem;
    width: 100%;
    height: 2.8rem;
    border-radius: 1rem;
    font-size: 1.1rem;
    font-weight: 500;
    letter-spacing: 0.1rem;
    transition-duration: 200ms;
    &:hover {
      cursor: pointer;
      opacity: 0.8;
    }
  }
}
</style>
