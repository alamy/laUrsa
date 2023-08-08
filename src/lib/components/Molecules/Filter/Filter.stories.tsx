import { Meta, StoryObj } from '@storybook/react';
import { Filter, FiltertProps } from './Filter';

export default {
    title: 'Molecules/Filter',
    component: Filter,
    args: {
        text: 'Label',
        size: 'md',
        disable: false,
        error: false,
        opcoes: ['todos' , 'exemplo1' , 'exemplo2']
    },
    argTypes: {
      }
} as Meta<FiltertProps>

export const Default: StoryObj<FiltertProps> = {
    args: {},
    argTypes: {}
}