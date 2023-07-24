import { Meta, StoryObj } from '@storybook/react';
import { Link2, Link2Props } from './Link2';

export default {
    title: 'Icon/Menu/Link2',
    component: Link2,
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
    
} as Meta<Link2Props>

export const Default: StoryObj<Link2Props> = {
    args: {},
   argTypes: {}
}