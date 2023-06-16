import { Meta, StoryObj } from '@storybook/react';
import { Settings, SettingsProps } from './Settings';

export default {
    title: 'Icon/System/Settings',
    component: Settings,
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
    
} as Meta<SettingsProps>

export const Default: StoryObj<SettingsProps> = {
    args: {},
   argTypes: {}
}