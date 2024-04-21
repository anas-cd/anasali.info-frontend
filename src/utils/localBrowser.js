/**
 * this is only used for links that needs to be open in an in-app-browser
 */

import { Browser } from "@capacitor/browser";

export default {
  async openLink(
    link,
    openOptions = {
      listeners: false,
    },
  ) {
    await Browser.open({ url: link, ...openOptions });

    if (!openOptions.listeners) {
      this.removeListener();
    }
  },
  // Android | IOS only
  async onLoaded(callBack) {
    // returns listener handler
    return await Browser.addListener("browserPageLoaded", callBack);
  },
  // Android | IOS only
  async onFinished(callBack) {
    // returns listener handler
    return await Browser.addListener("browserFinished", callBack);
  },
  // Android | IOS only
  async removeListener() {
    await Browser.removeAllListeners();
  },
  // web | IOS only
  async closeLink() {
    await Browser.close();
  },
};
