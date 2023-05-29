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
    <div>
        <GoogleMap api-key="AIzaSyBkkUWcQ46TA630_IUv2_sJlC5CZblRMkk" style="width: 100%; height: 500px" :center="center" :zoom="12">
            <Marker :options="markerOptions" />
        </GoogleMap>
    </div>
</template>