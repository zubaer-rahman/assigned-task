import React from 'react';
import './MainContent.css';

const MainContent = () => {
    const style1 = {
        height: "76px", display: "flex"
    };
    const style2 ={
        display: "flex", marginLeft: "10px"
    };
    const style3 = {
        marginTop: "25px", display: "flex"
    };

    return (
        <div className="row" style={{display: "flex"}}>
            <div className="col-md-3 leftSideNav"> </div>
            <div className="col-md-9">
                <div className="row topNav"></div>
                <div className="row mainContent">
                    <div className="row" style={style1}>
                        <div className="col-md-10"><p id="text-back"><img src="./images/Vector.png" alt="" /> Back </p></div>
                        <div className="col-md-2 text-right"><p id="text-edit">Edit</p></div>
                    </div>
                    <div className="row">
                        <div className="col-md-1 left-img">
                            <img src="./images/Rectangle 73.png" alt="" />
                            <img src="./images/Rectangle 74.png" alt="" />
                            <img src="./images/Rectangle 75.png" alt="" />
                            <img src="./images/Rectangle 81.png" alt="" />
                        </div>
                        <div className="col-md-4 large-img">
                            <img src="./images/Rectangle 28.png" alt="" />
                        </div>
                        <div className="col-md-7">
                            <div className="row">
                                <div className="col-md-8">
                                    <h2 id="heading" style={{marginTop: "3px"}}>Royal ACDC Outdoor</h2>
                                    <p id="redirect">Gold Leaf Flowers <img src="./images/Vector (4).png" alt="" /></p>
                                </div>
                                <div className="col-md-4 text-right" style={{paddingRight:"30px"}}>
                                    <img src="./images/star-5.png" alt="" />
                                    <p>4.9 (2130 reviews)</p>
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <div className="col-md-3">
                                    <p>Category:Flowers</p>
                                </div>
                                <div className="col-md-3">
                                    <p>Strains: Indica</p>
                                </div>
                                <div className="col-md-3">
                                    <p>Terpenes: 10</p>
                                </div>
                                <div className="col-md-3">
                                    <p>Canabinoids: 15</p>
                                </div>
                            </div>
                            <hr style={{margin: "0px 20px 10px 0px"}} />
                            <div className="row">
                                <div className="col-md-3">
                                    <p>Cultivation:Indoor</p>
                                </div>
                                <div className="col-md-3">
                                    <p>THC: 0.5%</p>
                                </div>
                                <div className="col-md-3">
                                    <p>Batch No: B54U</p>
                                </div>
                                <div className="col-md-3">
                                    <p>Brand: Gold</p>
                                </div>
                            </div>
                            <div className="row" style={style3}>
                                <div className="col-md-0">
                                    <div className="box text-center" style={{paddingTop: "15px"}}>
                                        <img src="./images/Ellipse dot.png" alt="" />
                                        <p>Total Stock</p>
                                        <h4 style={{marginTop: "-15px"}}>100lb</h4>
                                    </div>
                                </div>
                                <div className="col-md-0 box-2">
                                    <div className="row">
                                        <div className="col-md-8">
                                            <p><img src="./images/Vector (3).png" alt="" /> Marketplace</p>
                                            <div className="row">
                                                <div className="col-md-4">
                                                    <img src="./images/allocated.png" alt="" />
                                                    <p className="bullet">Allocated</p>
                                                    <p className="bullet2">100lb</p>
                                                </div>
                                                <div className="col-md-4">
                                                    <img src="./images/Vector download.png" alt="" />
                                                    <p className="bullet">Min Qty</p>
                                                    <p className="bullet2">5lb</p>
                                                </div>
                                                <div className="col-md-4">
                                                    <img src="./images/Vector (1).png" alt="" />
                                                    <p className="bullet">Price</p>
                                                    <p className="bullet2">$600/lb</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="row">
                                                <div className="text-right" style={{margin: "-5px 10px 5px 0"}}> <img src="./images/Group 34554.png" alt="" /> </div>
                                            </div>
                                            <div className="row">
                                                <div style={{marginLeft: "10px"}}> <img src="./images/100lb.png" alt="" /> </div>
                                            </div>
                                            <div className="row" style={{display: "flex"}}>
                                                <p className="bullet3"><img src="./images/Rectangle 465.png" alt="" /> Stock </p>
                                                <p className="bullet3"><img src="./images/Rectangle 466.png" alt="" /> Allocated </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="col-md-0 box-3">
                                    <div className="row">
                                        <div className="col-md-6">
                                        <p><img src="./images/Vector (2).png" alt="" /> Auction</p>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <img src="images/allocated.png" alt="" />
                                                <p className="bullet">Allocated</p>
                                                <p className="bullet2">851lv</p>
                                            </div>
                                            <div className="col-md-6">
                                                <img src="images/Vector download.png" alt="" />
                                                <p className="bullet">TotalAuction</p>
                                                <p className="bullet2">3</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="row" style={style2}>
                                            <p className="bullet3"><img src="./images/Rectangle 465.png" alt="" /> Stock</p>                                                                      
                                            <p className="bullet3"><img src="./images/Rectangle 466.png" alt="" /> Allocated</p>                                     
                                        </div>
                                        <div className="row" style={{marginLeft: "10px"}}>
                                            <img src="./images/100lb.png" alt="" />
                                        </div>
                                    </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="row" style={{display: "flex"}}>
                            <p className="footer" id="foo1">Created 25 July, 2021</p>
                            <p className="footer" id="foo2">Posted by <b>Rasmus Christiansen</b></p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default MainContent;