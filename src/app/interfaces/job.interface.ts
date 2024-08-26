import { JobType } from "../enums/job-type.enum";

export interface Job {
    id:          number;
    companyName: string;
    title:       string;
    companyLogo: string;
    reference:   string;
    location?:    string;
    industries?:  string[];
    types?:       JobType[];
    description?: string;
    publishDate?: Date;
}