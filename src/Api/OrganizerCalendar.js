import axios from "axios";
import { getJwtToken } from "./OrganizerAuth";

const API_URL = "https://localhost:7117/calendar";

const token = 'eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTUxMiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoic3RyaW5nIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjpbIkFkbWluIiwiVXNlciJdLCJleHAiOjE2OTA5ODUyNTd9.P-5zSl-ANF0strEHNHL15B46RaxMe8uwPPjZGfHBAJuUjJ8l2gWc2NdBITqdcbkmH_cDBAdPNqCUkUuRvZd4uw';

export function getCalendar() {
    return axios.get('https://localhost:7117/calendar', {
        headers: {
        Authorization: 'Bearer ' + getJwtToken(),
        }
    });
};


//will be used later when implemented httponly cookies safely
// export function getCalendar() {
//     return axios.get('https://localhost:7117/calendar', {
//         withCredentials: true,
//     });
// };
