import { useItemStore } from "../store/item.store";
import Form, { FormModeEnums } from "../components/form/Form";
import { useFormStore } from "../store/form.store";

const FormPanel = () => {
  // useEffect(() => {
  //   console.log("items changes for right panel");
  //   console.log(items);
  // }, [items]);
  const _items = useFormStore((state: any) =>
    state.items
      .filter((item: any) => item.parent == null)
      .sort((a: any, b: any) => a.y - b.y)
  );

  return (
    <>
      <Form mode={FormModeEnums.edit} items={_items}></Form>
    </>
  );
};

export default FormPanel;
