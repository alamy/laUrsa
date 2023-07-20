import { Meta, StoryObj } from '@storybook/react';
import { Hexagon, HexagonProps } from './Hexagon';

export default {
    title: 'Icon/Menu/Hexagon',
    component: Hexagon,
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
    
} as Meta<HexagonProps>

export const Default: StoryObj<HexagonProps> = {
    args: {},
   argTypes: {}
}