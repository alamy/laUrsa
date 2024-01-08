import { Meta, StoryObj } from '@storybook/react';
import { Hourglass, HourglassProps } from './Hourglass';

export default {
    title: 'Icon/System/Hourglass',
    component: Hourglass,
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
    
} as Meta<HourglassProps>

export const Default: StoryObj<HourglassProps> = {
    args: {},
   argTypes: {}
}