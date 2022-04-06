import Vue from 'vue';
import Vuex, {Module} from 'vuex';
import {actions} from './actions';
import {mutations} from './mutations';
import {getters} from './getters';
import {RootState} from '@/store';
import {TodoModel} from '@/models/todo.model';
import {BaseResponse} from '@/models/base-response.model';

Vue.use(Vuex);

export interface TodoState {
  todoModel: BaseResponse;
  todoList: TodoModel[];
}

// message state model init
export const initialState = (): TodoState => {
  return {
    todoModel: {} as BaseResponse,
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
