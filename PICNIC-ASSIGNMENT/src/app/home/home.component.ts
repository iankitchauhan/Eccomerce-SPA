import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { PicnicService } from '../services/picnic.service';
import { DialogData } from '../shared/interface';
import { ProductDetailsComponent } from '../shared/product-details-modal/product-details.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  IsDevice: boolean = false;
  productList: Array<DialogData>=[];
  filterData: Array<DialogData>=[];
  constructor(private picnicService: PicnicService, public dialog: MatDialog, private router: Router) { }
  ngOnInit(): void {
    this.IsDevice = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent); //return true if opening website in mobile

    //Behaviour Subject subscription to handle search Text box query text and show data based on search text
    this.picnicService.SearchText.subscribe(res => {
      if (res) {
        this.productList = this.filterData.filter((item: any) => item.name.toLowerCase().includes(res.toLowerCase()));
      } else {
        this.getProductList();
      }
    })
  }

//Method to open Modal or page on the basis of device
  openDialog(product: DialogData) {
    if (this.IsDevice) {
      this.picnicService.hideSearchBar=false;
      this.router.navigate([`/home/product-detail/${product.product_id}`]);
    } else {
      const dialogRef = this.dialog.open(ProductDetailsComponent, {
        width: '400px',
        data: product,
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log(result, 'The dialog was closed');
      });
    }
  }

//Method to get the list of product
  getProductList() {
    this.picnicService.getData(`${environment.baseUrl}/list`).subscribe((res: any) => {
      this.filterData = res.products;
      this.productList = res.products;
    });
  }

}
