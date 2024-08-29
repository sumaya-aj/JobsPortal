import { Routes } from '@angular/router';
import { JobsComponent } from './components/jobs/jobs.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { JobDetailsComponent } from './components/job-details/job-details.component';

export const routes: Routes = [
    { path: 'jobs', component: JobsComponent },
    { path: 'job/:id', component: JobDetailsComponent },
    { path: 'favoriteJobs', component: FavoritesComponent },
    { path: '', redirectTo: '/jobs', pathMatch: 'full' },
    { path: '**', redirectTo: '/jobs' }
];
