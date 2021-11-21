import { useRef, useEffect } from "react";

const useWithFirstMountEffect = (fInitialRender, fNotInitialRender, deps) => {

    const initialRender = useRef(true);
    
    useEffect(() => {
        if(initialRender.current){
            fInitialRender()
            initialRender.current = false;
        } else {    
            fNotInitialRender()
        }
    }, deps);
}

export default useWithFirstMountEffect;