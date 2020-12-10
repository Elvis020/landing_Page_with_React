import {useLayoutEffect, useState} from 'react';

const useWindowPosition = (id) => {
    const [animation, setAnimation] = useState(false);
    useLayoutEffect(() => {
        function updatePosition(){
            const myOffSetHeight = window.document.getElementById(id).offsetHeight;
            if(window.pageYOffset > (myOffSetHeight * .7)){
                setAnimation(true)
            }
        }
        window.addEventListener('scroll', updatePosition);
        updatePosition();


        // Clean Up Function
        return (
            () => window.removeEventListener('scroll',updatePosition)
        )
    }, [id])
    return animation;
}

export default useWindowPosition
