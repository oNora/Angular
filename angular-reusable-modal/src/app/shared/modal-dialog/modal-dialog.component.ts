import { Component, OnInit, Output, EventEmitter, Input, Renderer, Renderer2 } from '@angular/core';
import { ModalDialogService } from './moda-dialog.service';

@Component({
  selector: 'rm-modal-dialog',
  templateUrl: './modal-dialog.component.html',
  styleUrls: ['./modal-dialog.component.css']
})
export class ModalDialogComponent implements OnInit {

  @Input() customClass: string;
  @Output() triggerCloseModal = new EventEmitter<boolean>();
  constructor(
    private renderer: Renderer2,
    private modalDialogService: ModalDialogService
  ) { }

  ngOnInit() {
  }

  closeModal(modalName) {
    this.modalDialogService.closeModal(modalName);
  }

}
