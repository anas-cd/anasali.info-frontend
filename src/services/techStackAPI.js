import axios from "axios";
import axiosRetry from "axios-retry";
import devAPI from "src/utils/devAPI";

const apiClient = axios.create({
  baseURL: "dev/apis/techEndpoint/",
  timeout: 30000, // 30 seconds
  headers: {
    Accept: "application/json",
  },
});

axiosRetry(apiClient, {
  retries: 2,
  retryDelay: 0,
});

// --- functions (endpoints) ---
export default {
  /* -- production -- */
  // async getTechData() {
  //   return apiClient.get(/* url endpoint */);
  // },

  /* -- dev -- */
  async getTechData() {
    devAPI.delayRequest();
    return apiClient.get("techData.json");
  },
};
