import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { ModalDialogComponent } from './modal-dialog/modal-dialog.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
