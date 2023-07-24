import { Meta, StoryObj } from '@storybook/react';
import { Link, LinkProps } from './Link';

export default {
    title: 'Icon/Menu/Link',
    component: Link,
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
    
} as Meta<LinkProps>

export const Default: StoryObj<LinkProps> = {
    args: {},
   argTypes: {}
}