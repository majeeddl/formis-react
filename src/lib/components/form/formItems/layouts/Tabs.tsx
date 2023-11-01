import React, { useState } from "react";
import { Tabs as MantineTabs } from "@mantine/core";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState<string | null>("first");
  return (
    <>
      <MantineTabs value={activeTab} onChange={setActiveTab}>
        <MantineTabs.List>
          <MantineTabs.Tab value="first">First tab</MantineTabs.Tab>
          <MantineTabs.Tab value="second">Second tab</MantineTabs.Tab>
        </MantineTabs.List>

        <MantineTabs.Panel value="first">First panel</MantineTabs.Panel>
        <MantineTabs.Panel value="second">Second panel</MantineTabs.Panel>
      </MantineTabs>
    </>
  );
};

export default Tabs;
