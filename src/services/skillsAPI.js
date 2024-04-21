import axios from "axios";
import axiosRetry from "axios-retry";
import devAPI from "src/utils/devAPI";

const apiClient = axios.create({
  baseURL: "dev/apis/skillsEndpoint/",
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
  // async getSkillsData() {
  //   return apiClient.get(/* url endpoint */);
  // },

  /* -- dev -- */
  async getSkillsData() {
    devAPI.delayRequest();
    return apiClient.get("skillsData.json");
  },
};
