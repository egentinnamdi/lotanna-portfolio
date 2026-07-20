import { projects } from "@/lib/data"
import { Tabs } from "@/lib/types"
import { cn } from "@/lib/utils"

export default function ProjectTab({
  currentTab,
  handleTab,
}: {
  currentTab: Tabs
  handleTab: (clickedTab: Tabs) => void
}) {
  console.log(Tabs.mobile, "hello")
  return (
    <div>
      <div className="flex justify-between font-lora font-semibold text-gray-500 lg:w-1/3 lg:text-xl">
        <TabItem
          title="All"
          isActive={Tabs.all === currentTab}
          projectsLength={projects.length}
          handleTabChange={() => handleTab(Tabs.all)}
        />
        <TabItem
          title="Mobile Apps"
          isActive={Tabs.mobile === currentTab}
          projectsLength={
            projects.filter((item) => item.type === Tabs.mobile).length
          }
          handleTabChange={() => handleTab(Tabs.mobile)}
        />
        <TabItem
          title="Web Apps"
          isActive={Tabs.webapp === currentTab}
          projectsLength={
            projects.filter((item) => item.type === Tabs.webapp).length
          }
          handleTabChange={() => handleTab(Tabs.webapp)}
        />
        <TabItem
          title="Website"
          isActive={Tabs.website === currentTab}
          projectsLength={
            projects.filter((item) => item.type === Tabs.website).length
          }
          handleTabChange={() => handleTab(Tabs.website)}
        />
      </div>
    </div>
  )
}

function TabItem({
  handleTabChange,
  title,
  projectsLength,
  isActive,
}: {
  isActive: boolean
  handleTabChange: () => void
  title: string
  projectsLength: number
}) {
  return (
    <div
      className={cn(
        "relative cursor-pointer transition-all duration-300 ease-in-out hover:scale-105",
        isActive && "text-black"
      )}
      onClick={handleTabChange}
    >
      <span>{title}</span>
      <span className="absolute -top-2 -right-3 text-base">
        {projectsLength}
      </span>
    </div>
  )
}
