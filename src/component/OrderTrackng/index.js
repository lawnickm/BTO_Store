import React from 'react'

const OrderTracking = () => {
    return (
        <>
            <section id="order_tracking" className="ptb-100">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 offset-lg-3">
                    <div className="order_tracking_wrapper">
                        <h4>Order Tracking</h4>
                        <p>To track your order please enter your Order ID in the box below and press the "Track" button.</p>

                            <form action="#!">
                                <div className="form-group">
                                    <label htmlFor="order_ID">Order ID</label>
                                    <input type="text" id="order_ID" className="form-control" placeholder="Found in your order Confirmation email" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="billing_email">Billing Email</label>
                                    <input type="text" id="billing_email" className="form-control" placeholder="Enter Your Email Address" />
                                </div>
                                <div className="order_track_button">
                                    <button type="submit" className="theme-btn-one btn-black-overlay btn_md">Track</button>
                                </div>
                            </form>
                    </div>
                </div>
            </div>
        </div>
    </section>  
        </>
    )
}

export default OrderTracking
