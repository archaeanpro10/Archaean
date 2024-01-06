import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})
export class ContactFormService{
    private apiUrl = 'https://archaeanpro.in/server/server.php';   
    constructor(private http:HttpClient){}

    sendFormData(data:any){
        const modifiedJsonString = JSON.stringify(data);
        return this.http.post(this.apiUrl,modifiedJsonString, { responseType: 'text' });
    }
}