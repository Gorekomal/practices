import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { SharadataService } from '../sharadata.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
public AllData:any
updateForm:any;
 isSubmitted:boolean=false;
  constructor(private share:SharadataService,private fb:FormBuilder,private route:Router) {
    this.share.getMessage().subscribe((res:any)=>{
      console.log(res);
      console.log(res.id);
      this.AllData=res;
      console.log(this.AllData.name);
    })
   }


  ngOnInit(): void {
    this.updateForm=this.fb.group({
     name:[this.AllData.name],
     age:[this.AllData.age],
     empId:[this.AllData.empId],
     branch:[this.AllData.branch],
     role:[this.AllData.role]
    })
  }
  get f(){
    return this.updateForm.controls;
  }

  onSubmitted(){

    console.log(this.updateForm.value)
    this.isSubmitted=true;

this.share.editData(this.AllData.id,this.updateForm.value).subscribe((res)=>{
  console.log(res)
})

this.route.navigate(['crud']);
  }
  

}
