<script setup lang="ts">
import EmballageIcon from './icons/EmballageIcon.vue';
import NourritureIcon from './icons/NourritureIcon.vue';
import NourritureSaineIcon from './icons/Nourriture-saineIcon.vue';
import PanierLegumesIcon from './icons/Panier-legumesIcon.vue';
import PommeQualiteIcon from './icons/Pomme-qualiteIcon.vue';
import PoubelleIcon from './icons/PoubelleIcon.vue';
import SteakIcon from './icons/SteakIcon.vue';
import VacheIcon from './icons/VacheIcon.vue';

const props = withDefaults( 
	defineProps<{
	    variant?: 'default' | 'secondary'
	    number?: string
	    text?: string
        icon?: string
	}>(),
  { variant: 'default' }
)
const variantClass = {
    default: 'text-vertFonce border-vertFonce bg-brunClair',
    secondary: 'text-blanc bg-vertFonce border-brunClair',
}
const cont = document.getElementById('cont')
if (props.variant === 'secondary') {
    cont.classList.add('order-last');
    }
</script>

<template>
    <div class="rounded-2xl p-10 flex justify-between items-center border-8"
        :class="variantClass[props.variant]">
        <div id="cont" class="flex items-center font-bold pl-10">
            <span class="text-2xl font-title">{{ number }}</span>
            <p class="ml-10 mt-2">{{ text }}</p>
        </div>
        img
    </div>
</template>
