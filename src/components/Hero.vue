<template>
<div class="hero">
  <div class="hero-content">
    <h1>
      Top<br>
      Listings<br>
      in<br>
      Utah</h1>
      <div class="btn" @click="createListing">
        List
      </div>
  </div>
</div>
</template>

<script>
export default {
  methods: {
    createListing(){
      this.$router.push('/create')
    }
  }
}
</script>

<style scoped>
.hero {
  position: relative;
  height: 426px;
  width: 100%;
  background-image: url('../assets/hero.jpg');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero-content {
  width: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
}

h1 {
  position: absolute;
  top: 71px;
  left: 50px;
  font-size: 60px;
  color: white;
  width: 231px;
  text-align: left;
}

.btn {
  width: 225px;
  line-height: 60px;
  color: white;
  background: none;
  border: solid 5px white;
  text-align: center;
  font-size: 36px;
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;
}
</style>