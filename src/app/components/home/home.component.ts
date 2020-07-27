import { SpotifyService } from './../../services/spotify.service';
import { Component, OnInit } from '@angular/core';
/* import { HttpClient } from '@angular/common/http'; */

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent {

 /*  paises: any[] = [];

  constructor( private http: HttpClient ) {

    this.http.get('https://restcountries.eu/rest/v2/lang/es')
          .subscribe( (resp: any) => {
            this.paises = resp;
            console.log(resp);
           } );

   } */

   nuevasCanciones: any[] = [];
   loading: boolean;
   error: boolean;
   mensajeError: string;

   constructor( private  spotify: SpotifyService){ 

    this.loading = true;
    this.error = false;

    this.spotify.getNewReleases()
        .subscribe( (data: any) => {
          console.log(data);
          this.nuevasCanciones = data;
          this.loading = false;
        }, ( e ) => {
          this.loading = false;
          this.error = true;
          // console.log(e);
          this.mensajeError = e.error.error.message;
        } );


    }
 
}
