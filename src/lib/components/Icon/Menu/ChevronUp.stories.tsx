import { Meta, StoryObj } from '@storybook/react';
import { ChevronUp, ChevronUpProps } from './ChevronUp';

export default {
    title: 'Icon/Menu/ChevronUp',
    component: ChevronUp,
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
    
} as Meta<ChevronUpProps>

export const Default: StoryObj<ChevronUpProps> = {
    args: {},
   argTypes: {}
}