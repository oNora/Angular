import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable()
export class ModalDialogService {
    private renderer: Renderer2;

    // not possible to use Renderer2 in service this is the workaround
    // https://stackoverflow.com/questions/44989666/angular-4-service-no-provider-for-renderer2?rq=1
    constructor(
        private rendererFactory: RendererFactory2,
    ) {
        this.renderer = rendererFactory.createRenderer(null, null);
    }

    closeModal(modalName: string) {

        this.renderer.removeClass(document.body, 'modal-open');

        // hide modal dialog
        const modalElement = document.querySelector(`.${modalName}`);
        this.renderer.addClass(modalElement, '.modal-hidden');
        this.renderer.removeClass(modalElement, 'show');

        // hide modal overlay
        const overlayElement = document.querySelector(`.${modalName} .modal-backdrop`);
        this.renderer.removeClass(overlayElement, 'show');
        this.renderer.addClass(overlayElement, '.modal-backdrop-hidden');

        // set z-index
        const modalContentElement = document.querySelector(`.${modalName} .modal-content`);
        this.renderer.setStyle(modalContentElement, 'z-index', '1');
    }

    openModal(modalName: string) {

        this.renderer.addClass(document.body, 'modal-open');

        // hide modal dialog
        const modalElement = document.querySelector(`.${modalName}`);
        this.renderer.addClass(modalElement, 'show');
        this.renderer.removeClass(modalElement, '.modal-hidden');

        // show modal overlay
        const overlayElement = document.querySelector(`.${modalName} .modal-backdrop`);
        this.renderer.addClass(overlayElement, 'show');
        this.renderer.removeClass(overlayElement, '.modal-backdrop-hidden');


        // set z-index
        const modalContentElement = document.querySelector(`.${modalName} .modal-content`);
        this.renderer.setStyle(modalContentElement, 'z-index', '9999');
        this.renderer.setStyle(overlayElement, 'z-index', '-1');
    }

}
