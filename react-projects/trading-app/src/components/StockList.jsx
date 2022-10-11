import React, {useState, useEffect} from 'react'
import { BsFillCaretDownFill, BsFillCaretUpFill } from 'react-icons/bs'

import finnHub from "../apis/finnHub"

const StockList = () => {
    const [stock, setStock] = useState([])
    const [watchList, setWatchList] = useState(["GOOGLE", "MFST", "AMZN"])

    const changeColor = (change) => {
        return change > 0 ? "success" : "danger"
    }

    const changeIcon = (change) => {
        return change > 0 ? <BsFillCaretUpFill /> : <BsFillCaretDownFill />
    }

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
        <div>
            <table className='table hover mt-5'>
                <thead style={{color: "rgb(79, 89, 102)"}}>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Last</th>
                        <th scope="col">Chg</th>
                        <th scope="col">Chg%</th>
                        <th scope="col">High</th>
                        <th scope="col">Low</th>
                        <th scope="col">Open</th>
                        <th scope="col">Pclose</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        stock.map(stock => (
                            <tr className='table-row' key={stock.symbol}>
                                <th scope='row'>{stock.symbol}</th>
                                <td>{stock.data.c}</td>
                                <td className={`text-${changeColor(stock.data.d)}`}>
                                    {stock.data.d}
                                    {changeIcon(stock.data.d)}
                                </td>
                                <td className={`text-${changeColor(stock.data.dp)}`}>
                                    {stock.data.dp}
                                    {changeIcon(stock.data.dp)}
                                </td>
                                <td>{stock.data.h}</td>
                                <td>{stock.data.l}</td>
                                <td>{stock.data.o}</td>
                                <td>{stock.data.pc}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default StockList