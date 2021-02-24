import React, { useEffect} from "react"

const Wrapper = ({
    children
}) => {

    useEffect(() => {
        if (typeof window !== "undefined") {
            require("../lbh/all").initAll()
        }
    }, [])

    return children
}

export default Wrapper