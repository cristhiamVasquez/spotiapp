import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

 tokenSpotify: string = 'Bearer BQAYAshUIVtkK87jOT7CSrS97azpgzETuum8Ftv-5-s_hsqNoNCJ4oSS8h2BICk_h-BNeOYVqdFgkjnoV1c';

  constructor( private http: HttpClient ) {
    console.log('Spotify service listo!');
   }

   getQuery( query: string ){

    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      Authorization: this.tokenSpotify});

    return this.http.get( url, { headers } );

   }

  getNewReleases(){

    return this.getQuery( 'browse/new-releases?limit=20' )
              .pipe( map( data => data['albums'].items));

   }

   getArtistas(termino: string){

    return this.getQuery( `search?q=${ termino }&type=artist&limit=15` )
              .pipe( map( data => data['artists'].items));

   }

   getArtista(id: string){

    return this.getQuery( `artists/${id}` );
              /* .pipe( map( data => data['artists'].items)); */

   }

   getTopTracks(id: string){

    return this.getQuery( `artists/${ id }/top-tracks?country=us` )
              .pipe( map( data => data['tracks'])
              );

   }



}
