import React, {useState, useEffect} from 'react'

import finnHub from "../apis/finnHub"

const StockList = () => {
    const [stock, setStock] = useState([])
    const [watchList, setWatchList] = useState(["GOOGLE", "MFST", "AMZN"])

    useEffect(() => {
        let isMounted = true
        const fetchData = async () => {
            try {
                const responses = await Promise.all(
                    watchList.map(stock => {
                        return finnHub.get("/quote", {
                            params: {
                                symbol: stock
                            }
                        })
                    })
                )

                const data = responses.map(response => {
                    return {
                        data: response.data,
                        symbol: response.config.params.symbol
                    }
                })

                console.log(data);

                if (isMounted) {
                    setStock(data)
                }
            } catch (err) {
                console.log(err);
            }
        }

        fetchData()

        return () => (isMounted = false)
    }, [])

    return (
        <div>StockList</div>
    )
}

export default StockList