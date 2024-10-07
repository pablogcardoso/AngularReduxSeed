import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserEntity, UserState } from '../../../domain/user.entity';
import { Store } from '@ngrx/store';
import { getUsers } from '../../../store/actions/user.action';
import { Observable, Subscription } from 'rxjs';
import { selectUsers } from '../../../store/selectors/user.selector';

@Component({
    standalone: true,
    imports: [],
    selector: 'user-list',
    templateUrl: 'user-list.component.html',
    styleUrl: './user-list.component.scss'
})

export class UserListComponent implements OnInit, OnDestroy {

    usersColumnsHeader: string[] = ["id", "name", "email", "roles", "state"]
    users: UserEntity[] = [];
    $usersSelector: Observable<any> = new Observable();
    subscriptions: Subscription[] = [];

    constructor(private store: Store<any>) { }

    ngOnInit() {
        //this line fill the user state , now you can get this state wherever you need
        this.store.dispatch(getUsers());
      
        //with these lines we can select part of the current state, we can uso in others part of the application
        this.$usersSelector = this.store.select(selectUsers);
        this.subscriptions.push(this.$usersSelector.subscribe((store: UserEntity[]) => {
            this.users = store;
            console.log("get users using selector: ", this.users );
        }));
    }

    ngOnDestroy(): void {
        this.subscriptions.forEach(subscription => {
            console.log("destroy subscriptions of observables");
            subscription.unsubscribe();
        });
    }
}