import {MutationTree} from 'vuex';
import {TodoState} from '@/store/modules/todo/index';
import {SET_TODO_LIST} from '@/types/todo.types';
import {TodoModel} from '@/models/todo.model';

export const mutations: MutationTree<TodoState> = {

  [SET_TODO_LIST]: (state, todoList: TodoModel[]) => {
    state.todoList = todoList;
  },
};
