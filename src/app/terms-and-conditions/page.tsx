export default function TermsAndConditions() {
  return (
    <section className="max-w-4xl mx-auto p-6 text-gray-800">
      <h1 className="text-3xl font-bold mb-8">Conditions Générales d'Utilisation et de Vente</h1>

      <div className="space-y-8">
        {/* CGU / CGV */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">1. Informations générales</h2>
          <p>
            Entreprise : <strong>REO GROUPE</strong>
            <br />
            Forme juridique : SAS
            <br />
            Siège social : 3 rue des Païens, 67720 Hoerdt
            <br />
            N° SIRET / TVA : En cours d'immatriculation
            <br />
            Contact :{' '}
            <a href="mailto:contact@reo-groupe.fr" className="text-blue-600 underline">
              contact@reo-groupe.fr
            </a>
            <br />
            Représentant légal : NOUMBA Michael
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">2. Activité de l’entreprise</h2>
          <p>
            REO GROUPE intervient dans la fourniture, pose, installation, entretien et maintenance
            d’équipements thermiques (chauffage, climatisation, VMC), ainsi que dans les travaux
            de plomberie associés.
          </p>
          <p>Clientèle : particuliers, professionnels, entreprises</p>
          <p>
            Services : conseils techniques, études personnalisées, devis gratuits, installation,
            maintenance, SAV
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">3. Fonctionnalités du site</h2>
          <ul className="list-disc ml-6 space-y-1">
            <li>Formulaire de contact / devis</li>
            <li>Portfolio, témoignages</li>
            <li>Langue disponible : Français uniquement</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">4. Conditions commerciales</h2>
          <ul className="list-disc ml-6 space-y-1">
            <li>Devis gratuits, contractuels après signature (valide 30 jours)</li>
            <li>Délais indicatifs, sauf mention expresse</li>
            <li>Modifications possibles via avenant signé</li>
            <li>Acompte moyen : 30%</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">5. Données personnelles & RGPD</h2>
          <p>Collecte via formulaire : nom, email, téléphone, description</p>
          <p>Outils utilisés : Google Analytics</p>
          <p>
            Politique intégrée – droits RGPD sur demande à :{' '}
            <a href="mailto:contact@reo-groupe.fr" className="text-blue-600 underline">
              contact@reo-groupe.fr
            </a>
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">6. Livraison, exécution & garanties</h2>
          <ul className="list-disc ml-6 space-y-1">
            <li>Matériaux fournis par REO GROUPE sauf mention contraire</li>
            <li>Délais moyens : 2 à 4 semaines après validation</li>
            <li>Garanties : légale + décennale</li>
            <li>Litiges : résolution amiable, puis médiation</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">7. Paiement & facturation</h2>
          <ul className="list-disc ml-6 space-y-1">
            <li>Moyens acceptés : chèque, virement, espèces</li>
            <li>Paiement : acompte + solde à réception</li>
            <li>Pénalités : taux légal + 3 points</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">8. Limitation de responsabilité</h2>
          <p>
            Non-responsabilité en cas de force majeure (grèves, intempéries, épidémies, retards
            fournisseurs) ou erreur utilisateur.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">9. Modification des CG</h2>
          <p>
            REO GROUPE peut modifier ces conditions à tout moment. Mention des changements sur le
            site.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">10. Acceptation des CG</h2>
          <p>
            En visitant le site ou en signant un devis, l’utilisateur accepte pleinement les
            présentes conditions.
          </p>
        </section>

        {/* Mentions légales spéciales */}
        <section className="pt-12 border-t border-gray-300">
          <h1 className="text-3xl font-bold mb-6">⚖️ Mentions légales</h1>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-2">👷 1. Informations sur l’entreprise</h2>
            <ul className="list-disc ml-6 space-y-1">
              <li><strong>Nom :</strong> REO GROUPE</li>
              <li><strong>Forme juridique :</strong> SAS</li>
              <li><strong>Capital social :</strong> 1.000 euros</li>
              <li><strong>Adresse du siège :</strong> 3 rue des Païens, 67720 Hoerdt</li>
              <li><strong>Numéro d’entreprise / TVA :</strong> En cours d'immatriculation</li>
              <li><strong>Responsable de publication :</strong> NOUMBA YAMANGAM Michael</li>
              <li>
                <strong>Email / Téléphone :</strong>{' '}
                <a href="mailto:contact@reo-groupe.fr" className="text-blue-600 underline">
                  contact@reo-groupe.fr
                </a>
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-2">🌐 2. Site Internet</h2>
            <ul className="list-disc ml-6 space-y-1">
              <li><strong>Nom de domaine :</strong> reo-groupe.fr</li>
              <li><strong>Propriété du site :</strong> entreprise ou prestataire externe ? NOUMBA YAMANGAM Michael</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-2">🖥️ 3. Hébergeur</h2>
            <ul className="list-disc ml-6 space-y-1">
              <li><strong>Nom de l’hébergeur :</strong> Vercel Inc.</li>
              <li><strong>Adresse postale :</strong> 340 S Lemon Ave #4133, CA 91789, États-Unis</li>
              <li><strong>Contact hébergeur (email/tel) :</strong> Non renseigné</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-2">📡 4. Données personnelles (RGPD)</h2>
            <p className="mb-2">Collecte via :</p>
            <ul className="list-disc ml-6 space-y-1">
              <li>✔ Formulaire de contact : nom, prénom, email, téléphone, adresse, description du projet</li>
              <li>☐ Newsletter</li>
              <li>✔ Cookies / trackers</li>
            </ul>
            <p className="mt-4">
              <strong>Politique de confidentialité rédigée ?</strong> Oui
            </p>
            <p>
              <strong>Mention RGPD intégrée ou page séparée ?</strong> Intégrée dans une page ou section dédiée
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-2">🧰 5. Propriété intellectuelle</h2>
            <ul className="list-disc ml-6 space-y-1">
              <li><strong>Création des contenus par vous-même ou tiers ?</strong> Contenus créés par l'entreprise</li>
              <li><strong>Réutilisation interdite sans autorisation ?</strong> Toute réutilisation interdite sans autorisation écrite</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">⚠️ 6. Conditions d’utilisation</h2>
            <ul className="list-disc ml-6 space-y-1">
              <li><strong>Site informatif ou permettant des démarches ?</strong> Site à usage informatif et commercial (devis, contact)</li>
              <li>
                <strong>Limitation de responsabilité en cas d’erreur ou mauvaise utilisation ?</strong>{' '}
                Limitation de responsabilité en cas de mauvaise interprétation, liens externes hors contrôle, erreurs techniques (serveur, formulaire)
              </li>
            </ul>
          </section>
        </section>
      </div>
    </section>
  )
}
