import { Meta, StoryObj } from '@storybook/react';
import { Layers, LayersProps } from './Layers';

export default {
    title: 'Icon/Menu/Layers',
    component: Layers,
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
    
} as Meta<LayersProps>

export const Default: StoryObj<LayersProps> = {
    args: {},
   argTypes: {}
}