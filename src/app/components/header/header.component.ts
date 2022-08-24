import { Component, OnInit } from '@angular/core';
import { ScrollToService } from 'src/app/services/scroll-to.service';

@Component({
  selector: 'vs-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  constructor(private scrolling: ScrollToService) { }

  ngOnInit(): void {
  }

  scroll = (content: string) => this.scrolling.scrollTo(content);

}
