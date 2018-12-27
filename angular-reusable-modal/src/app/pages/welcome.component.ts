import { Component, OnInit, ViewChild, ElementRef, Renderer } from '@angular/core';
import { ModalDialogService } from '../shared/modal-dialog/moda-dialog.service';

@Component({
    templateUrl: './welcome.component.html'
})
export class WelcomeComponent implements OnInit {
    pageTitle = 'Welcome';
    isModalDisplay = false;
    @ViewChild('modal1')
    modal1: ElementRef;
    constructor(
        private modalDialogService: ModalDialogService
    ) {

    }


    ngOnInit() {

    }

    onClose(modalName) {
        console.log('ima clik');
        this.isModalDisplay = false;

        this.modalDialogService.closeModal(modalName);

    }

    openModal(modalNAme) {
        console.log('modalNAme: ', modalNAme);
        this.isModalDisplay = true;
        this.modalDialogService.openModal(modalNAme);
    }
}
