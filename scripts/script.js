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