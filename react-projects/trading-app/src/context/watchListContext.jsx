import { createContext, useEffect, useState } from "react";

export const WatchListContext = createContext()

export const WatchListContextProvider = (props) => {
    const [watchList, setWatchList] = useState(
        JSON.parse(localStorage.getItem("watchList")) || ["GOOGL", "MSFT", "AMZN"]
    )
    useEffect(() => {
        localStorage.setItem("watchList", JSON.stringify(watchList))
    }, [watchList])

    const addStock = stock => {
        if (watchList.indexOf(stock) === -1) {
            setWatchList(currWatchList => {
                return [...currWatchList, stock]
            })
        }
    }

    const deleteStock = stock => {
        setWatchList(currWatchList => {
            return currWatchList.filter(watchListStock => watchListStock !== stock)
        })
    }

    const watchListValues = {
        watchList,
        addStock,
        deleteStock
    }

    return <WatchListContext.Provider value={watchListValues}>{props.children}</WatchListContext.Provider>
}