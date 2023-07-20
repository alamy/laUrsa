import { Meta, StoryObj } from '@storybook/react';
import { Chart, ChartProps } from './Chart';

export default {
    title: 'Icon/Menu/Chart',
    component: Chart,
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
    
} as Meta<ChartProps>

export const Default: StoryObj<ChartProps> = {
    args: {},
   argTypes: {}
}