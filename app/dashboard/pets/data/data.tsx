import {
  CheckCircledIcon,
  CrossCircledIcon,
  QuestionMarkCircledIcon,
  StopwatchIcon
} from "@radix-ui/react-icons"

export const statuses = [
  {
    value: "PENDING",
    label: "未申请",
    icon: StopwatchIcon,
  },
  {
    value: "APPROVED",
    label: "已批准",
    icon: CheckCircledIcon,
  },
  {
    value: "REJECTED",
    label: "已拒绝",
    icon: CrossCircledIcon,
  },
  {
    value: "SUSPENDED",
    label: "已暂停",
    icon: QuestionMarkCircledIcon,
  },
]

