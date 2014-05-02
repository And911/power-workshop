
// compile to ES5 with traceur
// ../traceur/traceur --out ready.js --script ../traceur/bin/traceur.js index.js

class Consultant {
  constructor(name) {
    this.name = name;
  }

  present(topic) {
    console.log(this.name + ' talks a lot bla bla in the presentation about ' + topic);
  }
}

class SeniorConsultant extends Consultant {
  constructor(name, level) {
    super(name);
    this.level = level;
  }

  present() {
    super.present('Global Management and Marketing Management Solution');
  }
}

var mirco = new Consultant('mirco');
mirco.present('JavaScript');

var georg = new SeniorConsultant('georg', 'Unit Manager');
georg.present();
