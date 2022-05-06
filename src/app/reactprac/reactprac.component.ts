import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharadataService } from '../sharadata.service';

@Component({
  selector: 'app-reactprac',
  templateUrl: './reactprac.component.html',
  styleUrls: ['./reactprac.component.css']
})
export class ReactpracComponent implements OnInit {

  constructor(private fb:FormBuilder,private share:SharadataService ,private route:Router) { }

  isSubmitted:boolean=false;

  NewForm:any;

  ngOnInit(): void {
this.NewForm=this.fb.group({
  name:['',[Validators.required]],
  age:['',[Validators.required]],
  empId:['',[Validators.required]],
  branch:['',[Validators.required]],
  role:['',[Validators.required]]

})

  }

  get f(){
    return this.NewForm.controls;
  }

  onSubmitted(){
    console.log(this.NewForm);
    console.log(this.NewForm.value);

    this.isSubmitted=true;

    this.share.PostData(this.NewForm.value).subscribe((res:any)=>{
       console.log(res);
    })
    this.route.navigate(['crud']);
    }
    
onedit(id:any,Data:any){
 this.share.setMessage(id,Data) 
}
  

}
