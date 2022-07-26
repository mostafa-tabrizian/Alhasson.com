
import { createStore, createHook  } from 'react-sweet-state';
import { log } from '../../../frontend/src/components/base';

const CartStore = createStore({
    initialState: {
        items: [],
    },
    actions: {
        addOrIncreaseItem:
            (itemData) =>
            ({ setState, getState }) => {
                const currentItems = getState().items

                const exist = currentItems.find(item => itemData.id === item.id)

                if (exist) {
                    // log('exist')
                    currentItems.map(each => {
                        if (itemData.id == each.id) {
                            return {...each, count: each.count++}
                        }
                    })
                    // log(currentItems)
                    setState(
                        {
                            items: [...currentItems]
                        }
                    );
                } else {
                    // log('new')
                    setState(
                        {
                            items: [...currentItems, {id: itemData.id, count: 1}]
                        }
                    )
                }
            },

        removeOrDecreaseItem:
            (itemData) =>
            ({ setState, getState }) => {
                const currentItems = getState().items

                currentItems.map((each, index) => {
                    if (itemData.id == each.id) {
                        const nextCount = each.count--
                        
                        if (nextCount == 0) {
                            // log('remove')
                            currentItems.splice(index, 1)
                        } else {
                            // log('decrease')
                            return {...each, count: nextCount}
                        }
                    }
                })

                // log(currentItems)

                setState(
                    {
                        items: [...currentItems]
                    }
                );
            },
    },
    name: 'items',
});

const useCart = createHook(CartStore)

export default useCart