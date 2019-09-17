import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HeroeModel } from '../models/heroe.models';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private url = 'http://localhost:3000';

  constructor( private http: HttpClient) { }

  crearHeroe( heroe: HeroeModel ) {

    return this.http.post( `${this.url}/crearHeroe`, heroe).pipe(
      map((resp: any) => {
        heroe.id = resp.message._id;
        heroe.nombre = resp.message.nombre;
        return heroe;
      })
    );

  }

  actualizarHeroe( heroe: HeroeModel ) {

    return this.http.put(`${ this.url }/editarHeroe`, heroe);

  }


  traeHeroes(desde = 0) {

    return this.http.get(`${ this.url }/traeHeroes?desde=${desde}`);

  }

  traeHeroe(id: string) {
    return this.http.get(`${ this.url }/traeHeroe/${id}`);
  }

}
