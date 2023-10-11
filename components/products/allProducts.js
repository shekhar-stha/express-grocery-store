import React, { useState } from 'react'
import useSWR from 'swr';
import Error from '../popups/error';
import Loading from '../popups/loading';
import Link from 'next/link';
import ProductCard from './productCard';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function AllProducts() {
    const [displayedProducts, setDisplayedProducts] = useState(12);

    const { data, error } = useSWR('/api/staticdata', fetcher);

    if (error) {
        return (
            <Error />
        );
    }

    if (!data) {
        return (
            <Loading />
        );
    }


    const products = JSON.parse(data);

    const shownProducts = products.slice(0, displayedProducts);

    const uniqueGenres = [...new Set(products.map(product => product.genre))];
    console.log(uniqueGenres);

    const handleViewMore = () => {
        setDisplayedProducts(displayedProducts + 8);
    };

    const handleViewLess = () => {
        setDisplayedProducts(displayedProducts - 8);
    }
    return (
        <section className=" mt-5">
            <div className="container">
                <h3 className='header'>All Products</h3>
                <div className="products-container-row pb-5">
                    {shownProducts?.map((product) => {
                        return (
                            <Link href={`/product/${product?.id}`} key={product?.id}>

                                <ProductCard
                                    img={product?.img}
                                    name={product?.name}
                                    category={product?.genre}
                                    id={product?.id}
                                    key={product?.id}
                                />

                            </Link>
                        );
                    })}
                </div>
                {displayedProducts >= 12 && (
                    <div className="d-flex justify-content-center">
                        <button className="btn btn-primary me-2" onClick={handleViewMore}>
                            View More
                        </button>

                        {
                            displayedProducts > 12 && (
                                <button className="btn btn-primary ms-2" onClick={handleViewLess}>
                                    View Less
                                </button>
                            )
                        }
                    </div>
                )}
            </div>
        </section>
    )
}
