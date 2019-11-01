import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MovielistService } from '../movielist.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.page.html',
  styleUrls: ['./add-movie.page.scss'],
})
export class AddMoviePage implements OnInit {

  addForm: FormGroup;
  //public i: number;
  //public name: string;
  //data = [{id:this.i, name:this.name}];
  movies = [];
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private alertController: AlertController,
    private movieslistService: MovielistService) { }

  ngOnInit() {
    this.formInitializer();
  }

  formInitializer() {
    this.addForm = this.formBuilder.group({
      name: [null,[Validators.required]]
    });
  }

  async saveMovie() {
    this.movies = this.movieslistService.getAllMovies();
    const lengthOfMovies = this.movies.length;
    console.log('length',lengthOfMovies);
    const i = lengthOfMovies + 1;
    const name = this.addForm.controls['name'].value;
    console.log('name', name);
    this.movieslistService.saveMovie(i, name);
    const alert = await this.alertController.create({
      header: 'Alert',
      message: 'Movie ' + name + ' with id number ' + i + ' is added in the list.',
      buttons: [
        {
          text: 'Done',
          handler: () => {
            this.router.navigateByUrl('/movieslist');
          }
        }
    ]
    });
    
    
    alert.present();
  }
}
