import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharadataService } from '../sharadata.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
public EmpData:any
public result:any;
  constructor(private share:SharadataService,private route:Router) { }

  ngOnInit(): void {
    // this.share.getData().subscribe((res)=>{
    //   console.log(res);
    //   this.EmpData=res;
    // })
    this.getDataFromBackend();
  }

  getDataFromBackend(){
    this.share.getData().subscribe((res)=>{
      console.log(res);
      this.EmpData=res
    })
  }
  onedit(id:any,Data:any){
// console.log(id);
  console.log(Data);
  this.share.setMessage(id,Data);

this.route.navigate(['update']);
  }
  
  ondelete(kg:any){
    if(confirm("Are You Want to delete")){
      this.share.deleteData(kg.id).subscribe((res:any)=>{
        console.log(res);
      })
      this.share.getData().subscribe((res:any)=>{
        console.log(res);
        this.result=res;
      })
      if(this.result.length>0){
        this.getDataFromBackend()
      }
    }

  }
  // AddData(){
  //   this.route.navigate(['reactprac'])
  // }

}
