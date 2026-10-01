import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { addRole } from '../../../store/actions/roles.action';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-role-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './role-form.component.html',
  styleUrl: './role-form.component.scss'
})
export class RoleFormComponent implements OnInit {
  protected formRole!: FormGroup;
  protected store = inject(Store);

  ngOnInit(): void {
    this.createFormRole();
  }

  createFormRole(): void {
    this.formRole = new FormGroup({
      name: new FormControl(''),
      permission: new FormControl(''),
    });
  }
  onAdd(): void {
    this.store.dispatch(addRole({
      name: this.formRole.get('name')?.value,
      permission: this.formRole.get('permission')?.value,
    }));
  }
}
