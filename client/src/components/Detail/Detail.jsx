import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../../actions";

const Detail = (props) => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getDetail(props.match.params.id))
    },[dispatch])

    const poke = useSelector((state) => state.detail)

    return(
        <div>
            {
                <div>
                    <h1>Soy {poke.name}</h1>
                </div> 
            }
        </div>
    )
}

export default Detail