import React, { useEffect } from "react";
import useCustomDispatch from "src/hooks/useCustomDispatch";
import { loadAll } from "src/store/main/actions";

export default function Load() {
    const dispatch = useCustomDispatch();

    useEffect(() => {
        dispatch(loadAll());
        // eslint-disable-next-line
    }, []);

    return <></>;
}
