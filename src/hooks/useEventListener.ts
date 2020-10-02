import { useRef, useEffect, RefObject } from "react";

/*
https://usehooks.com/
https://usehooks-typescript.com/use-event-listener/
*/

export default function useEventListener<T extends HTMLElement = HTMLDivElement>(
    eventName: string,
    handler: Function,
    element?: RefObject<T>
) {
    // Create a ref that stores handler
    const savedHandler = useRef<Function>();
    // Update ref.current value if handler changes.
    // Pass it in useEffect for to prevent re-run every render
    useEffect(() => {
        savedHandler.current = handler;
    }, [handler]);
    useEffect(
        () => {
            const targetElement: T | Window = element?.current || window;
            if (!(targetElement && targetElement.addEventListener)) {
                return;
            }
            // Create event listener that calls handler function stored in ref
            const eventListener = (event: Event) => {
                if (!!savedHandler.current) {
                    savedHandler.current(event);
                }
            };
            targetElement.addEventListener(eventName, eventListener);
            // Remove event listener on cleanup
            return () => {
                targetElement.removeEventListener(eventName, eventListener);
            };
        },
        // Re-run if eventName or element changes
        [eventName, element]
    );
}
