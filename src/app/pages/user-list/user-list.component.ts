import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { GithubService } from '../../core/services/github.service';
import { UserDetailsPopupComponent } from '../../components/user-details-popup/user-details-popup.component';

@Component({
    selector: 'app-users-list',
    templateUrl: './user-list.component.html',
})

export class UsersListComponent implements OnInit {
    savedUsers: any[] = [];
    darkThemeModalOptions: NgbModalOptions = { windowClass: 'dark-modal' };

    constructor(private githubService: GithubService, private modalService: NgbModal) { }

    ngOnInit() {
        this.loadSavedUsers();
    }

    loadSavedUsers() {
        const savedUsersFromStorage = localStorage.getItem('savedUsers');
        if (savedUsersFromStorage) {
            this.savedUsers = JSON.parse(savedUsersFromStorage);
        }
    }

    getUserDetails(username: string) {
        this.githubService.getUserDetails(username).subscribe(
            (userDetails: any) => {
                this.openUserDetailsPopup(userDetails);
            },
            error => {
                console.error('Erro ao buscar detalhes do usuário:', error);
            }
        );
    }

    openUserDetailsPopup(userDetails: any) {
        this.modalService.open(UserDetailsPopupComponent, {
            ...this.darkThemeModalOptions,
            size: 'lg'
        }).componentInstance.userDetails = userDetails;
    }
}
