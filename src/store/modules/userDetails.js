import userDetailsService from "@/services/userDetailsService";

const state = {
    userDetails: {},
    formDetails: null
};

const getters = {
    getDetails(state) {
        return state.userDetails;
    },
    formDetails(state) {
        return state.formDetails;
    },
};

const actions = {
     getUserData({ commit }, { userId }) {
        return userDetailsService.getuserDetailsAPICall(
            commit,
            userId
        );
    },
     getUserFormList(
        { commit },
         formData
    ) {
        return userDetailsService.getUserFormList(
            commit,
            formData
        );
    }
};

const mutations = {
     setuserDetails(state, userDetails) {
        state.userDetails = userDetails;
    },
    setClickCommissionList(state, formDetails) {
        state.formDetails = formDetails.data;
    }

};

export const userDetails = {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};
