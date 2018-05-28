declare module '*.svg'
declare module '*.png'
declare module '*.jpg'
declare module "*.json" {
    const value: IDealersFetchResult;
    export default value;
}

interface IDealersFetchResult {
    "zipcode": string,
    "location": {
        "lat": number,
        "lon": number,
    },
    "dealers": Array<{ "data": ISearchResultData }>
}
interface ISearchResultData {
    "companyID": number,
    "name": string,
    "phone1": string,
    "email": string,
    "addressLine1": string,
    "addressLine2": string,
    "city": string,
    "state": string,
    "country": string,
    "zipcode": string,
    "weekHours": {
        "mon": string,
        "tue": string,
        "wed": string,
        "thu": string,
        "fri": string,
        "sat": string,
        "sun": string
    },
    "certifications": Array<("Installation Pro" | "Commercial Pro" | "Residential Pro" | "Service Pro")>
}

interface IGenericState {
    [x: string]: any
}
interface IContentState extends IGenericState {
    commercial: boolean,
    installation: boolean,
    residential: boolean,
    service: boolean
}
interface IFilterListItemProps {
    text: string
}
interface ISearchFilterProps {
    dealers: number,
    zipcode: number,
    handler: React.ChangeEventHandler<HTMLInputElement>
}