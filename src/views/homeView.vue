<script setup>

import hero from '@/components/hero.vue'
   import homeCard from '@/components/homeCard.vue'
   import jobsListing from '@/components/jobsListing.vue'
</script>

<template>

<hero   />
  <homeCard />
  <jobsListing  :limit="3" :showButton="true"/>
</template>