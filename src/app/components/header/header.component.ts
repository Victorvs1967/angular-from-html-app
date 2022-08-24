import { Component, OnInit } from '@angular/core';
import { UIService } from 'src/app/services/ui.service';

@Component({
  selector: 'vs-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  constructor(private scrolling: UIService) { }

  ngOnInit(): void {
  }

  scroll = (content: string) => this.scrolling.scrollTo(content);

}
