import Nav from "./nav";
import { TooltipProvider } from "./ui/tooltip";
import { cn } from "@/lib/utils";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { sidelinks } from "@/data/sidelinks";
import { IconChevronsLeft } from "@tabler/icons-react";
import WhiteLogo from "../assets/newlogo.png";
import DarkLogo from "../assets/logo.png";
import { useTheme } from "./ui/theme-provider";
import SmallDark from "../assets/smalldark.png";
import smallWhite from "../assets/smallwhite.png";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  isCollapsed: boolean;
  setIsCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Sidebar({
  className,
  isCollapsed,
  setIsCollapsed,
}: SidebarProps) {
  const { theme, setTheme } = useTheme();
  return (
    <div
      className={cn(
        "pb-12 relative hidden lg:block border-r-2 border-r-slate-100 dark:border-r-slate-900 transition-[width]",
        className
      )}
    >
      <TooltipProvider delayDuration={0}>
        <div
          className={`px-4 py-2 flex gap-2 h-16 items-center ${
            isCollapsed ? "w-32 ml-[-30px]" : "mt-7"
          }`}
        >
          {isCollapsed &&
            (theme === "light" ? (
              <img src={smallWhite} alt="ExpTrackr logo" className="w-64 " />
            ) : (
              <img src={SmallDark} alt="ExpTrackr logo" className="w-48 " />
            ))}
          <div
            className={`flex flex-col justify-end truncate ${
              isCollapsed ? "w-0 invisible" : "w-auto visible"
            }`}
          >
            {theme === "light" ? (
              <img src={DarkLogo} alt="ExpTrackr logo" className="w-48 " />
            ) : (
              <img src={WhiteLogo} alt="ExpTrackr logo" className="w-48 " />
            )}
          </div>
        </div>
        <Separator className="mb-4" />
        <Nav isCollapsed={isCollapsed} links={sidelinks} />
      </TooltipProvider>
      <Button
        onClick={() => setIsCollapsed((prev) => !prev)}
        size="icon"
        variant="outline"
        className="rounded-full -right-5 top-1/2 absolute"
      >
        <IconChevronsLeft
          stroke={1.5}
          className={`w-5 h-5 ${isCollapsed ? "rotate-180" : ""}`}
        />
      </Button>
    </div>
  );
}
