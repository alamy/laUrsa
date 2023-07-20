import { Meta, StoryObj } from '@storybook/react';
import { Battery, BatteryProps } from './Battery';

export default {
    title: 'Icon/Menu/Battery',
    component: Battery,
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
    
} as Meta<BatteryProps>

export const Default: StoryObj<BatteryProps> = {
    args: {},
   argTypes: {}
}