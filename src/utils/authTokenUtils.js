import Cookies from 'js-cookie';

// Function to set the auth token in cookies with a specified cookie name
function setAuthTokenInCookies(cookieName, token, expiresInDays = 7) {
    // Set the auth token in cookies with Bearer prefix
    Cookies.set(cookieName, `Bearer ${token}`, { expires: expiresInDays });
}

// Function to get the auth token from cookies using a specified cookie name
function getAuthTokenFromCookies(cookieName) {
    // Retrieve the auth token from cookies
    const authToken = Cookies.get(cookieName); // Use the provided cookie name

    // Return the token value (or null if it doesn't exist)
    return authToken || null; // If token doesn't exist, return `null`
}

export { getAuthTokenFromCookies, setAuthTokenInCookies }