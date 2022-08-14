export const fetchCountries = async () => {
  
    let countries = ["United States", "Austria", "Chile"];
    
    for(let country of countries) {
        
        const url = `https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&prop=revisions&titles=${country}&formatversion=2&rvprop=content&rvslots=*`;
        const res = await fetch(url);
        if (res.ok) {
            const data = await res.json();
            console.log(data);
        } else {
            const err = await res.json();
            throw err.message;
        }
    };
}
