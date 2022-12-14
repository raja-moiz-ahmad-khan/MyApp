import { faChevronRight, faL } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
// import React, { useReducer } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { products } from "../data";
import "../styles/productsshop.css";
import ProductShop from "./ProductShop";
import ReactPaginate from "react-paginate"



const ProductsShop = () => {

   
  //for filter category and all products  
  const [data, setData] = useState(products); 

  //for category
  const [category, setCategory] = useState([]); 

  //for paginate
  const [pageNumber, setPageNumber] = useState(0);

  const productPerPage = 3;

  const pagesVisited = pageNumber * productPerPage;

  const displayProducts = data.slice(pagesVisited, pagesVisited + productPerPage).map((item)=>(
    <ProductShop item={item} key={item._id} />
  ))

  const pageCount = Math.ceil(data.length / productPerPage);

  const changePage = ({selected}) =>{
    setPageNumber(selected) //if I click page number 2 then selected is number 2
  }
  //filter and all products
  const filterResult = (catItem) => {
    const result = products.filter((curDate) => {
      return curDate.category === catItem;
    });
    setData(result);
  };

  useEffect(() => {
    // filter and all products
    const fecthData = async () => {
      const result = await axios.get("/api/category");
      setCategory(result.data);
    };
    fecthData();
  }, []);



  return (
    <div className="shop-container">
      <div className="shop-row">
        <div className="shop-col">
          <h2>Category</h2>
          <button className="shop-btn" onClick={()=>setData(products)}>All <FontAwesomeIcon icon={faChevronRight} /></button>
        {category.map((item) =>(
            //show all category if exists
            <button className="shop-btn" onClick={()=> filterResult(item.title)}>{item.title} <FontAwesomeIcon icon={faChevronRight} /></button>
        ) )}
        </div>
        <div className="shop-col">
            <div className="shop-products">
                
                {displayProducts}
                {/* {data.map((item)=>(
                    //show product card
                    <ProductShop item={item} key={item._id} />
                ))} */}
            </div>
            <div className="shop-pagination">
                <ReactPaginate 
                previousLabel={"<<"} //for previous
                nextLabel={">>"}  //for next
                pageCount={pageCount} //for page number
                onPageChange={changePage}  //for selected page, current page
                containerClassName={"paginationbttns"}//class for style
                previousLinkClassName={"previousBttn"}//class for style
                nextLinkClassName={"nextBttn"}//class for style
                disabledClassName={"paginationDisabled"}//class for style
                activeClassName={"paginationActive"}//class for style

                />
            </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsShop
