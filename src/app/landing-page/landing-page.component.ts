import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {

  testimonials: any[] = [
    { comment: 'Great experience!', author: 'User 1' },
    { comment: 'Highly recommended!', author: 'User 2' },
    { comment: 'Amazing service!', author: 'User 3' }
    // Add more testimonials here
  ];



}
