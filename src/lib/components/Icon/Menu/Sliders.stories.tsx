import { Meta, StoryObj } from '@storybook/react';
import { Sliders, SlidersProps } from './Sliders';

export default {
    title: 'Icon/Menu/Sliders',
    component: Sliders,
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
    
} as Meta<SlidersProps>

export const Default: StoryObj<SlidersProps> = {
    args: {},
   argTypes: {}
}