console.log("Le script est chargé et exécuté");
// Exemple de données pour les cours
const coursData = {
    cours1: [
        { francais: "seigneur", arabe: "رَبٌّ" },
        { francais: "livre", arabe: "كِتَابٌ" },
        { francais: "livres", arabe: "كُتُبٌ" },
        { francais: "Noble", arabe: "كَرِيمٌ" },
        { francais: "Nobles", arabe: "كِرَامٌ" },
        { francais: "Divinité", arabe: "إِلٰهٌ" },
        { francais: "Divinités", arabe: "أَلِهَةٌ" },
        { francais: "Ennemi", arabe: "عَدُوٌ" },
        { francais: "Ennemis", arabe: "أَعْدَاوٌ" },
        { francais: "Demander", arabe: "سَأَلَ" },
        { francais: "Etre humain", arabe: "إِنْسَانٌ" },
        { francais: "Etres humains", arabe: "أُنَاسٌ" },
        { francais: "Lapidé, maudit", arabe: "رَجِيمٌ" },
        // Ajoutez plus de mots ici
    ],
    cours2: [
        { francais: 'Langue (parlé)', arabe: 'لُغَةُ' },
        { francais: 'Devenir', arabe: 'أَصْبَحَ' },
        { francais: 'Arabe', arabe: 'عَرَبِيٌّ' },
        { francais: 'Parole', arabe: 'كَلَامٌ' },
        { francais: 'Paroles', arabe: 'كَلِمٌ' },
        { francais: 'Beau', arabe: 'جَمِيلٌ' },
        { francais: 'Lettre', arabe: 'حَرْفٌ' },
        { francais: 'Lettres', arabe: 'حُرُوفٌ' },
        { francais: 'Lire', arabe: 'قَرَأَ' },
        { francais: 'Savoir', arabe: 'يَعْرِفُ' },
        { francais: 'Langue (bouche)', arabe: 'لِسَانٌ' },
        { francais: 'Langues (bouche)', arabe: 'أَلْسِنة' },
        { francais: 'Est-ce que', arabe: 'هَلْ' },
    ],
    cours3: [
        { francais: 'Vrai, bon', arabe: 'صَحِيحٌ' },
        { francais: 'Trouver', arabe: 'وَجَدَ' },
        { francais: 'Acheter', arabe: 'اِشْتَرَى' },
        { francais: 'Nombre', arabe: 'عَدَدٌ' },
        { francais: 'Nombres', arabe: 'أَعْدَادٌ' },
        { francais: 'Ane', arabe: 'حِمَارٌ' },
        { francais: 'Anes', arabe: 'حَمِيرٌ' },
        { francais: 'Fois (Singulier)', arabe: 'مَرَةً' },
        { francais: 'Fois (Pluriel)', arabe: 'مِرَارًا' },
        { francais: 'Marché', arabe: 'سُوقٌ' },
        { francais: 'Marchés', arabe: 'أَسْوَاقٌ' },
        { francais: 'A la fin', arabe: 'أَخِيرًا' },
        { francais: 'Chemin', arabe: 'طَرِيقٌ' },
        { francais: 'Chemins', arabe: 'طُرُقٌ' },
        { francais: 'Marche', arabe: 'مَشْيٌ' },
    ],
    cours4: [
        { francais: 'Naissance', arabe: 'وِلاَدَةً' },
        { francais: 'Lait', arabe: 'حَلِيبً' },
        { francais: 'Jour', arabe: 'يَومٌ' },
        { francais: 'Jours', arabe: 'أَيَامٌ' },
        { francais: 'Fourmi', arabe: 'نَمْلَةٌ' },
        { francais: 'Fourmis', arabe: 'نَمْلٌ' },
        { francais: 'Abeille', arabe: 'نَحْلَةٌ' },
        { francais: 'Abeilles', arabe: 'نَحْلٌ' },
        { francais: 'Courir', arabe: 'يَجْرِى' },
        { francais: 'Petit', arabe: 'صَغِيرٌ' },
        { francais: 'Petite', arabe: 'صَغِيرَةٌ' },
        { francais: 'Petits', arabe: 'صِغَارٌ' },
        { francais: 'Petites', arabe: 'صَغِيرَاتٌ' },
        { francais: 'Oiseau', arabe: 'طَيْرٌ' },
        { francais: 'Oiseaux', arabe: 'ظُيُورٌ' },
        { francais: 'Montagne', arabe: 'جِبَلٌ' },
        { francais: 'Montagnes', arabe: 'جِبَالٌ' },
        { francais: 'Miel', arabe: 'عَسَلَ' },
    ],
    cours5: [
        { francais: 'Voyager', arabe: 'سَفَرٌ' },
        { francais: 'Froid', arabe: 'بَرْدٌ' },
        { francais: 'Les gens', arabe: 'الْنَاسُ' },
        { francais: 'Maintenant', arabe: 'الآنَ' },
        { francais: 'Temps (Singulier)', arabe: 'زَمَانٌ' },
        { francais: 'Temps (Pluriel)', arabe: 'أَزْمَانٌ' },
        { francais: 'Voiture', arabe: 'سَيَّارَةٌ' },
        { francais: 'Voitures', arabe: 'سَيَّارَاتٌ' },
        { francais: 'Chameau', arabe: 'جَمَلٌ' },
        { francais: 'Avion', arabe: 'طَائِرَةٌ' },
        { francais: 'Cheval', arabe: 'حِصَانٌ' },
        { francais: 'Train', arabe: 'قِطَارٌ' },
        { francais: 'Soleil', arabe: 'شَمْسٌ' },
        { francais: 'Bateau', arabe: 'بَاخِرَةٌ' },
    ],
    cours6: [
        { francais: 'Compréhension', arabe: 'فَهْمٌ' },
        { francais: 'Voix (Singulier)', arabe: 'صَوْةٌ' },
        { francais: 'Voix (Pluriel)', arabe: 'أَصْوَاتٌ' },
        { francais: 'Mémoriser', arabe: 'حَفِظَ' },
        { francais: 'Entendre', arabe: 'يَسْمَعٌ' },
        { francais: 'Main', arabe: 'يَدٌ' },
        { francais: 'Mère', arabe: 'وَالِدَةٌ' },
        { francais: 'Entrer', arabe: 'دَخَلَ' },
        { francais: 'Dire', arabe: 'يَقولُ' },
        { francais: 'Maison', arabe: 'دارٌ' },
        { francais: 'Maisons', arabe: 'أَدْيَارٌ' },
        { francais: 'Action, travail', arabe: 'عَمَلٌ' },
        { francais: 'Actions, travails', arabe: 'أَعْمَالٌ' },
    ],
    cours7: [
        { francais: 'Ami', arabe: 'صَدِيقٌ' },
        { francais: 'Amis', arabe: 'أَصْدِقَاءُ' },
        { francais: 'Ressembler', arabe: 'تَشَبَّهَ' },
        { francais: 'Individu', arabe: 'مَرْءٌ' },
        { francais: 'Peuple', arabe: 'قَومٌ' },
        { francais: 'Peuples', arabe: 'أقْوَامٌ' },
        { francais: 'Religion', arabe: 'دِينٌ' },
        { francais: 'Religions', arabe: 'أَدْيَانٌ' },
        { francais: 'Suivre', arabe: 'يَتَّبِعُ' },
        { francais: 'Regarder', arabe: 'يَنْظُرُ' },
        { francais: 'Acte d adoration', arabe: 'عِبَادَةٌ' },
        { francais: 'Actes d adorations', arabe: 'عِبَادَاتٌ' },
        { francais: 'Aussi', arabe: 'أَيْضًا' },
        { francais: 'Pieux, bon', arabe: 'صَالِحٌ' },
        { francais: 'Pieux, bons', arabe: 'صَالِحُونَ' }, 
    ],
    cours8: [
        { francais: 'Aimer', arabe: 'يُحَبٌ' },
        { francais: 'Coeur', arabe: 'قَلْبٌ' },
        { francais: 'Coeurs', arabe: 'قُلُوبٌ' },
        { francais: 'Apprendre', arabe: 'يَتَعَلَّمٌ' },
        { francais: 'Calcul', arabe: 'حِسَابٌ' },
        { francais: 'Être utile', arabe: 'يَنْفَعُ' },
        { francais: 'Âme, être', arabe: 'نَفْسٌ' },
        { francais: 'Âmes, êtres', arabe: 'نُفُوسٌ' },
        { francais: 'Visage', arabe: 'وَجْهٌ' },
        { francais: 'Visages', arabe: 'وُجوهٌ' },
        { francais: 'Vérité', arabe: 'حَقٌّ' },
        { francais: 'Vérités', arabe: 'حُقُوقٌ' },
        { francais: 'Mot', arabe: 'كَلِمَةٌ' },
        { francais: 'Mots', arabe: 'كَلِمَاتٌ' },
        { francais: 'Inutile, faux', arabe: 'بَاطِلٌ' },
    ],
    cours9: [
        { francais: 'Perdre', arabe: 'فَقَدَ' },
        { francais: 'Répéter', arabe: 'رَدَّدَ' },
        { francais: 'Commencer', arabe: 'بَدَأَ' },
        { francais: 'S étonner', arabe: 'تَعَجَّبَ' },
        { francais: 'Chercher', arabe: 'يَبْحَثُ' },
        { francais: 'Répondre', arabe: 'أَجَابَ' },
        { francais: 'Endroit', arabe: 'مَكَانٌ' },
        { francais: 'Endroits', arabe: 'أَمَاكِنُ' },
        { francais: 'Chevaucher', arabe: 'رَكِبَ' },
        { francais: 'Nombreux', arabe: 'عَدِيدٌ' },
        { francais: 'Se perdre', arabe: 'ضَاعَ' },
    ],
    cours10: [
        { francais: 'Année', arabe: 'سَنَةٌ' },
        { francais: 'Années', arabe: 'سَنَوَاتٌ' },
        { francais: 'Animal', arabe: 'حَيَوَانٌ' },
        { francais: 'Beauté', arabe: 'جَمَالٌ' },
        { francais: 'Plante, végétation', arabe: 'نَبَاتٌ' },
        { francais: 'Plantes, végétations', arabe: 'نَبَاتَاتٌ' },
        { francais: 'Jeune homme', arabe: 'شَابٌّ' },
        { francais: 'Jeunes hommes', arabe: 'شَبَابٌ' },
        { francais: 'Fruits', arabe: 'فَاكِهَةٌ' },
        { francais: 'Vêtement', arabe: 'لِبَاسٌ' },
        { francais: 'Revenir', arabe: 'يَرْجِعُ' },
        { francais: 'Terre', arabe: 'أرْضٌ' },
        { francais: 'Vent', arabe: 'رِيحٌ' },
        { francais: 'Vents', arabe: 'رِيَاحٌ' }, 
        { francais: 'Force', arabe: 'قُوَّةٌ' }, 
        { francais: 'Neige', arabe: 'ثَلْجٌ' }, 
    ],
    cours11: [
        { francais: 'Petit oiseau', arabe: 'عُصْفُورٌ' },
        { francais: 'Tête', arabe: 'رَأْسٌ' },
        { francais: 'Têtes', arabe: 'رُؤُوسٌ' },
        { francais: 'Vouloir', arabe: 'شَاءَ' },
        { francais: 'Grand', arabe: 'كَبِيرٌ' },
        { francais: 'Grands', arabe: 'كِبَارٌ' },
        { francais: 'Chanter', arabe: 'يُغَنِّي' },
        { francais: 'Frère', arabe: 'أَخٌ' },
        { francais: 'Frères', arabe: 'إِخْوَانٌ' },
        { francais: 'Manger', arabe: 'يَأْكُلُ' },
        { francais: 'Elève', arabe: 'تِلْمِيذٌ' },
        { francais: 'Elèves', arabe: 'تَلَامِيذٌ' },
        { francais: 'Assoifé', arabe: 'عَطْشَانُ' },
        { francais: 'Lumière', arabe: 'نُورٌ' },
    ],
    cours12: [
        { francais: 'Long', arabe: 'طَوِيلٌ' },
        { francais: 'Tomber', arabe: 'يَسْقُطُ' },
        { francais: 'Couleur', arabe: 'لَوْنٌ' },
        { francais: 'Couleurs', arabe: 'أَلْوَانٌ' },
        { francais: 'Pluie', arabe: 'مَطَرٌ' },
        { francais: 'Pluies', arabe: 'أَمْطَارٌ' },
        { francais: 'Se casser, fragmenter', arabe: 'انْكَسَرَ' },
        { francais: 'Léger', arabe: 'خَفِيفٌ' },
        { francais: 'Lumière', arabe: 'ضَوْءٌ' },
        { francais: 'Temps, heure', arabe: 'وَقْتٌ' },
        { francais: 'Temps, heures', arabe: 'أَوْقَاتٌ' },
        { francais: 'Au moment où', arabe: 'حِينْ' },
        { francais: 'Voir', arabe: 'يَرَى' },
    ],
    cours13: [
        { francais: 'Ordonner', arabe: 'أَمَرَ' },
        { francais: 'Terre, sol, poussière', arabe: 'تُرَابٌ' },
        { francais: 'Raconter', arabe: 'قَصَّ' },
        { francais: 'Remplir', arabe: 'مَلأَ' },
        { francais: 'Homme', arabe: 'رَجُلٌ' },
        { francais: 'Hommes', arabe: 'رِجَالٌ' },
        { francais: 'Abreuver', arabe: 'سَقَى' },
        { francais: 'Boire', arabe: 'شَرِبَ' },
        { francais: 'Remercier', arabe: 'شَكَرَ' },
        { francais: 'Sortir', arabe: 'خَرَجَ' },
        { francais: 'Pardonner', arabe: 'غَفَرَ' },
        { francais: 'Chien', arabe: 'كَلْبٌ' },
        { francais: 'Chiens', arabe: 'كِلابٌ' },
        { francais: 'Péché', arabe: 'ذَنْبٌ' },
        { francais: 'Péchés', arabe: 'ذُنُوبٌ' }, 
    ],
};

