import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

a:any;
d:any;
  constructor(private http:HttpClient) { }
  title = 'AppleTV';
  remove(i){
    this.a.splice(i,1)
   }
   addtoList(j){
     if(this.a.some(i =>i.title ==  j.title)){
       alert("Channel exists in list");
       //console.log("Channel exists in list");
     }else{
     this.a.push(j);
        }   return this.a;
   }
    
     
   ngOnInit() {
      this.http.get("/assets/mylist.json").subscribe(c=> this.a =c)
      this.http.get("/assets/recomndations.json").subscribe(y=> this.d =y)
     console.log(this.a)
 
   }
 
}
