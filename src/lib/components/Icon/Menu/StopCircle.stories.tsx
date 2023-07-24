import { Meta, StoryObj } from '@storybook/react';
import { StopCircle, StopCircleProps } from './StopCircle';

export default {
    title: 'Icon/Menu/StopCircle',
    component: StopCircle,
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
    
} as Meta<StopCircleProps>

export const Default: StoryObj<StopCircleProps> = {
    args: {},
   argTypes: {}
}