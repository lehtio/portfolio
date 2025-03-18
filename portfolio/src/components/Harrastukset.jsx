import React from 'react';

const Vapaaehtoishommat = [ 
    {
        title: "Varapuheenjohtaja",
        organisation: "Algo ry",
        description: "Toimin vuoden 2024 ajan Algo ry: varapuheenjohtajana. Koska kilta on vain muutaman vuoden ikäinen, pestiini kuului paljon tulevaisuuden suunnittelua, hallinnon sujuvoittamista sekä yhteistyön rakentamista muiden tahojen kanssa. Näiden lisäksi työstin paljon killan hallinnollisia dokumentteja sekä sidosryhmien yhteistyötä", 
        time: "2024"
    },
    {
        title: "Kansainvälisyysvastaava",
        organisation: "Algo ry",
        description: " Autoin killan jäseniä kansainvälistymiseen liittyvissä asioissa kuten vaihto-opintojen ja kotimaan opintojen yhteen sovittamisessa sekä kommunikoin ja edistin kansainvälisyyttä yhdessä it-tiedekunnan kansainvälisyysvastaavan kanssa.",
        time: "2024"
    },
    {
        title: "Sotilaskotisisar",
        organisation: "Sotilaskotiyhdistys",
        description: "Sotilaskotisisarena työskentelin vapaaehtoisena Tikkakosken sotilaskodissa.",
        time:"2024-2025"
    },
    {
        title: "Group Leader",
        organisation: "SLUSH",
        description: "Toimin ryhmän vetäjänä SLUSH-tapahtumassa meeting arealla. Tehtäviini kuului ryhmän ohjaaminen ja huolehtiminen siitä, että ryhmäni jäsenet ovat tietoisia työtehtävistämme ja että saamme työmme hoidetuksi ajallaan ja oikein. Ryhmämme tehtäviin kuului meeting arean kävijöiden ohjaaminen, kokousten organisointi ja aikataulutus sekä teknisten ongelmien ratkaiseminen",
        time:"2023"
    },

    

    
];

export default function Harrastukset() {
    return (
        <div className="harrastukset">
        
        <p>Olen ollut jo nuoresta pitäen kiinnostunut yhteiskunnallisista asioista ja päätynyt vapaaehtoistoimintaan jo ala-asteen lopussa. Tämä harrastus ei kuitenkaan jäänyt vain 
            lapsuuteen ja varhaisnuoruuteen, vaan kulkee edelleen osana normaalia arkea erilaisissa muodoissa. 
        </p>

        <div className="vapaaehtoishommat">
            {Vapaaehtoishommat.map((homma, index) => (
                <div key={index} className="homma">
                    <div className="homma-info">
                        <h3>{homma.title}</h3>
                        <p>{homma.organisation}</p>
                        <p>{homma.description}</p>
                        <p>{homma.time}</p>
                    </div>
                </div>
            ))}
            </div>
        </div>
       
    );
    }