import { Component, OnInit } from '@angular/core';

import { Project } from 'src/app/models/Project';
import { GetDataService } from 'src/app/services/get-data.service';

@Component({
  selector: 'vs-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.sass']
})
export class PortfolioComponent implements OnInit {

  projects?: Project[];
  
  constructor(private dataService: GetDataService) {
    this.dataService.getProjects()
      .then(projects => this.projects = [ ...projects ]);
  }

  ngOnInit(): void {
  }

}
