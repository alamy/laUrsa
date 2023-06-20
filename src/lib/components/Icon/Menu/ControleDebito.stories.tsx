import { Meta, StoryObj } from '@storybook/react';
import { ControleDebito, ControleDebitoProps } from './ControleDebito';

export default {
    title: 'Icon/Menu/ControleDebito',
    component: ControleDebito,
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
    
} as Meta<ControleDebitoProps>

export const Default: StoryObj<ControleDebitoProps> = {
    args: {},
   argTypes: {}
}