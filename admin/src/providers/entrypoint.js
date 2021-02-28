const hostname = window.location.hostname
let hostnameParts = hostname.split('.');
hostnameParts.shift();
const entrypoint = "https://api." + hostnameParts.join('.') + "";

export default entrypoint
