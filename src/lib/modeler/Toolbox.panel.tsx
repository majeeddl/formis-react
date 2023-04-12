import { Tabs } from "@mantine/core";
import { IconSettings, IconListDetails } from "@tabler/icons-react";

import { useThemeStore } from "../../store/theme.store";
import Controls from "./toolbox/Controls";
import Settings from "./toolbox/Settings";

const ToolboxPanel = () => {
  // const { dir } = useContext(ThemeContext);

  const dir = useThemeStore((state: any) => state.dir);

  return (
    <>
      <div dir={dir}>
        <Tabs defaultValue="controls" className="text-xs">
          <Tabs.List>
            <Tabs.Tab
              value="controls"
              data-cy="controls-tab"
              className="text-xs"
              icon={<IconListDetails size={14} />}
            >
              Controls
            </Tabs.Tab>
            <Tabs.Tab
              value="settings"
              data-cy="settings-tab"
              icon={<IconSettings size={14} />}
            >
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

export default ToolboxPanel;
