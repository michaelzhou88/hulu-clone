// Axios is a library we use to make requests to any sort of server/API endpoint
import axios from "axios";

/** base url to make requests to the movie database
 */
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});

export default instance;