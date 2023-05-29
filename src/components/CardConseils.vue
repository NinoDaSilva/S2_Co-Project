<script setup lang="ts">

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
</script>

<template>
    <div class="rounded-3xl mx-3 my-5 py-5 px-5 flex justify-between items-center border-4 sm:mx-5 sm:px-10 sm:border-8 md:px-20 lg:mx-auto lg:my-8 max-w-[1300px]"
        :class="variantClass[props.variant]">
        <div class="flex items-center font-bold"
            :class="{'order-last': props.variant === 'secondary'}">
            <span class="text-2xl sm:text-4xl font-title">{{ number }}</span>
            <p class="ml-5 mt-3 text-xs sm:ml-14 sm:text-xl">{{ text }}</p>
        </div>
        <img :src="icon" alt="icon d'illustration" class="max-sm:w-[64px] max-w-[164px]"/>
        
    </div>
</template>
