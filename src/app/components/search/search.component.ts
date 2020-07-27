import { SpotifyService } from './../../services/spotify.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent  {

  artistas: any[] = [];
  loading: boolean;

  constructor( private spotify: SpotifyService) {}


  buscar( termino: string ){
    console.log(termino);
    this.loading = true;
    this.spotify.getArtistas(termino)
        .subscribe( (data: any) => {
          console.log(data);
          this.artistas = data;
          this.loading = false;
        }, ( e ) => {
          this.loading = false;
          console.log(e);
        } )
  };

}
