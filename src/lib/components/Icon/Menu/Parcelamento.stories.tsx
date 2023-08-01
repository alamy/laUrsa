import { Meta, StoryObj } from '@storybook/react';
import { Parcelamento, ParcelamentoProps } from './Parcelamento';

export default {
    title: 'Icon/Menu/Parcelamento',
    component: Parcelamento,
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
    
} as Meta<ParcelamentoProps>

export const Default: StoryObj<ParcelamentoProps> = {
    args: {},
   argTypes: {}
}