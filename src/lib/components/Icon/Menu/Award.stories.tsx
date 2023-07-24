import { Meta, StoryObj } from '@storybook/react';
import { Award, AwardProps } from './Award';

export default {
    title: 'Icon/Menu/Award',
    component: Award,
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
    
} as Meta<AwardProps>

export const Default: StoryObj<AwardProps> = {
    args: {},
   argTypes: {}
}