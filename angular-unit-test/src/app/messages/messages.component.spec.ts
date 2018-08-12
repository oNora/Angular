import { MessageService } from "../message.service";

describe('MessageService', () => {
    let service: MessageService

    beforeEach(() => {
        // service = new MessageService();
    })


    it('should have no message to start', () => {
        service = new MessageService();
        expect(service.messages.length).toBe(0);
    })

    it('should have add message ', () => {
        service = new MessageService();
        expect(service.messages.length).toBe(0);

        service.add('message1');

        expect(service.messages.length).toBe(1);
    })

    it('should have remove message ', () => {
        service = new MessageService();
        expect(service.messages.length).toBe(0);
        service.add('message1');

        service.clear();

        expect(service.messages.length).toBe(0);
    })
})