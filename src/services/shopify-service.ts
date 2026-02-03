import axios from 'axios';
import { env } from '../config/env';

function shopifyClient() {
  if (!env.shopifyStoreDomain || !env.shopifyAccessToken) {
    throw new Error('Shopify not configured');
  }

  return axios.create({
    baseURL: `https://${env.shopifyStoreDomain}/admin/api/${env.shopifyApiVersion}`,
    headers: {
      'X-Shopify-Access-Token': env.shopifyAccessToken,
      'Content-Type': 'application/json'
    }
  });
}

export async function fetchProducts() {
  const client = shopifyClient();
  const response = await client.get('/products.json');
  return response.data.products;
}

export async function fetchProduct(productId: string) {
  const client = shopifyClient();
  const response = await client.get(`/products/${productId}.json`);
  return response.data.product;
}

export async function createShopifyOrder(input: {
  lineItems: Array<{ productId: string; variantId: string; quantity: number }>;
  currency: string;
}) {
  const client = shopifyClient();
  const response = await client.post('/orders.json', {
    order: {
      line_items: input.lineItems.map((item) => ({
        product_id: item.productId,
        variant_id: item.variantId,
        quantity: item.quantity
      })),
      currency: input.currency,
      financial_status: 'paid'
    }
  });
  return response.data.order;
}
