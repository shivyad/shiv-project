import React from 'react';
import { Link } from 'gatsby';
import Title from '../globals/title';
export default function contact() {
    return (
        <section className="contact py-5">
            <div className="container">
                <div className="row">
                    <div className="col-10 col-sm-8 col-md-6 mx-auto">
                        <Title title="Contact Us" />
                        <from>
                            {/* name */}
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" className="form-control" id="name" name="name" placeholder="shiv"/>
                            </div>
                            {/* email */}
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="text" className="form-control" id="email" name="email" placeholder="shiv@email.com"/>
                            </div>
                            {/* Description */}
                            <div className="form-group">
                                <label htmlFor="name">Description</label>
                                <textarea name="message" id="" cols="" rows="3" className="form-control">Message</textarea>
                            </div>
                        </from>
                    </div>
                </div>
            </div>
        </section>
    );
}
