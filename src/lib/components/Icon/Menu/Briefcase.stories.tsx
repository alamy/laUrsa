import { Meta, StoryObj } from '@storybook/react';
import { Briefcase, BriefcaseProps } from './Briefcase';

export default {
    title: 'Icon/Menu/Briefcase',
    component: Briefcase,
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
    
} as Meta<BriefcaseProps>

export const Default: StoryObj<BriefcaseProps> = {
    args: {},
   argTypes: {}
}