import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Provider} from './provider';
import {Observable} from 'rxjs/Observable';
import {ProviderRequest} from './add-provider/provider-request';

@Injectable()
export class ProviderService {

    private providerUrl = 'http://localhost:8080/providers';

    constructor(private http: HttpClient) {
    }

    getAll(): Observable<Provider[]> {
        return this.http.get<Provider[]>(this.providerUrl);
    }

    getProviderDetail(id: number): Observable<Provider> {
        return this.http.get<Provider>(this.providerUrl + '/' + id);
    }

    saveProvider(providerRequest: ProviderRequest) {
        return this.http.post(this.providerUrl + '/add', providerRequest);
    }

    changeState(id: number): Observable<Provider> {
        return this.http.get<Provider>(this.providerUrl + '/changeState/' + id);
    }
}
