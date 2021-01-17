import {isSingIn,login,exit, storage} from "./stacks"
import {writable,readable,derived,get} from "svelte/store";

const createlogin = _=>{
    const {subscribe,set} = writable(isSingIn())
    return {subscribe,start:()=>set(true),end:()=>set(false)}
}

export const isLogin = createlogin();

export const btnLogin = derived(isLogin,$islogin=>$islogin===false?login:exit)

export const storageLogin = derived(isLogin,$islogin=>$islogin===true?storage:false)