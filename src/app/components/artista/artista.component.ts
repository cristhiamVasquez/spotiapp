import { SpotifyService } from './../../services/spotify.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClassField } from '@angular/compiler';



@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: [
  ]
})
export class ArtistaComponent  {

  artista: any = {};
  mostrar: boolean;
  topTracks: any[] = [];

  constructor( private router: ActivatedRoute,
               private spotify: SpotifyService ) {

    this.mostrar = true;

    this.router.params.subscribe( params => {
      this.getArtista( params['id'] );
      this.getTopTracks( params['id'] );
    } );

  }

  getArtista( id: string ){

    this.mostrar = true;

    this.spotify.getArtista( id )
        .subscribe( artista => {
          console.log(artista);
          this.artista = artista;
          this.mostrar = false;
        } );

  }

  getTopTracks( id: string ){
    this.spotify.getTopTracks( id )
          .subscribe( topTracks => {
            console.log(topTracks);
            this.topTracks = topTracks;
          } );
  }


}
