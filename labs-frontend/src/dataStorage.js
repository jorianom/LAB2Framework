const tokenKey = 'token-ingesoft';

export function getAuthenticationToken(){
    return localStorage.getItem( tokenKey );
}

export function setAuthenticationToken( token = '' ){
    return localStorage.setItem( tokenKey, token );
}

export function setAuthenticationUser( token = '' ){
    return localStorage.setItem( "user", token );
}
