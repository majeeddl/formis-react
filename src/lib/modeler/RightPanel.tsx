
import { useItemStore } from "../../store/item.store";
import Form, { FormModeEnums } from "../../components/form/Form";

const RightPanel = () => {
  // useEffect(() => {
  //   console.log("items changes for right panel");
  //   console.log(items);
  // }, [items]);
  const _items = useItemStore((state:any) => state.items);

  return (
    <>
      <Form mode={FormModeEnums.edit} items={_items}></Form>
    </>
  );
};

export default RightPanel;
