import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { PatientProfile } from '../../providers/patient-profile'

/*
 Generated class for the Welcome page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html'
})
export class WelcomePage {

  constructor(public navCtrl: NavController, public profile: PatientProfile) {
    console.log(this.profile.loadProfile("123"));
  }

  mySlideOptions = {
    pager: true
  };

  ionViewDidLoad() {
    console.log('Hello Welcome Page');
  }

  goToHome(): void {
    this.navCtrl.setRoot(TabsPage);
  }

}
