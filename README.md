# AngularRedux

This project was create to explain how redux works over angular 18, with standalone components

# Introduccion

This project contain the next feature to test and play:

- State implementation
- Actions
- Reducer
- Effects (to call services directly)
- selector (to get a part of the state)

Components

- UserList component
- UserView, to see a detail (its not implemented yet)
- RoleList Component

### How to fill state?

calling the action that is associated with the effect responsible for calling the service.

 ```
    import { Store } from '@ngrx/store';
    import { getUsers } from '../../../store/actions/user.action';

    //getUser is the associated action
    this.store.dispatch(getUsers());

  ```
### How to get the status of the application from anywhere in the system?

    ```
        users: UserEntity[] = [];
        $usersSelector: Observable<any> = new Observable();
        subscriptions: Subscription[] = [];

        constructor(private store: Store<any>) { }

        ......


        this.$usersSelector = this.store.select(selectUsers);
        this.subscriptions.push(this.$usersSelector.subscribe((store: UserEntity[]) => {
            this.users = store;
            console.log("get users using selector: ", this.users );
        }));


        ....

         ngOnDestroy(): void {
            this.subscriptions.forEach(subscription => {
            console.log("destroy subscription");
            subscription.unsubscribe();
        });


    ```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## To contact me

pablogcardoso@gmail.com
