<template>
  <div>
    <app-header></app-header>
    <app-hero></app-hero>
    <div class="listings">
      <div class="listings-head">
        <h1>Hot on the Market</h1>
      </div>

      <!-- THE CODE BELOW WAS USED TO LOOP THORUGH AXIOS DATA -->
      <div class="hold-listings">
        <div
          class="listing"
          v-for="listings in data.listings"
          :key="listings.id"
          @click="viewListing(listings.id)"
        >
          <div class="hold-photo">
            <img :src="listings.image">
          </div>
          <div class="listing-footer">
            <h3>{{ listings.address }}</h3>
            <p>City: {{ listings.city }}</p>
            <p>State: {{ listings.state }}</p>
            <p>Style: {{ listings.style }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./Header.vue";
import Hero from "./Hero.vue";
import gql from "graphql-tag";
export default {
  components: {
    appHeader: Header,
    appHero: Hero
  },
  data() {
    return {
      data: {}
    };
  },
  created() {
    this.$apollo
      .query({
        query: gql`
          query getListings {
            listings {
              id
              address
              image
              city
              state
              style
              on_market
            }
          }
        `
      })
      .then(res => {
        this.data = res.data;
      })
      .catch(err => {
        this.error = err;
      });
  },

  methods: {
    viewListing(id) {
      this.$router.push("/graphql/" + id);
    }
  }
};
</script>

<style scoped>
.listings-head {
  padding: 20px;
}

.listings-head h1 {
  font-size: 40px;
  text-align: center;
}

.hold-listings {
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
}

.listing {
  margin: 10px;
  width: calc(33% - 20px);
  background: #f1f1f1;
  cursor: pointer;
}

.hold-photo {
  padding-top: 75%;
  width: 100%;
  display: inline-block;
  position: relative;
  overflow: hidden;
  margin-bottom: -4px;
}

.hold-photo img {
  position: absolute;
  left: 50%;
  top: 50%;
  height: 100%;
  width: auto;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

.listing-footer {
  padding: 10px;
}

.listing-footer h3 {
  font-size: 14px;
  padding: 10px;
}

.listing-footer p {
  font-size: 12px;
  padding: 10px;
}
</style>
