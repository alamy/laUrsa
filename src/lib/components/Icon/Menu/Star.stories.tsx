import { Meta, StoryObj } from '@storybook/react';
import { Star, StarProps } from './Star';

export default {
    title: 'Icon/Menu/Star',
    component: Star,
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
    
} as Meta<StarProps>

export const Default: StoryObj<StarProps> = {
    args: {},
   argTypes: {}
}