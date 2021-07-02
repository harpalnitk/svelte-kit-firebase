import {writable} from 'svelte/store';

const uiStore = writable<{
    msg: string,
    localMsg:string,
    type:string,
    isLoading:boolean
}>({
    msg: '',
    type: 'danger',
    isLoading: false,
    localMsg:''
});

export default {
    subscribe: uiStore.subscribe,
    set: uiStore.set,
    setMsgDanger: (message) => {
        uiStore.update((store)=> {
            return {...store, msg: message, type:'danger'}
        })
    },
    setMsgDangerLoading: (message, loading) => {
        uiStore.update((store)=> {
            return {...store, msg: message, type:'danger',isLoading: loading}
        })
    },
    setMsgSuccess: (message) => {
        uiStore.update((store)=> {
            return {...store, msg: message, type:'success'}
        })
    },
    setMsgSuccessLoading: (message,loading) => {
        uiStore.update((store)=> {
            return {...store, msg: message, type:'success', isLoading:loading}
        })
    },
    setIsLoading: (loading) => {
        uiStore.update((store)=> {
            return {...store, isLoading: loading}
        })
    },
    setLocalMsg: (message) => {
        uiStore.update((store)=> {
            return {...store, localMsg: message}
        })
    },
    setLocalMsgLoading: (message,loading) => {
        uiStore.update((store)=> {
            return {...store, localMsg: message, isLoading:loading}
        })
    },
}