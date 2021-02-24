import React, { useEffect} from "react"
import { initAll } from "../lbh/all"

const Wrapper = ({
    children
}) => {

    useEffect(() => {
        if (typeof window !== "undefined") {
            initAll()
        }
    }, [])

    return children
}

export default Wrapper