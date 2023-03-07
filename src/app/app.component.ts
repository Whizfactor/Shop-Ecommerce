import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Shop', url: '/shop', icon: 'paper-plane' },
    { title: 'Category', url: '/category', icon: 'heart' },
    { title: 'About Us', url: '/about', icon: 'archive' },
    { title: 'Contact Us', url: '/contact', icon: 'trash' },
  ];
}
