import { Meta, StoryObj } from '@storybook/react';
import { Right, RightProps } from './Right';

export default {
    title: 'Icon/System/Right',
    component: Right,
    args: {
    },
    argTypes: {
        type: {
          options: ['Primary', 'Second', 'Third' ],
          control: { type: 'radio' }
        },
        size : {
          options: ['sm' , 'md' , 'lg' , 'xl'],
          control: {type: 'radio'}
        }
      }
    
} as Meta<RightProps>

export const Default: StoryObj<RightProps> = {
    args: {},
   argTypes: {}
}