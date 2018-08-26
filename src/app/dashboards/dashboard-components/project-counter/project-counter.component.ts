import { Component } from '@angular/core';
import { DataService } from '../../../data.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'project-counter',
	templateUrl: './project-counter.component.html'
})
export class ProjectCounterComponent implements OnInit{

  artist$: Object;

	constructor(private data: DataService) {}

  ngOnInit(){
    this.data.getArtist().subscribe(
      data => this.artist$ = data
    )
  }


}
