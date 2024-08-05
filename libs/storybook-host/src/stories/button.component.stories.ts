import type { Meta, StoryObj } from "@storybook/angular";
import { ButtonComponent } from "@alfabit/button";

const meta: Meta<ButtonComponent> = {
  component: ButtonComponent,
  title: 'Button'
};

export default meta;

type Story = StoryObj<ButtonComponent>;

export const PrimaryButton: Story = {
  args: {
    text: 'Action',
    variant: 'primary',
    disabled: false
  }
}

export const PrimaryButtonDisabled: Story = {
  args: {
    ...PrimaryButton.args,
    disabled: true
  }
}

export const SecondaryButton: Story = {
  args: {
    ...PrimaryButton.args,
    variant: 'secondary'
  }
}

export const SecondaryButtonDisabled: Story = {
  args: {
    ...SecondaryButton.args,
    disabled: true
  }
}
