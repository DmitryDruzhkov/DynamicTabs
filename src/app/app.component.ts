import { ChangeDetectionStrategy, Component } from '@angular/core';
import { tabs } from './shared/constants';
import { Tab } from './shared/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  public tabs: Tab[] = tabs;
}
