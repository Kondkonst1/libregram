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

    // private socket: WebSocket;
    private socketUrl = '';
    private socketOpen: boolean = false;
    constructor(
        private http: HttpClient,

    ) {

    }


    httpRequest() {
        return this.http.request('GET', 'http://localhost:3000/comments');
    }
}