import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BackendServicesService {

    userList: any = [];
    data: any;
    expresponse: string = "";
    constructor(private http : HttpClient){
    }
}

