import { Component } from "@angular/core";

@Component({
  selector:'app-user',
  templateUrl:'./user.component.html',
//  template:`
//  <p> From User template </p>
//  <h1> From User Component </h1>
//  <h2> From User Component </h2>
//  `
styleUrls:['./user.component.css'] // میشه چندتا فایل داشت
,styles:[` //اگه دستورات کم بود میشه اینجانوشت
p{
  color:red;
}`]

})

export class UserComponent{
  username:string='';
  password:string='';
  retypePassword:string='';
  isPasswordmatch:boolean=false;


  public onUsernameInputChanged(e:Event)
  {
    this.username=(<HTMLInputElement>e.target).value;
  }
  public onPasswordInputChanged(e:Event)
  {
    this.password=(<HTMLInputElement>e.target).value;
  }
  public onRetypeInputChanged(e:Event)
  {
    this.retypePassword=(<HTMLInputElement>e.target).value;
    // if(this.password!==this.RetypePassword)
    // {
    //   this.isPasswordmatch=false;
    // }
    // else{
    //   this.isPasswordmatch=true;
    // }
    // به جای کد بالا بهتر است کد زیر را بنویسیم

    this.isPasswordmatch=this.password !==this.retypePassword ? false:true;
  }

}
