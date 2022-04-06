import {BindingOptions} from 'vuex-class/lib/bindings';

export class StoreNamespace {

  // manager namespaces
  public static readonly TODO_MODULE: string = 'todo';

  public static readonly TODO: BindingOptions = {namespace: StoreNamespace.TODO_MODULE};
}
