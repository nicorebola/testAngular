import { Component, OnInit } from '@angular/core';
import { ImgService } from 'src/app/servicios/img.service';
import { JokeService } from 'src/app/servicios/joke.service';

@Component({
  selector: 'app-dog-joke',
  templateUrl: './dog-joke.component.html',
  styleUrls: ['./dog-joke.component.scss']
})
export class DogJokeComponent implements OnInit{
  nuevoChiste:any;
  nuevaImagen:any;
  contador = 0;
  milisegundos = 1000
  intervalo: any;

  constructor(private servicioImg: ImgService, private servicioJoke: JokeService){}

  ngOnInit(): void {
    this.servicioJoke.getChiste().subscribe(resp =>{
      this.nuevoChiste = resp
    })
    this.servicioImg.getImg().subscribe(resp =>{
      this.nuevaImagen = resp.message
    })
    this.actualizarVista();

  }

  actualizarVista(){
    this.contador = 20;
    this.intervalo = setInterval(() => {
      this.contador -= 1;
      if(this.contador == 0){
        clearInterval(this.intervalo);
        this.servicioJoke.getChiste().subscribe(resp =>{
          this.nuevoChiste = resp
          console.log(resp);
          if(resp != null){
            this.servicioImg.getImg().subscribe(resp =>{
              this.nuevaImagen = resp.message
              console.log(resp);
              if(resp != null){
                this.actualizarVista()
              }
            })
          }
        })
      }
    }, this.milisegundos)
  }

  actualizarInfo(){
    this.servicioJoke.getChiste().subscribe(resp =>{
      this.nuevoChiste = resp
      console.log(resp);
      if(resp != null){
        this.servicioImg.getImg().subscribe(resp =>{
          this.nuevaImagen = resp.message
          console.log(resp);
          if(resp != null){
            this.intervalo = null
            this.actualizarVista()
          }
        })
      }
    })
  }

}
