import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserEntity } from '../domain/user.entity';

@Injectable({ providedIn: 'root' })
export class UserService {

    //mock data
    users: UserEntity[] = [
        {
            id: "1001", name: "admin", email: "admin@mail.com", status: 'active', roles: ["admin"]
        },
        {
            id: "1002", name: "Jhon", email: "jhon@mail.com", status: 'inactive', roles: ["user"]
        },
         {
            id: "1003", name: "Paul", email: "paul@mail.com", status: 'active', roles: ["maintenance"]
        },
         {
            id: "1004", name: "Alice", email: "alice@mail.com", status: 'active', roles: ["user"]
        },
         {
            id: "1005", name: "Bob", email: "bob@mail.com", status: 'active', roles: ["user"]
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

    removeUser(id: string): Observable<UserEntity[]> {
        const users = this.users.filter(u => u.id !== id);
        /**
         * this line mock a delete operation in the backend
         */
        this.users = users;
        /**
         * return filtered value to effect to update the store
         */
        return of([...users]);
    }

}