import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  artistas:any[] = [];
  urlSpotify:string = 'https://api.spotify.com/v1/';
  token:string = 'BQBPwK8LfC43JbO2NaPTt-b5I4p-uNCCbsz3XBBWVDjZToiQinxlTjI4bhyGLV0UykUGCzSm4Dj1jaMC47o';

  constructor(public http:HttpClient) {
    console.log("Servicio Spotify listo");
  }

  private getHeaders():HttpHeaders{
    let headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`
    });
    return headers;
  }
  
  getArtistas(termino:string){
    let url = `${this.urlSpotify}search?query=${termino}&type=artist&limit=20`;
    let headers = this.getHeaders();
    return this.http.get(url,{headers}).pipe(map((resp:any)=>{
      this.artistas = resp.artists.items;
      return this.artistas;
    }));
  }

  getArtista(id:string){
    let url = `${this.urlSpotify}artists/${id}`;
    let headers = this.getHeaders();
    return this.http.get(url,{headers});
  }

  getTop(id:string){
    let url = `${this.urlSpotify}artists/${id}/top-tracks?country=US`;
    let headers = this.getHeaders();
    return this.http.get(url,{headers});
  }
}