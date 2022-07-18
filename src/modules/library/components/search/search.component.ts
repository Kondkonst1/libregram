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

    const searchStream = fromEvent(queryField, 'input')         //при каждом вводе символа в инпут
      .pipe(
        map(e => (<HTMLInputElement>e.target).value),             //сделаем массив из значений
        debounceTime(500),                                      // Но делаем это не чаще чем раз в 500мс
        distinctUntilChanged(),                               //если ввели harry  потом ввели harry1 и сразу удалили 1,  второй раз искать не будем
        tap(() => this.bookSubscribeWindow.innerHTML = ''),     //в tap  пишется какая-нибудь логика вне потока, тут при новом поиске в окне результатов удаляются старые карточки
        filter(v => v !== ''),                                      //не обрабатывать пустой запрос
        switchMap(v => this.dataService.httpRequest(v).pipe(      //отправляем запрос - это новый поток
          catchError(err => EMPTY),                                 //обработчик ошибки
        )),
        map(res  => (<SearchResult>res).docs),                      //создаем массив из полученных данных
        concatAll()                                             // и разделяем его во времени, попробуй закомментить эту строку и глянь в консоль
      );

    searchStream.subscribe((result) => {                      // и когда это все произошлоооо...
    console.log(result);

      this.outputResults(result)                                //кидаем объект с книжкой в функцию вывода
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
