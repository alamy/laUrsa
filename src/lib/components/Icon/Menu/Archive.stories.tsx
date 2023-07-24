import { Meta, StoryObj } from '@storybook/react';
import { Archive, ArchiveProps } from './Archive';

export default {
    title: 'Icon/Menu/Archive',
    component: Archive,
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
    
} as Meta<ArchiveProps>

export const Default: StoryObj<ArchiveProps> = {
    args: {},
   argTypes: {}
}