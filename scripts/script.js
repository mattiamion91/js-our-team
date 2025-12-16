const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];
/*
//setUp

const outputTest = document.getElementById('team-list')

//mi creo una var che accumulera gli elementi output

let outputList = ''

//prova output ciclando arr di obj

for (let index = 0; index < teamMembers.length; index++) {
  //estreapolo un membro alla volta
  const singleMember = teamMembers[index];
  //invremento il contenuto dell'output
  outputList = outputList + `<li>${singleMember.name} ${singleMember.role} ${singleMember.email} ${singleMember.img}</li>`

}
//stampo la stringa completa in html usando innerhtml

outputTest.innerHTML = outputList
*/

//seleziono container

const teamContainer = document.querySelector(".team-container");

//seleziono elmenti form

const formField = document.getElementById("member-form");
const nameField = document.getElementById('name');
const roleField = document.getElementById('role');
const emailField = document.getElementById('email')
const imgField = document.getElementById('img');

// chiamo funzione per renderizzare la lista mebri
renderTeam(teamMembers, teamContainer);

// gestione di aggiunta nuovo membro
formField.addEventListener("submit", addMember);


//funzione che fa iul rendering completo delle card dei membri del team

function renderTeam(arrTeam, elementOutput) {
  //var che avvumula elementi output
  let cards = '';
  //output di prova che cicla arr di obj
  for (let index = 0; index < arrTeam.length; index++) {
    const memberTeam = arrTeam[index];
    //gni giro ad incremento il contenuto output
    cards += createMemberCard(memberTeam);
  }
  // inseriamo la stringa completa che innerHTML trasformerà, nell'elemento di output
  elementOutput.innerHTML = cards;
}

// funzione che genera la card ricevendo oggetto dal quale prendere le info
function createMemberCard(memebrObj) {
  
  const card = `
    <div class="team-card col-sm-12 col-md-6 col-lg-4 p-0 border border-white border-5">
            <div class="card-image team-img">
                <img class="img-fluid" src="${memebrObj.img}" alt="${memebrObj.name}" />
            </div >
        <div class="card-text text-white p-2">
            <h4><strong>${memebrObj.name}</strong></h4>
            <h6>${memebrObj.role}</h6>
            <a href="mailto:${memebrObj.email}">${memebrObj.email}</a>
        </div>
    </div >
        `;

  return card
}

// funzione di gestione della creazione nuovo membro (gestione invio form)
function addMember(event) {

    // preveniamo comportamento di base form
    event.preventDefault();

    // recupero i valori dei campi
    const name = nameField.value;
    const role = roleField.value;
    const email = emailField.value;
    const img = imgField.value;

    // creo il nuovo oggetto del membo del team
    const newMember = {
        name,
        role,
        email,
        img
    }

    // aggiorniamo i dati (array di oggetti)
    teamMembers.push(newMember);

    // reset campi form
    event.target.reset();

    // aggiorniamo la pagina
    // chiamo funzione per renderizzare la lista mebri
    renderTeam(teamMembers, teamContainer);

}

