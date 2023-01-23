//created class of instruments w constructor that accepts properties of name, section, seating
class Instrument {
  constructor(name, section, seating) {
    this.name = name;
    this.section = section;
    this.seating = seating;
  }
}
//created class of band sections w/ constructor that accepts properties of name, instruments array
class BandSection {
  constructor(name) {
    this.name = name;
    this.instruments = [];
  }
//method to add, or push, instruments to array
  addInstrument(instrument) {
    this.instruments.push(instrument);
  }
//method to delete by iterating thru & filtering out those that are not the instrument to be removed
  deleteInstrument(name) {
    this.instruments = this.instruments.filter(i => i.name !== name);
  }
}
//creation of array of instruments
const instruments = [
  new Instrument("Flute", "Woodwinds", "Front"),
  new Instrument("Clarinet", "Woodwinds", "Middle"),
  new Instrument("Saxophone", "Woodwinds", "Back"),
  new Instrument("Trumpet", "Brass", "Front"),
  new Instrument("Trombone", "Brass", "Middle"),
  new Instrument("Tuba", "Brass", "Back"),
  new Instrument("Drums", "Percussion", "Back")
];
//creation of band section objects
const woodwinds = new BandSection("Woodwinds");
const brass = new BandSection("Brass");
const percussion = new BandSection("Percussion");
//foreach method iterates thru instrument array & adds to respective band section
instruments.forEach(instrument => {
  if (instrument.section === "Woodwinds") {
    woodwinds.addInstrument(instrument);
  } else if (instrument.section === "Brass") {
    brass.addInstrument(instrument);
  } else {
    percussion.addInstrument(instrument);
  }
});
//logs out the created band sections & their instruments
console.log("Initial Band Sections:");
console.log(woodwinds);
console.log(brass);
console.log(percussion);
//while loop that will run until user selects exit option on the prompt
while(true){
  let option = prompt("Please select an option: (1) Create, (2) View, (3) Delete, (4) Exit");
//switch statement handles the different options  
  switch(option) {
    case "1":
    let name = prompt("Enter the name of the instrument:");
    let section = prompt("Enter the section of the instrument:");
    let seating = prompt("Enter the seating of the instrument:");
    let newInstrument = new Instrument(name, section, seating);
    if(section === "Woodwinds"){
        woodwinds.addInstrument(newInstrument);
        console.log(name + " is added to " + section + " section.");
        console.log(woodwinds);        
    }else if(section === "Brass"){
        brass.addInstrument(newInstrument);
        console.log(name + " is added to " + section + " section.");
        console.log(brass);
    }else if(section === "Percussion"){
        percussion.addInstrument(newInstrument);
        console.log(name + " is added to " + section + " section.");
        console.log(percussion);
    }
    break;
//create asks for name, section, seating which creates new instrument in array & logs out instrument is added to section    
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
//view asks for section & logs that band section    
    case "3":
    let sectionToDelete = prompt("Enter the section to delete from: (Woodwinds, Brass, Percussion)");
    let nameToDelete = prompt("Enter the name of the instrument to delete:");
    if(sectionToDelete === "Woodwinds"){
      woodwinds.deleteInstrument(nameToDelete);
      console.log(nameToDelete + " is removed from " + sectionToDelete + " section.");
      console.log(woodwinds);
    }else if(sectionToDelete === "Brass"){
      brass.deleteInstrument(nameToDelete);
      console.log(nameToDelete + " is removed from " + sectionToDelete + " section.");
      console.log(brass);
    }else if(sectionToDelete === "Percussion"){
      percussion.deleteInstrument(nameToDelete);
      console.log(nameToDelete + " is removed from " + sectionToDelete + " section.");
      console.log(percussion);
    }else{
      console.log("Invalid Section");
    }
    break;
//delete asks for section & instrument which removes that instrument & logs out instrument is removed from section   
    case "4":
      console.log("Exiting the app...");
      process.exit();
    break;
//exits the prompt, ends the while loop    
    default:
      console.log("Invalid option selected");
  }
}
//default message if anything but the 4 options are attempted
