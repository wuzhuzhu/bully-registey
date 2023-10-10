import { SegmentedButton } from ".";

export default {
  title: "Components/SegmentedButton",
  component: SegmentedButton,
  argTypes: {
    segments: {
      options: ["five", "two_1", "three_1", "four"],
      control: { type: "select" },
    },
    density: {
      options: ["two", "zero", "three", "one"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    segments: "five",
    density: "two",
    className: {},
    buildingBlocksLabelText: "Label",
    stateDisabledWrapperLabelText: "Label",
  },
};
