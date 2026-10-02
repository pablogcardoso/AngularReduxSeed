import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { RoleEntity } from '../../../domain/role.entity';
import { UserEntity } from '../../../domain/user.entity';
import { getRoles } from '../../../store/actions/roles.action';
import { getUsers } from '../../../store/actions/user.action';
import { selectRoles } from '../../../store/selectors/roles.selector';
import { selectUsers } from '../../../store/selectors/user.selector';

interface RoleCount {
    name: string;
    value: number;
}

@Component({
    selector: 'app-users-permissions-bar-chart',
    standalone: true,
    imports: [CommonModule, NgxChartsModule],
    templateUrl: './users-permissions-bar-chart.component.html',
    styleUrl: './users-permissions-bar-chart.component.scss'
})
export class UsersPermissionsBarChartComponent implements OnInit {

    protected readonly store = inject(Store);

    chartData$: Observable<RoleCount[]> = new Observable<RoleCount[]>();
    view: [number, number] = [600, 400];
    colorScheme: string = 'cool';

    ngOnInit(): void {
        /**
         * llamando a un efecto para obtener los usuarios, solo deberia llamar al store y no directamente a un servicio
         * */
        this.store.dispatch(getRoles());
        this.store.dispatch(getUsers());

        this.chartData$ = combineLatest([
            this.store.select(selectUsers),
            this.store.select(selectRoles)
        ]).pipe(
            map(([users, roles]) => this.buildChartData(users, roles))
        );
    }

    private buildChartData(users: UserEntity[], roles: RoleEntity[]): RoleCount[] {
        const activeRoles = roles.filter((r: RoleEntity) => r.status !== 'inactive');
        const activeRoleNames = new Set(activeRoles.map((r: RoleEntity) => r.name));

        return activeRoles
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((role: RoleEntity) => {
                const count = users.filter((user: UserEntity) =>
                    user.status !== 'inactive' &&
                    user.roles.includes(role.name) &&
                    user.roles.every((roleName: string) => activeRoleNames.has(roleName))
                ).length;

                return { name: role.name, value: count };
            });
    }
}