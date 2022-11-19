<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <nav class="navbar navbar-expand navbar-light bg-light">
      <a class="navbar-brand" href="/">Contacts</a>

      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <RouterLink to="/" class="nav-link">Home</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/add-contact" class="nav-link"
            >Add Contact</RouterLink
          >
        </li>
        <li class="nav-item">
          <RouterLink to="/view-contact" class="nav-link"
            >View Contact</RouterLink
          >
        </li>
      </ul>
    </nav>
  </header>

  <div class="container-fluid">
    <RouterView />
  </div>
</template>

<style scoped></style>
