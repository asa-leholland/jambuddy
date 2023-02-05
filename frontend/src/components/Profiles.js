import React from "react";
import ProfileCard from './partials/Card'  
import axios from "axios";
import { Grid } from '@mui/material';
import './css/Profiles.css'

const baseURL = "https://cors-anywhere.herokuapp.com/https://dbajamteam.pythonanywhere.com/api/users/";

export default function Profiles(){
    const [profiles, setProfiles] = React.useState([]);

    // const getData = async () => {
    //     const {data} = await axios.get(baseURL);
    //     setProfiles(data);
    // }

    // React.useEffect(() => {
    //     getData();
    //     }, []);

    return(
    <Grid container spacing={2}>
        {tempProfiles.map((profile, i) => (
            <Grid item key={i} xs={12} sm={6} md={4} lg={3}>
                <ProfileCard profile={profile} />
            </Grid>
        )
    )}
    </Grid>
    )   

}
const tempProfiles = [
    {
    "id": 1,
    "username": "test1",
    "password": "test2",
    "lastlogin": "2023-01-29T05:00:00Z",
    "fname": "jabba",
    "lname": "hutt",
    "street": "123",
    "street2": null,
    "city": "slc",
    "state": "ut",
    "zipcode": "12345",
    "phone": "808080001",
    "email": "hi@hi.com",
    "photo": null,
    "note": null,
    "created": "2023-01-29T05:00:00Z"
    },
    {
    "id": 5,
    "username": "jsmith",
    "password": "123",
    "lastlogin": "2023-01-29T05:00:00Z",
    "fname": "John",
    "lname": "Smith",
    "street": "123 Main St",
    "street2": null,
    "city": "Anytown",
    "state": "CA",
    "zipcode": "12345",
    "phone": "555-555-5555",
    "email": "john.smith@example.com",
    "photo": null,
    "note": null,
    "created": "2023-01-29T05:00:00Z"
    },
    {
    "id": 6,
    "username": "jdoe",
    "password": "123",
    "lastlogin": "2023-01-29T05:00:00Z",
    "fname": "Jane",
    "lname": "Doe",
    "street": "456 Park Ave",
    "street2": null,
    "city": "Anytown",
    "state": "CA",
    "zipcode": "67890",
    "phone": "555-555-5555",
    "email": "jane.doe@example.com",
    "photo": null,
    "note": null,
    "created": "2023-01-29T05:00:00Z"
    },
    {
    "id": 7,
    "username": "bjonny",
    "password": "123",
    "lastlogin": "2023-01-29T05:00:00Z",
    "fname": "Bob",
    "lname": "Johnson",
    "street": "789 Elm St",
    "street2": null,
    "city": "Anytown",
    "state": "NY",
    "zipcode": "09876",
    "phone": "555-555-5555",
    "email": "bob.johnson@example.com",
    "photo": null,
    "note": null,
    "created": "2023-01-29T05:00:00Z"
    },
    {
    "id": 8,
    "username": "swilly",
    "password": "123",
    "lastlogin": "2023-01-29T05:00:00Z",
    "fname": "Samantha",
    "lname": "Williams",
    "street": "321 Oak St",
    "street2": null,
    "city": "Anytown",
    "state": "FL",
    "zipcode": "54321",
    "phone": "555-555-5555",
    "email": "samantha.williams@example.com",
    "photo": null,
    "note": null,
    "created": "2023-01-29T05:00:00Z"
    },
    {
    "id": 9,
    "username": "mbrown",
    "password": "123",
    "lastlogin": "2023-01-29T05:00:00Z",
    "fname": "Michael",
    "lname": "Brown",
    "street": "654 Pine St",
    "street2": null,
    "city": "Anytown",
    "state": "TX",
    "zipcode": "67890",
    "phone": "555-555-5555",
    "email": "michael.brown@example.com",
    "photo": null,
    "note": null,
    "created": "2023-01-29T05:00:00Z"
    },
    {
    "id": 10,
    "username": "ajones",
    "password": "123",
    "lastlogin": "2023-01-29T05:00:00Z",
    "fname": "Ashley",
    "lname": "Jones",
    "street": "987 Cedar St",
    "street2": null,
    "city": "Anytown",
    "state": "IL",
    "zipcode": "13579",
    "phone": "555-555-5555",
    "email": "ashley.jones@example.com",
    "photo": null,
    "note": null,
    "created": "2023-01-29T05:00:00Z"
    },
    {
    "id": 11,
    "username": "jmiller",
    "password": "123",
    "lastlogin": "2023-01-29T05:00:00Z",
    "fname": "Joshua",
    "lname": "Miller",
    "street": "246 Birch St",
    "street2": null,
    "city": "Anytown",
    "state": "PA",
    "zipcode": "24680",
    "phone": "555-555-5555",
    "email": "joshua.miller@example.com",
    "photo": null,
    "note": null,
    "created": "2023-01-29T05:00:00Z"
    },
    {
    "id": 12,
    "username": "jdavis",
    "password": "123",
    "lastlogin": "2023-01-29T05:00:00Z",
    "fname": "Jessica",
    "lname": "Davis",
    "street": "369 Maple St",
    "street2": null,
    "city": "Anytown",
    "state": "OH",
    "zipcode": "36912",
    "phone": "555-555-5555",
    "email": "jessica.davis@example.com",
    "photo": null,
    "note": null,
    "created": "2023-01-29T05:00:00Z"
    },
    {
    "id": 13,
    "username": "jgarcia",
    "password": "123",
    "lastlogin": "2023-01-29T05:00:00Z",
    "fname": "Jacob",
    "lname": "Garcia",
    "street": "159 Willow St",
    "street2": null,
    "city": "Anytown",
    "state": "NC",
    "zipcode": "15935",
    "phone": "555-555-5555",
    "email": "jacob.garcia@example.com",
    "photo": null,
    "note": null,
    "created": "2023-01-29T05:00:00Z"
    },
    {
    "id": 14,
    "username": "aroddd",
    "password": "123",
    "lastlogin": "2023-01-29T05:00:00Z",
    "fname": "Amanda",
    "lname": "Rodriguez",
    "street": "753 Oak St",
    "street2": null,
    "city": "Anytown",
    "state": "WA",
    "zipcode": "753",
    "phone": "555-555-5555",
    "email": "amanda.rodriguez@example.com",
    "photo": null,
    "note": null,
    "created": "2023-01-29T05:00:00Z"
    }
    ]