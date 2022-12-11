export const fetchData = async (path: string) => {
    const response = await fetch("http://127.0.0.1:5173" + path);
    return await response.json();
}