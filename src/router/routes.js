const routes = [
  {
    path: "/",
    component: () =>
      process.env.MODE.toUpperCase() == "CAPACITOR"
        ? import("layouts/MobileLayout.vue")
        : import("layouts/WebLayout.vue"),
    children: [
      { path: "", component: () => import("pages/MainPage/CVPage.vue") },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
