import Vue from 'vue';
import Vuex, {Module} from 'vuex';
import {actions} from './actions';
import {mutations} from './mutations';
import {getters} from './getters';
import {RootState} from '@/store';
import {TodoModel} from '@/models/todo.model';

Vue.use(Vuex);

export interface TodoState {
  todoList: TodoModel[];
}

// message state model init
export const initialState = (): TodoState => {
  return {
    todoList: [],
  };
};

export const todo: Module<TodoState, RootState> = {
  namespaced: true,
  state: initialState,
  getters,
  actions,
  mutations,
};
