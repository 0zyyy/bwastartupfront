<script setup lang="ts">
const props = defineProps({
  error: Object
})
</script>
<template>
  <div class="container mx-auto h-screen flex justify-center items-center">
    <div class="w-full lg:w-1/3 px-10 lg:px-0">
      <div class="flex justify-center items-center mx-auto mt-6 mb-8">
        <img src="/404-illustration.svg" alt="" class="w-full" />
      </div>
      <h2 class="font-medium mb-3 text-3xl text-center">
        Something Went Wrong
      </h2>
      <p class="text-center font-light" v-if="error.statusCode === 404">
        The page that you requested doesn't
        <br />
        exist at the moment
        <p>{{error}}</p>
      </p>
      <p class="font-medium mb-3 text-3xl text-center" v-else>An error occurred</p>
      <div class="mb-4 mt-6">
        <div class="mb-3">
          <button
              @click="$router.push({ path: '/' })"
              class="block w-full bg-orange-button hover:bg-green-button text-white font-semibold px-6 py-4 text-lg rounded-full"
          >
            Back To Home
          </button>
        </div>
      </div>
    </div>
  </div>
</template>