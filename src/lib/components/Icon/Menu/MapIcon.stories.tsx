import { Meta, StoryObj } from '@storybook/react';
import { MapIcon, MapIconProps } from './MapIcon';

export default {
    title: 'Icon/Menu/MapIcon',
    component: MapIcon,
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
    
} as Meta<MapIconProps>

export const Default: StoryObj<MapIconProps> = {
    args: {},
   argTypes: {}
}