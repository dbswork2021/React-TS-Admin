import {
  ArrowDown,
  ArrowRight,
  ArrowUp,
  CheckCircle,
  CircleOff,
} from "lucide-react";

export const labels = [
  {
    value: "balance",
    label: "修改余额",
  },
  {
    value: "withdraw",
    label: "提现密码",
  },
  {
    value: "password",
    label: "登陆密码",
  },
];

export const statuses = [
  {
    value: 1,
    label: "正常",
    icon: CheckCircle,
  },
  {
    value: 0,
    label: "封禁",
    icon: CircleOff,
  },
];

export const priorities = [
  {
    label: "Low",
    value: "low",
    icon: ArrowDown,
  },
  {
    label: "Medium",
    value: "medium",
    icon: ArrowRight,
  },
  {
    label: "High",
    value: "high",
    icon: ArrowUp,
  },
];
