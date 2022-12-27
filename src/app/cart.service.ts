import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Product } from './products'

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: Product[] = []

  constructor(private http: HttpClient) {}

  addToCart(product: Product) {
    this.items.push(product)
  }

  getItems() {
    return this.items
  }

  clearCart() {
    this.items = []
    return this.items
  }

  getShippingPrices() {
    return this.http.get<{ type: string; price: number }[]>(
      '/assets/shipping.json'
    )
  }

  deleteFromCart(productId: number) {
    const newItems = this.items.filter((product) => product.id !== productId)
    this.items = newItems
    return this.items
  }
}
