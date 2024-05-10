import {serve} from 'bun'

serve({
    fetch(request){
        const url = new URL(request.url);
        if(url.pathname ==='/'){
            return new Response('hi there',{status:200})
        }else if(url.pathname ==='/login'){
            return new Response('login page',{status:200})
        }else{
            return new Response('NOt found',{status:404})
        }
    },
    port: 3000,
    hostname:'127.0.0.1'
})