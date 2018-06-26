import { Subject, of, Observable, from, BehaviorSubject } from 'rxjs';
import { map, flatMap, filter, combineLatest } from 'rxjs/operators';

import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
})
export class RxjsApiService {

    connected = new BehaviorSubject(true);
    msg = [
        {
            packet: {},
            payload: new Uint8Array(127),
            topic: `some/url/1`
        },
        {
            packet: {},
            payload: new Uint8Array(127),
            topic: `some/url/2`
        },
        {
            packet: {},
            payload: new Uint8Array(127),
            topic: `some/url/3`
        }
    ];
    constructor() {
        this.testOne();
    }

    someMethod() {
        return true;
    }

    methodReturnMsg() {
        return from(this.msg);
    }

    testOne() {
        this.connected.pipe(
            map(() => this.someMethod()),
            flatMap(() => this.methodReturnMsg()),
            filter((message) => message.topic === 'some/url/2')
        ).subscribe(
            (r) => console.log('testOne result', r)
        );
    }

    testTwo(): Observable<any> {
        return this.connected.pipe(
            map(() => this.someMethod()),
            combineLatest(() => {
                of(true);
                of(true);
            }),
            flatMap(() => this.methodReturnMsg()),
            filter((message) => {
                return message.topic === 'some/url/2' || message.topic === 'some/url/3';
            }),
            map((newMsg) => {
                if (newMsg.topic === `some/url/2`) {
                    return { topic: 'url 2' };
                } else {
                    return { topic: 'url 3' };
                }
            })
        );
    }

}
