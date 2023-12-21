import { FormsModule } from '@angular/forms';
import { Component } from "@angular/core";
import { HtmlAstPath } from '@angular/compiler';
@Component(
  {
    // selector:'app-users',
    // selector:'{app-users}',
         selector:'.app-users',

    templateUrl:'./users.component.html',
    styleUrls:['./users.component.css']
    })
    export class UsersComponent
    {
      name:string="Morteza";
      // isShow:boolean=true;
      // isset=false;


      // username:string=" ";
      // pass:string=" ";
      // repas:string=" ";
      // text:string=" ";
      public onInputChanged(e:Event)
      {
        console.log(e);
        this.name=(<HTMLInputElement>e.target).value;
            }
            // public Form(u:Event,p:Event,r:Event)
            // {
            //   console.log(u,p,r);
            //   this.isShow=false;
            //   this.username=(<HTMLInputElement>u.target).value;
            //   this.text=(<HTMLInputElement>u.target).value;
            //   this.pass=(<HTMLInputElement>p.target).value;
            //   this.repas(<HTMLInputElement>r.target).value;
            //   this.isset=true;


            // }
    }

