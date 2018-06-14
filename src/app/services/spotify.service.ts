import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(public http:HttpClient) {
    console.log("Servicio Spotify listo");
  }
  
  getArtistas(){
    let url = "https://api.spotify.com/v1/search?query=metallica&type=artist&limit=20";
    let headers = new HttpHeaders({
      Authorization: "Bearer BQBW6SN1g8ZVkocmOb9HqdwV5by7HkDsVBsPPiH7HXkQ6PP9TEKbjaMWJ83zUBMmiwWLazB8rHY93u0KypQ"
    });
    return this.http.get(url,{headers});
  }
}