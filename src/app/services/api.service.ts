import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  environ = environment;
  castGreeting: any;


  constructor() { 

    let greeting = new BehaviorSubject('Hola Mundo');
    this.castGreeting = greeting.asObservable();

  }

  getBooths(){
    return "Hello World";
  }

  getGreeting(){
    return this.castGreeting.next();
  }





}
