import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Job } from '../interfaces/job.interface';

@Injectable({
  providedIn: 'root'
})
export class JobsService {
  private apiUrl = '/jobs';
  constructor(private http: HttpClient) { }

  getJobs(): Observable<Job[]> {
    return this.http.get<Job[]>(this.apiUrl);
  }

  getJobById(id: number): Observable<Job> {
    return this.http.get<Job>(`${this.apiUrl}/${id}`);
  }

  getFavoriteJobsFromLocalStorage(): Job[] {
    const favJobs = localStorage.getItem('favoriteJobs');
    return favJobs ? JSON.parse(favJobs) : [];
  }
}
