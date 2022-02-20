import React from "react";
import { ServicesWrapper, ServicesContent } from "./ServicesStyles";

const Services = () => (
    <ServicesWrapper>
        <h1 id="services">Services We Offer</h1>
        <ServicesContent>
            <div>
                <ul>
                    <li>
                        Design / Renovating
                    </li>
                    <li>
                        Mulching
                    </li>
                    <li>
                        Rock Installation
                    </li>
                    <li>
                        Lower Branch Removal
                    </li>
                    <li>
                        Landscape Lighting
                    </li>
                    <li>
                        General Bed Maintenance &<br /> Detailing
                    </li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>
                        Spring & Fall Clean-Up
                    </li>
                    <li>
                        Pruning & Hedging
                    </li>
                    <li>
                        Leaf Removal
                    </li>
                    <li>
                        Edging
                    </li>
                    <li>
                        Retaining Walls
                    </li>
                    <li>
                        Paver Patios
                    </li>
                    <li>
                        Fertilizing
                    </li>
                </ul>

            </div>
            
        </ServicesContent>
        
    </ServicesWrapper>
)

export default Services;