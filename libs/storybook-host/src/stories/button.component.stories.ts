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

export const TertiaryButton: Story = {
  args: {
    ...PrimaryButton.args,
    variant: 'tertiary'
  }
}

export const TertiaryButtonDisabled: Story = {
  args: {
    ...TertiaryButton.args,
    disabled: true
  }
}

export const PrimaryButtonViolet: Story = {
  args: {
    ...PrimaryButton.args,
    theme: "violet"
  }
}

export const PrimaryButtonDisabledViolet: Story = {
  args: {
    ...PrimaryButtonDisabled.args,
    theme: "violet"
  }
}

export const SecondaryButtonViolet: Story = {
  args: {
    ...SecondaryButton.args,
    theme: "violet"
  }
}

export const SecondaryButtonDisabledViolet: Story = {
  args: {
    ...SecondaryButtonDisabled.args,
    theme: "violet"
  }
}

export const TertiaryButtonViolet: Story = {
  args: {
    ...TertiaryButton.args,
    theme: "violet"
  }
}

export const TertiaryButtonDisabledViolet: Story = {
  args: {
    ...TertiaryButtonDisabled.args,
    theme: "violet"
  }
}
