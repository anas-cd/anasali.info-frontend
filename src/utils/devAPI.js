/**
 * handling API requests during development
 */
export default {
  delayRequest(ms = Math.random() * 1000) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  },
  simulateAxiosError(message, status = 500) {
    const error = new Error(message);
    error.isAxiosError = true; // mimic Axios error
    error.response = {
      status, // Set the desired status code (e.g., 500)
      statusText: status === 500 ? "Internal Server Error" : "Unknown Error", // Set status text
      data: {
        errorMessage: message,
      },
    };
    return error;
  },
};
