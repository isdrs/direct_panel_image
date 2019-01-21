import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { EnterPhoneComponent } from './enter-phone/enter-phone.component';
import { EnterCodeComponent } from './enter-code/enter-code.component';
import { SocialMediasComponent } from './social-medias/social-medias.component';
import { TutorialVideoComponent } from './tutorial-video/tutorial-video.component';
import { WelcomeMessageSetComponent } from './welcome-message-set/welcome-message-set.component';
import { SurveyMessageSetComponent } from './survey-message-set/survey-message-set.component';
import { LoyaltyMessageSetComponent } from './loyalty-message-set/loyalty-message-set.component';
import { NewPassPageComponent } from './new-pass-page/new-pass-page.component';
import { DeviceInfoComponent } from './device-info/device-info.component';
import { GroupsComponent } from './dashboard-page/groups/groups.component';
import { from } from 'rxjs';

const routes: Routes = [
  { path: '', redirectTo: 'login-page', pathMatch: 'full' },
  { path: 'dashboard-page', component: DashboardPageComponent},
  { path: 'register-page', component: RegisterPageComponent},
  {
    path: 'login-page',
    component: LoginPageComponent,
    children: [
      {path: 'groups', component: GroupsComponent}
    ]
  },
  { path: 'enter-phone', component: EnterPhoneComponent},
  { path: 'enter-code', component: EnterCodeComponent},
  { path: 'social-medias', component: SocialMediasComponent},
  { path: 'tutorial-video', component: TutorialVideoComponent},
  { path: 'welcome-message-set', component: WelcomeMessageSetComponent},
  { path: 'survey-message-set', component: SurveyMessageSetComponent},
  { path: 'loyalty-message-set', component: LoyaltyMessageSetComponent},
  { path: 'new-pass-page', component: NewPassPageComponent},
  { path: 'device-info', component: DeviceInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  LoginPageComponent,
  RegisterPageComponent,
  DashboardPageComponent,
  EnterPhoneComponent,
  EnterCodeComponent,
  SocialMediasComponent,
  TutorialVideoComponent,
  WelcomeMessageSetComponent,
  SurveyMessageSetComponent,
  LoyaltyMessageSetComponent,
  NewPassPageComponent,
  DeviceInfoComponent,
  GroupsComponent
]