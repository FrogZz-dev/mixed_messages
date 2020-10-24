export const myCitations = {
  citations: [
    {
      citation:
        "Exige beaucoup de toi-même et attends peu des autres. Ainsi beaucoup d'ennuis te seront épargnés.",
      auteur: "Confucius",
      source: "",
    },
    {
      citation: "Agissez comme s'il était impossible d'échouer.",
      auteur: "Winston Churchill",
      source: "",
    },
    {
      citation:
        "Il n'y a pas de bonheur plus grand que d'être aimé par ses semblables, et de sentir que votre présence est une joie pour eux.",
      auteur: "Charlotte Bronte",
      source: "Jane Eyre",
    },
    {
      citation:
        "Commence par faire le nécessaire, puis fait ce qu'il est possible de faire et tu réaliseras l'impossible sans t'en apercevoir.",
      auteur: "Saint François d'Assise",
      source: "",
    },
  ],

  isValidCitation(citationTest) {
    return citationTest.citation && citationTest.auteur;
  },

  ajoutCitation(newCitation) {
    if (this.isValidCitation(newCitation)) {
      this.citations.push(newCitation);
    } else {
      console.log("Erreur lors de l'ajout de la citation");
    }
  },

  // retourne l'index d'une citation aléatoire
  getRandomCitation() {
    const nombreCitations = this.citations.length;
    const randomCitationNum = Math.floor(Math.random() * nombreCitations);

    return randomCitationNum;
  },

  // affiche la citation enregistrée à l'index spécifié
  displayCitation(indexCitation) {
    // vérification de l'éxistence de l'index
    const nombreCitations = this.citations.length;

    if (nombreCitations == 0) {
      console.log("Il n'y a pas de citation à afficher");
      return;
    }

    if (indexCitation < 0 || indexCitation >= nombreCitations) {
      console.log("L'index spécifié est incorrect");
    }

    // l'index est valide, affichage de la citation
    const { citation, auteur, source } = this.citations[indexCitation];
    console.log(
      `\t"${citation}"\n\tAuteur: ${auteur}${
        source ? "\tSource: " + source : ""
      }`
    );
  },

  displayRandomCitation() {
    this.displayCitation(this.getRandomCitation());
  },

  displayAll() {
    const nombreCitations = this.citations.length;

    console.log(`Nombre de citations enregistrées: ${nombreCitations}\n`);

    for (let index = 0; index < nombreCitations; index++) {
      this.displayCitation(index);
      console.log("");
    }
  },
};
