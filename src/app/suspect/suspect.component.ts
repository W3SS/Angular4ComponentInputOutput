import {Component, OnInit, Input} from '@angular/core';

@Component({
selector: 'app-suspect',
templateUrl: './suspect.component.html',
styleUrls: ['./suspect.component.css']
})

export class SuspectComponent implements OnInit {
@Input('n') newSuspect: {type: string, name: string, description: string};

constructor(){ }

ngOnInit() { }


}



