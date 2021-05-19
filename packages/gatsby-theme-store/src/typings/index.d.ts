interface ProductBase {
  id: string;
  title: string;
  price: string;
  category: string;
  localImage: any;
}

export interface Product extends ProductBase {
  slug: string;
}

export interface ProductInfo extends ProductBase {
  description: string;
}

export interface Products {
  products: Product[];
}

export interface Template {
  pageContext: {
    layout?: string;
    productId?: string;
  };
}
