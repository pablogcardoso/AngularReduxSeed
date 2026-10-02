import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'base-modal',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div
      class="fixed inset-0 z-40 bg-black/50"
      (click)="close()"
      aria-hidden="true"
    ></div>

    <div
      class="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      [attr.aria-label]="title"
    >
      <div
        class="card-container w-full max-w-md"
        (click)="$event.stopPropagation()"
      >
        <div class="mb-4 flex items-center justify-between">
          <h3 class="text-lg font-semibold text-text">{{ title }}</h3>
          <button
            type="button"
            (click)="close()"
            aria-label="Close"
            class="inline-flex h-8 w-8 items-center justify-center rounded-md text-text-muted hover:bg-hover-bg focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="h-4 w-4"
              aria-hidden="true"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>
        <ng-content></ng-content>
      </div>
    </div>
  `,
})
export class BaseModalComponent {
  @Input() title = '';

  @Output() closed = new EventEmitter<void>();

  close(): void {
    this.closed.emit();
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.close();
  }
}
