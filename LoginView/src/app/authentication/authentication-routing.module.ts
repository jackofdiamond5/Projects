
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './services/auth.guard';
import { ProfileComponent } from './profile/profile.component';
import { RedirectComponent } from './redirect/redirect.component';
import { ExternalAuthProvider } from './services/igx-auth.service';

const authRoutes: Routes = [

    { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },

  { path: 'redirect-google', component: RedirectComponent, data: { provider: ExternalAuthProvider.Google } },
  { path: 'redirect-facebook', component: RedirectComponent, data: { provider: ExternalAuthProvider.Facebook } },
  { path: 'redirect-microsoft', component: RedirectComponent, data: { provider: ExternalAuthProvider.Microsoft } }
];

@NgModule({
export class AuthenticationRoutingModule {}

