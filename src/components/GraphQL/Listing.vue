<template>
  <div>
    <app-header></app-header>
    <div class="listing" v-for="listing in data.listings" :key="listing.id">
      <div class="hold-image">
        <img :src="listing.image" alt>
      </div>
      <h1>{{ listing.address }}</h1>
      <p>
        <strong>City:</strong>
        {{ listing.city }}
      </p>
      <p>
        <strong>State:</strong>
        {{ listing.state }}
      </p>
      <p>
        <strong>Style:</strong>
        {{ listing.style }}
      </p>
      <p>
        <strong>Currently on Market:</strong>
        {{ listing.on_market }}
      </p>
      <div class="buttons">
        <div class="update-btn btn" @click="updateListing(listing.id)">Update</div>
        <div class="delete-btn btn" @click="deleteListing">Delete</div>
      </div>
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
      id: this.$route.params.id,
      data: {}
    };
  },
  created() {
    this.$apollo
      .query({
        query: gql`
            query getOneListing {
              listings (where: {
                id: "${this.id}"
              }) {
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
    updateListing(id) {
      this.$router.push("/graphql/" + id + "/update");
    },

    deleteListing() {
      let x = confirm("Are you sure you want to delete this listing?");
      if (x == true) {
        this.$apollo
          .mutate({
            mutation: gql`
              mutation deleteListing($id: ID) {
                deleteListing(where: { id: $id }) {
                  id
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
              id: this.data.listings[0].id
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
  }
};
</script>

<style scoped>
.listing {
  width: 500px;
  margin: 0 auto;
  padding-bottom: 40px;
  margin-bottom: 40px;
}

.hold-image {
  padding-top: 75%;
  width: 100%;
  display: inline-block;
  position: relative;
  overflow: hidden;
  margin-bottom: -4px;
}

.hold-image img {
  position: absolute;
  left: 50%;
  top: 50%;
  height: 100%;
  width: auto;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

h1 {
  padding: 20px 0;
}

p {
  padding: 10px 0;
}

.buttons {
  padding-top: 20px;
  display: flex;
}

.btn {
  line-height: 40px;
  width: 150px;
  text-align: center;
  background: none;
  border-radius: 4px;
  cursor: pointer;
}

.update-btn {
  border: solid 2px teal;
  margin-right: 12px;
}

.delete-btn {
  border: solid 2px orangered;
}
</style>
