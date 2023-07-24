import { Meta, StoryObj } from '@storybook/react';
import { FilePlus, FilePlusProps } from './FilePlus';

export default {
    title: 'Icon/Menu/FilePlus',
    component: FilePlus,
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
    
} as Meta<FilePlusProps>

export const Default: StoryObj<FilePlusProps> = {
    args: {},
   argTypes: {}
}