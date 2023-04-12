import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { FormModeEnums } from "../components/form/Form";

export const useMainStore = create(
  devtools(
    immer((set) => ({
      mode: FormModeEnums.view,
    }))
  )
);



