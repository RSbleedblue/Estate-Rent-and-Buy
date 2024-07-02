const EstateData = [
    {
        "id": 1,
        "image": "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "price": 2095,
        "propertyName": "Palm Harbor",
        "address": "2699 Greenway Vallery, Florida, LA",
        "beds": 3,
        "bathrooms": 2,
        "area": "5 x 7 M²"
    },
    {
        "id": 2,
        "image": "data:image/jpeg;base64,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",
        "price": 3500,
        "propertyName": "Sunset Villa",
        "address": "1234 Beachside Ave, Miami, FL",
        "beds": 4,
        "bathrooms": 3,
        "area": "6 x 8 M²"
    },
    {
        "id": 3,
        "image": "https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "price": 1800,
        "propertyName": "Mountain Retreat",
        "address": "789 Hilltop Rd, Denver, CO",
        "beds": 2,
        "bathrooms": 1,
        "area": "4 x 6 M²"
    },
    {
        "id": 4,
        "image": "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "price": 2750,
        "propertyName": "City Loft",
        "address": "5678 Downtown St, New York, NY",
        "beds": 2,
        "bathrooms": 2,
        "area": "5 x 6 M²"
    },
    {
        "id": 5,
        "image": "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "price": 4200,
        "propertyName": "Lakeside Cottage",
        "address": "4321 Lakeview Dr, Austin, TX",
        "beds": 5,
        "bathrooms": 4,
        "area": "7 x 10 M²"
    },
    {
        "id": 6,
        "image": "https://images.pexels.com/photos/2079246/pexels-photo-2079246.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "price": 1950,
        "propertyName": "Suburban Home",
        "address": "3456 Elm St, Springfield, IL",
        "beds": 3,
        "bathrooms": 2,
        "area": "6 x 7 M²"
    },
    {
        "id": 7,
        "image": "https://www.architectandinteriorsindia.com/cloud/2021/11/15/FARM--(1).jpg",
        "price": 3100,
        "propertyName": "Luxury Condo",
        "address": "9101 Uptown Blvd, Seattle, WA",
        "beds": 3,
        "bathrooms": 3,
        "area": "5 x 8 M²"
    },
    {
        "id": 8,
        "image": "https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "price": 2600,
        "propertyName": "Country Estate",
        "address": "123 Country Lane, Nashville, TN",
        "beds": 4,
        "bathrooms": 3,
        "area": "7 x 9 M²"
    },
    {
        "id": 9,
        "image": "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "price": 1500,
        "propertyName": "Cozy Bungalow",
        "address": "6789 Forest Dr, Portland, OR",
        "beds": 2,
        "bathrooms": 1,
        "area": "4 x 5 M²"
    },
    {
        "id": 10,
        "image": "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "price": 3700,
        "propertyName": "Beachfront Paradise",
        "address": "456 Ocean Blvd, Malibu, CA",
        "beds": 4,
        "bathrooms": 3,
        "area": "6 x 9 M²"
    },
    {
        "id": 11,
        "image": "https://images.pexels.com/photos/210617/pexels-photo-210617.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "price": 2300,
        "propertyName": "Forest Cabin",
        "address": "789 Pine Rd, Boulder, CO",
        "beds": 3,
        "bathrooms": 2,
        "area": "5 x 7 M²"
    },
    {
        "id": 12,
        "image": "https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "price": 2850,
        "propertyName": "Urban Studio",
        "address": "123 Main St, San Francisco, CA",
        "beds": 1,
        "bathrooms": 1,
        "area": "3 x 4 M²"
    },
    {
        "id": 13,
        "image": "https://images.pexels.com/photos/271654/pexels-photo-271654.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "price": 4900,
        "propertyName": "Island Villa",
        "address": "456 Island View, Honolulu, HI",
        "beds": 6,
        "bathrooms": 5,
        "area": "8 x 10 M²"
    },
    {
        "id": 14,
        "image": "https://content.jdmagicbox.com/comp/delhi/j5/011pxx11.xx11.240118170725.n8j5/catalogue/urban-venue-noida-sector-16-noida-farm-house-on-rent-ze6hyif7we.jpg",
        "price": 3200,
        "propertyName": "Farmhouse",
        "address": "789 Country Rd, Des Moines, IA",
        "beds": 4,
        "bathrooms": 3,
        "area": "6 x 8 M²"
    },
    {
        "id": 15,
        "image": "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "price": 2100,
        "propertyName": "Suburban Cottage",
        "address": "123 Elmwood St, Phoenix, AZ",
        "beds": 3,
        "bathrooms": 2,
        "area": "5 x 6 M²"
    },
    {
        "id": 16,
        "image": "https://www.paranych.com/uploads/benefits-penthouse-living-main-image.png",
        "price": 3700,
        "propertyName": "Penthouse Suite",
        "address": "567 Skyline Ave, Miami, FL",
        "beds": 3,
        "bathrooms": 3,
        "area": "7 x 8 M²"
    },
    {
        "id": 17,
        "image": "https://content.jdmagicbox.com/comp/delhi/n4/011pxx11.xx11.230901180123.u5n4/catalogue/royal-imperial-farms-and-events-noida-sector-135-noida-photographers-izex15xpq0-250.jpg",
        "price": 2550,
        "propertyName": "City Townhouse",
        "address": "789 Urban Rd, Chicago, IL",
        "beds": 3,
        "bathrooms": 2,
        "area": "5 x 7 M²"
    },
    {
        "id": 18,
        "image": "https://images.pexels.com/photos/210617/pexels-photo-210617.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "price": 2750,
        "propertyName": "Coastal Home",
        "address": "123 Seaside Blvd, Miami, FL",
        "beds": 4,
        "bathrooms": 3,
        "area": "6 x 9 M²"
    },
    {
        "id": 19,
        "image": "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "price": 3000,
        "propertyName": "Downtown Apartment",
        "address": "456 City Center, Dallas, TX",
        "beds": 2,
        "bathrooms": 2,
        "area": "5 x 6 M²"
    },
    {
        "id": 20,
        "image": "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "price": 2900,
        "propertyName": "Hilltop Mansion",
        "address": "789 Hillcrest Dr, Los Angeles, CA",
        "beds": 5,
        "bathrooms": 4,
        "area": "8 x 10 M²"
    }
]
export default EstateData;