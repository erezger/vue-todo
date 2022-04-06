import {Component, Vue} from 'vue-property-decorator';
import {Action, Getter, Mutation} from 'vuex-class';
import {StoreNamespace} from '@/globals/store-namespace.global';
import {DELETE_TODO, GET_TODOS, SAVE_TODO, SET_TODO_LIST, TODO_LIST, PATCH_TODO} from '@/types/todo.types';
import {TodoModel} from '@/models/todo.model';

@Component({})
export default class TodosComponent extends Vue {

  @Action(GET_TODOS, StoreNamespace.TODO) public getTodo: () => void;
  @Action(SAVE_TODO, StoreNamespace.TODO) public saveTodo: (todoItem: TodoModel) => void;
  @Action(PATCH_TODO, StoreNamespace.TODO) public patchTodo: (item: TodoModel) => void;
  @Action(DELETE_TODO, StoreNamespace.TODO) public deleteTodo: (id: string) => void;

  @Mutation(SET_TODO_LIST, StoreNamespace.TODO) public setTodoList: (data: boolean) => void;

  @Getter(TODO_LIST, StoreNamespace.TODO) public todolist!: TodoModel[];

  public text: string = '';
  public searchText: string = '';

  get filteredTodos(): TodoModel[] {
    const todos = [...this.todolist];
    return todos.filter((t) => t.fields.Tags.indexOf(this.searchText) !== -1)
  }

  public mounted(): void {
    this.getTodo();
  }

  public addTodo(): void {
    const todoItem: TodoModel = {
      fields: {
        Text: this.text,
        Status: 'ToDo',
        Tags: JSON.stringify(['tag1', 'tag2']),
      },
    };
    this.saveTodo(todoItem);
  }
}
