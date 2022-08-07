
import { createStore, createHook  } from 'react-sweet-state';
import { log } from '../../../frontend/src/components/base';

const UserStore = createStore({
    initialState: {
        userDetail: {},
    },
    actions: {
        setUser:
            (userDetail) =>
            ({ setState, getState }) => {
                setState({userDetail});
            },

        resetUser:
            () =>
            ({ setState, getState }) => {
                setState({})
            }
    },
    name: 'userDetail',
});

const useUser = createHook(UserStore)

export default useUser