import { Meta, StoryObj } from '@storybook/react';
import { Pppe, PppeProps } from './Pppe';

export default {
    title: 'Icon/Menu/Pppe',
    component: Pppe,
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
    
} as Meta<PppeProps>

export const Default: StoryObj<PppeProps> = {
    args: {},
   argTypes: {}
}