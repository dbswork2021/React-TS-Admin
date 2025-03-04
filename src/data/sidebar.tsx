export interface ISidebarInfo {
  title: string;
  path: string;
  isActive?: boolean;
  items?: ISidebarInfo[];
}

export const sidebarList: ISidebarInfo[] = [
  {
    title: "首页",
    path: "/",
    isActive: true,
  },
  {
    title: "参数设置",
    path: "/setting",
  },
  {
    title: "会员管理",
    path: "/member",
  },
  {
    title: "借款列表",
    path: "/borrow",
  },
  {
    title: "提现列表",
    path: "/withdraw",
  },
  {
    title: "还款列表",
    path: "/repay",
  },
  {
    title: "使用帮助",
    path: "/help",
  },
  {
    title: "文档设置",
    path: "/documents",
  },
  {
    title: "订单状态",
    path: "/order",
  },
];
