import { Meta, StoryObj } from '@storybook/react';
import { Print, PrintProps } from './print';

export default {
    title: 'Icon/System/Print',
    component: Print,
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
    
} as Meta<PrintProps>

export const Default: StoryObj<PrintProps> = {
    args: {},
   argTypes: {}
}