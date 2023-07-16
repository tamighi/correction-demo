import type { Meta, StoryObj } from "@storybook/react";

import Button from "./Button";

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  render: () => <Button color="primary">Primary</Button>,
};

export const Contained: Story = {
  render: () => <Button variant="contained">Contained Primary</Button>,
};

export const Disabled: Story = {
  render: () => <Button disabled>disabled</Button>,
};

export const ContainedDisabled: Story = {
  render: () => <Button disabled variant="contained">Contained disabled</Button>,
};
