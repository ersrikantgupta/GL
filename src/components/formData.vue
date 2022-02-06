<template>
<div class="container">
<form>
  <div class="form-group">
    <label for="examplename">First name</label>
    <input type="text" class="form-control" v-model="firstname" id="examplename" placeholder="name">
  </div>
  <div class="form-group">
    <label for="examplename1">Last name</label>
    <input type="text" class="form-control" v-model="lastname" id="examplename1" placeholder="name">
  </div>
  <button type="submit" class="btn btn-primary"  @click="submit">Submit</button>
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
    // computed: {
    //    /**
    //      * Getters called
    //      */
    //     ...mapGetters({
    //         formDetail: "userDetails/formDetail"
    //     })
    // },
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
