<script setup lang="ts">
import { RouterView } from "vue-router";
import NavBar from "./components/NavBar.vue";
import Spinner from "./components/Spinner.vue";
</script>

<template>
  <NavBar> </NavBar>
  <h2></h2>

  <RouterView />
</template>

<style scoped></style>
