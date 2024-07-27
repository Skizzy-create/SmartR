# SmartR API: Add New User

## Route Description

The `/newUser` route allows you to add a new user to the Swastimuni app. Users can provide their personal details, including name, phone number, address, and other relevant information.

## Route Details

- **Endpoint**: `POST /api/v1/newUser`
- **Purpose**: Create a new user profile
- **Expected Input**:
  - Request Body (JSON format):
    ```json
    {
        "fullName": "John Doe",
        "phoneNumber": "1234567890",
        "aadharCard": "1234567890123456",
        "countryCode": 1,
        "address": {
            "zoneNumber": 5,
            "wardNumber": 10,
            "colonyName": "Green Valley",
            "cityName": "Springfield",
            "street": "Main Street",
            "locality": "Downtown",
            "propertyId": 12345,
            "postalCode": 67890,
            "propertyType": true
        }
    }
    ```
    - `fullName`: Full name of the user (required)
    - `phoneNumber`: User's phone number (10 digits)
    - `aadharCard`: User's Aadhar card number (16 digits)
    - `countryCode`: Numeric country code (e.g., 1 for USA)
    - `address`: User's address details, including:
      - `zoneNumber`: Zone number
      - `wardNumber`: Ward number
      - `colonyName`: Colony name
      - `cityName`: City name
      - `street`: Street name
      - `locality`: Locality
      - `propertyId`: Property ID
      - `postalCode`: Postal code
      - `propertyType`: Property type (true for commercial, false for residential)

- **Response** (if successful):
  ```json
  {
      "message": "New user created successfully!",
      "userId": "your-user-id-here"
  }
  ```
  - `userId`: Unique identifier assigned to the newly created user

- **Error Handling**:
  - If any validation errors occur (e.g., missing required fields), an appropriate error response will be sent with a status code of 500.

## Example Usage

1. **Request**:
   - Method: POST
   - URL: `http://localhost:3000/api/v1/newUser`
   - Headers: `Content-Type: application/json`
   - Body:
     ```json
     {
         "fullName": "Jane Smith",
         "phoneNumber": "9876543210",
         "aadharCard": "9876543210123456",
         "countryCode": 91,
         "address": {
             "zoneNumber": 3,
             "wardNumber": 7,
             "colonyName": "Rose Gardens",
             "cityName": "Metropolis",
             "street": "Elm Street",
             "locality": "Uptown",
             "propertyId": 67890,
             "postalCode": 12345,
             "propertyType": false
         }
     }
     ```

2. **Response**:
   ```json
   {
       "message": "New user created successfully!",
       "userId": "609d8a1f8c9a4c001f3e7b1a"
   }
   ```

---