let currentCours = '';
let currentWordIndex = 0; // Index pour suivre le mot actuel dans le cours
let score = 0; // Score pour les réponses correctes

// Fonction pour afficher un mot
function displayWord(cours) {
    if (cours !== currentCours) {
        // Réinitialiser l'index et le score si un nouveau cours est sélectionné
        currentWordIndex = 0;
        score = 0;

        // Réafficher le champ de saisie et le bouton vérifier
        document.getElementById('answerInput').style.display = ''; // Réafficher le champ de saisie
        document.getElementById('checkButton').style.display = ''; // Réafficher le bouton vérifier
    }

    currentCours = cours;

    if (currentWordIndex < coursData[cours].length) {
        let randomWord = coursData[cours][currentWordIndex];
        document.getElementById('wordDisplay').innerText = randomWord.francais;
        document.getElementById('answerInput').dataset.correctAnswer = randomWord.arabe;
        document.getElementById('answerInput').value = '';
        document.getElementById('resultMessage').innerText = '';
        currentWordIndex++;
    } else {
        // Calculer la note sur 20
        let note = (score / coursData[cours].length) * 20;
        document.getElementById('wordDisplay').innerText = `Votre note est : ${note.toFixed(2)}/20`;
        document.getElementById('answerInput').style.display = 'none'; // Masquer le champ de saisie
        document.getElementById('checkButton').style.display = 'none'; // Masquer le bouton vérifier
    }
}


