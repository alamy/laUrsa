import { Meta, StoryObj } from '@storybook/react';
import { Linkedin, LinkedinProps } from './Linkedin';

export default {
    title: 'Icon/Menu/Linkedin',
    component: Linkedin,
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
    
} as Meta<LinkedinProps>

export const Default: StoryObj<LinkedinProps> = {
    args: {},
   argTypes: {}
}