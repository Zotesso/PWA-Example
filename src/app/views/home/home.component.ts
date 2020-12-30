import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PokeapiService } from 'src/app/shared/services/pokeapi.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  PokemonInfo: Observable<any>;

  constructor(
    private pokeApiService: PokeapiService
  ) {
    this.PokemonInfo = this.pokeApiService.getPokemonByName('absol');
  }

  ngOnInit(): void {
  }

}
