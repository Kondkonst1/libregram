import { Component, OnInit } from '@angular/core';
import { fromEvent, map, switchMap } from 'rxjs';
import { DataService } from 'src/modules/services/data.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
  providers: [DataService],
})
export class BookComponent implements OnInit {

  constructor(
    private dataService: DataService,
  ) { }

  ngOnInit(): void {

    const getButton = document.getElementById('get') as HTMLButtonElement;
    const bookSubscribeWindow = document.querySelector('.screen') as HTMLDivElement;

    fromEvent(getButton, 'click')
      .subscribe(() => {
        this.dataService.httpRequest()
        
        .subscribe((data) => {
          if (bookSubscribeWindow)
          bookSubscribeWindow.innerHTML = JSON.stringify(data)
        });
      })
  }
}
