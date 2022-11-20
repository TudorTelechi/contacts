<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col">
        <p class="h3 text-success fw-bold">
          Contact Manager
          <RouterLink to="/contacts/add" class="btn btn-success btn-nm"
            ><i class="fa fa-plus-circle"></i>New</RouterLink
          >
        </p>
        <p class="fst-italic">
          Una dintre aceste caracteristici simple dar utile este copierea și
          lipirea oricărui text în documentele dvs. Word. Când doriți să citați
          ceva sau aveți nevoie de cuvinte duplicate în fișierul dvs., puteți
          copia și lipi pur și simplu din sursa originală. Acest lucru vă
          accelerează munca în mai multe moduri, deoarece n
        </p>
        <form>
          <div class="row">
            <div class="col-md-6">
              <div class="row">
                <div class="col">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Search Name" />
                </div>
                <div class="col">
                  <input type="submit" class="btn btn-outline-dark" />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  <div class="container mt-3">
    <div class="row">
      <div class="col-md-6">
        <div class="card my-2 list-group-item-success shadow-lg">
          <div class="card-body">
            <div class="row align-items-center">
              <div class="col-sm-4">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtF3o2PvqxOMHgdrpj_YRItsLBjxyTeNZu_Q&usqp=CAU"
                  alt=""
                  class="contact-img" />
              </div>
              <div class="col-sm-7">
                <ul class="list-group">
                  <li class="list-group-item">
                    Name: <span class="fw-bold">Name</span>
                  </li>
                  <li class="list-group-item">
                    Email: <span class="fw-bold">Email</span>
                  </li>
                  <li class="list-group-item">
                    Mobile: <span class="fw-bold">Mobile</span>
                  </li>
                </ul>
              </div>
              <div
                class="col-sm-1 d-flex flex-column justify-content-center align-items-center">
                <RouterLink
                  to="/contacts/view/:contactId"
                  class="btn btn-warning my-1">
                  <i class="fa fa-eye"></i>
                </RouterLink>
                <RouterLink
                  to="/contacts/edit/:contactId"
                  class="btn btn-primary my-1">
                  <i class="fa fa-pen"></i>
                </RouterLink>
                <button class="btn btn-danger my-1">
                  <i class="fa fa-trash"> </i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ContactService } from "@/services/ContactService";
import { TriggerOpTypes } from "vue";

export default {
  name: "ContactManager" /*,
  data: function () {
    return {
      loading: false,
      contacts: [],
      errorMessage: null,
    };
  },
  created: async function () {
    try {
      this.loading = true;
      let response = await ContactService.getAllContacts();
      this.contacts = response.data;
      this.loading = false;
    } catch (error) {
      this.errorMessage = error;
      this.loading = false;
    }
  },
  methods: {},
  */,
};
</script>

<style></style>
