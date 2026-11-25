// Adresse de l'application web Apps Script :
// Apps Script > Déployer > Gérer les déploiements > « URL de l'application web » (elle finit par /exec).
//
// Cette adresse est PUBLIQUE (elle est lisible par tous dans la page) :
// ne mettez JAMAIS de mot de passe ni de liste de personnes dans ce fichier ou dans le dépôt.
// Le code d'équipe se saisit dans la page, sur le téléphone, et n'est pas stocké ici.
window.SCAN_CONFIG = {
  APP_URL: "https://script.google.com/macros/s/AKfycby9q4JyX-gYrX6ePR8x6REIJ6h_wE9weizACFx28qv6bRU_VBVF3nia5hlcjQmSETgsqA/exec",

  // true  : le QR doit contenir une adresse mail (cas actuel) ; un autre QR est refusé sans envoi.
  // false : à utiliser si le QR contient un jour un code au lieu d'une adresse.
  QR_EST_UNE_ADRESSE: true
};
