import { Component } from '@angular/core';

import { HistoryPage } from '../history/history';
import { HealthPage } from '../health/health';
import { ApptsPage } from '../appts/appts';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HistoryPage;
  tab2Root: any = HealthPage;
  tab3Root: any = ApptsPage;

  constructor() {

  }
}
