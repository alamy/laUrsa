import { Meta, StoryObj } from '@storybook/react';
import { Key, KeyProps } from './Key';

export default {
    title: 'Icon/Menu/Key',
    component: Key,
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
    
} as Meta<KeyProps>

export const Default: StoryObj<KeyProps> = {
    args: {},
   argTypes: {}
}