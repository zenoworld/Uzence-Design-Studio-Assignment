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

export const Loading: Story = {
  args: {
    label: "Loading Input",
    placeholder: "Wait...",
    loading: true,
  },
};

export const PasswordToggle: Story = {
  args: {
    label: "Password",
    placeholder: "Enter password",
    type: "password",
    passwordToggle: true,
  },
};

export const Clearable: Story = {
  args: {
    label: "Search",
    placeholder: "Type something...",
    clearable: true,
    value: "Hello",
  },
};

export const Variants: Story = {
  render: () => (
    <div className="space-y-4">
      <InputField label="Outlined" placeholder="Outlined" variant="outlined" />
      <InputField label="Filled" placeholder="Filled" variant="filled" />
      <InputField label="Ghost" placeholder="Ghost" variant="ghost" />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4">
      <InputField label="Small" placeholder="Small" size="sm" />
      <InputField label="Medium" placeholder="Medium" size="md" />
      <InputField label="Large" placeholder="Large" size="lg" />
    </div>
  ),
};
