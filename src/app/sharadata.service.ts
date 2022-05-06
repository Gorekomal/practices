
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharadataService {
 public id =new BehaviorSubject('');
 public currentId = this.id.asObservable();

public Data= new BehaviorSubject('');
 public currentData = this.Data.asObservable();


  constructor(private http:HttpClient) { 

  }
  getData(){
    return this.http.get('http://localhost:3000/api/getAllCourses');
    }
    PostData(insert:any){
      return this.http.post("http://localhost:3000/api/insertCourses/",insert);
    }
    editData(id:any,Data:any){
      return this.http.put('http://localhost:3000/api/updateCourses/'+id,Data);
    }
    deleteData(id:any){
      return this.http.delete('http://localhost:3000/api/deleteCourses/' +id);
    }

    setMessage(id:any,Data:any){
      this.id.next(id);
      this.Data.next(Data);
      }

      getMessage(){
      return this.currentId,this.currentData;
      }



}