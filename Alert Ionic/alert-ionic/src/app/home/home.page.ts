import { Component } from '@angular/core'; 
 import { AlertController } from '@ionic/angular'; 
 @Component({ 
  selector: 'app-home', 
  templateUrl: 'home.page.html', 
  styleUrls: ['home.page.scss'], 
 }) 
 export class HomePage { 
  constructor(public alertCtrl: AlertController) { }  
 async showAlert() { 
  const alert = await this.alertCtrl.create({ 
  header: 'Alert', 
  subHeader: 'Battery Alert', 
  message: 'Your battery about to die', 
  buttons: ['OK'] 
  }); 
  await alert.present(); 
  const result = await alert.onDidDismiss();  
  console.log(result); 
  } 
 }  