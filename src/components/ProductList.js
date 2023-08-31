import React  from 'react'

const ProductList = ({items,addToCart}) => {

    // const [first, setfirst] = useState()

  return (
    <>
       {items.map((item)=>{
        return <div key={item.id}>
            <div className="card" style={{'width': '18rem'}}>
         <img src={item.image} className="card-img-top" alt="..."/>
         <div className="card-body">
           <h5 className="card-title">{item.title}</h5>
           <p className="card-text">
             {item.description}
           </p>
           <h4>${item.price}</h4>
           <button onClick={()=>{addToCart(item)}}>Add to Cart</button>
         </div>
       </div>
        </div>  
       })}
    </>

  )
}

export default ProductList
