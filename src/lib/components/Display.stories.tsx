import { Meta, StoryObj } from '@storybook/react';
import { Display, DisplayProps } from './Display';

export default {
    title: 'Components/Display',
    component: Display,
    args: {
        children: "Display"
    }
} as Meta<DisplayProps>

export const Default: StoryObj<DisplayProps> = {
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

export const CustomComponent: StoryObj<DisplayProps> = {
    args: {
        asChild: true,
        children: (
            <p>Display</p>
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