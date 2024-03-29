import { Tabs } from "@mantine/core";
import { IconSettings, IconListDetails } from "@tabler/icons-react";

import Controls from "./toolbox/Controls";
import Settings from "./toolbox/Settings";
import { useThemeStore } from "../store/theme.store";

import classes from "./Toolbox.panel.module.css";

const ToolboxPanel = (props: any) => {
  // const { dir } = useContext(ThemeContext);

  const dir = useThemeStore((state: any) => state.dir);

  return (
    <>
      <div dir={dir}>
        <Tabs defaultValue="settings" className="text-xs" variant="outline">
          <Tabs.List>
            <Tabs.Tab
              value="controls"
              data-cy="controls-tab"
              className="text-xs"
              leftSection={<IconListDetails size={14} />}
            >
              Controls
            </Tabs.Tab>
            <Tabs.Tab value="settings" data-cy="settings-tab" leftSection={<IconSettings size={14} />}>
              Settings
            </Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="controls" pt="xs" className={classes.toolboxPanelControl}>
            <Controls></Controls>
          </Tabs.Panel>
          <Tabs.Panel value="settings" pt="xs" className={classes.toolboxPanelControl}>
            <Settings></Settings>
          </Tabs.Panel>
        </Tabs>
      </div>
    </>
  );
};

export default ToolboxPanel;
