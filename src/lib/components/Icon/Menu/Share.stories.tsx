import { Meta, StoryObj } from '@storybook/react';
import { Share } from './Share';
import { IconProps } from "../../../assets/InterfacePropsIcon";


export default {
    title: 'Icon/Menu/Share',
    component: Share,
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