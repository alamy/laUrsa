import { Meta, StoryObj } from '@storybook/react';
import { Box, BoxProps } from './Box';

export default {
    title: 'Icon/Menu/Box',
    component: Box,
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
    
} as Meta<BoxProps>

export const Default: StoryObj<BoxProps> = {
    args: {},
   argTypes: {}
}