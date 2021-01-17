import {isSingIn,login,exit, storage,profile,user} from "./stacks"
import {writable,readable,derived,get} from "svelte/store";
import {v4} from "uuid";

const createRouter = _=>{
    const {subscribe} = readable(window.location.pathname,(set)=>{
        let test = setInterval(_=>set(window.location.pathname))
        return ()=>clearInterval(test);
    })
    return {subscribe}
}


export const router = createRouter();

const createlogin = _=>{
    const {subscribe,set} = writable(isSingIn())
    return {subscribe,start:()=>set(true),end:()=>set(false)}
}

export const isLogin = createlogin();

export const btnLogin = derived(isLogin,$islogin=>$islogin===false?login:exit)

export const auth = derived(isLogin,$login=>$login===true?user():false);

export const authProfile = derived(isLogin,$login=>$login===true?profile().toJSON():false);

export const authName = derived(isLogin,$login=>$login===true?profile().toJSON().name:false);

export const authImage = derived(isLogin,$login=>$login===true?profile().toJSON().image[0].contentUrl:false);

export const authDescription = derived(isLogin,$login=>$login===true?profile().toJSON().description:false);

export const authStorage = derived(isLogin,$islogin=>$islogin===true?storage:false);

const createFiles = _=>{
    const {subscribe} = readable([],(set)=>{
        let files = [];
        storage.listFiles(name=>{files.push(name);return true}).then(e=>set(files));
    })
    return {subscribe}
}

export const Files = createFiles();

const createStorage = _=>{
    const {subscribe,update} = writable([]);
    return {
        subscribe,
        add:(data)=>update(old=>{
            old.push([data,v4()]);
            return old;
        }),
        del:(id)=>update(old=>old.filter(({1:taskid})=>taskid!==id)),
        edit:(id,data)=>update(old=>old.map(e=>{
            let {1:idT} = e;
            if(idT===id){
                let {title,descripcion} = data;
                e[0].title = title;
                e[0].descripcion = descripcion
            }
            return e;
        }))
    }
}

export const Tasks = createStorage();