export interface ConstitutionSection {
  id: string;
  number: string;
  title: string;
  heading: string;
  rawHeading: string;
  paragraphs: string[];
}

export interface ConstitutionChapter {
  id: string;
  eyebrow: string;
  title: string;
  rawHeading: string;
  paragraphs: string[];
  sections: ConstitutionSection[];
}

export interface ConstitutionDocument {
  title: string;
  subtitleLines: string[];
  pageCount: number;
  chapters: ConstitutionChapter[];
}

export const CONSTITUTION_DOCUMENT: ConstitutionDocument = {
  "title": "The Constitution of the Goodfellows Republic",
  "subtitleLines": [
    "The Supreme Law of the Goodfellows Republic",
    "“Forever Green, Forever Free.”"
  ],
  "pageCount": 27,
  "chapters": [
    {
      "id": "preamble",
      "eyebrow": "",
      "title": "Preamble",
      "rawHeading": "PREAMBLE",
      "paragraphs": [
        "We, the people and citizens of the Goodfellows Republic, recognizing the establishment of our national community, the necessity of lawful government, the importance of public order, and the enduring principles upon which our Republic is founded, hereby establish this Constitution as the supreme instrument governing the institutions, powers, responsibilities, and administration of our nation.",
        "Acknowledging the founding role of the Chancellor in the establishment and continued existence of the Republic, affirming the permanence of the founding office under this Constitution, and recognizing that public authority must be exercised according to established law, we establish a constitutional order in which governmental responsibilities are defined, public institutions are regulated, and the conduct of public officials is subject to legal requirements.",
        "We affirm our commitment to democratic participation through regular parliamentary elections, lawful citizenship, public deliberation, representative government, and the administration of public affairs in accordance with this Constitution.",
        "We recognize the importance of national security, the protection of our digital infrastructure, the preservation of public order, and the defence of the Republic against credible threats to its lawful institutions.",
        "We further affirm the importance of individual dignity, equality before the law, fair proceedings, freedom of expression within the limits established by law, and the protection of citizens against arbitrary punishment.",
        "For the purpose of securing the continuity, stability, independence, and orderly administration of the Goodfellows Republic, this Constitution is hereby established as the fundamental law of the nation."
      ],
      "sections": []
    },
    {
      "id": "article-1",
      "eyebrow": "Article 1",
      "title": "The Republic and Its Constitutional Order",
      "rawHeading": "ARTICLE 1, THE REPUBLIC AND ITS CONSTITUTIONAL ORDER",
      "paragraphs": [],
      "sections": [
        {
          "id": "section-1-1",
          "number": "1.1",
          "title": "Establishment of the Republic",
          "heading": "Section 1.1 — Establishment of the Republic",
          "rawHeading": "Section 1.1, Establishment of the Republic",
          "paragraphs": [
            "1. The nation shall be known officially as the Goodfellows Republic, hereinafter referred to as the Republic or Goodfellows.",
            "2. The Republic shall operate as a constitutional republic administered primarily through its officially recognized Discord community and any additional platforms formally recognized by the government.",
            "3. The Republic shall maintain its own constitutional institutions, legislative procedures, public offices, administrative agencies, and system of citizenship.",
            "4. The Republic shall exercise its internal governmental authority within the practical limitations of the platforms upon which it operates."
          ]
        },
        {
          "id": "section-1-2",
          "number": "1.2",
          "title": "Supremacy of the Constitution",
          "heading": "Section 1.2 — Supremacy of the Constitution",
          "rawHeading": "Section 1.2, Supremacy of the Constitution",
          "paragraphs": [
            "1. This Constitution shall constitute the supreme law of the Republic.",
            "2. All legislation, executive orders, ministerial regulations, judicial procedures, and administrative decisions shall conform to this Constitution, subject to the special provisions expressly governing the Founding Chancellor.",
            "3. Any governmental measure inconsistent with this Constitution shall be invalid to the extent of the inconsistency, except where a specific constitutional provision expressly establishes a different rule of precedence.",
            "4. All public officials shall be bound by the constitutional provisions applicable to their respective offices.",
            "5. No minister, parliamentary representative, judge, agency, or other public institution may exercise powers that have not been granted by this Constitution or by legislation enacted in accordance with it."
          ]
        },
        {
          "id": "section-1-3",
          "number": "1.3",
          "title": "National Principles",
          "heading": "Section 1.3 — National Principles",
          "rawHeading": "Section 1.3, National Principles",
          "paragraphs": [
            "The Republic shall be founded upon the principles of democracy, constitutional government, equality before the law, public accountability, national sovereignty, individual liberty, public order, governmental transparency, and the lawful exercise of public authority."
          ]
        },
        {
          "id": "section-1-4",
          "number": "1.4",
          "title": "National Symbols",
          "heading": "Section 1.4 — National Symbols",
          "rawHeading": "Section 1.4, National Symbols",
          "paragraphs": [
            "1. The national motto shall be “Forever Green, Forever Free.”",
            "2. The national anthem shall be known as *Anthem of The Goodfellows*.",
            "3. The national flag shall be the officially recognized flag of the Goodfellows Republic.",
            "4. English shall be the official language of the Republic.",
            "5. Additional languages may be used in designated community channels and official communications, provided that English remains the authoritative language of constitutional and legislative instruments unless otherwise provided by law.",
            "6. The Republic shall not be required to designate a capital city or capital district."
          ]
        },
        {
          "id": "section-1-5",
          "number": "1.5",
          "title": "Legal Scope",
          "heading": "Section 1.5 — Legal Scope",
          "rawHeading": "Section 1.5, Legal Scope",
          "paragraphs": [
            "1. This Constitution shall govern the Republic's officially recognized institutions, public offices, government channels, electoral procedures, and other designated governmental activities.",
            "2. Governmental authority shall not extend beyond the practical or legal powers available to the Republic within the relevant platform.",
            "3. Nothing in this Constitution shall be interpreted as overriding applicable Discord Terms of Service, platform safety requirements, or other binding platform rules."
          ]
        }
      ]
    },
    {
      "id": "article-2",
      "eyebrow": "Article 2",
      "title": "Citizenship and Immigration",
      "rawHeading": "ARTICLE 2, CITIZENSHIP AND IMMIGRATION",
      "paragraphs": [],
      "sections": [
        {
          "id": "section-2-1",
          "number": "2.1",
          "title": "Immigration Status",
          "heading": "Section 2.1 — Immigration Status",
          "rawHeading": "Section 2.1, Immigration Status",
          "paragraphs": [
            "1. Individuals joining the Goodfellows community shall initially be classified as immigrants.",
            "2. An immigrant shall not automatically acquire the full political rights reserved to citizens.",
            "3. Immigrants may participate in ordinary community discussions, subject to applicable community rules and any lawful restrictions governing access to particular governmental institutions."
          ]
        },
        {
          "id": "section-2-2",
          "number": "2.2",
          "title": "Acquisition of Citizenship",
          "heading": "Section 2.2 — Acquisition of Citizenship",
          "rawHeading": "Section 2.2, Acquisition of Citizenship",
          "paragraphs": [
            "1. Citizenship shall be acquired through registration under the procedure established by the government.",
            "2. The government may establish an official citizenship registry, registration channel, application procedure, or equivalent administrative mechanism.",
            "3. Upon successful registration, an immigrant shall become a citizen of the Republic.",
            "4. Citizenship registration requirements shall be published and administered consistently.",
            "5. No minister or administrative official may arbitrarily deny a properly completed registration contrary to the applicable law."
          ]
        },
        {
          "id": "section-2-3",
          "number": "2.3",
          "title": "Rights of Citizens",
          "heading": "Section 2.3 — Rights of Citizens",
          "rawHeading": "Section 2.3, Rights of Citizens",
          "paragraphs": [
            "Citizens shall possess the political rights established by this Constitution, including the right to vote in parliamentary elections, participate in authorized political activity, petition the government, and seek public office subject to lawful eligibility requirements."
          ]
        },
        {
          "id": "section-2-4",
          "number": "2.4",
          "title": "Duties of Citizens",
          "heading": "Section 2.4 — Duties of Citizens",
          "rawHeading": "Section 2.4, Duties of Citizens",
          "paragraphs": [
            "Citizens shall be expected to comply with applicable laws, respect the constitutional institutions of the Republic, refrain from unlawful interference with public administration, and cooperate with legitimate security procedures."
          ]
        },
        {
          "id": "section-2-5",
          "number": "2.5",
          "title": "Loss or Suspension of Citizenship Rights",
          "heading": "Section 2.5 — Loss or Suspension of Citizenship Rights",
          "rawHeading": "Section 2.5, Loss or Suspension of Citizenship Rights",
          "paragraphs": [
            "1. Citizenship rights may be restricted only under a lawful procedure consistent with this Constitution.",
            "2. No citizen shall lose citizenship or voting rights merely because they criticize a government policy or express a peaceful disagreement with a public official.",
            "3. Where a sanction affects citizenship or political participation, the affected person shall be informed of the grounds and afforded an appropriate opportunity to contest the decision.",
            "4. Permanent exclusion from citizenship shall require a specific legal basis and shall remain subject to applicable review procedures."
          ]
        }
      ]
    },
    {
      "id": "article-3",
      "eyebrow": "Article 3",
      "title": "Fundamental Rights and Freedoms",
      "rawHeading": "ARTICLE 3, FUNDAMENTAL RIGHTS AND FREEDOMS",
      "paragraphs": [],
      "sections": [
        {
          "id": "section-3-1",
          "number": "3.1",
          "title": "Equality Before the Law",
          "heading": "Section 3.1 — Equality Before the Law",
          "rawHeading": "Section 3.1, Equality Before the Law",
          "paragraphs": [
            "1. Every citizen shall be entitled to equal protection under the laws of the Republic.",
            "2. Public officials shall not discriminate arbitrarily between persons in the administration of governmental duties.",
            "3. The exercise of lawful political authority shall not exempt an official from the ordinary legal requirements applicable to that office."
          ]
        },
        {
          "id": "section-3-2",
          "number": "3.2",
          "title": "Freedom of Expression",
          "heading": "Section 3.2 — Freedom of Expression",
          "rawHeading": "Section 3.2, Freedom of Expression",
          "paragraphs": [
            "1. Citizens shall enjoy freedom of speech and expression within the limits established by this Constitution and applicable law.",
            "2. Peaceful criticism of governmental policies, administrative decisions, ministers, legislation, and public institutions shall be permitted.",
            "3. Criticism of the Chancellor shall be permitted within the lawful limits of expression established by this Constitution.",
            "4. Disagreement with a governmental decision shall not, by itself, constitute proof of misconduct.",
            "5. This Article shall not protect threats, targeted harassment, deliberate disclosure of private information, unlawful interference with official systems, or other conduct prohibited by applicable law."
          ]
        },
        {
          "id": "section-3-3",
          "number": "3.3",
          "title": "Freedom of Political Belief",
          "heading": "Section 3.3 — Freedom of Political Belief",
          "rawHeading": "Section 3.3, Freedom of Political Belief",
          "paragraphs": [
            "Citizens may hold and express political opinions, discuss public policy, propose lawful reforms, and participate in authorized political discussions, provided that such activities comply with the constitutional framework governing political organization."
          ]
        },
        {
          "id": "section-3-4",
          "number": "3.4",
          "title": "Political Organization",
          "heading": "Section 3.4 — Political Organization",
          "rawHeading": "Section 3.4, Political Organization",
          "paragraphs": [
            "1. The Goodfellows political party shall be the sole lawful political party of the Republic.",
            "2. The establishment of competing political parties shall be prohibited.",
            "3. Organizations created principally to overthrow the constitutional order, unlawfully seize governmental authority, or forcibly remove the Founding Chancellor shall be prohibited.",
            "4. The peaceful expression of criticism, policy disagreement, or proposals for administrative reform shall not automatically constitute membership in a prohibited organization.",
            "5. The prohibition of competing political parties shall not authorize arbitrary punishment of individuals without an identifiable violation of applicable law."
          ]
        },
        {
          "id": "section-3-5",
          "number": "3.5",
          "title": "Freedom of Association and Assembly",
          "heading": "Section 3.5 — Freedom of Association and Assembly",
          "rawHeading": "Section 3.5, Freedom of Association and Assembly",
          "paragraphs": [
            "1. Citizens may participate in lawful community groups, public discussions, educational associations, cultural organizations, and other activities permitted by law.",
            "2. Peaceful assemblies and public petitions may be organized in accordance with published procedures.",
            "3. Associations whose primary purpose is to commit unlawful acts, conduct prohibited political organization, or interfere unlawfully with the Republic's institutions may be restricted under applicable law."
          ]
        },
        {
          "id": "section-3-6",
          "number": "3.6",
          "title": "Privacy and Personal Information",
          "heading": "Section 3.6 — Privacy and Personal Information",
          "rawHeading": "Section 3.6, Privacy and Personal Information",
          "paragraphs": [
            "1. Government institutions shall handle personal information responsibly and only for legitimate administrative, security, or legal purposes.",
            "2. Access to private information shall be limited to officials who require it for authorized duties.",
            "3. The government shall not disclose private information publicly without lawful justification.",
            "4. Security investigations shall be limited to information reasonably relevant to the matter being investigated.",
            "5. Nothing in this Article shall prohibit the lawful collection of information necessary to protect official infrastructure or investigate credible security threats."
          ]
        },
        {
          "id": "section-3-7",
          "number": "3.7",
          "title": "Right to Petition",
          "heading": "Section 3.7 — Right to Petition",
          "rawHeading": "Section 3.7, Right to Petition",
          "paragraphs": [
            "Citizens may submit petitions, complaints, proposals, and requests for review to the appropriate government institution. The receiving institution shall consider petitions falling within its jurisdiction and may establish reasonable procedures for their submission and resolution."
          ]
        },
        {
          "id": "section-3-8",
          "number": "3.8",
          "title": "Access to Public Information",
          "heading": "Section 3.8 — Access to Public Information",
          "rawHeading": "Section 3.8, Access to Public Information",
          "paragraphs": [
            "1. Government legislation, parliamentary decisions, election results, and official appointments shall ordinarily be publicly accessible.",
            "2. Information may be withheld where disclosure would reasonably threaten security, compromise an active investigation, violate privacy, or reveal protected administrative credentials.",
            "3. Decisions to withhold information shall be based on a legitimate reason rather than solely on political embarrassment or criticism."
          ]
        },
        {
          "id": "section-3-9",
          "number": "3.9",
          "title": "Due Process",
          "heading": "Section 3.9 — Due Process",
          "rawHeading": "Section 3.9, Due Process",
          "paragraphs": [
            "1. No person shall be subjected to a governmental sanction without an identifiable legal or constitutional basis.",
            "2. A person accused of violating the law shall be informed of the allegations against them.",
            "3. The accused shall have a reasonable opportunity to present evidence, respond to allegations, and contest relevant findings.",
            "4. Proceedings shall be conducted by an institution or official with lawful authority over the matter.",
            "5. Decisions shall be recorded with sufficient reasons to explain the outcome.",
            "6. Appropriate appeal procedures shall be available as established by this Constitution and applicable legislation."
          ]
        },
        {
          "id": "section-3-10",
          "number": "3.10",
          "title": "Limits on Fundamental Rights",
          "heading": "Section 3.10 — Limits on Fundamental Rights",
          "rawHeading": "Section 3.10, Limits on Fundamental Rights",
          "paragraphs": [
            "1. Rights established by this Article may be restricted only in accordance with law, for a legitimate purpose, and to the extent reasonably necessary and proportionate to that purpose.",
            "2. Any restriction shall be interpreted narrowly.",
            "3. The government shall distinguish between peaceful political expression and conduct that independently violates an applicable law.",
            "4. During a constitutionally authorized emergency, specified provisions may be temporarily suspended in accordance with Article 15."
          ]
        }
      ]
    },
    {
      "id": "article-4",
      "eyebrow": "Article 4",
      "title": "The Founding Chancellor",
      "rawHeading": "ARTICLE 4, THE FOUNDING CHANCELLOR",
      "paragraphs": [],
      "sections": [
        {
          "id": "section-4-1",
          "number": "4.1",
          "title": "Establishment of the Office",
          "heading": "Section 4.1 — Establishment of the Office",
          "rawHeading": "Section 4.1, Establishment of the Office",
          "paragraphs": [
            "1. The office of Chancellor shall constitute the highest executive office of the Republic.",
            "2. The individual who founded the Republic shall be recognized as its Founding Chancellor.",
            "3. The Founding Chancellor shall hold office permanently under this Constitution.",
            "4. The permanence of the Founding Chancellor's tenure shall be an express constitutional principle and shall not be subject to ordinary elections, parliamentary votes of no confidence, recall elections, impeachment, or judicial removal."
          ]
        },
        {
          "id": "section-4-2",
          "number": "4.2",
          "title": "Constitutional Status",
          "heading": "Section 4.2 — Constitutional Status",
          "rawHeading": "Section 4.2, Constitutional Status",
          "paragraphs": [
            "1. The Founding Chancellor shall exercise executive authority in accordance with this Constitution.",
            "2. The permanence of the office shall not eliminate the applicability of constitutional duties expressly imposed upon the Chancellor.",
            "3. The Chancellor shall be expected to comply with binding lawful judicial orders.",
            "4. Governmental institutions shall interpret the Constitution in a manner that preserves the permanent tenure of the Founding Chancellor while giving effect to other constitutional obligations wherever possible.",
            "5. The special constitutional status of the Founding Chancellor shall not automatically extend to any successor or other officeholder."
          ]
        },
        {
          "id": "section-4-3",
          "number": "4.3",
          "title": "Executive Authority",
          "heading": "Section 4.3 — Executive Authority",
          "rawHeading": "Section 4.3, Executive Authority",
          "paragraphs": [
            "The Chancellor shall possess authority to:",
            "1. Direct the general policy of the government.",
            "2. Appoint and dismiss ministers.",
            "3. Establish, reorganize, combine, and abolish ministries.",
            "4. Issue executive orders within the scope of constitutional and statutory authority.",
            "5. Propose legislation to Parliament.",
            "6. Sign legislation into law.",
            "7. Return legislation to Parliament for reconsideration.",
            "8. Exercise a legislative veto where permitted by this Constitution.",
            "9. Represent the Republic in external relations.",
            "10. Establish administrative agencies in accordance with this Constitution.",
            "11. Nominate and appoint judges under Article 9.",
            "12. Declare a state of emergency under Article 15.",
            "13. Dissolve Parliament and call elections in accordance with the applicable constitutional procedure.",
            "14. Approve parliamentary procedural arrangements and appoint the Speaker of Parliament.",
            "15. Direct the government's internal administrative priorities.",
            "16. Exercise any additional executive powers expressly granted by legislation consistent with this Constitution."
          ]
        },
        {
          "id": "section-4-4",
          "number": "4.4",
          "title": "Limits on Executive Authority",
          "heading": "Section 4.4 — Limits on Executive Authority",
          "rawHeading": "Section 4.4, Limits on Executive Authority",
          "paragraphs": [
            "1. The Chancellor shall not exercise a power that has been expressly reserved to another institution, except where this Constitution provides otherwise.",
            "2. Executive orders shall not ordinarily contradict valid legislation.",
            "3. The Chancellor shall comply with lawful judicial orders in accordance with Section 4.2.",
            "4. The Chancellor's permanent tenure shall not be interpreted as granting unlimited authority to disregard every other provision of this Constitution.",
            "5. The government shall maintain records of significant executive decisions."
          ]
        },
        {
          "id": "section-4-5",
          "number": "4.5",
          "title": "Legislative Participation",
          "heading": "Section 4.5 — Legislative Participation",
          "rawHeading": "Section 4.5, Legislative Participation",
          "paragraphs": [
            "The Chancellor may introduce legislative proposals, request reconsideration of bills, approve legislation, or exercise a veto in accordance with Article 7."
          ]
        },
        {
          "id": "section-4-6",
          "number": "4.6",
          "title": "Voluntary Resignation and Incapacity",
          "heading": "Section 4.6 — Voluntary Resignation and Incapacity",
          "rawHeading": "Section 4.6, Voluntary Resignation and Incapacity",
          "paragraphs": [
            "1. The Founding Chancellor's permanent tenure shall not require the Chancellor to remain in office against their own voluntary decision to resign.",
            "2. Any voluntary resignation shall be formally recorded.",
            "3. Temporary inactivity shall not automatically constitute resignation or removal.",
            "4. The procedures governing the temporary exercise of executive duties during absence or incapacity shall be established by the applicable succession provisions."
          ]
        }
      ]
    },
    {
      "id": "article-5",
      "eyebrow": "Article 5",
      "title": "The Deputy Executive and Succession",
      "rawHeading": "ARTICLE 5, THE DEPUTY EXECUTIVE AND SUCCESSION",
      "paragraphs": [],
      "sections": [
        {
          "id": "section-5-1",
          "number": "5.1",
          "title": "Designated Succession",
          "heading": "Section 5.1 — Designated Succession",
          "rawHeading": "Section 5.1, Designated Succession",
          "paragraphs": [
            "1. In the event that the Chancellor is temporarily unable to perform official duties, the Minister of Defence shall be the first designated official for the temporary exercise of necessary executive functions.",
            "2. If the Minister of Defence is unavailable or unable to serve, the Minister of Justice shall assume those temporary functions.",
            "3. If neither minister is available, another minister designated by the Chancellor shall act in accordance with the designation.",
            "4. The succession arrangement shall be documented in the official government record."
          ]
        },
        {
          "id": "section-5-2",
          "number": "5.2",
          "title": "Temporary Authority",
          "heading": "Section 5.2 — Temporary Authority",
          "rawHeading": "Section 5.2, Temporary Authority",
          "paragraphs": [
            "1. A temporary acting official shall exercise only the powers reasonably necessary to maintain continuity of government.",
            "2. The acting official shall not claim permanent possession of the Chancellor's office.",
            "3. The acting official shall preserve existing constitutional institutions and maintain ordinary governmental operations.",
            "4. Extraordinary executive measures shall be avoided unless necessary to address an immediate threat or comply with law."
          ]
        },
        {
          "id": "section-5-3",
          "number": "5.3",
          "title": "Restoration of Authority",
          "heading": "Section 5.3 — Restoration of Authority",
          "rawHeading": "Section 5.3, Restoration of Authority",
          "paragraphs": [
            "Upon the Chancellor's return and ability to perform official duties, temporary executive authority shall revert to the Chancellor."
          ]
        },
        {
          "id": "section-5-4",
          "number": "5.4",
          "title": "Permanent Vacancy",
          "heading": "Section 5.4 — Permanent Vacancy",
          "rawHeading": "Section 5.4, Permanent Vacancy",
          "paragraphs": [
            "In the event of a voluntary permanent vacancy, the government shall follow the succession and continuity arrangements established by law. No official shall automatically acquire the Founding Chancellor's permanent constitutional status merely by serving temporarily."
          ]
        },
        {
          "id": "section-5-5",
          "number": "5.5",
          "title": "Preservation of Government",
          "heading": "Section 5.5 — Preservation of Government",
          "rawHeading": "Section 5.5, Preservation of Government",
          "paragraphs": [
            "A temporary vacancy or period of inactivity shall not automatically dissolve the Republic, invalidate existing legislation, or terminate the legal existence of public institutions."
          ]
        }
      ]
    },
    {
      "id": "article-6",
      "eyebrow": "Article 6",
      "title": "Parliament",
      "rawHeading": "ARTICLE 6, PARLIAMENT",
      "paragraphs": [],
      "sections": [
        {
          "id": "section-6-1",
          "number": "6.1",
          "title": "Establishment",
          "heading": "Section 6.1 — Establishment",
          "rawHeading": "Section 6.1, Establishment",
          "paragraphs": [
            "1. The legislative institution of the Republic shall be known as the Parliament of Goodfellows.",
            "2. Parliament shall be unicameral, consisting of a single chamber of elected representatives.",
            "3. Parliament shall ordinarily consist of between ten and twenty representatives.",
            "4. The precise number of seats and the arrangements for filling them shall be determined by electoral law."
          ]
        },
        {
          "id": "section-6-2",
          "number": "6.2",
          "title": "Democratic Election",
          "heading": "Section 6.2 — Democratic Election",
          "rawHeading": "Section 6.2, Democratic Election",
          "paragraphs": [
            "1. Parliamentary representatives shall be elected by citizens through regular elections.",
            "2. Parliamentary elections shall ordinarily occur every three months.",
            "3. Elections shall be administered according to published procedures.",
            "4. Every eligible citizen shall be entitled to participate in elections on equal terms.",
            "5. The government shall maintain an official record of certified election results."
          ]
        },
        {
          "id": "section-6-3",
          "number": "6.3",
          "title": "Powers of Parliament",
          "heading": "Section 6.3 — Powers of Parliament",
          "rawHeading": "Section 6.3, Powers of Parliament",
          "paragraphs": [
            "Parliament shall have authority to:",
            "1. Debate and pass legislation.",
            "2. Amend proposed legislation.",
            "3. Approve the national budget.",
            "4. Question ministers concerning governmental administration.",
            "5. Investigate alleged misconduct by public officials.",
            "6. Exercise impeachment powers over officials subject to impeachment under this Constitution.",
            "7. Ratify international agreements where required by law.",
            "8. Establish parliamentary committees.",
            "9. Review the administration of public funds.",
            "10. Adopt resolutions concerning public policy.",
            "11. Exercise other legislative powers granted by this Constitution."
          ]
        },
        {
          "id": "section-6-4",
          "number": "6.4",
          "title": "Parliamentary Independence",
          "heading": "Section 6.4 — Parliamentary Independence",
          "rawHeading": "Section 6.4, Parliamentary Independence",
          "paragraphs": [
            "1. Parliament shall exercise its legislative functions within the constitutional framework.",
            "2. Representatives shall be entitled to participate in authorized debates and votes without arbitrary interference.",
            "3. The Chancellor's authority over parliamentary procedures shall be exercised in accordance with this Article and applicable law.",
            "4. Parliamentary proceedings shall ordinarily be recorded and made available to citizens."
          ]
        },
        {
          "id": "section-6-5",
          "number": "6.5",
          "title": "The Speaker",
          "heading": "Section 6.5 — The Speaker",
          "rawHeading": "Section 6.5, The Speaker",
          "paragraphs": [
            "1. The Speaker of Parliament shall preside over parliamentary proceedings.",
            "2. The Chancellor shall appoint the Speaker.",
            "3. The Speaker shall maintain order, recognize speakers, administer votes, and enforce parliamentary procedures.",
            "4. The Speaker shall not independently exercise executive authority merely by virtue of holding the office.",
            "5. The Speaker shall perform procedural duties impartially within the applicable constitutional framework."
          ]
        },
        {
          "id": "section-6-6",
          "number": "6.6",
          "title": "Parliamentary Rules",
          "heading": "Section 6.6 — Parliamentary Rules",
          "rawHeading": "Section 6.6, Parliamentary Rules",
          "paragraphs": [
            "1. Parliamentary procedures shall be approved under the authority of the Chancellor.",
            "2. Such procedures may regulate debate, voting, amendments, committees, attendance, records, and the introduction of bills.",
            "3. Parliamentary procedures shall not contradict this Constitution.",
            "4. Rules governing parliamentary participation shall be published and applied consistently."
          ]
        },
        {
          "id": "section-6-7",
          "number": "6.7",
          "title": "Parliamentary Committees",
          "heading": "Section 6.7 — Parliamentary Committees",
          "rawHeading": "Section 6.7, Parliamentary Committees",
          "paragraphs": [
            "1. Parliament may establish standing or temporary committees.",
            "2. Committees may examine legislation, public spending, administrative conduct, and matters referred to them.",
            "3. Committees may request relevant information from ministers, subject to legitimate confidentiality and security restrictions.",
            "4. Committee findings shall ordinarily be recorded and reported to Parliament."
          ]
        },
        {
          "id": "section-6-8",
          "number": "6.8",
          "title": "Parliamentary Quorum",
          "heading": "Section 6.8 — Parliamentary Quorum",
          "rawHeading": "Section 6.8, Parliamentary Quorum",
          "paragraphs": [
            "The minimum number of representatives required for valid parliamentary business shall be established by parliamentary rules. No final vote shall be considered valid unless the applicable quorum requirements are satisfied."
          ]
        },
        {
          "id": "section-6-9",
          "number": "6.9",
          "title": "Inactive or Vacant Seats",
          "heading": "Section 6.9 — Inactive or Vacant Seats",
          "rawHeading": "Section 6.9, Inactive or Vacant Seats",
          "paragraphs": [
            "Vacancies and persistent inactivity shall be addressed through electoral law, including by-elections or other lawful replacement procedures."
          ]
        }
      ]
    },
    {
      "id": "article-7",
      "eyebrow": "Article 7",
      "title": "Legislation and the Lawmaking Process",
      "rawHeading": "ARTICLE 7, LEGISLATION AND THE LAWMAKING PROCESS",
      "paragraphs": [],
      "sections": [
        {
          "id": "section-7-1",
          "number": "7.1",
          "title": "Introduction of Bills",
          "heading": "Section 7.1 — Introduction of Bills",
          "rawHeading": "Section 7.1, Introduction of Bills",
          "paragraphs": [
            "1. A bill may be introduced by the Chancellor, a member of Parliament, or another authorized proposer where permitted by law.",
            "2. Every bill shall identify its principal purpose and the legal provisions it proposes to establish or amend.",
            "3. Bills shall be published for consideration before a final vote, subject to reasonable exceptions for urgent measures."
          ]
        },
        {
          "id": "section-7-2",
          "number": "7.2",
          "title": "Legislative Debate",
          "heading": "Section 7.2 — Legislative Debate",
          "rawHeading": "Section 7.2, Legislative Debate",
          "paragraphs": [
            "1. Parliament shall ordinarily be afforded an opportunity to debate proposed legislation.",
            "2. Representatives may propose amendments and request clarification.",
            "3. The Speaker shall administer the debate according to applicable parliamentary rules.",
            "4. The Chancellor may communicate the government's position on a bill."
          ]
        },
        {
          "id": "section-7-3",
          "number": "7.3",
          "title": "Ordinary Legislation",
          "heading": "Section 7.3 — Ordinary Legislation",
          "rawHeading": "Section 7.3, Ordinary Legislation",
          "paragraphs": [
            "1. Ordinary legislation shall generally require an absolute majority of the full membership of Parliament, unless a different threshold is established by law.",
            "2. An absolute majority shall mean more than half of all filled parliamentary seats, excluding vacancies where the applicable electoral law so provides.",
            "3. A bill shall not become law solely because it has been introduced or debated."
          ]
        },
        {
          "id": "section-7-4",
          "number": "7.4",
          "title": "Important Legislation",
          "heading": "Section 7.4 — Important Legislation",
          "rawHeading": "Section 7.4, Important Legislation",
          "paragraphs": [
            "Legislation concerning major institutional changes, national security frameworks, electoral administration, public finance, or other matters designated as significant by law may be subject to additional procedural requirements."
          ]
        },
        {
          "id": "section-7-5",
          "number": "7.5",
          "title": "Approval by the Chancellor",
          "heading": "Section 7.5 — Approval by the Chancellor",
          "rawHeading": "Section 7.5, Approval by the Chancellor",
          "paragraphs": [
            "1. A bill passed by Parliament shall be submitted to the Chancellor.",
            "2. The Chancellor may approve the bill, return it for reconsideration, or exercise a veto where authorized by this Constitution.",
            "3. A returned bill shall be reconsidered in accordance with parliamentary rules.",
            "4. The conditions for overriding a veto shall be established by legislation consistent with this Constitution.",
            "5. An approved bill shall be promulgated and entered into the official legislative record."
          ]
        },
        {
          "id": "section-7-6",
          "number": "7.6",
          "title": "Publication and Commencement",
          "heading": "Section 7.6 — Publication and Commencement",
          "rawHeading": "Section 7.6, Publication and Commencement",
          "paragraphs": [
            "1. Legislation shall be published through an official government channel or another recognized public record.",
            "2. Every law shall specify its commencement date or the procedure by which that date is determined.",
            "3. No person shall ordinarily be sanctioned for violating a newly enacted rule before it has taken effect and been made reasonably accessible, except where a previously applicable rule independently covers the conduct."
          ]
        },
        {
          "id": "section-7-7",
          "number": "7.7",
          "title": "Executive Orders",
          "heading": "Section 7.7 — Executive Orders",
          "rawHeading": "Section 7.7, Executive Orders",
          "paragraphs": [
            "1. Executive orders may regulate the internal administration of the government within the Chancellor's lawful authority.",
            "2. Executive orders shall be recorded and published unless a legitimate confidentiality exception applies.",
            "3. An executive order shall not ordinarily amend the Constitution or override valid legislation.",
            "4. Executive orders may be reviewed by the courts for constitutional legality."
          ]
        },
        {
          "id": "section-7-8",
          "number": "7.8",
          "title": "Legislative Classification",
          "heading": "Section 7.8 — Legislative Classification",
          "rawHeading": "Section 7.8, Legislative Classification",
          "paragraphs": [
            "Legislation shall be classified as ordinary or major according to criteria established by law. The applicable voting threshold shall be identified before the final vote."
          ]
        }
      ]
    },
    {
      "id": "article-8",
      "eyebrow": "Article 8",
      "title": "The Council of Ministers and Public Administration",
      "rawHeading": "ARTICLE 8, THE COUNCIL OF MINISTERS AND PUBLIC ADMINISTRATION",
      "paragraphs": [],
      "sections": [
        {
          "id": "section-8-1",
          "number": "8.1",
          "title": "Establishment",
          "heading": "Section 8.1 — Establishment",
          "rawHeading": "Section 8.1, Establishment",
          "paragraphs": [
            "1. The executive government shall consist of the Chancellor and the ministers appointed to administer the Republic's ministries.",
            "2. Ministers shall collectively constitute the Council of Ministers.",
            "3. The Council shall coordinate governmental administration and implement lawful government policy."
          ]
        },
        {
          "id": "section-8-2",
          "number": "8.2",
          "title": "Appointment of Ministers",
          "heading": "Section 8.2 — Appointment of Ministers",
          "rawHeading": "Section 8.2, Appointment of Ministers",
          "paragraphs": [
            "1. The Chancellor shall appoint ministers.",
            "2. The Chancellor may dismiss ministers and reorganize ministerial responsibilities.",
            "3. Ministerial appointments shall be entered into the official government record.",
            "4. No minister shall acquire independent constitutional authority merely by virtue of appointment."
          ]
        },
        {
          "id": "section-8-3",
          "number": "8.3",
          "title": "Existing Ministries",
          "heading": "Section 8.3 — Existing Ministries",
          "rawHeading": "Section 8.3, Existing Ministries",
          "paragraphs": [
            "The Republic shall maintain, as required by the Chancellor, the following ministries:",
            "1. Ministry of Justice.",
            "2. Ministry of Finance.",
            "3. Ministry of Defence.",
            "4. Ministry of Communications and Digital Affairs. Additional ministries may be established by the Chancellor."
          ]
        },
        {
          "id": "section-8-4",
          "number": "8.4",
          "title": "Creation and Abolition of Ministries",
          "heading": "Section 8.4 — Creation and Abolition of Ministries",
          "rawHeading": "Section 8.4, Creation and Abolition of Ministries",
          "paragraphs": [
            "1. Only the Chancellor shall possess authority to create or abolish ministries.",
            "2. The Chancellor may combine ministries, rename them, alter their administrative responsibilities, or establish new portfolios.",
            "3. Such changes shall be recorded in an executive order or equivalent official instrument.",
            "4. The creation or abolition of a ministry shall not automatically repeal existing legislation unless the applicable law expressly provides otherwise."
          ]
        },
        {
          "id": "section-8-5",
          "number": "8.5",
          "title": "Ministerial Responsibilities",
          "heading": "Section 8.5 — Ministerial Responsibilities",
          "rawHeading": "Section 8.5, Ministerial Responsibilities",
          "paragraphs": [
            "1. Each minister shall administer the ministry assigned to them.",
            "2. Ministers shall implement lawful executive policy and comply with applicable legislation.",
            "3. Ministers shall maintain records of major administrative decisions.",
            "4. Ministers shall provide Parliament with information concerning their ministries when lawfully required.",
            "5. Ministers shall not use public office for unauthorized personal retaliation or unlawful interference with citizens."
          ]
        },
        {
          "id": "section-8-6",
          "number": "8.6",
          "title": "Ministry of Justice",
          "heading": "Section 8.6 — Ministry of Justice",
          "rawHeading": "Section 8.6, Ministry of Justice",
          "paragraphs": [
            "The Ministry of Justice shall administer governmental legal policy, coordinate legal drafting where assigned, maintain relevant administrative records, and support the lawful operation of the Republic's justice institutions. It shall not direct judges to decide individual cases in a predetermined manner."
          ]
        },
        {
          "id": "section-8-7",
          "number": "8.7",
          "title": "Ministry of Finance",
          "heading": "Section 8.7 — Ministry of Finance",
          "rawHeading": "Section 8.7, Ministry of Finance",
          "paragraphs": [
            "The Ministry of Finance shall administer the government's financial records, prepare budget proposals, monitor authorized expenditure, and maintain transparent records of public funds."
          ]
        },
        {
          "id": "section-8-8",
          "number": "8.8",
          "title": "Ministry of Defence",
          "heading": "Section 8.8 — Ministry of Defence",
          "rawHeading": "Section 8.8, Ministry of Defence",
          "paragraphs": [
            "The Ministry of Defence shall coordinate defensive policy, security planning, and the protection of the Republic against credible internal or external threats. Its authority shall be exercised in accordance with this Constitution and applicable law."
          ]
        },
        {
          "id": "section-8-9",
          "number": "8.9",
          "title": "Ministry of Communications and Digital Affairs",
          "heading": "Section 8.9 — Ministry of Communications and Digital Affairs",
          "rawHeading": "Section 8.9, Ministry of Communications and Digital Affairs",
          "paragraphs": [
            "The Ministry of Communications and Digital Affairs shall oversee official communications, government websites, digital services, and coordination with the National Cybersecurity Agency."
          ]
        },
        {
          "id": "section-8-10",
          "number": "8.10",
          "title": "Ministry of Immigration, Refugees and Citizenship",
          "heading": "Section 8.10 — Ministry of Immigration, Refugees and Citizenship",
          "rawHeading": "Section 8.10, Ministry of Immigration, Refugees and Citizenship",
          "paragraphs": [
            "The Ministry of Immigration, Refugees and Citizenship shall oversee immigration procedures, refugee affairs, citizenship applications, residency matters, and the official registration and recognition of citizens of the Goodfellows Republic."
          ]
        },
        {
          "id": "section-8-11",
          "number": "8.11",
          "title": "Ministerial Accountability",
          "heading": "Section 8.11 — Ministerial Accountability",
          "rawHeading": "Section 8.11, Ministerial Accountability",
          "paragraphs": [
            "1. Ministers shall be accountable to the Chancellor for the performance of their duties.",
            "2. Ministers shall be subject to parliamentary questioning and lawful investigation.",
            "3. A minister may be dismissed by the Chancellor.",
            "4. A minister may also be subject to impeachment or other sanctions where the requirements of this Constitution are satisfied.",
            "5. Dismissal from office shall not automatically establish criminal or constitutional liability."
          ]
        }
      ]
    },
    {
      "id": "article-9",
      "eyebrow": "Article 9",
      "title": "The Judiciary",
      "rawHeading": "ARTICLE 9, THE JUDICIARY",
      "paragraphs": [],
      "sections": [
        {
          "id": "section-9-1",
          "number": "9.1",
          "title": "Establishment of the Courts",
          "heading": "Section 9.1 — Establishment of the Courts",
          "rawHeading": "Section 9.1, Establishment of the Courts",
          "paragraphs": [
            "1. Judicial authority shall be exercised by the courts established under this Constitution.",
            "2. The Republic shall maintain a Supreme Court as its highest judicial institution.",
            "3. The Supreme Court shall exercise both ordinary appellate jurisdiction and constitutional review.",
            "4. Additional courts or judicial bodies may be established by legislation."
          ]
        },
        {
          "id": "section-9-2",
          "number": "9.2",
          "title": "Appointment of Judges",
          "heading": "Section 9.2 — Appointment of Judges",
          "rawHeading": "Section 9.2, Appointment of Judges",
          "paragraphs": [
            "1. Judges shall be appointed by the Chancellor.",
            "2. Judicial appointments shall be recorded publicly.",
            "3. Judges shall possess the qualifications required by applicable judicial law.",
            "4. A judge shall not be disqualified from a case merely because the outcome may affect the government, provided the judge can decide the matter impartially."
          ]
        },
        {
          "id": "section-9-3",
          "number": "9.3",
          "title": "Judicial Independence",
          "heading": "Section 9.3 — Judicial Independence",
          "rawHeading": "Section 9.3, Judicial Independence",
          "paragraphs": [
            "1. Judges shall decide cases according to the Constitution and applicable law.",
            "2. No minister or parliamentary representative may order a judge to reach a predetermined decision in an individual case.",
            "3. The Chancellor's appointment authority shall not itself confer the power to dictate judicial outcomes.",
            "4. Judicial proceedings shall be conducted fairly and with appropriate impartiality.",
            "5. Judges shall disclose material conflicts of interest and withdraw from proceedings where impartiality cannot reasonably be maintained."
          ]
        },
        {
          "id": "section-9-4",
          "number": "9.4",
          "title": "Jurisdiction",
          "heading": "Section 9.4 — Jurisdiction",
          "rawHeading": "Section 9.4, Jurisdiction",
          "paragraphs": [
            "The courts shall have authority to:",
            "1. Interpret legislation.",
            "2. Review executive orders and administrative decisions.",
            "3. Resolve disputes between public institutions.",
            "4. Hear appeals from lower judicial bodies.",
            "5. Determine whether laws or governmental actions comply with the Constitution.",
            "6. Hear cases concerning alleged misconduct by public officials.",
            "7. Protect rights guaranteed by this Constitution.",
            "8. Issue lawful remedies within their jurisdiction."
          ]
        },
        {
          "id": "section-9-5",
          "number": "9.5",
          "title": "Constitutional Review",
          "heading": "Section 9.5 — Constitutional Review",
          "rawHeading": "Section 9.5, Constitutional Review",
          "paragraphs": [
            "1. A person or institution with appropriate standing may challenge a law or governmental action on constitutional grounds.",
            "2. The Supreme Court shall determine the matter according to the Constitution and applicable procedure.",
            "3. A provision found unconstitutional shall be invalid to the extent determined by the Court, subject to the express constitutional rules governing the Founding Chancellor and emergency powers.",
            "4. Judgments shall identify their legal basis and the remedy, if any, ordered by the Court."
          ]
        },
        {
          "id": "section-9-6",
          "number": "9.6",
          "title": "Finality of Judicial Decisions",
          "heading": "Section 9.6 — Finality of Judicial Decisions",
          "rawHeading": "Section 9.6, Finality of Judicial Decisions",
          "paragraphs": [
            "1. A judicial decision may be overturned only by a higher court exercising lawful appellate authority.",
            "2. No minister, parliamentary representative, or executive official may independently reverse a judicial judgment.",
            "3. Final judgments shall bind the parties and institutions subject to the Court's lawful jurisdiction.",
            "4. The Chancellor shall comply with binding lawful judicial orders, subject to the specific constitutional rules governing the Founding Chancellor's permanent tenure.",
            "5. No court may remove the Founding Chancellor from office."
          ]
        },
        {
          "id": "section-9-7",
          "number": "9.7",
          "title": "Judicial Discipline",
          "heading": "Section 9.7 — Judicial Discipline",
          "rawHeading": "Section 9.7, Judicial Discipline",
          "paragraphs": [
            "Judges may be investigated or disciplined for corruption, serious misconduct, deliberate abuse of judicial authority, or other grounds established by law. Any disciplinary process shall provide notice, an opportunity to respond, and an impartial determination."
          ]
        }
      ]
    },
    {
      "id": "article-10",
      "eyebrow": "Article 10",
      "title": "The Electoral System",
      "rawHeading": "ARTICLE 10, THE ELECTORAL SYSTEM",
      "paragraphs": [],
      "sections": [
        {
          "id": "section-10-1",
          "number": "10.1",
          "title": "Electoral Commission",
          "heading": "Section 10.1 — Electoral Commission",
          "rawHeading": "Section 10.1, Electoral Commission",
          "paragraphs": [
            "1. The Electoral Commission shall administer parliamentary elections.",
            "2. The Commission shall verify candidate eligibility, publish election schedules, supervise nominations, count votes, certify results, and maintain electoral records.",
            "3. The Commission shall investigate complaints concerning electoral procedure.",
            "4. The Commission shall perform its assigned duties according to published rules."
          ]
        },
        {
          "id": "section-10-2",
          "number": "10.2",
          "title": "Electoral Administration",
          "heading": "Section 10.2 — Electoral Administration",
          "rawHeading": "Section 10.2, Electoral Administration",
          "paragraphs": [
            "1. Elections shall be held every three months unless a lawful exceptional circumstance requires a temporary adjustment.",
            "2. Election schedules shall be published in advance.",
            "3. Eligible citizens shall be given a reasonable opportunity to cast their votes.",
            "4. Voting procedures shall protect the integrity of ballots and the accuracy of results.",
            "5. The Commission shall publish certified results after completing the count."
          ]
        },
        {
          "id": "section-10-3",
          "number": "10.3",
          "title": "Electoral Disputes",
          "heading": "Section 10.3 — Electoral Disputes",
          "rawHeading": "Section 10.3, Electoral Disputes",
          "paragraphs": [
            "1. Candidates and eligible citizens may submit complaints concerning alleged electoral irregularities.",
            "2. The Electoral Commission shall review complaints within its jurisdiction.",
            "3. Decisions may be appealed to the courts in accordance with electoral law.",
            "4. The Supreme Court shall have final appellate authority over electoral disputes within its jurisdiction.",
            "5. An election result shall not be overturned without a lawful determination that the relevant irregularity warrants that remedy."
          ]
        },
        {
          "id": "section-10-4",
          "number": "10.4",
          "title": "Parliamentary Eligibility",
          "heading": "Section 10.4 — Parliamentary Eligibility",
          "rawHeading": "Section 10.4, Parliamentary Eligibility",
          "paragraphs": [
            "Eligibility requirements for parliamentary candidates shall be established by law. Requirements shall be published before nominations open and applied consistently."
          ]
        },
        {
          "id": "section-10-5",
          "number": "10.5",
          "title": "Political Party Registration",
          "heading": "Section 10.5 — Political Party Registration",
          "rawHeading": "Section 10.5, Political Party Registration",
          "paragraphs": [
            "1. The Goodfellows political party shall be the sole lawful political party.",
            "2. No competing political party shall be registered.",
            "3. The Republic shall maintain a record of the lawful party's official status.",
            "4. Political party status shall not exempt members from applicable constitutional or legal obligations."
          ]
        },
        {
          "id": "section-10-6",
          "number": "10.6",
          "title": "Chancellor's Tenure and Elections",
          "heading": "Section 10.6 — Chancellor's Tenure and Elections",
          "rawHeading": "Section 10.6, Chancellor's Tenure and Elections",
          "paragraphs": [
            "1. The Founding Chancellor shall not be subject to ordinary periodic elections.",
            "2. Parliamentary elections shall not constitute a vote on the continued tenure of the Founding Chancellor.",
            "3. No electoral procedure shall be interpreted as authorizing the removal of the Founding Chancellor.",
            "4. The permanence of the Founding Chancellor's office shall not prevent citizens from participating in parliamentary elections or expressing lawful opinions on public policy."
          ]
        }
      ]
    },
    {
      "id": "article-11",
      "eyebrow": "Article 11",
      "title": "The Goodfellows Political Party",
      "rawHeading": "ARTICLE 11, THE GOODFELLOWS POLITICAL PARTY",
      "paragraphs": [],
      "sections": [
        {
          "id": "section-11-1",
          "number": "11.1",
          "title": "Official Political Party",
          "heading": "Section 11.1 — Official Political Party",
          "rawHeading": "Section 11.1, Official Political Party",
          "paragraphs": [
            "1. The Goodfellows political party shall be the only lawful political party of the Republic.",
            "2. The party shall operate within the constitutional order established by this instrument.",
            "3. Its members shall remain subject to applicable law and constitutional obligations.",
            "4. Party membership shall not grant immunity from legal proceedings."
          ]
        },
        {
          "id": "section-11-2",
          "number": "11.2",
          "title": "Political Organization and Opposition",
          "heading": "Section 11.2 — Political Organization and Opposition",
          "rawHeading": "Section 11.2, Political Organization and Opposition",
          "paragraphs": [
            "1. The establishment of competing political parties is prohibited.",
            "2. Organizations principally dedicated to forcibly overthrowing the constitutional order or removing the Founding Chancellor outside the constitutional framework are prohibited.",
            "3. Peaceful policy criticism shall not automatically constitute an offence.",
            "4. Individual allegations of unlawful political organization shall be evaluated on the basis of identifiable conduct and applicable law.",
            "5. Restrictions on political organization shall be enforced through established procedures rather than arbitrary punishment."
          ]
        },
        {
          "id": "section-11-3",
          "number": "11.3",
          "title": "Party Administration",
          "heading": "Section 11.3 — Party Administration",
          "rawHeading": "Section 11.3, Party Administration",
          "paragraphs": [
            "The internal administration, leadership structure, membership requirements, and organizational procedures of the Goodfellows political party shall be governed by its valid internal rules, insofar as those rules are consistent with this Constitution."
          ]
        }
      ]
    },
    {
      "id": "article-12",
      "eyebrow": "Article 12",
      "title": "National Security and Defence Organizations",
      "rawHeading": "ARTICLE 12, NATIONAL SECURITY AND DEFENCE ORGANIZATIONS",
      "paragraphs": [],
      "sections": [
        {
          "id": "section-12-1",
          "number": "12.1",
          "title": "National Security",
          "heading": "Section 12.1 — National Security",
          "rawHeading": "Section 12.1, National Security",
          "paragraphs": [
            "1. The Republic shall maintain institutions responsible for protecting its official infrastructure, internal stability, and external security.",
            "2. National security measures shall be directed toward credible threats to the Republic and its lawful institutions.",
            "3. Security activities shall comply with applicable law and the platform rules governing the Republic's operations."
          ]
        },
        {
          "id": "section-12-2",
          "number": "12.2",
          "title": "Goodfellows United Resistance Front",
          "heading": "Section 12.2 — Goodfellows United Resistance Front",
          "rawHeading": "Section 12.2, Goodfellows United Resistance Front",
          "paragraphs": [
            "1. The Goodfellows United Resistance Front, abbreviated as G.U.R.F., shall be recognized as a government supported defense organization.",
            "2. G.U.R.F. shall not constitute a political party.",
            "3. Its responsibilities may include assisting with internal defence, supporting the protection of government institutions, coordinating defensive activities, and assisting with external defence cooperation.",
            "4. G.U.R.F. shall operate under the applicable governmental security framework.",
            "5. G.U.R.F. shall not independently claim legislative, judicial, or unrestricted executive authority.",
            "6. Its activities shall remain subject to the lawful authority assigned to it."
          ]
        },
        {
          "id": "section-12-3",
          "number": "12.3",
          "title": "National Cybersecurity Agency",
          "heading": "Section 12.3 — National Cybersecurity Agency",
          "rawHeading": "Section 12.3, National Cybersecurity Agency",
          "paragraphs": [
            "1. The National Cybersecurity Agency, abbreviated as N.C.A., shall be recognized as the Republic's principal governmental cybersecurity agency.",
            "2. The N.C.A. shall develop, create, maintain, and secure official websites, digital services, government code, and other authorized digital infrastructure.",
            "3. The N.C.A. shall identify and respond to credible cybersecurity threats affecting official systems.",
            "4. The Agency may conduct authorized security testing, investigate incidents involving official infrastructure, and recommend defensive measures.",
            "5. Access to systems and information shall be limited to authorized purposes.",
            "6. The Agency shall not use its technical authority to obtain unauthorized access to private accounts or unrelated systems."
          ]
        },
        {
          "id": "section-12-4",
          "number": "12.4",
          "title": "Coordination Between Security Institutions",
          "heading": "Section 12.4 — Coordination Between Security Institutions",
          "rawHeading": "Section 12.4, Coordination Between Security Institutions",
          "paragraphs": [
            "1. G.U.R.F. and the N.C.A. may cooperate where a security incident involves both organizational security and digital infrastructure.",
            "2. Their respective responsibilities shall remain distinguishable.",
            "3. The N.C.A. shall retain responsibility for technical cybersecurity matters assigned to it.",
            "4. G.U.R.F. shall not independently alter or bypass the N.C.A.'s technical safeguards without authorization.",
            "5. The Chancellor may issue lawful directives governing coordination between the organizations."
          ]
        },
        {
          "id": "section-12-5",
          "number": "12.5",
          "title": "Investigations",
          "heading": "Section 12.5 — Investigations",
          "rawHeading": "Section 12.5, Investigations",
          "paragraphs": [
            "1. Security investigations shall be based on credible information indicating a potential violation or threat.",
            "2. Investigations shall remain proportionate to the nature and seriousness of the suspected conduct.",
            "3. Investigators shall distinguish between criticism of the government and conduct that independently constitutes a credible security threat.",
            "4. Findings shall be recorded where appropriate.",
            "5. Where a matter may result in disciplinary or judicial proceedings, the affected person shall receive the procedural protections applicable under this Constitution."
          ]
        }
      ]
    },
    {
      "id": "article-13",
      "eyebrow": "Article 13",
      "title": "Public Finance and Government Records",
      "rawHeading": "ARTICLE 13, PUBLIC FINANCE AND GOVERNMENT RECORDS",
      "paragraphs": [],
      "sections": [
        {
          "id": "section-13-1",
          "number": "13.1",
          "title": "Public Funds",
          "heading": "Section 13.1 — Public Funds",
          "rawHeading": "Section 13.1, Public Funds",
          "paragraphs": [
            "1. Public funds, where maintained, shall be administered according to applicable legislation.",
            "2. Government expenditure shall serve an authorized governmental purpose.",
            "3. The Ministry of Finance shall maintain accurate financial records.",
            "4. Public expenditure shall be subject to parliamentary scrutiny."
          ]
        },
        {
          "id": "section-13-2",
          "number": "13.2",
          "title": "Budget",
          "heading": "Section 13.2 — Budget",
          "rawHeading": "Section 13.2, Budget",
          "paragraphs": [
            "1. The government shall prepare a budget where the Republic maintains a formal public treasury or financial system.",
            "2. The budget shall identify anticipated revenue, authorized expenditure, and significant financial commitments.",
            "3. Parliament shall review and approve the budget under the applicable legislative procedure.",
            "4. Emergency expenditure shall be recorded and reported as soon as reasonably practicable."
          ]
        },
        {
          "id": "section-13-3",
          "number": "13.3",
          "title": "Public Records",
          "heading": "Section 13.3 — Public Records",
          "rawHeading": "Section 13.3, Public Records",
          "paragraphs": [
            "1. The government shall maintain official records of legislation, executive orders, appointments, parliamentary votes, election results, and major administrative decisions.",
            "2. Records shall be maintained in a form reasonably accessible to authorized officials and, where appropriate, the public.",
            "3. Confidential information may be withheld under Section 3.8.",
            "4. Official records shall not be altered to misrepresent a decision or conceal a legally relevant fact."
          ]
        },
        {
          "id": "section-13-4",
          "number": "13.4",
          "title": "Transparency and Accountability",
          "heading": "Section 13.4 — Transparency and Accountability",
          "rawHeading": "Section 13.4, Transparency and Accountability",
          "paragraphs": [
            "Ministers and public agencies shall provide information concerning their activities when required by law, subject to lawful restrictions protecting privacy, security, and active investigations."
          ]
        }
      ]
    },
    {
      "id": "article-14",
      "eyebrow": "Article 14",
      "title": "Impeachment and Disciplinary Proceedings",
      "rawHeading": "ARTICLE 14, IMPEACHMENT AND DISCIPLINARY PROCEEDINGS",
      "paragraphs": [],
      "sections": [
        {
          "id": "section-14-1",
          "number": "14.1",
          "title": "Officials Subject to Impeachment",
          "heading": "Section 14.1 — Officials Subject to Impeachment",
          "rawHeading": "Section 14.1, Officials Subject to Impeachment",
          "paragraphs": [
            "1. Ministers, parliamentary representatives, judges, and other designated senior officials may be subject to impeachment where the applicable constitutional requirements are satisfied.",
            "2. The Founding Chancellor shall be excluded from impeachment proceedings that would result in removal from office.",
            "3. The permanent tenure of the Founding Chancellor shall not automatically exempt other officials from legal accountability."
          ]
        },
        {
          "id": "section-14-2",
          "number": "14.2",
          "title": "Grounds for Impeachment",
          "heading": "Section 14.2 — Grounds for Impeachment",
          "rawHeading": "Section 14.2, Grounds for Impeachment",
          "paragraphs": [
            "Grounds may include serious constitutional violations, corruption, deliberate abuse of office, unlawful interference with elections, serious misuse of public resources, or other serious misconduct established by law."
          ]
        },
        {
          "id": "section-14-3",
          "number": "14.3",
          "title": "Initiation",
          "heading": "Section 14.3 — Initiation",
          "rawHeading": "Section 14.3, Initiation",
          "paragraphs": [
            "1. Impeachment proceedings may be initiated by authorized members of Parliament or another institution designated by law.",
            "2. A written statement of allegations shall be prepared.",
            "3. The accused official shall receive notice and an opportunity to respond.",
            "4. The initiation of proceedings shall not itself establish guilt."
          ]
        },
        {
          "id": "section-14-4",
          "number": "14.4",
          "title": "Determination",
          "heading": "Section 14.4 — Determination",
          "rawHeading": "Section 14.4, Determination",
          "paragraphs": [
            "1. Impeachment shall require a formal hearing and a vote meeting the applicable constitutional threshold.",
            "2. Serious factual or legal disputes may be referred to the competent court.",
            "3. The decision shall be recorded with reasons.",
            "4. Sanctions shall be proportionate to the established misconduct."
          ]
        },
        {
          "id": "section-14-5",
          "number": "14.5",
          "title": "Available Sanctions",
          "heading": "Section 14.5 — Available Sanctions",
          "rawHeading": "Section 14.5, Available Sanctions",
          "paragraphs": [
            "Depending on the applicable law and the official concerned, sanctions may include a formal reprimand, removal from ministerial or other public office, temporary suspension, disqualification from specified offices, or referral for further proceedings."
          ]
        },
        {
          "id": "section-14-6",
          "number": "14.6",
          "title": "No Arbitrary Punishment",
          "heading": "Section 14.6 — No Arbitrary Punishment",
          "rawHeading": "Section 14.6, No Arbitrary Punishment",
          "paragraphs": [
            "No official shall be sanctioned merely because another official dislikes their political opinions, lawful criticism, or personal disagreements. A sanction must have a lawful basis and follow the applicable procedure."
          ]
        }
      ]
    },
    {
      "id": "article-15",
      "eyebrow": "Article 15",
      "title": "States of Emergency",
      "rawHeading": "ARTICLE 15, STATES OF EMERGENCY",
      "paragraphs": [],
      "sections": [
        {
          "id": "section-15-1",
          "number": "15.1",
          "title": "Declaration",
          "heading": "Section 15.1 — Declaration",
          "rawHeading": "Section 15.1, Declaration",
          "paragraphs": [
            "1. The Chancellor may declare a state of emergency where an exceptional circumstance poses a serious threat to the Republic's security, institutional continuity, or ability to function.",
            "2. An emergency declaration shall identify the circumstances requiring emergency measures.",
            "3. The declaration shall specify its intended scope and duration.",
            "4. The government shall record and publish the declaration, subject to legitimate security restrictions."
          ]
        },
        {
          "id": "section-15-2",
          "number": "15.2",
          "title": "Parliamentary Approval",
          "heading": "Section 15.2 — Parliamentary Approval",
          "rawHeading": "Section 15.2, Parliamentary Approval",
          "paragraphs": [
            "1. An emergency declaration shall be submitted to Parliament for approval within the period established by emergency legislation.",
            "2. Parliament may approve, reject, or modify the measures within its lawful authority.",
            "3. Where an immediate and exceptional threat makes prior approval impracticable, the Chancellor may take necessary temporary measures pending parliamentary consideration."
          ]
        },
        {
          "id": "section-15-3",
          "number": "15.3",
          "title": "Temporary Emergency Powers",
          "heading": "Section 15.3 — Temporary Emergency Powers",
          "rawHeading": "Section 15.3, Temporary Emergency Powers",
          "paragraphs": [
            "1. During a valid emergency, the Chancellor may exercise additional temporary powers authorized by this Constitution and emergency legislation.",
            "2. Where expressly authorized by a valid emergency declaration and the applicable constitutional procedure, specified constitutional provisions may be temporarily suspended.",
            "3. Any suspension shall identify the affected provisions, its purpose, and its duration.",
            "4. A suspension shall not automatically extend to provisions that have not been expressly identified.",
            "5. The Founding Chancellor's permanent tenure shall remain protected under Article 4."
          ]
        },
        {
          "id": "section-15-4",
          "number": "15.4",
          "title": "Necessity and Proportionality",
          "heading": "Section 15.4 — Necessity and Proportionality",
          "rawHeading": "Section 15.4, Necessity and Proportionality",
          "paragraphs": [
            "Emergency measures shall be limited to what is reasonably necessary to address the circumstances that justified the emergency."
          ]
        },
        {
          "id": "section-15-5",
          "number": "15.5",
          "title": "Duration and Termination",
          "heading": "Section 15.5 — Duration and Termination",
          "rawHeading": "Section 15.5, Duration and Termination",
          "paragraphs": [
            "1. Emergency powers shall be subject to the duration established by the applicable declaration and law.",
            "2. Parliament may review the continuation of an emergency.",
            "3. The Chancellor may terminate the emergency when its justification no longer exists.",
            "4. Upon termination, temporarily suspended provisions shall resume their ordinary operation unless a different lawful commencement arrangement is expressly provided."
          ]
        },
        {
          "id": "section-15-6",
          "number": "15.6",
          "title": "Review of Emergency Measures",
          "heading": "Section 15.6 — Review of Emergency Measures",
          "rawHeading": "Section 15.6, Review of Emergency Measures",
          "paragraphs": [
            "Emergency measures may be reviewed by the courts to determine whether the applicable declaration, procedures, and measures comply with the constitutional provisions that remain operative."
          ]
        }
      ]
    },
    {
      "id": "article-16",
      "eyebrow": "Article 16",
      "title": "Parliamentary Inactivity and Government Continuity",
      "rawHeading": "ARTICLE 16, PARLIAMENTARY INACTIVITY AND GOVERNMENT CONTINUITY",
      "paragraphs": [],
      "sections": [
        {
          "id": "section-16-1",
          "number": "16.1",
          "title": "Parliamentary Inactivity",
          "heading": "Section 16.1 — Parliamentary Inactivity",
          "rawHeading": "Section 16.1, Parliamentary Inactivity",
          "paragraphs": [
            "1. If Parliament becomes unable to conduct business because of insufficient attendance, vacancies, or persistent inactivity, the Speaker shall report the circumstances to the Chancellor.",
            "2. The Chancellor may direct measures to restore parliamentary functioning within the Constitution.",
            "3. Measures may include convening Parliament, initiating by-elections, or dissolving Parliament and calling fresh elections under the applicable procedure."
          ]
        },
        {
          "id": "section-16-2",
          "number": "16.2",
          "title": "Caretaker Administration",
          "heading": "Section 16.2 — Caretaker Administration",
          "rawHeading": "Section 16.2, Caretaker Administration",
          "paragraphs": [
            "Where a change in parliamentary membership or a temporary institutional disruption prevents ordinary government administration, the existing executive government may continue routine operations until the disruption is resolved."
          ]
        },
        {
          "id": "section-16-3",
          "number": "16.3",
          "title": "Continuity of Law",
          "heading": "Section 16.3 — Continuity of Law",
          "rawHeading": "Section 16.3, Continuity of Law",
          "paragraphs": [
            "1. Existing legislation shall remain in force during ordinary institutional transitions unless lawfully repealed or amended.",
            "2. Government agencies shall continue essential functions during temporary parliamentary inactivity.",
            "3. Temporary administrative arrangements shall not automatically become permanent constitutional changes."
          ]
        },
        {
          "id": "section-16-4",
          "number": "16.4",
          "title": "Transfer of Public Office",
          "heading": "Section 16.4 — Transfer of Public Office",
          "rawHeading": "Section 16.4, Transfer of Public Office",
          "paragraphs": [
            "1. Public offices subject to elections or appointments shall be transferred according to the applicable constitutional procedure.",
            "2. An outgoing officeholder shall not unlawfully obstruct a certified transfer of authority.",
            "3. The Founding Chancellor's permanent tenure shall be governed by Article 4 and shall not be altered by the ordinary transfer procedures applicable to other offices."
          ]
        }
      ]
    },
    {
      "id": "article-17",
      "eyebrow": "Article 17",
      "title": "Discord Administration and Moderation",
      "rawHeading": "ARTICLE 17, DISCORD ADMINISTRATION AND MODERATION",
      "paragraphs": [],
      "sections": [
        {
          "id": "section-17-1",
          "number": "17.1",
          "title": "Scope of Administration",
          "heading": "Section 17.1 — Scope of Administration",
          "rawHeading": "Section 17.1, Scope of Administration",
          "paragraphs": [
            "1. The Republic's constitutional institutions shall operate through the Goodfellows community and its officially recognized platforms.",
            "2. The Chancellor shall possess the governmental authority assigned by this Constitution over the Republic's administration.",
            "3. Technical permissions and platform ownership shall remain subject to the actual capabilities and rules of the relevant service."
          ]
        },
        {
          "id": "section-17-2",
          "number": "17.2",
          "title": "Separation of Moderation and Political Authority",
          "heading": "Section 17.2 — Separation of Moderation and Political Authority",
          "rawHeading": "Section 17.2, Separation of Moderation and Political Authority",
          "paragraphs": [
            "1. Moderation shall be conducted according to published community rules.",
            "2. Moderators shall not use their technical permissions solely to retaliate against a person for lawful political criticism.",
            "3. Where practicable, moderation decisions involving serious sanctions shall identify the relevant rule and the basis for the decision.",
            "4. A person subject to a significant moderation sanction may request review through the designated appeal procedure."
          ]
        },
        {
          "id": "section-17-3",
          "number": "17.3",
          "title": "Moderation Appeals",
          "heading": "Section 17.3 — Moderation Appeals",
          "rawHeading": "Section 17.3, Moderation Appeals",
          "paragraphs": [
            "1. Appeals shall be reviewed by an authorized reviewer who was not materially responsible for the original decision, where reasonably practicable.",
            "2. The reviewer shall consider the applicable rule, the evidence available, and the proportionality of the sanction.",
            "3. A moderation appeal shall not automatically invalidate a separate lawful governmental or judicial decision.",
            "4. Technical administrators shall retain the practical ability to respond to urgent platform safety issues."
          ]
        },
        {
          "id": "section-17-4",
          "number": "17.4",
          "title": "Constitutional Violations",
          "heading": "Section 17.4 — Constitutional Violations",
          "rawHeading": "Section 17.4, Constitutional Violations",
          "paragraphs": [
            "1. A violation of this Constitution may result in disciplinary or legal consequences where the applicable law authorizes them.",
            "2. The severity of the sanction shall reflect the seriousness of the violation, the evidence, and any relevant circumstances.",
            "3. Constitutional enforcement shall not be used as a pretext to punish protected conduct.",
            "4. The applicable procedures established by Article 3 and Article 14 shall be observed."
          ]
        },
        {
          "id": "section-17-5",
          "number": "17.5",
          "title": "Platform Compliance",
          "heading": "Section 17.5 — Platform Compliance",
          "rawHeading": "Section 17.5, Platform Compliance",
          "paragraphs": [
            "No provision of this Constitution shall authorize an act prohibited by the applicable rules of Discord or another platform on which the Republic operates."
          ]
        }
      ]
    },
    {
      "id": "article-18",
      "eyebrow": "Article 18",
      "title": "International Relations",
      "rawHeading": "ARTICLE 18, INTERNATIONAL RELATIONS",
      "paragraphs": [],
      "sections": [
        {
          "id": "section-18-1",
          "number": "18.1",
          "title": "External Representation",
          "heading": "Section 18.1 — External Representation",
          "rawHeading": "Section 18.1, External Representation",
          "paragraphs": [
            "1. The Chancellor shall represent the Republic in its external relations.",
            "2. The Chancellor may authorize ministers or designated representatives to conduct diplomatic communications.",
            "3. Authorized representatives shall act within the scope of their assigned powers."
          ]
        },
        {
          "id": "section-18-2",
          "number": "18.2",
          "title": "Agreements",
          "heading": "Section 18.2 — Agreements",
          "rawHeading": "Section 18.2, Agreements",
          "paragraphs": [
            "1. The Republic may enter into agreements with other communities, fictional nations, organizations, or recognized partners within the scope of its operations.",
            "2. Agreements shall identify the parties, obligations, duration, and applicable procedures where appropriate.",
            "3. Agreements requiring parliamentary ratification shall be submitted to Parliament.",
            "4. No external agreement shall override this Constitution unless incorporated through a valid constitutional amendment."
          ]
        },
        {
          "id": "section-18-3",
          "number": "18.3",
          "title": "Defence Cooperation",
          "heading": "Section 18.3 — Defence Cooperation",
          "rawHeading": "Section 18.3, Defence Cooperation",
          "paragraphs": [
            "The Republic may cooperate with external partners on defensive matters, cybersecurity, technical administration, and the protection of official institutions, provided that such cooperation complies with applicable law and platform rules."
          ]
        }
      ]
    },
    {
      "id": "article-19",
      "eyebrow": "Article 19",
      "title": "Constitutional Amendments",
      "rawHeading": "ARTICLE 19, CONSTITUTIONAL AMENDMENTS",
      "paragraphs": [],
      "sections": [
        {
          "id": "section-19-1",
          "number": "19.1",
          "title": "Proposal of Amendments",
          "heading": "Section 19.1 — Proposal of Amendments",
          "rawHeading": "Section 19.1, Proposal of Amendments",
          "paragraphs": [
            "A constitutional amendment may be proposed by the Chancellor, by the required proportion of Parliament, or through another procedure established by constitutional legislation."
          ]
        },
        {
          "id": "section-19-2",
          "number": "19.2",
          "title": "Parliamentary Approval",
          "heading": "Section 19.2 — Parliamentary Approval",
          "rawHeading": "Section 19.2, Parliamentary Approval",
          "paragraphs": [
            "1. A proposed amendment shall be published and considered through a formal legislative procedure.",
            "2. Constitutional amendments shall require a parliamentary supermajority and any additional ratification procedure required by this Article.",
            "3. The precise parliamentary threshold shall be established by constitutional law, provided that it is higher than the threshold for ordinary legislation.",
            "4. Ordinary laws shall require approval by a two-thirds majority of the members of the Parliament of Goodfellows.",
            "5. Major laws and other legislation designated as constitutionally significant shall require approval by a two-thirds majority of Parliament and approval through a national referendum."
          ]
        },
        {
          "id": "section-19-3",
          "number": "19.3",
          "title": "Protected Principles",
          "heading": "Section 19.3 — Protected Principles",
          "rawHeading": "Section 19.3, Protected Principles",
          "paragraphs": [
            "1. The Constitution shall protect the existence of constitutional government, regular parliamentary elections, the basic rights established by Article 3, judicial independence, and lawful procedures for the transfer of public office.",
            "2. No amendment shall abolish all meaningful constitutional limits on governmental authority.",
            "3. The permanence of the Founding Chancellor's tenure shall remain protected under Article 4 and the applicable precedence rule in Article 20.",
            "4. No amendment shall be interpreted as automatically removing the Founding Chancellor."
          ]
        },
        {
          "id": "section-19-4",
          "number": "19.4",
          "title": "Publication",
          "heading": "Section 19.4 — Publication",
          "rawHeading": "Section 19.4, Publication",
          "paragraphs": [
            "An amendment shall take effect only after completing the required approval and promulgation procedures. The official constitutional text shall be updated to reflect valid amendments."
          ]
        }
      ]
    },
    {
      "id": "article-20",
      "eyebrow": "Article 20",
      "title": "Interpretation and Constitutional Precedence",
      "rawHeading": "ARTICLE 20, INTERPRETATION AND CONSTITUTIONAL PRECEDENCE",
      "paragraphs": [],
      "sections": [
        {
          "id": "section-20-1",
          "number": "20.1",
          "title": "General Interpretation",
          "heading": "Section 20.1 — General Interpretation",
          "rawHeading": "Section 20.1, General Interpretation",
          "paragraphs": [
            "This Constitution shall be interpreted as a coherent legal instrument. Its provisions shall be read together wherever possible, with due regard to their wording, purpose, and relationship to the Republic's constitutional institutions."
          ]
        },
        {
          "id": "section-20-2",
          "number": "20.2",
          "title": "Special Status of the Founding Chancellor",
          "heading": "Section 20.2 — Special Status of the Founding Chancellor",
          "rawHeading": "Section 20.2, Special Status of the Founding Chancellor",
          "paragraphs": [
            "1. Where a genuine and irreconcilable conflict exists between a general constitutional provision and the specific provisions establishing the permanent tenure of the Founding Chancellor, the specific tenure provisions shall prevail.",
            "2. This precedence shall extend only as far as necessary to preserve the Founding Chancellor's permanent tenure and the express constitutional protections attached to that tenure.",
            "3. Other constitutional obligations shall remain binding wherever they can operate consistently with those special provisions.",
            "4. The permanent tenure of the Founding Chancellor shall not automatically invalidate unrelated rights, legislative procedures, judicial powers, or administrative requirements."
          ]
        },
        {
          "id": "section-20-3",
          "number": "20.3",
          "title": "Judicial Interpretation",
          "heading": "Section 20.3 — Judicial Interpretation",
          "rawHeading": "Section 20.3, Judicial Interpretation",
          "paragraphs": [
            "The Supreme Court shall interpret constitutional provisions within its jurisdiction. Its judgments shall bind the institutions and parties subject to its lawful authority, except to the extent that an express constitutional provision establishes a specific limitation."
          ]
        },
        {
          "id": "section-20-4",
          "number": "20.4",
          "title": "Constitutional Conflicts",
          "heading": "Section 20.4 — Constitutional Conflicts",
          "rawHeading": "Section 20.4, Constitutional Conflicts",
          "paragraphs": [
            "Where two provisions appear to conflict, the competent court shall seek an interpretation that gives effect to both. Where reconciliation is impossible, the court shall apply the express precedence rules established by this Constitution."
          ]
        }
      ]
    },
    {
      "id": "article-21",
      "eyebrow": "Article 21",
      "title": "Transitional and Final Provisions",
      "rawHeading": "ARTICLE 21, TRANSITIONAL AND FINAL PROVISIONS",
      "paragraphs": [],
      "sections": [
        {
          "id": "section-21-1",
          "number": "21.1",
          "title": "Entry into Force",
          "heading": "Section 21.1 — Entry into Force",
          "rawHeading": "Section 21.1, Entry into Force",
          "paragraphs": [
            "This Constitution shall enter into force upon its formal promulgation by the Founding Chancellor in the officially designated government records of the Goodfellows Republic."
          ]
        },
        {
          "id": "section-21-2",
          "number": "21.2",
          "title": "Existing Institutions",
          "heading": "Section 21.2 — Existing Institutions",
          "rawHeading": "Section 21.2, Existing Institutions",
          "paragraphs": [
            "1. Existing government offices, agencies, and institutions shall continue operating insofar as they are consistent with this Constitution.",
            "2. Existing rules that conflict with this Constitution shall be revised, repealed, or rendered inapplicable to the extent of the inconsistency.",
            "3. The Chancellor may issue transitional executive orders necessary to implement this Constitution."
          ]
        },
        {
          "id": "section-21-3",
          "number": "21.3",
          "title": "Existing Laws",
          "heading": "Section 21.3 — Existing Laws",
          "rawHeading": "Section 21.3, Existing Laws",
          "paragraphs": [
            "Laws in force before the adoption of this Constitution shall remain effective unless repealed, amended, or found inconsistent with this Constitution under the applicable procedure."
          ]
        },
        {
          "id": "section-21-4",
          "number": "21.4",
          "title": "Implementation",
          "heading": "Section 21.4 — Implementation",
          "rawHeading": "Section 21.4, Implementation",
          "paragraphs": [
            "The Chancellor, Parliament, Council of Ministers, judiciary, Electoral Commission, and other designated institutions shall take the measures necessary to implement the constitutional framework established by this instrument."
          ]
        },
        {
          "id": "section-21-5",
          "number": "21.5",
          "title": "Official Publication",
          "heading": "Section 21.5 — Official Publication",
          "rawHeading": "Section 21.5, Official Publication",
          "paragraphs": [
            "The official text of this Constitution and its amendments shall be maintained in a designated government record accessible to citizens."
          ]
        },
        {
          "id": "section-21-6",
          "number": "21.6",
          "title": "Severability",
          "heading": "Section 21.6 — Severability",
          "rawHeading": "Section 21.6, Severability",
          "paragraphs": [
            "If a provision of this Constitution is determined to be invalid or inapplicable, the remaining provisions shall continue in force insofar as they can operate independently, subject to the special precedence provisions governing the Founding Chancellor."
          ]
        },
        {
          "id": "section-21-7",
          "number": "21.7",
          "title": "Authentic Text",
          "heading": "Section 21.7 — Authentic Text",
          "rawHeading": "Section 21.7, Authentic Text",
          "paragraphs": [
            "The English language version of this Constitution shall be the authoritative text for official constitutional interpretation."
          ]
        },
        {
          "id": "section-21-8",
          "number": "21.8",
          "title": "Final Authority",
          "heading": "Section 21.8 — Final Authority",
          "rawHeading": "Section 21.8, Final Authority",
          "paragraphs": [
            "This Constitution shall govern the establishment, powers, responsibilities, and operation of the constitutional institutions of the Goodfellows Republic. All governmental institutions shall recognize the Constitution as the fundamental legal instrument of the Republic and shall act within the authority assigned to them."
          ]
        }
      ]
    },
    {
      "id": "formal-promulgation",
      "eyebrow": "",
      "title": "Formal Promulgation",
      "rawHeading": "FORMAL PROMULGATION",
      "paragraphs": [
        "By authority of the Founding Chancellor, and pursuant to the founding constitutional authority of the Goodfellows Republic, this Constitution is hereby promulgated as the supreme constitutional instrument of the Republic.",
        "For the Goodfellows Republic",
        "Founding Office: Chancellor of the Goodfellows Republic",
        "Constitutional Status: Supreme Law of the Republic",
        "Effective Date: 10/29/2026",
        "Official Record: Government of the Goodfellows Republic"
      ],
      "sections": []
    }
  ]
};
