export default defineNuxtRouteMiddleware((to, from) => {
  // const isLoggedIn = false;
  // console.log(to);

  // if (isLoggedIn) {
  //   //redirect to the page we want to go
  //   return navigateTo(to.fullPath);
  // }
  // return navigateTo("/login");
  // //redirect to login page
  console.log("Hello from the middleware");
});
