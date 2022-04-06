import {RootState} from '@/store/index';
import {ActionContext, ActionTree} from 'vuex';
import {TodoState} from '@/store/modules/todo/index';
import {DELETE_TODO, GET_TODOS, SAVE_TODO, SET_TODO_LIST, PATCH_TODO} from '@/types/todo.types';
import {TodoModel} from '@/models/todo.model';
import TodoService from '@/globals/todo.service';
import {$httpClient} from '@/globals/http-client';
import {apiKeyInterceptor} from '@/globals/apikey.interceptors';

const todoService = new TodoService();
$httpClient.addRequestInterceptor(apiKeyInterceptor);

export const actions: ActionTree<TodoState, RootState> = {

  [GET_TODOS]: (
    {state, commit}: ActionContext<TodoState, RootState>,
  ) => {
    todoService.getTodos()
      .subscribe(
        (data) => {
          /*const todos = {
            records: [
              {
                id: 'recQSvVLiA6Y1x6fV',
                fields: {
                  Text: 'another task 2',
                  Status: 'Todo',
                  Tags: '["tag1","tag2"]',
                },
                createdTime: '2021-11-10T15:25:27.000Z',
              },
            ],
          };
          commit(SET_TODO_LIST, todos);*/
          commit(SET_TODO_LIST, data.records);
        },
      );
  },

  [SAVE_TODO]: (
    {state, commit, dispatch}: ActionContext<TodoState, RootState>,
    todoItem: TodoModel,
  ) => {
    todoService.saveTodo(todoItem)
      .subscribe(
        (data) => {
          commit(SET_TODO_LIST, data.records);
          dispatch(GET_TODOS);
        },
      );
  },

  [PATCH_TODO]: (
    {state, commit, dispatch}: ActionContext<TodoState, RootState>,
    todoItem: TodoModel,
  ) => {
    todoService.patchTodo(todoItem)
      .subscribe(
        () => {
          dispatch(GET_TODOS);
        },
      );
  },

  [DELETE_TODO]: (
    {state, commit, dispatch}: ActionContext<TodoState, RootState>,
    id: string,
  ) => {
    todoService.deleteTodo(id)
      .subscribe(
        () => {
          dispatch(GET_TODOS);
        },
      );
  },
};
