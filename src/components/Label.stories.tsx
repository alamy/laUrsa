import { Meta, StoryObj } from '@storybook/react';
import { Label, LabelProps } from './Label';

export default {
    title: 'Components/Label',
    component: Label,
    args: {
        children: "Label"
    }
} as Meta<LabelProps>

export const Default: StoryObj<LabelProps> = {
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

export const CustomComponent: StoryObj<LabelProps> = {
    args: {
        asChild: true,
        children: (
            <p>Label</p>
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