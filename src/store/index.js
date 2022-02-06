import Vue from "vue";
import Vuex from "vuex";
import { userDetails } from "./modules/userDetails";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        isLoading: false
    },
    getters: {
    },
    mutations: {
    },
    actions: {},
    modules: {
        userDetails
    }
});
