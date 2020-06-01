import React from "react"

import Button from 'elements/Button'
import IconText from 'parts/IconText'

export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-auto" style={{width:350}}>
                        <IconText />
                        <p className="brand-tagline">
                            We kaboom your beuty holiday instantly and memorable.
                        </p>
                    </div>
                    <div className="col-auto mr-5">
                        <h6 className="mt-2"> For Beginners</h6>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <Button type="link" href="/register"> New Account </Button>
                            </li>
                            <li className="list-group-item">
                                <Button type="link" href="/properties"> Start Booking a Room </Button>
                            </li>
                            <li className="list-group-item">
                                <Button type="link" href="/use-payments"> Use Payments </Button>
                            </li>
                        </ul>
                    </div>
                    <div className="col-2 mr-5">
                        <h6 className="mt-2"> Explore Us</h6>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <Button type="link" href="/careers"> Our Careers </Button>
                            </li>
                            <li className="list-group-item">
                                <Button type="link" href="/privacy"> Privacy </Button>
                            </li>
                            <li className="list-group-item">
                                <Button type="link" href="/terms"> Terms & Conditions </Button>
                            </li>
                        </ul>
                    </div>
                    <div className="col-3">
                        <h6 className="mt-2"> Connect Us</h6>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <Button isExternal type="link" href="mailto:support@geligeli.com"> support@geligeli.com </Button>
                            </li>
                            <li className="list-group-item">
                                <Button isExternal type="link" href="tel:+622120051997"> (+62) 021 - 2005 -  1997 </Button>
                            </li>
                            <li className="list-group-item">
                                <span> GeliGeli - Bintara, Bekasi, ID</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col text-center copyrights">
                       &copy; Copyrights 2020 • All rights reserved • GeliGeli
                    </div>
                </div>
            </div>
        </footer>
    )
}
