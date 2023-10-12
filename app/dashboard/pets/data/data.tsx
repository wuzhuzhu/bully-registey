import {
  ArrowDownIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  CheckCircledIcon,
  CircleIcon,
  CrossCircledIcon,
  QuestionMarkCircledIcon,
  StopwatchIcon,
} from "@radix-ui/react-icons"

export const labels = [
  {
    value: "bug",
    label: "Bug",
  },
  {
    value: "feature",
    label: "Feature",
  },
  {
    value: "documentation",
    label: "Documentation",
  },
]

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

