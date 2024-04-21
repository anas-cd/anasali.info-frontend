import axios from "axios";
import axiosRetry from "axios-retry";
import devAPI from "src/utils/devAPI";

const apiClient = axios.create({
  baseURL: "dev/apis/mailsEndpoint/",
  timeout: 30000, // 30 seconds
  headers: {
    "Content-Type": "application/json",
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
  // -- GETs --
  // async getEmails() {
  //   return apiClient.get('emailsData.json');
  // },
  // -- POSTs --
  // async sendEmail(emailData) {
  //   return apiClient.post("urlEndpoint", emailData);
  // },

  /* -- dev -- */
  // -- GETs --
  async getEmails() {
    devAPI.delayRequest();
    return apiClient.get("emailsData.json");
  },
  // -- POSTs --
  async sendEmail200(emailData) {
    devAPI.delayRequest();
    return apiClient.get("200Response.json");
  },
  async sendEmail500(emailData) {
    devAPI.delayRequest(1500);
    throw devAPI.simulateAxiosError("internal server error");
  },
};
