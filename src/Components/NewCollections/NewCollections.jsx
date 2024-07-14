import React from 'react'
import "./NewCollections.css"
import new_collection from "../Assets/new_collections"
import Item from "../Item/Item"

const NewCollections = () => {
  return (
    <div className = "new-collections">
      <h1>NEW ARRIVALS</h1>
      <div className="collections">
        {new_collection.map((item,i)=> {
            return <Item key={i} id={item.id} name={item.name} image={item.image} price={item.price}/>
        })}
      </div>
    </div>
  )
}

export default NewCollections
