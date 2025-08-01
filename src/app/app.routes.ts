import { Routes } from '@angular/router';
import {FaceSnapListComponent} from './face-snap-list/face-snap-list.component';
import {LandingPageComponent} from './pages/landing-page/landing-page.component';
import {SingleFaceSnapComponent} from './pages/single-face-snap/single-face-snap.component';

export const routes: Routes = [
  {path: 'facesnaps', component: FaceSnapListComponent},
  {path: '', component: LandingPageComponent},
  {path: 'facesnaps/:id', component: SingleFaceSnapComponent}
];
