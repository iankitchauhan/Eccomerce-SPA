import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PicnicService } from '../services/picnic.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit { 
  inDebounce: any;
  searchword!: string;
  constructor(public picnicService: PicnicService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  // Debounce functionality
  debounceData() {
    if (this.inDebounce) {
      clearTimeout(this.inDebounce);
    }
    this.inDebounce = setTimeout(() => { this.fetchApiData(); }, 1000);
  }
  
  fetchApiData() {
    const text = this.searchword && this.searchword.trim();
    this.picnicService.SearchText.next(text);
  }

  navToHome() {
    this.router.navigate(['/home']);
  }
}
