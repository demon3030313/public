async function getData(url) {
    try{ const respone = await fatch(url)
    const data = await respone.json()
 return(data)
    } catch(error){
        console.log(error)
    }
}

modul.export = {getData}