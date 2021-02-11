import { Component } from '@angular/core'; 
 import { AlertController } from '@ionic/angular'; 
 @Component({ 
  selector: 'app-home', 
  templateUrl: 'home.page.html', 
  styleUrls: ['home.page.scss'], 
 })  
 export class HomePage { 
  constructor(public alertCtrl: AlertController) { } 
  async showCheckBoxAlert() { 
  const alert = await this.alertCtrl.create({ 
  header: 'Games', 
  message: 'Select your favourite game',
  inputs: [ 
  { 
  name: 'checkbox', 
  type: 'checkbox', 
  label: 'Hockey', 
  value: 'Hockey', 
  }, 
  { 
  name: 'checkbox', 
  type: 'checkbox', 
  label: 'Cricket',  
  value: 'Cricket',
  checked: true, 
  }, 
  { 
  name: 'checkbox', 
  type: 'checkbox', 
  label: 'Badminton', 
  value: 'Badminton',  
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
  await alert.present(); 
  const result = await alert.onDidDismiss();  
  console.log(result); 
  } 
 } 