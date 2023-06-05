import { AfterViewInit, Component, OnInit } from '@angular/core';
import { SampleserviceService } from '../services/sampleservice.service';
import { AppRoutingModule } from '../app-routing.module';
import { Router } from '@angular/router';
import { CustomerloginComponent } from '../customerlogin/customerlogin.component';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.css']
})
export class ContentsComponent implements OnInit{

  constructor(private g:SampleserviceService,private k1:Router){}

  public k:any;
  public v:any;
  kk:String;
  l1:number;
  images:Array<String>=["https://tse3.mm.bing.net/th?id=OIP.YiiL-YJsOvIGGnVcAypANQHaEK&pid=Api&P=0&h=180",
"https://teqip.in/wp-content/uploads/2022/10/Ponniyin-Selvan.jpg",
"https://1.bp.blogspot.com/-jdrpSqrPqVc/Xk6L816FkNI/AAAAAAAAA9I/zr97OTiCJ_cvfsX3FXHucQhp6cWVA1bqgCLcBGAsYHQ/s1600/kgf-2-movie.jpg"];

  

  ngOnInit(): void {

   
    

    this.l1=0;
    this.kk="https://tse3.mm.bing.net/th?id=OIP.YiiL-YJsOvIGGnVcAypANQHaEK&pid=Api&P=0&h=180";

     this.g.getproductsdetails().subscribe(m=>{
      if(m!=null){
        this.k=m;
        this.v=m;
      }
     }
     );
  }
  sendtologin(){
    // this.k1.navigate(['adminlogin']);
    this.k1.navigate(['customerlogin']);
  }
  sample(u){
    this.k=this.v;
    let gf:string=u.value.fooditem;
    console.log(gf);
    this.k=this.k.filter(function(b){
      return b.productname===gf;
      // return (b.category==="breakfast") && (b.cost>=100);
      // return b.cost<=100;
    }).map(function(c){
      return c;
    })
  }

  shownext():void{
    console.log("next");
    this.kk=this.images[this.l1];
    this.l1=this.l1+1;
    if(this.l1===this.images.length){
      this.l1=0;
    }
  }

}
