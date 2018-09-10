import { NgModule } from '@angular/core';
import { AuthGuard } from './services/auth.guard';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { RedirectComponent } from './redirect/redirect.component';
import { ErrorRoutingModule } from './error-routing/error-routing.module';
import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';
import { ExternalAuthProvider } from './services/igx-auth.service';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'error', component: UncaughtErrorComponent },
  { path: 'home', component: HomeComponent, data: { text: 'Home' } },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  // TODO: move to module
  { path: 'redirect-google', component: RedirectComponent, data: { provider: ExternalAuthProvider.Google } },
  { path: 'redirect-facebook', component: RedirectComponent, data: { provider: ExternalAuthProvider.Facebook } },
  { path: 'redirect-microsoft', component: RedirectComponent, data: { provider: ExternalAuthProvider.Microsoft } },
  { path: '**', component: PageNotFoundComponent } // must always be last
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ErrorRoutingModule],
  exports: [RouterModule, ErrorRoutingModule]
})
export class AppRoutingModule {
}
