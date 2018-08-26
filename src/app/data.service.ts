import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getArtist(){
    return this.http.get('https://api.spotify.com/v1/artists/0OdUWJ0sBjDrqHygGUXeCF');
  }
}
