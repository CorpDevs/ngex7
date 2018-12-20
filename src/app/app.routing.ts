import { Routes, RouterModule } from '@angular/router';
import { HomeComponent , LoginComponent , RegisterComponent ,
  ExamplesComponent , Example1Component} from './index';
import { AuthGuard } from './_guards';

const appRoutes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'examples', component: ExamplesComponent },
  { path: 'example1', component: Example1Component },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
