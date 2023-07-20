import { Meta, StoryObj } from '@storybook/react';
import { LowBattery, LowBatteryProps } from './LowBattery';

export default {
    title: 'Icon/Menu/LowBattery',
    component: LowBattery,
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
    
} as Meta<LowBatteryProps>

export const Default: StoryObj<LowBatteryProps> = {
    args: {},
   argTypes: {}
}