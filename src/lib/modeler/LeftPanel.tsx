import { Tabs } from "@mantine/core";
import React, { useContext } from "react";
import {
  IconPhoto,
  IconMessageCircle,
  IconSettings,
  IconListDetails,
} from "@tabler/icons";
// import { ThemeContext } from "../../store/ThemeProvider";
import Controls from "../../components/leftPanel/Controls";
import Settings from "../../components/leftPanel/Settings";
import { useThemeStore } from "../../store/theme.store";

const LeftPanel = () => {
  // const { dir } = useContext(ThemeContext);

  const dir = useThemeStore((state: any) => state.dir);

  return (
    <>
      <div dir={dir}>
        <Tabs defaultValue="controls" className="text-xs">
          <Tabs.List>
            <Tabs.Tab
              value="controls"
              className="text-xs"
              icon={<IconListDetails size={14} />}
            >
              Controls
            </Tabs.Tab>
            <Tabs.Tab value="settings" icon={<IconSettings size={14} />}>
              Settings
            </Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="controls" pt="xs">
            <Controls></Controls>
          </Tabs.Panel>
          <Tabs.Panel value="settings" pt="xs">
            <Settings></Settings>
          </Tabs.Panel>
        </Tabs>
      </div>
    </>
  );
};

export default LeftPanel;
