import {
    Inject,
    Injectable,
    Injector,
} from '@angular/core';
import { Observable } from "rxjs";
import {
    HttpClient,
    HttpParams,
    HttpErrorResponse,
} from '@angular/common/http';

export type RestMethodType = 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE';
export interface dd {

}

interface IRegisteredMethod {
    flow?: Observable<IData>;
    type?: RestMethodType;
    //subject?: BehaviorSubject<IData>;
    // intervalSubscribe?: Subscription;
}

export interface IData<T = any> {
    status: 'success' | 'error';
    name: string;
    system: string;
    code?: number | string;
    errors?: string[];
    source?: string;
    data?: T;
}

@Injectable()

export class DataService {

    protected BASE_URL = "https://openlibrary.org/search.json?q=";
    protected DESC_URL = "https://openlibrary.org/works/";

    // private socket: WebSocket;
    private socketUrl = '';
    private socketOpen: boolean = false;
    constructor(
        private http: HttpClient,

    ) {

    }


    httpRequest(query: string) {
        return this.http.request('GET', this.BASE_URL+query);
    }
}