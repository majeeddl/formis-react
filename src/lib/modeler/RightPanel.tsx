
import { useItemStore } from "../../store/item.store";
import Form from "../../components/form/Form";

const RightPanel = () => {
  // useEffect(() => {
  //   console.log("items changes for right panel");
  //   console.log(items);
  // }, [items]);
  const _items = useItemStore((state) => state.items);

  return (
    <>
      <Form items={_items}></Form>
    </>
  );
};

export default RightPanel;
