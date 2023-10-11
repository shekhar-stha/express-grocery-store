import React from 'react'

export default function Loading() {
    return (
        <section style={{ width: "100vw", height: "100vh" }} className='d-flex justify-content-center align-items-center'>
            <div class="spinner-grow" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </section>
    )
}
