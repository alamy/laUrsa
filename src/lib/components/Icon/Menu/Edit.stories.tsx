import { Meta, StoryObj } from '@storybook/react';
import { Edit, EditProps } from './Edit';

export default {
    title: 'Icon/Menu/Edit',
    component: Edit,
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
    
} as Meta<EditProps>

export const Default: StoryObj<EditProps> = {
    args: {},
   argTypes: {}
}