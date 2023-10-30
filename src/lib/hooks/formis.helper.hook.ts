


export const useFormisHelper = () => {

    const addNewItem = (items: any[], item: any) => {
        return [...items, item]
    }

    const deleteItem = (items: any[], index: number) => {
        return items.filter((item, i) => i !== index)
    }

    const updateItem = (items: any[], index: number, item: any) => {
        return items.map((it, i) => i === index ? item : it)
    }

    return {
        addNewItem,
        deleteItem,
        updateItem
    }
}