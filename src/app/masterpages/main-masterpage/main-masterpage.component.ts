import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'tm-main-masterpage',
  templateUrl: './main-masterpage.component.html',
  styleUrl: './main-masterpage.component.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainMasterpageComponent {

}
