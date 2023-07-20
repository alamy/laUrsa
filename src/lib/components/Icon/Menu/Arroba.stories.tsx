import { Meta, StoryObj } from '@storybook/react';
import { Arroba, ArrobaProps } from './Arroba';

export default {
    title: 'Icon/Menu/Arroba',
    component: Arroba,
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
    
} as Meta<ArrobaProps>

export const Default: StoryObj<ArrobaProps> = {
    args: {},
   argTypes: {}
}