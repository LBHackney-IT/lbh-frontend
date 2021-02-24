import React, { useEffect} from "react"
import { initAll } from "../lbh/all"

const Wrapper = ({
    children
}) => {

    useEffect(() => {
        initAll()
    }, [])

    return children
}

export default Wrapper