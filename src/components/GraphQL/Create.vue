<template>
  <div>
    <app-header></app-header>
    <div class="hold-form">
      <h1>Create a Listing</h1>
      <form>
        <label for="address">Address</label>
        <input type="text" name="address" id="adress" v-model="listing.address">

        <label for="image">Listing Image</label>
        <input
          type="text"
          name="image"
          id="image"
          v-model="listing.image"
          placeholder="Google image link"
        >

        <label for="city">City</label>
        <select name="city" id="city" v-model="listing.city">
          <option value="orem">Orem</option>
          <option value="provo">Provo</option>
          <option value="st-george">St. George</option>
          <option value="vineyard">Vineyard</option>
          <option value="washington">Washington</option>
        </select>

        <label for="state">State</label>
        <select name="state" id="state" v-model="listing.state">
          <option value="utah">Utah</option>
        </select>

        <label for="style">Style</label>
        <select name="style" id="style" v-model="listing.style">
          <option value="Single-Family Home">Single-Family Home</option>
          <option value="Single-Family Home">Single-Family Home</option>
        </select>

        <label for="status">Status</label>
        <select name="status" id="status" v-model="listing.on_market">
          <option :value="true">On Market</option>
          <option :value="false">Off Market</option>
        </select>

        <button class="btn" @click.prevent="createListing">Create</button>
      </form>
    </div>
  </div>
</template>

<script>
import Header from "./Header.vue";
import gql from "graphql-tag";

export default {
  components: {
    appHeader: Header
  },
  data() {
    return {
      listing: {
        address: "",
        image: "",
        city: "",
        state: "",
        style: "",
        on_market: ""
      }
    };
  },

  methods: {
    createListing() {
      this.$apollo
        .mutate({
          mutation: gql`
            mutation createListing(
              $address: String
              $image: String
              $city: String
              $state: String
              $style: String
              $on_market: Boolean
            ) {
              createListing(
                data: {
                  address: $address
                  image: $image
                  city: $city
                  state: $state
                  style: $style
                  on_market: $on_market
                }
              ) {
                address
                image
                city
                state
                style
                on_market
              }
            }
          `,
          variables: {
            address: this.listing.address,
            image: this.listing.image,
            city: this.listing.city,
            state: this.listing.state,
            style: this.listing.style,
            on_market: this.listing.on_market
          }
        })
        .then(res => {
          this.$router.push("/graphql/");
        })
        .catch(err => {
          this.error = err;
        });
    }
  }
};
</script>

<style scoped>
.hold-form {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  padding-bottom: 60px;
  margin-bottom: 40px;
}

form {
  width: 100%;
}

label {
  display: block;
  font-size: 18px;
  margin: 12px 0 8px 0;
}

input {
  width: 100%;
  height: 50px;
  padding: 0 12px;
  box-sizing: border-box;
  border: solid 1px #4b4b4b;
  font-size: 16px;
}

select {
  appearance: none;
  -webkit-appearance: none;
  width: 100%;
  height: 50px;
  padding: 0 12px;
  box-sizing: border-box;
  font-size: 16px;
  background: white;
  border: solid 1px #4b4b4b;
  border-radius: 0;
  background: #fff url(../../assets/select.png) no-repeat;
  background-size: 20px;
  background-position: right 10px center;
}

.btn {
  appearance: none;
  -webkit-appearance: none;
  margin-top: 26px;
  width: 187px;
  line-height: 50px;
  text-align: center;
  font-size: 16px;
  background: #000;
  border: none;
  color: white;
  cursor: pointer;
}
</style>