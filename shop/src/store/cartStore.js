
import { createStore, createHook  } from 'react-sweet-state';
import { log } from '../../../frontend/src/components/base';

const CartStore = createStore({
    initialState: {
        items: JSON.parse(localStorage.getItem('cartStore'))?.items || [],
    },
    actions: {
        addOrIncreaseItem:
            (itemData) =>
            ({ setState, getState }) => {
                const currentItems = getState().items

                const exist = currentItems.find(item => itemData.id === item.id)

                if (exist) {
                    currentItems.map(each => {
                        if (itemData.id == each.id) {
                            return {...each, count: each.count++}
                        }
                    })

                    localStorage.setItem('cartStore', JSON.stringify({items: [...currentItems]}))
                    setState({items: [...currentItems]});
                } else {
                    localStorage.setItem('cartStore', JSON.stringify({items: [...currentItems, {id: itemData.id, count: 1}]}))
                    setState({items: [...currentItems, {id: itemData.id, count: 1}]})
                }
            },

        removeOrDecreaseItem:
            (itemData) =>
            ({ setState, getState }) => {
                let currentItems = getState().items

                currentItems.map((each, index) => {
                    if (itemData.id == each.id) {
                        const nextCount = each.count--
                        
                        if (nextCount == 1) {
                            currentItems = []
                        } else {
                            return {...each, count: nextCount}
                        }
                    }
                })

                localStorage.setItem('cartStore', JSON.stringify({items: [...currentItems]}))
                setState({items: [...currentItems]});
            },
    },
    name: 'items',
});

const useCart = createHook(CartStore)

export default useCart