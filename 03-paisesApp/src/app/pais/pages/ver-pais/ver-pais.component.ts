import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit{
  
  pais!:Country;

  constructor(
    private activatedRoute:ActivatedRoute,
    private paisService:PaisService
    ){}
  ngOnInit(): void {

    this.activatedRoute.params
      .pipe(
        switchMap(({id})=>this.paisService.getPaisPorCodigo(id)),
        tap(console.log)
      )
      .subscribe(pais=>this.pais=pais[0])
        

    // this.activatedRoute.params
    // .subscribe(params=>{
    //   console.log(params['id']);

    //   this.paisService.getPaisPorCodigo(params['id'])
    //     .subscribe(pais=>{
    //       console.log(pais);
    //     })
    // })
  }

}
