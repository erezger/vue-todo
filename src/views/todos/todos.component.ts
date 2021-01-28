import {Component, Vue} from 'vue-property-decorator';
import {Action, Getter, Mutation} from 'vuex-class';
import {StoreNamespace} from '@/globals/StoreNamespaceGlobal';
import {DELETE_TODO, SAVE_TODO, SET_TODO_LIST, TODO_LIST, TOGGLE_TODO_STATUS} from '@/types/todo.types';
import {TodoModel} from '@/models/todo.model';

@Component({})
export default class TodosComponent extends Vue {

  @Action(SAVE_TODO, StoreNamespace.TODO) public saveTodo: (item: TodoModel) => void;
  @Action(TOGGLE_TODO_STATUS, StoreNamespace.TODO) public toggleTodoStatus: (item: { event: boolean, idx: number }) => void;
  @Action(DELETE_TODO, StoreNamespace.TODO) public deleteTodo: (idx: number) => void;

  @Mutation(SET_TODO_LIST, StoreNamespace.TODO) public setTodoList: (data: boolean) => void;

  @Getter(TODO_LIST, StoreNamespace.TODO) public todolist!: TodoModel[];

  public name: string = '';

  public addTodo(): void {
    this.saveTodo({name: this.name, complete: false});
  }

  public toggle(event: boolean, idx: number): void {
    this.toggleTodoStatus({event, idx});
  }
}
