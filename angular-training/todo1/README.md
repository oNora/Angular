##  steps of the task:

### Part 1 - Bindings and Component Basics

1. Create a new angular application.
2. Create a presentational todo component with two inputs (title, completed) and one output (toggle).
3. Use the todo component inside the `app.component` template.
4. Create a todo interface and create multiple properties inside the `app.coponent` (todo1, todo2, etc. ) using the created interface then bind them to todo components.
5. Create a handler for the toggle action.
6. Create another output called `edit` and inside the `app.component` template create an input that will be used for editing the todo title.
7. Create a propery `selectedTodo` that will be set to the todo that fires an `edit` event.
8. Create a save button inside the `app.component`. When clicked it will get the value from the title edit input (from `6.`) and modify the selectedTodo title.

### Part 2 - Built-In Directives

1. Move all the todos inside the `app.component` to a list: `todos: ITodo[] = [...]`.
2. Using `*ngFor` iterate over the todos and create a `todo.component` for each entry.
3. Inside the `todo.component` wrap the content with a div and use the `ngClass` directive to set a `completed` class whenever a todo is marked as completed. Inise the `todo.component.css` add this styles:
    ```css
    div.completed {
        text-decoration: line-through;
    }
    ```
4. Inside the `app.component` next to the edit title input create another button with text Add. Using `*ngIf` and `selectedTodo` show / hide the add / save buttons. If the `selectedTodo === null` the add button should be visible otherwise the save button.
5. Create a handler for the add button that will create a new uncompleted todo (use the interface) and add it to the list.
6. *Modify the `*ngIf` to use `<ng-template>` and `<ng-container>` instead of using two `*ngIf`.

### Part 3 - Dependency Injection and Services

1. Using angular cli create a service called `todo` (`ng g s todo`)
2. Move the todo list and all the logic for updating and adding a todo inside the service.
3. Inject the service into the app.component and integrate it so we can add and modify todos.

### Part 4 - Custom Directives

1. Create a `highlight` directive that changes the color of the text on a given element using `ElementRef`, `@HostBinding('mouseenter')`, `@HostBinding('mouseleave')` and `Renderer2`.
2. Create a custom `myIf` directive with one input called `template` that shows and hides a given template. Use a template variable to reference the given template. (use a setter Input)
3. Modify `myIf` to be `*myIf`.
4. Create a custom `*myFor` directive.
5. Create a custom `mySwitch` and `mySwitchCase` directives; (use ContentChildren decorator)