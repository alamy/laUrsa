import { Meta, StoryObj } from '@storybook/react';
import { Save, SaveProps } from './Save';

export default {
    title: 'Icon/Menu/Save',
    component: Save,
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
    
} as Meta<SaveProps>

export const Default: StoryObj<SaveProps> = {
    args: {},
   argTypes: {}
}