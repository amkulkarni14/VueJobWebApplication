<script setup>
import jobListing from '@/components/jobListing.vue'
import { RouterLink } from 'vue-router';
import {reactive, defineProps, onMounted} from 'vue'

//import jobsData from '@/job.json'
import axios from 'axios';
//const jobs = ref([]);  ref for the primitives and objects.
const state = reactive({
    jobs : [],
    isLoading : true
});

onMounted(async ()=>{
    try{
    const response = await axios.get('http://localhost:4000/jobs');
    console.log(response);
    //jobs.value = response.data;  for ref() we use .value for getting value.
    state.jobs = response.data;
    }catch(error){
        console.error('Jobs not loading', error);
    }finally{
        isLoading : false
    }
});

defineProps({
    limit :Number,
    showButton:{
        type: Boolean,
        default: false
    }
});

</script>

<template>
 <section class="bg-green-50 px-4 py-10">
      <div class="container-xl lg:container m-auto">
        <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">
          Browse Jobs
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <jobListing v-for="job in state.jobs.slice(0,limit || state.jobs.length)" :key="job.id" v-bind:job="job"  />

          </div>
          </div>
          </section>

          <section v-if="showButton" class="m-auto max-w-lg my-10 px-6">
      <RouterLink
        to="/jobs"
        class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >View All Jobs</RouterLink>
    </section>

</template>