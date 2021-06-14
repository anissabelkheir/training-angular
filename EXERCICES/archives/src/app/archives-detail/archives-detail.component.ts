import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'archives-detail',
  templateUrl: './archives-detail.component.html',
  styleUrls: ['./archives-detail.component.scss']
})
export class ArchivesDetailComponent implements OnInit {
  year: number;
  month: number;
  constructor(private route : ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.paramMap
      .subscribe(params => {
        this.year = +params.get('year');
        this.month = +params.get('month');
      });
  }

  submit() {
    this.router.navigate(['/']);
  }

}
