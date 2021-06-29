import { Component, OnInit,ChangeDetectorRef } from '@angular/core';
import {  HttpHeaders, HttpErrorResponse,HttpClient } from '@angular/common/http';
import { ModalController,AlertController ,NavController,ToastController} from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  rootapi = "https://admin.connectportal.online/webapi/api/";
  dataa:any;
  eaddres:any;
  pass:any;
  loginForm: FormGroup;
  reactiveSubmitted: boolean = false;
  showEye: boolean = true;
  responseError: string = '';
  errorMessages = {
    email: {
      required: 'Email address required',
      email: 'Invalid email address'
    },
    password: {
      required: 'Password required'
    },
  };
  userobj: string;
  player: any;

  constructor(public http: HttpClient,
    public modalController: ModalController,

    public alertController:AlertController,
    public toastController: ToastController,
    private changeRef: ChangeDetectorRef,
    private route: ActivatedRoute, 
    
    private router: Router,
    private formBuilder: FormBuilder,
    private navCtrl:NavController) {
      this.loginForm = this.formBuilder.group({
        email: ['' ,Validators.compose([Validators.email, Validators.required])],
        password: ['',Validators.required],
      });
     }

    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization' : '5f3b566e-e457-42ec-94c2-ffc72c738562'
      })
    }
    ngOnInit() {
      // if(localStorage.getItem("userid") !== null){
       
      //   this.navCtrl.navigateForward('/tabs/tab1');
      // }
    }

  home(){
    this.http.get('https://randomuser.me/api/?results=10').subscribe(data=>{
//process the json data
console.log(data)
this.navCtrl.navigateForward('/tabs')
})
  //   this.reactiveSubmitted = true;
  //   let form = this.loginForm;
  //   this.player=localStorage.getItem('playerid');
  

  // this.dataa= {
  //   EmailAddress:form.value.email,
  //   Password:form.value.password,
  //   UserType:1,
  //   PlayerID:this.player
  // };
  
  // console.log(this.dataa);
  // this.http.post(this.rootapi+'login',this.dataa, this.httpOptions).subscribe( async (data:any) => {
  //  console.log(data);
  // var mydata= data;
  // if(mydata.ID > 0){
    
  //   localStorage.setItem("userid",mydata.ID);
  //   localStorage.setItem("profilepic",mydata.ProfilePictureURL);
  //   localStorage.setItem("firstname",mydata.Firstname);
  //   localStorage.setItem("CustomerId",mydata.ID);   
  //     this.eaddres="";
  //     this.pass ="";
    
  //     this.navCtrl.navigateRoot("/tabs/tab1");
      
    
  // }
  // else if(data.Message =="Login Disabled. Please Contact Support For Assistance."){
  //   let alert =   await this.alertController.create({
  //     header: 'Login',
  //     message: 'Login Disabled. Please Contact Support For Assistance.',
  //     buttons: ['Dismiss']
  //   });
  //   await alert.present();
  // } 
  // });
   
  }

  register(){
    this.navCtrl.navigateForward('/register');
  }
  toggleShowPassword() {
    this.showEye = !this.showEye;
    this.changeRef.detectChanges();
  }
  forget(){
    this.navCtrl.navigateForward('/forget');
  }

  
  
  
}
