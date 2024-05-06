import Axios from "axios"

function useFunction() {


    const deleteItem = async (url, _id) => {

        const { data } = await Axios.delete(url, {
            data: { _id: _id }
        })
    }
    const updateItem = async (url, item) => {

        const { data } = await Axios.put(url, item, {

        })

    }
    const updateItemById = async (url, item) => {

        const { data } = await Axios.put(url, item, {

        })

    }
    const addItem = async(url,item) => {
        const {data}=await Axios.post(url,item)
    }


    return { deleteItem, updateItem, addItem,updateItemById }
}
export default useFunction