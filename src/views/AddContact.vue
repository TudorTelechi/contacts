<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col">
        <p class="h3 text-success fw-bold">Add Contact</p>
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
  <div class="container mt-3">
    <div class="row">
      <div class="col-md-4">
        <form @submit.prevent="submitCreate()">
          <div class="mb-2">
            <input
              required
              v-model="contact.name"
              type="text"
              class="form-control"
              placeholder="Name" />
          </div>
          <div class="mb-2">
            <input
              required
              v-model="contact.photo"
              type="text"
              class="form-control"
              placeholder="Photo URL" />
          </div>
          <div class="mb-2">
            <input
              required
              v-model="contact.email"
              type="Email"
              class="form-control"
              placeholder="Email" />
          </div>
          <div class="mb-2">
            <input
              required
              v-model="contact.mobile"
              type="number"
              class="form-control"
              placeholder="Mobile" />
          </div>
          <div class="mb-2">
            <input
              required
              v-model="contact.company"
              type="text"
              class="form-control"
              placeholder="Company" />
          </div>
          <div class="mb-2">
            <input
              required
              v-model="contact.title"
              type="text"
              class="form-control"
              placeholder="Title" />
          </div>
          <div class="mb-2">
            <select
              required
              v-model="contact.groupId"
              class="form-control"
              v-if="groups.length > 0">
              <option value="">Select Group</option>
              <option :value="group.id" v-for="group of groups" :key="group.id">
                {{ group.name }}
              </option>
            </select>
          </div>
          <div class="mb-2">
            <input type="submit" class="btn btn-success" value="Create" />
          </div>
        </form>
      </div>
      <div class="col-md-4">
        <img :src="contact.photo" alt="" class="contact-img" />
      </div>
    </div>
  </div>
</template>
<script>
import { ContactService } from "@/services/ContactService";

export default {
  name: "AddContact",
  data: function () {
    return {
      contact: {
        name: "",
        photo: "",
        email: "",
        mobile: "",
        company: "",
        title: "",
        groupId: "",
      },
      groups: [],
    };
  },
  created: async function () {
    try {
      let response = await ContactService.getALLGroups();
      this.groups = response.data;
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    submitCreate: async function () {
      try {
        let response = ContactService.createContact(this.contact);
        if (response) {
          return this.$router.push("/");
        } else {
          return this.$router.push("/contacts/add");
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped></style>
