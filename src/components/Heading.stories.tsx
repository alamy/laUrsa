import { Meta, StoryObj } from '@storybook/react';
import { Heading, HeadingProps } from './Heading';

export default {
    title: 'Components/Heading',
    component: Heading,
    args: {
        children: "Heading"
    }
} as Meta<HeadingProps>

export const Default: StoryObj<HeadingProps> = {
    args: {
        size: 'sm'
    },
    argTypes: {
        asChild: {
            table: {
                disable: true
            }
        }
    }
}

export const CustomComponent: StoryObj<HeadingProps> = {
    args: {
        asChild: true,
        children: (
            <p>Heading</p>
        )
    },
    argTypes: {
        children: {
            table: {
                disable: true
            }
        }
    }
}