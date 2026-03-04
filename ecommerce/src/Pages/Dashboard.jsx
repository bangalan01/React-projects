import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '../Component/Card'
import { HiFilter } from "react-icons/hi";


const Dashboard = () => {
    const [products, setProducts] = useState([])
    const [searchKey, setSearchKey] = useState("")
    const [filterProducts, setFilterProducts] = useState([])
    const [minprice, setMinprice] = useState(0)
    const [maxprice, setMaxprice] = useState(500)
    const [brands, setBrands] = useState([])
    const [brandInput, setBrandInput] = useState()
    const [loggeddUser, setLoggedUser] = useState()

    // fetchData from api 
    async function fetchData() {
        const res = await axios.get("https://dummyjson.com/products")
        // console.log(res.data.products)
        setProducts(res.data.products)
        setFilterProducts(res.data.products)

    }

    // one time fetchData on component mount 
    // const user=JSON.parse(localStorage.getItem('user'));
    useEffect(() => {
        setLoggedUser()
        fetchData()
    }, [])

    // search products 
    // const handleSearchKey =(e)=>{
    //     e.preventDefault()
    //     const value1 = (e.target.value)
    //     console.log(value1)
    //     setSearchKey(value1)
    // console.log(searchKey,"searchKey")
    //     const filterProd = products.filter((p)=>{
    //         console.log(p.id, searchKey)
    //         return p.title.toLowerCase().includes(searchKey.toLowerCase())
    // })
    //     setFilterProducts(filterProd)
    // }


    useEffect(() => {
        const filterProd = products.filter((p) => {
            // console.log(p.id, searchKey)
            return p.title.toLowerCase().includes(searchKey.toLowerCase())
        })
        setFilterProducts(filterProd)
    }, [searchKey])

    function handleFilter() {
        // console.log("24680")
        const filterByPrice = products.filter((p) => {
            return p.price >= minPrice && p.price <= maxPrice
        })
        setFilterProducts(filterByPrice)
    }

    function getBrandName() {
        const b = products.map((p) => p.brand)
        const uniqueBrands = [...new Set(b)];
        setBrands(uniqueBrands);
    }
    // setBrands([])
    useEffect(() => {
        getBrandName()
    }, [products])

    // console.log(brands)
    function handleFilterByBrand() {
        console.log(brandInput)
        const filterByBrand = products.filter((p) => {
            console.log(p.brand)
            return p.brand === brandInput
        })
        console.log(filterByBrand)
        setFilterProducts(filterByBrand)
    }
    // console.log({ brands })

    return (
        <>
            <nav>
                <div className='ms-5 d-flex justify-content-between'>
                    <input
                        type="search"
                        // onChange={handleSearchKey}
                        onChange={(e) => setSearchKey(e.target.value)}
                        placeholder='search'
                    // value={searchKey}
                    />
                    <span className='badge rounded-pill text-bg-primary'>{filterProducts.length}</span>

                    <div>
                        <h3>{loggeddUser && (<span>{loggeddUser.name}</span>)}</h3>
                    </div>
                </div>
            </nav>
            <div className="contianer">
                < div className="row ">
                    < div className="col-md-2 bg-secondray">
                        Min price:
                        <input type='range' min={0} max={500}
                            onChange={(e) => setMinPrice(e.target.value)} />
                        Max price:
                        <input type='range' min={0} max={500}
                            onChange={(e) => setMaxPrice(e.target.value)} />
                        <button onClick={() => handleFilter()} className='btn btn-primary'><HiFilter />
                            filter</button>
                        <hr />

                        <select className="form-select"
                             onChange={(e)=>setBrandInput(e.target.value)}> 

                            <option selected>Select Brand</option>
                            {brands?.map((bName)=>(
                                <option value={bName}>{bName}</option>
                            ))} 
                        </select>
                        <button onClick={()=>handleFilterByBrand()}>Filter By Brand</button>

                        <div className='col-md-10'>
                            <div className='container'></div>
                            {products.map((prod) => (
                                <div className=''>
                                    <Card prod={prod} key={prod.id} />
                                </div>
                            ))}
                        </div>
                        {/* {brands && brands
                            .map((bName,index)=>(
                            <Card key={index} product={bName}></Card>
                        ))} */}

                        {/* <select className="form-select"
                            onChange={(e) => setBrandInput(e.target.value)} defaultValue="">
                            <option value="">Brands</option>
                            {brands && brands.map((bName, index) => (
                                <option key={bName} value={bName}>{bName}</option>
                            ))}
                        </select>
                        <button onClick={() => handleFilterByBrand()}>Filter By Brand</button>
                    </div>
                    <div className='col-md-10'></div>
                    <div className="container">
                        <div className="row">
                            {filterProducts.map((prod) => (
                                <Card prod={prod} key={prod.id} />
                            ))} */}
                        </div>
                    </div>
                </div>
        </>
    )
}

export default Dashboard
