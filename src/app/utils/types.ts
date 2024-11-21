export interface Product {
  productId: number;
  productName: string;
  stars: number;
  price: number;
  listPrice: number;
  imageUrl: string;
  installments: [
    {
      quantity: number;
      value: number;
    }
  ];
}

export interface LocalStorageCart {
  productId: number;
  quantity: number;
}
