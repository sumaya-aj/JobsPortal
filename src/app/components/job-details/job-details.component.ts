import { Component, Input } from '@angular/core';
import { JobsService } from '../../services/jobs.service';
import { Job } from '../../interfaces/job.interface';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-job-details',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './job-details.component.html',
  styleUrl: './job-details.component.css'
})
export class JobDetailsComponent {
  job!: Job;

  constructor(private jobsService: JobsService) { }
  
  @Input()
  set id(jobId: number) {
    this.jobsService.getJobById(jobId).subscribe(job => {
      this.job = job;
    });
  }
}
