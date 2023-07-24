import { Meta, StoryObj } from '@storybook/react';
import { Shield, ShieldProps } from './Shield';

export default {
    title: 'Icon/Menu/Shield',
    component: Shield,
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
    
} as Meta<ShieldProps>

export const Default: StoryObj<ShieldProps> = {
    args: {},
   argTypes: {}
}