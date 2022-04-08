import { Component } from '@angular/core';

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html'
})

export class ProductListComponent {
    pageTitle: string = 'Product List';
    products: any[] = [
        {
            'productId': 2,
            'productName': 'Garden Cart',
            'productCode': 'CDN-002',
            'releaseDate': 'March 19, 2021',
            'description': 'Garden cart rolling cart - 15 gallon',
            'price': 33.25,
            'starRating': 3.5,
            'imageUrl': 'assets/images/garden-cart.png'
        },
        {
            'productId': 5,
            'productName': 'Hammer',
            'productCode': 'HCN-022',
            'releaseDate': 'April 19, 2020',
            'description': 'Hammer 20 lbs',
            'price': 123.25,
            'starRating': 4.2,
            'imageUrl': 'assets/images/hammer.png'
        },
        {
            'productId': 12,
            'productName': 'Spade',
            'productCode': 'SP-102',
            'releaseDate': 'November 19, 2020',
            'description': 'Spade Xtra Long',
            'price': 80.00,
            'starRating': 3.7,
            'imageUrl': 'assets/images/spade.png'
        }
    ];
}
