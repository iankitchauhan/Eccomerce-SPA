import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { PicnicService } from '../services/picnic.service';

@Component({
  selector: 'app-product-details-page',
  templateUrl: './product-details-page.component.html',
  styleUrls: ['./product-details-page.component.scss'] 
})
export class ProductDetailsPageComponent implements OnInit, OnDestroy {
  productId: string;
  productDetails: any;
  constructor(private _route: ActivatedRoute,
    private picnicService: PicnicService
  ) {
    this.productId = this._route.snapshot.params.productId;  //To get productId from url 
  }

  ngOnInit(): void {
    this.getProductDetails();
  }

  //To get Details of a product using its product getting url params
  getProductDetails() {
    const productDetailsapiUrl = `${environment.baseUrl}/${this.productId}/detail`
    this.picnicService.getData(productDetailsapiUrl).subscribe(res => {
      if (res) {
        this.productDetails = res;
      }
    })
  }
 
  ngOnDestroy(): void {
    this.picnicService.hideSearchBar = true;
  }



}
