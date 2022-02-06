<template>
<div class="container">
<div v-if="getData">
<ul class="list-group">
  <li class="list-group-item list-group-item-info"><strong>EMP ID: </strong> {{ getDetails.id }}</li>
  <li class="list-group-item list-group-item-info"><strong>NAME: </strong> {{ getDetails.name }}</li>
  <li class="list-group-item list-group-item-info"><strong>USER NAME: </strong> {{ getDetails.username }}</li>
   <li class="list-group-item list-group-item-info"><strong>EMAL ID: </strong> {{ getDetails.email }}</li>
</ul>
</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    name: "userDetail",
    data() {
        return {
            apiErrorMessage: null,
            getData: true
        };
    },
    computed: {
        ...mapGetters({
            getDetails: "userDetails/getDetails"
        })
    },
    methods: {   
       async merchantAllianceDetail(affiliateId, userId) {
            this.loading = true;
            try {
                await this.getUserData({
                    affiliateId: affiliateId,
                    userId: userId
                });
                this.dialog = true;
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
.list-group{ 
    margin-top: 30px;
    text-align: left;
    }
</style>
