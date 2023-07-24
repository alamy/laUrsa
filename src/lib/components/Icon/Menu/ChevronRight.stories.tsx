import { Meta, StoryObj } from '@storybook/react';
import { ChevronRight, ChevronRightProps } from './ChevronRight';

export default {
    title: 'Icon/Menu/ChevronRight',
    component: ChevronRight,
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
    
} as Meta<ChevronRightProps>

export const Default: StoryObj<ChevronRightProps> = {
    args: {},
   argTypes: {}
}