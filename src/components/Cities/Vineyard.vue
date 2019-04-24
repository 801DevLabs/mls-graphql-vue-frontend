<template>
    <div>
        <div class="listings">
            <div class="listings-head">
                <h1>
                    Listings in {{ city }}
                </h1>
            </div>
            <div class="hold-listings">
                <div class="listing" v-for="listing in listings" :key="listing.id" @click="viewListing(listing._id)">
                    <div class="hold-photo">
                        <img :src="listing.image">
                    </div>
                    <div class="listing-footer">
                        <h3>{{ listing.address }}</h3>
                        <p>City: {{ listing.city }}</p>
                        <p>State: {{ listing.state }}</p>
                        <p>Style: {{ listing.style }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
          city: "Vineyard",
          listings: []
        }
    },
    created() {
        axios
        .get('https://utah-mls-listings.herokuapp.com/city/vineyard')
        .then((res) => {
            this.listings = res.data
        })
        .catch(err => console.log(err))
    },

    methods: {
        viewListing(id) {
            this.$router.push('/' + id)
        }
    }
}
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
    padding: 10px
}

.listing-footer p {
    font-size: 12px;
    padding: 10px
}
</style>