import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserEntity } from '../domain/user.entity';

@Injectable({ providedIn: 'root' })
export class UserService {

    //mock data
    users: UserEntity[] = [
        {
            id: "1001", name: "admin", email: "admin@mail.com", status: 1, roles: ["admin"]
        },
        {
            id: "1002", name: "Jhon", email: "jhon@mail.com", status: 2, roles: ["user"]
        }
    ];

    constructor() { }

    getUsers(): Observable<UserEntity[]> {
        //Return Mock
        return of(this.users);
    }

    getUser(id: string): Observable<UserEntity | null> {
        //Mock htttp services respons
        let filtered = this.users.filter((value, index) => {
            return (value.id == id);
        })
        return filtered.length > 0 ? of(filtered[0]) : of(null);
    }

}