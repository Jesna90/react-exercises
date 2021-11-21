import { useRef, useEffect } from "react";



const useSkipMountEffect = (f, deps) => {

    const initialRender = useRef(false);

    useEffect(() => {
        if (initialRender.current) f();
        else initialRender.current = true;
    }, deps);

}

export default useSkipMountEffect;