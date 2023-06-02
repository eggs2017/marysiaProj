przepisy_j = [
	{
  	nazwa : "przepis1",
    opis :" cudowny przepis na kisiel",
    skladniki : [
    						{ nazwa: 'woda' , ilosc: 4 , jedn: "litr", } ,
                			{ nazwa: 'sol',	ilosc: 3 , jedn: "g"} 
                ]
	},
  {
  	nazwa : "przepis2",
    opis : "Cudowny przepis na budyń domowy",
     skladniki : [
    				{ nazwa: 'mleko' , ilosc: 0.4 , jedn: "l"} ,
                	{ nazwa: 'cukier',	ilosc: 3 , jedn: "g"} ,
                    { nazwa: 'śmietana',	ilosc: 20 , jedn: "g"} ,
                ],
	sposob_przygotownaia: 'wez jajko i zmieszaj z cukrem dojel mleko cieple',
	pict_file: 'zdj/mufinka.jpg'
	}
]

function getPrzepis(nazwa, przepisy){
	for(var id in przepisy){
  	if(przepisy[id].nazwa == nazwa){
    	return przepisy[id]
    }
  }
}
function createHtmlSkadniki(skladniki, idDiv){
 var html =""
	for (var id in skladniki){
  	html +=  skladniki[id]["nazwa"] + "  " + skladniki[id]["ilosc_powielona"] + " " + skladniki[id]["jedn"]+  "</br>"
  }
  div = document.getElementById(idDiv);
  div.innerHTML = html 
}

function powielSkladniki(skladniki, powiel){
	for (var id in skladniki){
  	skladniki[id]["ilosc_powielona"] =( skladniki[id]["ilosc"] * powiel).toFixed(2)
    
  }
}

function powielSkladnikiHtml(przepisy, nazwa, powiel, id){
	var przepis = getPrzepis(nazwa, przepisy)
  
  
  div = document.getElementById("przepis_nazwa_div");
  div.innerHTML = przepis["opis"]
  
	var skladniki = przepis["skladniki"]
	powielSkladniki(skladniki,powiel)
	createHtmlSkadniki(skladniki, id)  
}

function przelicz(przepisVal){
	const powielDiv = document.getElementById('powiel_div');
	let powiel = Number(powielDiv.value);
	if(powiel == 0)
		powiel = 1

	console.log("powiel x "  +  powiel)
	powielSkladnikiHtml(przepisy_j, przepisVal, powiel , 'skladniki_div')
}