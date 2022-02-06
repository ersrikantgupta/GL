<template>
<div class="container">
<div class="form-group">
    <label for="examplename">Find Employee Data Through Emp ID :</label>
    <input type="number" class="form-control" v-model="empid" id="examplename" placeholder="Please Enter Emp Id" min="1" max="10">
    <small id="empHelp" class="form-text text-muted">Find Employee ID 1 to 10.</small>
  </div>
  <button type="submit" class="btn btn-info"  @click="merchantAllianceDetail">Find Employee Data</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
    name: "userData",
    data() {
        return {
            apiErrorMessage: null,
            empid: null
        };
    },
    methods: {
        ...mapActions({
           getUserData: "userDetails/getUserData"
        }),
         
       async merchantAllianceDetail() {
            this.loading = true;
            try {
                await this.getUserData({
                    userId: this.empid
                });
            } catch ({ message }) {
                this.apiErrorMessage = message;
            } finally {
                this.loading = false;
            }
        }
    }
};
</script>
