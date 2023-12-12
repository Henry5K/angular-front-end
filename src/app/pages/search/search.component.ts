import { Component, OnInit } from '@angular/core';
import { GithubService } from '../../core/services/github.service';

@Component({
    selector: 'search-component',
    templateUrl: './search.component.html'
})

export class GithubSearchComponent implements OnInit {
    searchTerm: string = '';
    searchResults: any[] = [];
    savedUsers: any[] = [];
    currentPage: number = 1;
    exactSearchTerm: string | null = null;

    constructor(private githubService: GithubService) { }

    ngOnInit() {
        this.loadSavedUsers();
    }

    searchUsers() {
        this.githubService.searchUsers(this.searchTerm, this.currentPage).subscribe(
            (results: any) => {
                this.searchResults = results.items.map((user: any) => ({ ...user, isSaved: this.isSaved(user) }));
                this.exactSearchTerm = this.searchTerm;
            },
            error => {
                console.error('Error fetching GitHub users:', error);
            }
        );
    }

    saveUser(user: any) {
        if(!this.isSaved(user)) {
            this.savedUsers.push(user);
            user.isSaved = true;
            localStorage.setItem('savedUsers', JSON.stringify(this.savedUsers));
        } else {
            console.log(`User ${user.login} is already saved.`);
        }
    }

    private isSaved(user: any): boolean {
        return this.savedUsers.some(savedUser => savedUser.login === user.login);
    }

    private loadSavedUsers() {
        const savedUsersFromStorage = localStorage.getItem('savedUsers');
        if(savedUsersFromStorage) {
            this.savedUsers = JSON.parse(savedUsersFromStorage);
        }
    }
}