import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { SpotifyService } from "../../services/spotify.service";
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html'
})
export class ArtistComponent implements OnInit {
  artista:any = {};
  pistas:any[] = [];

  constructor(private activatedRoute:ActivatedRoute,public _spotify:SpotifyService) { 
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params =>{
      this._spotify.getArtista(params['id']).subscribe(artista=>{
        this.artista = artista;
        console.log(artista);
      });

      this._spotify.getTop(params['id'])
      .pipe(map((resp:any)=>resp.tracks))
      .subscribe(pistas=>{
        console.log(pistas);
        this.pistas = pistas;
      });
    })  
  }

}
