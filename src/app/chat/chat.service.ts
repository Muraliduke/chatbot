import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import { ApiAiClient } from 'api-ai-javascript/es6/ApiAiClient';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import {MatSnackBar} from '@angular/material/snack-bar';

export class Message {
}

interface Covid {
  results: any[];
}
@Injectable({
  providedIn: 'root'
})
export class ChatService {
  readonly token = environment.dialogflow.key;
  readonly client = new ApiAiClient({accessToken: this.token});
// https://github.com/amodm/api-covid19-in#unofficial-sources
  conversation = new BehaviorSubject<Message[]>([]);

  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }

  update(msg: Message){
    this.conversation.next([msg]);
  }

  converse(msg: string){
    const userMessage = {message: msg , sentBy: 'user', timestamp: Date.now()};
    this.update(userMessage);

    return this.client.textRequest(msg).then((res) => {
        console.log(res.result.metadata.intentName, res.result)
        if ((res.result.metadata.intentName) === 'countryWiseCorona') {
          if (res.result.parameters['geo-country']){
            this.getCountryInfo(res.result.parameters['geo-country'],  res.result.metadata.intentName);
          }else {
            const speech = res.result.fulfillment.speech;
            const botMessage = {message: speech , sentBy: 'bot', type: 'default',
            timestamp: Date.now()};
            this.update(botMessage);
          }
        } else if ((res.result.action) === 'coronaApi') {
        console.log(res.result.metadata.intentName);
        this.getCoronaStats().subscribe(data => {
          const botMessage = {message: {stats: this.statsFormat(data)} , action: res.result.metadata.intentName,
          sentBy: 'bot', type: 'stats', custom: true, timestamp: Date.now()};
          this.update(botMessage);
        });
      }else {
        console.log(res.result.metadata.intentName)
        const speech = res.result.fulfillment.speech;
        const botMessage = {message: speech , sentBy: 'bot', type: 'default', action: res.result.metadata.intentName,
        timestamp: Date.now()};
        this.update(botMessage);
      }
    });

  }

  getCountryInfo(country, action){
    if (sessionStorage.getItem('covidCountries')){
      const data = JSON.parse(sessionStorage.getItem('covidCountries'));
      const filterData = data.filter(val => val.location === country);
      const botMessage = {message:  filterData, action,
        sentBy: 'bot', custom: true, timestamp: Date.now()};
      this.update(botMessage);
    } else {
      this.http.get('https://www.trackcorona.live/api/countries').subscribe( (res: {data: any[], code: number}) => {
      const data = res.data;
      sessionStorage.setItem('covidCountries', JSON.stringify(data));
      const filterData = data.filter(val => val.location === country);
      const botMessage = {message:  filterData, action,
        sentBy: 'bot', custom: true, timestamp: Date.now()};
      this.update(botMessage);

      }, err => {this.openSnackBar(); console.log(err)});
    }

  }

  getCoronaStats(){
    return this.http.get('https://api.thevirustracker.com/free-api?global=stats').pipe(
      map((data: Covid)  => data.results[0]),
      catchError((err) => {
        this.openSnackBar();
        return this.handleError;
      }));

  }

  openSnackBar(){
    const snackBarRef = this.snackBar.open(`An Unxpected error
        happened while retreiving data,please try after some time`, '', {duration: 2500,
        });
  }

  handleError(error: HttpErrorResponse){
    return throwError(error);
  }

  statsFormat(data): any[]{

    const listArr = [];
    Object.keys(data).forEach(val => {
      if (val !== 'source'){
        const obj = {
          desc: val,
          val: data[val]
        };
        listArr.push(obj);
      }
    });

    return listArr;
  }


}
