import React from 'react';
import { Link } from 'gatsby';
import Testimo1 from '../../images/testimonial/img-1.jpg';
import Testimo2 from '../../images/testimonial/img-4.jpg';

export default function Testimonial() {
    return (
        <section className="py-5 testimonial-top">
            <div className="container">
                <div className="row">
                    <div className="col-11 col-sm-11 mx-auto text-center">
                       <div className="row">
                          <div className="mx-auto col-md-6">
                            <div id="testimonial-slider" className="owl-carousel">
                                <div>
                                    <div className="testimonial">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec ante orci. Mauris libero justo, tincidunt.
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rhoncus elit pulvinar, lobortis libero a, venenatis massa. Mauris varius, nisi sit.
                                        </p>
                                    </div>
                                    <div className="testimonial-review">
                                        <img src={Testimo1} alt="" />
                                        <h4 className="testimonial-title">
                                            kristiana
                                            <small>Web Developer</small>
                                        </h4>
                                    </div>
                                </div>
                            </div>
                          </div>
                          <div className="mx-auto col-md-6">
                            <div id="testimonial-slider" className="owl-carousel">
                                <div>
                                    <div className="testimonial">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec ante orci. Mauris libero justo, tincidunt.
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rhoncus elit pulvinar, lobortis libero a, venenatis massa. Mauris varius, nisi sit.
                                        </p>
                                    </div>
                                    <div className="testimonial-review">
                                        <img src={Testimo2} alt="" />
                                        <h4 className="testimonial-title">
                                            Steve Tomas
                                            <small>Web Developer</small>
                                        </h4>
                                    </div>
                                </div>
                            </div>
                          </div>
                       </div>
                    </div>
                </div>
            </div>

        </section>
    )
}
