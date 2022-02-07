<template>
<div class="container">
<h2>User Information</h2>
<form>
  <div class="form-group">
    <label for="examplename">First Name</label>
    <input type="text" class="form-control" v-model="firstname" id="examplename" placeholder="First Name">
  </div>
  <div class="form-group">
    <label for="examplename1">Last Name</label>
    <input type="text" class="form-control" v-model="lastname" id="examplename1" placeholder="Last Name">
  </div>
  <button type="submit" class="btn btn-info"  @click="submit">Submit</button>
</form>

</div>
</template>

<script>
import { mapActions } from "vuex";
export default {
    name: "formData",
    data() {
        return {
            firstname: "",
            lastname: "",
            apiErrorMessage: null
        };
    },
    methods: {
        ...mapActions({
            getUserFormList:
                "userDetails/getUserFormList"
        }),
        
         
       async submit() {
           
             this.loading = true;
            let requestParams = {
                firstname: this.firstname,
                lastname: this.lastname
            };
            const payload = requestParams;
            try {
                await this.getUserFormList(payload);
            } catch ({ message }) {
                this.apiErrorMessage = message;
            } finally {
                this.loading = false;
            }
        }
    }
};
</script>
<style>
h2{
    text-align:center;
    font-size:16px;
    font-weight:bold;
}
form{
    text-align:left;
}
</style>
