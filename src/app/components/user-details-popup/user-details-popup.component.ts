import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-user-details-popup',
    templateUrl: './user-details-popup.component.html'
})
export class UserDetailsPopupComponent implements OnInit {
    @Input() userDetails: any;
    constructor(public activeModal: NgbActiveModal) { }
    ngOnInit(): void {}

    closePopup() {
        this.activeModal.close();
    }
}