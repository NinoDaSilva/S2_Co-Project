<script>
import { defineComponent } from 'vue'
import { GoogleMap, Marker, MarkerCluster } from 'vue3-google-map'

export default defineComponent({
  components: { GoogleMap, Marker, MarkerCluster },
  setup() {
    const center = { lat: 47.42463267366512, lng: 6.905441485714746 } // Gaec Voireuchon

    const locations = [
      { lat: 47.42463267366513, lng: 6.905441485714748 }, // Gaec Voireuchon
      { lat: 47.74102471685159, lng: 6.6167847865846605 }, //L'éden de Célestine
      { lat: 47.4374973867614, lng: 6.6838067893560975 }, //Georgel Philippe
      { lat: 47.4744446959658, lng: 6.433263521718228 }, // Ferme d'Uzelle
    ]
    return { center, locations }
  },
})
</script>

<template>
    <div class="overflow-hidden w-full h-[400px] rounded-xl border-4 border-vert mb-5 shadow-md sm:h-[550px]">
        <GoogleMap api-key="AIzaSyCleJlTtLhLa-ZYXCJvtetFl4O2PpA42sI" style="width: 100%; height: 100%" :center="center" :zoom="9">
          <MarkerCluster>
            <Marker v-for="(location, i) in locations" :options="{ position: location }" :key="i" />
          </MarkerCluster>
        </GoogleMap>
    </div>
</template>