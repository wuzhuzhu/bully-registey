import { StateDisabledWrapper } from ".";

export default {
  title: "Components/StateDisabledWrapper",
  component: StateDisabledWrapper,
  argTypes: {
    stateProp: {
      options: ["enabled", "focused", "pressed", "hovered", "disabled"],
      control: { type: "select" },
    },
    configuration: {
      options: ["icon-only", "label-only", "label-icon"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    labelText: "Label",
    stateProp: "enabled",
    configuration: "icon-only",
    selected: true,
    className: {},
    labelTextClassName: {},
  },
};
