import * as React from "react";
import data from "../dealers.json";

import "./Content.css";



const SearchFilter = (props: ISearchFilterProps) => (
    <div id="search_filter">
        <p id="search_filter_headline">
            <b>{props.dealers} dealers in {props.zipcode}</b>
        </p>
        <span className="vertical_bar desktop_only" />
        <p id="search_filter_title">
            <b>Filter Results</b>
            <div id="drop_down">
                ▼
            </div>
        </p>
        <ul>
            <li>
                <input name="service" id="service-checkbox" type="checkbox" onChange={props.handler} /><label htmlFor="service-checkbox"/> Service
            </li>
            <li>
                <input name="installation" id="installation-checkbox" type="checkbox" onChange={props.handler} /> <label htmlFor="installation-checkbox" /> Installation
            </li>
            <li>
                <input name="residential" id="residential-checkbox" type="checkbox" onChange={props.handler} /><label htmlFor="residential-checkbox" /> Residential
            </li>
            <li>
                <input name="commercial" id="commercial-checkbox" type="checkbox" onChange={props.handler} /><label htmlFor="commercial-checkbox" /> Commercial <img src="assets/tool-tip-icon-filtering.png" className="icon" />
            </li>
        </ul>
    </div>
);

const SearchResult = (props: {"data": ISearchResultData}) => (
    <div className="search_result">
        <div className="name">
            {props.data.name}
        </div>
        <hr className="desktop_only" />
        <p className="phone">
            <img src="/assets/phone-icon-desktop.png" className="icon rounded desktop_only" />
            <img src="/assets/phone-icon-mobile.png" className="icon mobile_only" />
            <span className="mobile_only">Tap to call</span> {props.data.phone1.replace(/-/g,".")}
        </p>

        <p className="subtitle">
            <i>Can't talk now? Click below to send an e-mail.</i>
        </p>

        <p className="contact_pro">
            <img src="/assets/email-icon.png" className="icon" />
            Contact this Pro
        </p>

        <ul className="hours no-dots">
            <li><b>Business Hours</b></li>
            <li>{props.data.weekHours.mon ? "Weekdays " + props.data.weekHours.mon : "Weekdays CLOSED"}</li>
            <li>{props.data.weekHours.sat ? "Saturdays " + props.data.weekHours.sat : "Saturdays CLOSED"}</li>
            <li>{props.data.weekHours.sun ? "Sundays " + props.data.weekHours.sun : "Sundays CLOSED"}</li>
        </ul>

        <ul className="certifications">
            {props.data.certifications.map( (x, i) => {
                let filename: string = "";
                switch (x) {
                    case "Installation Pro": { filename = "star-installation-pro.png"; break; }
                    case "Commercial Pro": { filename = "users-commercial-pro.png"; break; }
                    case "Residential Pro": { filename = "home-residential-pro.png"; break; }
                    case "Service Pro": { filename = "gear-service-pro.png"; break; }
                }
                return (
                    <li key={`icon${i}`}>
                        <img src={"/assets/" + filename} className="icon" /> {x}
                    </li>
                );
            })}
        </ul>
    </div>
);

class Content extends React.Component<{}, IContentState> {
    // To reference the JSON data
    private localData: Array<{ "data": ISearchResultData }>;

    // Changes in SearchFilter should re-fetch and display SearchResults from dealers.json
    constructor(props: object) {
        super(props);
        this.localData = JSON.parse(JSON.stringify(data.dealers));
        this.state = {
            commercial: false,
            installation: false,
            residential: false,
            service: false,
        };
        this.onChangeFilters = this.onChangeFilters.bind(this);
    }

    public onChangeFilters(e: React.ChangeEvent<HTMLInputElement>): void {
        const {name, checked} = e.target;
        this.setState({
            [name]: checked
        });
    }

    public render() {
        let renderData: Array<{ "data": ISearchResultData }> = this.localData;
        if (this.localData) {
            const { commercial, installation, residential, service } = this.state;

            if (commercial) {
                renderData = renderData.filter(x => x.data.certifications.indexOf("Commercial Pro") > -1);
            }
            if (installation) {
                renderData = renderData.filter(x => x.data.certifications.indexOf("Installation Pro") > -1);
            }
            if (residential) {
                renderData = renderData.filter(x => x.data.certifications.indexOf("Residential Pro") > -1);
            }
            if (service) {
                renderData = renderData.filter(x => x.data.certifications.indexOf("Service Pro") > -1);
            }
        }
        return (
            <main>
                <SearchFilter dealers={7} zipcode={28226} handler={this.onChangeFilters} />
                <div id="search_result_container">
                        { renderData &&
                            renderData.slice(0,3).map( (x, i) => <SearchResult data={x.data} key={`result${i}`} /> )
                        }
                </div>
            </main>
        );
    }
}

export default Content;