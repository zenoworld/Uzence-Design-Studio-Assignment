import type { Meta, StoryObj } from "@storybook/react";
import { InputField } from "./InputField";

const meta: Meta<typeof InputField> = {
  title: "Components/InputField",
  component: InputField,
};
export default meta;

type Story = StoryObj<typeof InputField>;

export const Default: Story = {
  args: {
    label: "Username",
    placeholder: "Enter your username",
  },
};

export const Disabled: Story = {
  args: {
    label: "Email",
    placeholder: "Enter your email",
    disabled: true,
  },
};

export const Invalid: Story = {
  args: {
    label: "Password",
    placeholder: "Enter password",
    invalid: true,
    errorMessage: "Password too short",
  },
};
