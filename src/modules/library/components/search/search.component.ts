import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/modules/services/data.service';
import { debounceTime, fromEvent, map, switchMap, distinctUntilChanged, concatAll, tap, catchError, EMPTY, filter } from 'rxjs';
import {MatCardModule} from '@angular/material/card';
interface SearchResult  {
  docs: any;
}
interface Book {
  title: string;
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  providers: [DataService],
})
export class SearchComponent implements OnInit {
  protected bookSubscribeWindow: any; 
  constructor(
    
    private dataService: DataService,
  ) { }

  ngOnInit(): void {

    const queryField = document.getElementById('search-book') as HTMLInputElement;
    this.bookSubscribeWindow= document.querySelector('.screen') as HTMLDivElement;
    //const DESC_URL = "https://openlibrary.org/works/";
    // const url = `${DESC_URL}${id}.json`;
    // <img src="http://covers.openlibrary.org/b/id/${item.cover_i}-M.jpg">`

    
    let countResult: number = 0;

    const searchStream = fromEvent(queryField, 'input')
      .pipe(
        map(e => (<HTMLInputElement>e.target).value),
        debounceTime(500),
        distinctUntilChanged(),
        tap(() => this.bookSubscribeWindow.innerHTML = ''),
        filter(v => v !== ''),
        switchMap(v => this.dataService.httpRequest(v).pipe(
          catchError(err => EMPTY),
        )),
        map(res  => (<SearchResult>res).docs),
        concatAll()
      );

    searchStream.subscribe((result) => {
    console.log(result);

      this.outputResults(result)
    });
  }


  public outputResults(results: any): void {
   
    const html: any = `
    <div class="card" style="max-width: 250px;">
      <div class="card-image">
        <img src="http://covers.openlibrary.org/b/id/${results.cover_i}-M.jpg" />
      </div>
    <div class="card-title">${results.title}</div>
    <div>${results.author_name}</div>  
  </div>
          `;

   this.bookSubscribeWindow.insertAdjacentHTML('beforeend', html);

  }

}
