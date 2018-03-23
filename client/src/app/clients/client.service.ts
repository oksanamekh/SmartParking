import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Client} from '../model/view/client';
import {ClientsProviderRequest} from './clients-provider-request';
import {Role} from './role';
import {ROLES} from './mock-roles';
import {Provider} from '../model/view/provider';
import {environment} from '../../environments/environment';

@Injectable()
export class ClientService {

    private clientsUrl = environment.apiUrl + '/clients';

    constructor(private http: HttpClient) {
    }

    getClients(): Observable<Client[]> {
        return this.http.get<Client[]>(this.clientsUrl);
    }

    getLimitNumberOfClients(): Observable<Client[]> {
        return this.http.get<Client[]>(this.clientsUrl + '/clientslimit');
    }

    getClientDetail(id: number): Observable<Client> {
        return this.http.get<Client>(this.clientsUrl + '/' + id);
    }

    getClientDetailToEdit(id: number): Observable<Client> {
        return this.http.get<Client>(this.clientsUrl + '/' + id);
    }

    updateClient(id: number, client: Client) {
        return this.http.post(this.clientsUrl + '/update/' + id, client);
    }

    getProviderByClientId(id: number): Observable<Provider> {
        return this.http.get<Provider>(this.clientsUrl + '/findprovider/' + id);
    }

    findClientsByAnyMatch(input: string): Observable<Client[]> {
        return this.http.get<Client[]>(this.clientsUrl + '/findclients/' + input);
    }

    getProviders(): Observable<Provider[]> {
        return this.http.get<Provider[]>(this.clientsUrl + '/getproviders');
    }


    getRoles(): Role[] {
        return ROLES;
    }

}
