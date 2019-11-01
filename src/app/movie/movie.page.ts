import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovielistService } from '../movielist.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.page.html',
  styleUrls: ['./movie.page.scss'],
})
export class MoviePage implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alertController: AlertController,
    private movielistservice: MovielistService
  ) {}

  movies = [];
  singleMovie;

  ngOnInit() {
    this.movies = this.movielistservice.getAllMovies();
    this.route.paramMap.subscribe(paramMap => {
      const val = paramMap.get('id');
      this.singleMovie = this.movies.find(obj => {
        return obj.id === val;
      });
    });
  }

  async deleteMovie() {
    console.log('deleteMovie', this.singleMovie);
    const alert = await this.alertController.create({
      header: 'Alert',
      message: `Are you sure you want to delete ${this.singleMovie.name}?`,
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Delete',
          handler: () => {
            console.log('Confirm delete');
            this.movielistservice.deleteMovie(this.singleMovie.id);
            this.router.navigateByUrl('/movieslist');
          }
        }
      ]
    });
    alert.present();
  }
  
}
