import { Meta, StoryObj } from '@storybook/react';
import { Pcr, PcrProps } from './Pcr';

export default {
    title: 'Icon/Menu/Pcr',
    component: Pcr,
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
    
} as Meta<PcrProps>

export const Default: StoryObj<PcrProps> = {
    args: {},
   argTypes: {}
}