import { Component, OnInit } from '@angular/core';

// export class Menu {
//   constructor(
//     public id : number,
//     public menuItem : string,
//     public visible : boolean, 
//   ){

//   }
// }

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  // menuItems = [
  //   new Menu(1, 'Home', true),
  //   new Menu(2, 'Product', true),
  //   new Menu(3, 'Pricing', true),
  //   new Menu(4, 'Resources', true),
  //   new Menu(5, 'Contact', true)
  // ]

  menuItems = [
    {
      id : 1,
      menuItem : 'Home',
      category : []
    },
    {
      id : 2,
      menuItem : 'Products',
      category : [
        { 
          catid: 1,
          catName : 'Crypto Consultation'
        },
        {
          catid : 2,
          catName : 'Crypto Accounting'
        },
        {
          catid : 3,
          catName : 'TDS 194S'
        }
      ]
    },
    {
      id : 3,
      menuItem : 'Pricing',
      category : [
        { 
          catid: 1,
          catName : 'Price_Detail'
        }
      ]
    },
    {
      id : 4,
      menuItem : 'Resources',
      category : [
        { 
          catid: 1,
          catName : 'Resources_Video'
        },
        { 
          catid: 2,
          catName : 'Resources_Blogs'
        }
      ]
    },
    {
      id : 5,
      menuItem : 'Contact Us',
      category : []
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  over() {
    console.log("Mouse Over");
    // document.getElementById("downarr").style.transform("'rotate(7deg)'");
  }

  out() {
    console.log("Mouse out");
  }
}
