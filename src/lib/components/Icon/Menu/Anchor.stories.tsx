import { Meta, StoryObj } from '@storybook/react';
import { Anchor, AnchorProps } from './Anchor';

export default {
    title: 'Icon/Menu/Anchor',
    component: Anchor,
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
    
} as Meta<AnchorProps>

export const Default: StoryObj<AnchorProps> = {
    args: {},
   argTypes: {}
}