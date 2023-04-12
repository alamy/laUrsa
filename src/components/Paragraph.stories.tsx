import { Meta, StoryObj } from '@storybook/react';
import { Paragraph, ParagraphProps } from './Paragraph';

export default {
    title: 'Components/Paragraph',
    component: Paragraph,
    args: {
        children: "Paragraph"
    }
} as Meta<ParagraphProps>

export const Default: StoryObj<ParagraphProps> = {
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

export const CustomComponent: StoryObj<ParagraphProps> = {
    args: {
        asChild: true,
        children: (
            <p>Paragraph</p>
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