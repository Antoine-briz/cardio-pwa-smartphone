// app.js – application Cardio ICU (squelette + intégration future ATB)

// =====================================================================
//  ROUTER DE BASE
// =====================================================================

const $app = document.getElementById("app");

const routes = {
  "#/": renderHome,

  // Anesthésie
  "#/anesthesie": renderAnesthMenu,
  "#/anesthesie/consultations": renderAnesthConsultations,
  "#/anesthesie/antibiopro": renderAnesthAntibiopro,
  "#/anesthesie/chir-cec": renderAnesthChirCecMenu,
  "#/anesthesie/cardio-struct": renderAnesthCardioStructMenu,
  "#/anesthesie/vasculaire": renderAnesthVasculaire,
  "#/anesthesie/radiovasculaire": renderAnesthRadioVasculaire,

  // Réanimation
  "#/reanimation": renderReanMenu,
  "#/reanimation/antibiotherapie": renderReanAntibiotherapieMenu,

  // CEC
  "#/cec": renderCecMenu,

  // Divers
  "#/planning": renderPlanning,
  "#/annuaire": renderAnnuaire,
};

function navigate() {
  const hash = window.location.hash || "#/";
  const view = routes[hash];
  if (view) {
    view();
  } else {
    renderNotFound();
  }
}

window.addEventListener("hashchange", navigate);
window.addEventListener("load", navigate);

// =====================================================================
//  PAGE D’ACCUEIL
// =====================================================================

function renderHome() {
  $app.innerHTML = `
    <section class="home">
      <div class="hero">
        <img src="titre.png" alt="Titre" />
        <h2>Protocoles d’anesthésie & réanimation</h2>
      </div>

      <div class="grid">
        <div class="card" onclick="location.hash = '#/anesthesie'">
          <h3>Protocoles d’anesthésie</h3>
          <img src="anesthesie.png" alt="Anesthésie" class="menu-section-img" />
        </div>

        <div class="card" onclick="location.hash = '#/reanimation'">
          <h3>Réanimation</h3>
          <img src="reanimation.png" alt="Réanimation" class="menu-section-img" />
        </div>

        <div class="card" onclick="location.hash = '#/cec'">
          <h3>Circulation extra-corporelle</h3>
          <img src="cec.png" alt="CEC" class="menu-section-img" />
        </div>
      </div>

      <div style="margin-top:24px;">
        <button class="btn outline" onclick="location.hash = '#/planning'">
          Planning médical
        </button>
        <button class="btn ghost" style="margin-top:8px;" onclick="location.hash = '#/annuaire'">
          Annuaire
        </button>
      </div>
    </section>
  `;
}

// =====================================================================
//  ANESTHÉSIE – MENU PRINCIPAL
// =====================================================================

function renderAnesthMenu() {
  $app.innerHTML = `
    <section>
      <div class="hero">
        <img src="titre.png" alt="Protocoles d’anesthésie" />
        <h2>Protocoles d’anesthésie</h2>
      </div>

      <div class="grid">
        <button class="btn" onclick="location.hash = '#/anesthesie/consultations'">
          Consultations
        </button>
        <button class="btn" onclick="location.hash = '#/anesthesie/antibiopro'">
          Antibioprophylaxie
        </button>
        <button class="btn" onclick="location.hash = '#/anesthesie/chir-cec'">
          Chirurgies cardiaques sous CEC
        </button>
        <button class="btn" onclick="location.hash = '#/anesthesie/cardio-struct'">
          Cardiologie structurelle et rythmologie
        </button>
        <button class="btn" onclick="location.hash = '#/anesthesie/vasculaire'">
          Chirurgie vasculaire
        </button>
        <button class="btn" onclick="location.hash = '#/anesthesie/radiovasculaire'">
          Radio-vasculaire
        </button>
      </div>
    </section>
  `;
}

// =====================================================================
//  ANESTHÉSIE – SOUS-PAGES (SQUELETTE)
// =====================================================================

function renderAnesthConsultations() {
  $app.innerHTML = `
    <section>
      <h2>Consultations d’anesthésie</h2>
      <p>À compléter à partir du tableau “Consultations” (Euroscore, gestion des traitements…).</p>
    </section>
  `;
}

function renderAnesthChirCecMenu() {
  $app.innerHTML = `
    <section>
      <h2>Chirurgies cardiaques sous CEC</h2>
      <div class="grid">
        <button class="btn" onclick="renderInterventionPontages()">
          Pontages coronaires
        </button>
        <button class="btn">
          RVA / Plastie aortique
        </button>
        <button class="btn">
          RVM / Plastie mitrale
        </button>
        <button class="btn">
          Transplantation cardiaque
        </button>
        <button class="btn">
          Assistances circulatoires
        </button>
      </div>
    </section>
  `;
}

function renderAnesthCardioStructMenu() {
  $app.innerHTML = `
    <section>
      <h2>Cardiologie structurelle et rythmologie</h2>
      <div class="grid">
        <button class="btn">TAVI</button>
        <button class="btn">Mitra-clip</button>
        <button class="btn">Fermeture FOP/CIA</button>
        <button class="btn">Pacemaker / DAI</button>
        <button class="btn">Ablations cœur droit</button>
        <button class="btn">Ablations cœur gauche</button>
      </div>
    </section>
  `;
}

function renderAnesthVasculaire() {
  $app.innerHTML = `
    <section>
      <h2>Chirurgie vasculaire</h2>
      <p>Contenu à insérer à partir du tableau “Chirurgie vasculaire”.</p>
    </section>
  `;
}

function renderAnesthRadioVasculaire() {
  $app.innerHTML = `
    <section>
      <h2>Radio-vasculaire</h2>
      <p>Contenu à insérer à partir du tableau “Radio-vasculaire”.</p>
    </section>
  `;
}

// =====================================================================
//  ANESTHÉSIE – ANTIBIOPROPHYLAXIE
// =====================================================================
//
//  ⚠️ ICI tu recolleras EXACTEMENT ta logique existante de pwa-atb-rules.
//  Par exemple : une fonction `renderAntibioproForm(container)` définie
//  plus bas (voir bloc “CODE EXISTANT ATB”).
//

function renderAnesthAntibiopro() {
  $app.innerHTML = `
    <section>
      <h2>Antibioprophylaxie</h2>
      <div id="antibiopro-root"></div>
    </section>
  `;

  const root = document.getElementById("antibiopro-root");

  // 👉 ICI : appelle ta fonction existante de pwa-atb-rules.
  // Exemple (à adapter exactement au nom de ta fonction) :
  //
  //    renderAntibioproForm(root);
  //
  // Tu colleras la définition de `renderAntibioproForm` dans le bloc
  // “// === CODE EXISTANT ATB – ANTIBIOPROPHYLAXIE ===” plus bas.
}

// =====================================================================
//  RÉANIMATION – MENU
// =====================================================================

function renderReanMenu() {
  $app.innerHTML = `
    <section>
      <div class="hero">
        <img src="titre.png" alt="Réanimation" />
        <h2>Réanimation</h2>
      </div>

      <div class="grid">
        <button class="btn" onclick="location.hash = '#/reanimation/antibiotherapie'">
          Antibiothérapie
        </button>
        <!-- Autres grandes sections de la colonne de gauche du PPT :
             Prescriptions post-opératoires, saignements, FA, ETO, transplant., assistances, etc.
             Tu pourras ajouter ici :
             <button class="btn" onclick="location.hash='#/reanimation/prescriptions'">Prescriptions post-opératoires</button>
        -->
      </div>
    </section>
  `;
}

// =====================================================================
//  RÉANIMATION – ANTIBIOTHÉRAPIE (5 sous-parties existantes ATB)
// =====================================================================

function renderReanAntibiotherapieMenu() {
  $app.innerHTML = `
    <section>
      <h2>Antibiothérapie en Réanimation</h2>
      <div class="grid">
        <button class="btn" onclick="renderAtbProbabilisteMenu()">Probabiliste</button>
        <button class="btn" onclick="renderAtbAdapteeMenu()">Adaptée</button>
        <button class="btn" onclick="renderAtbDurees()">Durée</button>
        <button class="btn" onclick="renderAtbRein()">Adaptation rénale</button>
        <button class="btn" onclick="renderAtbModalites()">Modalités</button>
      </div>
      <div id="atb-section-root" style="margin-top:16px;"></div>
    </section>
  `;
}

// Les 5 fonctions suivantes se contentent de déléguer à tes fonctions
// existantes de pwa-atb-rules (renderProbaMenu, renderAdapteeMenu, etc.)

function renderAnesthAntibiopro() {
  $app.innerHTML = `
    <section>
      <h2>Antibioprophylaxie</h2>
      <div id="antibiopro-root"></div>
    </section>
  `;

  const root = document.getElementById("antibiopro-root");

  // Appel réel de ton ancienne logique :
  renderAntibioproForm(root);
}

function renderAtbProbabilisteMenu() {
  const root = document.getElementById("atb-section-root");
  root.innerHTML = "";

  // Appel réel de ta fonction déjà existante :
  renderProbaMenu(root);
}

function renderAtbAdapteeMenu() {
  const root = document.getElementById("atb-section-root");
  root.innerHTML = "";

  renderAdapteeMenu(root);
}

function renderAtbDurees() {
  const root = document.getElementById("atb-section-root");
  root.innerHTML = "";

  renderDureesForm(root);
}

function renderAtbRein() {
  const root = document.getElementById("atb-section-root");
  root.innerHTML = "";

  renderReinForm(root);
}

function renderAtbModalites() {
  const root = document.getElementById("atb-section-root");
  root.innerHTML = "";

  renderModalitesForm(root);
}

// =====================================================================
//  CEC
// =====================================================================

function renderCecMenu() {
  $app.innerHTML = `
    <section>
      <div class="hero">
        <img src="cec.png" alt="CEC" class="menu-section-img" />
        <h2>Circulation extra-corporelle</h2>
      </div>
      <p>Menu CEC à remplir ensuite (priming, anticoagulation, sevrage, particularités, etc.).</p>
    </section>
  `;
}

// =====================================================================
//  PAGES “PLANNING” ET “ANNUAIRE” (PLACEHOLDERS)
// =====================================================================

function renderPlanning() {
  $app.innerHTML = `
    <section>
      <h2>Planning médical</h2>
      <p>Zone à personnaliser (planning de garde, liens vers outils externes, etc.).</p>
    </section>
  `;
}

function renderAnnuaire() {
  $app.innerHTML = `
    <section>
      <h2>Annuaire</h2>
      <p>Zone à personnaliser (numéros utiles, mails, spécialités, etc.).</p>
    </section>
  `;
}

// =====================================================================
//  PAGE 404
// =====================================================================

function renderNotFound() {
  $app.innerHTML = `
    <section>
      <h2>Page introuvable</h2>
      <button class="btn" onclick="location.hash = '#/'">Retour au menu</button>
    </section>
  `;
}

// =====================================================================
//  OUTIL GÉNÉRIQUE POUR LES PAGES D’INTERVENTION
// =====================================================================
//
//  Ce helper sert pour chaque intervention d’anesthésie / réanimation :
//   1/ Titre de l’intervention
//   2/ éventuellement un sous-titre
//   3/ une liste d’encadrés repliables (accordéons).
//
//  Chaque encadré :
//   - encadre.titre : texte du bandeau
//   - encadre.html  : contenu HTML détaillé (issu de ton tableau PPT)
//

function renderInterventionPage({ titre, sousTitre, encadres }) {
  $app.innerHTML = `
    <section>
      <h2>${titre}</h2>
      ${sousTitre ? `<h3>${sousTitre}</h3>` : ""}

      ${encadres
        .map(
          (e, idx) => `
        <article class="accordion" data-idx="${idx}">
          <header class="accordion-header">
            <span>${e.titre}</span>
            <span class="accordion-toggle-icon">▼</span>
          </header>
          <div class="accordion-body">
            ${e.html}
          </div>
        </article>
      `
        )
        .join("")}
    </section>
  `;

  document
    .querySelectorAll(".accordion-header")
    .forEach((header) => {
      header.addEventListener("click", () => {
        const acc = header.parentElement;
        acc.classList.toggle("open");
      });
    });
}

// =====================================================================
//  EXEMPLE : INTERVENTION “PONTAGES CORONAIRES”
// =====================================================================
//
//  ⚠️ Pour l’instant, je ne peux pas reconstituer 100 % de la logique
//  fine (toutes les conditions, tous les calculs) uniquement à partir
//  de l’extraction automatique du PPT, mais la structure est prête.
//
//  Tu pourras peaufiner les champs rouges (inputs), les calculs (vert)
//  et les conditions (orange) directement dans le HTML ci-dessous.
//

function renderInterventionPontages() {
  const encadres = [
    {
      titre: "Caractéristiques patient",
      html: `
        <p><strong>(Choix)</strong></p>
        <div class="form">
          <div class="row">
            <label>Poids (kg)
              <input type="number" id="pontages-poids" min="20" max="250" step="1" />
            </label>
            <label>
              <input type="checkbox" id="pontages-imc50" />
              IMC > 50 kg/m²
            </label>
          </div>
          <div class="row">
            <label>
              <input type="checkbox" id="pontages-induction-risque" />
              Induction à risque (FEVG &lt; 30%, valvulopathie sévère, HTAP)
            </label>
            <label>
              <input type="checkbox" id="pontages-seq-rapide" />
              Séquence rapide
            </label>
          </div>
          <div class="row">
            <label>
              <input type="checkbox" id="pontages-allergie-bl" />
              Allergie aux bêta-lactamines
            </label>
          </div>
        </div>
      `,
    },
    {
      titre: "Monitorage",
      html: `
        <p>
          Scope ECG 5 branches, SpO₂, KTA radial gauche, KTC 5 voies jugulaire interne droite,
          température, diurèse. Swan-Ganz si FEVG &lt; 35% ou HTAP.
        </p>
        <p><strong>Objectif :</strong> lent, mou, fermé.</p>
      `,
    },
    {
      titre: "Anesthésie",
      html: `
        <p>
          Induction AIVOC propofol / sufentanil (ou équivalent) avec curare de type rocuronium.
        </p>
        <p>
          Possibilité d’analgésie locorégionale (bloc parasternale / érecteur du rachis) selon protocole, 
          doses calculées en fonction du poids.
        </p>
      `,
    },
    {
      titre: "Antibioprophylaxie",
      html: `
        <p>
          Céfazoline 2 g (+ 1 g dans le priming CEC) puis 1 g toutes les 4 h.
        </p>
        <p>
          En cas d’allergie aux bêta-lactamines : Vancomycine 30 mg/kg IVL, en une injection 30 minutes
          avant l’incision.
        </p>
      `,
    },
    {
      titre: "ETO (optionnelle)",
      html: `
        <p><strong>Fonction VG :</strong> FEVG visuelle, méthode de Simpson biplan, ITV CCVG.</p>
        <p><strong>VD :</strong> TAPSE, onde S tricuspide, indice de Tei, strain VD.</p>
        <p>
          <span style="color:#0070C0;">Lien ETO fonction VG.png</span><br>
          <span style="color:#0070C0;">Lien ETO VD.png</span>
        </p>
      `,
    },
    {
      titre: "CEC",
      html: `
        <p>Canulation artérielle : aortique.</p>
        <p>Canulation veineuse : atrio-cave.</p>
        <p>Heparinisation, ACT, gestion du débit et de la pression selon protocole du service.</p>
        <p>Sevrage de CEC : surveillance hémodynamique invasive, remplissage, inotropes si besoin.</p>
      `,
    },
  ];

  renderInterventionPage({
    titre: "Pontages coronaires",
    sousTitre: "",
    encadres,
  });
}


