<script>
import { defineComponent } from 'vue'
import { GoogleMap, Marker } from 'vue3-google-map'

export default defineComponent({
  components: { GoogleMap, Marker },
  setup() {
    const center = { lat: 40.689247, lng: -74.044502 };
    const markerOptions = { position: center, title: "LADY LIBERTY" };

    return { center, markerOptions };
  },
});

</script>

<template>
    <div class="overflow-hidden w-full h-[400px] rounded-xl border-4 border-vert mb-5 shadow-md sm:h-[550px]">
        <GoogleMap api-key="AIzaSyBkkUWcQ46TA630_IUv2_sJlC5CZblRMkk" style="width: 100%; height: 100%" :center="center" :zoom="12">
            <Marker :options="markerOptions" />
        </GoogleMap>
    </div>
</template>