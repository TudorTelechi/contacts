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
        <form>
          <div class="mb-2">
            <input type="text" class="form-control" placeholder="Name" />
          </div>
          <div class="mb-2">
            <input type="text" class="form-control" placeholder="Photo URL" />
          </div>
          <div class="mb-2">
            <input type="Email" class="form-control" placeholder="Email" />
          </div>
          <div class="mb-2">
            <input type="number" class="form-control" placeholder="Mobile" />
          </div>
          <div class="mb-2">
            <input type="text" class="form-control" placeholder="Company" />
          </div>
          <div class="mb-2">
            <input type="text" class="form-control" placeholder="Title" />
          </div>
          <div class="mb-2">
            <select class="form-control">
              <option value="">Select Group</option>
            </select>
          </div>
          <div class="mb-2">
            <input type="submit" class="btn btn-success" value="Create" />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "AddContact",
};
</script>

<style scoped></style>
