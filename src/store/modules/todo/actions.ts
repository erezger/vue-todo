import {RootState} from '@/store/index';
import {ActionContext, ActionTree} from 'vuex';
import {TodoState} from '@/store/modules/todo/index';
import {DELETE_TODO, SAVE_TODO, SET_TODO_LIST, TOGGLE_TODO_STATUS} from '@/types/todo.types';
import {TodoModel} from '@/models/todo.model';

export const actions: ActionTree<TodoState, RootState> = {

  [SAVE_TODO]: (
    {state, commit}: ActionContext<TodoState, RootState>,
    todoItem: TodoModel,
  ) => {
    const todoList = [...state.todoList, todoItem]
    commit(SET_TODO_LIST, todoList);
  },

  [TOGGLE_TODO_STATUS]: (
    {state, commit}: ActionContext<TodoState, RootState>,
    item: { event: boolean, idx: number },
  ) => {
    const todoList = [...state.todoList];
    todoList[item.idx].complete = item.event;
    commit(SET_TODO_LIST, todoList);
  },

  [DELETE_TODO]: (
    {state, commit}: ActionContext<TodoState, RootState>,
    idx: number,
  ) => {
    const todoList = [...state.todoList];
    todoList.splice(idx, 1);
    commit(SET_TODO_LIST, todoList);
  },
};
