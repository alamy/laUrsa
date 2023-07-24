import { Meta, StoryObj } from '@storybook/react';
import { Smartphone, SmartphoneProps } from './Smartphone';

export default {
    title: 'Icon/Menu/Smartphone',
    component: Smartphone,
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
    
} as Meta<SmartphoneProps>

export const Default: StoryObj<SmartphoneProps> = {
    args: {},
   argTypes: {}
}