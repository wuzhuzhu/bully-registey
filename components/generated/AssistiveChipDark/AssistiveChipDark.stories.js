import { AssistiveChipDark } from ".";

export default {
  title: "Components/AssistiveChipDark",
  component: AssistiveChipDark,
  argTypes: {
    style: {
      options: ["outlined", "elevated"],
      control: { type: "select" },
    },
    configuration: {
      options: ["label-only", "label-favicon", "label-brand-icon", "label-icon"],
      control: { type: "select" },
    },
    stateProp: {
      options: ["enabled", "focused", "pressed", "hovered", "dragged", "disabled"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    labelText: "Label",
    style: "outlined",
    configuration: "label-only",
    stateProp: "enabled",
    className: {},
  },
};
