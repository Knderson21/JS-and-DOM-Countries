class Country {
    constructor(name, lang, greeting, colors, image) {
        this.name = name;
        this.lang = lang;
        this.greeting = greeting;
        this.colors = colors;
        this.image = image;
    }
    ChangeColors(){
        document.querySelector("#Color1").style.backgroundColor = this.colors[0];

        document.querySelector("#Color2").style.backgroundColor = this.colors[1];
    
        document.querySelector("#Color3").style.backgroundColor = this.colors[2];
    }
}
let usa = new Country("USA", "English", "Hello World!", ["red", "white", "blue"], "https://cdn.shopify.com/s/files/1/0824/6367/products/variant_image_f47a3744-7e24-42f0-85b3-517a0c269de8_grande.png?v=1600305715");
let mexico = new Country("Mexico", "Spanish", "Hola mundo!", ["red", "white", "green"], "https://cdn.shopify.com/s/files/1/0993/6346/products/MexicoFlagSquare_400x.png?v=1623093363");
let china = new Country("China", "Chinese", "Ni hao shijie!", ["red", "yellow", "yellow"], "https://ccnnetwork.cn/wp-content/uploads/2020/08/116873922_168138311469482_808365428830954890_o.png");
let southKorea = new Country("South Korea", "Korean", "annyeonghaseyo woldeu-ibnida!", ["white", "red", "blue"], "https://cdn-icons-png.flaticon.com/512/552/552051.png");
let japan = new Country("Japan", "Japanese", "Kon'nichiwa sekai!", ["white", "red", "red"], "https://www.factsjustforkids.com/images/japan-flag.png")


function SwitchCountry() {
    let input = document.querySelector("#CountryList");
    console.log(input.value);
    let country;

    if (input.value === "USA") {
        //set country to usa 
        country = usa;
    }
    else if (input.value === "Mexico") {
        country = mexico;
    }
    else if (input.value === "China") {
        country = china;
    }
    else if (input.value === "South Korea") {
        country = southKorea;
    }
    else if (input.value === "Japan") {
        country = japan;
    }
    country.ChangeColors();
    document.querySelector("#CountryName").innerText = country.name;
    document.querySelector("#OfficialLanguage").innerText = (`Language: ${country.lang}`);
    document.querySelector("#HelloWorld").innerText = country.greeting;
    document.querySelector("#Image").setAttribute("src", country.image);

}
