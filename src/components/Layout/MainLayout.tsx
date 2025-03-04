import { NavLink, Outlet, useLocation, useNavigate } from "react-router";
import { GalleryVerticalEnd } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { ISidebarInfo, sidebarList } from "@/data/sidebar";
import { Separator } from "@/components/ui/separator";
import { useEffect, useState } from "react";
import { UserNav } from "@/components/UserNav";
import ThemeToggle from "@/components/utils/ThemeToggle";
// import {
//   Breadcrumb,
//   BreadcrumbItem,
//   BreadcrumbLink,
//   BreadcrumbList,
//   BreadcrumbPage,
//   BreadcrumbSeparator,
// } from "@/components/ui/breadcrumb";

const MainLayout = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [activePath, setActivePath] = useState("");

  useEffect(() => {
    setActivePath(pathname);
  }, [pathname]);

  const handleClick = (item: ISidebarInfo) => {
    setActivePath(item.path);
    navigate(item.path);
  };

  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "19rem",
        } as React.CSSProperties
      }
    >
      <Sidebar variant="floating">
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton size="lg" asChild>
                <NavLink to="/">
                  <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                    <GalleryVerticalEnd className="size-4" />
                  </div>
                  <div className="flex flex-col gap-0.5 leading-none">
                    <span className="font-semibold">渡鸦管理后台</span>
                    <span className="">v1.0.0</span>
                  </div>
                </NavLink>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarMenu className="gap-2">
              {sidebarList.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={item.path == activePath}>
                    <div
                      className="font-medium select-none"
                      onClick={() => handleClick(item)}
                    >
                      {item.title}
                    </div>
                  </SidebarMenuButton>
                  {item.items?.length ? (
                    <SidebarMenuSub className="ml-0 border-l-0 px-1.5">
                      {item.items.map((item) => (
                        <SidebarMenuSubItem key={item.title}>
                          <SidebarMenuSubButton
                            asChild
                            isActive={item.path == activePath}
                          >
                            <div
                              className="font-medium select-none"
                              onClick={() => handleClick(item)}
                            >
                              {item.title}
                            </div>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  ) : null}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
      <SidebarInset>
        <header className="flex justify-between items-center">
          <div className="flex h-16 shrink-0 items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
          </div>
          {/* <Breadcrumb> */}
          {/*   <BreadcrumbList> */}
          {/*     <BreadcrumbItem className="hidden md:block"> */}
          {/*       <BreadcrumbLink href="#"> */}
          {/*         Building Your Application */}
          {/*       </BreadcrumbLink> */}
          {/*     </BreadcrumbItem> */}
          {/*     <BreadcrumbSeparator className="hidden md:block" /> */}
          {/*     <BreadcrumbItem> */}
          {/*       <BreadcrumbPage>Data Fetching</BreadcrumbPage> */}
          {/*     </BreadcrumbItem> */}
          {/*   </BreadcrumbList> */}
          {/* </Breadcrumb> */}
          <div className="mr-8">
            <UserNav />
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <Outlet />
          <div className="fixed bottom-4 left-4 z-[999]">
            <ThemeToggle />
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default MainLayout;
