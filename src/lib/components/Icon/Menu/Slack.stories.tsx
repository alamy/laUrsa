import { Meta, StoryObj } from '@storybook/react';
import { Slack, SlackProps } from './Slack';

export default {
    title: 'Icon/Menu/Slack',
    component: Slack,
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
    
} as Meta<SlackProps>

export const Default: StoryObj<SlackProps> = {
    args: {},
   argTypes: {}
}