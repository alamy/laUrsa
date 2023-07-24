import { Meta, StoryObj } from '@storybook/react';
import { ShoppingBag, ShoppingBagProps } from './ShoppingBag';

export default {
    title: 'Icon/Menu/ShoppingBag',
    component: ShoppingBag,
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
    
} as Meta<ShoppingBagProps>

export const Default: StoryObj<ShoppingBagProps> = {
    args: {},
   argTypes: {}
}