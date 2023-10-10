import { CardStateLayer } from ".";

export default {
  title: "Components/CardStateLayer",
  component: CardStateLayer,
  argTypes: {
    state: {
      options: ["enabled", "pressed", "focused", "hovered", "dragged"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    state: "enabled",
    className: {},
    stateLayerClassName: {},
  },
};
