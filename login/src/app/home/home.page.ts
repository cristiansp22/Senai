import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  nome:String;
  senha:String

showPassword = false;
passwordToggleIcon = 'eye';


  constructor(public httpClient: HttpClient,
    public alertCtrl: AlertController) {}

  togglePassword() {
      this.showPassword = !this.showPassword;
  
      if(this.passwordToggleIcon == 'eye') {
          this.passwordToggleIcon = 'eye-off';
      
      } else {
        this.passwordToggleIcon = 'eye';
      }
  }

  sendPostRequest() {
    
    if(this.nome === undefined || this.nome.length == 0){ 
      this.showAlert("Digite seu nome!");
    }else{
           if(this.senha === undefined || this.senha.length == 0){ 
               this.showAlert("Digite uma senha!");
            }
        
        let postData = JSON.stringify({
          "nome": this.nome,
          "senha": this.senha,
          "verbo": "POST"
      });

      console.log(postData);

      this.httpClient.post("https://projetorrw.000webhostapp.com/src/controll/routes/route.usuarios.php", postData)
      .subscribe(data=> {
        
     
        let jsonData: string =  JSON.stringify(data);
        let jsonObject = JSON.parse(jsonData);
        let status = jsonObject.status;

        let saidaMsg;

        if(status == "C001"){
          saidaMsg = "Cadastrado com sucesso!";
          this.nome = "";
        }else if(status == "C002"){
          saidaMsg = "Falha na Operação!";
        }

        this.showAlert(saidaMsg);
        console.log(data);
      }, error => {
        console.log(error);
      });
      
                    } 
                  }


  async showAlert(mensagem) { 
      const alert = await this.alertCtrl.create({ 
      header: 'Aviso', 
      subHeader: '', 
      message: mensagem, 
      buttons: ['OK'] 
      }); 
      await alert.present(); 
      const result = await alert.onDidDismiss();  
      console.log(result); 
    } 
    
    //const mensagem = location.search.slice(1);
    //if (mensagem.split("=")[0] == "erro"){
    //  msg.innerHTML = decodeURIComponent(mensagem.split("=")[1]);
    //setTimeout(() => { window.location.href = "?" }, 3000);
    //}


}