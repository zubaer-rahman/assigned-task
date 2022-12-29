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
        <div className="row">
        <div className="col leftNav">
            <div className="brand"><img src="images/Cannabis_Connector_1-removebg-preview 3.png" alt="" /></div>
            <div className="collar text-center"></div>
            <p className="grower">Grower</p>
            <ul className="nav flex-column">
                <li className="dashboard d-flex">
                    <img src="images/dashboard.png" alt="" height="18" width="18" />
                    <a href="#" className="menuText">
                      Dashboard
                    </a>
                </li>
                <div className="bg-inventory"></div>
                <li className="inventory d-flex">
                    <img src="images/inventory.png" alt="" height="19" width="20" />
                    <a href="#" className="menuText">
                      Inventory
                    </a>
                </li>
                <li className="marketplace d-flex">
                    <img id="img1" src="images/marketplace.png" alt="" height="22" width="22" />
                    <a href="#" className="menuText">
                      Marketplace
                    </a>
                    <img id="img2" src="images/right arrow.png" alt="" height="14" width="8" />
                </li>
                <li className="auction d-flex">
                    <img id="img1" src="images/auction.png" alt="" height="18" width="18" />
                    <a href="#" className="menuText">
                      Auction
                    </a>
                    <img id="img2" src="images/right arrow.png" alt="" height="14" width="8" />
                </li>
                <li className="orders d-flex">
                    <img src="images/orders.png" alt="" height="19" width="20" />
                    <a href="#" className="menuText">
                      Orders
                    </a>
                </li>
                <li className="transports d-flex">
                    <img id="img1" src="images/transports.png" alt="" height="18" width="18" />
                    <a href="#" className="menuText">
                      Transports
                    </a>
                    <img id="img2" src="images/right arrow.png" alt="" height="14" width="8" />
                </li>
                <li className="labratories d-flex">
                    <img src="images/labratories.png" alt="" height="19" width="20" />
                    <a href="#" className="menuText">
                      Labratories
                    </a>
                </li>
                <li className="transaction d-flex">
                    <img src="images/transaction.png" alt="" height="19" width="20" />
                    <a href="#" className="menuText">
                      Transaction
                    </a>
                </li>
                <li className="settings d-flex">
                    <img src="images/settings.png" alt="" height="19" width="20" />
                    <a href="#" className="menuText">
                      Settings
                    </a>
                </li>
            </ul>    
        </div>
        <div className="col RightContent">
            <div className="row topContent">
                <div className="d-flex">
                    <p>Products <span className="mx-1">/</span> <b>Add New Items- Preview</b> </p>
                    <img id="imgl" src="images/bell.png" alt="" height="23" width="23" /> 
                    <img id="imgm1" src="images/message.png" alt="" height="24" width="24" /> 
                    <img id="imgm2"  src="images/profile.png" alt="" height="40" width="40" /> 
                    <img id="imgr" src="images/exit.png" alt="" height="23" width="23" /> 
                </div>
            </div>
            <div className="row middleContent">
                <div className="row" style={style1}>
                     <div className="col-md-10"><p id="text-back"><img src="./images/Vector.png" alt="" height="16" width="16"/> Back </p></div>
                     <div className="col-md-2"><p id="text-edit">Edit</p></div>
                 </div>
                 <div className="row">
                     <div className="col-md-1 left-img">
                         <img id="leftImg1" src="./images/Rectangle 73.png" alt="" />
                         <img id="leftImg2" src="./images/Rectangle 74.png" alt="" />
                         <img id="leftImg3" src="./images/Rectangle 75.png" alt="" />
                         <img id="leftImg4" src="./images/Rectangle 81.png" alt="" />
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
            <div className="row bottomContent">
                <div className="row">
                    <div className="d-flex bottomTop">
                        <p id="bottomTopP1">Messages</p>
                        <p id="bottomTopP2">Auction</p>
                        <p id="bottomTopP3">Marketplace</p>
                        <p id="bottomTopP4">Feedback</p>
                    </div>
                    <hr id="hline" />
                    <div className="greenline"></div>
                </div>
                <div className="row">
                    <div className="col row overview">
                        <div className="row">
                            <p id="aucOver">Auction Overview</p>
                        </div>
                        <div className="row aucOver" id="live">
                            <div className="row liveTop"> <p><img src="images/livedot.png" alt="" height="4" width="4" /> Live</p></div>
                            <div className="row">
                                <div className="col-md-2">
                                    
                                </div>
                                <div className="col-md-2"></div>
                                <div className="col-md-2"></div>
                                <div className="col-md-2"></div>
                                <div className="col-md-2"></div>
                                <div className="col-md-2"></div>
                            </div>
                        </div>
                        <div className="row aucOver" id="remain">
                            <div className="row liveTop"> <p><img src="images/remainingdot.png" alt="" height="4" width="4" /> 2 days remaining </p></div>
                        </div>
                        <div className="row aucOver" id="award">
                            <div className="row liveTop"> <p><img src="images/troffy.png" alt="" height="11.17" width="11.72" /> Award </p></div>
                        </div>
                    </div>
                    <div className="col row insight"></div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default MainContent;