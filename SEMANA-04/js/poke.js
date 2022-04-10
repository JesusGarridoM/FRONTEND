const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeId");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;

    fetch(url).then((res) => {
        if (res.status != "200") {
            pokeImage("../assets/pokeball.png")
        }
        else {
            return res.json();
        }
    }).then((data) => {
        console.log(data); 
        let pokeImg = data.sprites.other.home.front_default;
        let rName = data.name;
        let rNumber = data.id;
        let rHeight = data.height;
        let rWeight = data.weight;
        let rStats = data.stats;
        let rTypes = data.types;
        let rAbilities = data.abilities;
        pokeImage(pokeImg);
        funName(rName)
        funNHW(rNumber,rHeight,rWeight)
        funStats(rStats)
        funTypes(rTypes)
        funAbilities(rAbilities)
        document.getElementById(`pokeInfo`).style.visibility="visible";       
    }
    );
}

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}
const funName=(rName)=>{
    // console.log(rName)
    let name= document.getElementById("pokeName");
    name.innerHTML=rName;
}
const funNHW=(rNumber,rHeight,rWeight)=>{
    rHeight=rHeight/10

    let number= document.getElementById("pokeNum");
    let height= document.getElementById("pokeHei");
    let weight= document.getElementById("pokeWei");
    number.innerHTML=`${rNumber}`;
    height.innerHTML=`${rHeight} m`;
    weight.innerHTML=`${rWeight} lbs`; 
}
const funStats=(rStats)=>{
    // let rS01N=rStats[0].stat.name.toUpperCase();
    // let rS02N=rStats[1].stat.name.toUpperCase();
    // let rS03N=rStats[2].stat.name.toUpperCase();
    // let rS04N=rStats[3].stat.name.toUpperCase();
    // let rS05N=rStats[4].stat.name.toUpperCase();
    // let rS06N=rStats[5].stat.name.toUpperCase();
    
    let rS01V=rStats[0].base_stat;
    let rS02V=rStats[1].base_stat;
    let rS03V=rStats[2].base_stat;
    let rS04V=rStats[3].base_stat;
    let rS05V=rStats[4].base_stat;
    let rS06V=rStats[5].base_stat;
    
    // document.getElementById("pokeS01N").innerHTML=`${rS01N}`;
    // document.getElementById("pokeS02N").innerHTML=`${rS02N}`;
    // document.getElementById("pokeS03N").innerHTML=`${rS03N}`;
    // document.getElementById("pokeS04N").innerHTML=`${rS04N}`;
    // document.getElementById("pokeS05N").innerHTML=`${rS05N}`;
    // document.getElementById("pokeS06N").innerHTML=`${rS06N}`;
    
    document.getElementById("pokeS01V").innerHTML=`${rS01V}`;
    document.getElementById("pokeS02V").innerHTML=`${rS02V}`;
    document.getElementById("pokeS03V").innerHTML=`${rS03V}`;
    document.getElementById("pokeS04V").innerHTML=`${rS04V}`;
    document.getElementById("pokeS05V").innerHTML=`${rS05V}`;
    document.getElementById("pokeS06V").innerHTML=`${rS06V}`;

    for (let i = 0; i < 6; i++) {
        let por=rStats[i].base_stat;
        por=(por/255)*100

        console.log(por);

        document.getElementById(`barV0${i+1}`).style.width=`${por}%`;
    }
}
const funTypes=(rTypes)=>{
    for (let i = 0; i < rTypes.length; i++) {
        let name=rTypes[i].type.name.toLowerCase();
        document.getElementById(`type0${i+1}`).src = `../assets\\${name}.png`;
        document.getElementById(`type0${i+1}`).alt = `${name} icon`;
        document.getElementById(`type0${i+1}`).style.visibility="visible";
        
        document.getElementById(`typeText0${i+1}`).innerHTML=`${name.toUpperCase()}`;
        document.getElementById(`typeText0${i+1}`).style.display="inline"
    }
    
    for (let i = rTypes.length; i <5; i++) {
        document.getElementById(`type0${i+1}`).style.visibility="hidden";
        document.getElementById(`typeText0${i+1}`).style.display="none";
    }
}
const funAbilities=(rAbilities)=>{
    for (let i = 0; i < rAbilities.length; i++) {
        let name=rAbilities[i].ability.name;
        let slot=rAbilities[i].slot;
        name=name[0].toUpperCase() + name.slice(1);
        document.getElementById(`abiN0${i+1}`).innerHTML = `${name}`;
        document.getElementById(`abiS0${i+1}`).innerHTML = `${slot} slots`;
        document.getElementById(`abi0${i+1}`).style.display="flex"
    }
    
    for (let i = rAbilities.length; i <5; i++) {
        document.getElementById(`abi0${i+1}`).style.display="none"
    }
}