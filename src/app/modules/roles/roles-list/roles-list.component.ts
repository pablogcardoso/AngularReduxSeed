import { Component, OnInit } from '@angular/core';
import { RoleEntity } from '../../../domain/role.entity';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { getRoles } from '../../../store/actions/roles.action';
import { selectRoles } from '../../../store/selectors/roles.selector';

@Component({
    standalone: true,
    imports: [],
    selector: 'app-role',
    templateUrl: 'roles-list.component.html',
    styleUrl: './roles-list.component.scss'
})

export class RoleListComponent implements OnInit {

    rolesColumnsHeader: string[] = ["id", "name", "permissions", "status"]
    roles: RoleEntity[] = [];
    $rolesSelector: Observable<any> = new Observable();
    subscriptions: Subscription[] = [];

    constructor(private store: Store<any>) { }

    ngOnInit() {
        //this line fill the role state , now you can get this state wherever you need
        this.store.dispatch(getRoles());

        //with these lines we can select part of the current state, we can uso in others part of the application
        this.$rolesSelector = this.store.select(selectRoles);
        this.subscriptions.push(this.$rolesSelector.subscribe((store: RoleEntity[]) => {
            this.roles = store;
            console.log("get roles using selector: ", this.roles);
        }));
    }

    ngOnDestroy(): void {
        this.subscriptions.forEach(subscription => {
            console.log("destroy subscriptions of observables");
            subscription.unsubscribe();
        });
    }
}