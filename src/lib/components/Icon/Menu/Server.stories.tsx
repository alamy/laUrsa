import { Meta, StoryObj } from '@storybook/react';
import { Server } from './Server';
import { IconProps } from "../../../assets/InterfacePropsIcon";


export default {
    title: 'Icon/Menu/Server',
    component: Server,
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
    
} as Meta<IconProps>

export const Default: StoryObj<IconProps> = {
    args: {},
   argTypes: {}
}