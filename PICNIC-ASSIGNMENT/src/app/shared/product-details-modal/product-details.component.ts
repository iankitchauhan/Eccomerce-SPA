import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PicnicService } from 'src/app/services/picnic.service';
import { environment } from 'src/environments/environment';
import { DialogData } from '../interface';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  productDetails!:DialogData;
  constructor(
    public dialogRef: MatDialogRef<ProductDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private picnicService: PicnicService
  ){
  }

  ngOnInit(): void {
    this.getProductDetails();
  }

  //Single product detail get by id API
  getProductDetails() {
    const productDetailsapiUrl = `${environment.baseUrl}/${this.data.product_id}/detail`;
    this.picnicService.getData(productDetailsapiUrl).subscribe((res:any) => {
      if(res){
        this.productDetails = res;
      }
    })

  }

  //To close the modal also passing data back to main component on close
  onNoClick(): void {
    this.dialogRef.close(this.data);
  }
}
