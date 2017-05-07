import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
selector: 'app-dispatch',
templateUrl: './dispatch.component.html',
styleUrls: ['./dispatch.component.css']
})

export class DispatchComponent implements OnInit {
@Output() suspectCreated = new EventEmitter<{suspectName: string, suspectDescription: string}>();
@Output() descriptionCreated =  new EventEmitter<{suspectName: string, suspectDescription: string}>();

newSuspectName = '';
newSuspectDescription = '';

constructor(){}
ngOnInit() {}



onAddSuspect(){
this.suspectCreated.emit({
suspectName: this.newSuspectName,
suspectDescription: this.newSuspectDescription
});
}

onAddDescription(){
this.descriptionCreated.emit({
suspectName: this.newSuspectName,
suspectDescription: this.newSuspectDescription
});
}
  
  
  
  
  
}