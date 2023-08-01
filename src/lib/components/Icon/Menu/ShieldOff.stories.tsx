import { Meta, StoryObj } from '@storybook/react';
import { ShieldOff, ShieldOffProps } from './ShieldOff';

export default {
    title: 'Icon/Menu/ShieldOff',
    component: ShieldOff,
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
    
} as Meta<ShieldOffProps>

export const Default: StoryObj<ShieldOffProps> = {
    args: {},
   argTypes: {}
}