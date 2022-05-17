import React from "react";
import { ServicesWrapper, ServicesContent } from "./ServicesStyles";

const Services = () => (
    <ServicesWrapper>
        <h1 id="services">Services We Offer</h1>
        <ServicesContent>
            <div>
                <ul>
                    <li>
                        Landscape Design & Installation
                    </li>
                    <li>
                        Rock & Mulch Installation
                    </li>
                    <li>
                        Retaining Wall & Paver Patios
                    </li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>
                        Pond-Less Water Features
                    </li>
                    <li>
                        Garden Bed Edging
                    </li>
                    <li>
                        Spring & Fall Cleanup
                    </li>
                </ul>

            </div>
            
        </ServicesContent>
        
    </ServicesWrapper>
)

export default Services;