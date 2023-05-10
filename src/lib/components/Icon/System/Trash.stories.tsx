import { Meta, StoryObj } from '@storybook/react';
import { Trash, TrashProps } from './Trash';

export default {
    title: 'Icon/System/Trash',
    component: Trash,
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
    
} as Meta<TrashProps>

export const Default: StoryObj<TrashProps> = {
    args: {},
   argTypes: {}
}