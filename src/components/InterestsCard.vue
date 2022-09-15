<template>
  <div class="card title">
    <h2>Other interests</h2>
  </div>
  <div class="card mecha">
    <div class="info">
      <h2>Mechatronics / Robotics</h2>
      <div class="qualifications">
        <img src="@/assets/images/graduation-icon.png" alt="graduation" />
        <p class="degree">Bachalor degree graduate of 2022</p>
        <p class="university">Istanbul Bilgi University</p>
      </div>
      <p class="description">
        In pursuit of diversifying my technical knowledge, a multidisciplinary
        field like Mechatronics met my needs in learning from multiple related
        disciplines which greatly enhanced by technical problem solving skill
        set as it enabled me to create simpler yet smarter and more efficient
        systems.
      </p>
      <button @click="mechaProgress">See More</button>
    </div>
    <img src="@/assets/images/mechatronics-robotics.jpg" alt="mechatronics" />
  </div>
  <div class="card ecom">
    <div class="info">
      <h2>E-commerce</h2>
      <p class="description">
        As E-commerce workflows are more important than ever I'm interested in
        learning and identifiying how does each stage of this model works and
        more importantly how to enhance its preformens with automated hardware
        or software systems to reduce logistics proplems, turnback rates, and
        more to increase the overall satisfaction for clients.
      </p>
    </div>
    <img src="@/assets/images/header-online-shop.png" alt="ecommerce" />
  </div>
</template>

<script>
export default {
  name: 'InterestsCard',
  methods: {
    mechaProgress() {
      window.alert('Mechatronics portfolio is in progress currently');
    },
  },
};
</script>

<style scoped lang="scss">
.card {
  // this will only affect elements from this component since the styling is scoped
  margin-bottom: 1rem;
}
.title {
  // margin-bottom: 1rem;
  h2 {
    margin: 0;
  }
}
.mecha {
  display: flex;
  flex-flow: row nowrap;
  overflow: hidden;
  @media #{$mq-1024-down} {
    flex-flow: column nowrap;
  }
  & > .info {
    display: flex;
    flex-flow: column nowrap;

    @media #{$mq-1024-down} {
      order: 2;
    }
    h2 {
      margin-top: 0;
    }
    & > .qualifications {
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      @media #{$mq-1024-down} {
        flex-flow: column nowrap;
      }
      p {
        margin: 0;
        margin-left: 0.5rem;
      }
      img {
        width: 2rem;
      }

      & > .degree {
        font-weight: 500;
      }
    }
    & > button {
      margin: 0 auto;
      width: 80%;
      border: none;
      border-radius: 1rem;
      height: 3rem;
      // background-color: $azure-blue;
      background-color: #e9e9e9;
      color: $white;
      font-weight: 500;
      font-size: 1.5rem;
      transition-duration: 200ms;
      &:hover {
        cursor: pointer;
        opacity: 0.8;
      }
    }
  }
  & > img {
    width: 100%;
    max-width: 20rem;
    border-radius: 1rem;
    object-fit: cover;
    @media #{$mq-1024-down} {
      max-width: unset;
      margin-bottom: 1rem;
      order: 1;
    }
  }
}
.ecom {
  display: flex;
  flex-flow: row nowrap;
  overflow: hidden;
  @media #{$mq-1024-down} {
    flex-flow: column nowrap;
  }
  & > .info {
    display: flex;
    flex-flow: column nowrap;
    @media #{$mq-1024-down} {
      order: 2;
    }
    h2 {
      margin-top: 0;
    }
  }
  & > img {
    width: 100%;
    max-width: 20rem;
    border-radius: 1rem;
    object-fit: cover;
    @media #{$mq-1024-down} {
      max-width: unset;
      margin-bottom: 1rem;
      order: 1;
    }
  }
}
</style>
