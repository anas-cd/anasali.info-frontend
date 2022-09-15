<template>
  <div class="card">
    <h2>Hobbies</h2>
    <div class="hobby">
      <img src="@/assets/images/music-hobbies.jpg" alt="music making" />
      <p>Making and Listening to music</p>
    </div>
    <div class="hobby">
      <img src="@/assets/images/games-hobbies.png" alt="gaming" />
      <p>Gaming</p>
    </div>
    <div class="hobby">
      <img src="@/assets/images/FPV-hobbies.jpg" alt="fpv flying" />
      <p>FPV flying</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HobbiesCard',
};
</script>

<style scoped lang="scss">
.hobby {
  img {
    border-radius: 1rem;
    width: 100%;
  }
  p {
    font-weight: 600;
  }
}
</style>
