import { NgModule } from '@angular/core';
import { AuthGuard } from './services/auth.guard';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { DialogComponent } from './dialog/dialog.component';
import { ProfileComponent } from './profile/profile.component';
import { RedirectComponent } from './redirect/redirect.component';
import { DropDownComponent } from './drop-down/drop-down.component';
import { ErrorRoutingModule } from './error-routing/error-routing.module';
import { CategoryChartComponent } from './category-chart/category-chart.component';
import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'error', component: UncaughtErrorComponent },
  { path: 'home', component: HomeComponent, data: { text: 'Home' } },
  { path: 'dialog', component: DialogComponent, data: { text: 'Dialog' } },
  { path: 'drop-down', component: DropDownComponent, data: { text: 'Drop Down' } },
  { path: 'category-chart', component: CategoryChartComponent, data: { text: 'Category Chart' } },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'redirect.html', component: RedirectComponent, data: { provider: 'Google' } },
  { path: 'redirect-google', component: RedirectComponent, data: { provider: 'Google' } },
  { path: 'redirect-facebook', component: RedirectComponent, data: { provider: 'Facebook' } },
  { path: '**', component: PageNotFoundComponent } // must always be last
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ErrorRoutingModule],
  exports: [RouterModule, ErrorRoutingModule]
})
export class AppRoutingModule {
}
