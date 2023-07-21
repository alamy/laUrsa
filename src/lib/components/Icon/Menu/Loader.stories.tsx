import { Meta, StoryObj } from '@storybook/react';
import { Loader, LoaderProps } from './Loader';

export default {
    title: 'Icon/Menu/Loader',
    component: Loader,
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
    
} as Meta<LoaderProps>

export const Default: StoryObj<LoaderProps> = {
    args: {},
   argTypes: {}
}