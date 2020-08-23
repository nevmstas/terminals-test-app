import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

export const Buyer = () =>{
    const { id } = useParams()
    const buyers = useSelector((state: any) => state.buyer.buyers)
    const [buyer, setBuyer] = useState<any>({})

    useEffect(() => {
        const buyer  = buyers.filter((b:any) => b.id === +id)
        setBuyer(buyer[0])
    }, [buyers, id])
    
    return (
        <div>{buyer.name}</div>
    )
}