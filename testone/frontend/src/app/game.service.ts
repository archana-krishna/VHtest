import { Injectable } from '@angular/core';
import {HttpClient} from'@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private http:HttpClient) { }

  getData(){
    //let url='https://www.freetogame.com/api/games';
    return this.http.get<any>('https://www.freetogame.com/api/games',{headers:{'Access-Control-Allow-Origin':'*'}});
  }
}
