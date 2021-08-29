import React, { useEffect } from 'react';

const useGetOuterRef = (callback: () => void) => {
    const nodeRef = React.useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handler = (e: Event) => {
            if (nodeRef?.current && !nodeRef.current.contains(e.target as HTMLDivElement)) {
                callback();
            }
        };

        document.addEventListener("mousedown", handler);

        return () => {
            document.removeEventListener("mousedown", handler);
        };
    }, [callback]);

    return nodeRef;
}

export default useGetOuterRef;