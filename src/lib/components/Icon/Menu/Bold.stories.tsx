import { Meta, StoryObj } from '@storybook/react';
import { Bold, BoldProps } from './Bold';

export default {
    title: 'Icon/Menu/Bold',
    component: Bold,
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
    
} as Meta<BoldProps>

export const Default: StoryObj<BoldProps> = {
    args: {},
   argTypes: {}
}