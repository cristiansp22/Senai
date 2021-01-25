import { Component } from '@angular/core';


declare var google;
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page {
 
  constructor() {
   
  }

  ionViewWillEnter(){
    const senai = { lat: -22.703586, lng: -46.993531 };
    
    const map = new google.maps.Map(
      document.getElementById("map") as HTMLElement,
      {
        zoom: 18,
        center: senai,
        disableDefaultUI: false
      }
    );

    const marker = new google.maps.Marker({
      position: senai,
      map: map,

      title: 'Minha posição',

      animation: google.maps.Animation.DROP, 
 
      
    });    


    google.maps.event.addListener(marker, 'click', () => {
      console.log("Usuário clicou no marcador");
    })
  }


}