import React from 'react';
import { Link } from 'gatsby';
import Title from '../globals/title';

export default function info() {
    return (
        <section className="py-5 story">
            <div className="container">
                <Title title="Our Story" />
                <div className="row">
                    <div className="col-10 col-sm-8 mx-auto text-center">
                        <p className="lead text-muted mb-5">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Voluptatem cupiditate voluptatum nostrum voluptatibus iusto
                            eos a ipsum quae consequuntur illo dolor nisi eveniet ducimus
                            nesciunt labore quod assumenda expedita praesentium, quas
                            exercitationem sit sed vero? Adipisci, deserunt nobis. Hic mollitia
                            possimus debitis delectus facere id, magni minima iure amet asperiores?
                        </p>
                        <Link to="/about/">
                            <button className="btn text-uppercase about_btn">About Page</button>
                        </Link>
                    </div>
                </div>
            </div>

        </section>
    )
}
