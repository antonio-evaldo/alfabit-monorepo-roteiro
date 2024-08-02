import type { Meta, StoryObj } from "@storybook/angular";
import { ButtonComponent } from "@alfabit/button";

const meta: Meta<ButtonComponent> = {
  component: ButtonComponent,
  title: 'Button'
};

export default meta;

type Story = StoryObj<ButtonComponent>;

export const BotaoPrimario: Story = {}
export const BotaoSecundario: Story = {}
