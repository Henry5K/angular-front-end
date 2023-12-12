import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class GithubService {
    private apiUrl = 'https://api.github.com';

    constructor(private http: HttpClient) { }

    searchUsers(term: string, page: number): Observable<any> {
        const url = `${this.apiUrl}/search/users?q=${term}&page=${page}`;
        return this.http.get(url).pipe(
            catchError(this.handleError)
        );
    }

    getUserDetails(username: string): Observable<any> {
        const url = `${this.apiUrl}/users/${username}`;
        return this.http.get(url).pipe(
            catchError(this.handleError)
        );
    }

    private handleError(error: any) {
        let errorMessage = 'Erro desconhecido.';
        if (error.error instanceof ErrorEvent) {
            errorMessage = `Erro: ${error.error.message}`;
        } else if (error.status) {
            errorMessage = `Erro na requisição: ${error.status}, ${error.error.message || error.statusText}`;
        }
        console.error(errorMessage);
        return throwError(errorMessage);
    }
}
