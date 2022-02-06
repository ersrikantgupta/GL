import axios from "axios";
import {
    GET_USER_DETAILS, GET_FORMDATA
} from "@/constants/apiUrls";
const getuserDetailsAPICall = async (commit, userId) => {
    const mID = userId;
    let url = GET_USER_DETAILS.replace("{userId}", mID);
    const result = await axios.get(url);
    commit("setuserDetails", result.data);
};

const getUserFormList = async (commit, requestPayload) => {
    await axios.post(GET_FORMDATA, requestPayload);
};

export default {
    getuserDetailsAPICall,
    getUserFormList
};
