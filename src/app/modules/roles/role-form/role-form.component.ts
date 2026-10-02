import { Component, EventEmitter, OnInit, Output, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
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

  @Output() saved = new EventEmitter<void>();

  ngOnInit(): void {
    this.createFormRole();
  }

  createFormRole(): void {
    this.formRole = new FormGroup({
      name: new FormControl('', [Validators.required]),
      permission: new FormControl(''),
    });
  }

  onAdd(): void {
    if (this.formRole.invalid) {
      this.formRole.markAllAsTouched();
      return;
    }
    this.store.dispatch(addRole({
      name: this.formRole.get('name')?.value,
      permission: this.formRole.get('permission')?.value,
    }));
    this.formRole.reset();
    this.saved.emit();
  }
}
