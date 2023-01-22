class Instrument {
  constructor(name, section, seating) {
    this.name = name;
    this.section = section;
    this.seating = seating;
  }
}

class BandSection {
  constructor(name) {
    this.name = name;
    this.instruments = [];
  }

  addInstrument(instrument) {
    this.instruments.push(instrument);
  }

  deleteInstrument(name) {
    this.instruments = this.instruments.filter(i => i.name !== name);
  }
}

const instruments = [
  new Instrument("Flute", "Woodwinds", "Front"),
  new Instrument("Clarinet", "Woodwinds", "Middle"),
  new Instrument("Saxophone", "Woodwinds", "Back"),
  new Instrument("Trumpet", "Brass", "Front"),
  new Instrument("Trombone", "Brass", "Middle"),
  new Instrument("Tuba", "Brass", "Back"),
  new Instrument("Drums", "Percussion", "Back")
];

const woodwinds = new BandSection("Woodwinds");
const brass = new BandSection("Brass");
const percussion = new BandSection("Percussion");

instruments.forEach(instrument => {
  if (instrument.section === "Woodwinds") {
    woodwinds.addInstrument(instrument);
  } else if (instrument.section === "Brass") {
    brass.addInstrument(instrument);
  } else {
    percussion.addInstrument(instrument);
  }
});

console.log(woodwinds);
console.log(brass);
console.log(percussion);

while(true){
  let option = prompt("Please select an option: (1) Create, (2) View, (3) Delete, (4) Exit");
  switch(option) {
    case "1":
    let name = prompt("Enter the name of the instrument:");
    let section = prompt("Enter the section of the instrument:");
    let seating = prompt("Enter the seating of the instrument:");
    let newInstrument = new Instrument(name, section, seating);
    if(section === "Woodwinds"){
        woodwinds.addInstrument(newInstrument);
        console.log(name + " is added to " + section + " section.");
    }else if(section === "Brass"){
        brass.addInstrument(newInstrument);
        console.log(name + " is added to " + section + " section.");
    }else if(section === "Percussion"){
        percussion.addInstrument(newInstrument);
        console.log(name + " is added to " + section + " section.");
    }
    break;
    case "2":
    let sectionToView = prompt("Enter the section to view: (Woodwinds, Brass, Percussion)");
    if(sectionToView === "Woodwinds"){
        console.log(woodwinds);
    }else if(sectionToView ==="Brass"){
console.log(brass);
}else if(sectionToView === "Percussion"){
console.log(percussion);
}else{
console.log("Invalid Section");
}
break;
case "3":
let sectionToDelete = prompt("Enter the section to delete from: (Woodwinds, Brass, Percussion)");
let nameToDelete = prompt("Enter the name of the instrument to delete:");
if(sectionToDelete === "Woodwinds"){
woodwinds.deleteInstrument(nameToDelete);
console.log(nameToDelete + " is removed from " + sectionToDelete + " section.");
}else if(sectionToDelete === "Brass"){
brass.deleteInstrument(nameToDelete);
console.log(nameToDelete + " is removed from " + sectionToDelete + " section.");
}else if(sectionToDelete === "Percussion"){
percussion.deleteInstrument(nameToDelete);
console.log(nameToDelete + " is removed from " + sectionToDelete + " section.");
}else{
console.log("Invalid Section");
}
break;
case "4":
console.log("Exiting the app...");
process.exit();
break;
default:
console.log("Invalid option selected");
}
}

