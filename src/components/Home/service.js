import React from 'react';
import { Link } from 'gatsby';
import Title from '../globals/title';
import Background from '../../images/top-clutch.png';
import { FaBeer } from 'react-icons/fa';
import { FaBacon } from 'react-icons/fa';
import { FaMap } from 'react-icons/fa';
import { FaSlidersH } from 'react-icons/fa';


var sectionStyle = {
  width: "100%",
  height: "100%",
  backgroundImage: `url(${Background})`
};

export default function Service() {
    return (
        <section className="py-5 service" style={ sectionStyle }>
            <div className="container">
                <Title title="Our Service" />
            </div>
            <div className="service_bg">
                <div className="container">
                    <div className="row">
                        <div className="col-11 col-sm-12 mx-auto text-center service_all">
                            <div className="row">
                                <div className="col-sm-4 col-md-3 mx-auto text-center card_content">
                                    <div className="card">
                                      <div className="service-icon">
                                        <FaBacon />
                                      </div>
                                      <div className="card-body">
                                        <h5 className="card-title">Finance Planning</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                      </div>
                                    </div>
                                    <div className="second_num">
                                        <p>2</p>
                                    </div>
                                </div>
                                <div className="col-sm-4 col-md-3 mx-auto text-center card_content">
                                    <div className="card">
                                      <div className="service-icon">
                                        <FaMap />
                                      </div>
                                      <div className="card-body">
                                        <h5 className="card-title">Tax Planning</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                      </div>
                                    </div>
                                </div>
                                <div className="col-sm-4 col-md-3 mx-auto text-center card_content">
                                    <div className="card">
                                      <div className="service-icon">
                                        <FaSlidersH />
                                      </div>
                                      <div className="card-body">
                                        <h5 className="card-title">Share Market</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                      </div>
                                    </div>
                                    <div className="third_num">
                                        <p>3</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="white_bg"></div>
            </div>

        </section>
    )
}
