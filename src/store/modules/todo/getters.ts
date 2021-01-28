import {GetterTree} from 'vuex';
import {RootState} from '@/store/index';
import {TodoState} from '@/store/modules/todo/index';
import {TodoModel} from '@/models/todo.model';
import {TODO_LIST} from '@/types/todo.types';

export const getters: GetterTree<TodoState, RootState> = {

  [TODO_LIST](state): TodoModel[] {
    return state.todoList;
  },
};
