import { UserImagesUser } from ".";

export default {
  title: "Components/UserImagesUser",
  component: UserImagesUser,
  argTypes: {
    style: {
      options: ["avatar", "check", "monogram"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    style: "avatar",
    styleCheckClassName: {},
    initialClassName: {},
    text: "A",
  },
};
