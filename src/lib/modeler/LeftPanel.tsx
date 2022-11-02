import { Tabs } from "@mantine/core";
import React, { useContext } from "react";
import { IconPhoto, IconMessageCircle, IconSettings , IconListDetails } from "@tabler/icons";
import { ThemeContext } from "../../store/ThemeProvider";

const LeftPanel = () => {

  const {dir } = useContext(ThemeContext)

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
            <Tabs.Tab
              value="messages"
              className="text-xs"
              icon={<IconMessageCircle size={14} />}
            >
              Messages
            </Tabs.Tab>
            <Tabs.Tab value="settings" icon={<IconSettings size={14} />}>
              Settings
            </Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="controls" pt="xs">
            Gallery tab content
          </Tabs.Panel>

          <Tabs.Panel value="messages" pt="xs">
            Messages tab content
          </Tabs.Panel>

          <Tabs.Panel value="settings" pt="xs">
            Settings tab content
          </Tabs.Panel>
        </Tabs>
      </div>
    </>
  );
};

export default LeftPanel;
