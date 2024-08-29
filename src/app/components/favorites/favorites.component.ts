import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Job } from '../../interfaces/job.interface';
import { JobsService } from '../../services/jobs.service';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css'
})
export class FavoritesComponent {
  favoriteJobs: Job[] = [];

  constructor(private jobsService: JobsService) { }
  
  ngOnInit() {
    this.favoriteJobs = this.jobsService.getFavoriteJobsFromLocalStorage();
  }

}
