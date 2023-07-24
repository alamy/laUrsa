import { Meta, StoryObj } from '@storybook/react';
import { Speaker, SpeakerProps } from './Speaker';

export default {
    title: 'Icon/Menu/Speaker',
    component: Speaker,
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
    
} as Meta<SpeakerProps>

export const Default: StoryObj<SpeakerProps> = {
    args: {},
   argTypes: {}
}