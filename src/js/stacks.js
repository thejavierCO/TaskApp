import { isLogin } from "./data"
import { showConnect , AppConfig , UserSession } from "@stacks/connect";
import { Profile } from "@stacks/profile";
import { Storage } from '@stacks/storage';

export const appConfig = new AppConfig(["store_write","publish_data"]);
export const userSession = new UserSession({ appConfig });
export const storage = new Storage({ userSession });

export const login = ()=>{
    showConnect({
        appDetails:{
            name:"todoapp",
            icon:window.location.origin +"/icon.svg"
        },
        redirectTo:"/",
        finished:()=>{isLogin.start()}
    })
}
export const exit = ()=>{userSession.signUserOut();isLogin.end()};

export const isSingIn = ()=>userSession.isUserSignedIn();

export const user = ()=>userSession.loadUserData();

export const profile = ()=>new Profile(user().profile);

window.clearStorage = ()=>{
    storage.listFiles((name)=>{storage.deleteFile(name);return true});
}