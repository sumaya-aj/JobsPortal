import { Routes } from '@angular/router';
import { JobsComponent } from './components/jobs/jobs.component';
import { FavoritesComponent } from './components/favorites/favorites.component';

export const routes: Routes = [
    { path: 'jobs', component: JobsComponent },
    { path: 'favorites', component: FavoritesComponent },
    { path: '', redirectTo: '/jobs', pathMatch: 'full' },
    { path: '**', redirectTo: '/jobs' }
];
