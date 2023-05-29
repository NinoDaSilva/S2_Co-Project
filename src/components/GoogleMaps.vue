<script>
import { defineComponent } from 'vue'
import { GoogleMap, Marker, MarkerCluster } from 'vue3-google-map'

export default defineComponent({
  components: { GoogleMap, Marker, MarkerCluster },
  setup() {
    const center = { lat: 47.42463267366512, lng: 6.905441485714746 }

    const locations = [
      { lat: 47.42463267366513, lng: 6.905441485714748 }, // Gaec Voireuchon
      { lat: 47.713885049787955, lng: 6.630637924654588 }, // L'éden de Célestine
      { lat: 47.422667330111985, lng: 6.684211213665875 }, // Georgel Philippe
      { lat: 47.463127134274266, lng: 6.439862927340599 }, // Ferme d'Uzelle
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