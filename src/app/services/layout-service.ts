import { Injectable } from '@angular/core';
import { GridsterItem } from 'angular-gridster2';
import { BehaviorSubject } from 'rxjs';
import { Safe } from '../interfaces/safe';

@Injectable({
    providedIn: 'root'
})
export class LayoutService {
    private objectsToDisplay = new BehaviorSubject<Array<GridsterItem>>([]);
    currentObjectsToDisplay$ = this.objectsToDisplay.asObservable();
    constructor() { }

    setObjects(newObjectsToDisplay: Array<GridsterItem>) {
        this.objectsToDisplay.next(newObjectsToDisplay);
    }
}