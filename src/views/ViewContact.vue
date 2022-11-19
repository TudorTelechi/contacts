<template>
  <h2>View Contact</h2>

  {{ test }}

  <input
    type="button"
    @click="test = test + 1"
    value="increment"
    class="btn btn-primary" />

  <input
    v-model="name"
    type="text"
    class="form-control"
    placeholder="Username"
    aria-label="Username"
    aria-describedby="basic-addon1" />

  Bine ai venit {{ name }}
</template>
<script>
export default {
  name: "ViewContact",
  data() {
    return {
      test: 1,
      name: "",
    };
  },
};
</script>

<style></style>
