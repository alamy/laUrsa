import { Meta, StoryObj } from '@storybook/react';
import { Tag, TagProps } from './Tag';

export default {
    title: 'Atmomic/Tag',
    component: Tag,
    args: {
        text: 'Label',
        disable: false,
        size: 'md',
        name: 'name',
        Objeto : ['teste', 'teste2'

        ]
    },
    argTypes: {
        size:{
            options: ['sm', 'md', 'lg' ],
            control: {type: 'radio'}
        }
    }
} as Meta<TagProps>

export const Default: StoryObj<TagProps> = {
    args: {},
    argTypes: {}
}