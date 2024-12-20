import { deleteCookie, getCookie } from "cookies-next";

export default function getSingleCookiesCSR(name) {
    const cookie = getCookie(name);
    return cookie ? JSON.parse(cookie) : null;
}
function deleteSingleCookie(cookieName) {
        deleteCookie(cookieName);
}
export { deleteSingleCookie }
