import { Meta, StoryObj } from '@storybook/react';
import { Bar, BarProps } from './Bar';

export default {
    title: 'Icon/Menu/Bar',
    component: Bar,
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
    
} as Meta<BarProps>

export const Default: StoryObj<BarProps> = {
    args: {},
   argTypes: {}
}