import { Meta, StoryObj } from '@storybook/react';
import { List } from './List';
import { IconProps } from "../../../assets/InterfacePropsIcon";


export default {
    title: 'Icon/Menu/List',
    component: List,
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