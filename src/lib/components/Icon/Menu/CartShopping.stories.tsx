import { Meta, StoryObj } from '@storybook/react';
import { CartShopping, CartShoppingProps } from './CartShopping';

export default {
    title: 'Icon/Menu/CartShopping',
    component: CartShopping,
    args: {
    },
    argTypes: {
        type: {
          options: ['Primary', 'Second'],
          control: { type: 'radio' }
        },
        size : {
          options: ['sm' , 'md' , 'lg' , 'xl'],
          control: {type: 'radio'}
        }
      }
    
} as Meta<CartShoppingProps>

export const Default: StoryObj<CartShoppingProps> = {
    args: {},
   argTypes: {}
}