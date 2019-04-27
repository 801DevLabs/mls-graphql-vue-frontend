<template>
  <div class="toggle">
    <div class="navbar">
      <nav>
          <ul>
            <router-link to="/rest" tag="li">RestAPI</router-link>
            <router-link to="/graphql" tag="li">GraphQL</router-link>
          </ul>
        </nav>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.toggle {
  background: #fff;
  border-bottom: solid 1px #DFDFDF;
}

ul {
  display: flex;
}

li {
  transition: .3s;
  padding: 5px 20px;
  list-style-type: none;
}

li:hover, .router-link-active {
  transition: .3s;
  background: #1088F2;
  color: #FFF;
  cursor: pointer;
}
</style>

