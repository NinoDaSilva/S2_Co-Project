<script>
import { GoogleMap, Marker } from 'vue3-google-map'

export default {
    components: {
        GoogleMap,
        Marker
    },

    data() {
        return {
            apiKey: "AIzaSyAo15N8YzHJ1Z19aDMB2qAt4jX1fYo04lQ",
            lat: null,
            lng: null,
        }
    },

    
    created() {
        this.$getLocation()
        .then((coordinates) => {
            this.lat = coordinates.lat;
            this.lng = coordinates.lng;
        })
        .catch((error) => {
            console.log(error);
        });
    }
}

const fermier = { lat: 47.49566525144965, lng: 6.805222081286718 }
</script>

<template>
    <div>
        <GoogleMap :api-key="apikey" style="width: 100%; height: 500px" :center="center" :zoom="15">
            <Marker :options="{ position: center }" />
        </GoogleMap>
    </div>
</template>