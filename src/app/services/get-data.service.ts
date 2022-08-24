import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Project } from '../models/Project';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  dataLink: string= environment.filename;

  constructor() { }

  getProjects(): Promise<Project[]> {
    return fetch(this.dataLink)
      .then(data => data.json())
      .then((projects: Project[]) => [ ...projects ]);
  }

  getProject(id: number): Promise<Project> {
    return fetch(this.dataLink)
      .then(data => data.json())
      .then(projects => projects.find((project: Project) => project.id === id))
      .then(project => project);
  }

}
