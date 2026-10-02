import { Component, OnInit, Output, EventEmitter, inject, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { addUser } from '../../../store/actions/user.action';
import { takeUntil } from 'rxjs/internal/operators/takeUntil';
import { RoleEntity } from '../../../domain/role.entity';
import { Subject } from 'rxjs/internal/Subject';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss'
})
export class UserFormComponent implements OnInit, OnDestroy {
  protected formUser!: FormGroup;
  protected store = inject(Store);
  protected roles: RoleEntity[] = [];
  destroy$: Subject<void> = new Subject();
  @Output() saved = new EventEmitter<void>();

  ngOnInit(): void {
    this.createFormUser();
    this.loadRoles()
  }

  loadRoles(): void {
    // Logic to load roles can be added here if needed
    this.store.select('selectRoles').pipe(takeUntil(this.destroy$))
      .subscribe((store: RoleEntity[]) => {
        this.roles = store;
        console.log("get roles using selector: ", this.roles);
      });
  }

  createFormUser(): void {
    this.formUser = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      rol: new FormControl(''),
    });
  }

  onAdd(): void {
    if (this.formUser.invalid) {
      this.formUser.markAllAsTouched();
      return;
    }
    this.store.dispatch(addUser({
      name: this.formUser.get('name')?.value,
      email: this.formUser.get('email')?.value,
      rol: this.formUser.get('rol')?.value,
    }));
    this.formUser.reset();
    this.saved.emit();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
