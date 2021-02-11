import { Component } from '@angular/core'; 
 import { AlertController } from '@ionic/angular'; 
 @Component({ 
  selector: 'app-home', 
  templateUrl: 'home.page.html', 
  styleUrls: ['home.page.scss'], 
 }) 
 export class HomePage { 
  constructor(public alertCtrl: AlertController) { } 
  async showRadio() {  
  const alert = await this.alertCtrl.create({ 
  inputs: [ 
  { 
  name: 'radio 1', 
  type: 'radio', 
  label: 'Java', 
  value: 'Java', 
  }, 
  { 
  name: 'radio 2', 
  type: 'radio', 
  label: 'Python', 
  value: 'Python', 
  checked: true,
  }, 
  { 
  name: 'radio 3', 
  type: 'radio', 
  label: 'Android', 
  value: 'Android', 
  }, 
  { 
  name: 'radio 3', 
  type: 'radio', 
  label: 'AngularJs', 
  value: 'AngularJs', 
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
  }, 
  ] 
  }); 
  await alert.present(); 
  const result = await alert.onDidDismiss();  
  console.log(result); 
  } 
 } 
 