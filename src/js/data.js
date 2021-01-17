import {isSingIn,login,exit, storage,profile,user} from "./stacks"
import {writable,readable,derived,get} from "svelte/store";

const createlogin = _=>{
    const {subscribe,set} = writable(isSingIn())
    return {subscribe,start:()=>set(true),end:()=>set(false)}
}

const createRouter = _=>{
    const {subscribe} = readable(window.location.pathname,(set)=>{
        let test = setInterval(_=>set(window.location.pathname))
        return ()=>clearInterval(test);
    })
    return {subscribe}
}

export const router = createRouter();

export const homeShow = derived(router,$router=>$router!=="/");

export const isLogin = createlogin();

export const btnLogin = derived(isLogin,$islogin=>$islogin===false?login:exit)

export const storageLogin = derived(isLogin,$islogin=>$islogin===true?storage:false)

export const authLogin = derived(isLogin,$login=>$login===true?profile().toJSON():false);