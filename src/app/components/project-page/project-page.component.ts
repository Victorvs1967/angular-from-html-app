import { Component, OnInit } from '@angular/core';

import { GetDataService } from 'src/app/services/get-data.service';
import { ActivatedRoute } from '@angular/router';
import { Page } from 'src/app/models/Page';

@Component({
  selector: 'vs-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.sass']
})
export class ProjectPageComponent implements OnInit {

  project?: Page;
  
  constructor(private dataServise: GetDataService, private route: ActivatedRoute) {
    this.route.params.subscribe(param => {
      this.dataServise.getProject(+param['id'])
        .then((project => this.project = project.page));
    });
  }

  ngOnInit(): void {
  }
}
