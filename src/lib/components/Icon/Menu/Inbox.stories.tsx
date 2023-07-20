import { Meta, StoryObj } from '@storybook/react';
import { Inbox, InboxProps } from './Inbox';

export default {
    title: 'Icon/Menu/Inbox',
    component: Inbox,
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
    
} as Meta<InboxProps>

export const Default: StoryObj<InboxProps> = {
    args: {},
   argTypes: {}
}