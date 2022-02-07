import userDetailsService from "@/services/userDetailsService";

const state = {
    userDetails: {}
};

const getters = {
    getDetails(state) {
        return state.userDetails;
    }
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
        return userDetailsService.getUserFormListAPICall(
            commit,
            formData
        );
    }
};

const mutations = {
     setuserDetails(state, userDetails) {
        state.userDetails = userDetails;
    }
};

export const userDetails = {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};
