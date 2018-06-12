import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);
const Index = (resolve) => require(['../pages/index.vue'], resolve);
const Test = (resolve) => require(["../pages/test/test.vue"], resolve);
const Test1 = (resolve) => require(["../pages/test/test1.vue"], resolve);

export default new Router({
  routes: [
    {
      path: '/',
      name: "index",
      component: Index,
      children: [
        {
          path: "/test",
          component: Test
        },
        {
          path: "/test1",
          component: Test1
        }
      ]
    }
  ]
})
