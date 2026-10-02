import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoleEntity } from '../../../domain/role.entity';
import { Observable, Subscription, takeUntil, Subject } from 'rxjs';
import { Store } from '@ngrx/store';
import { getRoles, removeRole } from '../../../store/actions/roles.action';
import { selectRoles } from '../../../store/selectors/roles.selector';
import { RoleFormComponent } from '../role-form/role-form.component';
import { BaseModalComponent } from '../../shared/base-modal/base-modal.component';

@Component({
    standalone: true,
    imports: [CommonModule, RoleFormComponent, BaseModalComponent],
    selector: 'app-role-list',
    templateUrl: 'roles-list.component.html',
    styleUrl: './roles-list.component.scss'
})

export class RoleListComponent implements OnInit {

    rolesColumnsHeader: string[] = ["id", "name", "permissions", "status"]
    roles: RoleEntity[] = [];
    $rolesSelector: Observable<any> = new Observable();
    subscriptions: Subscription[] = [];
    destroy$: Subject<void> = new Subject();

    showForm: boolean = false;

    protected store = inject(Store);

    ngOnInit() {
        const action = this.store.dispatch(getRoles());

        console.log("dispatched getRoles action: ", action);
        this.$rolesSelector = this.store.select(selectRoles);
        this.$rolesSelector
            .pipe(takeUntil(this.destroy$))
            .subscribe((store: RoleEntity[]) => {
                this.roles = store;
                console.log("get roles using selector: ", this.roles);
            });

    }

    openForm(): void {
        this.showForm = true;
    }

    closeForm(): void {
        this.showForm = false;
    }

    onSaved(): void {
        this.closeForm();
    }

    onRemove(id: number): void {
        this.store.dispatch(removeRole({ id }));
    }

    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
