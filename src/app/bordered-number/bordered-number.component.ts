import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-bordered-number',
  styles: [
    `:host {
      display: inline-block;
      border: 2px solid;
      padding: 10px;
      font-size: 24px;
    }`,
  ],
  template: '{{number}}',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BorderedNumberComponent {
  @Input() number: number;
  @Input() @HostBinding('style.border-color') borderColor: string;
}
