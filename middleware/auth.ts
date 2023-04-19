export default defineNuxtRouteMiddleware((to, from) => {
  console.log("auth中间件");
  // isAuthenticated() is an example method verifying if a user is authenticated
  // if (isAuthenticated() === false) {
  //   return navigateTo("/login");
  // }
});
