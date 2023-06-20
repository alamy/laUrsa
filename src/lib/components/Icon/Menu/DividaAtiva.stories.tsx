import { Meta, StoryObj } from '@storybook/react';
import { DividaAtiva, DividaAtivaProps } from './DividaAtiva';

export default {
    title: 'Icon/Menu/DividaAtiva',
    component: DividaAtiva,
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
    
} as Meta<DividaAtivaProps>

export const Default: StoryObj<DividaAtivaProps> = {
    args: {},
   argTypes: {}
}