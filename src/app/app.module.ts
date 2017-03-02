import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HistoryPage } from '../pages/history/history';
import { HealthPage } from '../pages/health/health';
import { ApptsPage } from '../pages/appts/appts';
import { WelcomePage } from '../pages/welcome/welcome';
import { TabsPage } from '../pages/tabs/tabs';
import { PatientProfile } from '../providers/patient-profile';

@NgModule({
  declarations: [
    MyApp,
    HistoryPage,
    ApptsPage,
    WelcomePage,
    HealthPage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HistoryPage,
    HealthPage,
    ApptsPage,
    WelcomePage,
    TabsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},PatientProfile]
})
export class AppModule {}
