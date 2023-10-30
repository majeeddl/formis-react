import { useItemStore } from "../store/item.store";
import Form, { FormModeEnums } from "../components/form/Form";
import { useFormStore } from "../store/form.store";
import { useFormis } from "../hooks/formis.hook";

type TFormPanelProps = {
  useFormis: ReturnType<typeof useFormis>;
};

const FormPanel = ({ useFormis }: TFormPanelProps) => {
  return (
    <>
      <Form useFormis={useFormis}></Form>
    </>
  );
};

export default FormPanel;
