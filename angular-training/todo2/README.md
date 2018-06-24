##  steps of the task:

### Part 1 - RxJS Pt.1 & HttpClient and Interceptors

1. Inside the `todo.service` inject the `HttpClient` service and create a method called `load` that will make a call to `https://jsonplaceholder.typicode.com/todos` and set the returned result to the `todos` property. Initial todos should be null. Use the `map` operator to extract the data that we only need (based on the interface that we already have).
2. Create a property `loaded` that will initially be `false` and after the content is downloaded set it to `true`.
3. Use this property to show inside the `app.component` a `Loading...` sign instead of the empty todo list while the data is being downloaded. (use the browser `network throttle` to test it)
4. Create an service that implements the Interceptor interface.
5. Use `environment` to set an apiUrl property with the domain from above.
6. Inside the interceptor clone the request and append the apiUrl to it.

### Part 2 - RxJS Pt.2 & Lifecycle Hooks Pt.1

1. Refactor the appMyFor directive from the previous time to have a method called _applyChanges that checks if the lenght of the views and items is the same and if not rerenders the nestedViews. Make sure that appMyFor works either if we add a new element to the array that we render without creating a new instanse (with push) or if we create a new instance (with concat for example). (Hint: use `ngDoCheck` and `@Input` setter)

    ```javascript
    this.data.push({ name: 'Ivan' }); // adds an element to the array without creating a new instance
    this.data = this.data.concat([{ name: 'Ivan' }]); // creates a new element concatenating the two arrays. Usually when we have only one element to concat with the [] are optional.
    ```

1. Create a input element that we will use to filter out our todos based on the input value and todo title.

2. Use `ViewChild` to get the filter input element (use a template variable)

3. Use RxJS `fromEvent('keyup', nativeElement)` to create a stream of the input value.

4. Use RxJS `debounceTime(500)` to minimize stream values.

5. Filter out the todos that contain the text from the input.

6. Use `ngOnDestroy` to unsubscribe from the observable!

### Part 3 - Lifecycle Hooks Pt.2 & RxJS Pt.3

1. Create a `clock.module` with `clock.component`, `min.component` and `sec.component`. Using RxJS create a 500 ms interval stream inside the `clock.component` that pushes an object containing `{ min: number | string, sec: number | string }` upon subscription.

2. Use `OnDestroy` hook to unsubscribe from the observable!

3. Set `min` and `sec` components to use ` ChangeDetectionStrategy.OnPush` and implement `OnChanges` and `OnDoCheck` method. Inside the `OnDoCheck` using `ChangeDetectorRef` mark the component for check if the necessary value for the current component has changed.

4. *Refactor the `todo.service` to use a stream of todos instead of an array. Every time a new todo is added a new value (the extended array) should be sent to all subscribers. (Hint: use a `BehaviorSubject`).

### Part 4 - Routing

1. Create a `todo-list.component` that will be used to render a list of todos.

2. Create a routing module for our application. We will have three routes: `all`, `completed`, `uncompleted` for showing all the todos, the completed and the uncompleted ones.

3. Use route data to tell the `todo-list.component` what todos should be listed. (e.g. `{ path: ..., data: { completed: null }}` for showing all the todos, `{ path: ..., data: { completed: true }}` for showing the completed ones.)

4. Inside the `todo-list.component` get the route data via the `ActivatedRoute (snapshot)` and apply a filter to the `todo.service` todo stream.