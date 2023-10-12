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
    value: "SUSPENDED",
    label: "暂缓审核",
    icon: QuestionMarkCircledIcon,
  },
  {
    value: "PENDING",
    label: "等待审核",
    icon: StopwatchIcon,
  },
  {
    value: "APPROVED",
    label: "审核通过",
    icon: CheckCircledIcon,
  },
  {
    value: "REJECTED",
    label: "审核拒绝",
    icon: CrossCircledIcon,
  },
]

