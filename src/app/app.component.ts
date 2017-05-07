import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  suspects = [{type: 'suspect', name: 'some d00d', description: 'Last seen wearing a HeH8Me XFL jersey'}];
  
  onSuspectAdded(suspectData: {suspectName: string, suspectDescription: string}){
  
  this.suspects.push({
  type: 'suspect',
  name: suspectData.suspectName,
  description: suspectData.suspectDescription
  });
  }
  
  onDescriptionAdded(descriptionData: {suspectName: string, suspectDescription: string}){
  
  this.suspects.push({
  type: 'description',
  name: descriptionData.suspectName,
  description: descriptionData.suspectDescription
  });
  }
}
