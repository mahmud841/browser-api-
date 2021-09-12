const getCookie = name => {
    const cookie = document.cookie;
    const allCookie = cookie.split('; ');
    const findCookie = allCookie.find (c => c.includes(name));
if(findCookie){
    'country=HK'
    const cookieNamevalue = findCookie.split('= '); 
    return cookieNamevalue[1]}; 
}