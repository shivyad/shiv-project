import React from 'react';
import { Link } from 'gatsby';
import Client1 from '../../images/client/client1.png';
import Client2 from '../../images/client/client4.png';
import Client3 from '../../images/client/client5.jpeg';
import Client4 from '../../images/client/client3.png';
import Client5 from '../../images/client/client2.png';

export default function Client() {
    return (
        <section className="client">
            <div className="container">
                <div className="row">
                    <div className="col-11 col-sm-11 mx-auto text-center">
                       <div className="row">
                          <div className="col-sm-2">
                             <img src={Client1} alt="client1" />
                          </div>
                           <div className="col-sm-2">
                             <img src={Client2} alt="client1" />
                          </div>
                           <div className="col-sm-2">
                             <img src={Client3} alt="client1" />
                          </div>
                           <div className="col-sm-2">
                             <img src={Client4} alt="client1" />
                          </div>
                           <div className="col-sm-2">
                             <img src={Client5} alt="client1" />
                          </div>
                           <div className="col-sm-2">
                             <img src={Client2} alt="client1" />
                          </div>
                       </div>
                    </div>
                </div>
            </div>

        </section>
    )
}
