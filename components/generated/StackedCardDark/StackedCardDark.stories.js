import { StackedCardDark } from ".";

export default {
  title: "Components/StackedCardDark",
  component: StackedCardDark,
  argTypes: {
    style: {
      options: ["filled", "bully", "outlined", "elevated"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    style: "filled",
    className: {},
    cardStateLayerStateEnabledClassName: {},
    mediaTextContentClassName: {},
    headerClassName: {},
    text: "中国恶霸犬血统认证",
    mediaClassName: {},
    titleClassName: {},
    text1: "绿巨人浩克 Hulk Smash",
    subheadClassName: {},
    text2: "虚拟犬类培育中心 Dizzy Camp",
    supportingTextClassName: {},
    assistiveChipDarkLabelText: "欧阳锋",
  },
};
