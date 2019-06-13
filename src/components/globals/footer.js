import React from 'react'

export default function footer() {
    return (
        <footer className="footer py-3">
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto col-md-6 text-yellow text-center text-capitalize">
                        <h5 class="cust_copy">all rights reserved &copy;{new Date().getFullYear().toString()} </h5>
                    </div>
                </div>
            </div>
        </footer>
    )
}
