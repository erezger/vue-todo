import {Observable} from 'rxjs';
import {$httpClient} from '@/globals/http-client';
import {TodoModel} from '@/models/todo.model';
import {BaseResponse} from '@/models/base-response.model';

export default class TodoService {
  private readonly baseApi: string;

  constructor() {
    this.baseApi = '';
  }

  public getTodos(): Observable<BaseResponse> {
    return $httpClient.get(this.baseApi);
  }

  public saveTodo(todoItem: TodoModel): Observable<BaseResponse> {
    const records = {records: [todoItem]};
    return $httpClient.post(this.baseApi, records);
  }

  public patchTodo(todoItem: TodoModel): Observable<BaseResponse> {
    return $httpClient.patch(this.baseApi, {records: [todoItem]});
  }

  public deleteTodo(id: string): Observable<BaseResponse> {
    return $httpClient.delete(this.baseApi + '/?records[]=' + id);
  }
}
