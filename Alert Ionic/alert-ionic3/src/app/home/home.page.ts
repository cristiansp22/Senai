import { Component } from '@angular/core'; 
 import { AlertController } from '@ionic/angular'; 
 @Component({ 
  selector: 'app-home', 
  templateUrl: 'home.page.html', 
  styleUrls: ['home.page.scss'], 
 }) 
 export class HomePage { 
  constructor(public alertCtrl: AlertController) { } 
  async showPrompt() {  
  const prompt = await this.alertCtrl.create({ 
  header: 'Courses', 
  message: 'Enter the Course name', 
  inputs: [ 
  { 
  name: 'title1', 
  type: 'text', 
  placeholder: 'Course name' 
  }, 
  { 
  name: 'title2', 
  type: 'text', 
  placeholder: 'Course name' 
  }, 
  ], 
  buttons: [  
  { 
  text: 'Save', 
  handler: data => { 
  console.log('Save clicked'); 
  } 
  }, 
  { 
  text: 'Cancel',  
  handler: data => { 
  console.log('Cancel clicked'); 
  } 
  } 
  ] 
  }); 
  await prompt.present(); 
  const result = await prompt.onDidDismiss();  
  console.log(result); 
  } 
 }  