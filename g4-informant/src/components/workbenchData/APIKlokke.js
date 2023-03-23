export default function APIKlokke(){
    fetch('"http://worldtimeapi.org/api/ip"', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(response => {
        return response.json();
    })
}