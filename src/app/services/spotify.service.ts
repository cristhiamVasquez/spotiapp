import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient ) {
    console.log('Spotify service listo!');
   }

  getNewReleases(){

    const headers = new HttpHeaders({
      Authorization: 'Bearer BQCxK_7WtpkQWHrIwO3Ie7_St0C2x1-EbwsN4HnCtkYXpcUVDHFfW1GIXSqBipIWcL_rdUtSwCnZk1kZNvA'});

    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers });

   }


}
