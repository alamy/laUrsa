import { Meta, StoryObj } from '@storybook/react';
import { Maximize2, Maximize2Props } from './Maximize2';

export default {
    title: 'Icon/Menu/Maximize2',
    component: Maximize2,
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
    
} as Meta<Maximize2Props>

export const Default: StoryObj<Maximize2Props> = {
    args: {},
   argTypes: {}
}