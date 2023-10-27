// This file contains all the custom React Hooks re-used in this project. 
//
// 1. Click Outside to close Hook
import { useEffect, useRef } from "react";

export const useClickOutside=(handler)=>{
    let domNode = useRef();

    useEffect(()=>{
        let maybeHandler = (event)=>{
            if(!domNode.current.contains(event.target)){
                handler();
            }};
        
        document.addEventListener("mousedown",maybeHandler);
        // Remove the Handler after the function runs.
        return ()=> {
            document.removeEventListener("mousedown", maybeHandler)
        }
    })
    return domNode
}