// Ajoutez des écouteurs d'événements sur les boutons
document.getElementById('cours1').addEventListener('click', function() { displayWord('cours1'); });
document.getElementById('cours2').addEventListener('click', function() { displayWord('cours2'); });
document.getElementById('cours3').addEventListener('click', function() { displayWord('cours3'); });
document.getElementById('cours4').addEventListener('click', function() { displayWord('cours4'); });
document.getElementById('cours5').addEventListener('click', function() { displayWord('cours5'); });
document.getElementById('cours6').addEventListener('click', function() { displayWord('cours6'); });
document.getElementById('cours7').addEventListener('click', function() { displayWord('cours7'); });
document.getElementById('cours8').addEventListener('click', function() { displayWord('cours8'); });
document.getElementById('cours9').addEventListener('click', function() { displayWord('cours9'); });
document.getElementById('cours10').addEventListener('click', function() { displayWord('cours10'); });
document.getElementById('cours11').addEventListener('click', function() { displayWord('cours11'); });
document.getElementById('cours12').addEventListener('click', function() { displayWord('cours12'); });
document.getElementById('cours13').addEventListener('click', function() { displayWord('cours13'); });
document.getElementById('cours14').addEventListener('click', function() { displayWord('cours14'); });


// Ajoutez des écouteurs pour les autres boutons

// Fonction pour vérifier la réponse
function checkAnswer() {
    let correctAnswer = document.getElementById('answerInput').dataset.correctAnswer;
    let userAnswer = document.getElementById('answerInput').value;

    if (userAnswer === correctAnswer) {
        document.getElementById('resultMessage').innerText = "Correct!";
        score++;
        setTimeout(function() { displayWord(currentCours); }, 3000);
    } else {
        document.getElementById('resultMessage').innerText = `Incorrect, la bonne réponse est: ${correctAnswer}`;
        setTimeout(function() { displayWord(currentCours); }, 5000);
    }
}

document.getElementById('checkButton').addEventListener('click', function() {
    console.log("Bouton vérifier cliqué - écouteur d'événement");
    checkAnswer();
});