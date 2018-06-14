import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  artistas:any[] = [];

  constructor(public http:HttpClient) {
    console.log("Servicio Spotify listo");
  }
  
  getArtistas(termino:string){
    let url = `https://api.spotify.com/v1/search?query=${termino}&type=artist&limit=20`;
    let headers = new HttpHeaders({
      Authorization: "Bearer BQDwJIeaUwkVqvnBineGiLUI7wIsYpUncz9kqQQ33nWw6VJSZLweYAXE8KHS3WskaQoGN0gHSSnl80_j6Tc"
    });
    return this.http.get(url,{headers}).pipe(map((resp:any)=>{
      this.artistas = resp.artists.items;
      return this.artistas;
    }));
  }
}