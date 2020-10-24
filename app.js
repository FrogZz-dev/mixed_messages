import { myCitations } from "./citation.js";
import rlSync from "readline-sync";

const commandes = ["help", "ajout", "random", "tout", "exit"];

const displayHelp = () => {
  console.log("Liste des commandes:");
  console.log("\thelp: affiche cette aide");
  console.log("\tajout: ajoute une citation");
  console.log("\trandom: affiche une citation aléatoire");
  console.log("\ttout: affiche toutes les citations enregistrées");
  console.log("\texit: quitte l'application");
};

const isValidAction = (action) => {
  return commandes.includes(action);
};

// retourne une action valide entrée par l'utilisateur
const getAction = () => {
  const question = "Que voulez-vous faire? ";
  let actionInput = rlSync.question("\n" + question);

  while (!isValidAction(actionInput)) {
    console.clear();
    console.log("Entrez une commande valide!\n");
    displayHelp();

    actionInput = rlSync.question("\n" + question);
  }

  return actionInput;
};

// affiche un message à l'exécution t une 1ère citation aléatoire
const messageAccueil = (citations) => {
  console.clear();
  console.log("Bienvenue!\nVoici une citation aléatoire:");

  citations.displayRandomCitation();
};

// récupère les informations d'une citation
const getNewCitation = () => {
  return {
    citation: rlSync.question("Citation: "),
    auteur: rlSync.question("Auteur: "),
    source: rlSync.question("Source: "),
  };
};

const mainApp = () => {
  messageAccueil(myCitations);

  // répété l'action tant que l'utilisateur ne demande pas la sortie
  while (true) {
    const action = getAction();
    console.clear();
    switch (action) {
      case "help":
        displayHelp();
        break;

      case "ajout":
        myCitations.ajoutCitation(getNewCitation());
        break;

      case "random":
        myCitations.displayRandomCitation();
        break;

      case "tout":
        myCitations.displayAll();
        break;

      case "exit":
        return;

      default:
        console.log("Cette action n'est pas encore implémentée");
        break;
    }
  }
};

mainApp();
