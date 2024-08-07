import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

type Variant = 'primary' | 'secondary' | 'tertiary'
type Theme = 'blue' | 'violet';

@Component({
  selector: 'ab-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  /**
   * Texto do botão.
   */
  @Input() text = '';
  @Input() variant: Variant = 'primary';
  @Input() theme: Theme = 'blue';
  @Input() disabled = false;

  getClasses(): string {
    return `${this.variant} ${this.theme}`;
  }
}
