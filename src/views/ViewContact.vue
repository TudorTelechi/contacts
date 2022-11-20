<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col">
        <p class="h3 text-success fw-bold">View Contact</p>
        <p class="fst-italic">
          Una dintre aceste caracteristici simple dar utile este copierea și
          lipirea oricărui text în documentele dvs. Word. Când doriți să citați
          ceva sau aveți nevoie de cuvinte duplicate în fișierul dvs., puteți
          copia și lipi pur și simplu din sursa originală. Acest lucru vă
          accelerează munca în mai multe moduri, deoarece n
        </p>
      </div>
    </div>
  </div>
  <!--Spinner -->
  <div v-if="loading">
    <div class="container">
      <div class="row">
        <div class="col">
          <Spinner />
        </div>
      </div>
    </div>
  </div>
  <!--Error Messager -->
  <div v-if="!loading && errorMessage">
    <div class="container mt-3">
      <div class="row">
        <div class="col">
          <p class="h4 text-danger fw-bold">{{ errorMessage }}</p>
        </div>
      </div>
    </div>
  </div>
  <div class="container" v-if="!loading && isDone()">
    <div class="row align-items-center">
      <div class="col-md-4">
        <img :src="contact.photo" alt="" class="c" />
      </div>
      <div class="col-md-6">
        <ul class="list-group">
          <li class="list-group-item">
            Name: <span class="fw-bold">{{ contact.name }}</span>
          </li>
          <li class="list-group-item">
            Email: <span class="fw-bold">{{ contact.email }}</span>
          </li>
          <li class="list-group-item">
            Mobile: <span class="fw-bold">{{ contact.mobile }}</span>
          </li>
          <li class="list-group-item">
            Company: <span class="fw-bold">{{ contact.company }}</span>
          </li>
          <li class="list-group-item">
            Title: <span class="fw-bold">{{ contact.title }}</span>
          </li>
          <li class="list-group-item">
            Group: <span class="fw-bold">{{ group.name }}</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col">
        <RouterLink to="/" class="btn btn-success"
          ><i class="fa fa-arrow-alt-circle-left"></i>Back</RouterLink
        >
      </div>
    </div>
  </div>
</template>
<script>
import Spinner from "@/components/Spinner.vue";
import { ContactService } from "@/services/ContactService";

export default {
  name: "ViewContact",
  data: function () {
    return {
      contactID: this.$route.params.contactID,
      loading: false,
      contact: {},
      errorMessage: null,
      group: {},
    };
  },
  created: async function () {
    try {
      this.loading = true;
      let response = await ContactService.getContact(this.contactID);
      let groupResponse = await ContactService.getGroup(response.data);
      this.contact = response.data;
      this.group = groupResponse.data;
      this.loading = false;
    } catch (error) {
      this.errorMessage = error;
      this.loading = false;
    }
  },
  components: { Spinner },

  methods: {
    isDone: function () {
      return (
        Object.keys(this.contact).length > 0 &&
        Object.keys(this.group).length > 0
      );
    },
  },
};
</script>

<style scoped></style>
