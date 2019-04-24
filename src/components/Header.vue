<template>
<div>
  <header>
    <div class="header-content">
      <div class="header-item branding" @click="home">
        <h1>{{ title }}</h1>
      </div>
      <div class="header-item nav-bar">
        <nav>
          <ul>
            <router-link to="/orem" tag="li">Orem</router-link>
            <router-link to="/vineyard" tag="li">Vineyard</router-link>
            <router-link to="/provo" tag="li">Provo</router-link>
            <router-link to="/washington" tag="li">Washington</router-link>
            <router-link to="/st-george" tag="li">St George</router-link>
            <router-link to="/create" tag="li">Create</router-link>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</div>
</template>

<script>
export default {
  data() {
    return {
      title: "Utah Real Estate"
    }
  },

  methods: {
    home() {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
header {
  width: 100%;
  background: white;
}

.header-content {
  padding: 0 20px;
  height: 65px;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-item {
  width: 50%;
}

.branding {
  cursor: pointer;
}
.branding h1 {
  min-width: 225px;
  text-align: left;
  font-size: 28px;
  font-weight: 600;
  text-transform: uppercase;
}

.nav-bar {
  text-align: right;
}

nav ul {
  display: flex;
  justify-content: flex-end;
}

nav ul li {
  list-style-type: none;
  text-align: right;
  font-size: 14px;
  text-transform: uppercase;
  font-weight: 400;
  text-decoration: none;
  color: #808080;
  padding: 0 12px;
  line-height: 40px;
  cursor: pointer;
}

nav ul li:hover, .router-link-exact-active {
  color: #4B4B4B;
}
</style>
