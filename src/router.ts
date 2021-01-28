import Vue from 'vue';
import VueRouter from 'vue-router';
import TodosComponent from '@/views/todos/todos.component';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/todos',
      name: 'todos',
      component: TodosComponent,
    },
    {
      path: '*',
      redirect: '/todos',
    },
  ],
});