function renderSensiblesPage() {
  const $app = document.getElementById("app");
  $app.innerHTML = `
    <div class="bact-page">
      <span class="title-badge">Bactéries multisensibles — tableau de référence</span>

      <div class="info-card">
        <div class="info-content">
          <table class="simple">
            <thead>
              <tr>
                <th rowspan="2">Bactéries pathogènes</th>
                <th rowspan="2">Antibiotique de référence</th>
                <th rowspan="2">Posologie</th>
                <th colspan="2">Break-points cliniques (mg/L)</th>
                <th rowspan="2">Alternatives (dont allergies)</th>
                <th rowspan="2">Remarques</th>
              </tr>
              <tr>
                <th>≤ S</th>
                <th>&gt; R</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><em>Staphylococcus aureus</em></td>
                <td>Cloxacilline</td>
                <td>100-200mg/kg/j</td>
                <td>2<br><small>(mecA-)</small></td>
                <td>2<br><small>(mecA+)</small></td>
                <td>Céfazoline<br>Cotrimoxazole<br>Fluoroquinolones</td>
                <td>Sensibilité préservée à l’Amoxicilline<br>dans 10% des cas (à privilégier dans ce cas)</td>
              </tr>
              <tr>
                <td>Staphylocoques blancs</td>
                <td>Vancomcyine</td>
                <td>30-40mg/kg/24h<br><small>Obj.= 20-30mg/L</small></td>
                <td>4</td>
                <td>4</td>
                <td>Linezolide<br>Daptomycine</td>
                <td><em>S. epidermidis</em> résistant aux β-lactamines<br>dans 70-90% des cas</td>
              </tr>
              <tr>
                <td><em>Streptococcus pneumoniae</em></td>
                <td>Amoxicilline</td>
                <td>50-100mg/kg/24h</td>
                <td>0,5</td>
                <td>2</td>
                <td>Lévofloxacine<br>Spiramycine<br>C3G selon CMI Amox.</td>
                <td>CMI seuil sensibilité diminuée:<br>- > 0,5mg/L ménignites<br>- > 2mg/L autres</td>
              </tr>
              <tr>
                <td>Autres streptocoques<br><small>(Groupes A, B, C &amp; G)</small></td>
                <td>Amoxicilline</td>
                <td>50-100mg/kg/24h</td>
                <td>0,25</td>
                <td>0,25</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td><em>Enterococcus faecalis</em></td>
                <td>Amoxicilline</td>
                <td>50-100mg/kg/24h</td>
                <td>4</td>
                <td>8</td>
                <td>Vancomycine<br>Linezolide<br>Daptomycine</td>
                <td>Résistance à l’Amoxicilline dans 0,5% des cas.<br><br>Résistance naturelle céphalosporines (PLP5)</td>
              </tr>
              <tr>
                <td><em>Enterococcus faecium</em></td>
                <td>Vancomycine</td>
                <td>30-40mg/kg/24h<br><small>Obj.= 20-30mg/L</small></td>
                <td>4<br><small>(vanA-)</small></td>
                <td>4<br><small>(vanA+)</small></td>
                <td>Linezolide<br>Daptomycine<br>Tigécycline</td>
                <td>Résistance à l’Amoxicilline dans 80% des cas.<br><br>Résistance naturelle céphalosporines (PLP5)</td>
              </tr>
              <tr>
                <td><em>Neisseria meningitidis</em></td>
                <td>Amoxicilline</td>
                <td>150-200mg/kg/j si méningite</td>
                <td>0,125</td>
                <td>1</td>
                <td>Macrolides<br>Fluoroquinolones<br>Cyclines<br>Rifampicine<br>C3G (en probabiliste)</td>
                <td>Résistance naturelle au Cotrimoxazole</td>
              </tr>
              <tr>
                <td><em>Neisseria gonorrhoeae</em></td>
                <td>Amoxicilline</td>
                <td>50-100mg/kg/j</td>
                <td>0,06</td>
                <td>1</td>
                <td>C3G (en probabiliste)</td>
                <td>Résistance naturelle au Cotrimoxazole</td>
              </tr>
              <tr>
                <td><em>Moraxella catarrhalis</em></td>
                <td>Amoxicilline-Clav.</td>
                <td>1g/0,5g x3/24h</td>
                <td>1</td>
                <td>1</td>
                <td></td>
                <td>Pénicillinase 95% des cas (R. amox, S. augmentin)</td>
              </tr>
              <tr>
                <td><em>Clostridium difficile</em></td>
                <td>Fidaxomycine</td>
                <td>200mg x2/j PO</td>
                <td>0,5</td>
                <td>0,5</td>
                <td>Vancomycine<br>Métronidazole<br>Tigécycline</td>
                <td>Privilégier Fidaxomycine car moins de récurrences<br>(Fidaxo. &gt; Vancomycine. &gt; Métronidazole)</td>
              </tr>
              <tr>
                <td><em>Listeria monocytogenes</em></td>
                <td>Amoxicilline<br><small>+ Gentamicine 5-8mg/kg</small></td>
                <td>50-100mg/kg/j</td>
                <td>1</td>
                <td></td>
                <td>Cotrimoxazole<br>Macrolides<br>Moxifloxacine<br>Linezolide</td>
                <td>Si inf. neuroméningées : Cotrimoxazole, Moxifloxacine<br>et Linezolide possibles<br><br>Résistant céphalosporines</td>
              </tr>
              <tr>
                <td><em>Nocardia</em> spp.<br><small>N. farcinica<br>N. abscessus<br>N. asteroides<br>N. nova</small></td>
                <td>Cotrimoxazole IV<br><small>en bithérapie avec :</small><br>– Ou Imipénème<br>– Ou Linezolide<br>– Ou Amikacine</td>
                <td>20+100mg/kg/j<br><small>Imipénème 3-4g/24g</small><br><small>Linezolide 600mg x2/j</small><br><small>Amikacine 25-30mg/kg</small></td>
                <td>4<br>8<br>8<br>2/38</td>
                <td>16<br>64<br>16<br>4/76</td>
                <td></td>
                <td>Monothérapie possible (Pneumonies non graves)<br>Choix de la bi-thérapie selon espèce.<br><br>Activité quasi constante (&gt;95%) de cotrimoxazole,<br>linezolide et amikacine.</td>
              </tr>

              <!-- ===== Partie 2 du tableau ===== -->

              <tr>
                <td>Entérobactéries Groupe 0<br><small><em>Proteus mirabilis</em>,<br><em>Salmonella</em> spp.</small></td>
                <td>Amoxicilline</td>
                <td>50-100mg/kg/j</td>
                <td>1</td>
                <td>4</td>
                <td>C3G<br>Aztréonam<br>Ciprofloxacine<br>Cotrimoxazole</td>
                <td>Résistances C3G : BLSE (CTX-M) &gt; AmpC plasmidiques</td>
              </tr>
              <tr>
                <td>Entérobactéries Groupe 1<br><small><em>Escherichia coli</em>,<br><em>Shigella</em></small></td>
                <td>Amoxicilline</td>
                <td>50-100mg/kg/j</td>
                <td>1</td>
                <td>4</td>
                <td>C3G<br>Aztréonam<br>Ciprofloxacine<br>Cotrimoxazole</td>
                <td>Résistances C3G : BLSE (CTX-M) &gt; AmpC déréprimée<br>&gt; AmpC plasmidique</td>
              </tr>
              <tr>
                <td>Entérobactéries Groupe 2<br><small><em>K. pneumoniae</em>,<br><em>K. oxytoca</em>,<br><em>Citrobacter koserii</em></small></td>
                <td>Amoxicilline-Clav.</td>
                <td>1g/0,5g x3/24h</td>
                <td>1</td>
                <td>4</td>
                <td>C3G<br>Aztréonam<br>Ciprofloxacine<br>Cotrimoxazole</td>
                <td>Résistances C3G : BLSE (CTX-M) &gt; AmpC plasmidiques</td>
              </tr>
              <tr>
                <td>Entérobactéries Groupe 3<br><small><em>E. cloacae</em>,<br><em>K. aerogenes</em>,<br><em>C. freundii</em>,<br><em>M. morganii</em>,<br><em>S. marcescens</em>,<br><em>H. alvei</em>,<br><em>Providencia</em></small></td>
                <td>Céfépime</td>
                <td>4-6g/24h</td>
                <td>1</td>
                <td>4</td>
                <td>Ciprofloxacine<br>Cotrimoxazole<br>Tigécycline (sauf protéacées :<br><em>M. morganii</em>, <em>Providencia</em>)</td>
                <td>Résistances C3G : AmpC induite &gt; BLSE &gt; AmpC déréprimée<br><br><em>E. cloacae</em>, <em>K. aerogenes</em>, <em>C. freundii</em> : pas de C3G ou<br>Tazocilline (risque AmpC induite)<br><br><em>S. marcescens</em> résistant naturellement à l’Amikacine</td>
              </tr>
              <tr>
                <td><em>Pseudomonas aeruginosa</em></td>
                <td>Ceftazidime<br><small>ou Pipéracilline</small></td>
                <td>4-6g/24h IVSE<br><small>Pipéracilline 4g x4/24h IVL</small></td>
                <td>0,001<br>0,001</td>
                <td>8<br>16</td>
                <td>Céfépime<br>Aztréonam<br>Ciprofloxacine<br>Carbapénèmes<br>Amikacine</td>
                <td>Résistances : Pase, Case AmpC, BLSE, PorineD2,<br>carbapénèmases, efflux MexAB/XY-OprM<br><br>Résistance naturelle à la Tigécycline.</td>
              </tr>
              <tr>
                <td><em>Acinetobacter baumannii</em></td>
                <td>Imipénème<br><small>+ Amikacine 25-30mg/kg</small></td>
                <td>3-4g/24h</td>
                <td>2<br>4</td>
                <td>8<br>8</td>
                <td>Ciprofloxacine<br>Cotrimoxazole<br>Colistine<br>Tigécycline</td>
                <td>Résistances : Pase, Case AmpC, BLSE,<br>carbapénèmases (ABRI), efflux AdeABC, Acétylase AAC-6’</td>
              </tr>
              <tr>
                <td><em>Stenotrophomonas maltophilia</em></td>
                <td>Cotrimoxazole</td>
                <td>20+100mg/kg/j (12amp/j max)</td>
                <td>0,001</td>
                <td>4</td>
                <td>Ceftazidime<br>Lévofloxacine<br>Tigécycline</td>
                <td>R. ceftazidime = 30% des cas<br>R. lévofloxacine = 20% des cas<br>R. cotrimoxazole = 4% des cas<br><br>Résistance naturelles à tous les aminosides.</td>
              </tr>
              <tr>
                <td><em>Haemophilus influenza</em></td>
                <td>Amoxicilline</td>
                <td>50-100mg/kg/j</td>
                <td>2</td>
                <td>2</td>
                <td>Oflo/Ciproflox.<br>Cotrimoxazole</td>
                <td>Pénicillinase = 21% (R. Amox)<br>Mutation PLP3 = 7% (Résistance Augmentin +/- C3G)<br>C3G en probabiliste</td>
              </tr>
              <tr>
                <td><em>Legionella pneumophila</em></td>
                <td>Levofloxacine</td>
                <td>500mg x2/j</td>
                <td>–</td>
                <td>–</td>
                <td>Spiramycine<br>Rifampicine</td>
                <td>Monothérapie ou bithérapie (Levoflo/Spiramycine) pendant 5j<br>Durée 14-21 jours au total<br>Attention à l’allongement du QTc<br>Résistances aux macrolides/FLQ exceptionnelles (envoi CNR)</td>
              </tr>
              <tr>
                <td><em>Mycoplasma pneumoniae</em></td>
                <td>Spiramycine</td>
                <td>3 MUI x3/j IVL</td>
                <td>–</td>
                <td>–</td>
                <td>Cipro/Lévoflox.<br>Doxycycline</td>
                <td>R. macrolides &lt; 5% en France<br>Absence de résistance connue contre quinolones/cyclines.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;
}


function renderBacteriaPage(slug, data){
  const $app = document.getElementById("app");
  const title = data.title;
  const img = `./img/${slug}.png`; // ex : ./img/SARM.png ou ./img/ampC.png

  $app.innerHTML = `
    <div class="bact-page">
      <span class="title-badge">${title}</span>

      <div class="card bact-hero">
        <img src="${img}" alt="${title}" onerror="this.style.display='none'">
      </div>

      <div class="info-grid">
        <section class="info-card">
          <h3>Définition</h3>
          <div class="info-content">${data.definition}</div>
        </section>

        <section class="info-card">
          <h3>Mécanisme de résistance</h3>
          <div class="info-content">${data.mecanisme}</div>
        </section>

        <section class="info-card">
          <h3>Epidémiologie</h3>
          <div class="info-content">${data.epidemio}</div>
        </section>

        <section class="info-card">
          <h3>Phénotype habituel</h3>
          <div class="info-content">${data.phenotype}</div>
        </section>

        <section class="info-card">
          <h3>Antibiotique de référence</h3>
          <div class="info-content">${data.refAtb}</div>
        </section>

        <section class="info-card">
          <h3>Antibiotique selon le site infectieux</h3>
          <div class="info-content">${data.siteAtb}</div>
        </section>

        <section class="info-card">
          <h3>Ajout si choc septique</h3>
          <div class="info-content">${data.choc}</div>
        </section>
      </div>

      <div class="actions">
        <button class="btn ghost" onclick="history.back()">← Retour</button>
      </div>
    </div>
  `;
}

const BACTERIA_DATA = {
  SARM: {
    title: "Staphylococcus aureus résistant à la méticilline (SARM)",
    definition: `
      Souches de <em>S. aureus</em> résistantes aux pénicillines M (Cloxacilline et Oxacilline), 
      qui constituent le traitement de référence des infections invasives à <em>Staphylocoque aureus</em>.`,
    mecanisme: `
      Le phénotype de résistance du SARM est expliqué par 2 mécanismes :<br>
      • Synthèse d’une Pénicillinase (gène <em>blaZ</em>) chez 90% des souches de <em>S. aureus</em><br>
      • Modification de la PLP (PLP2a) codée par le gène <em>mecA</em> (uniquement chez le SARM).`,
    epidemio: `11% des souches de <em>S. aureus</em> invasives documentées sont des SARM (2023, France).`,
    phenotype: `
      <table class="pheno"><thead>
        <tr><th>S. aureus</th><th>SAMS Sauvage</th><th>SAMS Pase</th><th>SARM</th><th>VRSA</th></tr>
      </thead><tbody>
        <tr><td>Amoxicilline</td><td>S</td><td>R</td><td>R</td><td>R</td></tr>
        <tr><td>Oxa/Cloxacilline</td><td>S</td><td>S</td><td>R</td><td>R</td></tr>
        <tr><td>Augmentin</td><td>S</td><td>S</td><td>R</td><td>R</td></tr>
        <tr><td>C1G/C2G</td><td>S</td><td>S</td><td>R</td><td>R</td></tr>
        <tr><td>C3G/C4G</td><td>S</td><td>S</td><td>R</td><td>R</td></tr>
        <tr><td>C5G</td><td>S</td><td>S</td><td>S</td><td>R</td></tr>
        <tr><td>Carbapénèmes</td><td>S</td><td>S</td><td>R</td><td>R</td></tr>
        <tr><td>Lévofloxacine</td><td>S</td><td>S</td><td>I/R</td><td>R</td></tr>
        <tr><td>Gentamicine</td><td>S/I/R</td><td>S/I/R</td><td>S/I/R</td><td>S/I/R</td></tr>
        <tr><td>Vancomycine</td><td>S</td><td>S</td><td>S</td><td>R</td></tr>
        <tr><td>Daptomycine/Linezolide</td><td>S</td><td>S</td><td>S</td><td>S</td></tr>
      </tbody></table>`,
    refAtb: `
      <table class="simple">
        <thead><tr><th>Molécule</th><th>Posologie</th><th>BP EUCAST</th><th>Effets indésirables</th></tr></thead>
        <tbody>
          <tr>
            <td>Vancomycine</td>
            <td>15–30 mg/kg IVL<br>+ 30–40 mg/kg/24h IVSE<br>Objectif = C. continue 20–30 mg/L</td>
            <td>S : CMI ≤ 2 mg/L<br>R : CMI &gt; 2 mg/L</td>
            <td>Red-man syndrome, veinotoxicité,<br>néphrotoxicité, ototoxicité,<br>neutropénies</td>
          </tr>
        </tbody>
      </table>`,
    siteAtb: `
      <table class="simple">
        <thead><tr><th>Site infectieux</th><th>1ère intention</th><th>Alternatives</th></tr></thead>
        <tbody>
          <tr>
            <td>Pneumonie</td>
            <td>Linézolide 600 mg x2/j PO/IV<br><br>+ Clindamycine 3–6 mg/kg x4/j PO/IV<br>si infection sévère (toxine PVL)</td>
            <td>Vancomycine<br>ou CTX 20+100 mg/kg/j<br><br>+ Clindamycine si inf. sévère<br><em>(Daptomycine inactivée)</em></td>
          </tr>
          <tr>
            <td>Bactériémie</td>
            <td>Vancomycine<br>ou Daptomycine 10 mg/kg/j</td>
            <td>–</td>
          </tr>
          <tr>
            <td>Inf. abdominale</td>
            <td>Vancomycine</td>
            <td>Linézolide<br>ou Cotrimoxazole<br>ou Tigécycline 100 mg puis 50 mg x2/j IV si inf.sévère</td>
          </tr>
          <tr>
            <td>Infection urinaire</td>
            <td>Vancomycine</td>
            <td>Linézolide<br>ou Cotrimoxazole</td>
          </tr>
          <tr>
            <td>Dermo-hypodermite</td>
            <td>Vancomycine<br>+ Clindamycine si infection sévère</td>
            <td>Linézolide<br>ou Cotrimoxazole<br>ou Tigécycline si inf. sévère<br><br>+ Clindamycine si infection sévère</td>
          </tr>
        </tbody>
      </table>`,
    choc: `
      <table class="simple">
        <thead><tr><th>Molécule</th><th>Posologie</th><th>Effets indésirables</th></tr></thead>
        <tbody>
          <tr>
            <td>Gentamicine<br>(sensibilité = 94%)</td>
            <td>8 mg/kg IVL sur 30 min<br>Objectif pic 30 min : CMI x8–10<br>Objectif résiduelle : &lt; 0,5 mg/L</td>
            <td>Néphrotoxicité (NTA),<br>Toxicité cochléaire (irréversible)</td>
          </tr>
        </tbody>
      </table>`
  },

    ampC: {
    title: "Entérobactéries sécrétrices de céphalosporinase AmpC",
    definition: `
      Entérobactéries sécrétrices d’une enzyme responsable de l’hydrolyse des C1G/C2G, 
      C3G dans certaines conditions (« Case de haut niveau »), sans hydrolyse du céfépime.`,
    mecanisme: `
      Les entérobactéries de groupes 1 et 3 sont porteuses de Case <em>ampC</em> chromosomiques. 
      Leur production peut être amplifiée dans 2 conditions (Case hyperproduite) :<br>
      • <strong>Induction (Groupe 3)</strong> : Surproduction de AmpC à la suite d’une antibiothérapie inductrice<br>
      • <strong>Dérépression (Groupe 1 &amp; 3)</strong> : Mutation d’un gène régulateur de AmpC<br><br>
      <em>Attention :</em> En cas de transmission plasmidique, les entérobactéries des groupes 0 et 2 
      peuvent également exprimer des Case <em>ampC</em> (<em>K. pneumoniae</em> en particulier).`,
    epidemio: `
      La résistance aux C3G chez les entérobactéries est expliquée dans 76% par une BLSE, 
      et dans 25% par une Case <em>ampC</em> (2023, France).`,
    phenotype: `
      <div class="muted">Phénotype habituel selon le groupe d’entérobact.</div>
      <table class="pheno"><thead>
        <tr>
          <th>Entérobactéries</th>
          <th>Groupes 0 &amp; 1</th>
          <th>Groupe 2 — Pase</th>
          <th>Groupe 3 — AmpC naturelle</th>
          <th>Groupe 3 (&amp; 1) — AmpC hyperproduite</th>
        </tr>
      </thead><tbody>
        <tr><td>Amoxicilline</td><td>S</td><td>R</td><td>R</td><td>R</td></tr>
        <tr><td>Amox./Clav.</td><td>S</td><td>S</td><td>R</td><td>R</td></tr>
        <tr><td>Pipéracilline</td><td>S</td><td>S/I</td><td>S</td><td>R</td></tr>
        <tr><td>Pipé./Tazo.</td><td>S</td><td>S</td><td>S</td><td>I/R</td></tr>
        <tr><td>C1G/C2G</td><td>S</td><td>S</td><td>I/R</td><td>R</td></tr>
        <tr><td>C3G</td><td>S</td><td>S</td><td>S</td><td>R</td></tr>
        <tr><td>Céfépime</td><td>S</td><td>S</td><td>S</td><td>S</td></tr>
        <tr><td>Carbapénèmes</td><td>S</td><td>S</td><td>S</td><td>S</td></tr>
        <tr><td>Aztréonam</td><td>S</td><td>S</td><td>S/I/R</td><td>R</td></tr>
        <tr><td>Ciprofloxacine</td><td>S</td><td>S</td><td>S</td><td>S</td></tr>
        <tr><td>Amikacine</td><td>S</td><td>S</td><td>S (sauf <em>Serratia</em>)</td><td>S (sauf <em>Serratia</em>)</td></tr>
      </tbody></table>`,
    refAtb: `
      <table class="simple">
        <thead><tr><th>Molécule</th><th>Posologie</th><th>BP EUCAST</th><th>Effets indésirables</th></tr></thead>
        <tbody>
          <tr>
            <td>Céfépime</td>
            <td>Charge 2 g IVL<br>+ 4–6 g/24h IVSE</td>
            <td>S : CMI ≤ 1<br>R : CMI &gt; 4</td>
            <td>Allergies (croisée pénicilline &lt; 5%),<br>neurotoxicité, néphrotoxicité,<br>effets digestifs</td>
          </tr>
        </tbody>
      </table>`,
    siteAtb: `
      <table class="simple">
        <thead><tr><th>Site infectieux</th><th>1ère intention</th><th>Alternatives (Dont allergies β-lactamines)</th></tr></thead>
        <tbody>
          <tr>
            <td>Pneumonie</td>
            <td>Céfépime IV</td>
            <td>Ciprofloxacine 400 mg x2/j IV ou 750 mg x2/j PO<br>
                Cotrimoxazole 20+100 mg/kg/j PO/IV (dose max)</td>
          </tr>
          <tr>
            <td>Bactériémie</td>
            <td>Céfépime IV</td>
            <td>Ciprofloxacine IV/PO ou Cotrimoxazole IV/PO</td>
          </tr>
          <tr>
            <td>Inf. intra-abdominale</td>
            <td>Céfépime IV<br>+ Métronidazole 500mg x3/j IV/PO</td>
            <td>Ciprofloxacine IV/PO ou Cotrimoxazole IV/PO<br>ou Tigécycline 100mg puis 50mg x2/j IV si inf. sévère</td>
          </tr>
          <tr>
            <td>Infection urinaire</td>
            <td>Céfépime IV puis FLQ/Cotrimoxazole</td>
            <td>Ciprofloxacine IV/PO ou Cotrimoxazole IV/PO</td>
          </tr>
          <tr>
            <td>Dermo-hypodermite</td>
            <td>Céfépime IV</td>
            <td>Ciprofloxacine IV/PO ou Cotrimoxazole IV/PO<br>ou Tigécycline IV si inf. sévère</td>
          </tr>
        </tbody>
      </table>`,
    choc: `
      <table class="simple">
        <thead><tr><th>Molécule</th><th>Posologie</th><th>Effets indésirables</th></tr></thead>
        <tbody>
          <tr>
            <td>Amikacine <br>(Gentamicine pour <em>Serratia marcescens</em>)</td>
            <td>30 mg/kg IVL 30’<br>Obj pic 30’ &gt; CMI×8<br>Obj. résid. &lt; 5 mg/L</td>
            <td>Néphrotoxicité (NTA),<br>Toxicité cochléaire (irréversible)</td>
          </tr>
        </tbody>
      </table>`
  }
};

BACTERIA_DATA.BLSE = {
  title: "Entérobactéries sécrétrices de BLSE",
  definition: `
    Sécrétion de β-lactamases d’origine plasmidique (résistance acquise) responsables d’une hydrolyse des pénicillines,
    céphalosporines (dont C4G) et aztréonam. Les céphamycines (Céfoxitine) et carbapénèmes ne sont pas hydrolysées.`,
  mecanisme: `
    β-lactamases transmises sur plasmides au sein des population d’entérobactéries et BGN non fermentants. Les principales enzymes impliquées sont :<br>
    • Depuis 1990 : Enzymes dérivées des pénicillinases TEM et SHV (minoritaires)<br>
    • Depuis 2000 : Nouvelles BLSE : CTX-M (nettement majoritaires).`,
  epidemio: `
    La résistance aux C3G chez les entérobactéries est expliquée dans 76% par une BLSE, et dans 25% par une Case ampC.
    Des BLSE étaient sécrétées par 8% des souches cliniques de <em>E. coli</em> et 25% des souches cliniques de <em>K. pneumoniae</em> (Europe, 2023).`,
  phenotype: `
    <div class="muted">Phénotype habituel selon le groupe d’entérobact.</div>
    <table class="pheno"><thead>
      <tr>
        <th>Entérobactéries</th><th>Groupes 0 &amp; 1</th><th>Groupe 2 — Pase</th>
        <th>Groupe 3 — AmpC</th><th>Case AmpC hyperproduite</th><th>BLSE</th>
      </tr>
    </thead><tbody>
      <tr><td>Amoxicilline</td><td>S</td><td>R</td><td>R</td><td>R</td><td>R</td></tr>
      <tr><td>Amox./Clav.</td><td>S</td><td>S</td><td>R</td><td>R</td><td>I/R</td></tr>
      <tr><td>Pipéracilline</td><td>S</td><td>S/I</td><td>S</td><td>R</td><td>R</td></tr>
      <tr><td>Pipé./Tazo.</td><td>S</td><td>S</td><td>S</td><td>I/R</td><td>I/R</td></tr>
      <tr><td>C1G/C2G</td><td>S</td><td>S</td><td>I/R</td><td>R</td><td>R</td></tr>
      <tr><td>C3G</td><td>S</td><td>S</td><td>S</td><td>R</td><td>R</td></tr>
      <tr><td>Céfépime</td><td>S</td><td>S</td><td>S</td><td>S</td><td>R</td></tr>
      <tr><td>Carbapénèmes</td><td>S</td><td>S</td><td>S</td><td>S</td><td>S</td></tr>
      <tr><td>Aztréonam</td><td>S</td><td>S</td><td>S/I/R</td><td>R</td><td>R</td></tr>
      <tr><td>Ciprofloxacine</td><td>S</td><td>S</td><td>S</td><td>S</td><td>I/R</td></tr>
      <tr><td>Amikacine</td><td>S</td><td>S</td><td>S (sauf <em>Serratia</em>)</td><td>S (sauf <em>Serratia</em>)</td><td>S (sauf <em>Serratia</em>)</td></tr>
    </tbody></table>`,
  refAtb: `
    <table class="simple">
      <thead><tr><th>Molécules</th><th>Posologie</th><th>BP EUCAST</th><th>Effets indésirables</th></tr></thead>
      <tbody>
        <tr>
          <td>Méropénème</td><td>4–6 g/24h IV</td>
          <td>S : CMI ≤ …<br>R : CMI &gt; 8</td>
          <td>Allergies, néphrotox.,<br>troubles digestifs</td>
        </tr>
        <tr>
          <td>Imipénème</td><td>3–4 g/24h IV</td>
          <td>S : CMI ≤ 2<br>R : CMI &gt; 4</td>
          <td>Allergies, neurotox (Imip.),<br>néphrotox., troubles digestifs</td>
        </tr>
      </tbody>
    </table>`,
  siteAtb: `
    <table class="simple">
      <thead><tr><th>Site infectieux</th><th>1ère intention</th><th>B-lact. alternative (inf. non grave)</th><th>Si allergie β-lactamines</th></tr></thead>
      <tbody>
        <tr><td>Pneumonie</td><td>Méropénème</td><td>Témocilline 2–4 g/j IV</td><td>Colimycine 9–12 MUI x3/j IV</td></tr>
        <tr><td>Bactériémie</td><td>Méropénème</td><td>Témocilline</td><td>–</td></tr>
        <tr><td>Péritonite</td><td>Imipénème</td><td>–</td><td>Tigécycline 100 mg puis 50 mg x2/j IV (inf. sévère)</td></tr>
        <tr><td>Infection biliaire</td><td>Imipénème ou Méropénème</td><td>Pipéracilline/Tazobactam</td>
            <td>Ciprofloxacine 400 mg x2/j IV<br>CTX 20+100 mg/kg/j IV/PO<br>Tigécycline (inf. sévère)</td></tr>
        <tr><td>Infection urinaire</td><td>Imipénème ou Méropénème</td><td>Pipéracilline/Tazobactam, Témocilline</td>
            <td>Ciprofloxacine 400 mg x2/j IV<br>CTX 20+100 mg/kg/j IV/PO</td></tr>
        <tr><td>Dermo-hypodermite</td><td>Méropénème</td><td>Témocilline</td><td>Tigécycline (infection sévère)</td></tr>
      </tbody>
    </table>`,
  choc: `
    <table class="simple">
      <thead><tr><th>Molécule</th><th>Posologie</th><th>Effets indésirables</th></tr></thead>
      <tbody>
        <tr>
          <td>Amikacine<br>(Gentamicine pour <em>Serratia marcescens</em>)</td>
          <td>30 mg/kg IVL 30 min<br>Objectif pic 30 min : CMI ×8–10 (60–80 mg/L)<br>Objectif résiduelle : &lt; 5 mg/L</td>
          <td>Néphrotoxicité (NTA),<br>Toxicité cochléaire (irréversible)</td>
        </tr>
      </tbody>
    </table>`
};

BACTERIA_DATA.pyo = {
  title: "Pseudomonas aeruginosa MDR et XDR",
  definition: `
    Les souches de <em>P. aeruginosa</em> sont définies comme multi-résistantes (MDR) ou ultra-résistantes (XDR) devant 3 ou 5 résistances respectivement parmi :<br>
    • Les pénicillines (Pipéracilline-Tazobactam)<br>
    • Les céphalosporines (Ceftazidime)<br>
    • Les carbapénèmes (Imipénème ou méropénème)<br>
    • Les fluoroquinolones (Ciprofloxacine)<br>
    • Les aminosides (Gentamicine, amikacine et/ou tobramycine).`,
  mecanisme: `
    <em>P. aeruginosa</em> peut exprimer un grand nombre de gènes de résistance naturels (chromosomiques) et acquis (plasmidiques) :<br>
    • <strong>β-lactamines</strong> : Case (AmpC), BLSE (CTX-M), carbapénèmases (KPC, OXA198), mutation <em>oprD</em> (porine D2 mutée), pompes à efflux (MexAB-OprM, MexXY-OprM)<br>
    • <strong>Aminosides</strong> : Acétylases AAC-6’, méthylase ArmA, pompe à efflux MexXY-OprM<br>
    • <strong>Fluoroquinolones</strong> : Mutations <em>gyrA</em> et <em>parC</em>, efflux MexAB-OprM et MexXY-OprM.`,
  epidemio: `Parmi les souches invasives de <em>P. aeruginosa</em> documentées : 12% sont résistantes aux carbapénèmes, 6% sont MDR, et 4,4% sont XDR (2021, France).`,
  phenotype: `
    <table class="pheno">
      <thead>
        <tr>
          <th><em>P. aeruginosa</em></th>
          <th>WT</th>
          <th>Case (AmpC)</th>
          <th>BLSE (PER, VEB)</th>
          <th>Carbapé-nèmase</th>
          <th>Perte OprD2</th>
          <th>MexAB-OprM</th>
          <th>MexXY-OprM</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>Pipéracilline</td><td>S</td><td>I/R</td><td>R</td><td>R</td><td>I</td><td>I</td><td>I</td></tr>
        <tr><td>Pipé/Tazo.</td><td>S</td><td>I/R</td><td>I</td><td>R</td><td>I</td><td>I</td><td>I</td></tr>
        <tr><td>Ceftazidime</td><td>S</td><td>I/R</td><td>R</td><td>R</td><td>I</td><td>I</td><td>I</td></tr>
        <tr><td>Céfépime</td><td>S</td><td>I/R</td><td>R</td><td>R</td><td>I</td><td>I</td><td>I/R</td></tr>
        <tr><td>Aztréonam</td><td>S</td><td>I/R</td><td>R</td><td>I/R</td><td>I</td><td>I/R</td><td>I</td></tr>
        <tr><td>Cefto/Tazo.</td><td>S</td><td>S</td><td>S</td><td>R</td><td>S</td><td>–</td><td>–</td></tr>
        <tr><td>Méropénème</td><td>S</td><td>S</td><td>S</td><td>R</td><td>I/R</td><td>S/I</td><td>S</td></tr>
        <tr><td>Ciprofloxacine</td><td>S</td><td>S</td><td>I/R</td><td>R</td><td>S</td><td>R</td><td>R</td></tr>
        <tr><td>Amikacine</td><td>S</td><td>S</td><td>S/I</td><td>S/I/R</td><td>S</td><td>S</td><td>R</td></tr>
      </tbody>
    </table>`,
  refAtb: `
    <table class="simple">
      <thead><tr><th>Molécule</th><th>Posologie</th><th>BP EUCAST</th><th>Effets indésirables</th></tr></thead>
      <tbody>
        <tr>
          <td>Ceftolozane–Tazobactam</td>
          <td>2 g/1 g x3/j IVL</td>
          <td>S : CMI ≤ 4 mg/L<br>R : CMI &gt; 4 mg/L</td>
          <td>Allergies (croisée pénicilline &lt; 5%),<br>neurotoxicité, néphrotoxicité,<br>troubles digestifs</td>
        </tr>
      </tbody>
    </table>`,
 siteAtb: `
  <table class="simple">
    <thead>
      <tr>
        <th>Site infectieux</th>
        <th>1ère intention</th>
        <th>Alternatives (dont allergies β-lactamines)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Pneumonie</td>
        <td>Ceftolozane-Tazobactam</td>
        <td>
          Ceftazidime/Avibactam 2g/0,5g x3/j IVL<br>
          Imipénème/Relebactam 500mg/250mg x4/j IV<br>
          Céfidérocol 2g x3/j IVL<br>
          Colimycine 9–12 MUI x3/j IV (Pneumonies)
        </td>
      </tr>
      <tr>
        <td>Bactériémie</td>
        <td>Ceftolozane-Tazobactam</td>
        <td>
          Ceftazidime/Avibactam 2g/0,5g x3/j IVL<br>
          Imipénème/Relebactam 500mg/250mg x4/j IV<br>
          Céfidérocol 2g x3/j IVL
        </td>
      </tr>
      <tr>
        <td>Inf. intra-abdominale</td>
        <td>Ceftolozane-Tazobactam</td>
        <td>
          Ceftazidime/Avibactam 2g/0,5g x3/j IVL<br>
          Imipénème/Relebactam 500mg/250mg x4/j IV<br>
          Céfidérocol 2g x3/j IVL
        </td>
      </tr>
      <tr>
        <td>Infection urinaire</td>
        <td>Ceftolozane-Tazobactam</td>
        <td>
          Ceftazidime/Avibactam 2g/0,5g x3/j IVL<br>
          Imipénème/Relebactam 500mg/250mg x4/j IV<br>
          Céfidérocol 2g x3/j IVL
        </td>
      </tr>
      <tr>
        <td>Dermo-hypodermite</td>
        <td>Ceftolozane-Tazobactam</td>
        <td>
          Ceftazidime/Avibactam 2g/0,5g x3/j IVL<br>
          Imipénème/Relebactam 500mg/250mg x4/j IV<br>
          Céfidérocol 2g x3/j IVL
        </td>
      </tr>
    </tbody>
  </table>`, // :contentReference[oaicite:9]{index=9}

  choc: `
    <table class="simple">
      <thead><tr><th>Molécule</th><th>Posologie</th><th>Effets indésirables</th></tr></thead>
      <tbody>
        <tr>
          <td>Amikacine</td>
          <td>30 mg/kg IVL<br>Objectif pic &gt; CMI×8<br>Objectif résiduelle &lt; 5 mg/L</td>
          <td>Néphrotoxicité (NTA),<br>Toxicité cochléaire (irréversible)</td>
        </tr>
      </tbody>
    </table>`
};


BACTERIA_DATA.acineto = {
  title: "Acinetobacter baumannii résistant aux carbapénèmes",
  definition: `
    <em>Acinetobacter baumannii</em> est également susceptible d’évoluer vers des souches multirésistantes en milieu nosocomial,
    et notamment vers la résistance aux carbapénèmes (ABRI = <em>A. baumannii</em> résistant à l’Imipénème).`,
  mecanisme: `
    <em>A. baumannii</em> peut exprimer de nombreux gènes de résistance naturels (chromosomiques) et acquis (plasmidiques) :<br>
    • β-lactamines : Pase (SCO-1), Case (AmpC), carbapénèmases (KPC, NDM, OXA23), pompe à efflux AdeABC<br>
    • Aminosides : Acétylase AAC-6’, méthylase ArmA, pompes à efflux AdeABC et AbeM<br>
    • Fluoroquinolones : Mutations <em>gyrA</em>, pompes à efflux AdeABC et AbeM.`,
  epidemio: `Parmi les souches invasives de <em>A. baumannii</em> documentées : 15% sont résistantes à l’Imipénème (2021, France).`,
  phenotype: `
    <table class="pheno"><thead>
      <tr>
        <th><em>A. baumannii</em></th><th>WT</th><th>Pase</th><th>Case</th><th>Pase + Case</th><th>BLSE</th><th>ABRI</th>
      </tr>
    </thead><tbody>
      <tr><td>Pipéracilline</td><td>S</td><td>R</td><td>I/R</td><td>R</td><td>R</td><td>S/I/R</td></tr>
      <tr><td>Pipé/Tazo.</td><td>S</td><td>I</td><td>I/R</td><td>R</td><td>R</td><td>S/I/R</td></tr>
      <tr><td>Ceftazidime</td><td>S</td><td>S</td><td>I/R</td><td>I/R</td><td>R</td><td>S/I/R</td></tr>
      <tr><td>Céfépime</td><td>S</td><td>S</td><td>S/I/R</td><td>S/I/R</td><td>R</td><td>S/I/R</td></tr>
      <tr><td>Aztréonam</td><td>I</td><td>I</td><td>R</td><td>R</td><td>R</td><td>S/I/R</td></tr>
      <tr><td>Imipénème</td><td>S</td><td>S</td><td>S</td><td>S</td><td>S</td><td>R</td></tr>
      <tr><td>Ciprofloxacine</td><td>S</td><td>S</td><td>S</td><td>S</td><td>I/R</td><td>S/I/R</td></tr>
      <tr><td>Amikacine</td><td>S</td><td>S</td><td>S</td><td>S</td><td>S/I</td><td>S/I</td></tr>
    </tbody></table>`,
  refAtb: `
    <table class="simple">
      <thead><tr><th>Molécule</th><th>Posologie</th><th>BP EUCAST</th><th>+ 1 antibiotique parmi…</th></tr></thead>
      <tbody>
        <tr>
          <td>Ampicilline-sulbactam</td>
          <td>2 g/1 g x3/j IV</td>
          <td>Données insuffisantes</td>
          <td>Colimycine, amikacine, tigécycline, méropénème (si CMI &lt; 8 mg/L)</td>
        </tr>
      </tbody>
    </table>`,
  siteAtb: `
  <table class="simple">
    <thead>
      <tr>
        <th>Site infectieux</th>
        <th>1ère intention</th>
        <th>Alternatives (dont allergies β-lactamines)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Pneumonie</td>
        <td>Ampicilline-sulbactam<br>+ autre antibiotique</td>
        <td>Bithérapie associant :<br>- Méropénème 4–6 g/24h IV (sauf allergie)<br>-Colistine 9–12 MUI x3/j IV<br>- Amikacine 25–30 mg/kg IV</td>
      </tr>
      <tr>
        <td>Bactériémie</td>
        <td>Ampicilline-sulbactam<br>+ autre antibiotique</td>
        <td>Bithérapie associant :<br>- Méropénème 4–6 g/24h IV (sauf allergie)<br>- Amikacine 25–30 mg/kg IV</td>
      </tr>
      <tr>
        <td>Inf. intra-abdominale</td>
        <td>Ampicilline-sulbactam<br>+ autre antibiotique</td>
        <td>Bithérapie associant :<br>- Méropénème 4–6 g/24h IV (sauf allergie)<br>- Tigécycline 100 mg puis 50 mg x2/j IV<br>- Amikacine 25–30 mg/kg IV</td>
      </tr>
      <tr>
        <td>Infection urinaire</td>
        <td>Ampicilline-sulbactam<br>+ autre antibiotique</td>
        <td>Bithérapie associant :<br>- Méropénème 4–6 g/24h IV (sauf allergie)<br>- Amikacine 25–30 mg/kg IV</td>
      </tr>
      <tr>
        <td>Dermo-hypodermite</td>
        <td>Ampicilline-sulbactam<br>+ autre antibiotique</td>
        <td>Bithérapie associant :<br>- Méropénème 4–6 g/24h IV (sauf allergie)<br>- Tigécycline 100 mg puis 50 mg x2/j IV<br>- Amikacine 25–30 mg/kg IV</td>
      </tr>
    </tbody>
  </table>`,

  choc: `
    <table class="simple">
      <thead><tr><th>Molécule</th><th>Posologie</th><th>Effets indésirables</th></tr></thead>
      <tbody>
        <tr>
          <td>Amikacine (Sauf si employé dans la bithérapie)</td>
          <td>30 mg/kg IVL<br>Obj. pic &gt; CMI×8<br>Obj. résiduelle &lt; 5 mg/L</td>
          <td>Néphrotoxicité (NTA),<br>Toxicité cochléaire (irréversible)</td>
        </tr>
      </tbody>
    </table>`
};

BACTERIA_DATA.steno = {
  title: "Stenotrophomonas maltophilia",
  definition: `
    <em>Stenotrophomonas maltophilia</em> est un BGN non fermentant de l’environnement et de la flore intestinale de l’homme,
    ayant un pouvoir pathogène en milieu nosocomial, et caractérisé par de nombreuses résistances naturelles
    induites par la pression de sélection antibiotique.`, // :contentReference[oaicite:2]{index=2}

  mecanisme: `
    <p><em>S. maltophilia</em> présente des résistances naturelles contre :</p>
    <p><strong>Les β-lactamines</strong> : Hydrolyse par 2 types de β-lactamases<br>
    - β-lactamase L1 (Classe B) : R. pénicillines, céphalosporines, carbapénèmes<br>
    - β-lactamase L1 (Classe A) : BLSE (R. Péni, céphalosporines, aztréonam)</p>
    <p><strong>Les aminosides</strong> : Modification des aminosides par les enzymes : APH-3’, ANT-2’, AAC-6’</p>
    <p><strong>Autres</strong> : La colistine et la fosfomycine</p>`, // :contentReference[oaicite:3]{index=3}

  epidemio: `
    Les souches invasives de <em>S. maltophilia</em> sont toujours résistantes aux β-lactamines
    (sauf Ceftazidime : résistance dans 30% des cas), toujours résistantes aux aminosides,
    et résistantes à la Lévofloxacine dans 20% des cas. Elles sont sensibles au Cotrimoxazole dans 96% des cas
    (1997–2016, Monde).`, // :contentReference[oaicite:4]{index=4}

  phenotype: `
  <table class="simple">
    <thead>
      <tr>
        <th><em>S. maltophilia</em></th>
        <th>Sauvage</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>Pipéracilline</td><td>R</td></tr>
      <tr><td>Pipé/Tazo.</td><td>R</td></tr>
      <tr><td>Ceftazidime</td><td>S/I</td></tr>
      <tr><td>Céfépime</td><td>R</td></tr>
      <tr><td>Aztréonam</td><td>R</td></tr>
      <tr><td>Imi/méropénème</td><td>R</td></tr>
      <tr><td>Lévofloxacine</td><td>S (80% des cas)</td></tr>
      <tr><td>Aminosides</td><td>R</td></tr>
      <tr><td>Cotrimoxazole</td><td>S (96% des cas)</td></tr>
    </tbody>
  </table>`,

  refAtb: `
    <table class="simple">
      <thead><tr><th>Molécule</th><th>Posologie</th><th>BP EUCAST</th><th>Effets secondaires</th></tr></thead>
      <tbody>
        <tr>
          <td>Cotrimoxazole</td>
          <td>20+100 mg/kg/j PO/IV (dose max)</td>
          <td>S : CMI ≤ 0,001 mg/L<br>R : CMI &gt; 4 mg/L</td>
          <td>Neutropénies, néphrotox., neurotox.,<br>hépatotox., sd Lyell &amp; SJ</td>
        </tr>
      </tbody>
    </table>`, // :contentReference[oaicite:6]{index=6}

siteAtb: `
    <table class="simple">
      <thead>
        <tr>
          <th>Site infectieux</th>
          <th>1ère intention</th>
          <th>Alternatives ou bithérapie (si grave ou immunodépressé)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Pneumonie</td>
          <td>Cotrimoxazole</td>
          <td>
            Ceftazidime 4-6g/24h IVSE<br>
            Lévofloxacine 500mg x2/j IV/PO
          </td>
        </tr>
        <tr>
          <td>Bactériémie</td>
          <td>Cotrimoxazole</td>
          <td>
            Ceftazidime 4-6g/24h IVSE<br>
            Lévofloxacine 500mg x2/j IV/PO
          </td>
        </tr>
        <tr>
          <td>Inf. intra-abdominale</td>
          <td>Cotrimoxazole</td>
          <td>
            Ceftazidime 4-6g/24h IVSE<br>
            Lévofloxacine 500mg x2/j IV/PO<br>
            Tigécycline 100mg puis 50mg x2/j IV pour inf. sévères
          </td>
        </tr>
        <tr>
          <td>Infection urinaire</td>
          <td>Cotrimoxazole</td>
          <td>
            Ceftazidime 4-6g/24h IVSE<br>
            Lévofloxacine 500mg x2/j IV/PO
          </td>
        </tr>
        <tr>
          <td>Dermo-hypodermite</td>
          <td>Cotrimoxazole</td>
          <td>
            Ceftazidime 4-6g/24h IVSE<br>
            Lévofloxacine 500mg x2/j IV/PO<br>
            Tigécycline 100mg puis 50mg x2/j IV pour inf. sévères
          </td>
        </tr>
      </tbody>
    </table>`, 

  choc: `
      <p><strong>Aminosides :</strong> S. maltophilia résiste aux aminosides</p>
      <p><strong>Bithérapie :</strong> Bithérapie Bactrim/Levofloxacine indiquée</p>
`,
};

BACTERIA_DATA.carba = {
  title: "Entérobactéries sécrétrices de carbapénèmases",
  definition: `
    Sécrétion de carbapénèmases d’origine plasmidique (résistance acquise) responsables d’une hydrolyse de l’ensemble des β-lactamines par des entérobactéries originaires du tube digestif.`,
  mecanisme: `
    Carbapénèmases transmises sur plasmides au sein des population d’entérobactéries. Les principales enzymes impliquées dans le monde sont :<br>
    • KPC (Classe A)<br>
    • NDM, VIM, IMP (Classe B)<br>
    • OXA48 (Classe D).`,
  epidemio: `
    Les genres bactériens concernés sont par ordre décroissant : <em>Klebsiella</em> spp., <em>Enterobacter</em> spp., <em>Escherichia coli</em>, <em>Citrobacter</em> spp.<br>
    Les mécanismes impliqués étaient : 63% de OXA48 (Classe D), 20% de NDM (Classe B), 9% de VIM (Classe B), et 2,9% de KPC (Classe A). (CNR Kremlin Bicêtre 2021)`,
  phenotype: `
    <table class="pheno">
      <thead>
        <tr>
          <th>Type</th>
          <th>KPC (classe A)</th>
          <th>NDM / VIM (classe B)</th>
          <th>OXA-48 (classe D)</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>Amoxicilline</td><td>R</td><td>R</td><td>R</td></tr>
        <tr><td>Amoxicilline–Ac. Clav.</td><td>I/R</td><td>R</td><td>R</td></tr>
        <tr><td>Ticarcilline</td><td>R</td><td>R</td><td>R</td></tr>
        <tr><td>Pipéracilline</td><td>R</td><td>R</td><td>R</td></tr>
        <tr><td>Pipéracilline–Tazobact.</td><td>I/R</td><td>R</td><td>R</td></tr>
        <tr><td>C1G/C2G</td><td>I/R</td><td>R</td><td>S</td></tr>
        <tr><td>Céphamycines (Cefoxitine)</td><td>I/R</td><td>R</td><td>S</td></tr>
        <tr><td>C3G</td><td>I/R</td><td>R</td><td>S</td></tr>
        <tr><td>Céfépime</td><td>I/R</td><td>R</td><td>S</td></tr>
        <tr><td>Aztréonam</td><td>I/R</td><td>S</td><td>S</td></tr>
        <tr><td>Carbapénèmes</td><td>I/R</td><td>R</td><td>S/I/R</td></tr>
        <tr><td>Témocilline</td><td>S</td><td>–</td><td>S</td></tr>
        <tr><td>Ceftazidime–Avibactam</td><td>S</td><td>I/R</td><td>S</td></tr>
        <tr><td>Ceftolozane–Tazobactam</td><td>S</td><td>I/R</td><td>S</td></tr>
        <tr><td>Imipénème–Relebactam</td><td>S</td><td>I/R</td><td>S/I/R</td></tr>
        <tr><td>Céfidérocol</td><td>S</td><td>S</td><td>S</td></tr>
        <tr><td>Tigécycline</td><td>S</td><td>S</td><td>S</td></tr>
      </tbody>
    </table>`,
  refAtb: `
    <table class="simple">
      <thead><tr><th>Molécules</th><th>Posologie</th><th>BP EUCAST</th><th>Effets indésirables</th></tr></thead>
      <tbody>
        <tr>
          <td>Ceftazidime–avibactam</td>
          <td>2 g/0,5 g x3/j IVSE sur 4 h</td>
          <td>S : CMI ≤ 8<br>R : CMI &gt; 8</td>
          <td>Allergies, encéphalopathie,<br>convulsions, coma</td>
        </tr>
        <tr>
          <td>Aztréonam +<br>Cefta-avibactam pour classe B</td>
          <td>4 g x2/j IVSE sur 12 h</td>
          <td>S : CMI ≤ 1<br>R : CMI &gt; 4</td>
          <td>—</td>
        </tr>
      </tbody>
    </table>`,
  siteAtb: ``,
  choc: ``
};

BACTERIA_DATA.erv = {
  title: "Entérocoques résistants à la vancomycine (ERV)",
  definition: `
    Souches de <em>E. faecium</em> résistantes aux glycopeptides. Plus rarement, les souches de <em>E. faecalis</em> peuvent être concernées. 
    Les souches de <em>S. aureus</em>, sont exceptionnellement résistantes aux glycopeptides.`,
  mecanisme: `
    La résistance aux glycopeptides chez <em>Enterococcus faecium</em> est liée à la transmission plasmidique des îlots de résistance VanA (largement majoritaire) et VanB. 
    Ces îlots sont porteurs de plusieurs gènes à l’origine de la synthèse d’un peptidoglycane alternatif, non reconnu par les glycopeptides.<br>
    Ce mécanisme concerne également les rares résistances aux glycopeptides chez <em>E. faecalis</em> et <em>S. aureus</em>.`,
  epidemio: `
    La résistance à la vancomycine reste rare en France : 0,1 % des souches cliniques de <em>E. faecium</em> et 0,1% des souches cliniques de <em>E. faecalis</em> en 2021. 
    La résistance aux glycopeptides est exceptionnelle chez <em>S. aureus</em>.`,
  phenotype: `
    <table class="pheno">
      <thead><tr><th>Type</th><th>ERV</th></tr></thead>
      <tbody>
        <tr><td>Amoxicilline</td><td>R</td></tr>
        <tr><td>Oxacilline / Cloxacilline</td><td>R</td></tr>
        <tr><td>Amoxicilline – Ac. Clav.</td><td>R</td></tr>
        <tr><td>Pipéracilline</td><td>R</td></tr>
        <tr><td>Pipéracilline – Tazobact.</td><td>R</td></tr>
        <tr><td>C1G/C2G</td><td>R</td></tr>
        <tr><td>Céphamycines (Cefoxitine)</td><td>R</td></tr>
        <tr><td>C3G/C4G</td><td>R</td></tr>
        <tr><td>C5G</td><td>R</td></tr>
        <tr><td>Carbapénèmes</td><td>R</td></tr>
        <tr><td>Glycopeptides</td><td>R</td></tr>
        <tr><td>Daptomycine</td><td>S/I</td></tr>
        <tr><td>Linézolide</td><td>S</td></tr>
        <tr><td>Ofloxacine</td><td>R</td></tr>
        <tr><td>Lévofloxacine</td><td>R</td></tr>
        <tr><td>Amikacine</td><td>S/I/R</td></tr>
        <tr><td>Tobramycine</td><td>S/I/R</td></tr>
        <tr><td>Gentamicine</td><td>S/I/R</td></tr>
        <tr><td>Cotrimoxazole</td><td>R</td></tr>
        <tr><td>Rifampicine</td><td>I/R</td></tr>
        <tr><td>Tigécycline</td><td>S</td></tr>
      </tbody>
    </table>`,
  refAtb: `
    <table class="simple">
      <thead><tr><th>Molécules</th><th>Posologie</th><th>BP EUCAST</th><th>Effets indésirables</th></tr></thead>
      <tbody>
        <tr>
          <td><strong>Référence :</strong> Linézolide <small>(sauf bactériémies et endocardites)</small></td>
          <td>600 mg 2×/jour</td>
          <td>4</td>
          <td>Cytopénie, hyperlactatémie,<br>syndrome sérotoninergique,<br>neuropathies</td>
        </tr>
        <tr>
          <td>Tigécycline <small>(infections abdominales et des tissus mous)</small></td>
          <td>50 mg ×2/jour</td>
          <td>Données insuffisantes</td>
          <td>Troubles digestifs, photosensibilisation,<br>hépatotoxicité, allergies</td>
        </tr>
        <tr>
          <td>Daptomycine <small>(bactériémies et endocardites, efficacité modérée sur <em>E. faecium</em>)</small></td>
          <td>12 mg/kg/jour</td>
          <td>Données insuffisantes</td>
          <td>Rhabdomyolyse, hépatotoxicité,<br>céphalées, infections fongiques</td>
        </tr>
      </tbody>
    </table>`,
  siteAtb: ``,
  choc: ``
};


function renderProbaMenu() {
  $app.innerHTML = `
    ${h("card", `<strong>Antibiothérapie probabiliste</strong>`)}
    ${h("grid cols-2", `
      <button class="btn outline" onclick="location.hash='#/proba/pneumonies'">Pneumonies</button>
      <button class="btn outline" onclick="location.hash='#/proba/iu'">Infections urinaires</button>
      <button class="btn outline" onclick="location.hash='#/proba/abdo'">Infections intra-abdominales</button>
      <button class="btn outline" onclick="location.hash='#/proba/neuro'">Infections neuro-méningées</button>
      <button class="btn outline" onclick="location.hash='#/proba/dermohypo'">Infections des parties molles</button>
      <button class="btn outline" onclick="location.hash='#/proba/endocardite'">Endocardites infectieuses</button>
      <button class="btn outline" onclick="location.hash='#/proba/mediastinite'">Médiastinites post-opératoires</button>
      <button class="btn outline" onclick="location.hash='#/proba/scarpa'">Infections de scarpa</button>
      <button class="btn outline" onclick="location.hash='#/proba/sepsis'">Sepsis sans porte d'entrée</button>
    `)}
    ${h("card", `<button class="btn ghost" onclick="history.back()">← Retour</button>`)}
  `;
}

function renderProbaPneumonieForm(){
  $app.innerHTML = `
    <div class="card"><strong>Caractéristiques de la pneumonie</strong></div>

    <div class="hero-pneu card">
      <img src="./img/pneumonie.png" alt="Pneumonie" class="form-hero">
    </div>

    <form id="formPneu" class="form">
      <!-- le reste de ton formulaire inchangé -->

      <fieldset>
        <legend>Lieu de survenue</legend>
        <label><input type="radio" name="origine" value="Communautaire" checked> Communautaire</label>
        <label><input type="radio" name="origine" value="Nosocomiale"> Nosocomiale</label>
      </fieldset>

      <fieldset>
        <legend>Risque de bactérie multirésistante</legend>
        <div class="row">
          <label><input type="checkbox" name="pseudo"> FdR de P. aeruginosa*</label>
          <label><input type="checkbox" name="blse"> FdR de BLSE**</label>
          <label><input type="checkbox" name="sarm"> FdR de SARM***</label>
        </div>
      </fieldset>

      <fieldset>
        <legend>Caractéristiques patient</legend>
        <div class="row">
          <label><input type="checkbox" name="immuno"> Immunodépression</label>
          <label><input type="checkbox" name="allergie"> Allergie β-lactamines</label>
        </div>
      </fieldset>

      <fieldset>
        <legend>Sévérité</legend>
        <label><input type="checkbox" name="choc"> Choc septique</label>
      </fieldset>

      <fieldset>
        <legend>Pneumonies particulières</legend>
        <div class="row">
          <label><input type="checkbox" name="necro"> Pneumonie nécrosante</label>
          <label><input type="checkbox" name="inhal"> Inhalation</label>
        </div>
      </fieldset>

 <!-- Ajout de la légende avec l'encadré -->
      <div class="warning-container">
        <p><strong>*Risque de P. aeruginosa:</strong> Un facteur de risque parmi « antibiothérapie < 3 mois, BPCO sévère (VEMS < 50%), bronchectasies/mucoviscidose, trachéotomie, ATCD de colonisation/infection à P. aeruginosa »</p>
        <p><strong>**Risque de BLSE:</strong> « Antibiothérapie < 3 mois, ATCD de colonisation/infection à BLSE, hospitalisation depuis plus de 5j, voyage dans un pays endémique ». Indications des carbapénèmes:</p>
        <ul>
          <li> Choc septique ou P/F < 150 + 1 facteur de risque</li>
          <li> 3 facteurs de risque</li>
        </ul>
        <p><strong>***Risque de SARM:</strong> Un facteur de risque parmi « colonisation/infection récente à SARM, prévalence locale > 10-12%, lésion cutanée chronique, dialyse chronique ».</p>
      </div>

      <div class="actions">
        <button type="button" class="btn" id="btnReco">Antibiothérapie probabiliste recommandée</button>
        <button type="button" class="btn ghost" onclick="history.back()">← Retour</button>
      </div>
      <div id="resPneu" class="result"></div>
    </form>
  `;

  document.getElementById("btnReco").addEventListener("click", () => {
    const fd = new FormData(document.getElementById("formPneu"));
    const params = {
      origine: fd.get("origine") || "Communautaire",
      pseudo: !!fd.get("pseudo"),
      blse: !!fd.get("blse"),
      sarm: !!fd.get("sarm"),
      immuno: !!fd.get("immuno"),
      allergie: !!fd.get("allergie"),
      choc: !!fd.get("choc"),
      necro: !!fd.get("necro"),
      inhal: !!fd.get("inhal")
    };

    // ——— Logique PROVISOIRE pour démonstration (on branchera tes vraies règles ensuite)
    const reco = decidePneumonie(params);
    document.getElementById("resPneu").textContent = reco +
      "\n\n⚠️ Vérifier CI/IR, allergies, grossesse, interactions, et adapter au contexte local.";
  });
}

function renderProbaIUForm(){
  $app.innerHTML = `
    <div class="card"><strong>Infections urinaires — caractéristiques</strong></div>

    <div class="hero-pneu card">
      <img src="./img/urinaire.png" alt="Infections urinaires" class="form-hero">
    </div>

    <form id="formIU" class="form">
      <fieldset>
        <legend>Lieu de survenue</legend>
        <label><input type="radio" name="origine" value="Communautaire" checked> Communautaire</label>
        <label><input type="radio" name="origine" value="Nosocomiale"> Nosocomiale</label>
      </fieldset>
      
    <fieldset>
      <legend>Signes de gravité</legend>
      <label><input type="checkbox" name="qsofa2"> Q-SOFA ≥ 2</label>
      <label><input type="checkbox" name="gesteUrg"> Geste urologique urgent</label>
      <label><input type="checkbox" name="choc"> Choc septique</label>
    </fieldset>

    <!-- Facteurs de risque microbiologique -->
    <fieldset>
      <legend>Facteurs de risque microbiologique</legend>
      <label><input type="checkbox" name="blse" value="BLSE/portage"> Infection/portage BLSE < 6 mois</label>
      <label><input type="checkbox" name="autreFdrBlse" value="Autre FdR BLSE*"> Autre FdR BLSE*</label>
    </fieldset>

    <!-- Facteurs liés au patient -->
    <fieldset>
      <legend>Facteurs liés au patient</legend>
      <label><input type="checkbox" name="allergieBL" value="Allergie aux β-lactamines"> Allergie aux β-lactamines</label>
      <label><input type="checkbox" name="immunodep" value="Immunodépression"> Immunodépression</label>
    </fieldset>

    <!-- Cas particulier -->
    <fieldset>
      <legend>Cas particulier</legend>
      <label><input type="checkbox" name="pnaEmphy"> Pyélonéphrite emphysémateuse</label>
    </fieldset>
  </div>

<!-- Ajout de l'encadré avec la légende pour les infections urinaires -->
      <div class="warning-container">
        <p><strong>*Facteurs de risque de BLSE:</strong> ATCD de colonisation/infection à BLSE dans les 6 mois, antibiothérapie dans les 6 mois (Spectre ≥ Augmentin/C1G/C2G), voyage en pays endémique.</p>
      </div>

  <div class="actions">
    <button type="button" class="btn" id="btnIU">Antibiothérapie probabiliste recommandée</button>
    <button type="button" class="btn ghost" onclick="history.back()">← Retour</button>
  </div>
  <div id="resIU" class="result"></div>
</form>
  `;

  document.getElementById("btnIU").addEventListener("click", () => {
   const fd = new FormData(document.getElementById("formIU"));
const params = {
  origine: fd.get("origine") || "Communautaire",
  qsofa2: !!fd.get("qsofa2"),
  gesteUrg: !!fd.get("gesteUrg"),
  choc: !!fd.get("choc"),
  blse: fd.get("blse") || "",
  autreFdrBlse: fd.get("autreFdrBlse") || "",
  allergieBL: fd.get("allergieBL") || "",
  immunodep: fd.get("immunodep") || "",
  pnaEmphy: !!fd.get("pnaEmphy")
};
const out = decideIU(params);
document.getElementById("resIU").textContent = out + "\n\n⚠️ Vérifier CI/IR, allergies, grossesse, interactions, et adapter au contexte local.";
  });
}

// ——— Transposition stricte de ta macro VBA (IU_GenerateResult) ———
function decideIU(p){
  // Gravité
  let gravite = "Sans signe de gravité";
  if (p.choc) gravite = "Choc septique";
  else if (p.qsofa2 || p.gesteUrg) gravite = "Signes de gravité sans choc (Q-SOFA = 2 et/ou geste urologique urgent)";

  const fdrBLSE = (p.blse || p.autreFdrBlse); // Vérification des facteurs de risque BLSE
  let res = "", notes = "";

  // Cas particuliers prioritaires
 if (p.pnaEmphy) {
  if (p.allergieBL) {
    // Si PNA emphysémateuse et allergie aux béta-lactamines
    res = "Aztréonam 1 g x4/j IVL + Amikacine 25–30 mg/kg IVL sur 30 min + levée de l’obstacle.\n" +
          "PNA emphysémateuse — FdR : diabète, obstacle des voies urinaires ; TDM : gaz intra-rénal ; Germes : entérobactéries (E. coli ~70%).\n" +
          "Remarque : exceptionnellement nosocomiale.";
  } else {
    // Si uniquement PNA emphysémateuse sans allergie
    res = "Céfotaxime 1 g x4–6/24h IVL + Amikacine 25–30 mg/kg IVL sur 30 min + levée de l’obstacle.\n" +
          "PNA emphysémateuse — FdR : diabète, obstacle des voies urinaires ; TDM : gaz intra-rénal ; Germes : entérobactéries (E. coli ~70%).\n" +
          "Remarque : exceptionnellement nosocomiale.";
  }
  return wrapIU(p, gravite, res, notes);
}

  if (p.allergieBL){
    if (p.origine === "Communautaire"){
      if (p.choc){
        res = "Aztréonam 1 g x4/j IVL + Amikacine 25–30 mg/kg IVL sur 30 min.";
      } else {
        res = "Aztréonam 1 g x4/j IVL OU Amikacine 25–30 mg/kg IVL sur 30 min.\n" +
              "Si choc septique : associer Aztréonam + Amikacine.";
      }
    } else {
      res = "Aztréonam 1 g x4/j IVL + Amikacine 25–30 mg/kg IVL sur 30 min.";
    }
    return wrapIU(p, gravite, res, notes);
  }


  // Tronc commun
  if (p.origine === "Communautaire"){
    if (gravite === "Sans signe de gravité"){
      res = "Céfotaxime 1 g x4–6/24h IVL.";
      if (fdrBLSE) notes = "Note : pas de couverture BLSE même en cas de facteur de risque.";
    } else if (gravite.startsWith("Signes de gravité")){
      if (p.blse){
        res = "Méropénème 4–6 g/24h IVL OU Imipénème 1 g x3/j IVL + Amikacine 25–30 mg/kg IVL sur 30 min.";
      } else {
        res = "Céfotaxime 1 g x4–6/24h IVL + Amikacine 25–30 mg/kg IVL sur 30 min.";
      }
    } else { // Choc
      if (fdrBLSE){
        res = "Méropénème 4–6 g/24h IVL OU Imipénème 1 g x3/j IVL + Amikacine 25–30 mg/kg IVL sur 30 min.";
      } else {
        res = "Céfotaxime 1 g x4–6/24h IVL + Amikacine 25–30 mg/kg IVL sur 30 min.";
      }
    }
    if (p.immuno && gravite === "Sans signe de gravité"){
      notes = (notes ? notes + "\n" : "") + 'Remarque : "patient immunodéprimé ou non" ? même schéma.';
    }
  } else {
    // Nosocomiale
    if (gravite === "Sans signe de gravité"){
      if (fdrBLSE){
        res = "Pipéracilline-tazobactam 4 g x4/j + Amikacine 25–30 mg/kg IVL sur 30 min.";
        notes = "Éviter les carbapénèmes en probabiliste.";
      } else {
        res = "Pipéracilline-tazobactam 4 g x4/j.";
      }
    } else if (gravite.startsWith("Signes de gravité")){
      if (p.blse){
        res = "Méropénème 4–6 g/24h IVL OU Imipénème 1 g x3/j IVL + Amikacine 25–30 mg/kg IVL sur 30 min.";
      } else {
        res = "Pipéracilline-tazobactam 4 g x4/j + Amikacine 25–30 mg/kg IVL sur 30 min.";
      }
    } else { // Choc
      if (fdrBLSE){
        res = "Méropénème 4–6 g/24h IVL OU Imipénème 1 g x3/j IVL + Amikacine 25–30 mg/kg IVL sur 30 min.";
      } else {
        res = "Pipéracilline-tazobactam 4 g x4/j + Amikacine 25–30 mg/kg IVL sur 30 min.";
      }
    }
  }

  return wrapIU(p, gravite, res, notes);
}

function wrapIU(p, gravite, res, notes){
  const lignes = [];
  if (p.immuno)   lignes.push("Critère : immunodépression cochée");
  if (p.blse)   lignes.push("Critère : infection/portage BLSE < 6 mois");
  if (p.autreFdrBlse)  lignes.push("Critère : autre facteur de risque de BLSE");
  if (p.pnaEmphy) lignes.push("Critère : PNA emphysémateuse");
  if (p.allergie) lignes.push("Critère : allergie sévère aux ß-lactamines");

  return [
    "Origine : " + p.origine,
    "Gravité : " + gravite,
    (lignes.length ? lignes.join("\n") : null),
     "",
    "Proposition thérapeutique :",
    "", 
    res,
    (notes ? "\n" + notes : "")
  ].filter(Boolean).join("\n");
}

function renderProbaAbdoForm(){
  $app.innerHTML = `
    <div class="card"><strong>Infections intra-abdominales — caractéristiques</strong></div>

    <div class="hero-pneu card">
      <img src="./img/abdo.png" alt="Infections intra-abdominales" class="form-hero">
    </div>

    <form id="formAbdo" class="form">
      <fieldset>
        <legend>Origine</legend>
        <label><input type="radio" name="origine" value="Communautaires" checked> Communautaires</label>
        <label><input type="radio" name="origine" value="Nosocomiales"> Nosocomiales</label>
      </fieldset>

      <fieldset>
        <legend>Catégorie d’infection</legend>
        <div class="row">
          <label><input type="radio" name="categorie" value="Infections des voies biliaires"> Infections des voies biliaires</label>
          <label><input type="radio" name="categorie" value="Infections entéro-coliques (hors péritonites)"> Infections entéro-coliques (hors péritonites)</label>
          <label><input type="radio" name="categorie" value="Péritonites secondaires"> Péritonites secondaires</label>
          <label><input type="radio" name="categorie" value="Cas particuliers"> Cas particuliers</label>
        </div>
      </fieldset>

      <fieldset id="fsSousType" class="hidden">
        <legend>Sous-type</legend>
        <select id="cboSousType"></select>
      </fieldset>

 <fieldset>
  <legend>Facteurs de risque microbiologiques</legend>
  <div class="row">
    <label><input type="checkbox" name="BLSE"> FdR de BLSE* </label>
    <label><input type="checkbox" name="Faecium"> FdR de E. faecium**</label>
    <label><input type="checkbox" name="Dupont"> Score de Dupont ≥ 3*** </label>
    <label><input type="checkbox" name="ProtheseBiliaire"> Prothèse biliaire</label>
  </div>
</fieldset>

<fieldset>
  <legend>Gravité</legend>
  <div class="row">
    <label><input type="checkbox" name="Sepsis"> Sepsis</label>
    <label><input type="checkbox" name="Choc"> Choc septique</label>
  </div>
</fieldset>

<fieldset>
  <legend>Facteurs liés au patient</legend>
  <div class="row">
    <label><input type="checkbox" name="allergieBL"> Allergie sévère β-lactamines</label>
    <label><input type="checkbox" name="immunodep"> Immunodépression</label>
  </div>
</fieldset>

<!-- Ajout de l'encadré avec la légende pour les infections intra-abdominales -->
      <div class="warning-container">
        <p><strong>*Facteurs de risque d’infection à BLSE (un seul critère suffit parmi) :</strong> traitement < 1 mois par Tazocilline ou céphalosporine anti-P. aeruginosa, colonisation/infection à EBLSE, colonisation/infection à P. aeruginosa Tazo-R dans les 3 derniers mois.</p>
        <p><strong>**Facteurs de risque d’infection à E. faecium (un seul critère suffit parmi) :</strong> immunodéprimé, infection biliaire, antibiothérapie en cours, colonisation connue à E. faecium.</p>
        <p><strong>***Score de Dupont :</strong> Indication à un traitement antifongique en cas de péritonite si ≥ 3 critères parmi : Sexe féminin, perforation sus-mésocolique, choc septique, antibiothérapie en cours depuis > 48h.</p>
      </div>

      <div class="actions">
        <button type="button" class="btn" id="btnAbdo">Antibiothérapie probabiliste recommandée</button>
        <button type="button" class="btn ghost" onclick="history.back()">← Retour</button>
      </div>
      <div id="resAbdo" class="result"></div>
    </form>
  `;

  // — sous-types dynamiques (ComboBox)
  const form = document.getElementById("formAbdo");
  const fsST = document.getElementById("fsSousType");
  const cbo = document.getElementById("cboSousType");

  function fillSubtypes(cat){
    const map = {
      "Infections des voies biliaires": [
        "Cholécystite aiguë",
        "Angiocholite aiguë",
        "Abcès hépatique",
        "Infection nécrose pancréatique"
      ],
      "Infections entéro-coliques (hors péritonites)": [
        "Appendicite aiguë",
        "Diverticulite aiguë",
        "Entérocolite ou colite"
      ],
      "Péritonites secondaires": [
        "Péritonite secondaire"
      ],
      "Cas particuliers": [
        "Infection de liquide d’ascite",
        "Perforation œsophagienne (dont syndrome de Boerhaave)"
      ]
    };
    const list = map[cat] || [];
    cbo.innerHTML = list.map(s => `<option value="${s}">${s}</option>`).join("");
    fsST.classList.toggle("hidden", list.length === 0);
  }

  form.addEventListener("change", (e) => {
    if (e.target.name === "categorie") fillSubtypes(e.target.value);
  });

  document.getElementById("btnAbdo").addEventListener("click", () => {
    const fd = new FormData(form);
    const p = {
      origine: fd.get("origine") || "Communautaires",
      TypeInfection: fd.get("categorie") || "",
      SousType: cbo.value || "",
      BLSE: !!fd.get("BLSE"),
      Faecium: !!fd.get("Faecium"),
      Dupont: !!fd.get("Dupont"),
      Sepsis: !!fd.get("Sepsis"),
      Choc: !!fd.get("Choc"),
      ProtheseBiliaire: !!fd.get("ProtheseBiliaire"),
      allergieBL: !!fd.get("allergieBL"),
      immunodep: !!fd.get("immunodep")
    };
    if (!p.TypeInfection){
      document.getElementById("resAbdo").textContent = "Sélectionnez une catégorie d’infection.";
      return;
    }
    const out = decideAbdo(p);
    document.getElementById("resAbdo").textContent = out +
      "\n\n⚠️ Vérifier CI/IR, allergies, grossesse, interactions, et adapter au contexte local.";
  });
}

// ======= LOGIQUE (transposition VBA) =======

function sepsisOuChoc(p){ return !!(p.Sepsis || p.Choc); }

function decideAbdo(p){
  switch (p.TypeInfection){
    case "Infections des voies biliaires":      return recoVoiesBiliaires(p);
    case "Infections entéro-coliques (hors péritonites)": return recoEnteroColiques(p);
    case "Péritonites secondaires":              return recoPeritonites(p);
    case "Cas particuliers":                     return recoCasParticuliers(p);
    default: return "";
  }
}

// 1) Voies biliaires
function recoVoiesBiliaires(p){
  let txt = "";
  // origine effective si immunodépression (comme VBA)
  let oEff = p.origine;
  if (oEff === "Communautaires" && p.immunodep) oEff = "Nosocomiales";

  // Sous-type : Infection nécrose pancréatique (prioritaire)
  if (p.SousType === "Infection nécrose pancréatique"){
    if (p.allergieBL){
      txt = "Ciprofloxacine 400 mg x3/j IVL/PO ou Aztréonam 1 g x4/j\n" +
            "+ Métronidazole 500 mg x3/j IVL/PO\n" +
            "+ Vancomycine 30 mg/kg/j IVSE";
      if (sepsisOuChoc(p)) txt += "\n\nSi sepsis/choc septique : Ajout Amikacine 30 mg/kg IVL";
    } else {
      txt = "Pas d’antibiothérapie récente : Céfotaxime ou Ciprofloxacine + Métronidazole 500 mg x3/j IV/PO\n\n" +
            "Antibiothérapie récente : Imipénème 1 g x3/j + Vancomycine 30 mg/kg + Fluconazole 400 mg x3/j";
      if (sepsisOuChoc(p)) txt += "\n\nSi sepsis/choc septique : Ajout Amikacine 30 mg/kg IVL";
    }
    return txt;
  }

  // Allergie prioritaire — autres sous-types biliaires
  if (p.allergieBL){
    if (oEff === "Communautaires"){
      if (["Cholécystite aiguë","Angiocholite aiguë","Abcès hépatique"].includes(p.SousType)){
        if (sepsisOuChoc(p)){
          txt = "Ciprofloxacine 750 mg x2/j IV/PO ou Aztréonam 1 g x4/j IVL\n" +
                "+ Métronidazole 500 mg x3/j IVL/PO\n" +
                "+ Vancomycine 30 mg/kg/j\n" +
                "+ Amikacine 25–30 mg/kg IVL sur 30 min";
        } else {
          txt = "Lévofloxacine 500 mg x2/j IVL/PO\n+ Métronidazole 500 mg x3/j IVL/PO\n+ Gentamicine 5–8 mg/kg IVL 30 min";
        }
      }
    } else { // Nosocomiales
      txt = "Ciprofloxacine 750 mg x2/j IVL/PO ou Aztréonam 1 g x4/j IVL\n" +
            "+ Métronidazole 500 mg x3/j IVL/PO\n" +
            "+ Vancomycine 30 mg/kg/j IVSE";
      if (sepsisOuChoc(p)){
        txt += "\nSi sepsis/choc septique:\n- Systématique : Ajout Amikacine 25–30 mg/kg IVL 30 min";
        if (p.ProtheseBiliaire) txt += "\n- Si prothèse biliaire : Ajout Caspofungine 70 mg puis 50 mg/j IVL";
      }
    }
    return txt;
  }

  // Non allergiques — autres sous-types
  if (oEff === "Communautaires"){
    if (["Cholécystite aiguë","Angiocholite aiguë"].includes(p.SousType)){
      if (sepsisOuChoc(p)){
        txt = "Pipéracilline-tazobactam 4 g x4/j\nAmikacine 25–30 mg/kg IVL 30 min";
      } else {
        txt = "Ceftriaxone 1 g x2/24h IVL\n+ Métronidazole 500 mg x3/j IVL/PO";
        if (p.BLSE) txt += "\nSi FdR de BLSE* : Pas de carbapénème";
      }
    } else if (p.SousType === "Abcès hépatique"){
      txt = "Drainage percutané de l’abcès\n+ Ceftriaxone 1 g x2/24h IVL\n+ Métronidazole 500 mg x3/j IVL/PO";
      if (p.BLSE) txt += "\nSi FdR de BLSE* : Pas de carbapénème";
      if (sepsisOuChoc(p)) txt += "\nSi sepsis/choc septique : Ajout Amikacine 25–30 mg/kg IVL 30 min";
    }
  } else { // Nosocomiales
    if (["Cholécystite aiguë","Angiocholite aiguë"].includes(p.SousType)){
      txt = p.BLSE ? "Imipénème 1 g x3/j IVL" : "Pipéracilline-tazobactam 4 g x4/j";
      if (sepsisOuChoc(p)){
        txt += "\nSi sepsis/choc septique:\n- Systématique : Ajout Amikacine 25–30 mg/kg IVL 30 min";
        if (p.ProtheseBiliaire) txt += "\n- Si prothèse biliaire : Ajout Vancomycine 30 mg/kg/j IVSE et Caspofungine 70 mg puis 50 mg/j";
      }
    } else if (p.SousType === "Abcès hépatique"){
      txt = "Drainage percutané de l’abcès\n+ " + (p.BLSE ? "Imipénème 1 g x3/j IVL" : "Pipéracilline-tazobactam 4 g x4/j");
      if (sepsisOuChoc(p)){
        txt += "\nSi sepsis/choc septique:\n- Systématique : Ajout Amikacine 25–30 mg/kg IVL 30 min";
        if (p.ProtheseBiliaire) txt += "\n- Si prothèse biliaire : Ajout Vancomycine 30 mg/kg/j IVSE et Caspofungine 70 mg puis 50 mg/j";
      }
    }
  }
  return txt;
}

// 2) Entéro-coliques (hors péritonites)
function recoEnteroColiques(p){
  let txt = "";
  const o = p.origine;
  const isSev = sepsisOuChoc(p);

  if (p.allergieBL){
    if (o === "Communautaires"){
      txt = "Lévofloxacine 500 mg x2/j IVL/PO\n+ Métronidazole 500 mg x3/j IVL/PO";
      if (isSev) txt += "\nAjout Gentamicine 5–8 mg/kg ou Amikacine 25–30 mg/kg IVL 30 min";
    } else {
      txt = "Ciprofloxacine 750 mg x2/j IVL/PO ou Aztréonam 1 g x4/j IVL\n+ Métronidazole 500 mg x3/j IVL/PO";
      if (isSev) txt += "\n+/- Vancomycine 30 mg/kg/j IVSE\n+/- Caspofungine 70 mg puis 50 mg/j IVL";
    }
    return txt;
  }

  if (o === "Communautaires"){
    if (p.SousType === "Appendicite aiguë"){
      txt = "Appendicectomie + Amoxicilline-acide clavulanique 1 g x3/j IVL (antibiothérapie seule non recommandée)";
    } else if (p.SousType === "Diverticulite aiguë"){
      txt = "Amoxicilline-acide clavulanique 1 g x3/j IVL uniquement si : sepsis, grossesse, ASA >3, immunodépression (dont cancer évolutif et IRC terminale)";
    } else if (p.SousType === "Entérocolite ou colite"){
      txt = "Céfotaxime 4–6 g/24h IVL\n+ Métronidazole 500 mg x3/j IVL/PO";
    }
    if (p.BLSE) txt += "\nIdem absence de FdR de BLSE (pas de carbapénème)";
    if (isSev) txt += "\nAjout Gentamicine 5–8 mg/kg IV 30 min";
    if (p.immunodep){
      const p2 = {...p, origine: "Nosocomiales"};
      return recoEnteroColiques(p2);
    }
  } else { // Nosocomiales
    if (["Appendicite aiguë","Diverticulite aiguë","Entérocolite ou colite"].includes(p.SousType)){
      txt = p.BLSE ? "Imipénème 1 g x3/j IVL" : "Pipéracilline-tazobactam 4 g x4/j";
    }
    if (isSev){
      txt += "\nAjout Amikacine 25–30 mg/kg IVL 30 min\n+/- Vancomycine 30 mg/kg/j IVSE\n+/- Caspofungine 70 mg puis 50 mg/j IVL";
    }
  }
  return txt;
}

// 3) Péritonites secondaires
function recoPeritonites(p){
  let txt = "";
  const o = p.origine;

  if (p.allergieBL){
    if (o === "Communautaires"){
      txt = "Lévofloxacine 500 mg x2/j IVL/PO\n+ Métronidazole 500 mg x3/j IVL/PO\n+ Gentamicine 5–8 mg/kg IVL 30 min";
    } else {
      txt = "Ciprofloxacine 750 mg x2/j IVL/PO ou Aztréonam 1 g x4/j IVL\n+ Métronidazole 500 mg x3/j IVL/PO\n+ Vancomycine 30 mg/kg/j IVSE\n+ Amikacine 25–30 mg/kg IVL 30 min";
    }
    return txt;
  }

  if (o === "Communautaires"){
    txt = "Céfotaxime 4–6 g/24h IVL\n+ Métronidazole 500 mg x3/j IVL/PO";
    if (p.BLSE) txt += "\nIdem absence de FdR BLSE";
    if (p.Faecium && p.immunodep) txt += "\nAjout Vancomycine 30 mg/kg/j IVSE uniquement si immunodépression";
    if (p.Dupont) txt += "\nAjout Caspofungine 70 mg puis 50 mg/j IVL";
    if (p.Choc) txt = "Pipéracilline-tazobactam 4 g x4/j\n+ Gentamicine 5–8 mg/kg IVL 30 min";
    if (p.immunodep){
      const p2 = {...p, origine: "Nosocomiales"};
      return recoPeritonites(p2);
    }
  } else { // Nosocomiales
    txt = p.BLSE ? "Imipénème 1 g x3/j IVL" : "Pipéracilline-tazobactam 4 g x4/j";
    if (p.Faecium) txt += "\nAjout Vancomycine 30 mg/kg/j IVSE";
    if (p.Dupont) txt += "\nAjout Caspofungine 70 mg puis 50 mg/j IVL";
    if (p.Choc) txt += "\nAjout Amikacine 25–30 mg/kg IVL + Vancomycine 30 mg/kg/j IVSE";
  }
  return txt;
}

// 4) Cas particuliers
function recoCasParticuliers(p){
  let txt = "";
  const o = p.origine;

  if (p.SousType === "Infection de liquide d’ascite"){
    if (o === "Communautaires"){
      txt = "Drainage percutané de l’ascite\n+ Céfotaxime 1 g x4–6/24h IVL\n+ Albumine 1,5 g/kg J1 puis 1 g/kg J3";
      if (sepsisOuChoc(p)) txt += "\nSi choc septique : Ajout Amikacine 25–30 mg/kg IVL 30 min";
    } else {
      txt = "Drainage percutané de l’ascite\n+ Pipéracilline-tazobactam 4 g x4/j\n+ Albumine 1,5 g/kg J1 puis 1 g/kg J3";
      if (sepsisOuChoc(p)) txt += "\nSi choc septique : Ajout Amikacine 25–30 mg/kg IVL 30 min";
    }
  } else if (p.SousType === "Perforation œsophagienne (dont syndrome de Boerhaave)"){
    if (o === "Communautaires"){
      txt = "Ceftriaxone 1 g x2/24h IVL\n+ Métronidazole 500 mg x3/j IVL/PO";
      if (sepsisOuChoc(p)) txt += "\nSi choc septique : Ajout Gentamicine 5–8 mg/kg IVL 30 min et Caspofungine 70 mg puis 50 mg/j IVL";
    } else {
      txt = "Pipéracilline-tazobactam 4 g x4/j";
      if (sepsisOuChoc(p)) txt += "\nSi choc septique : Ajout Amikacine 25–30 mg/kg IVL 30 min et Caspofungine 70 mg puis 50 mg/j IVL";
    }
  }
  return txt;
}

function renderProbaNeuroForm(){
  $app.innerHTML = `
    <div class="card"><strong>Infections neuro-méningées — caractéristiques</strong></div>

    <div class="hero-pneu card">
      <img src="./img/neuro.png" alt="Infections neuro-méningées" class="form-hero">
    </div>

    <form id="formNeuro" class="form">
      <fieldset>
        <legend>Allergie aux β-lactamines</legend>
        <label><input type="radio" name="allergie" value="non" checked> Non</label>
        <label><input type="radio" name="allergie" value="oui"> Oui</label>
      </fieldset>

      <fieldset>
        <legend>Type d’infection</legend>
        <label><input type="radio" name="type" value="meningite" checked> Méningite purulente</label>
        <label><input type="radio" name="type" value="me"> Méningo-encéphalite</label>
        <label><input type="radio" name="type" value="abces"> Abcès cérébral</label>
      </fieldset>

      <!-- Bloc MÉNINGITE -->
      <fieldset id="blocMeningite">
        <legend>Méningite — Examen direct du LCS</legend>
        <label><input type="radio" name="edi" value="non" checked> Non</label>
        <label><input type="radio" name="edi" value="oui"> Oui</label>

        <div id="ediSelect" class="row hidden" style="margin-top:8px">
          <label style="grid-column:1/-1">
            Résultat :
            <select id="cmbEDI">
              <option value="CG+">CG+</option>
              <option value="CG-">CG-</option>
              <option value="BG+">BG+</option>
              <option value="BG-">BG-</option>
            </select>
          </label>
        </div>

        <fieldset style="margin-top:10px">
          <legend>Eléments complémentaires</legend>
          <div class="row">
            <label><input type="checkbox" name="argListeria"> Argument pour listériose*</label>
            <label><input type="checkbox" name="lcsHSV"> LCS compatible HSV/VZV</label>
          </div>
        </fieldset>
      </fieldset>

      <!-- Bloc MÉNINGO-ENCÉPHALITE -->
      <fieldset id="blocME" class="hidden">
        <legend>Signes de gravité</legend>
        <div class="row">
          <label><input type="checkbox" name="focal"> Signe de localisation</label>
          <label><input type="checkbox" name="coma"> Coma</label>
          <label><input type="checkbox" name="convuls"> Convulsions</label>
        </div>
        <fieldset style="margin-top:10px">
          <legend>Orientation étiologique</legend>
          <label><input type="radio" name="etio" value="oui"> Oui</label>
          <label><input type="radio" name="etio" value="non"> Non</label>
        </fieldset>
      </fieldset>

      <!-- Bloc ABCÈS CÉRÉBRAL -->
      <fieldset id="blocAbces" class="hidden">
        <legend>Porte d’entrée</legend>
        <label style="display:block;max-width:380px">
          <select id="cmbPorte">
            <option value=""></option>
            <option value="Post-operatoire">Post-opératoire</option>
            <option value="Traumatique">Traumatique</option>
            <option value="Indeterminee">Indéterminée</option>
            <option value="Autre">Autre</option>
          </select>
        </label>

        <fieldset style="margin-top:10px">
          <legend>Immunodépression</legend>
          <div class="row">
            <label><input type="checkbox" name="onco"> Onco-hématologie</label>
            <label><input type="checkbox" name="transp"> Transplanté</label>
            <label><input type="checkbox" name="vih"> VIH</label>
            <label><input type="checkbox" name="immunAutre"> Autre</label>
          </div>
        </fieldset>
      </fieldset>

<!-- Encadré des infections neuroméningées -->
      <div class="warning-container">
        <p><strong>*Arguments en faveur d’une listériose :</strong> Un critère suffit parmi : « âge > 65 ans, grossesse, diabète, immunodépression (dont cancer évolutif), maladies hépatiques chroniques (hépatite chronique, cirrhose, OH chronique) ».</p>
      </div>

      <div class="actions">
        <button type="button" class="btn" id="btnNeuro">Antibiothérapie probabiliste recommandée</button>
        <button type="button" class="btn ghost" onclick="history.back()">← Retour</button>
      </div>
      <div id="resNeuro" class="result"></div>
    </form>
  `;

  // UI dynamique (affichages conditionnels)
  const form = document.getElementById("formNeuro");
  const blocM = document.getElementById("blocMeningite");
  const blocME = document.getElementById("blocME");
  const blocA = document.getElementById("blocAbces");
  const ediSelect = document.getElementById("ediSelect");
  const cmbEDI = document.getElementById("cmbEDI");
  const cmbPorte = document.getElementById("cmbPorte");

  function syncBlocks(){
    const type = new FormData(form).get("type");
    blocM.classList.toggle("hidden", type!=="meningite");
    blocME.classList.toggle("hidden", type!=="me");
    blocA.classList.toggle("hidden", type!=="abces");
    const edi = new FormData(form).get("edi");
    ediSelect.classList.toggle("hidden", !(type==="meningite" && edi==="oui"));
  }
  form.addEventListener("change", syncBlocks);
  syncBlocks();

  document.getElementById("btnNeuro").addEventListener("click", () => {
    const fd = new FormData(form);
    const p = {
      allergie: (fd.get("allergie")==="oui"),
      type: fd.get("type") || "meningite",

      // MENINGITE
      edi: fd.get("edi")==="oui",
      ediRes: cmbEDI.value,          // CG+/CG-/BG+/BG-
      argListeria: !!fd.get("argListeria"),
      lcsHSV: !!fd.get("lcsHSV"),

      // ME
      focal: !!fd.get("focal"),
      coma: !!fd.get("coma"),
      convuls: !!fd.get("convuls"),
      etio: fd.get("etio") || "",   // oui/non/""

      // ABCES
      porte: cmbPorte.value || "",
      onco: !!fd.get("onco"),
      transp: !!fd.get("transp"),
      vih: !!fd.get("vih"),
      immunAutre: !!fd.get("immunAutre")
    };

    const out = decideNeuro(p);
    document.getElementById("resNeuro").textContent =
      out + "\n\n⚠️ Vérifier CI/IR, allergies, grossesse, interactions, et adapter au contexte local.";
  });
}

// ===== Logique (transposition du VBA) =====
function decideNeuro(p){
  if (p.type==="meningite")   return buildMeningite(p);
  if (p.type==="me")          return buildME(p);
  if (p.type==="abces")       return buildAbces(p);
  return "";
}

// --- Méningite purulente ---
function buildMeningite(p){
  const allerg = p.allergie;
  let S = "", dex = "", addAcyclo = "";

  if (p.lcsHSV) addAcyclo = " +/- Aciclovir 10 mg/kg x3/j IVL (si LCS compatible HSV/VZV)";

  if (p.edi){
    switch (p.ediRes){
      case "CG+":
        if (!allerg) S = "Céfotaxime 300 mg/kg/j IV";
        else         S = "Vancomycine 30 mg/kg IVSE + Rifampicine 300 mg x2/j PO/IV (ou Méropénème 2 g x3/j IVL) — allergie.";
        dex = " + Dexaméthasone 10 mg x4/j IVL à débuter avant ou en même temps que l’ATB.";
        break;
      case "CG-":
        if (!allerg) S = "Céfotaxime 200 mg/kg/j IV";
        else         S = "Ciprofloxacine 800–1200 mg/j + Rifampicine 300 mg x2/j PO/IV — allergie.";
        dex = " + Dexaméthasone 10 mg x4/j IVL à débuter avant ou en même temps que l’ATB.";
        break;
      case "BG+":
        if (!allerg) S = "Amoxicilline 200 mg/kg/j IVL + Gentamicine 5 mg/kg IVL (30 min).";
        else         S = "Cotrimoxazole (poso max 100/20 mg/kg/j) — allergie.";
        dex = ""; // pas de dexaméthasone si BG+
        break;
      case "BG-":
        if (!allerg) S = "Céfotaxime 200 mg/kg/j IVL";
        else         S = "Ciprofloxacine 800–1200 mg/j — allergie.";
        dex = " + Dexaméthasone 10 mg x4/j IVL à débuter avant ou en même temps que l’ATB.";
        break;
    }
  } else {
    if (!p.argListeria){
      if (!allerg) S = "Céfotaxime 300 mg/kg/j IVL" + addAcyclo + ".";
      else         S = "Vancomycine 30 mg/kg IVSE + Rifampicine 300 mg x2/j PO/IV" + addAcyclo + " — allergie.";
      dex = " + Dexaméthasone 10 mg x4/j IVL à débuter avant ou en même temps que l’ATB.";
    } else {
      if (!allerg) S = "Céfotaxime 300 mg/kg/j + Amoxicilline 200 mg/kg/j" + addAcyclo + ".";
      else         S = "Vancomycine 30 mg/kg IVSE + Rifampicine 300 mg x2/j PO/IV + Cotrimoxazole (poso max 100/20 mg/kg/j)" + addAcyclo + " — allergie.";
      dex = " + Dexaméthasone 10 mg x4/j IVL à débuter avant ou en même temps que l’ATB.";
    }
  }

  return "Méningite purulente aiguë :\n• " + S + (dex || "");
}

// --- Méningo-encéphalite ---
function buildME(p){
  const allerg = p.allergie;
  const grave = !!(p.focal || p.coma || p.convuls);

  let firstLine = grave
    ? "1ère intention : Céfotaxime 300 mg/kg/j IVL + Amoxicilline + Aciclovir + Dexaméthasone + TDM cérébrale en urgence (puis PL si non contre-indiquée)"
    : "1ère intention : Ponction lombaire + TDM cérébrale";

  let detail = "";
  const lOrient = "Si orientation étiologique : traitement spécifique";
  const lSansOrient = "Si pas d’orientation : Aciclovir 10 mg/kg x3/j + Amoxicilline 200 mg/kg/j IVL +/- Céfotaxime si doute";

  if (p.etio === "oui") detail = lOrient;
  else if (p.etio === "non") detail = lSansOrient;

  if (allerg){
    firstLine = firstLine.replace("Céfotaxime 300 mg/kg/j IVL", "Vancomycine 30 mg/kg IVSE + Rifampicine 300 mg x2/j PO/IV");
    detail = detail.replace("Amoxicilline 200 mg/kg/j IVL", "Cotrimoxazole (poso max 100/20 mg/kg/j)");
  }

  return "Méningo-encéphalite :\n• " + firstLine + (detail ? "\n• " + detail : "");
}

// --- Abcès cérébral ---
function buildAbces(p){
  const allerg = p.allergie;
  const entree = p.porte || "";
  let S = "", addImmuno = "";
  const immunoPrisEnCompte = !p.immunAutre; // même logique que VBA

  if (!allerg){
    if (entree==="Post-operatoire" || entree==="Traumatique"){
      S = "Méropénème 2 g x2/j (ou Céfépime ou Ceftazidime) + Vancomycine 30 mg/kg/j ou Linézolide 600 mg x2/j IVL/PO.";
    } else {
      S = "Céfotaxime 300 mg/kg/j IVL (ou Ceftriaxone 100 mg/kg/j IVL) + Métronidazole 500 mg x3/j IV/PO.";
    }
  } else {
    S = "Lévofloxacine 500 mg x2/j IVL/PO + Métronidazole 500 mg x3/j IV/PO + Vancomycine 30 mg/kg/j ou Linézolide 600 mg x2/j IVL/PO — allergie.";
  }

  if (immunoPrisEnCompte){
    if (p.onco || p.transp){
      addImmuno += "\n• Ajouter : Cotrimoxazole (poso max 100/20 mg/kg/j) pour Nocardia spp. + Voriconazole 5 mg/kg x2/j IVL pour Aspergillus spp.";
    }
    if (p.vih){
      addImmuno += "\n• Patient VIH : Pyriméthamine-Sulfadiazine (si CD4 < 200) pour T. gondii, + Céfotaxime/Métronidazole si doute +/- quadrithérapie anti-tuberculeuse si gravité et contexte très évocateur.";
    }
  }

  return "Abcès cérébral (ATB idéalement après ponction-aspiration si possible) :\n• " + S + addImmuno;
}

function renderProbaDermohypodermiteForm(){
  $app.innerHTML = `
    <div class="card"><strong>Caractéristiques de l’infection des parties molles</strong></div>

    <div class="hero-pneu card">
      <img src="./img/dermohypodermite.png" alt="Dermohypodermite" class="form-hero">
    </div>

    <form id="formDH" class="form">
      <!-- Type d'infection -->
      <fieldset>
        <legend>Type d’infection</legend>
        <div class="row">
          <label><input type="radio" name="type" value="DHNN" checked> Dermohypodermite bactérienne non nécrosante</label>
          <label><input type="radio" name="type" value="Shock"> Suspicion choc strepto ou staphylococcique</label>
          <label><input type="radio" name="type" value="DHN"> Dermohypodermite bactérienne nécrosante</label>
          <label><input type="radio" name="type" value="FN"> Fasciite nécrosante</label>
        </div>
      </fieldset>

      <!-- BLOC GAUCHE : visible pour DH non nécrosante OU choc toxique -->
      <fieldset id="fsLeft">
        <legend>&nbsp;</legend>
        <div class="row">
          <label><input type="checkbox" name="morsure"> Morsure</label>
          <label><input type="checkbox" name="cath"> Infection de cathéter</label>
          <label><input type="checkbox" name="sarmLeft"> FdR de SARM**</label>
          <label><input type="checkbox" name="allergieLeft"> Allergie aux β-lactamines</label>
        </div>
      </fieldset>

      <!-- BLOC DROIT : visible uniquement pour DH nécrosante ou fasciite -->
      <fieldset id="fsRight" class="hidden">
        <legend>&nbsp;</legend>

        <fieldset>
          <legend>Lieu de survenue</legend>
          <label><input type="radio" name="origine" value="Communautaire" checked> Communautaire</label>
          <label><input type="radio" name="origine" value="Nosocomiale"> Nosocomiale/Post-opératoire</label>
        </fieldset>

        <fieldset>
          <legend>Localisation</legend>
          <label><input type="radio" name="loc" value="Membres" checked> Membres</label>
          <label><input type="radio" name="loc" value="Cervico-faciales"> Cervico-faciale</label>
          <label><input type="radio" name="loc" value="Abdomino-périnéales"> Abdomino-périnéale</label>
        </fieldset>

        <fieldset>
          <legend>Facteurs</legend>
          <div class="row">
            <label><input type="checkbox" name="blse"> FdR de BLSE*</label>
            <label><input type="checkbox" name="sarmRight"> FdR de SARM**</label>
            <label><input type="checkbox" name="allergieRight"> Allergie aux β-lactamines</label>
            <label><input type="checkbox" name="sepsis"> Sepsis/choc septique</label>
          </div>
        </fieldset>
      </fieldset>

<!-- Ajout de l'encadré avec la légende pour les infections des parties molles -->
      <div class="warning-container">
        <p><strong>*FdR de BLSE :</strong> ATB < 3 mois, ATCD de colonisation/infection BLSE, hospit. dans les 3 mois, voyage dans un pays endémique.</p>
        <p><strong>**FdR de SARM :</strong> colo/infection récente SARM, vie institution/long séjour, lésion cutanée chronique, dialyse chronique.</p>
      </div>

      <div class="actions">
        <button type="button" class="btn" id="btnDH">Antibiothérapie probabiliste recommandée</button>
        <button type="button" class="btn ghost" onclick="history.back()">← Retour</button>
      </div>
      <div id="resDH" class="result"></div>
    </form>
  `;

  // --- Affichages conditionnels des blocs (mêmes règles que le UserForm VBA)
  const form   = document.getElementById("formDH");
  const fsLeft = document.getElementById("fsLeft");
  const fsRight= document.getElementById("fsRight");

  function syncBlocks(){
    const type = new FormData(form).get("type");
    // Bloc gauche visible pour DH non nécrosante ET pour Choc toxique
    fsLeft.classList.toggle("hidden", !(type==="DHNN" || type==="Shock"));
    // Bloc droit visible uniquement pour infections nécrosantes
    fsRight.classList.toggle("hidden", !(type==="DHN" || type==="FN"));
  }
  form.addEventListener("change", syncBlocks);
  syncBlocks();

  // --- Génération de la recommandation (transposition stricte du VBA)
  document.getElementById("btnDH").addEventListener("click", () => {
    const fd = new FormData(form);
    const p = {
      type: fd.get("type") || "DHNN",

      // Bloc gauche
      morsure: !!fd.get("morsure"),
      cath: !!fd.get("cath"),
      sarmLeft: !!fd.get("sarmLeft"),
      allergieLeft: !!fd.get("allergieLeft"),

      // Bloc droit
      origine: fd.get("origine") || "Communautaire",
      loc: fd.get("loc") || "Membres",
      blse: !!fd.get("blse"),
      sarmRight: !!fd.get("sarmRight"),
      allergieRight: !!fd.get("allergieRight"),
      sepsis: !!fd.get("sepsis")
    };

    const out = decideDermohypo(p);
    document.getElementById("resDH").textContent =
      out + "\n\n⚠️ Vérifier CI/IR, allergies, grossesse, interactions, et adapter au contexte local.";
  });

  // ===== Logique (équivalente à M1_BuildReco/M1_ShockBlock) =====
  function decideDermohypo(p){
    // 1) Choc toxique
    if (p.type==="Shock"){
      const allergic   = p.allergieLeft;
      const fdrSarmAny = (p.sarmLeft || p.sarmRight);
      return shockBlock(allergic, fdrSarmAny);
    }

    // 2) DH non nécrosante
    if (p.type==="DHNN"){
      // Point de départ cathéter prioritaire
      if (p.cath){
        const atbSevere = p.allergieLeft
          ? "Ciprofloxacine + Vancomycine + Amikacine/Gentamicine"
          : "Céfepime/Imipénème + Vancomycine + Amikacine/Gentamicine";
        return [
          "Dermohypodermite bactérienne non nécrosante – point de départ de cathéter",
          "• Retrait du cathéter +",
          "  - Si absence de signe de gravité : Pas d’antibiothérapie probabiliste",
          "  - Si sepsis/choc septique : " + atbSevere,
          "  - +/- Caspofungine 70 mg puis 50 mg si haut risque d’infection fongique."
        ].join("\n");
      }

      // DHBNN standard
      let S = "Dermohypodermite bactérienne non nécrosante (DHBNN)\n";
      if (p.allergieLeft){
        S += "• Allergie ß-lactamines : Pristinamycine 1 g x3/j ou Clindamycine 600 mg x3/j IV/PO.\n";
      } else if (p.morsure){
        S += "• Morsure : Amoxicilline–acide clavulanique 4–6 g/j IVL.\n";
      } else {
        S += "• Référence : Amoxicilline 4–6 g/j IVL.\n";
      }
      return S.trim();
    }

    // 3) Infections nécrosantes (DHN/FN)
    const isNosocomial = (p.origine === "Nosocomiale");
    const hasAllergy   = p.allergieRight;
    const hasBLSE      = p.blse;
    const hasSARM      = p.sarmRight;
    const hasSepsis    = p.sepsis;
    const loc          = p.loc; // "Membres" | "Cervico-faciales" | "Abdomino-périnéales"

    if (isNosocomial){
      let S = "Infection nécrosante nosocomiale/post-opératoire\n";
      if (hasAllergy){
        S += "• Schéma : Ciprofloxacine 750 mg x2/j IVL/PO + Vancomycine 30 mg/kg/j ou Linézolide 600 mg x2/j.";
      } else {
        if (hasBLSE){
          S += "• Schéma : Méropénème 4–6 g/j IVL.";
        } else {
          S += "• Schéma : Pipéracilline–tazobactam 4 g x4/j IVL ou Méropénème 4–6 g/j IVL.";
        }
        if (hasSARM){
          S += " + Vancomycine 30 mg/kg/j ou Linézolide 600 mg x2/j.";
        }
      }
      if (hasSepsis) S += " + Amikacine 25–30 mg/kg IVL 30 min.";
      return S;
    }

    // Communautaire
    let S = "Infection nécrosante communautaire – Localisation : " + loc + "\n";
    if (loc === "Membres"){
      if (hasAllergy){
        S += "• Ciprofloxacine 750 mg x2/j IVL/PO + Vancomycine 30 mg/kg/j ou Linézolide 600 mg x2/j.";
      } else {
        if (hasBLSE){
          S += "• Méropénème 4–6 g/j IVL";
        } else {
          S += "• Pipéracilline–tazobactam 4 g x4/j IVL + Clindamycine 600 mg x3/j (48 h)";
        }
        if (hasSARM) S += " + Vancomycine 30 mg/kg/j ou Linézolide 600 mg x2/j ";
        S += ".";
      }
      if (hasSepsis) S += " + Amikacine 25–30 mg/kg IVL 30 min.";
      return S;
    }

    if (loc === "Cervico-faciales"){
      if (hasAllergy){
        S += "• Ciprofloxacine 750 mg x2/j IVL/PO + Clindamycine 600 mg x3/j.";
      } else {
        S += "• Amoxicilline–acide clavulanique 4–6 g/j IVL ou Céfotaxime 4–6 g/j IVL + Métronidazole 500 mg x3/j IVL/PO.";
      }
      if (hasSepsis) S += " + Gentamicine 5–8 mg/kg IVL 30 min.";
      return S;
    }

    if (loc === "Abdomino-périnéales"){
      if (hasAllergy){
        S += "• Ciprofloxacine 750 mg x2/j IVL/PO + Métronidazole 500 mg x3/j IVL/PO + Vancomycine 30 mg/kg/j ou Linézolide 600 mg x2/j.";
      } else {
        if (hasBLSE){
          S += "• Méropénème 4–6 g/j IVL";
        } else {
          S += "• Pipéracilline–tazobactam 4 g x4/j IVL";
        }
        if (hasSARM) S += " + Vancomycine 30 mg/kg/j ou Linézolide 600 mg x2/j ";
        S += ".";
      }
      if (hasSepsis) S += " + Amikacine 25–30 mg/kg IVL 30 min.";
      return S;
    }

    return S + "• Veuillez sélectionner une localisation.";
  }

  function shockBlock(allergic, fdrSarmAny){
    const topLine = (allergic || fdrSarmAny)
      ? "Vancomycine 30 mg/kg/j ou Linézolide 600 mg x2/j IV/PO"
      : "Céfazoline 4–6 g/24 h IVL (Ou autre ß-lactamine anti-strepto/staphylococcique)";
    return [
      topLine,
      "",
      "+ Clindamycine 600 mg x3/j",
      "+ Immunoglobulines IV 1 g/kg à discuter",
      "Choc streptococcique : Evolution possible vers une forme nécrosante nécessitant la chirurgie",
      "Choc staphylococcique : Recherche d’un tampon hygiénique usagé chez la femme jeune"
    ].join("\n");
  }
}

function renderProbaEndocarditeForm(){
  $app.innerHTML = `
    <div class="card"><strong>Caractéristiques de l'endocardite infectieuse</strong></div>

    <div class="hero-pneu card">
      <img src="./img/endocardite.png" alt="Endocardite infectieuse" class="form-hero">
    </div>

    <form id="formEndo" class="form">
      <fieldset>
        <legend>Lieu de survenue</legend>
        <label><input type="radio" name="lieu" value="Communautaire" checked> Communautaire</label>
        <label><input type="radio" name="lieu" value="Nosocomiale/Associée aux soins"> Nosocomiale / Associée aux soins</label>
      </fieldset>

      <fieldset>
        <legend>Type de valve</legend>
        <label><input type="radio" name="valve" value="Native" checked> Native</label>
        <label><input type="radio" name="valve" value="Prothétique"> Prothétique</label>
      </fieldset>

      <fieldset>
        <legend>Allergie aux β-lactamines</legend>
        <label><input type="radio" name="aller" value="Non" checked> Non</label>
        <label><input type="radio" name="aller" value="Oui"> Oui</label>
      </fieldset>

      <div class="actions">
        <button type="button" class="btn" id="btnEndo">Antibiothérapie probabiliste recommandée</button>
        <button type="button" class="btn ghost" onclick="history.back()">← Retour</button>
      </div>

      <div id="resEndo" class="result"></div>
    </form>
  `;

  document.getElementById("btnEndo").addEventListener("click", () => {
    const fd = new FormData(document.getElementById("formEndo"));
    const lieu = fd.get("lieu") || "Communautaire";
    const valve = fd.get("valve") || "Native";
    const allergie = (fd.get("aller") === "Oui");

    const message = buildRecoEndocardite(lieu, valve, allergie);
    document.getElementById("resEndo").textContent =
      message + "\n\n⚠️ Vérifier CI/IR, allergies, grossesse, interactions et adapter aux protocoles locaux.";
  });

  // ---------- Logique (transposition du VBA) ----------
  function buildRecoEndocardite(lieu, valve, allergie){
    const intro = [
      "Contexte : " + lieu,
      "Valve : " + valve,
      "Allergie aux β-lactamines : " + (allergie ? "Oui" : "Non"),
      "----------------------------------------------------------------------"
    ].join(" | ").replace(" | ----------------------------------------------------------------------", "\n----------------------------------------------------------------------") + "\n";

    let res = "";

    if (allergie){
      res = rec_VancoDaptoGent();
      if (valve === "Prothétique") res += "\n" + rifampicineLine();

    } else if (lieu.indexOf("Nosocomiale") === 0){
      res = rec_VancoDaptoGent();
      if (valve === "Prothétique") res += "\n" + rifampicineLine();

    } else {
      // Communautaire
      if (valve === "Native"){
        res = rec_Native_AmoxCloxa_Ou_AmoxCeftriax();
      } else if (valve === "Prothétique"){
        res = rec_VancoDaptoGent() + "\n" + rifampicineLine();
      }
    }
    return intro + res;
  }

  // --- Blocs de texte thérapeutiques ---
  function rifampicineLine(){
    return "+ Rifampicine 900 mg/j (< 70 kg) ou 1200 mg/j (> 70 kg) IV/PO en 1 à 2 prises";
    // d’après le module VBA. :contentReference[oaicite:0]{index=0}
  }

  function rec_Native_AmoxCloxa_Ou_AmoxCeftriax(){
    return [
      "Option 1 :",
      "• Amoxicilline 200 mg/kg/j IV en 6 injections +",
      "  Cloxacilline 150 mg/kg/j IV en 4–6 injections +",
      "  Gentamicine 3 mg/kg/j IVL 30 min",
      "OU",
      "Option 2 :",
      "• Amoxicilline 200 mg/kg/j IV en 6 injections +",
      "  Ceftriaxone 2–4 g/j en 1–2 injections +",
      "  Gentamicine 3 mg/kg/j IVL 30 min"
    ].join("\n"); // :contentReference[oaicite:1]{index=1}
  }

  function rec_VancoDaptoGent(){
    return [
      "• Vancomycine 30–60 mg/kg/j IVSE (objectif résiduelle 20–30 mg/L)",
      "  OU Daptomycine 10 mg/kg/j",
      "+ Gentamicine 3 mg/kg/j IVL 30 min"
    ].join("\n"); // :contentReference[oaicite:2]{index=2}
  }
}

function renderProbaSepsisForm(){
  $app.innerHTML = `
    <div class="card"><strong>Caractéristiques du sepsis sans point d'appel</strong></div>

    <div class="hero-pneu card">
      <img src="./img/sepsis.png" alt="Sepsis sans porte d'entrée" class="form-hero">
    </div>

    <form id="formSepsis" class="form">
      <fieldset>
        <legend>Lieu de survenue</legend>
        <label><input type="radio" name="lieu" value="Communautaire" checked> Communautaire</label>
        <label><input type="radio" name="lieu" value="Nosocomiale"> Nosocomiale</label>
      </fieldset>

      <fieldset>
        <legend>Patient neutropénique</legend>
        <label><input type="radio" name="neutro" value="Non" checked> Non</label>
        <label><input type="radio" name="neutro" value="Oui"> Oui</label>
      </fieldset>

      <fieldset>
        <legend>Allergie aux β-lactamines</legend>
        <label><input type="radio" name="allergie" value="Non" checked> Non</label>
        <label><input type="radio" name="allergie" value="Oui"> Oui</label>
      </fieldset>

      <fieldset>
        <legend>Critères microbiologiques</legend>
        <label><input type="checkbox" name="blse"> FdR de BLSE*</label>
        <label><input type="checkbox" name="sarm"> FdR de SARM**</label>
      </fieldset>

      <fieldset>
        <legend>Choc septique</legend>
        <label><input type="radio" name="choc" value="Non" checked> Non</label>
        <label><input type="radio" name="choc" value="Oui"> Oui</label>
      </fieldset>

      <aside class="card ghost" style="max-width:520px">
        <strong>Conseil malin !</strong><br>
        Avez-vous bien pensé à la Leptospirose et à la maladie de Still ?
      </aside>

<!-- Ajout de l'encadré avec la légende pour les sepsis sans porte d'entrée -->
      <div class="warning-container">
        <p><strong>*FdR de BLSE :</strong> ATB < 3 mois, ATCD de colonisation/infection BLSE, hospit. dans les 3 mois, voyage dans un pays endémique.</p>
        <p><strong>**FdR de SARM :</strong> colo/infection récente SARM, vie institution/long séjour, lésion cutanée chronique, dialyse chronique.</p>
      </div>

      <div class="actions">
        <button type="button" class="btn" id="btnSepsis">Antibiothérapie probabiliste recommandée</button>
        <button type="button" class="btn ghost" onclick="history.back()">← Retour</button>
      </div>

      <div id="resSepsis" class="result"></div>
    </form>
  `;

  document.getElementById("btnSepsis").addEventListener("click", () => {
    const fd = new FormData(document.getElementById("formSepsis"));
    const isCommu   = (fd.get("lieu") || "Communautaire") === "Communautaire";
    const isNoso    = !isCommu;
    const isNeutro  = (fd.get("neutro") === "Oui");
    const isAllergy = (fd.get("allergie") === "Oui");
    const hasBLSE   = !!fd.get("blse");
    const hasSARM   = !!fd.get("sarm");
    const isShock   = (fd.get("choc") === "Oui");

    const message = buildRegimen({isCommu,isNoso,isNeutro,isAllergy,hasBLSE,hasSARM,isShock});
    document.getElementById("resSepsis").textContent =
      message + "\n\n⚠️ Vérifier CI/IR, allergies, grossesse, interactions et adapter aux protocoles locaux.";
  });

  // ===== Logique transposée du VBA =====
  function buildRegimen(p){
    let res = "Antibiothérapie probabiliste recommandée :\n";
    let baseTx = "", addTx = "";

    // ---- Neutropénique vs non-neutropénique (allergie prioritaire) ----
    if (p.isNeutro){
      if (p.isAllergy){
        baseTx =
          "• Allergie aux β-lactamines :\n" +
          "  - Ciprofloxacine 750 mg x2/j IVL/PO OU Aztréonam 1 g x4/j IVL\n" +
          "  - + Métronidazole 500 mg x3/j\n" +
          "  - + Vancomycine 30 mg/kg/j IVSE";
      } else if (p.hasBLSE){
        baseTx =
          "• FdR de BLSE :\n" +
          "  - Méropénème 4–6 g/j OU Imipénème 1 g x3/j";
        baseTx += p.isNoso ? "\n  - + Vancomycine 30 mg/kg/j" : "\n  - +/- Vancomycine 30 mg/kg/j";
      } else {
        baseTx =
          "• Référence neutropénique :\n" +
          "  - Pipéracilline–tazobactam 4 g x4/j IVL OU\n" +
          "  - Céfépime 4–6 g/24h IVL + Métronidazole 500 mg x3/j";
        baseTx += p.isNoso ? "\n  - + Vancomycine 30 mg/kg/j" : "\n  - +/- Vancomycine 30 mg/kg/j";
      }

    } else {
      if (p.isAllergy){
        if (p.isCommu){
          baseTx =
            "• Allergie aux β-lactamines (communautaire) :\n" +
            "  - Lévofloxacine 500 mg x2/j + Métronidazole 500 mg x3/j";
        } else {
          baseTx =
            "• Allergie aux β-lactamines (nosocomial) :\n" +
            "  - Ciprofloxacine 750 mg x2/j IVL/PO OU Aztréonam 1 g x4/j IVL\n" +
            "  - + Métronidazole 500 mg x3/j\n" +
            "  - + Vancomycine 30 mg/kg/j IVSE";
        }
      } else if (p.hasBLSE){
        baseTx =
          "• FdR de BLSE :\n" +
          "  - Méropénème 4–6 g/j OU Imipénème 1 g x3/j";
      } else {
        if (p.isCommu){
          // Correction #1 : une seule proposition
          baseTx =
            "• Référence (communautaire) :\n" +
            "  - Céfotaxime 4–6 g/24h IVL + Métronidazole 500 mg x3/j";
        } else {
          baseTx =
            "• Référence (nosocomial) :\n" +
            "  - Pipéracilline–tazobactam 4 g x4/j IVL OU\n" +
            "  - Céfépime 4–6 g/24h IVL + Métronidazole 500 mg x3/j";
        }
      }
    }

    // ---- Ajouts imposés ----
    // Aminoside si choc septique (+/- caspofungine)
    if (p.isShock){
      if (p.isCommu){
        addTx += "\n• Choc septique : ajouter Gentamicine 5–8 mg/kg IVL (30 min)";
      } else {
        addTx += "\n• Choc septique : ajouter Amikacine 25–30 mg/kg IVL (30 min)";
      }
      addTx += "\n  +/- Caspofungine 70 mg J1 puis 50 mg/j";
    }

    // Vancomycine si FdR SARM (sauf communautaire non-neutropénique sans choc)
    if (p.hasSARM){
      let shouldAddVanco = true;
      // Correction #2
      if (p.isCommu && !p.isNeutro && !p.isShock) shouldAddVanco = false;

      if (shouldAddVanco && baseTx.toLowerCase().indexOf("vancomycine") === -1){
        addTx += "\n• Ajouter : Vancomycine 30 mg/kg/j";
      }
    }

    return res + baseTx + addTx;
  }
}

function renderProbaMediastinite() {
  const $app = document.getElementById('app');

  $app.innerHTML = `
    <div class="page page-mediastinite">
      <span class="title-badge">Caractéristiques de la médiastinite post-opératoire</span>

      <div class="card hero">
        <img src="./img/mediastinite.png" alt="Médiastinites post-opératoires" onerror="this.style.display='none'">
      </div>

      <form class="form" onsubmit="return false;">
        <fieldset>
          <legend>Options</legend>

          <label class="checkbox" style="margin-top:.25rem;">
            <input type="checkbox" id="chk-allergie">
            Allergie aux β-lactamines
          </label>

          <label class="checkbox">
            <input type="checkbox" id="chk-choc">
            Choc septique
          </label>
        </fieldset>

        <div class="actions">
          <button class="btn outline" id="btn-run">Antibiothérapie probabiliste recommandée</button>
          <button class="btn ghost" type="button" onclick="history.back()">← Retour</button>
        </div>
      </form>

      <div id="result" class="result" style="display:none;"></div>
    </div>
  `;

  const $chkAllerg = document.getElementById('chk-allergie');
  const $chkChoc   = document.getElementById('chk-choc');
  const $btnRun    = document.getElementById('btn-run');
  const $res       = document.getElementById('result');

  $btnRun.addEventListener('click', () => {
    // 1) Base selon allergie
let gramNeg;

if ($chkAllerg.checked) {
  gramNeg = "Anti-Gram- : Aztréonam 1 g x4/j";
} else {
  // Si pas d’allergie
  gramNeg = "Anti-Gram- : Céfépime 1 g x4/j IVL ou Pipéracilline-tazobactam 4 g x4/j IVL";

  // ...et s’il y a un choc septique, on ajoute la mention carbapénème
  if ($chkChoc.checked) {
    gramNeg += " (Envisager carbapénème)";
  }
}


    // 2) Couverture Gram+
    const gramPos = "Anti-Gram+ : Vancomycine 30 mg/kg/j IVSE ou Daptomycine 10 mg/kg/j IVL";

    // 3) Si choc septique → ajout amikacine
    const choc    = $chkChoc.checked
      ? "<br>Ajout d’Amikacine 25–30 mg/kg IVL sur 30 min"
      : "";

    const text = `${gramNeg}<br><br>${gramPos}${choc ? `<br><br>${choc}` : ""}`;

    $res.style.display = 'block';
    $res.innerHTML = `
      <div class="info-card">
        <div class="info-content">${text}</div>
      </div>
    `;
  });
}

function renderProbaScarpa() {
  const $app = document.getElementById('app');

  $app.innerHTML = `
    <div class="page page-scarpa">
      <span class="title-badge">Caractéristiques de l'infection de scarpa</span>

      <div class="card hero">
        <img src="./img/ecmo.png" alt="Infection de Scarpa" onerror="this.style.display='none'">
      </div>

      <form class="form" onsubmit="return false;">
        <fieldset>
          <legend>Options</legend>

          <label class="checkbox" style="margin-top:.25rem;">
            <input type="checkbox" id="chk-allergie">
            Allergie aux β-lactamines
          </label>

          <label class="checkbox">
            <input type="checkbox" id="chk-choc">
            Choc septique
          </label>
        </fieldset>

        <div class="actions">
          <button class="btn outline" id="btn-run">Antibiothérapie probabiliste recommandée</button>
          <button class="btn ghost" type="button" onclick="history.back()">← Retour</button>
        </div>
      </form>

      <div id="result" class="result" style="display:none;"></div>
    </div>
  `;

  const $chkAllerg = document.getElementById('chk-allergie');
  const $chkChoc   = document.getElementById('chk-choc');
  const $btnRun    = document.getElementById('btn-run');
  const $res       = document.getElementById('result');

  $btnRun.addEventListener('click', () => {
    // Anti-Gram- selon allergie, avec mention carbapénème si pas d’allergie + choc
    let gramNeg;
    if ($chkAllerg.checked) {
      gramNeg = "Anti-Gram- : Aztréonam 1 g x4/j";
    } else {
      gramNeg = "Anti-Gram- : Céfépime 1 g x4/j IVL ou Pipéracilline-tazobactam 4 g x4/j IVL";
      if ($chkChoc.checked) {
        gramNeg += " (Envisager carbapénème)";
      }
    }

    // Anti-Gram+
    const gramPos = "Anti-Gram+ : Vancomycine 30 mg/kg/j IVSE ou Daptomycine 10 mg/kg/j IVL";

    // Ajout si choc septique
    const choc = $chkChoc.checked
      ? "<br>Ajout d’Amikacine 25–30 mg/kg IVL sur 30 min"
      : "";

    const text = `${gramNeg}<br><br>${gramPos}${choc ? `<br><br>${choc}` : ""}`;

    $res.style.display = 'block';
    $res.innerHTML = `
      <div class="info-card">
        <div class="info-content">${text}</div>
      </div>
    `;
  });
}



function renderDureesForm() {
  // ======================= Données – listes =======================
  const INFECTIONS = {
    "Pneumonies": ["Communautaire", "PAVM", "Nécrose/abcès", "Empyème pleural"],
    "Infections urinaires": ["Cystite", "Pyélonéphrite", "IU masculine"],
    "Bactériémies": ["Inconnue", "Cathéter", "Autre infection"],
    "Infections intra-abdominales": [
      "Cholécystite","Angiocholite","Abcès hépatique","Inf. nécrose pancréatique",
      "Péritonite communautaire","Péritonite nosocomiale","Appendicite","Diverticulite",
      "Entéro-colite","Inf. liquide ascite"
    ],
    "Infections neuro-méningées": ["Méningite", "Encéphalite", "Abcès cérébral"],
    "Infections des parties molles": ["Non nécrosantes","Nécrosantes"],
    "Endocardite infectieuse": ["Valve native","Prothèse valvulaire (< ou > 1 an)"]
  };

  const BACTERIES = {
    "Cocci Gram -": ["Neisseria meningitidis"],
    "Cocci Gram +": ["Streptococcus spp.","Staphylococcus spp.","Enterococcus spp."],
    "Bacilles Gram -": [
      "Entérobactéries","Pseudomonas aeruginosa","Stenotrophomonas maltophilia",
      "Acinetobacter baumannii","Haemophilus influenzae","Legionella pneumophila"
    ],
    "Bacilles Gram +": ["Clostridium difficile","Listeria monocytogenes","Nocardia spp."],
    "Autres": ["Mycoplasma pneumoniae","Mycobacterium tuberculosis"]
  };

  const GROUPES_BACT = Object.keys(BACTERIES);

  // ======================= UI =======================
  $app.innerHTML = `
    <div class="card"><strong>Durée d’antibiothérapie</strong></div>

    <div class="hero-pneu card">
      <img src="./img/fabrice.png" alt="Durée d'antibiothérapie" class="form-hero">
    </div>

    <form id="formDuree" class="form">
      <div class="grid two">
        <fieldset>
          <legend>Infection</legend>
          <label for="selTypeInfect">Type d’infection</label>
          <select id="selTypeInfect"></select>

          <label for="selSousType">Sous-type d’infection</label>
          <select id="selSousType"></select>
        </fieldset>

        <fieldset>
          <legend>Documentation</legend>
          <label for="selCatBact">Catégorie</label>
          <select id="selCatBact"></select>

          <label for="selEspece">Espèce bactérienne</label>
          <select id="selEspece"></select>
        </fieldset>
      </div>

      <div class="actions">
        <button type="button" class="btn" id="btnCalcul">Durée recommandée</button>
        <button type="button" class="btn ghost" onclick="history.back()">← Retour</button>
      </div>

      <div id="resDuree" class="result"></div>
    </form>
  `;

  // Remplissage des combos + dépendances
  const $type = document.getElementById("selTypeInfect");
  const $sous = document.getElementById("selSousType");
  const $cat  = document.getElementById("selCatBact");
  const $esp  = document.getElementById("selEspece");

  function fillSelect(sel, arr) {
    sel.innerHTML = arr.map(v => `<option value="${v}">${v}</option>`).join("");
  }

  fillSelect($type, Object.keys(INFECTIONS));
  fillSelect($cat, GROUPES_BACT);

  function updateSousTypes() {
    fillSelect($sous, INFECTIONS[$type.value] || []);
  }
  function updateEspeces() {
    fillSelect($esp, BACTERIES[$cat.value] || []);
  }

  $type.addEventListener("change", updateSousTypes);
  $cat.addEventListener("change", updateEspeces);

  // init
  updateSousTypes();
  updateEspeces();

  // ======================= Logique / table des durées =======================
  // dictionnaire "G|S|GB|B" -> durée brute (sera formatée avant affichage)
  const map = buildDureesMap();

  document.getElementById("btnCalcul").addEventListener("click", () => {
    const cle = `${$type.value}|${$sous.value}|${$cat.value}|${$esp.value}`;
    const brut = map[cle] || "Aucune recommandation disponible pour cette combinaison.";
    document.getElementById("resDuree").textContent = formatDuree(brut);
  });

  // ---------------- helpers ----------------
  function buildDureesMap() {
    const d = {};
    // 1) tout à "NA" par défaut (seules les combinaisons présentes seront écrasées)
    for (const g of Object.keys(INFECTIONS)) {
      for (const s of INFECTIONS[g]) {
        for (const gb of GROUPES_BACT) {
          for (const b of BACTERIES[gb]) {
            d[`${g}|${s}|${gb}|${b}`] = "NA";
          }
        }
      }
    }

    const add = (G,S,GB,B,val) => { d[`${G}|${S}|${GB}|${B}`] = val; };

    // --------- PNEUMONIES ---------
    // Communautaire
    add("Pneumonies","Communautaire","Cocci Gram -","Neisseria meningitidis","7 j");                                           // :contentReference[oaicite:0]{index=0}
    add("Pneumonies","Communautaire","Cocci Gram +","Streptococcus spp.","5 à 7 j");                                           // :contentReference[oaicite:1]{index=1}
    add("Pneumonies","Communautaire","Cocci Gram +","Staphylococcus spp.","5 à 7 j");                                          // :contentReference[oaicite:2]{index=2}
    add("Pneumonies","Communautaire","Cocci Gram +","Enterococcus spp.","5 à 7 j");                                            // :contentReference[oaicite:3]{index=3}
    add("Pneumonies","Communautaire","Bacilles Gram -","Entérobactéries","5 à 7 j");                                           // :contentReference[oaicite:4]{index=4}
    add("Pneumonies","Communautaire","Bacilles Gram -","Pseudomonas aeruginosa","7 j");                                        // :contentReference[oaicite:5]{index=5}
    add("Pneumonies","Communautaire","Bacilles Gram -","Stenotrophomonas maltophilia","7 j");                              // :contentReference[oaicite:6]{index=6}
    add("Pneumonies","Communautaire","Bacilles Gram -","Acinetobacter baumannii","7 j ");                   // :contentReference[oaicite:7]{index=7}
    add("Pneumonies","Communautaire","Bacilles Gram -","Legionella pneumophila","14 à 21 j (21 jours en réanimation)");
    add("Pneumonies","Communautaire","Bacilles Gram -","Haemophilus influenzae","5 à 7 j");                                    // :contentReference[oaicite:8]{index=8}
    add("Pneumonies","Communautaire","Bacilles Gram +","Nocardia spp.","6 mois");                                              // :contentReference[oaicite:9]{index=9}
    add("Pneumonies","Communautaire","Autres","Mycoplasma pneumoniae","5 à 7 j");                                              // :contentReference[oaicite:10]{index=10}
    add("Pneumonies","Communautaire","Autres","Mycobacterium tuberculosis","6 mois");                                          // :contentReference[oaicite:11]{index=11}

    // PAVM
    add("Pneumonies","PAVM","Cocci Gram +","Streptococcus spp.","7 j");                                                        // :contentReference[oaicite:12]{index=12}
    add("Pneumonies","PAVM","Cocci Gram +","Staphylococcus spp.","7 j");                                                       // :contentReference[oaicite:13]{index=13}
    add("Pneumonies","PAVM","Cocci Gram +","Enterococcus spp.","7 j");                                                         // :contentReference[oaicite:14]{index=14}
    add("Pneumonies","PAVM","Bacilles Gram -","Entérobactéries","7 j");                                                        // :contentReference[oaicite:15]{index=15}
    add("Pneumonies","PAVM","Bacilles Gram -","Pseudomonas aeruginosa","8 à 15 j");                                            // :contentReference[oaicite:16]{index=16}
    add("Pneumonies","PAVM","Bacilles Gram -","Stenotrophomonas maltophilia","7 j");                                           // :contentReference[oaicite:17]{index=17}
    add("Pneumonies","PAVM","Bacilles Gram -","Acinetobacter baumannii","7 j ");                            // :contentReference[oaicite:18]{index=18}
    add("Pneumonies","PAVM","Bacilles Gram -","Legionella pneumophila","14 à 21 j (21 jours en réanimation)");
    add("Pneumonies","PAVM","Bacilles Gram -","Haemophilus influenzae","7 j");                                                 // :contentReference[oaicite:19]{index=19}

    // Nécrose / abcès pulmonaires
    const necabc = "3 à 6 semaines";                                                                                            // :contentReference[oaicite:20]{index=20}
    add("Pneumonies","Nécrose/abcès","Cocci Gram +","Streptococcus spp.",necabc);
    add("Pneumonies","Nécrose/abcès","Cocci Gram +","Staphylococcus spp.",necabc);
    add("Pneumonies","Nécrose/abcès","Cocci Gram +","Enterococcus spp.",necabc);
    add("Pneumonies","Nécrose/abcès","Bacilles Gram -","Entérobactéries",necabc);
    add("Pneumonies","Nécrose/abcès","Bacilles Gram -","Pseudomonas aeruginosa",necabc);
    add("Pneumonies","Nécrose/abcès","Bacilles Gram -","Stenotrophomonas maltophilia",necabc);
    add("Pneumonies","Nécrose/abcès","Bacilles Gram -","Acinetobacter baumannii",necabc);
    add("Pneumonies","Nécrose/abcès","Bacilles Gram -","Legionella pneumophila","3 à 6 semaines");
    add("Pneumonies","Nécrose/abcès","Cocci Gram -","Neisseria meningitidis",necabc);                                          // :contentReference[oaicite:21]{index=21}
    add("Pneumonies","Nécrose/abcès","Bacilles Gram -","Haemophilus influenzae",necabc);                                       // :contentReference[oaicite:22]{index=22}
    add("Pneumonies","Nécrose/abcès","Bacilles Gram +","Nocardia spp.","6 mois");                                              // :contentReference[oaicite:23]{index=23}
    add("Pneumonies","Nécrose/abcès","Autres","Mycobacterium tuberculosis","9 à 12 mois");                                     // :contentReference[oaicite:24]{index=24}

    // Empyème pleural
    const emp = "15 jours après drainage ; 3 à 4 semaines si pas de drainage";                                                 // :contentReference[oaicite:25]{index=25}
    add("Pneumonies","Empyème pleural","Cocci Gram +","Streptococcus spp.",emp);
    add("Pneumonies","Empyème pleural","Cocci Gram +","Staphylococcus spp.",emp);
    add("Pneumonies","Empyème pleural","Cocci Gram +","Enterococcus spp.",emp);
    add("Pneumonies","Empyème pleural","Bacilles Gram -","Entérobactéries",emp);
    add("Pneumonies","Empyème pleural","Bacilles Gram -","Pseudomonas aeruginosa",emp);
    add("Pneumonies","Empyème pleural","Bacilles Gram -","Stenotrophomonas maltophilia",emp);
    add("Pneumonies","Empyème pleural","Bacilles Gram -","Acinetobacter baumannii",emp);
    add("Pneumonies","Empyème pleural","Bacilles Gram -","Haemophilus influenzae",emp); 
    add("Pneumonies","Empyème pleural","Bacilles Gram -","Legionella pneumophila",emp);
    add("Pneumonies","Empyème pleural","Bacilles Gram +","Nocardia spp.","6 mois");                                            // :contentReference[oaicite:26]{index=26}
    add("Pneumonies","Empyème pleural","Autres","Mycobacterium tuberculosis",">= 6 mois");                                     // :contentReference[oaicite:27]{index=27}

    // --------- INFECTIONS URINAIRES ---------
    // Cystite
    add("Infections urinaires","Cystite","Cocci Gram +","Streptococcus spp.","7 jours si β-lactamine");                      // :contentReference[oaicite:28]{index=28}
    add("Infections urinaires","Cystite","Cocci Gram +","Staphylococcus spp.","7 jours si β-lactamine");                     // :contentReference[oaicite:29]{index=29}
    add("Infections urinaires","Cystite","Cocci Gram +","Enterococcus spp.","7 jours si β-lactamine");                       // :contentReference[oaicite:30]{index=30}
    add("Infections urinaires","Cystite","Bacilles Gram -","Entérobactéries","7 jours si β-lactamine");                      // :contentReference[oaicite:31]{index=31}
    add("Infections urinaires","Cystite","Bacilles Gram -","Pseudomonas aeruginosa","7 jours si β-lactamine");               // :contentReference[oaicite:32]{index=32}
    add("Infections urinaires","Cystite","Bacilles Gram -","Stenotrophomonas maltophilia","7 jours si β-lactamine");         // :contentReference[oaicite:33]{index=33}
    add("Infections urinaires","Cystite","Bacilles Gram -","Acinetobacter baumannii","7 jours si β-lactamine");              // :contentReference[oaicite:34]{index=34}
    add("Infections urinaires","Cystite","Autres","Mycobacterium tuberculosis","6 mois");                                       // :contentReference[oaicite:35]{index=35}

    // Pyélonéphrite
    const py = "7 jours si forme simple ; 10 jours si forme grave ou à risque de complication";                                 // :contentReference[oaicite:36]{index=36}
    add("Infections urinaires","Pyélonéphrite","Cocci Gram +","Streptococcus spp.",py);
    add("Infections urinaires","Pyélonéphrite","Cocci Gram +","Staphylococcus spp.",py);
    add("Infections urinaires","Pyélonéphrite","Cocci Gram +","Enterococcus spp.",py);
    add("Infections urinaires","Pyélonéphrite","Bacilles Gram -","Entérobactéries",py);
    add("Infections urinaires","Pyélonéphrite","Bacilles Gram -","Pseudomonas aeruginosa",py);
    add("Infections urinaires","Pyélonéphrite","Bacilles Gram -","Stenotrophomonas maltophilia",py);
    add("Infections urinaires","Pyélonéphrite","Bacilles Gram -","Acinetobacter baumannii",py);
    add("Infections urinaires","Pyélonéphrite","Autres","Mycobacterium tuberculosis","9 à 12 mois");

    // IU masculine
    const ium = "14 jours (21 jours si uropathie non corrigée)";                                                                // :contentReference[oaicite:37]{index=37}
    add("Infections urinaires","IU masculine","Cocci Gram +","Streptococcus spp.",ium);
    add("Infections urinaires","IU masculine","Cocci Gram +","Staphylococcus spp.",ium);
    add("Infections urinaires","IU masculine","Cocci Gram +","Enterococcus spp.",ium);
    add("Infections urinaires","IU masculine","Bacilles Gram -","Entérobactéries",ium);
    add("Infections urinaires","IU masculine","Bacilles Gram -","Pseudomonas aeruginosa",ium);
    add("Infections urinaires","IU masculine","Bacilles Gram -","Stenotrophomonas maltophilia",ium);
    add("Infections urinaires","IU masculine","Bacilles Gram -","Acinetobacter baumannii",ium);
    add("Infections urinaires","IU masculine","Autres","Mycobacterium tuberculosis","9 à 12 mois");

    // --------- BACTÉRIÉMIES ---------
    // Inconnue
    add("Bactériémies","Inconnue","Cocci Gram -","Neisseria meningitidis","7 j");                                               // :contentReference[oaicite:38]{index=38}
    add("Bactériémies","Inconnue","Cocci Gram +","Streptococcus spp.","7 j");                                                   // :contentReference[oaicite:39]{index=39}
    add("Bactériémies","Inconnue","Cocci Gram +","Staphylococcus spp.","Staphylocoques à coagulase négative : 3 à 5 j ; Staphylococcus aureus ou lugdunensis : 14 j"); // :contentReference[oaicite:40]{index=40}
    add("Bactériémies","Inconnue","Cocci Gram +","Enterococcus spp.","7 j");                                                    // :contentReference[oaicite:41]{index=41}
    add("Bactériémies","Inconnue","Bacilles Gram -","Entérobactéries","7 j");                                                   // :contentReference[oaicite:42]{index=42}
    add("Bactériémies","Inconnue","Bacilles Gram -","Pseudomonas aeruginosa","7 à 10 j");                                       // :contentReference[oaicite:43]{index=43}
    add("Bactériémies","Inconnue","Bacilles Gram -","Acinetobacter baumannii","7 à 10 j");
    add("Bactériémies","Inconnue","Bacilles Gram -","Stenotrophomonas maltophilia","7 à 10 j");
    add("Bactériémies","Inconnue","Bacilles Gram -","Haemophilus influenzae","7 j");
    add("Bactériémies","Inconnue","Bacilles Gram +","Listeria monocytogenes","21 j");                                           // :contentReference[oaicite:45]{index=45}
    add("Bactériémies","Inconnue","Bacilles Gram +","Nocardia spp.","6 mois");                                                  // :contentReference[oaicite:46]{index=46}
    add("Bactériémies","Inconnue","Autres","Mycobacterium tuberculosis","9 à 12 mois");                                         // :contentReference[oaicite:47]{index=47}

    // Cathéter
    add("Bactériémies","Cathéter","Cocci Gram -","Neisseria meningitidis","7 j");                                               // :contentReference[oaicite:48]{index=48}
    add("Bactériémies","Cathéter","Cocci Gram +","Streptococcus spp.","7 j");                                                   // :contentReference[oaicite:49]{index=49}
    add("Bactériémies","Cathéter","Cocci Gram +","Staphylococcus spp.","Staphylocoques à coagulase négative : 3 j ; Staphylococcus aureus ou lugdunensis : 14 j"); // :contentReference[oaicite:50]{index=50}
    add("Bactériémies","Cathéter","Cocci Gram +","Enterococcus spp.","7 j");                                                    // :contentReference[oaicite:51]{index=51}
    add("Bactériémies","Cathéter","Bacilles Gram -","Entérobactéries","7 j");                                                   // :contentReference[oaicite:52]{index=52}
    add("Bactériémies","Cathéter","Bacilles Gram -","Pseudomonas aeruginosa","7 à 10 j");                                       // :contentReference[oaicite:53]{index=53}
    add("Bactériémies","Cathéter","Bacilles Gram -","Acinetobacter baumannii","7 à 10 j"); 
    add("Bactériémies","Cathéter","Bacilles Gram -","Stenotrophomonas maltophilia","7 à 10 j");
    add("Bactériémies","Cathéter","Bacilles Gram -","Haemophilus influenzae","7 j");      // :contentReference[oaicite:54]{index=54}
    add("Bactériémies","Cathéter","Bacilles Gram +","Nocardia spp.","6 mois"); 

    // Autre infection – identique à l’infection source
    const idem = "Identique à l'infection responsable";                                                                         // :contentReference[oaicite:55]{index=55}
    add("Bactériémies","Autre infection","Cocci Gram -","Neisseria meningitidis",idem);
    add("Bactériémies","Autre infection","Cocci Gram +","Streptococcus spp.",idem);
    add("Bactériémies","Autre infection","Cocci Gram +","Staphylococcus spp.",idem);
    add("Bactériémies","Autre infection","Cocci Gram +","Enterococcus spp.",idem);
    add("Bactériémies","Autre infection","Bacilles Gram -","Entérobactéries",idem);
    add("Bactériémies","Autre infection","Bacilles Gram -","Pseudomonas aeruginosa",idem);
    add("Bactériémies","Autre infection","Bacilles Gram -","Acinetobacter baumannii",idem); 
    add("Bactériémies","Autre infection","Bacilles Gram -","Stenotrophomonas maltophilia",idem);
    add("Bactériémies","Autre infection","Bacilles Gram -","Haemophilus influenzae",idem);
    add("Bactériémies","Autre infection","Bacilles Gram +","Listeria monocytogenes","21 j");
    add("Bactériémies","Autre infection","Bacilles Gram +","Nocardia spp.","6 mois");
    add("Bactériémies","Autre infection","Autres","Mycobacterium tuberculosis",idem);
          // :contentReference[oaicite:54]{index=54}
  

    // --------- INFECTIONS INTRA-ABDOMINALES ---------
    const chole     = "3 jours post-opératoire ; 7 jours si non opérée";                                                        // :contentReference[oaicite:57]{index=57}
    const angio     = "3 jours post-drainage, 7 à 10 jours si non drainée";
    const absh      = "3 à 4 semaines si drainage ; 6 semaines sinon";
    const inp       = "Aucune recommandation – dépend de l’évolution clinique/radiologique";
    const peritCom  = "4 jours (5 jours si sepsis)";
    const peritNos  = "5 à 8 jours (8 jours si sepsis)";
    const app       = "1 jour (si péritonite = 3 jours ; si non opérée = 7)";
    const divert    = "7 jours (Antibiothérapie indiquée uniquement si: gravité, grossesse, immunodépression ou ASA3)";
    const entecol   = "3 à 7 j";
    const cdiff     = "10 j";
    const asc       = "5 à 7 jours (5 jours si C3G IV)";
    const tbLong    = "9 à 12 mois";

    // Cholécystite
    for (const gb of ["Cocci Gram +","Bacilles Gram -"]) {
      for (const b of (gb==="Cocci Gram +"? ["Streptococcus spp.","Staphylococcus spp.","Enterococcus spp."]
                                         : ["Entérobactéries","Pseudomonas aeruginosa","Stenotrophomonas maltophilia","Acinetobacter baumannii"])) {
        add("Infections intra-abdominales","Cholécystite",gb,b,chole);
      }
    }                                                                                                                            // :contentReference[oaicite:58]{index=58}
    add("Infections intra-abdominales","Cholécystite","Autres","Mycobacterium tuberculosis",tbLong);                            // :contentReference[oaicite:59]{index=59}

    // Angiocholite
    for (const gb of ["Cocci Gram +","Bacilles Gram -"]) {
      for (const b of (gb==="Cocci Gram +"? ["Streptococcus spp.","Staphylococcus spp.","Enterococcus spp."]
                                         : ["Entérobactéries","Pseudomonas aeruginosa","Stenotrophomonas maltophilia","Acinetobacter baumannii"])) {
        add("Infections intra-abdominales","Angiocholite",gb,b,angio);
      }
    }                                                                                                                            // :contentReference[oaicite:60]{index=60}
    add("Infections intra-abdominales","Angiocholite","Autres","Mycobacterium tuberculosis",tbLong);

    // Abcès hépatique
    for (const b of ["Streptococcus spp.","Staphylococcus spp.","Enterococcus spp."]) add("Infections intra-abdominales","Abcès hépatique","Cocci Gram +",b,absh);
    for (const b of ["Entérobactéries","Pseudomonas aeruginosa","Stenotrophomonas maltophilia","Acinetobacter baumannii"]) add("Infections intra-abdominales","Abcès hépatique","Bacilles Gram -",b,absh);
    add("Infections intra-abdominales","Abcès hépatique","Autres","Mycobacterium tuberculosis",tbLong);                         // :contentReference[oaicite:61]{index=61}

    // Infection de nécrose pancréatique
    for (const b of ["Streptococcus spp.","Staphylococcus spp.","Enterococcus spp."]) add("Infections intra-abdominales","Inf. nécrose pancréatique","Cocci Gram +",b,inp);
    for (const b of ["Entérobactéries","Pseudomonas aeruginosa","Stenotrophomonas maltophilia","Acinetobacter baumannii"]) add("Infections intra-abdominales","Inf. nécrose pancréatique","Bacilles Gram -",b,inp);
    add("Infections intra-abdominales","Inf. nécrose pancréatique","Autres","Mycobacterium tuberculosis",tbLong);               // :contentReference[oaicite:62]{index=62}

    // Péritonite communautaire
    for (const b of ["Streptococcus spp.","Staphylococcus spp.","Enterococcus spp."]) add("Infections intra-abdominales","Péritonite communautaire","Cocci Gram +",b,peritCom);
    for (const b of ["Entérobactéries","Pseudomonas aeruginosa","Stenotrophomonas maltophilia","Acinetobacter baumannii"]) add("Infections intra-abdominales","Péritonite communautaire","Bacilles Gram -",b,peritCom); // :contentReference[oaicite:63]{index=63}
    add("Infections intra-abdominales","Péritonite communautaire","Autres","Mycobacterium tuberculosis",tbLong);

    // Péritonite nosocomiale
    for (const b of ["Streptococcus spp.","Staphylococcus spp.","Enterococcus spp."]) add("Infections intra-abdominales","Péritonite nosocomiale","Cocci Gram +",b,peritNos);
    for (const b of ["Entérobactéries","Pseudomonas aeruginosa","Stenotrophomonas maltophilia","Acinetobacter baumannii"]) add("Infections intra-abdominales","Péritonite nosocomiale","Bacilles Gram -",b,peritNos); // :contentReference[oaicite:64]{index=64}

    // Appendicite
    for (const gb of ["Cocci Gram +","Bacilles Gram -"]) {
      for (const b of (gb==="Cocci Gram +"? ["Streptococcus spp.","Staphylococcus spp.","Enterococcus spp."]
                                         : ["Entérobactéries","Pseudomonas aeruginosa","Stenotrophomonas maltophilia","Acinetobacter baumannii"])) {
        add("Infections intra-abdominales","Appendicite",gb,b,app);
      }
    }
    // Diverticulite
    for (const gb of ["Cocci Gram +","Bacilles Gram -"]) {
      for (const b of (gb==="Cocci Gram +"? ["Streptococcus spp.","Staphylococcus spp.","Enterococcus spp."]
                                         : ["Entérobactéries","Pseudomonas aeruginosa","Stenotrophomonas maltophilia","Acinetobacter baumannii"])) {
        add("Infections intra-abdominales","Diverticulite",gb,b,divert);
      }
    }
    // Entéro-colite
    add("Infections intra-abdominales","Entéro-colite","Bacilles Gram -","Entérobactéries",entecol);
    add("Infections intra-abdominales","Entéro-colite","Bacilles Gram +","Clostridium difficile",cdiff);
    add("Infections intra-abdominales","Entéro-colite","Autres","Mycobacterium tuberculosis","6 mois");                          // :contentReference[oaicite:65]{index=65}
    // Inf. liquide ascite
    add("Infections intra-abdominales","Inf. liquide ascite","Bacilles Gram -","Entérobactéries",asc);
    add("Infections intra-abdominales","Inf. liquide ascite","Autres","Mycobacterium tuberculosis","NA");                        // :contentReference[oaicite:66]{index=66}

    // --------- INFECTIONS NEURO-MÉNINGÉES ---------
    // Méningite
    add("Infections neuro-méningées","Méningite","Cocci Gram -","Neisseria meningitidis","5 à 7 j");                             // :contentReference[oaicite:67]{index=67}
    add("Infections neuro-méningées","Méningite","Cocci Gram +","Streptococcus spp.","10 à 14 j (14 à 21 j si groupe B)");
    add("Infections neuro-méningées","Méningite","Cocci Gram +","Staphylococcus spp.","10 à 21 j (généralement nosocomiale)");
    add("Infections neuro-méningées","Méningite","Cocci Gram +","Enterococcus spp.","21 j (car généralement nosocomiale)");
    add("Infections neuro-méningées","Méningite","Bacilles Gram -","Entérobactéries","21 j (car généralement nosocomiale)");
    add("Infections neuro-méningées","Méningite","Bacilles Gram -","Pseudomonas aeruginosa","21 j (car généralement nosocomiale)");
    add("Infections neuro-méningées","Méningite","Bacilles Gram -","Acinetobacter baumannii","21 j (car généralement nosocomiale)");
    add("Infections neuro-méningées","Méningite","Bacilles Gram -","Stenotrophomonas maltophilia","21 j (car généralement nosocomiale)");
    add("Infections neuro-méningées","Méningite","Bacilles Gram -","Haemophilus influenzae","7 j");                              // :contentReference[oaicite:68]{index=68}
    add("Infections neuro-méningées","Méningite","Bacilles Gram +","Listeria monocytogenes","21 j");
    add("Infections neuro-méningées","Méningite","Autres","Mycobacterium tuberculosis","12 mois");

    // Encéphalite (bactérienne)
    add("Infections neuro-méningées","Encéphalite","Bacilles Gram +","Listeria monocytogenes","21 j");
    add("Infections neuro-méningées","Encéphalite","Autres","Mycobacterium tuberculosis","12 à 18 mois");                         // :contentReference[oaicite:69]{index=69}

    // Abcès cérébral
    const abc = "4 à 6 semaines si drainage (4 semaines si exérèse chirurgicale) ; 8 à 12 semaines en l’absence de geste";       // :contentReference[oaicite:70]{index=70}
    add("Infections neuro-méningées","Abcès cérébral","Cocci Gram +","Streptococcus spp.",abc);
    add("Infections neuro-méningées","Abcès cérébral","Cocci Gram +","Staphylococcus spp.",abc);
    add("Infections neuro-méningées","Abcès cérébral","Cocci Gram +","Enterococcus spp.",abc);
    add("Infections neuro-méningées","Abcès cérébral","Bacilles Gram -","Entérobactéries",abc);
    add("Infections neuro-méningées","Abcès cérébral","Bacilles Gram -","Pseudomonas aeruginosa",abc);
    add("Infections neuro-méningées","Abcès cérébral","Bacilles Gram -","Acinetobacter baumannii",abc);
    add("Infections neuro-méningées","Abcès cérébral","Bacilles Gram -","Stenotrophomonas maltophilia",abc);
    add("Infections neuro-méningées","Abcès cérébral","Bacilles Gram -","Haemophilus influenzae",abc)
    add("Infections neuro-méningées","Abcès cérébral","Bacilles Gram +","Nocardia spp.","12 à 18 mois");
    add("Infections neuro-méningées","Abcès cérébral","Autres","Mycobacterium tuberculosis","12 mois");

    // --------- INFECTIONS DES PARTIES MOLLES ---------
    // Non nécrosantes
    add("Infections des parties molles","Non nécrosantes","Cocci Gram +","Streptococcus spp.","7 j");                             // :contentReference[oaicite:71]{index=71}
    add("Infections des parties molles","Non nécrosantes","Cocci Gram +","Staphylococcus spp.","7 j");
    add("Infections des parties molles","Non nécrosantes","Cocci Gram +","Enterococcus spp.","7 j");
    add("Infections des parties molles","Non nécrosantes","Bacilles Gram -","Entérobactéries","7 j");
    add("Infections des parties molles","Non nécrosantes","Bacilles Gram -","Pseudomonas aeruginosa","7 j");
    add("Infections des parties molles","Non nécrosantes","Bacilles Gram -","Acinetobacter baumannii","7 j");
    add("Infections des parties molles","Non nécrosantes","Bacilles Gram -","Stenotrophomonas maltophilia","7 j");
    add("Infections des parties molles","Non nécrosantes","Bacilles Gram +","Nocardia spp.","3 à 6 mois");
    add("Infections des parties molles","Non nécrosantes","Autres","Mycobacterium tuberculosis","6 mois");      // :contentReference[oaicite:72]{index=72}

    // Nécrosantes
    const npo = "10 à 15 jours post-opératoire (selon évolution)";                                                               // :contentReference[oaicite:73]{index=73}
    add("Infections des parties molles","Nécrosantes","Cocci Gram -","Neisseria meningitidis","7 j (purpura fulminans)");
    add("Infections des parties molles","Nécrosantes","Cocci Gram +","Streptococcus spp.",npo);
    add("Infections des parties molles","Nécrosantes","Cocci Gram +","Staphylococcus spp.",npo);
    add("Infections des parties molles","Nécrosantes","Cocci Gram +","Enterococcus spp.",npo);
    add("Infections des parties molles","Nécrosantes","Bacilles Gram -","Entérobactéries",npo);
    add("Infections des parties molles","Nécrosantes","Bacilles Gram -","Pseudomonas aeruginosa",npo);
    add("Infections des parties molles","Nécrosantes","Bacilles Gram -","Acinetobacter baumannii",npo);
    add("Infections des parties molles","Nécrosantes","Bacilles Gram -","Stenotrophomonas maltophilia",npo);
    add("Infections des parties molles","Nécrosantes","Bacilles Gram +","Nocardia spp.","3 à 6 mois");
    add("Infections des parties molles","Nécrosantes","Autres","Mycobacterium tuberculosis","9 à 12 mois");

    // --------- ENDOCARDITE INFECTIEUSE ---------
    // Valve native
    add("Endocardite infectieuse","Valve native","Cocci Gram +","Streptococcus spp.","2 à 4 semaines (2 semaines si gentamicine)"); // :contentReference[oaicite:74]{index=74}
    add("Endocardite infectieuse","Valve native","Cocci Gram +","Staphylococcus spp.","4 à 6 semaines (pas d’aminoside)");
    add("Endocardite infectieuse","Valve native","Cocci Gram +","Enterococcus spp.","6 semaines (+ 2 semaines gentamicine ou + 6 semaines C3G)");
    add("Endocardite infectieuse","Valve native","Bacilles Gram -","Entérobactéries","6 semaines (+ 2 semaines gentamicine)");
    add("Endocardite infectieuse","Valve native","Bacilles Gram -","Pseudomonas aeruginosa",">= 6 semaines en bithérapie");
    add("Endocardite infectieuse","Valve native","Bacilles Gram -","Acinetobacter baumannii",">= 6 semaines en bithérapie");
    add("Endocardite infectieuse","Valve native","Bacilles Gram -","Stenotrophomonas maltophilia",">= 6 semaines en bithérapie");
    add("Endocardite infectieuse","Valve native","Bacilles Gram -","Haemophilus influenzae","4 sem C3G (ou 4 sem amoxicilline + 2 sem gentamicine)");
    add("Endocardite infectieuse","Valve native","Bacilles Gram +","Listeria monocytogenes","4 semaines de C3G (ou 4 semaines amoxicilline + 2 semaines gentamicine)");
    add("Endocardite infectieuse","Valve native","Bacilles Gram +","Nocardia spp.","6 mois");
    add("Endocardite infectieuse","Valve native","Autres","Mycobacterium tuberculosis","9 à 12 mois");

    // Prothèse valvulaire (< ou > 1 an)
    add("Endocardite infectieuse","Prothèse valvulaire (< ou > 1 an)","Cocci Gram +","Streptococcus spp.","6 semaines (dont gentamicine 2 semaines)"); // :contentReference[oaicite:75]{index=75}
    add("Endocardite infectieuse","Prothèse valvulaire (< ou > 1 an)","Cocci Gram +","Staphylococcus spp.",">= 6 semaines (dont gentamicine 2 semaines)");
    add("Endocardite infectieuse","Prothèse valvulaire (< ou > 1 an)","Cocci Gram +","Enterococcus spp.","6 semaines (+ 2 semaines gentamicine ou + 6 semaines C3G)");
    add("Endocardite infectieuse","Prothèse valvulaire (< ou > 1 an)","Bacilles Gram -","Entérobactéries","6 semaines (+ 2 semaines gentamicine)");
    add("Endocardite infectieuse","Prothèse valvulaire (< ou > 1 an)","Bacilles Gram -","Pseudomonas aeruginosa",">= 6 semaines en bithérapie");
    add("Endocardite infectieuse","Prothèse valvulaire (< ou > 1 an)","Bacilles Gram -","Acinetobacter baumannii",">= 6 semaines en bithérapie");
    add("Endocardite infectieuse","Prothèse valvulaire (< ou > 1 an)","Bacilles Gram -","Stenotrophomonas maltophilia",">= 6 semaines en bithérapie");
    add("Endocardite infectieuse","Prothèse valvulaire (< ou > 1 an)","Bacilles Gram -","Haemophilus influenzae","6 sem C3G (ou 6 sem amoxicilline + 2 sem gentamicine)");
    add("Endocardite infectieuse","Prothèse valvulaire (< ou > 1 an)","Bacilles Gram +","Nocardia spp.","6 mois");
    add("Endocardite infectieuse","Prothèse valvulaire (< ou > 1 an)","Autres","Mycobacterium tuberculosis","12 à 18 mois");

    return d;
  }

  function formatDuree(txt) {
    if (!txt) return "";
    if (txt.trim().toUpperCase() === "NA") {
      return "Non applicable : bactérie jamais/rarement impliquée dans ce type d’infection.";
    }
    let r = txt;
    // Conserver l'intention "=" en ASCII ">="
    r = r.replace(/=/g, ">=");
    r = r.replace(/Idem infect°/g, "Identique à l'infection responsable");
    // j -> jours
    r = r.replace(/ j /g, " jours ");
    r = r.replace(/ j$/g, " jours");
    r = r.replace(/\(j/g, "(jours");
    r = r.replace(/j\)/g, "jours)");
    // sem -> semaines
    r = r.replace(/ sem\. /g, " semaines ");
    r = r.replace(/ sem /g, " semaines ");
    r = r.replace(/sem\.$/g, "semaines");
    r = r.replace(/sem$/g, "semaines");
    return r;
  }
}

function renderAdapteeMenu() {
  console.log("renderAdapteeMenu is called!"); 

  const appContainer = document.getElementById("app");

  // Efface le contenu précédent
  appContainer.innerHTML = "";

  const container = document.createElement("div");
  container.classList.add("antibiotherapy-container");

  const title = document.createElement("h2");
  title.textContent = "Antibiothérapie adaptée: germes multisensibles, BMR et BHRe";

  const linksContainer = document.createElement("div");
  linksContainer.classList.add("germs-links");

  const links = [
    { href: "#/adaptee/sensibles", text: "Germes multisensibles" },
    { href: "#/adaptee/SARM", text: "SARM" },
    { href: "#/adaptee/ampC", text: "Entérobactéries ampC" },
    { href: "#/adaptee/BLSE", text: "BLSE" },
    { href: "#/adaptee/pyo", text: "Pseudomonas aeruginosas MDR/XDR" },
    { href: "#/adaptee/acineto", text: "Acinetobacter baumannii Imipénème-R" },
    { href: "#/adaptee/steno", text: "Stenotrophomonas maltophilia" },
    { href: "#/adaptee/carba", text: "Entérobactéries carbapénémases" },
    { href: "#/adaptee/erv", text: "E. faecium Vancomycine-R" }
  ];

  links.forEach(link => {
    const anchor = document.createElement("a");
    anchor.href = link.href;
    anchor.textContent = link.text;
    anchor.addEventListener("click", (e) => {
      e.preventDefault(); // Empêche la navigation par défaut
      location.hash = link.href; // Change le hash pour afficher la bonne page
    });
    linksContainer.appendChild(anchor);
  });

  container.appendChild(title);
  container.appendChild(linksContainer);

  console.log("Inserting content into #app");  // Log pour vérifier l'insertion du contenu
  appContainer.appendChild(container); // Insère le contenu dans #app
}


function renderReinForm() {
  $app.innerHTML = `
    <div class="card"><strong>Adaptation à la fonction rénale</strong></div>
    <div class="hero-pneu card">
      <img src="./img/dialyse.png" alt="Fonction rénale" class="form-hero">
    </div>

    <form id="formRein" class="form">
      <fieldset>
        <legend>Famille d’antibiotique</legend>
        <select id="famille">
          <option value="">— Sélectionner —</option>
          <option value="betalactamine">β-lactamines</option>
          <option value="aminoside">Aminosides</option>
          <option value="fluoroquinolone">Fluoroquinolones</option>
          <option value="antigram">Anti-Gram+</option>
          <option value="autres">Autres</option>
        </select>
      </fieldset>

      <fieldset>
        <legend>Molécule</legend>
        <select id="molecule"><option value="">— Choisir une famille d’abord —</option></select>
      </fieldset>

      <fieldset>
        <legend>Fonction rénale</legend>
        <select id="fonction">
          <option value="">— Sélectionner —</option>
          <option value=">120">DFG > 120 mL/min/1,73m²</option>
          <option value="30-120">DFG = 30–120 mL/min/1,73m²</option>
          <option value="30-10">DFG = 30–10 mL/min/1,73m²</option>
          <option value="<10">DFG < 10 mL/min/1,73m²</option>
          <option value="hd">Hémodialyse intermittente</option>
          <option value="cvvh">CVVH 30–35 mL/kg/h</option>
          <option value="cvvhd">CVVHD 30–35 mL/kg/h</option>
        </select>
      </fieldset>

      <div class="actions">
        <button type="button" class="btn" id="btnRein">Afficher la posologie</button>
        <button type="button" class="btn ghost" onclick="history.back()">← Retour</button>
      </div>

      <div id="resRein" class="result"></div>
    </form>
  `;

  // ===== Données fidèles au tableau PDF =====
  // Colonnes: charge | >120 | 30-120 | 30-10 | <10 | hd | cvvh | cvvhd
  const data = {
    betalactamine: {
      "Amoxicilline": {charge:"2g sur 30min",">120":"2g /4 à 6h","30-120":"1g /4 à 8h","30-10":"1g /12h","<10":"1g /24h","hd":"Jours sans EER: 1g /12-24h, Jours avec EER: 1g après EER","cvvh":"1g /8h","cvvhd":"1g /6 à 8h"},                                          // :contentReference[oaicite:6]{index=6}
      "Cloxacilline": {charge:"2g sur 30min",">120":"2g /4 à 6h","30-120":"1g /4 à 6h","30-10":"1g /6 à 8h","<10":"1g /6 à 8h","hd":"Jours sans EER: 1g /6-8h, Jours avec EER: 1g après EER","cvvh":"1g /6h","cvvhd":"1g /4 à 6h"},                                          // :contentReference[oaicite:7]{index=7}
      "Oxacilline": {charge:"2g sur 30min",">120":"2g /6h","30-120":"2g /4 à 6h","30-10":"2g /4 à 6h","<10":"2g /4 à 6h","hd":"Jours sans EER: 2g /6-8h, Jours avec EER: 1-2g après EER","cvvh":"2g /6h","cvvhd":"2g /4 à 6h"},                                               // :contentReference[oaicite:8]{index=8}
      "Amoxicilline + Clavulanate": {charge:"2g +0,2g sur 30min",">120":"2g +0,2g /6h","30-120":"1g +0,2g /4 à 8h","30-10":"1g +0,2g /12h","<10":"1g +0,2g /24h","hd":"Jours sans EER: 1g +0,2g /24h, Jours avec EER: 1 +0,2g après EER","cvvh":"1g +0,2g /8h","cvvhd":"1g +0,2g /6 à 8h"}, // :contentReference[oaicite:9]{index=9}
      "Pipéracilline": {charge:"4g sur 30min",">120":"4g /6h","30-120":"4g /6h","30-10":"4g /8h","<10":"4g /12h","hd":"Jours sans EER: 4g /12-24h, Jours avec EER: 4g après EER","cvvh":"4g /8h","cvvhd":"4g /6 à 8h"},                                                // :contentReference[oaicite:10]{index=10}
      "Pipéracilline + Tazobactam": {charge:"4g +0,5g sur 30min",">120":"4g +0,5g /6h","30-120":"4g +0,5g /6h","30-10":"4g +0,5g /8h","<10":"4g +0,5g /12h","hd":"Jours sans EER: 4g +0,5 /12-24h, Jours avec EER: 4 +0,5g après EER","cvvh":"4g +0,5g /8h","cvvhd":"4g +0,5g /6 à 8h"},       // :contentReference[oaicite:11]{index=11}
      "Céfazoline": {charge:"2g sur 30min",">120":"8g/24h IVSE","30-120":"6–8g/24h IVSE","30-10":"1g /12h","<10":"1g /24h","hd":"Jours sans EER: 1g /12-24h, Jours avec EER: 1g après EER","cvvh":"2g /12h","cvvhd":"2g /8 à 12h"},                                      // :contentReference[oaicite:12]{index=12}
      "Céfotaxime": {charge:"2g sur 30min",">120":"2g /6h","30-120":"1g /4 à 8h","30-10":"1g /12h","<10":"1g /24h","hd":"Jours sans EER: 1-2g /12-24h, Jours avec EER: 1-2g après EER","cvvh":"2g /8h","cvvhd":"2g /6 à 8h"},                                              // :contentReference[oaicite:13]{index=13}
      "Ceftriaxone": {charge:"2g sur 30min",">120":"1g /12 à 24h","30-120":"1g /12 à 24h","30-10":"1g /24h","<10":"1g /24h","hd":"1 à 2g/24h (peu dialysable)","cvvh":"2g /24h","cvvhd":"2g /24h"},                                        // :contentReference[oaicite:14]{index=14}
      "Ceftazidime": {charge:"2g sur 30min",">120":"2g /6h","30-120":"1g /4 à 8h","30-10":"1g /6 à 12h","<10":"1g /12h","hd":"Jours sans EER: 1g /24h, Jours avec EER: 1-2g après EER","cvvh":"2g /12h","cvvhd":"2g /8 à 12h"},                                       // :contentReference[oaicite:15]{index=15}
      "Céfépime": {charge:"2g sur 30min",">120":"2g /6h","30-120":"1g /4 à 8h","30-10":"1g /12h","<10":"1g /24h","hd":"Jours sans EER: 1g /24h, Jours avec EER: 1-2g après EER","cvvh":"2g /12h","cvvhd":"2g /8 à 12h"},                                              // :contentReference[oaicite:16]{index=16}
      "Ceftobiprole": {charge:"1g sur 1h",">120":"1g /6h","30-120":"0,5–1g /8h","30-10":"1g /12h","<10":"500mg /24h","hd":"Jours sans EER: 500mg /24h, Jours avec EER: 500mg après EER","cvvh":"500mg /8h","cvvhd":"500mg /8h"},                                   // :contentReference[oaicite:17]{index=17}
      "Ceftaroline": {charge:"600mg sur 1h",">120":"600mg /8h","30-120":"600mg /8h","30-10":"600mg /12h","<10":"600mg /24h","hd":"Jours sans EER: 600mg/24h, Jours avec EER: 600mg après EER","cvvh":"600mg /12h","cvvhd":"600mg /12h"},                                 // :contentReference[oaicite:18]{index=18}
      "Ceftazidime + Avibactam": {charge:"2g +0,5g sur 2h",">120":"2g +0,5g /6h","30-120":"2g +0,5g /8h","30-10":"2g +0,5g /12h","<10":"2g +0,5g /24h","hd":"Jours sans EER: 2g +0,5g /24h, Jours avec EER: 2g +0,5g après EER","cvvh":"2g +0,5g /8h","cvvhd":"2g +0,5g /8h"}, // :contentReference[oaicite:19]{index=19}
      "Ceftolozane + Tazobactam": {charge:"1g +0,5g sur 1h",">120":"1g +0,5g /6h","30-120":"1g +0,5g /8h","30-10":"1g +0,5g /12h","<10":"1g +0,5g /24h","hd":"Jours sans EER: 1g +0,5g /24h, Jours avec EER: 1g + 0,5g après EER","cvvh":"1g +0,5g /8h","cvvhd":"1g +0,5g /8h"}, // :contentReference[oaicite:20]{index=20}
      "Cefidérocol": {charge:"2g sur 1h",">120":"2g /6h","30-120":"2g /8h","30-10":"1g /8h","<10":"0,75g /12h","hd":"Jours sans EER: 0,75g /12h, Jours avec EER: 0,75g après EER","cvvh":"2g /8h","cvvhd":"2g /8h"},                                                   // :contentReference[oaicite:21]{index=21}
      "Imipénème": {charge:"2g sur 30min",">120":"1g /6h","30-120":"1g /6 à 8h","30-10":"1g /12h","<10":"1g /24h","hd":"Jours sans EER: 0,5g /12h, Jours avec EER: 0,5g après EER","cvvh":"1g /8h","cvvhd":"1g /8h"},                                                   // :contentReference[oaicite:22]{index=22}
      "Méropénème": {charge:"2g sur 30min",">120":"2g /6h","30-120":"1g /4 à 8h","30-10":"1g /6 à 12h","<10":"1g /12h","hd":"Jours sans EER: 1g /24h, Jours avec EER: 1g après EER","cvvh":"1g /8h","cvvhd":"1g /8h"},                                             // :contentReference[oaicite:23]{index=23}
      "Ertapénème": {charge:"2g sur 30min",">120":"1g /8h","30-120":"1g /12h","30-10":"500mg /24h (à éviter)","<10":"500mg /24h (à éviter)","hd":"0,5-1g après EER uniquement (à éviter)","cvvh":"500mg /24h (à éviter)","cvvhd":"500mg /24h (à éviter)"}, // :contentReference[oaicite:24]{index=24}
      "Imipénème + Relebactam": {charge:"2g +1g sur 30min",">120":"1g +0,5g /6h","30-120":"1g +0,5g /6 à 8h","30-10":"1g +0,5g /12h","<10":"1g +0,5g /24h","hd":"Jours sans EER: 1g +0,5g /24h, Jours avec EER: 1g +0,5g après EER","cvvh":"1g +0,5g /8h","cvvhd":"1g +0,5g /8h"},       // :contentReference[oaicite:25]{index=25}
      "Méropénème + Vaborbactam": {charge:"2g +2g sur 30min",">120":"2g +2g /6h","30-120":"2g +2g /8h","30-10":"1g +1g /6 à 12h","<10":"1g +1g /12h","hd":"Jours sans EER: 1g +1g /24h, Jours avec EER: 1g +1g après EER","cvvh":"2g +2g /8h","cvvhd":"2g +2g /8h"},              // :contentReference[oaicite:26]{index=26}
      "Aztréonam": {charge:"2g sur 30min",">120":"2g /6h","30-120":"2g /6 à 8h","30-10":"1g /8h","<10":"1g /12h","hd":"Jours sans EER: 1g /12h, Jours avec EER: 1-2g après EER","cvvh":"2g /8h","cvvhd":"2g /8h"},                                                   // :contentReference[oaicite:27]{index=27}
      "Témocilline": {charge:"2g sur 30min",">120":"8–10g/24h IVSE","30-120":"4–6g/24h IVSE","30-10":"2g /24h","<10":"1g /24h","hd":"Jours sans EER: 1g /24h, Jours avec EER: 2g après EER","cvvh":"2g /8h","cvvhd":"2g /8h"}                                       // :contentReference[oaicite:28]{index=28}
    },

    aminoside: {
      "Amikacine": {charge:"30mg/kg sur 30min",">120":"Généralement pas d’entretien","30-120":"Généralement pas d’entretien","30-10":"Généralement pas d’entretien","<10":"Généralement pas d’entretien","hd":"Uniquement si C résiduelle < 2,5 mg/L","cvvh":"—","cvvhd":"—"}, // :contentReference[oaicite:29]{index=29}
      "Gentamicine": {charge:"8mg/kg sur 30min",">120":"Généralement pas d’entretien","30-120":"Généralement pas d’entretien","30-10":"Généralement pas d’entretien","<10":"Généralement pas d’entretien","hd":"Uniquement si C résiduelle < 0,5 mg/L","cvvh":"—","cvvhd":"—"},     // :contentReference[oaicite:30]{index=30}
      "Tobramycine": {charge:"8mg/kg sur 30min",">120":"Généralement pas d’entretien","30-120":"Généralement pas d’entretien","30-10":"Généralement pas d’entretien","<10":"Généralement pas d’entretien","hd":"Uniquement si C résiduelle < 0,5 mg/L","cvvh":"—","cvvhd":"—"}      // :contentReference[oaicite:31]{index=31}
    },

    fluoroquinolone: {
      "Ofloxacine": {charge:"400mg IVL ou PO",">120":"400mg /12h","30-120":"400mg /12h","30-10":"400mg /24h","<10":"200mg /24h","hd":"200mg /24h","cvvh":"400mg /24h","cvvhd":"400mg /24h"},                                   // :contentReference[oaicite:32]{index=32}
      "Ciprofloxacine": {charge:"400mg IVL ou PO",">120":"400mg /8h","30-120":"400mg /8h","30-10":"400mg /24h","<10":"400mg /24h","hd":"400mg /24h","cvvh":"400mg /12h","cvvhd":"400mg /12h"},                                  // :contentReference[oaicite:33]{index=33}
      "Lévofloxacine": {charge:"500mg IVL ou PO",">120":"500mg /12h","30-120":"500mg /12h","30-10":"500mg /24h","<10":"500mg /48h","hd":"500mg après EER uniquement","cvvh":"500mg /24h","cvvhd":"500mg /24h"},                           // :contentReference[oaicite:34]{index=34}
      "Moxifloxacine": {charge:"400mg IVL ou PO",">120":"400mg /24h","30-120":"400mg /24h","30-10":"400mg /24h","<10":"400mg /24h","hd":"400mg /24h","cvvh":"400mg /24h","cvvhd":"400mg /24h"}                                  // :contentReference[oaicite:35]{index=35}
    },

    antigram: {
      "Vancomycine": {charge:"30mg/kg sur 1h",">120":"30mg/kg/24h (C. continue 20–25mg/L)","30-120":"30mg/kg/24h (C. continue 20–25mg/L)","30-10":"10mg/kg/24h (C. continue 20–25mg/L)","<10":"10mg/kg/24h (C. continue 20–25mg/L)","hd":"10mg/kg après EER (C résiduelle 20–25mg/L)","cvvh":"15–20 mg/kg/24h (C. continue 20–25mg/L)","cvvhd":"15–20 mg/kg/24h (C. continue 20–25mg/L)"}, // :contentReference[oaicite:36]{index=36}
      "Teicoplanine": {charge:"6-12mg/kg/12h pour 3 à 5 injections",">120":"12mg/kg/24h (C. résiduelle 20–25mg/L)","30-120":"6-12mg/kg/24h (C. résiduelle 20–25mg/L)","30-10":"4mg/kg/24h (C. résiduelle 20–25mg/L)","<10":"4mg/kg/24h (C. résiduelle 20–25mg/L)","hd":"4mg/kg/24h (C. résiduelle 20–25mg/L)","cvvh":"6–8 mg/kg/24h (C. continue 20–25mg/L)","cvvhd":"6–8 mg/kg/24h (C. continue 20–25mg/L)"}, // :contentReference[oaicite:37]{index=37}
      "Linézolide": {charge:"600mg IVL ou PO",">120":"600mg /12h","30-120":"600mg /12h","30-10":"600mg /12h","<10":"600mg /12h","hd":"600mg /12h","cvvh":"600mg /12h","cvvhd":"600mg /12h"},                                     // :contentReference[oaicite:38]{index=38}
      "Daptomycine": {charge:"10mg/kg IVL",">120":"12mg/kg/24h ou 8mg/kg/12h","30-120":"10mg/kg/24h","30-10":"10mg/kg/48h","<10":"10mg/kg/48h","hd":"10mg/kg après EER","cvvh":"10mg/kg/24h","cvvhd":"10mg/kg/24h"},       // :contentReference[oaicite:39]{index=39}
      "Clindamycine": {charge:"600mg IVL",">120":"600mg /6 à 8h","30-120":"600mg /6 à 8h","30-10":"600mg /6 à 8h","<10":"600mg /6 à 8h","hd":"600mg /6 à 8h","cvvh":"600mg /6 à 8h","cvvhd":"600mg /6 à 8h"}               // :contentReference[oaicite:40]{index=40}
    },

    autres: {
      "Colistine": {charge:"9 MUI IVL",">120":"4,5 MUI /12h","30-120":"4,5 MUI /12h","30-10":"4,5 MUI /24h","<10":"3,5 MUI /24h","hd":"2 MUI après EER","cvvh":"—","cvvhd":"—"},                                           // :contentReference[oaicite:41]{index=41}
      "Cotrimoxazole (pneumocystose)": {charge:"800mg IVL ou PO",">120":"100 mg/kg/j (12 amp/j max)","30-120":"75–100 mg/kg/j (12 amp/j max)","30-10":"40–50 mg/kg/j","<10":"20–25 mg/kg/j","hd":"20 mg/kg/j","cvvh":"15–20 mg/kg/j","cvvhd":"15–20 mg/kg/j"}, // :contentReference[oaicite:42]{index=42}
      "Cotrimoxazole (autre)": {charge:"800mg IVL ou PO",">120":"800mg /8h","30-120":"800mg /8h","30-10":"800mg /24h","<10":"800mg /48h","hd":"400mg après EER","cvvh":"400mg /24h","cvvhd":"400mg /24h"},                     // :contentReference[oaicite:43]{index=43}
      "Doxycycline": {charge:"200mg IVL ou PO",">120":"100mg /12h","30-120":"100mg /12h","30-10":"100mg /12h","<10":"100mg /12h","hd":"100mg /12h","cvvh":"100mg /12h","cvvhd":"100mg /12h"},                                   // :contentReference[oaicite:44]{index=44}
      "Fidaxomicine": {charge:"200mg PO",">120":"200mg /12h","30-120":"200mg /12h","30-10":"200mg /12h","<10":"200mg /12h","hd":"200mg /12h","cvvh":"200mg /12h","cvvhd":"200mg /12h"},                                  // :contentReference[oaicite:45]{index=45}
      "Métronidazole": {charge:"500mg IVL ou PO",">120":"500mg /8h","30-120":"500mg /8h","30-10":"500mg /8h","<10":"500mg /8h","hd":"500mg /8h","cvvh":"500mg /8h","cvvhd":"500mg /8h"},                                       // :contentReference[oaicite:46]{index=46}
      "Rifampicine": {charge:"10mg/kg IVL ou PO",">120":"10mg/kg /8h","30-120":"10mg/kg /8h","30-10":"10mg/kg /8h","<10":"10mg/kg /8h","hd":"10mg/kg /8h","cvvh":"10mg/kg /8h","cvvhd":"10mg/kg /8h"},                         // :contentReference[oaicite:47]{index=47}
      "Spiramycine": {charge:"3 MUI IVL",">120":"3 MUI /8h","30-120":"3 MUI /8h","30-10":"3 MUI /8h","<10":"3 MUI /8h","hd":"3 MUI /8h","cvvh":"3 MUI /8h","cvvhd":"3 MUI /8h"},                                         // :contentReference[oaicite:48]{index=48}
      "Tigécycline": {charge:"100mg IVL",">120":"50mg /12h","30-120":"50mg /12h","30-10":"50mg /12h","<10":"50mg /12h","hd":"50mg /12h","cvvh":"50mg /12h","cvvhd":"50mg /12h"}                                          // :contentReference[oaicite:49]{index=49}
    }
  };

  const selFamille = document.getElementById("famille");
  const selMolecule = document.getElementById("molecule");

  selFamille.addEventListener("change", () => {
    const f = selFamille.value;
    if (!f) { selMolecule.innerHTML = `<option value="">— Choisir une famille d’abord —</option>`; return; }
    const options = Object.keys(data[f]).map(m => `<option value="${m}">${m}</option>`).join("");
    selMolecule.innerHTML = `<option value="">— Sélectionner —</option>` + options;
  });

  document.getElementById("btnRein").addEventListener("click", () => {
  const f = selFamille.value, m = selMolecule.value, fn = document.getElementById("fonction").value;
  const out = document.getElementById("resRein");

  if (!f || !m || !fn) {
    out.textContent = "⚠️ Merci de sélectionner une famille, une molécule et une fonction rénale.";
    return;
  }

  const mol = data[f][m];
  const entretienBrut = mol[fn] || "—";
  const entretienLisible = humanizeEntretien(entretienBrut);

  // Affichage principal de la réponse
  out.innerHTML = `
    <strong>${m}</strong><br>
    <em>Dose de charge :</em> ${mol.charge}<br>
    <em>Dose d’entretien (${document.getElementById("fonction").selectedOptions[0].textContent}) :</em> ${entretienLisible}
  `;

  // Ajout des crédits
  out.innerHTML += `
    <div class="credits">
      D'après le travail de : Dr Gilles TROCHE, Dr Marine PAUL et Dr Antoine BRIZARD<br>
      (Bases de données ANSM, GPR et Dexther)
    </div>
  `;

  // ✅ Ajout de l'encadré d'information supplémentaire
  const existingNote = document.querySelector(".rein-note");
  if (existingNote) existingNote.remove(); // Évite les doublons si on reclique plusieurs fois

  const infoDiv = document.createElement("div");
  infoDiv.className = "info-card rein-note";
  infoDiv.innerHTML = `
    <div class="info-content">
      Le dosage plasmatique des antibiotiques est recommandé en soins critiques,
      notamment en cas de DFG &lt; 30&nbsp;mL/min/1,73m² ou EER.
    </div>
  `;

  out.insertAdjacentElement("afterend", infoDiv);
});
}
// Remplace les "/6h", "/8h", "/12 à 24h", "/8–12h", etc. par "toutes les …"
function humanizeEntretien(text) {
  if (!text) return text;
  // 1) "/ 6h" ; "/6 à 8h" ; "/6–8h" ; "/6-8h"
  text = text.replace(/\/\s*(\d+(?:\s*(?:à|–|-)\s*\d+)?)\s*h/gi, (_m, grp) => ` toutes les ${grp}h`);
  return text;
}

function renderModalitesForm() {
  $app.innerHTML = `
    <div class="card"><strong>Modalités d’administration des antibiotiques</strong></div>

    <div class="hero-pneu card">
      <img src="./img/modalite.png" alt="Modalités d'administration" class="form-hero">
    </div>

    <form id="formModa" class="form">
      <fieldset>
        <legend>Classe d’antibiotique</legend>
        <select id="classeModa">
          <option value="">— Sélectionner —</option>
          <option value="betalactamine">β-lactamines</option>
          <option value="aminoside">Aminosides</option>
          <option value="fluoroquinolone">Fluoroquinolones</option>
          <option value="antigram">Anti-Gram+</option>
          <option value="autres">Autres</option>
        </select>
      </fieldset>

      <fieldset>
        <legend>Molécule</legend>
        <select id="moleculeModa">
          <option value="">— Choisir une classe d’abord —</option>
        </select>
      </fieldset>

      <div class="actions">
        <button type="button" class="btn" id="btnModa">Afficher les modalités</button>
        <button type="button" class="btn ghost" onclick="history.back()">← Retour</button>
      </div>

      <div id="resModa" class="result"></div>
    </form>
  `;

  // ==========================
  // 📋 Données MODALITÉS À COMPLÉTER
  // ==========================
  const MODALITES = {

    // ========= β-lactamines =========
    betalactamine: {
      "Amoxicilline":             { dosages:"1g ou 2g", solvant:"Glucosé 5%", charge:{schema:"2g dans 50mL sur 30min"}, entretien:{rythme:"Perfusion intermittente", intervalle:"4 à 6h", doses:"1 à 2g", volume:"50mL", perfusion:"IVL 60min", stabilite:"8h"} },
      "Cloxacilline":             { dosages:"1 ou 2gg", solvant:"Glucosé 5%", charge:{schema:"2g dans 50mL sur 30min"}, entretien:{rythme:"Perfusion continue", intervalle:"Immédiatement", doses:"2 à 6g", volume:"50mL", perfusion:"IVSE 24h", stabilite:"24h"} },
      "Oxacilline":               { dosages:"1 ou 2g", solvant:"Glucosé 5%", charge:{schema:"2g dans 50mL sur 30min"}, entretien:{rythme:"Perfusion continue", intervalle:"Immédiatement", doses:"1 à 2g", volume:"50mL", perfusion:"IVSE 6h", stabilite:"8h"} },
      "Amoxicilline + Clavulanate":{ dosages:"1g+0,1g ou 2g+0,2g", solvant:"Eau PPI", charge:{schema:"2g dans 50mL sur 30min"}, entretien:{rythme:"Perfusion intermittente", intervalle:"4 à 6h", doses:"1g +0,25g ou 2g +0,5g", volume:"50mL", perfusion:"IVL 60min", stabilite:"1 à 2h"} },
      "Pipéracilline":            { dosages:"4g", solvant:"Glucosé 5%", charge:{schema:"4g dans 50mL sur 30min"}, entretien:{rythme:"Perfusion continue", intervalle:"Immédiatement", doses:"4g", volume:"50mL", perfusion:"IVSE 6h", stabilite:"24h"} },
      "Pipéracilline + Tazobactam":{ dosages:"4g+0,5g", solvant:"Glucosé 5%", charge:{schema:"4g+0,5g dans 50mL sur 30min"}, entretien:{rythme:"Perfusion continue", intervalle:"Immédiatement", doses:"4g +0,5g", volume:"50mL", perfusion:"IVSE 6h", stabilite:"12h"} },
      "Céfazoline":               { dosages:"1g ou 2g", solvant:"Glucosé 5%", charge:{schema:"2g dans 50mL sur 30min"}, entretien:{rythme:"Perfusion continue", intervalle:"Immédiatement", doses:"3g", volume:"50mL", perfusion:"IVSE 12h", stabilite:"24h"} },
      "Céfotaxime":               { dosages:"1g ou 2g", solvant:"Eau PPI", charge:{schema:"2g dans 50mL sur 30min"}, entretien:{rythme:"Perfusion intermittente", intervalle:"4 à 6h", doses:"1g", volume:"50mL", perfusion:"IVL 30min", stabilite:"6h"} },
      "Ceftriaxone":              { dosages:"1g ou 2g", solvant:"Eau PPI", charge:{schema:"2g dans 50mL sur 30min"}, entretien:{rythme:"Perfusion intermittente", intervalle:"24h", doses:"1g", volume:"50mL", perfusion:"IVL 30min", stabilite:"-"} },
      "Ceftazidime":              { dosages:"1g ou 2g", solvant:"Glucosé 5%", charge:{schema:"2g dans 50mL sur 30min"}, entretien:{rythme:"Perfusion continue", intervalle:"Immédiatement", doses:"2g", volume:"50mL", perfusion:"IVSE 8h", stabilite:"8h"} },
      "Céfépime":                 { dosages:"1g ou 2g", solvant:"Glucosé 5%", charge:{schema:"2g dans 50mL sur 30min"}, entretien:{rythme:"Perfusion continue", intervalle:"Immédiatement", doses:"2 à 3g", volume:"50mL", perfusion:"IVSE 12h", stabilite:"24h"} },
      "Ceftobiprole":             { dosages:"500mg", solvant:"NaCl 0,9%", charge:{schema:"1g dans 500mL IVL sur 120min"}, entretien:{rythme:"Perfusion intermittente", intervalle:"8h", doses:"1g", volume:"500mL", perfusion:"IV 4h", stabilite:"6h"} },
      "Ceftaroline":              { dosages:"600mg", solvant:"Eau PPI", charge:{schema:"600mg dans 100mL IVL sur 60min"}, entretien:{rythme:"Perfusion intermittente", intervalle:"8h", doses:"600mg", volume:"100mL", perfusion:"IVL 60min", stabilite:"6h"} },
      "Ceftazidime + Avibactam":  { dosages:"2g+0,5g", solvant:"Eau PPI", charge:{schema:"2g dans 50mL sur 2h"}, entretien:{rythme:"Perfusion continue", intervalle:"Immédiatement", doses:"2g", volume:"50mL", perfusion:"IVSE 4h", stabilite:"24h"} },
      "Ceftolozane + Tazobactam": { dosages:"1g+0,5g", solvant:"Eau PPI", charge:{schema:"2g dans 50mL sur 30min"}, entretien:{rythme:"Perfusion continue", intervalle:"Immédiatement", doses:"2g", volume:"50mL", perfusion:"IVSE 4h", stabilite:"24h"} },
      "Cefidérocol":              { dosages:"1g", solvant:"NaCl 0,9%", charge:{schema:"2g dans 50mL IVL sur 3h"}, entretien:{rythme:"Perfusion intermittente", intervalle:"8h", doses:"2g", volume:"50mL", perfusion:"IVSE 3h", stabilite:"6h"} },
      "Imipénème":                { dosages:"1g", solvant:"Glucosé 5%", charge:{schema:"2g dans 500mL sur 60min"}, entretien:{rythme:"Perfusion intermittente", intervalle:"6 à 8h", doses:"1g", volume:"250mL", perfusion:"IVL 60min", stabilite:"< 3h"} },
      "Méropénème":               { dosages:"1g", solvant:"Glucosé 5%", charge:{schema:"2g dans 50mL sur 30min"}, entretien:{rythme:"Perfusion continue", intervalle:"Immédiatement", doses:"2g", volume:"50mL", perfusion:"IVSE 3h", stabilite:"4h"} },
      "Ertapénème":               { dosages:"1g", solvant:"Glucosé 5%", charge:{schema:"2g dans 100mL sur 30min"}, entretien:{rythme:"Perfusion intermittente", intervalle:"12h", doses:"1g", volume:"50mL", perfusion:"IVL 30min", stabilite:"6h"} },
      "Imipénème + Relebactam":   { dosages:"0,5g+0,25g", solvant:"Glucosé 5%", charge:{schema:"2g dans 500mL sur 60min"}, entretien:{rythme:"Perfusion intermittente", intervalle:"6 à 8h", doses:"1g +0,5g", volume:"250mL", perfusion:"IVL 60min", stabilite:"< 3h"} },
      "Méropénème + Vaborbactam": { dosages:"1g/1g", solvant:"Glucosé 5%", charge:{schema:"2g dans 50mL sur 30min"}, entretien:{rythme:"Perfusion intermittente", intervalle:"6 à 8h", doses:"2g +2g", volume:"50mL", perfusion:"IVSE 3h", stabilite:"4h"} },
      "Aztréonam":                { dosages:"1g", solvant:"Glucosé 5%", charge:{schema:"2g dans 100mL sur 30min"}, entretien:{rythme:"Perfusion continue", intervalle:"Immédiatement", doses:"4g", volume:"50mL", perfusion:"IVSE 12h", stabilite:"24h"} },
      "Témocilline":              { dosages:"1g ou 2g", solvant:"Glucosé 5%", charge:{schema:"2g dans 50mL sur 30min"}, entretien:{rythme:"Perfusion continue", intervalle:"Immédiatement", doses:"3g", volume:"50mL", perfusion:"IVSE 12h", stabilite:"24h"} }
    },

    // ========= Aminosides =========
    aminoside: {
      "Amikacine":   { dosages:"500mg", solvant:"Glucosé 5%", charge:{schema:"25-30mg/kg dans 250mL IVL 30min"}, entretien:{rythme:"Perfusion intermittente (si entretien indiqué)", intervalle:"Lorsque C. résiduelle < 2,5 mg/L", doses:"Adapter selon C. pic", volume:"250mL", perfusion:"IVL 30min", stabilite:"10-14h"} },
      "Gentamicine": { dosages:"80mg", solvant:"Glucosé 5%", charge:{schema:"8-10mg/kg dans 100mL IVL 30min"}, entretien:{rythme:"Perfusion intermittente (si entretien indiqué)", intervalle:"Lorsque C. résiduelle < 0,5 mg/L", doses:"Adapter selon C. pic", volume:"100mL", perfusion:"IVL 30min", stabilite:"10-14h"} },
      "Tobramycine": { dosages:"75mg", solvant:"Glucosé 5%", charge:{schema:"8-10mg/kg dans 100mL IVL 30min"}, entretien:{rythme:"Perfusion intermittente (si entretien indiqué)", intervalle:"Lorsque C. résiduelle < 0,5 mg/L", doses:"Adapter selon C. pic", volume:"100mL", perfusion:"IVL 30min", stabilite:"10-14h"} }
    },

    // ========= Fluoroquinolones =========
    fluoroquinolone: {
      "Ofloxacine":     { dosages:"200mg pochon ou comprimé (Biodisponibilité 100%)", solvant:"Préconditionné 40mL", charge:{schema:"400mg IVL (80mL sur 1h) ou PO"}, entretien:{rythme:"Perfusion intermittente ou PO", intervalle:"12h", doses:"400mg", volume:"80mL", perfusion:"60min", stabilite:"24h"} },
      "Ciprofloxacine": { dosages:"200/400mg pochon ou comprimé (Biodisponibilité 100%)", solvant:"Préconditionné 100/200mL", charge:{schema:"400mg IVL (200mL sur 1h) ou PO"}, entretien:{rythme:"Perfusion intermittente ou PO", intervalle:"8h", doses:"400mg", volume:"200mL", perfusion:"60min", stabilite:"> 24h"} },
      "Lévofloxacine":  { dosages:"500mg pochon ou comprimé (Biodisponibilité 100%)", solvant:"Préconditionné 100mL", charge:{schema:"500mg IVL (100mL sur 1h) ou PO"}, entretien:{rythme:"Perfusion intermittente ou PO", intervalle:"12h", doses:"500mg", volume:"100mL", perfusion:"60min", stabilite:"> 24h"} },
      "Moxifloxacine":  { dosages:"400mg pochon ou comprimé (Biodisponibilité 100%)", solvant:"Préconditionné 250mL", charge:{schema:"400mg IVL (250mL sur 1h) ou PO"}, entretien:{rythme:"Perfusion intermittente ou PO", intervalle:"24h", doses:"400mg", volume:"250mL", perfusion:"60min", stabilite:"24h"} }
    },

    // ========= Anti-Gram+ =========
    antigram: {
      "Vancomycine":  { dosages:"500mg et 1g", solvant:"Glucosé 5%", charge:{schema:"30mg/kg dans 50mL IVL sur 1h"}, entretien:{rythme:"Perfusion continue", intervalle:"Immédiatement", doses:"20-30mg/kg (Objectif C. continue = 20-25mg/L)", volume:"50mL", perfusion:"IVSE 24h sur VVC/Midline", stabilite:"24h"} },
      "Teicoplanine": { dosages:"100/200/400mg", solvant:"Glucosé 5%", charge:{schema:"6-12mg/kg/12h dans 50mL pour 3-5 inj IVL sur 30min"}, entretien:{rythme:"Perfusion intermittente", intervalle:"12h pour les 3-5 premières injections, puis 24h", doses:"6-12mg/kg/24h (Objectif C. continue = 20-25mg/L)", volume:"50mL", perfusion:"IVL 30min sur VVC/Midline", stabilite:"< 24h"} },
      "Linézolide":   { dosages:"600mg ampoule ou comprimé (Biodisponibilité 100%)", solvant:"Préconditionné 300mL", charge:{schema:"600mg IVL (300mL sur 30-120min) ou PO"}, entretien:{rythme:"Perfusion intermittente ou PO", intervalle:"12h", doses:"600mg", volume:"300mL", perfusion:"IVL 30-120min", stabilite:"faible, utiliser immédiatement"} },
      "Daptomycine":  { dosages:"500mg", solvant:"NaCl 0,9%", charge:{schema:"10mg/kg/24h dans 50mL IVL sur 30min "}, entretien:{rythme:"Perfusion intermittente", intervalle:"24g", doses:"10mg/kg", volume:"50mL", perfusion:"30min", stabilite:"faible, utiliser immédiatement"} },
      "Clindamycine": { dosages:"600/900mg ampoules, 150/300mg comprimés (Biodisponibilité 90%)", solvant:"Glucosé 5%", charge:{schema:"600 à 900mg IVL (100mL sur 60min) ou PO"}, entretien:{rythme:"Perfusion intermittente ou PO", intervalle:"8h", doses:"600 à 900mg", volume:"100mL", perfusion:"60min", stabilite:"24h"} }
    },

    // ========= Autres =========
    autres: {
      "Colistine":                   { dosages:"1 MUI ampoule", solvant:"Glucosé 5%", charge:{schema:"6 MUI dans 50mL IVL sur 60min"}, entretien:{rythme:"Perfusion intermittente", intervalle:"8h", doses:"3 MUI", volume:"50mL", perfusion:"60min", stabilite:"24h"} },
      "Cotrimoxazole (pneumocystose)":{ dosages:"400+80mg ampoule, 400+80/800+160mg comprimé (Biodisponibilité 90%)", solvant:"Glucosé 5%", charge:{schema:"800-1200mg IVL (250-500mL sur 60min) ou PO"}, entretien:{rythme:"Perfusion intermittente ou PO", intervalle:"6 à 8h", doses:"800-1200mg", volume:"250-500mL", perfusion:"60min", stabilite:"6h"} },
      "Cotrimoxazole (autre)":       { dosages:"400+80mg ampoule, 400+80/800+160mg comprimé (Biodisponibilité 90%)", solvant:"Glucosé 5%", charge:{schema:"800mg IVL (250mL sur 60min) ou PO"}, entretien:{rythme:"Perfusion intermittente ou PO", intervalle:"8h", doses:"800mg", volume:"250mL", perfusion:"60min", stabilite:"6h"} },
      "Doxycycline":                 { dosages:"100mg ampoule ou comprimé (Biodisponibilité 100%)", solvant:"Glucosé 5%", charge:{schema:"200mg IVL (250mL sur 60min) ou PO"}, entretien:{rythme:"Perfusion intermittente", intervalle:"12h", doses:"200mg", volume:"250mL", perfusion:"60min", stabilite:"24h"} },
      "Fidaxomicine":                { dosages:"200mg comprimé", solvant:"-", charge:{schema:"200mg PO"}, entretien:{rythme:"Per OS", intervalle:"12h", doses:"200mg", volume:"-", perfusion:"-", stabilite:"-"} },
      "Métronidazole":               { dosages:"500mg ampoule ou comprimé (Biodisponibilité 100%)", solvant:"Préconditionné 100mL", charge:{schema:"500mg IVL (100mL sur 30min) ou PO"}, entretien:{rythme:"Perfusion intermittente", intervalle:"8h", doses:"500mg", volume:"100mL", perfusion:"30min", stabilite:"24h"} },
      "Rifampicine":                 { dosages:"600mg ampoule ou 300mg comprimé (Biodisponibilité 90%)", solvant:"Glucosé 5%", charge:{schema:"10mg/kg IVL (250mL sur 60min) ou PO"}, entretien:{rythme:"Perfusion intermittente ou PO", intervalle:"8h à 12h (24h pour BK)", doses:"10mg/kg", volume:"250mL", perfusion:"60min", stabilite:"6h"} },
      "Spiramycine":                 { dosages:"1,5 MUI ampoule, éviter la voie PO", solvant:"Glucosé 5%", charge:{schema:"3 MUI dans 100mL IVL sur 60min"}, entretien:{rythme:"Perfusion intermittente", intervalle:"8h", doses:"1,5 à 3 MUI", volume:"100mL", perfusion:"60mL", stabilite:"12h"} },
      "Tigécycline":                 { dosages:"50mg ampoule", solvant:"Glucosé 5%", charge:{schema:"200mg dans 250mL IVL sur 60min"}, entretien:{rythme:"Perfusion intermittente", intervalle:"12h", doses:"100mg", volume:"100mL", perfusion:"60min", stabilite:"6h"} }
    }
  };

  // ====== Dynamique du formulaire ======
  const selClasse = document.getElementById("classeModa");
  const selMolecule = document.getElementById("moleculeModa");

  selClasse.addEventListener("change", () => {
    const c = selClasse.value;
    if (!c || !MODALITES[c] || Object.keys(MODALITES[c]).length === 0) {
      selMolecule.innerHTML = `<option value="">— Choisir une classe d’abord —</option>`;
      return;
    }
    const options = Object.keys(MODALITES[c]).map(m => `<option value="${m}">${m}</option>`).join("");
    selMolecule.innerHTML = `<option value="">— Sélectionner —</option>` + options;
  });

  // ====== Affichage du résultat ======
  document.getElementById("btnModa").addEventListener("click", () => {
    const c = selClasse.value, m = selMolecule.value;
    const out = document.getElementById("resModa");

    if (!c || !m || !MODALITES[c] || !MODALITES[c][m]) {
      out.textContent = "⚠️ Merci de sélectionner une classe et une molécule.";
      return;
    }

    const F = MODALITES[c][m];

  out.innerHTML = [
    `<strong>${m}</strong>`,
    `<em>Dosages disponibles :</em> ${F.dosages || "—"}`,
    `<em>Solvant préférentiel :</em> ${F.solvant || "—"}`,
    `<em>Dose de charge :</em> ${(F.charge && F.charge.schema) || "—"}`,
    `<em>Dose d’entretien :</em>`,
    [
      `- <u>Rythme d’administration</u> : ${(F.entretien && F.entretien.rythme) || "—"}`,
      `- <u>Intervalle après dose de charge</u> : ${(F.entretien && F.entretien.intervalle) || "—"}`,
      `- <u>Doses habituelles</u> : ${(F.entretien && F.entretien.doses) || "—"}`,
      `- <u>Volume de dilution</u> : ${(F.entretien && F.entretien.volume) || "—"}`,
      `- <u>Durée de perfusion</u> : ${(F.entretien && F.entretien.perfusion) || "—"}`,
      `- <u>Durée de stabilité</u> : ${(F.entretien && F.entretien.stabilite) || "—"}`
    ].join("<br>")
  ].join("<br>");

  // ➕ crédits en bas de l’encadré
  out.innerHTML += `
    <div class="credits">
      D'après le travail de : Dr Candice FONTAINE et Dr Antoine BRIZARD<br>
      (Bases de données ANSM, RCP européennes et Dexther)
    </div>`;
}); 
} 

// ===== Antibioprophylaxies per-opératoire — Données (v1 : Digestif uniquement)
const ANTIBIOPRO_DATA = {
  orderSpecialites: [
    "Digestif","Orthopédie","Urologie","Gynécologie","Cardiaque",
    "Thoracique","Vasculaire","Neurochirurgie","Ophtalmologie",
    "ORL","Maxillo-facial","Plastique"
  ],
  // v1 : on ne renseigne que Digestif ; les autres seront ajoutées ensuite
  Digestif: {
    // Types (sections du tableau)
    "Chirurgies œsophagiennes": {
      interventions: {
        "Œsophagectomie": {
          noAllergy: "Céfazoline 2 g IVL (+1 g > 4 h, puis toutes les 4 h) OU Céfuroxime 1,5 g IVL (+0,75 g > 2 h, puis toutes les 2 h).",
          allergy:   "Vancomycine 20 mg/kg IVL ou Teicoplanine 12 mg/kg IVL."
        },
        "Excision de tumeur œsophagienne": {
          noAllergy: "Céfazoline 2 g IVL (+1 g > 4 h, puis toutes les 4 h) OU Céfuroxime 1,5 g IVL (+0,75 g > 2 h, puis toutes les 2 h).",
          allergy:   "Vancomycine 20 mg/kg IVL ou Teicoplanine 12 mg/kg IVL."
        },
        "Traitement de diverticule œsophagien": {
          noAllergy: "Céfazoline 2 g IVL (+1 g > 4 h, puis toutes les 4 h) OU Céfuroxime 1,5 g IVL (+0,75 g > 2 h, puis toutes les 2 h).",
          allergy:   "Vancomycine 20 mg/kg IVL ou Teicoplanine 12 mg/kg IVL."
        },
      }
    },

    "Chirurgies gastriques": {
      interventions: {
        "Gastrectomie totale/partielle": {
          noAllergy: "Céfazoline 2 g IVL (+1 g > 4 h, puis toutes les 4 h) OU Céfuroxime 1,5 g IVL (+0,75 g > 2 h, puis toutes les 2 h).",
          allergy:   "Vancomycine 20 mg/kg IVL ou Teicoplanine 12 mg/kg IVL."
        },
        "Sleeve": {
          noAllergy: "Céfazoline 2 g IVL (+1 g > 4 h, puis toutes les 4 h) OU Céfuroxime 1,5 g IVL (+0,75 g > 2 h, puis toutes les 2 h).",
          allergy:   "Vancomycine 20 mg/kg IVL ou Teicoplanine 12 mg/kg IVL."
        },
        "Bypass gastrique": {
          noAllergy: "Céfazoline 2 g IVL (+1 g > 4 h, puis toutes les 4 h) OU Céfuroxime 1,5 g IVL (+0,75 g > 2 h, puis toutes les 2 h).",
          allergy:   "Vancomycine 20 mg/kg IVL ou Teicoplanine 12 mg/kg IVL."
        },
        "Mise en place d’un anneau gastrique": {
          noAllergy: "Céfazoline 2 g IVL (+1 g > 4 h, puis toutes les 4 h) OU Céfuroxime 1,5 g IVL (+0,75 g > 2 h, puis toutes les 2 h).",
          allergy:   "Vancomycine 20 mg/kg IVL ou Teicoplanine 12 mg/kg IVL."
        },
        "Retrait d’anneau gastrique": {
          noAllergy: "Pas d’antibioprophylaxie.",
          allergy:   "Pas d’antibioprophylaxie."
        }
      }
    },

    "Chirurgies des voies biliaires": {
      interventions: {
        "Cholécystectomie coelioscopique à bas risque": {
          noAllergy: "Pas d’antibioprophylaxie.",
          allergy:   "Pas d’antibioprophylaxie."
        },
        "Cholécystectomie à haut risque (laparotomie ou coelio)": {
          noAllergy: "Céfazoline 2 g IVL (+1 g > 4 h, puis q4h) OU Céfuroxime 1,5 g IVL (+0,75 g > 2 h, puis q2h).",
          allergy:   "Vancomycine 20 mg/kg IVL ou Teicoplanine 12 mg/kg IVL."
        },
        "Ablation de calcul de la VBP": {
          noAllergy: "Céfazoline 2 g IVL (+1 g > 4 h, puis q4h) OU Céfuroxime 1,5 g IVL (+0,75 g > 2 h, puis q2h).",
          allergy:   "Vancomycine 20 mg/kg IVL ou Teicoplanine 12 mg/kg IVL."
        },
        "Pose de prothèse biliaire": {
          noAllergy: "Céfazoline 2 g IVL (+1 g > 4 h, puis q4h) OU Céfuroxime 1,5 g IVL (+0,75 g > 2 h, puis q2h).",
          allergy:   "Vancomycine 20 mg/kg IVL ou Teicoplanine 12 mg/kg IVL."
        },
        "Anastomose bilio-digestive": {
          noAllergy: "Céfoxitine 2 g IVL (+1 g si > 2 h, puis q2h).",
          allergy:   "Gentamicine 6–7 mg/kg IVL + Métronidazole 1 g IVL."
        }
      }
    },

    "Chirurgies hépatiques": {
      interventions: {
        "Résections atypiques du foie (laparo/ coelio)": {
          noAllergy: "Céfazoline 2 g IVL (+1 g > 4 h, puis q4h) OU Céfuroxime 1,5 g IVL (+0,75 g > 2 h, puis q2h).",
          allergy:   "Vancomycine 20 mg/kg IVL ou Teicoplanine 12 mg/kg IVL."
        },
        "Segmentectomie hépatique (laparo/ coelio)": {
          noAllergy: "Céfazoline 2 g IVL (+1 g > 4 h, puis q4h) OU Céfuroxime 1,5 g IVL (+0,75 g > 2 h, puis q2h).",
          allergy:   "Vancomycine 20 mg/kg IVL ou Teicoplanine 12 mg/kg IVL."
        },
        "Lobectomie hépatique (droite/gauche)": {
          noAllergy: "Céfazoline 2 g IVL (+1 g > 4 h, puis q4h) OU Céfuroxime 1,5 g IVL (+0,75 g > 2 h, puis q2h).",
          allergy:   "Vancomycine 20 mg/kg IVL ou Teicoplanine 12 mg/kg IVL."
        },
        "Résection de kystes hépatiques (hydatique, péri-kystectomie, dôme saillant)": {
          noAllergy: "Pas d’antibioprophylaxie.",
          allergy:   "Pas d’antibioprophylaxie."
        },
        "Transplantation hépatique": {
          noAllergy: "Céfoxitine 2 g IVL (+1 g si > 2 h, puis q2h). (Adapter au portage rectal BLSE et aux ATCD fongiques.)",
          allergy:   "Gentamicine 6–7 mg/kg IVL + Métronidazole 1 g IVL."
        }
      }
    },

    "Splénectomie": {
      interventions: {
        "Splénectomie (programmée/urgence, laparo/coelio)": {
          noAllergy: "Céfazoline 2 g IVL (+1 g > 4 h, puis q4h) OU Céfuroxime 1,5 g IVL (+0,75 g > 2 h, puis q2h).",
          allergy:   "Vancomycine 20 mg/kg IVL ou Teicoplanine 12 mg/kg IVL."
        }
      }
    },

    "Chirurgies pancréatiques": {
      interventions: {
        "Pancréatectomie avec conservation du duodénum (gauche/totale/isthmectomie)": {
          noAllergy: "Céfazoline 2 g IVL (+1 g > 4 h, puis q4h) OU Céfuroxime 1,5 g IVL (+0,75 g > 2 h, puis q2h).",
          allergy:   "Vancomycine 20 mg/kg IVL ou Teicoplanine 12 mg/kg IVL."
        },
        "DPC/DPT sans drainage biliaire": {
          noAllergy: "Céfoxitine 2 g IVL (+1 g si > 2 h, puis q2h).",
          allergy:   "Gentamicine 6–7 mg/kg IVL + Métronidazole 1 g IVL."
        },
        "DPC/DPT avec drainage biliaire et/ou sphinctérotomie": {
          noAllergy: "Pipéracilline–Tazobactam 4 g IVL (réinjection 4 g q4h).",
          allergy:   "Discuter Aztréonam/Ciprofloxacine + Métronidazole + Vancomycine."
        },
        "Transplantation pancréatique": {
          noAllergy: "Céfoxitine 2 g IVL (+1 g si > 2 h, puis q2h). (Adapter au portage rectal BLSE et ATCD fongiques.)",
          allergy:   "Gentamicine 6–7 mg/kg IVL + Métronidazole 1 g IVL."
        }
      }
    },

    "Chirurgie de paroi": {
      interventions: {
        "Cure de hernie inguinale/crurale avec prothèse (ouverte ou coelio)": {
          noAllergy: "Céfazoline 2 g IVL (+1 g > 4 h, puis q4h) OU Céfuroxime 1,5 g IVL (+0,75 g > 2 h, puis q2h).",
          allergy:   "Vancomycine 20 mg/kg IVL ou Teicoplanine 12 mg/kg IVL."
        },
        "Hernie sans prothèse": {
          noAllergy: "Pas d’antibioprophylaxie.",
          allergy:   "Pas d’antibioprophylaxie."
        }
      }
    },

    "Endoscopies digestives hautes": {
      interventions: {
        "Gastroscopie diagnostique/ thérapeutique (mucosectomie, dilatation, prothèse, clips…)": {
          noAllergy: "Pas d’antibioprophylaxie.",
          allergy:   "Pas d’antibioprophylaxie."
        },
        "Ligature de varices oeso-gastriques en période hémorragique": {
          noAllergy: "Ceftriaxone 1 g/j IV pendant 7 jours (ou Ciprofloxacine 400 mg IVL ×2/j 7 jours si non cirrhotique).",
          allergy:   "Ciprofloxacine 400 mg IVL ×2/j pendant 7 jours (à discuter si cirrhose Child B/C)."
        },
        "Pose de gastrostomie (PEG)": {
          noAllergy: "Céfazoline 2 g IVL — dose unique.",
          allergy:   "Vancomycine 20 mg/kg IVL."
        },
        "Ponction sous écho-endoscopie": {
          noAllergy: "Uniquement si lésion kystique: Céfoxitine 2 g IVL — dose unique.",
          allergy:   "Uniquement si lésion kystique: Gentamicine 6–7 mg/kg IVL + Métronidazole 1 g IVL (si antibioprophylaxie indiquée)."
        },
        "CPRE": {
          noAllergy: "Uniquement si drainage incomplet: Céfoxitine 2 g IVL — dose unique.",
          allergy:   "Uniquement si drainage incomplet: Gentamicine 6–7 mg/kg IVL + Métronidazole 1 g IVL (si antibioprophylaxie indiquée)."
        }
      }
    },

    "Endoscopie digestive basse": {
      interventions: {
        "Coloscopie diagnostique ou thérapeutique": {
          noAllergy: "Pas d’antibioprophylaxie.",
          allergy:   "Pas d’antibioprophylaxie."
        }
      }
    },

    "Radiologie interventionnelle digestive": {
      interventions: {
        "Embolisation hépatique / chimio-embolisation": {
          noAllergy: "Pas d’antibioprophylaxie.",
          allergy:   "Pas d’antibioprophylaxie."
        },
        "TIPS": {
          noAllergy: "Pas d’antibioprophylaxie.",
          allergy:   "Pas d’antibioprophylaxie."
        },
        "Drainage biliaire": {
          noAllergy: "Pas d’antibioprophylaxie.",
          allergy:   "Pas d’antibioprophylaxie."
        }
      }
    }
  },

  Orthopédie: {
    "Chirurgie programmée du membre inférieur": {
      interventions: {
        "Prothèse de hanche ou de genou (y compris reprise, si non septique et précoce)": {
          noAllergy: "Céfazoline 2 g IVL (réinjection 1 g si durée > 4 h, puis toutes les 4 h).",
          allergy: "1ère intention : Clindamycine 900 mg IVL. 2ème intention : Vancomycine 20 mg/kg IVL ou Teicoplanine 12 mg/kg IVL (à privilégier si prothèse de hanche par voie antérieure)."
        },
        "Gestes osseux avec pose de matériel (clou, vis, plaque, arthrodèse…)": {
          noAllergy: "Céfazoline 2 g IVL (réinjection 1 g si durée > 4 h, puis toutes les 4 h).",
          allergy: "1ère intention : Clindamycine 900 mg IVL. 2ème intention : Vancomycine 20 mg/kg IVL ou Teicoplanine 12 mg/kg IVL."
        },
        "Résection osseuse (sans matériel)": {
          noAllergy: "Pas d’antibioprophylaxie.",
          allergy: "Pas d’antibioprophylaxie."
        },
        "Retrait de matériel d’ostéosynthèse": {
          noAllergy: "Pas d’antibioprophylaxie.",
          allergy: "Pas d’antibioprophylaxie."
        },
        "Reconstruction ligamentaire": {
  noAllergy: "Uniquement si greffon: Céfazoline 2 g IVL (réinjection 1 g si durée > 4 h, puis toutes les 4 h).",
  allergy:   "Uniquement si greffon: Clindamycine 900 mg IVL (2ème intention : Vancomycine 20 mg/kg IVL ou Teicoplanine 12 mg/kg IVL)"
        },
        "Arthroscopie": {
  noAllergy: "Uniquement si pose de matériel: Céfazoline 2 g IVL (réinjection 1 g si durée > 4 h, puis toutes les 4 h).",
  allergy:   "Uniquement si pose de matériel: Clindamycine 900 mg IVL (2ème intention : Vancomycine 20 mg/kg IVL ou Teicoplanine 12 mg/kg IVL)"
        },
        "Chirurgie des parties molles": {
          noAllergy: "Pas d’antibioprophylaxie.",
          allergy: "Pas d’antibioprophylaxie."
        }
      }
    },

    "Chirurgie programmée du membre supérieur": {
      interventions: {
        "Pose de prothèse (toute articulation)": {
          noAllergy: "Céfazoline 2 g IVL (réinjection 1 g si durée > 4 h, puis toutes les 4 h).",
          allergy: "1ère intention : Clindamycine 900 mg IVL. 2ème intention : Vancomycine 20 mg/kg IVL ou Teicoplanine 12 mg/kg IVL (à privilégier si prothèse d’épaule)."
        },
        "Chirurgie de luxation récidivante de l’épaule (avec ou sans greffon)": {
          noAllergy: "Céfazoline 2 g IVL (réinjection 1 g si durée > 4 h, puis toutes les 4 h).",
          allergy: "1ère intention : Clindamycine 900 mg IVL. 2ème intention : Vancomycine 20 mg/kg IVL ou Teicoplanine 12 mg/kg IVL."
        },
        "Gestes osseux avec pose de matériel (clou, vis, plaque, arthrodèse…)": {
          noAllergy: "Céfazoline 2 g IVL (réinjection 1 g si durée > 4 h, puis toutes les 4 h).",
          allergy: "1ère intention : Clindamycine 900 mg IVL. 2ème intention : Vancomycine 20 mg/kg IVL ou Teicoplanine 12 mg/kg IVL."
        },
        "Retrait de matériel d’ostéosynthèse": {
          noAllergy: "Pas d’antibioprophylaxie.",
          allergy: "Pas d’antibioprophylaxie."
        },
        "Arthroscopie": {
  noAllergy: "Uniquement si pose de matériel: Céfazoline 2 g IVL (réinjection 1 g si durée > 4 h, puis toutes les 4 h).",
  allergy:   "Uniquement si pose de matériel: Clindamycine 900 mg IVL (2ème intention : Vancomycine 20 mg/kg IVL ou Teicoplanine 12 mg/kg IVL)"
        },
        "Chirurgie des parties molles": {
          noAllergy: "Pas d’antibioprophylaxie.",
          allergy: "Pas d’antibioprophylaxie."
        }
      }
    },

    "Chirurgies programmées rachidiennes": {
      interventions: {
        "Chirurgie instrumentée du rachis avec mise en place de matériel": {
          noAllergy: "Céfazoline 2 g IVL (réinjection 1 g si durée > 4 h, puis toutes les 4 h).",
          allergy: "Clindamycine 900 mg IVL."
        },
        "Chirurgie du rachis sans mise en place de matériel (ou retrait de matériel)": {
          noAllergy: "Pas d’antibioprophylaxie.",
          allergy: "Pas d’antibioprophylaxie."
        },
        "Chirurgie du rachis percutanée avec pose de matériel": {
          noAllergy: "Céfazoline 2 g IVL (réinjection 1 g si durée > 4 h, puis toutes les 4 h).",
          allergy: "Clindamycine 900 mg IVL."
        }
      }
    },

    "Traumatologie": {
      interventions: {
        "Fractures fermées — Fixateur externe ou brochage percutané": {
          noAllergy: "Pas d’antibioprophylaxie.",
          allergy: "Pas d’antibioprophylaxie."
        },
        "Fractures fermées — Ostéosynthèse à foyer ouvert ou enclouage": {
          noAllergy: "Céfazoline 2 g IVL (réinjection 1 g si durée > 4 h, puis toutes les 4 h).",
          allergy: "Clindamycine 900 mg IVL."
        },
        "Fracture ouverte — Gustilo I (ouverture < 1 cm)": {
          noAllergy: "Céfazoline 2 g IVL (réinjection 1 g si durée > 4 h, puis toutes les 4 h).",
          allergy: "Clindamycine 900 mg IVL."
        },
        "Fracture ouverte — Gustilo II ou III (ouverture > 1 cm)": {
          noAllergy: "Amoxicilline/Acide clavulanique 2 g IVL (réinjection 1 g si > 2 h, puis toutes les 2 h).",
          allergy: "Clindamycine 900 mg IVL + Gentamicine 6–7 mg/kg IVL."
        },
        "Plaie des parties molles": {
          noAllergy: "Uniquement si contamination tellurique ou morsure: Amoxicilline/Acide clavulanique 2 g IVL (réinjection 1 g si > 2 h, puis toutes les 2 h).",
          allergy: "Uniquement si contamination tellurique ou morsure: Clindamycine 900 mg IVL + Gentamicine 6–7 mg/kg IVL"
        },
        "Plaie articulaire": {
          noAllergy: "Céfazoline 2 g IVL (réinjection 1 g si durée > 4 h, puis toutes les 4 h).",
          allergy: "Clindamycine 900 mg IVL."
        }
      }
    }
  },

  // ======= Partie Urologie =======
  Urologie: {
    "Chirurgies prostatiques": {
      interventions: {
        "Prostatectomie totale": {
          noAllergy: "Pas d’antibioprophylaxie.",
          allergy: "Pas d’antibioprophylaxie."
        },
        "Résection trans-urétrale de prostate (RTUP)": {
          noAllergy: "Céfazoline 2 g IVL (1 g si durée >4 h, puis toutes les 4 h) OU Céfuroxime 1,5 g IVL (0,75 g si >2 h, puis toutes les 2 h) + Gentamicine 6–7 mg/kg IVL.",
          allergy: "Clindamycine 900 mg IVL + Gentamicine 6–7 mg/kg IVL."
        },
        "Adénomectomie chirurgicale": {
          noAllergy: "Céfazoline 2 g IVL (1 g si durée >4 h, puis toutes les 4 h) OU Céfuroxime 1,5 g IVL (0,75 g si >2 h, puis toutes les 2 h) + Gentamicine 6–7 mg/kg IVL.",
          allergy: "Clindamycine 900 mg IVL + Gentamicine 6–7 mg/kg IVL."
        },
        "Enucléation chirurgicale (HoLEP, ThuLEP, GreenLEP, bipolaire, REZUM)": {
          noAllergy: "Céfazoline 2 g IVL (1 g si durée >4 h, puis toutes les 4 h) OU Céfuroxime 1,5 g IVL (0,75 g si >2 h, puis toutes les 2 h) + Gentamicine 6–7 mg/kg IVL.",
          allergy: "Clindamycine 900 mg IVL + Gentamicine 6–7 mg/kg IVL."
        },
        "Ultrasons focalisés (HIFU), embolisation artères prostatiques": {
          noAllergy: "Pas d’antibioprophylaxie.",
          allergy: "Pas d’antibioprophylaxie."
        },
        "Biopsies prostatiques": {
          noAllergy: "Uniquement si voie trans-rectale: Fosfomycine-trométamol 3 g PO dose unique (≥2 h avant le geste) OU Ciprofloxacine 500 mg PO dose unique (≥2 h avant le geste).",
          allergy: "Uniquement si voie trans-rectale: Fosfomycine-trométamol 3 g PO dose unique (≥2 h avant le geste) OU Ciprofloxacine 500 mg PO dose unique (≥2 h avant le geste)."
        },
        "Curiethérapie prostatique": {
          noAllergy: "Pas d’antibioprophylaxie.",
          allergy: "Pas d’antibioprophylaxie."
        }
      }
    },

    "Chirurgies vésicales": {
      interventions: {
        "Cystoscopie diagnostique": {
          noAllergy: "Pas d’antibioprophylaxie.",
          allergy: "Pas d’antibioprophylaxie."
        },
        "Résection trans-urétrale de vessie (RTUV)": {
          noAllergy: "Pas d’antibioprophylaxie.",
          allergy: "Pas d’antibioprophylaxie."
        },
        "Cystectomie totale/partielle quel que soit le mode de dérivation": {
          noAllergy: "Céfoxitine 2 g IVL (1 g si >2 h, puis toutes les 2 h) + Gentamicine 6–7 mg/kg IVL + Métronidazole 1 g IVL.",
          allergy: "Gentamicine 6–7 mg/kg IVL + Métronidazole 1 g IVL."
        },
        "Cure d’incontinence urinaire": {
          noAllergy: "Pas d’antibioprophylaxie.",
          allergy: "Pas d’antibioprophylaxie."
        },
        "Injection intra-détrusorienne de toxine botulique": {
          noAllergy: "Pas d’antibioprophylaxie.",
          allergy: "Pas d’antibioprophylaxie."
        },
        "Cure de prolapsus": {
          noAllergy: "Céfazoline 2 g IVL (1 g si durée >4 h, puis toutes les 4 h) OU Céfuroxime 1,5 g IVL (0,75 g si >2 h, puis toutes les 2 h) + Gentamicine 6–7 mg/kg IVL.",
          allergy: "Clindamycine 900 mg IVL + Gentamicine 6–7 mg/kg IVL."
        },
        "Injection de macroplastique": {
          noAllergy: "Céfazoline 2 g IVL (1 g si durée >4 h, puis toutes les 4 h) OU Céfuroxime 1,5 g IVL (0,75 g si >2 h, puis toutes les 2 h) + Gentamicine 6–7 mg/kg IVL.",
          allergy: "Clindamycine 900 mg IVL + Gentamicine 6–7 mg/kg IVL."
        }
      }
    },

    "Chirurgies génitales masculines": {
      interventions: {
        "Pose de prothèse pénienne": {
          noAllergy: "Céfazoline 2 g IVL (1 g si durée >4 h, puis toutes les 4 h) OU Céfuroxime 1,5 g IVL (0,75 g si >2 h, puis toutes les 2 h) + Gentamicine 6–7 mg/kg IVL + Clindamycine 900 mg IVL.",
          allergy: "Vancomycine 20 mg/kg IVL ou Teicoplanine 12 mg/kg IVL + Gentamicine 6–7 mg/kg IVL."
        },
        "Pose de prothèse testiculaire": {
          noAllergy: "Céfazoline 2 g IVL (1 g si durée >4 h, puis toutes les 4 h) OU Céfuroxime 1,5 g IVL (0,75 g si >2 h, puis toutes les 2 h) + Gentamicine 6–7 mg/kg IVL + Clindamycine 900 mg IVL.",
          allergy: "Vancomycine 20 mg/kg IVL ou Teicoplanine 12 mg/kg IVL + Gentamicine 6–7 mg/kg IVL."
        },
        "Chirurgie scrotale ou de la verge sans prothèse": {
          noAllergy: "Pas d’antibioprophylaxie.",
          allergy: "Pas d’antibioprophylaxie."
        }
      }
    },

    "Chirurgies des voies excrétrices urinaires": {
      interventions: {
        "Urétéroscopie diagnostique/thérapeutique, montée de sonde JJ": {
          noAllergy: "Céfazoline 2 g IVL (1 g si durée >4 h, puis toutes les 4 h) OU Céfuroxime 1,5 g IVL (0,75 g si >2 h, puis toutes les 2 h) + Gentamicine 6–7 mg/kg IVL.",
          allergy: "Clindamycine 900 mg IVL + Gentamicine 6–7 mg/kg IVL."
        },
        "Néphrostomie": {
          noAllergy: "Céfazoline 2 g IVL (1 g si durée >4 h, puis toutes les 4 h) OU Céfuroxime 1,5 g IVL (0,75 g si >2 h, puis toutes les 2 h) + Gentamicine 6–7 mg/kg IVL.",
          allergy: "Clindamycine 900 mg IVL + Gentamicine 6–7 mg/kg IVL."
        },
        "Urétrotomie, urétroplastie": {
          noAllergy: "Céfazoline 2 g IVL (1 g si durée >4 h, puis toutes les 4 h) OU Céfuroxime 1,5 g IVL (0,75 g si >2 h, puis toutes les 2 h) + Gentamicine 6–7 mg/kg IVL.",
          allergy: "Clindamycine 900 mg IVL + Gentamicine 6–7 mg/kg IVL."
        },
        "Néphrolithotomie percutanée": {
          noAllergy: "Céfazoline 2 g IVL (1 g si durée >4 h, puis toutes les 4 h) OU Céfuroxime 1,5 g IVL (0,75 g si >2 h, puis toutes les 2 h) + Gentamicine 6–7 mg/kg IVL.",
          allergy: "Clindamycine 900 mg IVL + Gentamicine 6–7 mg/kg IVL."
        },
        "Lithotritie extra-corporelle": {
          noAllergy: "Pas d’antibioprophylaxie.",
          allergy: "Pas d’antibioprophylaxie."
        }
      }
    },

    "Chirurgies rénales ou surrénaliennes": {
      interventions: {
        "Néphrectomie totale ou partielle": {
          noAllergy: "Pas d’antibioprophylaxie.",
          allergy: "Pas d’antibioprophylaxie."
        },
        "Surrénalectomie": {
          noAllergy: "Pas d’antibioprophylaxie.",
          allergy: "Pas d’antibioprophylaxie."
        },
        "Embolisation des artères rénales": {
          noAllergy: "Pas d’antibioprophylaxie.",
          allergy: "Pas d’antibioprophylaxie."
        },
        "Thermoablation de tumeurs rénales": {
          noAllergy: "Pas d’antibioprophylaxie.",
          allergy: "Pas d’antibioprophylaxie."
        },
        "Transplantation rénale": {
          noAllergy: "Céfazoline 2 g IVL (1 g si durée >4 h, puis toutes les 4 h) OU Céfuroxime 1,5 g IVL (0,75 g si >2 h, puis toutes les 2 h) + Gentamicine 6–7 mg/kg IVL.",
          allergy: "Clindamycine 900 mg IVL + Gentamicine 6–7 mg/kg IVL."
        }
      }
    },

    "Cathéter de dialyse intrapéritonéale": {
      interventions: {
        "Pose ou changement de cathéter": {
          noAllergy: "Céfazoline 2 g IVL (1 g si durée >4 h, puis toutes les 4 h) OU Céfuroxime 1,5 g IVL (0,75 g si >2 h, puis toutes les 2 h) + Gentamicine 6–7 mg/kg IVL.",
          allergy: "Clindamycine 900 mg IVL + Gentamicine 6–7 mg/kg IVL."
        }
      }
    }
  },

  // ======= Partie Gynécologie =======
  Gynécologie: {
    "Chirurgies obstétricales": {
      interventions: {
        "Cerclage du col utérin (ou ablation)": {
          noAllergy: "Pas d’antibioprophylaxie.",
          allergy: "Pas d’antibioprophylaxie."
        },
        "Césarienne programmée ou en urgence": {
          noAllergy: "Céfazoline 2 g IVL (+1 g si >4 h, puis toutes les 4h).",
          allergy: "Clindamycine 900 mg IVL."
        },
        "Suture du corps utérin pour rupture utérine": {
          noAllergy: "Céfazoline 2 g IVL (+1 g si >4 h, puis toutes les 4h).",
          allergy: "Clindamycine 900 mg IVL."
        },
        "Délivrance artificielle, révision post-partum": {
          noAllergy: "Céfazoline 2 g IVL (+1 g si >4 h, puis toutes les 4h).",
          allergy: "Clindamycine 900 mg IVL."
        },
        "Tamponnement intra-utérin": {
          noAllergy: "Céfazoline 2 g IVL (+1 g si >4 h, puis toutes les 4h).",
          allergy: "Clindamycine 900 mg IVL."
        },
        "Embolisation des artères utérines pour HPP": {
          noAllergy: "Pas d’antibioprophylaxie.",
          allergy: "Pas d’antibioprophylaxie."
        },
        "Ligatures artérielles, hémostase pelvienne": {
          noAllergy: "Céfazoline 2 g IVL (+1 g si >4 h, puis toutes les 4h) OU Céfuroxime 1,5 g IVL (+0,75 g si durée >2 h puis toutes les 2h).",
          allergy: "Clindamycine 900 mg IVL."
        },
        "Hystérectomie pour complication obstétricale": {
          noAllergy: "Céfoxitine 2 g IVL (+1 g si >2 h, puis toutes les 2h).",
          allergy: "Clindamycine 900 mg IVL + Gentamicine 6–7 mg/kg IVL."
        }
      }
    },

    "Chirurgie sénologique carcinologique": {
      interventions: {
        "Tumorectomie sans curage / avec ganglion sentinelle": {
          noAllergy: "Pas d’antibioprophylaxie.",
          allergy: "Pas d’antibioprophylaxie."
        },
        "Tumorectomie avec curage axillaire, reconstruction immédiate": {
          noAllergy: "Céfazoline 2 g IVL (+1 g si >4 h, puis toutes les 4h) OU Céfuroxime 1,5 g IVL (+0,75 g si durée >2 h puis toutes les 2h).",
          allergy: "Clindamycine 900 mg IVL."
        },
        "Mastectomie avec/sans curage, avec/sans reconstruction": {
          noAllergy: "Céfazoline 2 g IVL (+1 g si >4 h, puis toutes les 4h) OU Céfuroxime 1,5 g IVL (+0,75 g si durée >2 h puis toutes les 2h).",
          allergy: "Clindamycine 900 mg IVL."
        }
      }
    },

    "Chirurgie sénologique esthétique": {
      interventions: {
        "Mastoplastie de réduction uni ou bilatérale": {
          noAllergy: "Pas d’antibioprophylaxie.",
          allergy: "Pas d’antibioprophylaxie."
        },
        "Mastopexie pour ptose simple": {
          noAllergy: "Pas d’antibioprophylaxie.",
          allergy: "Pas d’antibioprophylaxie."
        },
        "Ablation d’implant mammaire": {
          noAllergy: "Pas d’antibioprophylaxie.",
          allergy: "Pas d’antibioprophylaxie."
        },
        "Mastoplastie ou reconstruction avec implant ou lambeau": {
          noAllergy: "Céfazoline 2 g IVL (+1 g si >4 h, puis toutes les 4h) OU Céfuroxime 1,5 g IVL (+0,75 g si durée >2 h puis toutes les 2h).",
          allergy: "Clindamycine 900 mg IVL."
        },
        "Autogreffe adipeuse ≥ 200 mL ou durée > 2 h": {
          noAllergy: "Céfazoline 2 g IVL (+1 g si >4 h, puis toutes les 4h) OU Céfuroxime 1,5 g IVL (+0,75 g si durée >2 h puis toutes les 2h).",
          allergy: "Clindamycine 900 mg IVL."
        },
        "Autogreffe adipeuse < 200 mL, + durée < 2h": {
          noAllergy: "Pas d’antibioprophylaxie.",
          allergy: "Pas d’antibioprophylaxie."
        },
        "Chirurgie du mamelon": {
          noAllergy: "Pas d’antibioprophylaxie.",
          allergy: "Pas d’antibioprophylaxie."
        }
      }
    },

    "Chirurgies annexielles": {
      interventions: {
        "Coelioscopie diagnostique": {
          noAllergy: "Pas d’antibioprophylaxie.",
          allergy: "Pas d’antibioprophylaxie."
        },
        "Détorsion d’annexe, ligature de trompe, salpingectomie": {
          noAllergy: "Pas d’antibioprophylaxie sauf si ATCD d’endométriose, chirurgie pelvienne ou infection génitale : Céfazoline 2 g IVL (+1 g si >4 h, puis toutes les 4h).",
          allergy: "Pas d’antibioprophylaxie sauf si ATCD d’endométriose, chirurgie pelvienne ou infection génitale : Clindamycine 900 mg IVL si antibioprophylaxie indiquée."
        },
        "Drilling ovarien, kystectomie, ponction de kyste": {
          noAllergy: "Pas d’antibioprophylaxie.",
          allergy: "Pas d’antibioprophylaxie."
        },
        "Annexectomie, ovariectomie, curage pelvien/lombo-aortique, omentectomie. Geste combiné (Debulking) ou non": {
          noAllergy: "Céfazoline 2 g IVL (+1 g si >4 h, puis toutes les 4h) OU Céfuroxime 1,5 g IVL (+0,75 g si durée >2 h puis toutes les 2h).",
          allergy: "Clindamycine 900 mg IVL."
        },
        "Résection d’endométriose avec atteinte rectale": {
          noAllergy: "Céfazoline 2 g IVL (+1 g si >4 h, puis toutes les 4h) + Métronidazole 1 g IVL.",
          allergy: "Clindamycine 900 mg IVL + Métronidazole 1 g IVL."
        }
      }
    },

    "Chirurgies utérines": {
      interventions: {
        "Hystéroscopies diagnostiques ou thérapeutiques": {
          noAllergy: "Pas d’antibioprophylaxie.",
          allergy: "Pas d’antibioprophylaxie."
        },
        "Chirurgies peu invasives par voie vaginale : curetages, conisations, D.I.U…": {
          noAllergy: "",
          allergy: ""
        },
        "Hystérectomie totale (avec temps vaginal ou non)": {
          noAllergy: "Céfoxitine 2 g IVL (+1 g si >2 h, puis toutes les 2h).",
          allergy: "Clindamycine 900 mg IVL + Gentamicine 6–7 mg/kg IVL."
        },
        "Hystérectomie subtotale avec temps vaginal": {
          noAllergy: "Céfoxitine 2 g IVL (+1 g si >2 h, puis toutes les 2h).",
          allergy: "Clindamycine 900 mg IVL + Gentamicine 6–7 mg/kg IVL."
        },
        "Hystérectomie subtotale sans temps vaginal": {
          noAllergy: "Céfazoline 2 g IVL (+1 g si >4 h, puis toutes les 4h) OU Céfuroxime 1,5 g IVL (+0,75 g si durée >2 h puis toutes les 2h).",
          allergy: "Clindamycine 900 mg IVL."
        },
        "Colpectomie subtotale ou totale (avec temps vaginal ou non)": {
          noAllergy: "Céfoxitine 2 g IVL (+1 g si >2 h, puis toutes les 2h).",
          allergy: "Clindamycine 900 mg IVL + Gentamicine 6–7 mg/kg IVL."
        },
        "Myomectomie": {
          noAllergy: "Pas d’antibioprophylaxie si hystéroscopique. Si laparotomie ou coelioscopie : Céfazoline 2 g IVL (+1 g si >4 h, puis toutes les 4h) OU Céfuroxime 1,5 g IVL (+0,75 g si durée >2 h puis toutes les 2h).",
          allergy: "Clindamycine 900 mg IVL (si voie haute)."
        },
        "Cerclage de l’isthme (hors grossesse)": {
          noAllergy: "Pas d’antibioprophylaxie si voie vaginale. Si laparotomie ou coelioscopie : Céfazoline 2 g IVL (+1 g si >4 h, puis toutes les 4h) OU Céfuroxime 1,5 g IVL (+0,75 g si durée >2 h puis toutes les 2h).",
          allergy: "Clindamycine 900 mg IVL (si voie haute)."
        },
        "Hystérorraphie, hystéroplastie": {
          noAllergy: "Céfazoline 2 g IVL (+1 g si >4 h, puis toutes les 4h) OU Céfuroxime 1,5 g IVL (+0,75 g si durée >2 h puis toutes les 2h).",
          allergy: "Clindamycine 900 mg IVL."
        }
      }
    },

    "Chirurgie du prolapsus": {
      interventions: {
        "Hystéropexie": {
          noAllergy: "Céfazoline 2 g IVL (+1 g si >4 h, puis toutes les 4h) OU Céfuroxime 1,5 g IVL (+0,75 g si durée >2 h puis toutes les 2h). Attention : Élargir à Céfoxitine 2 g IVL si large incision vagino-péritonéale.",
          allergy: "Clindamycine 900 mg IVL. Attention : ajout Gentamicine 6–7 mg/kg IVL si large incision vagino-péritonéale."
        },
        "Promontofixation": {
          noAllergy: "Céfazoline 2 g IVL (+1 g si >4 h, puis toutes les 4h) OU Céfuroxime 1,5 g IVL (+0,75 g si durée >2 h puis toutes les 2h). Attention : Élargir à Céfoxitine 2 g IVL si large incision vagino-péritonéale.",
          allergy: "Clindamycine 900 mg IVL. Attention : ajout Gentamicine 6–7 mg/kg IVL si large incision vagino-péritonéale."
        },
        "Colpo-périnéorraphie": {
          noAllergy: "Céfazoline 2 g IVL (+1 g si >4 h, puis toutes les 4h) OU Céfuroxime 1,5 g IVL (+0,75 g si durée >2 h puis toutes les 2h). Attention : Élargir à Céfoxitine 2 g IVL si large incision vagino-péritonéale.",
          allergy: "Clindamycine 900 mg IVL. Attention : ajout Gentamicine 6–7 mg/kg IVL si large incision vagino-péritonéale."
        }
      }
    },

    "Chirurgies vulvaires": {
      interventions: {
        "Vulvectomie simple": {
          noAllergy: "Pas d’antibioprophylaxie.",
          allergy: "Pas d’antibioprophylaxie."
        },
        "Vulvectomie partielle ou totale avec curage inguinal/iliaque": {
          noAllergy: "Céfazoline 2 g IVL (+1 g si >4 h, puis toutes les 4h) OU Céfuroxime 1,5 g IVL (+0,75 g si durée >2 h puis toutes les 2h).",
          allergy: "Clindamycine 900 mg IVL."
        },
        "Nymphoplastie": {
          noAllergy: "Pas d’antibioprophylaxie.",
          allergy: "Pas d’antibioprophylaxie."
        },
        "Vulvo-périnéoplastie": {
          noAllergy: "Pas d’antibioprophylaxie.",
          allergy: "Pas d’antibioprophylaxie."
        },
        "Exérèse de lésions superficielles": {
          noAllergy: "Pas d’antibioprophylaxie.",
          allergy: "Pas d’antibioprophylaxie."
        }
      }
    },

    "Chirurgies vaginales": {
      interventions: {
        "Résection de cloison vaginale": {
          noAllergy: "Pas d’antibioprophylaxie.",
          allergy: "Pas d’antibioprophylaxie."
        },
        "Chirurgies de l’hymen": {
          noAllergy: "Pas d’antibioprophylaxie.",
          allergy: "Pas d’antibioprophylaxie."
        },
        "Destruction de lésions vaginales": {
          noAllergy: "Pas d’antibioprophylaxie.",
          allergy: "Pas d’antibioprophylaxie."
        }
      }
    },

    "PMA": {
      interventions: {
        "Ponction d’ovocytes, transfert d’embryon": {
          noAllergy: "Pas d’antibioprophylaxie.",
          allergy: "Pas d’antibioprophylaxie."
        }
      }
    },

    "IVG / IMG": {
      interventions: {
        "Révision utérine, aspiration 1er ou 2e trimestre": {
          noAllergy: "Pas d’antibioprophylaxie.",
          allergy: "Pas d’antibioprophylaxie."
        }
      }
    },

    "Embolisation": {
      interventions: {
        "Fibromes utérins, varices pelviennes, hémorragie du post-partum": {
          noAllergy: "Pas d’antibioprophylaxie.",
          allergy: "Pas d’antibioprophylaxie."
        }
      }
    }
  },

  // ======= Partie Cardiaque =======
  Cardiaque: {
    "Chirurgie cardiaque (hors transplantation/assistances)": {
      interventions: {
        "Actes thérapeutiques des parois, des cavités et de la crosse aortique avec ou sans CEC": {
          noAllergy: "Céfazoline 2 g IVL (1 g si durée > 4 h, puis toutes les 4 h) + 1 g lors du priming si CEC OU Céfuroxime 1,5 g IVL (0,75 g si > 2 h, puis toutes les 2 h).",
          allergy:   "Vancomycine 20 mg/kg IVL ou teicoplanine 12 mk/kg IVL."
        },
        "Drainage péricardique par thoracotomie / sternotomie, fenêtre pleuro-/péritonéo-péricardique": {
          noAllergy: "Céfazoline 2 g IVL (1 g si durée > 4 h, puis toutes les 4 h) OU Céfuroxime 1,5 g IVL (0,75 g si > 2 h, puis toutes les 2 h).",
          allergy:   "Vancomycine 20 mg/kg IVL ou teicoplanine 12 mk/kg IVL."
        },
        "Reprise pour hémostase postopératoire": {
          noAllergy: "Céfazoline 2 g IVL (1 g si durée > 4 h, puis toutes les 4 h) OU Céfuroxime 1,5 g IVL (0,75 g si > 2 h, puis toutes les 2 h).",
          allergy:   "Vancomycine 20 mg/kg IVL ou teicoplanine 12 mk/kg IVL."
        }
      }
    },

    "Transplantation cardiaque": {
      interventions: {
        "Transplantation cardiaque (patient venant du domicile sans assistance, ou LVAD sans contexte de réanimation)": {
          noAllergy: "Céfazoline 2 g IVL (1 g si > 4 h, puis toutes les 4 h) OU Céfuroxime 1,5 g IVL (0,75 g si > 2 h, puis toutes les 2 h).",
          allergy:   "Vancomycine 20 mg/kg IVL ou teicoplanine 12 mk/kg IVL."
        },
        "Transplantation cardiaque avec assistance avec contexte infectieux et/ou réanimation": {
          noAllergy: "Adaptation individuelle après avis infectiologique selon antécédents et colonisation (SARM / E-BLSE).",
          allergy:   "Adaptation individuelle après avis infectiologique selon antécédents et colonisation (SARM / E-BLSE)."
        }
      }
    },

    "Assistances circulatoires": {
      interventions: {
        "Assistance circulatoire de courte durée percutanée (ECMO, Impella, CPIA, etc.)": {
          noAllergy: "Pas d’antibioprophylaxie.",
          allergy:   "Pas d’antibioprophylaxie."
        },
        "Assistance circulatoire de courte durée avec abord chirurgical (ECMO, Impella..)": {
          noAllergy: "Céfazoline 2 g IVL (1 g si > 4 h, puis toutes les 4 h) OU Céfuroxime 1,5 g IVL (0,75 g si > 2 h, puis toutes les 2 h).",
          allergy:   "Vancomycine 20 mg/kg IVL ou teicoplanine 12 mk/kg IVL."
        },
        "Assistance circulatoire gauche de longue durée (LVAD) ou cœur artificiel sans hospitalisation en réanimation": {
          noAllergy: "Céfazoline 2 g IVL (1 g si > 4 h, puis toutes les 4 h) OU Céfuroxime 1,5 g IVL (0,75 g si > 2 h, puis toutes les 2 h).",
          allergy:   "Vancomycine 20 mg/kg IVL ou teicoplanine 12 mk/kg IVL."
        },
        "Assistance circulatoire gauche de longue durée (LVAD) ou cœur artificiel hospitalisé en réanimation (avec ou sans ECMO préopératoire)": {
          noAllergy: "Adaptation individuelle après avis infectiologique selon antécédents et colonisation (SARM / E-BLSE).",
          allergy:   "Adaptation individuelle après avis infectiologique selon antécédents et colonisation (SARM / E-BLSE)."
        }
      }
    },

    "Cardiologie interventionnelle structurelle": {
      interventions: {
        "TAVI": {
          noAllergy: "Amoxicilline–acide clavulanique 2 g IVL (1 g si > 2 h, puis toutes les 2 h).",
          allergy:   "Vancomycine 20 mg/kg IVL ou teicoplanine 12 mk/kg IVL."
        },
        "MitraClip": {
          noAllergy: "Amoxicilline–acide clavulanique 2 g IVL (1 g si > 2 h, puis toutes les 2 h).",
          allergy:   "Vancomycine 20 mg/kg IVL ou teicoplanine 12 mk/kg IVL."
        },
        "Fermeture de CIA/FOP percutanée": {
          noAllergy: "Amoxicilline–acide clavulanique 2 g IVL (1 g si > 2 h, puis toutes les 2 h).",
          allergy:   "Vancomycine 20 mg/kg IVL ou teicoplanine 12 mk/kg IVL."
        },
        "Fermeture de l’auricule percutanée": {
          noAllergy: "Amoxicilline–acide clavulanique 2 g IVL (1 g si > 2 h, puis toutes les 2 h).",
          allergy:   "Vancomycine 20 mg/kg IVL ou teicoplanine 12 mk/kg IVL."
        }
      }
    },

    "Rythmologie interventionnelle": {
      interventions: {
        "Implantation ou changement de prothèse rythmique (stimulateur, défibrillateur, changement de sonde)": {
          noAllergy: "Céfazoline 2 g IVL (1 g si > 4 h, puis toutes les 4 h).",
          allergy:   "Vancomycine 20 mg/kg IVL ou teicoplanine 12 mk/kg IVL."
        },
        "Exploration électrophysiologique ou ablation de trouble du rythme (radiofréquence, cryothérapie, etc.)": {
          noAllergy: "Pas d’antibioprophylaxie. (Sauf si prothèse intracardiaque rythmique ou non déjà implantée : Céfazoline 2 g IVL (1 g si > 4 h, puis toutes les 4 h).)",
          allergy:   "Pas d’antibioprophylaxie. (Si antibioprophylaxie indiquée : Vancomycine 20 mg/kg IVL ou teicoplanine 12 mk/kg IVL.)"
        }
      }
    }
  },

  // ======= Partie Thoracique =======
  Thoracique: {
    "Chirurgie d’exérèse pulmonaire (thoracotomie ou cervico-thoracotomie)": {
      interventions: {
        "Lobectomie ou segmentectomie": {
          noAllergy: "Amoxicilline–Acide clavulanique 2 g IVL (+1 g si durée > 2 h, puis toutes les 2h) privilégier si BPCO OU Céfazoline 2 g IVL (+1 g > 4 h, puis toutes les 4h) OU Céfuroxime 1,5 g IVL (+0,75 g > 2 h, puis toutes les 2h).",
          allergy:   "Clindamycine 900 mg IVL + Gentamicine 6–7 mg/kg IVL."
        },
        "Pneumonectomie et pleuro-pneumonectomie": {
          noAllergy: "Amoxicilline–Acide clavulanique 2 g IVL (+1 g si durée > 2 h, puis toutes les 2h) privilégier si BPCO OU Céfazoline 2 g IVL (+1 g > 4 h, puis toutes les 4h) OU Céfuroxime 1,5 g IVL (+0,75 g > 2 h, puis toutes les 2h).",
          allergy:   "Clindamycine 900 mg IVL + Gentamicine 6–7 mg/kg IVL."
        },
        "Résection de bulle / Exérèse de kyste hydatique": {
          noAllergy: "Amoxicilline–Acide clavulanique 2 g IVL (+1 g si durée > 2 h, puis toutes les 2h) privilégier si BPCO OU Céfazoline 2 g IVL (+1 g > 4 h, puis toutes les 4h) OU Céfuroxime 1,5 g IVL (+0,75 g > 2 h, puis toutes les 2h).",
          allergy:   "Clindamycine 900 mg IVL + Gentamicine 6–7 mg/kg IVL."
        }
      }
    },

    "Chirurgies médiastinales, pleurales, pariétales": {
      interventions: {
        "Chirurgie du médiastin": {
          noAllergy: "Céfazoline 2 g IVL (+1 g > 4 h, puis toutes les 4h) OU Céfuroxime 1,5 g IVL (+0,75 g > 2 h, puis toutes les 2h).",
          allergy:   "Clindamycine 900 mg IVL + Gentamicine 6–7 mg/kg IVL."
        },
        "Chirurgie de pneumothorax": {
          noAllergy: "Céfazoline 2 g IVL (+1 g > 4 h, puis toutes les 4h) OU Céfuroxime 1,5 g IVL (+0,75 g > 2 h, puis toutes les 2h).",
          allergy:   "Clindamycine 900 mg IVL + Gentamicine 6–7 mg/kg IVL."
        },
        "Chirurgie de la plèvre (hors infection)": {
          noAllergy: "Céfazoline 2 g IVL (+1 g > 4 h, puis toutes les 4h) OU Céfuroxime 1,5 g IVL (+0,75 g > 2 h, puis toutes les 2h).",
          allergy:   "Clindamycine 900 mg IVL + Gentamicine 6–7 mg/kg IVL."
        },
        "Chirurgie de la paroi thoracique (avec ou sans matériel)": {
  noAllergy: "Céfazoline 2 g IVL (+1 g > 4 h, puis toutes les 4h) OU Céfuroxime 1,5 g IVL (+0,75 g > 2 h, puis toutes les 2h).",
  allergy:   "Clindamycine 900 mg IVL + Gentamicine 6–7 mg/kg IVL."
        },
        "Médiastinoscopie ou thoracoscopie (avec ou sans biopsie)": {
          noAllergy: "Pas d’antibioprophylaxie.",
          allergy:   "Pas d’antibioprophylaxie."
        },
        "Drainage thoracique (tunnellisé ou non)": {
          noAllergy: "Pas d’antibioprophylaxie.",
          allergy:   "Pas d’antibioprophylaxie."
        }
      }
    },

    "Chirurgie des voies aériennes sous-glottiques": {
      interventions: {
        "Trachéotomie chirurgicale": {
          noAllergy: "Céfazoline 2 g IVL (+1 g > 4 h, puis toutes les 4h) OU Céfuroxime 1,5 g IVL (+0,75 g > 2 h, puis toutes les 2h).",
          allergy:   "Clindamycine 900 mg IVL + Gentamicine 6–7 mg/kg IVL."
        },
        "Résection-anastomose bronchique ou trachéale (toutes localisations)": {
          noAllergy: "Céfazoline 2 g IVL (+1 g > 4 h, puis toutes les 4h) OU Céfuroxime 1,5 g IVL (+0,75 g > 2 h, puis toutes les 2h).",
          allergy:   "Clindamycine 900 mg IVL + Gentamicine 6–7 mg/kg IVL."
        },
        "Plastie, autogreffe, lambeau ou prothèse trachéale": {
          noAllergy: "Céfazoline 2 g IVL (+1 g > 4 h, puis toutes les 4h) OU Céfuroxime 1,5 g IVL (+0,75 g > 2 h, puis toutes les 2h).",
          allergy:   "Clindamycine 900 mg IVL + Gentamicine 6–7 mg/kg IVL."
        },
        "Fermeture de plaie ou fistule bronchique": {
          noAllergy: "Céfazoline 2 g IVL (+1 g > 4 h, puis toutes les 4h) OU Céfuroxime 1,5 g IVL (+0,75 g > 2 h, puis toutes les 2h).",
          allergy:   "Clindamycine 900 mg IVL + Gentamicine 6–7 mg/kg IVL."
        },
        "Résection thyro- ou crico-trachéale": {
          noAllergy: "Céfazoline 2 g IVL (+1 g > 4 h, puis toutes les 4h) OU Céfuroxime 1,5 g IVL (+0,75 g > 2 h, puis toutes les 2h).",
          allergy:   "Clindamycine 900 mg IVL + Gentamicine 6–7 mg/kg IVL."
        },
        "Trachéotomie percutanée": {
          noAllergy: "Pas d’antibioprophylaxie.",
          allergy:   "Pas d’antibioprophylaxie."
        }
      }
    },

    "Chirurgies œsophagiennes": {
      interventions: {
        "Œsophagectomie": {
          noAllergy: "Céfazoline 2 g IVL (+1 g > 4 h, puis toutes les 4h) OU Céfuroxime 1,5 g IVL (+0,75 g > 2 h, puis toutes les 2h).",
          allergy:   "Vancomycine 20 mg/kg IVL ou Teicoplanine 12 mk/kg IVL."
        },
        "Excision de tumeur œsophagienne": {
          noAllergy: "Céfazoline 2 g IVL (+1 g > 4 h, puis toutes les 4h) OU Céfuroxime 1,5 g IVL (+0,75 g > 2 h, puis toutes les 2h).",
          allergy:   "Vancomycine 20 mg/kg IVL ou Teicoplanine 12 mk/kg IVL."
        },
        "Traitement de diverticule œsophagien": {
          noAllergy: "Céfazoline 2 g IVL (+1 g > 4 h, puis toutes les 4h) OU Céfuroxime 1,5 g IVL (+0,75 g > 2 h, puis toutes les 2h).",
          allergy:   "Vancomycine 20 mg/kg IVL ou Teicoplanine 12 mk/kg IVL."
        }
      }
    },

    "Radiologie interventionnelle thoracique": {
      interventions: {
        "Ponction, biopsie, drainage": {
          noAllergy: "Pas d’antibioprophylaxie.",
          allergy:   "Pas d’antibioprophylaxie."
        },
        "Injection intrabronchique ou intrapulmonaire": {
          noAllergy: "Pas d’antibioprophylaxie.",
          allergy:   "Pas d’antibioprophylaxie."
        },
        "Radiofréquence bronchopulmonaire": {
          noAllergy: "Pas d’antibioprophylaxie.",
          allergy:   "Pas d’antibioprophylaxie."
        }
      }
    },

    "Endoscopies trachéo-bronchiques": {
      interventions: {
        "Fibroscopie diagnostique : simple, lavage broncho-alvéolaire, écho-endoscopie bronchique avec ponction (EBUS)": {
          noAllergy: "Pas d’antibioprophylaxie.",
          allergy:   "Pas d’antibioprophylaxie."
        },
        "Fibroscopie thérapeutique : Dilatation, laser, cryothérapie, bronchoscopie rigide": {
          noAllergy: "Pas d’antibioprophylaxie.",
          allergy:   "Pas d’antibioprophylaxie."
        },
        "Pose de stent ou prothèse trachéo-bronchique": {
          noAllergy: "Pas d’antibioprophylaxie.",
          allergy:   "Pas d’antibioprophylaxie."
        },
        "Pose de valves Zéphyr pour emphysème sévère": {
          noAllergy: "Amoxicilline/Clavulanate 1 g IVL 1 h avant + 1 g × 4/j PO pendant 48 h.",
          allergy:   "Pristinamycine 1 g PO 1 h avant + 1 g × 2/j pendant 48 h."
        }
      }
    },

    "Transplantation pulmonaire": {
      interventions: {
        "Transplantation pulmonaire": {
          noAllergy: "Adaptation selon le protocole local : épidémiologie, contexte infectieux, portage, colonisation.",
          allergy:   "Adaptation selon le protocole local : épidémiologie, contexte infectieux, portage, colonisation."
        }
      }
    }
  },

  // ======= Partie Vasculaire =======
  Vasculaire: {
    "Chirurgie artérielle ouverte": {
      interventions: {
        "Chirurgie artérielle périphérique ou aortique, avec ou sans mise en place de matériel": {
          noAllergy: "Céfazoline 2 g IVL → réinjection 1 g si durée > 4 h puis toutes les 4 h OU Céfuroxime 1,5 g IVL → réinjection 0,75 g si > 2 h puis toutes les 2 h.",
          allergy: "Vancomycine 20 mg/kg IVL ou Teicoplanine 12 mk/kg IVL."
        },
        "Chirurgie carotidienne avec mise en place de matériel": {
          noAllergy: "Céfazoline 2 g IVL → réinjection 1 g si durée > 4 h puis toutes les 4 h OU Céfuroxime 1,5 g IVL → réinjection 0,75 g si > 2 h puis toutes les 2 h.",
          allergy: "Vancomycine 20 mg/kg IVL ou Teicoplanine 12 mk/kg IVL."
        },
        "Chirurgie carotidienne sans mise en place de matériel": {
          noAllergy: "Pas d’antibioprophylaxie.",
          allergy: "Pas d’antibioprophylaxie."
        }
      }
    },

    "Chirurgie veineuse superficielle": {
      interventions: {
        "Varices sans abord chirurgical du Scarpa": {
          noAllergy: "Pas d’antibioprophylaxie.",
          allergy: "Pas d’antibioprophylaxie."
        },
        "Varices avec abord chirurgical du Scarpa": {
          noAllergy: "Céfazoline 2 g IVL → réinjection 1 g si durée > 4 h puis toutes les 4 h OU Céfuroxime 1,5 g IVL → réinjection 0,75 g si > 2 h puis toutes les 2 h.",
          allergy: "Vancomycine 20 mg/kg IVL ou Teicoplanine 12 mk/kg IVL."
        },
        "Toute chirurgie veineuse profonde ouverte": {
          noAllergy: "Céfazoline 2 g IVL → réinjection 1 g si durée > 4 h puis toutes les 4 h OU Céfuroxime 1,5 g IVL → réinjection 0,75 g si > 2 h puis toutes les 2 h.",
          allergy: "Vancomycine 20 mg/kg IVL ou Teicoplanine 12 mk/kg IVL."
        }
      }
    },

    "Fistule artério-veineuse (FAV)": {
      interventions: {
        "Création/reprise sans mise en place de matériel": {
          noAllergy: "Pas d’antibioprophylaxie.",
          allergy: "Pas d’antibioprophylaxie."
        },
        "Création/reprise avec mise en place de matériel": {
          noAllergy: "Céfazoline 2 g IVL → réinjection 1 g si durée > 4 h puis toutes les 4 h OU Céfuroxime 1,5 g IVL → réinjection 0,75 g si > 2 h puis toutes les 2 h.",
          allergy: "Vancomycine 20 mg/kg IVL ou Teicoplanine 12 mk/kg IVL."
        }
      }
    },

    "Procédures endovasculaires": {
      interventions: {
        "Stent couvert ou endoprothèse": {
          noAllergy: "Céfazoline 2 g IVL → réinjection 1 g si durée > 4 h puis toutes les 4 h OU Céfuroxime 1,5 g IVL → réinjection 0,75 g si > 2 h puis toutes les 2 h.",
          allergy: "Vancomycine 20 mg/kg IVL ou Teicoplanine 12 mk/kg IVL."
        },
        "Stent nu ou pas de matériel": {
          noAllergy: "Uniquement si facteurs de risque d'infection*: Céfazoline 2 g IVL → réinjection 1 g si durée > 4 h puis toutes les 4 h OU Céfuroxime 1,5 g IVL → réinjection 0,75 g si > 2 h puis toutes les 2 h (* Facteurs de risque d’infection : passage de guides à travers prothèses/stents préexistants, cathéter de radiologie interventionnelle en place > 6 h, réintervention < 7 jours, trouble trophique veineux/artériel ne nécessitant pas d’antibiothérapie).",
          allergy: "Uniquement si facteurs de risque d'infection*: Vancomycine 20 mg/kg IVL ou Teicoplanine 12 mk/kg IVL (* Facteurs de risque d’infection : passage de guides à travers prothèses/stents préexistants, cathéter de radiologie interventionnelle en place > 6 h, réintervention < 7 jours, trouble trophique veineux/artériel ne nécessitant pas d’antibiothérapie)."
        }
      }
    },

    "Amputation de membre": {
      interventions: {
        "Amputation hors contexte septique": {
          noAllergy: "Amoxicilline/Acide clavulanique 2 g IVL → réinjection 1 g si > 2 h puis toutes les 2 h ; puis 50 mg/kg/j en 3–4 injections IVL pendant 48 h.",
          allergy: "Clindamycine 600 mg IVL toutes les 6 h pendant 48 h + Gentamicine 6–7 mg/kg IVL."
        },
        "Amputation en contexte septique": {
          noAllergy: "Adaptation individuelle après avis infectiologique selon documentations et colonisations.",
          allergy: "Adaptation individuelle après avis infectiologique selon documentations et colonisations."
        }
      }
    }
  },

  // ======= Partie Neurochirurgie =======
  Neurochirurgie: {
    "Craniotomies": {
      interventions: {
        "Craniotomie": {
          noAllergy: "Céfazoline 2 g IVL, réinjection 1 g si durée > 4 h, puis toutes les 4 h.",
          allergy:   "Clindamycine 900 mg IVL."
        },
        "Ventriculoscopie, visiochirurgie intracrânienne": {
          noAllergy: "Céfazoline 2 g IVL, réinjection 1 g si durée > 4 h, puis toutes les 4 h.",
          allergy:   "Clindamycine 900 mg IVL."
        },
        "Biopsie cérébrale": {
          noAllergy: "Pas d’antibioprophylaxie.",
          allergy:   "Pas d’antibioprophylaxie."
        }
      }
    },

    "Chirurgie trans-sphénoïdale / trans-labyrinthique": {
      interventions: {
        "Chirurgie intracrânienne par voie trans-sphénoïdale ou trans-labyrinthique": {
          noAllergy: "Céfazoline 2 g IVL, réinjection 1 g si durée > 4 h, puis toutes les 4 h.",
          allergy:   "Clindamycine 900 mg IVL."
        }
      }
    },

    "Dérivation ventriculaire": {
      interventions: {
        "Dérivation ventriculaire externe (DVE) ou dérivation lombaire externe (DLE)": {
          noAllergy: "Aucune.",
          allergy:   "Pas d’antibioprophylaxie."
        },
        "Dérivation ventriculo-péritonéale (DVP) ou ventriculo-atriale (DVA)": {
          noAllergy: "Céfazoline 2 g IVL, réinjection 1 g si durée > 4 h, puis toutes les 4 h.",
          allergy:   "Clindamycine 900 mg IVL."
        }
      }
    },

    "Plaies/fractures cranio-cérébrales": {
      interventions: {
        "Plaies cranio-cérébrales pénétrantes ou non": {
          noAllergy: "Amoxicilline/Clavulanate 2 g IVL, réinjection 1 g si durée > 2 h, puis toutes les 2 h.",
          allergy:   "Triméthoprime/Sulfaméthoxazole 160 mg/800 mg IVL (pas de réinjection)."
        },
        "Fracture base du crâne avec ou sans otorrhée": {
          noAllergy: "Pas d’antibioprophylaxie.",
          allergy:   "Pas d’antibioprophylaxie."
        }
      }
    },

    "Chirurgie rachidienne": {
      interventions: {
        "Chirurgie instrumentée du rachis avec mise en place de matériel": {
          noAllergy: "Céfazoline 2 g IVL, réinjection 1 g si durée > 4 h, puis toutes les 4 h.",
          allergy:   "Clindamycine 900 mg IVL."
        },
        "Chirurgie du rachis sans mise en place de matériel (ou retrait de matériel)": {
          noAllergy: "Pas d’antibioprophylaxie.",
          allergy:   "Pas d’antibioprophylaxie."
        },
        "Chirurgie du rachis percutanée avec pose de matériel": {
          noAllergy: "Céfazoline 2 g IVL, réinjection 1 g si durée > 4 h, puis toutes les 4 h.",
          allergy:   "Clindamycine 900 mg IVL."
        }
      }
    },

    "Stimulation cérébrale / médullaire": {
      interventions: {
        "Pose d’électrode de stimulation cérébrale ou médullaire": {
          noAllergy: "Céfazoline 2 g IVL, réinjection 1 g si durée > 4 h, puis toutes les 4 h.",
          allergy:   "Clindamycine 900 mg IVL."
        },
        "Pose de pompe médullaire": {
          noAllergy: "Céfazoline 2 g IVL, réinjection 1 g si durée > 4 h, puis toutes les 4 h.",
          allergy:   "Clindamycine 900 mg IVL."
        },
        "Pose de stimulateur médullaire": {
          noAllergy: "Céfazoline 2 g IVL, réinjection 1 g si durée > 4 h, puis toutes les 4 h.",
          allergy:   "Clindamycine 900 mg IVL."
        }
      }
    },

    "Neuroradiologie interventionnelle": {
      interventions: {
        "Angiographie diagnostique": {
          noAllergy: "Pas d’antibioprophylaxie.",
          allergy:   "Pas d’antibioprophylaxie."
        },
        "Angiographie interventionnelle (pose de stent, endoprothèse ou embolisation)": {
          noAllergy: "Pas d’antibioprophylaxie.",
          allergy:   "Pas d’antibioprophylaxie."
        }
      }
    }
  },

  // ======= Partie Ophtalmologie =======
  Ophtalmologie: {
    "Chirurgie du globe oculaire": {
      interventions: {
        "Chirurgie de la cataracte (simple ou combinée)": {
          noAllergy: "Céfuroxime 1 mg/0,1 mL intra-oculaire — dose unique en fin d’intervention.",
          allergy:   "Moxifloxacine 0,480 mg/0,3 mL intra-oculaire — dose unique en fin d’intervention."
        },
        "Chirurgies de la cornée, du glaucome, de la rétine et du vitré": {
          noAllergy: "Pas d’antibioprophylaxie.",
          allergy:   "Pas d’antibioprophylaxie."
        },
        "Traumatismes à globe ouvert": {
          noAllergy: "Vancomycine 1 mg/0,1 mL + Ceftazidime 2,25 mg/0,1 mL — dose unique en fin d’intervention.",
          allergy:   "Vancomycine 1 mg/0,1 mL + Amikacine 0,2 mg/0,1 mL — dose unique en fin d’intervention."
        }
      }
    },

    "Chirurgie péri-oculaire": {
      interventions: {
        "Chirurgie des paupières": {
          noAllergy: "Pas d’antibioprophylaxie.",
          allergy:   "Pas d’antibioprophylaxie."
        },
        "Chirurgie des voies lacrymales": {
          noAllergy: "Pas d’antibioprophylaxie.",
          allergy:   "Pas d’antibioprophylaxie."
        },
        "Chirurgie du strabisme ou de l’orbite": {
          noAllergy: "Pas d’antibioprophylaxie.",
          allergy:   "Pas d’antibioprophylaxie."
        }
      }
    }
  },

  // ======= Partie ORL =======
  ORL: {
    "Chirurgie rhino-sinusienne": {
      interventions: {
        "Chirurgie sinusienne de polypose ou sinusite chronique (méatotomie, éthmo/sphénoïdectomie…)": {
          noAllergy: "Pas d’antibioprophylaxie.",
          allergy: "Pas d’antibioprophylaxie."
        },
        "Chirurgie rhinologique sans mise en place de greffon": {
          noAllergy: "Pas d’antibioprophylaxie.",
          allergy: "Pas d’antibioprophylaxie."
        },
        "Chirurgie rhinologique avec greffon ou reprise chirurgicale": {
          noAllergy: "Céfazoline 2 g IVL, 1 g si durée > 4 h, puis toutes les 4 h.",
          allergy: "Clindamycine 900 mg IVL."
        },
        "Chirurgie sinusienne tumorale": {
          noAllergy: "Céfazoline 2 g IVL, 1 g si durée > 4 h, puis toutes les 4 h.",
          allergy: "Clindamycine 900 mg IVL."
        }
      }
    },

    "Chirurgie carcinologique cervico-faciale": {
      interventions: {
        "Chirurgie carcinologique avec lambeau libre ou pédiculé cervico-facial": {
          noAllergy: "Amoxicilline/Clavulanate 2 g IVL, 1 g si durée > 2 h, puis toutes les 2 h. Poursuivre 1 g/6 h postopératoire pendant 48 h.",
          allergy: "Clindamycine 900 mg IVL + Gentamicine 6–7 mg/kg IVL."
        },
        "Chirurgie carcinologique sans reconstruction (laryngectomie, pharyngo-laryngectomie, etc.)": {
          noAllergy: "Amoxicilline/Clavulanate 2 g IVL, 1 g si durée > 2 h, puis toutes les 2 h.",
          allergy: "Clindamycine 900 mg IVL + Gentamicine 6–7 mg/kg IVL."
        }
      }
    },

    "Chirurgie amygdalienne et adénoïdectomie": {
      interventions: {
        "Amygdalectomie": {
          noAllergy: "Pas d’antibioprophylaxie.",
          allergy: "Pas d’antibioprophylaxie."
        },
        "Adénoïdectomie": {
          noAllergy: "Pas d’antibioprophylaxie.",
          allergy: "Pas d’antibioprophylaxie."
        }
      }
    },

    "Cervicotomies": {
      interventions: {
        "Curage cervical": {
          noAllergy: "Pas d’antibioprophylaxie.",
          allergy: "Pas d’antibioprophylaxie."
        },
        "Thyroïdectomie totale": {
          noAllergy: "Pas d’antibioprophylaxie.",
          allergy: "Pas d’antibioprophylaxie."
        },
        "Thyroïdectomie partielle": {
          noAllergy: "Pas d’antibioprophylaxie.",
          allergy: "Pas d’antibioprophylaxie."
        },
        "Parathyroïdectomie": {
          noAllergy: "Pas d’antibioprophylaxie.",
          allergy: "Pas d’antibioprophylaxie."
        },
        "Trachéotomie percutanée": {
          noAllergy: "Pas d’antibioprophylaxie.",
          allergy: "Pas d’antibioprophylaxie."
        },
        "Trachéotomie chirurgicale": {
          noAllergy: "Céfazoline 2 g IVL, 1 g si durée > 4 h, puis toutes les 4 h.",
          allergy: "Clindamycine 900 mg IVL."
        }
      }
    },

    "Chirurgie des glandes salivaires": {
      interventions: {
        "Chirurgie des glandes salivaires sans accès par la cavité bucco-pharyngée": {
          noAllergy: "Pas d’antibioprophylaxie.",
          allergy: "Pas d’antibioprophylaxie."
        },
        "Chirurgie des glandes salivaires avec accès par la cavité bucco-pharyngée": {
          noAllergy: "Amoxicilline/Clavulanate 2 g IVL, 1 g si durée > 2 h, puis toutes les 2 h.",
          allergy: "Clindamycine 900 mg IVL."
        }
      }
    },

    "Laryngoscopie en suspension": {
      interventions: {
        "Laryngoscopie en suspension diagnostique sans ou avec biopsies": {
          noAllergy: "Pas d’antibioprophylaxie.",
          allergy: "Pas d’antibioprophylaxie."
        },
        "Laryngoscopie en suspension avec geste thérapeutique (laser…)": {
          noAllergy: "Pas d’antibioprophylaxie.",
          allergy: "Pas d’antibioprophylaxie."
        }
      }
    },

    "Chirurgie otologique": {
      interventions: {
        "Chirurgie des tympans": {
          noAllergy: "Pas d’antibioprophylaxie.",
          allergy: "Pas d’antibioprophylaxie."
        },
        "Chirurgie des chaînes ossiculaires": {
          noAllergy: "Pas d’antibioprophylaxie.",
          allergy: "Pas d’antibioprophylaxie."
        },
        "Chirurgie de cholestéatome (non infecté)": {
          noAllergy: "Pas d’antibioprophylaxie.",
          allergy: "Pas d’antibioprophylaxie."
        },
        "Implants cochléaires": {
          noAllergy: "Céfazoline 2 g IVL, 1 g si durée > 4 h, puis toutes les 4 h.",
          allergy: "Clindamycine 900 mg IVL."
        }
      }
    }
  },

  // ======= Partie Maxillo-facial =======
  "Maxillo-facial": {
    "Chirurgie orthognatique": {
      interventions: {
        "Chirurgie orthognatique": {
          noAllergy: "Céfazoline 2 g IVL, 1 g si durée > 4 h, puis toutes les 4 h ; 1 g/6 h postop pendant 48 h.",
          allergy:   "Clindamycine 900 mg IVL."
        },
        "Ablation de matériel": {
          noAllergy: "Pas d’antibioprophylaxie.",
          allergy:   "Pas d’antibioprophylaxie."
        }
      }
    },

    "Chirurgie alvéolo-dentaire": {
      interventions: {
        "Extraction de dents incluses ou ectopiques": {
          noAllergy: "Amoxicilline 2 g IVL, 1 g si durée > 2 h, puis toutes les 2 h.",
          allergy:   "Clindamycine 900 mg IVL."
        },
        "Autres extraction dentaire": {
          noAllergy: "Pas d’antibioprophylaxie.",
          allergy:   "Pas d’antibioprophylaxie."
        },
        "Pose de matériel orthodontique": {
          noAllergy: "Pas d’antibioprophylaxie.",
          allergy:   "Pas d’antibioprophylaxie."
        },
        "Chirurgie apicale": {
          noAllergy: "Pas d’antibioprophylaxie.",
          allergy:   "Pas d’antibioprophylaxie."
        },
        "Chirurgie alvéolaire": {
          noAllergy: "Pas d’antibioprophylaxie.",
          allergy:   "Pas d’antibioprophylaxie."
        }
      }
    },

    "Traumatologie maxillo-faciale (fractures simples ou complexes, ouvertes ou non)": {
      interventions: {
        "Traumatologie maxillo-faciale": {
          noAllergy: "Amoxicilline/Clavulanate 2 g IVL, 1 g si durée > 2 h, puis toutes les 2 h ; 1 g/6 h postop pendant 24 h.",
          allergy:   "Céfazoline 2 g IVL."
        }
      }
    }
  },

  // ======= Partie Plastique =======
  Plastique: {
    "Chirurgie mammaire plastique ou carcinologique": {
      interventions: {
        "Augmentation mammaire sans pose d’implant (Lipofilling)": {
          noAllergy: "Uniquement si > 200 mL OU durée > 2 h : Céfazoline 2 g IVL (1 g si > 4 h puis toutes les 4 h)",
          allergy: "Uniquement si > 200 mL OU durée > 2 h : Clindamycine 900 mg IVL OU Vancomycine 20 mg/kg IVL OU Teicoplanine 12 mg/kg IVL"
        },
        "Augmentation mammaire avec pose d’implant": {
          noAllergy: "Céfazoline 2 g IVL (1 g si > 4 h puis toutes les 4 h).",
          allergy: "Clindamycine 900 mg IVL OU Vancomycine 20 mg/kg IVL OU Teicoplanine 12 mg/kg IVL."
        },
        "Gonflage expandeur": {
          noAllergy: "Pas d’antibioprophylaxie.",
          allergy: "Pas d’antibioprophylaxie."
        },
        "Réduction mammaire et exérèse de gynécomastie": {
          noAllergy: "Pas d’antibioprophylaxie.",
          allergy: "Pas d’antibioprophylaxie."
        },
        "Mastopexie pour ptose simple": {
          noAllergy: "Pas d’antibioprophylaxie.",
          allergy: "Pas d’antibioprophylaxie."
        },
        "Tumorectomie sans curage (ou ganglion sentinelle)": {
          noAllergy: "Pas d’antibioprophylaxie.",
          allergy: "Pas d’antibioprophylaxie."
        },
        "Tumorectomie avec curage": {
          noAllergy: "Céfazoline 2 g IVL (1 g si > 4 h puis toutes les 4 h).",
          allergy: "Clindamycine 900 mg IVL OU Vancomycine 20 mg/kg IVL OU Teicoplanine 12 mg/kg IVL."
        },
        "Mastectomie (avec ou sans curage, avec ou sans reconstruction immédiate)": {
          noAllergy: "Céfazoline 2 g IVL (1 g si > 4 h puis toutes les 4 h).",
          allergy: "Clindamycine 900 mg IVL OU Vancomycine 20 mg/kg IVL OU Teicoplanine 12 mg/kg IVL."
        }
      }
    },

    "Chirurgie de silhouette": {
      interventions: {
        "Brachioplastie": {
          noAllergy: "Pas d’antibioprophylaxie.",
          allergy: "Pas d’antibioprophylaxie."
        },
        "Cruroplastie": {
          noAllergy: "Céfazoline 2 g IVL (1 g si > 4 h puis toutes les 4 h).",
          allergy: "Clindamycine 900 mg IVL OU Vancomycine 20 mg/kg IVL OU Teicoplanine 12 mg/kg IVL."
        },
        "Abdominoplastie": {
          noAllergy: "Uniquement si durée > 2h: Céfazoline 2 g IVL (1 g si > 4 h puis toutes les 4 h)",
          allergy: "Uniquement si durée > 2h: Clindamycine 900 mg IVL OU Vancomycine 20 mg/kg IVL OU Teicoplanine 12 mg/kg IVL"
        },
        "Body-lift": {
          noAllergy: "Céfazoline 2 g IVL (1 g si > 4 h puis toutes les 4 h).",
          allergy: "Clindamycine 900 mg IVL OU Vancomycine 20 mg/kg IVL OU Teicoplanine 12 mg/kg IVL."
        },
        "Lipoaspiration sous AG ou AL": {
          noAllergy: "Pas d’antibioprophylaxie.",
          allergy: "Pas d’antibioprophylaxie."
        }
      }
    },

    "Chirurgie de la tête et du cou": {
      interventions: {
        "Otoplastie": {
          noAllergy: "Pas d’antibioprophylaxie.",
          allergy: "Pas d’antibioprophylaxie."
        },
        "Blépharoplastie": {
          noAllergy: "Pas d’antibioprophylaxie.",
          allergy: "Pas d’antibioprophylaxie."
        },
        "Lifting cervico-facial": {
          noAllergy: "Uniquement si durée > 2h: Céfazoline 2 g IVL (1 g si > 4 h puis toutes les 4 h)",
          allergy: "Uniquement si durée > 2h: Clindamycine 900 mg IVL OU Vancomycine 20 mg/kg IVL OU Teicoplanine 12 mg/kg IVL"
        },
        "Septo-rhinoplastie": {
          noAllergy: "Uniquement si greffon: Céfazoline 2 g IVL (1 g si > 4 h puis toutes les 4 h)",
          allergy: "Uniquement si greffon: Clindamycine 900 mg IVL OU Vancomycine 20 mg/kg IVL OU Teicoplanine 12 mg/kg IVL"
        },
        "Implants faciaux": {
          noAllergy: "Céfazoline 2 g IVL (1 g si > 4 h puis toutes les 4 h).",
          allergy: "Clindamycine 900 mg IVL OU Vancomycine 20 mg/kg IVL OU Teicoplanine 12 mg/kg IVL."
        },
        "Frontoplastie": {
          noAllergy: "Céfazoline 2 g IVL (1 g si > 4 h puis toutes les 4 h).",
          allergy: "Clindamycine 900 mg IVL OU Vancomycine 20 mg/kg IVL OU Teicoplanine 12 mg/kg IVL."
        },
        "Génioplastie (avec ou sans implants)": {
          noAllergy: "Amoxicilline/Clavulanate 2 g IVL (1 g si > 2 h puis toutes les 2 h).",
          allergy: "Gentamicine 6–7 mg/kg IVL + Métronidazole 1 g IVL."
        },
        "Chirurgie ortho-gnatique": {
          noAllergy: "Amoxicilline/Clavulanate 2 g IVL (1 g si > 2 h puis toutes les 2 h), puis 1 g/6 h pendant 48 h post-opératoire.",
          allergy: "Gentamicine 6–7 mg/kg IVL + Métronidazole 1 g IVL."
        },
        "Auto-greffe capillaire et réimplantation": {
          noAllergy: "Pas d’antibioprophylaxie.",
          allergy: "Pas d’antibioprophylaxie."
        },
        "Lambeau facial avec abord endo-oral": {
          noAllergy: "Amoxicilline/Clavulanate 2 g IVL (1 g si > 2 h puis toutes les 2 h).",
          allergy: "Gentamicine 6–7 mg/kg IVL + Métronidazole 1 g IVL."
        },
        "Lambeau facial avec abord extra-oral": {
          noAllergy: "Uniquement si durée > 2h: Céfazoline 2 g IVL (1 g si > 4 h puis toutes les 4 h)",
          allergy: "Uniquement si durée > 2h: Clindamycine 900 mg IVL OU Vancomycine 20 mg/kg IVL OU Teicoplanine 12 mg/kg IVL"
        }
      }
    },

    "Chirurgie générale et carcinologique (hors tête et cou)": {
      interventions: {
        "Transfert adipeux": {
          noAllergy: "Uniquement si > 200mL OU durée > 2h: Céfazoline 2 g IVL (1 g si > 4 h puis toutes les 4 h)",
          allergy: "Uniquement si > 200mL OU durée > 2h: Clindamycine 900 mg IVL OU Vancomycine 20 mg/kg IVL OU Teicoplanine 12 mg/kg IVL"
        },
        "Greffe cutanée (hors brûlure)": {
          noAllergy: "Pas d’antibioprophylaxie.",
          allergy: "Pas d’antibioprophylaxie."
        },
        "Pose de substitut dermique": {
          noAllergy: "Céfazoline 2 g IVL (1 g si > 4 h puis toutes les 4 h).",
          allergy: "Clindamycine 900 mg IVL OU Vancomycine 20 mg/kg IVL OU Teicoplanine 12 mg/kg IVL."
        },
        "Pose de prothèse pour expansion cutanée": {
          noAllergy: "Céfazoline 2 g IVL (1 g si > 4 h puis toutes les 4 h).",
          allergy: "Clindamycine 900 mg IVL OU Vancomycine 20 mg/kg IVL OU Teicoplanine 12 mg/kg IVL."
        },
        "Lambeaux libres microchirurgicaux ou pédiculés": {
          noAllergy: "Céfazoline 2 g IVL (1 g si > 4 h puis toutes les 4 h).",
          allergy: "Clindamycine 900 mg IVL OU Vancomycine 20 mg/kg IVL OU Teicoplanine 12 mg/kg IVL."
        },
        "Plasties et tumorectomies cutanées": {
          noAllergy: "Pas d’antibioprophylaxie.",
          allergy: "Pas d’antibioprophylaxie."
        },
        "Curage ganglionnaire inguinal ou axillaire seul (ou ganglion sentinelle)": {
          noAllergy: "Pas d’antibioprophylaxie.",
          allergy: "Pas d’antibioprophylaxie."
        }
      }
    },

    "Chirurgie d’affirmation de genre": {
      interventions: {
        "Prothèses péniennes et testiculaires": {
          noAllergy: "Céfazoline 2 g IVL (1 g si > 4 h puis toutes les 4 h).",
          allergy: "Clindamycine 900 mg IVL OU Vancomycine 20 mg/kg IVL OU Teicoplanine 12 mg/kg IVL."
        },
        "Vaginoplasties sans segment intestinal": {
          noAllergy: "Amoxicilline/Clavulanate 2 g IVL (1 g si > 2 h puis toutes les 2 h).",
          allergy: "Gentamicine 6–7 mg/kg IVL + Métronidazole 1 g IVL."
        },
        "Vaginoplasties avec création de néo-vagin par segment intestinal": {
          noAllergy:
            "La veille au soir : Tobramycine 200 mg + Métronidazole 1 g PO<br><br>Per-opératoire : Céfoxitine 2 g IVL (puis 1 g si durée > 2 h puis toutes les 2 h)",
          allergy: "Gentamicine 6–7 mg/kg IVL + Métronidazole 1 g IVL."
        },
        "Phalloplastie": {
          noAllergy: "Céfazoline 2 g IVL (1 g si > 4 h puis toutes les 4 h).",
          allergy: "Clindamycine 900 mg IVL OU Vancomycine 20 mg/kg IVL OU Teicoplanine 12 mg/kg IVL."
        },
        "Métoïdioplastie": {
          noAllergy: "Céfazoline 2 g IVL (1 g si > 4 h puis toutes les 4 h).",
          allergy: "Clindamycine 900 mg IVL OU Vancomycine 20 mg/kg IVL OU Teicoplanine 12 mg/kg IVL."
        },
        "Chondro-laryngoplastie": {
          noAllergy: "Pas d’antibioprophylaxie.",
          allergy: "Pas d’antibioprophylaxie."
        }
      }
    },

    "Chirurgie du patient brûlé": {
      interventions: {
        "Pansement initial ou secondaire sans geste chirurgical": {
          noAllergy: "Pas d’antibioprophylaxie.",
          allergy: "Pas d’antibioprophylaxie."
        },
        "Escarrotomie": {
          noAllergy: "Pas d’antibioprophylaxie.",
          allergy: "Pas d’antibioprophylaxie."
        },
        "Aponévrotomie": {
          noAllergy: "Pas d’antibioprophylaxie.",
          allergy: "Pas d’antibioprophylaxie."
        },
        "Excision de brûlure avec ou sans couverture temporaire": {
          noAllergy: "Pas d’antibioprophylaxie.",
          allergy: "Pas d’antibioprophylaxie."
        },
        "Autogreffe cutanée": {
          noAllergy: "Pas d’antibioprophylaxie (à discuter selon colonisations/infections).",
          allergy: "Pas d’antibioprophylaxie (à discuter selon colonisations/infections)."
        },
        "Greffe de matrice cutanée artificielle": {
          noAllergy: "Céfazoline 2 g IVL (1 g si > 4 h puis toutes les 4 h).",
          allergy: "Clindamycine 900 mg IVL OU Vancomycine 20 mg/kg IVL OU Teicoplanine 12 mg/kg IVL."
        },
        "Amputation": {
          noAllergy: "Amoxicilline/Clavulanate 2 g IVL (1 g si > 2 h puis toutes les 2 h).",
          allergy: "Gentamicine 6–7 mg/kg IVL + Métronidazole 1 g IVL."
        },
        "Lambeaux à pédicule ou vascularisation transitoire": {
          noAllergy: "Antibioprophylaxie adaptée à la flore et au risque du patient (avis infectieux).",
          allergy: "Antibioprophylaxie adaptée à la flore et au risque du patient (avis infectieux)."
        }
      }
    }
  },
};

// ===== Page Antibioprophylaxies per-opératoire (formulaire à 3 sélections)
function renderAntibioproForm() {
  const $app = document.getElementById("app");

  // Libellés longs demandés (clé interne -> libellé affiché)
  const SPEC_ORDER = [
    { key: "Digestif",       label: "Chirurgie viscérale et digestive" },
    { key: "Orthopédie",     label: "Chirurgie orthopédique et traumatologique" },
    { key: "Urologie",       label: "Chirurgie urologique" },
    { key: "Gynécologie",    label: "Chirurgie gynécologique et obstétricale" },
    { key: "Cardiaque",      label: "Chirurgie cardiaque et cardiologie interventionnelle" },
    { key: "Thoracique",     label: "Chirurgie thoracique" },
    { key: "Vasculaire",     label: "Chirurgie vasculaire" },
    { key: "Neurochirurgie", label: "Neurochirurgie" },
    { key: "Ophtalmologie",  label: "Chirurgie ophtalmologique" },
    { key: "ORL",            label: "Chirurgie ORL" },
    { key: "Maxillo-facial", label: "Chirurgie maxillo-faciale" },
    { key: "Plastique",      label: "Chirurgie plastique et reconstructrice" }
  ].filter(s => ANTIBIOPRO_DATA[s.key]); // ne garder que celles présentes dans les données

  // HTML
  $app.innerHTML = `
    <div class="page page-antibiopro">
      <span class="title-badge">Antibioprophylaxies per-opératoire</span>

      <div class="card hero">
        <img src="./img/antibioprophylaxie.png" alt="Antibioprophylaxie per-opératoire" onerror="this.style.display='none'">
      </div>

      <form class="form" onsubmit="return false;">
        <fieldset>
          <legend>Spécialité chirurgicale</legend>
          <select id="sel-specialite">
            <option value="">— Choisir —</option>
            ${SPEC_ORDER.map(s => `<option value="${s.key}">${s.label}</option>`).join("")}
          </select>
        </fieldset>

        <fieldset>
          <legend>Type d’intervention</legend>
          <select id="sel-type" disabled>
            <option value="">— Choisir —</option>
          </select>
        </fieldset>

        <fieldset>
          <legend>Intervention</legend>
          <select id="sel-intervention" disabled>
            <option value="">— Choisir —</option>
          </select>
        </fieldset>

        <label class="checkbox">
          <input type="checkbox" id="chk-allergie">
          Allergie aux β-lactamines
        </label>

        <div class="actions">
          <button class="btn outline" id="btn-run">Antibioprophylaxie recommandée</button>
          <button class="btn ghost" type="button" onclick="history.back()">← Retour</button>
        </div>
      </form>

      <div id="result" class="result" style="display:none;"></div>
      <div id="result-note" class="muted" style="display:none; margin-top:.5rem;">
        <small>Doubler la posologie de β-lactamines uniquement si IMC > 50 kg/m²</small>
      </div>
    </div>
  `;

  // Références DOM
  const $selSpec   = document.getElementById("sel-specialite");
  const $selType   = document.getElementById("sel-type");
  const $selInterv = document.getElementById("sel-intervention");
  const $chkAllerg = document.getElementById("chk-allergie");
  const $btnRun    = document.getElementById("btn-run");
  const $res       = document.getElementById("result");
  const $note      = document.getElementById("result-note");

  // Helpers
  const resetType = () => {
    $selType.innerHTML = `<option value="">— Choisir —</option>`;
    $selType.disabled = true;
  };
  const resetInterv = () => {
    $selInterv.innerHTML = `<option value="">— Choisir —</option>`;
    $selInterv.disabled = true;
  };
  const clearResult = () => {
    $res.style.display = "none";
    $res.innerHTML = "";
    $note.style.display = "none";
  };

  // Spécialité -> Types
  $selSpec.addEventListener("change", () => {
    clearResult();
    resetType();
    resetInterv();

    const specKey = $selSpec.value;
    if (!specKey) return;

    const typesObj = ANTIBIOPRO_DATA[specKey] || {};
    const types = Object.keys(typesObj);

    types.forEach(t => {
      const opt = document.createElement("option");
      opt.value = t;
      opt.textContent = t;
      $selType.appendChild(opt);
    });
    $selType.disabled = types.length === 0;
  });

  // Type -> Interventions
  $selType.addEventListener("change", () => {
    clearResult();
    resetInterv();

    const specKey = $selSpec.value;
    const type = $selType.value;
    if (!specKey || !type) return;

    const intervsObj = ANTIBIOPRO_DATA[specKey]?.[type]?.interventions || {};
    const intervs = Object.keys(intervsObj);

    intervs.forEach(name => {
      const opt = document.createElement("option");
      opt.value = name;
      opt.textContent = name;
      $selInterv.appendChild(opt);
    });
    $selInterv.disabled = intervs.length === 0;
  });

  // Bouton : afficher la recommandation
$btnRun.addEventListener("click", () => {
  const specKey = $selSpec.value;
  const type    = $selType.value;
  const interv  = $selInterv.value;

  if (!specKey || !type || !interv) {
    $res.style.display = "block";
    $res.innerHTML = `
      <div class="info-card"><div class="info-content">
        Merci de sélectionner <strong>Spécialité</strong>, <strong>Type</strong> et <strong>Intervention</strong>.
      </div></div>`;
    $note.style.display = "none";
    return;
  }

  const node = ANTIBIOPRO_DATA[specKey]?.[type]?.interventions?.[interv];
  const text = node ? ($chkAllerg.checked ? (node.allergy || "—") : (node.noAllergy || "—")) : null;

  $res.style.display = "block";
  $res.innerHTML = text ? `
    <div class="info-card">
      <div class="info-content">${text}</div>
    </div>` : `
    <div class="info-card"><div class="info-content">
      Aucune recommandation trouvée pour cette intervention.
    </div></div>`;

  // 🔹 Ajout conditionnel uniquement pour "Chirurgie cardiaque et cardiologie interventionnelle"
  if (text && specKey === "Cardiaque") {
    $res.innerHTML += `
      <div class="muted" style="margin-top: 0.75rem; font-size: 0.9rem; line-height: 1.4;">
        <em>Si chirurgie cardiaque et portage nasal de <i>S. aureus</i> : décolonisation par mupirocine 2 % (2×/j) + décontamination oropharyngée à la chlorhexidine. Débuter ≥ 48 h avant la chirurgie (durée totale : 5–7 j).</em>
      </div>
    `;
  }

  $note.style.display = text ? "block" : "none";
});
}
  
function renderNotFound(){
  $app.innerHTML = h("card", `<strong>Page introuvable</strong>`);
}


function decideDuree(infection, germe){
  if (infection==="Pneumonies" && germe==="Autres") return "5–7 jours (à affiner selon documentation).";
  return "";
}
