const requestHeader = new Headers();
requestHeader.append('Content-Type', 'application/json');
requestHeader.append('Access-Control-Allow-Origin', '*');

export default requestHeader;
