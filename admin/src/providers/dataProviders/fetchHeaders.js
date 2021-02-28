const fetchHeaders = () => ({ Authorization: `Bearer ${window.localStorage.getItem("token")}` });

export default fetchHeaders