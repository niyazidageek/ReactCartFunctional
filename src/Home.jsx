import React from 'react';
import ItemCard from './ItemCard';
import data from './data';


const Home = () => {
    return (
        <>
            <h1 className='text-center'>All items</h1>
            <div className="container pt-5">
                <div className="row justify-content-center">

                {
                    data.map((item, index)=>{
                        const {id, title, price, img, description} = item
                        return(
                            <ItemCard
                            key={index}
                            img={img}
                            price={price}
                            id={id}
                            title={title}
                            description={description}
                            item={item} />
                        )
                    })
                }
                    

                </div>
            </div>
        </>
    );
}

export default Home;
