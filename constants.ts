
import { Translation } from './types';

export const translations: Record<'sv' | 'en', Translation> = {
  sv: {
    nav: {
      home: "Hem",
      services: "Behandlingar",
      about: "Om Oss",
      booking: "Boka",
      contact: "Kontakt",
      aiAssistant: "AI-Hjälp",
      blog: "Blogg",
    },
    hero: {
      welcome: "Välkommen till Hijama Harmony",
      headline: "Återställ Din Balans med Premium Hijama",
      subheadline: "Upplev den läkande kraften av traditionell koppningsterapi i en professionell och lugn miljö på Torggatan i Sandviken.",
      cta: "Boka Tid Nu",
    },
    testimonials: {
      title: "Våra Klienters Ord",
      subtitle: "Berättelser om läkning och balans från Sandviken.",
      items: [
        {
          id: "1",
          name: "Sarah Lindberg",
          role: "Återkommande klient",
          quote: "Äntligen en klinik som förstår traditionell Hijama men håller det sterilt och modernt. Kände mig så trygg hela vägen och min nackspärr släppte direkt.",
          rating: 5
        },
        {
          id: "2",
          name: "Johan Ek",
          role: "Idrottare",
          quote: "Otroligt professionellt. Torrkoppningen hjälpte mig med återhämtningen efter gymmet på ett sätt massage aldrig gjort. Rekommenderas starkt!",
          rating: 5
        },
        {
          id: "3",
          name: "Amina H.",
          role: "Klient",
          quote: "Väldigt lugnande miljö. Terapeuterna är kunniga och tar sig verkligen tid att lyssna. Kände mig som en ny människa efteråt.",
          rating: 5
        }
      ]
    },
    services: {
      title: "Våra Behandlingar",
      subtitle: "Certifierad våt- och torrkoppning för ditt välmående",
      processTitle: "Patientguide & Råd",
      faqTitle: "Vanliga Frågor",
      wetCupping: {
        id: 'wet',
        title: "Hijama Våtkoppning",
        price: "699 kr",
        description: "Den klassiska metoden där ytliga snitt görs för att dra ut stillastående blod och gifter (detox).",
        features: ["Avgiftning av kroppen", "Ökad blodcirkulation", "Stärkt immunförsvar", "Minskad smärta"],
        icon: "💧",
      },
      dryCupping: {
        id: 'dry',
        title: "Torrkoppning (utan snitt)",
        price: "599 kr",
        description: "En djupgående massage med koppar som ökar blodflödet och löser upp spänningar utan att punktera huden.",
        features: ["Muskelavslappning", "Minskad stelhet", "Ökad rörlighet", "Stressreducering"],
        icon: "🔥",
      },
      combined: {
        id: 'combo',
        title: "Kombination",
        price: "699 kr",
        description: "Erbjudande! Få det bästa av två världar. Vi kombinerar våt och torr koppning för maximal effekt.",
        features: ["Helkroppsbalans", "Djupgående behandling", "Maximal cirkulation", "Holistic återhämtning"],
        icon: "✨",
      },
      preCare: {
        title: "Inför Behandlingen",
        items: [
          "Duscha innan du kommer.",
          "Bär lösa och bekväma kläder.",
          "Drick ordentligt med vatten.",
          "Undvik att äta 1-2 timmar innan behandlingen."
        ]
      },
      afterCare: {
        title: "Eftervård - Vi Rekommenderar",
        items: [
          "Drick mycket vatten för att hjälpa kroppen återhämta sig.",
          "Ät något lättare de första timmarna.",
          "Smörj området vid behov om det kliar (parfymfri kräm/olja)."
        ]
      },
      afterCareAvoid: {
        title: "Eftervård - Undvik",
        items: [
          "Duscha inte förrän nästa dag (om nödvändigt, använd ljummet vatten).",
          "Träna inte hårt eller ansträng kroppen fram till nästa dag.",
          "Sola inte och basta inte under cirka tre dagar.",
          "Flyg inte under samma vecka."
        ]
      },
      faq: [
        {
          question: "Gör det ont?",
          answer: "Nej, det ska inte göra ont. De flesta upplever behandlingen som djupt avslappnande. Vid våtkoppning görs extremt ytliga hudrispor som knappt känns – många jämför det med ett myggbett eller en lätt klisning. Vi anpassar alltid trycket efter din bekvämlighet för att du ska känna dig trygg."
        },
        {
          question: "Är utrustningen steril?",
          answer: "Ja, utan undantag. Din säkerhet är vår absolut högsta prioritet. Vi använder uteslutande sterilt engångsmaterial för både koppar, blad och handskar. Allt öppnas framför dig och kasseras direkt efter användning enligt kliniska standarder."
        },
        {
          question: "Får man märken?",
          answer: "Ja, koppning lämnar ofta runda märken som kan variera i färg från ljusrött till mörklila beroende på hur mycket stagnation som finns i området. Dessa är ofarliga och bleknar vanligtvis inom 3–10 dagar."
        },
        {
          question: "Vem bör undvika behandling?",
          answer: "Gravida, personer med blödarsjuka eller de som tar blodförtunnande medicin bör rådfråga läkare innan behandling. Vi går alltid igenom din hälsostatus innan vi börjar."
        }
      ]
    },
    about: {
      title: "Vår Berättelse",
      description: "Hijama Harmony grundades med en vision om att föra den profetiska läkekonsten hijama in i den moderna världen. Vi såg ett behov av en klinik i Gävleborg som kombinerar traditionella metoder med klinisk renlighet och svensk vårdstandard. Vår passion är att hjälpa människor finna balans i en stressig vardag genom naturlig läkning.",
      benefitsTitle: "Varför Hijama?",
      benefits: [
        "Ökad blodcirkulation",
        "Minskad smärta och stelhet",
        "Avgiftning av kroppen (Detox)",
        "Förbättrad energi och sömn",
        "Stärkt immunförsvar"
      ],
      usps: [
        {
          title: "Certifierad Expertis",
          description: "Vi är utbildade och certifierade terapeuter med djup kunskap om både våt och torr koppning.",
          icon: "🎓"
        },
        {
          title: "Klinisk Hygien",
          description: "Vi kompromissar aldrig med hygienen. Allt material är sterilt och av engångstyp.",
          icon: "✨"
        },
        {
          title: "Friskvårdsbidrag",
          description: "Som godkänd leverantör kan du använda ditt friskvårdsbidrag hos oss.",
          icon: "💳"
        },
        {
          title: "Lugn & Ro",
          description: "Vår lokal på Torggatan är inredd för att ge dig en stunds total avkoppling.",
          icon: "🌿"
        }
      ],
      teamTitle: "Möt våra engagerade och certifierade terapeuter som är dedikerade till din hälsoresa.",
      team: [
        {
          name: "Deniz",
          role: "Erfaren och Certifierad Hijama Terapeut",
          description: "Deniz är en skicklig och erfaren terapeut med specialistkunskap inom både våt och torr koppning. Med ett djupt engagemang för säkerhet och ett professionellt bemötande har Deniz en uppskattad expertis i att möta de unika behoven hos manliga klienter för att uppnå smärtlindring och ökad vitalitet.",
          gender: "male"
        },
        {
          name: "Habiba",
          role: "Erfaren och Certifierad Hijama Terapeut",
          description: "Habiba är en dedikerad och certifierad terapeut som lägger stor vikt vid att skapa en lugn och trygg behandlingsmiljö. Med sin erfarenhet och sitt fokus på individens unika behov är Habiba mycket van vid att guida kvinnliga klienter mot balans och långsiktig hälsa.",
          gender: "female"
        }
      ]
    },
    blog: {
      title: "Kunskapsbanken",
      subtitle: "Utforska historien, vetenskapen och fördelarna med koppningsterapi.",
      readMore: "Läs mer",
      backToBlog: "Tillbaka till bloggen",
      categories: {
        all: "Alla",
        history: "Historia",
        benefits: "Fördelar",
        research: "Forskning",
        tips: "Tips"
      },
      posts: [
        {
          id: 'hijama-sandviken-history',
          title: 'Urgammal läkekonst för modern hälsa: Hijama i Sandviken',
          excerpt: 'Upptäck hur Hijama – även kallat koppningsterapi – kan stärka din hälsa i Sandviken. Från stresslindring och smärtreduktion till bättre cirkulation.',
          content: `
            <p class="lead">Har du lagt märke till runda, lila märken på idrottare eller hört någon prata om “koppning” i hälsosammanhang? Hijama, eller koppningsterapi, är en urgammal behandlingsform som nu finns i Sandviken och som på allvar håller på att ta plats i den moderna hälsovärlden. I den här artikeln går vi igenom vad Hijama är, dess rötter i både global och svensk tradition, och hur den kan hjälpa till att minska stress, lindra smärta och återuppliva kroppen.</p>
            
            <h2>En tidlös behandling från öst till väst</h2>
            <p>Hijama (arabiska för ”att suga”) syftar på koppningsterapi – en traditionell medicinsk metod som har använts i tusentals år i Asien, Mellanöstern och även här i Skandinavien. Historiska källor beskriver hur man i Kina och Egypten använde koppar för att “dra ut” dåligt blod eller blockeringar i kroppen. I Sverige har <strong>koppning</strong> funnits i folkmedicinen i generationer. Svenska källor beskriver hur sug på huden <strong>ökar blodcirkulationen och bidrar till att transportera bort slaggprodukter</strong> – något som många upplevt i praktiken.</p>
            <p>Hijama upplever nu en global renässans. Elitidrottare och kända profiler har visat upp sina koppningsmärken, vilket väckt nyfikenhet och intresse världen över. Men bortom trender och rubriker är Hijama fortfarande vad det alltid varit: en naturlig metod för att stödja kroppens egna läkningsprocesser.</p>
            
            <h2>Hur fungerar Hijama (koppning)?</h2>
            <p>Rent praktiskt är koppning enkel. En utbildad terapeut placerar speciella koppar på huden och skapar ett vakuum genom värme eller en pump. Det gör att huden lyfts lätt upp i koppen och blodflödet ökar i området. Man kan säga att det är som en omvänd massage: istället för att trycka ner på musklerna, lyfter Hijama upp vävnaden.</p>
            <p>Detta ger flera effekter. Små blodkärl (kapillärer) under huden vidgas och kan delvis brista, vilket triggar kroppens läkningsrespons och drar in nytt, syrerikt blod till området. Resultatet kan bli <strong>snabbare återhämtning, minskad muskelspänning och mindre smärta</strong> – en orsak till att många idrottare använder koppning för trötta muskler.</p>
            
            <h2>Hälsoeffekter: tradition möter moderna insikter</h2>
            <p>Varför ska man prova Hijama? De rapporterade effekterna är många och berör hela kroppen. Koppning är särskilt känd för att lindra muskel- och ledsmärta. Genom att öka blodflödet och dämpa inflammation kan Hijama minska kronisk värk i rygg, nacke och axlar och påskynda återhämtning vid mindre skador. Studier visar att koppning kan ge signifikant smärtlindring vid bland annat ländryggsbesvär, sannolikt genom att nervsystemet triggas att frigöra kroppens egna smärtstillande ämnen (endorfiner).</p>
            
            <h2>Din Hijama-upplevelse i Sandviken</h2>
            <p>En typisk behandling hos <strong>Hijama Harmony i Sandviken</strong> börjar med en kort konsultation där du berättar om dina besvär och mål – till exempel migrän, muskelvärk eller stress. Därefter placeras kopparna på utvalda områden. Du känner ett sug och en lätt stramhet, men många beskriver det som djupt avslappnande.</p>
            <p><strong>Kontakta Hijama Harmony i Sandviken idag för att boka din tid</strong> och ta första steget mot en mer balanserad, smärtfri och harmonisk kropp.</p>
          `,
          category: 'History',
          date: '2024-11-01',
          image: 'https://images.unsplash.com/photo-1542848284-8afa78a08ccb?auto=format&fit=crop&q=80',
          author: 'Hijama Harmony Team'
        },
        {
          id: 'hijama-stress-relief',
          title: 'Släpp stressen naturligt: Så hjälper Hijama dig att slappna av',
          excerpt: 'Stresslösning på riktigt – upptäck hur Hijama (koppning) kan minska stress, oro och spänningar. Lär dig den vetenskapliga förklaringen bakom hijamas lugnande effekt.',
          content: `
            <p class="lead">Stress har blivit en del av vardagen för många i Sverige, med påverkan på både humör, sömn och hälsa. Tänk om en naturlig behandling kunde hjälpa dig att smälta bort spänningar och återfå lugn? Hijama (koppning) är inte bara en urgammal metod – den är också en kraftfull stressbroms som allt fler upptäcker.</p>

            <h2>Stress – mer än bara en känsla</h2>
            <p>Vi vet alla hur stress känns: snabba tankar, spända axlar, svårt att koppla av. Kroppen frisätter stresshormoner som kortisol och adrenalin. När stress blir kronisk ligger dessa nivåer ofta kvar för högt, vilket sliter på kroppen. Förhöjt kortisol kan bidra till problem som oro, sömnsvårigheter, högt blodtryck och sänkt immunförsvar.</p>
            
            <h2>Uråldrig metod, modern avslappning</h2>
            <p>Hijama har i århundraden använts mot det man förr kallade “nervösa besvär”. När kopparna skapar sug på huden ökar blodflödet lokalt, men påverkar också nervsystemet. Det parasympatiska nervsystemet – kroppens <strong>“rest and digest”</strong> – aktiveras. Pulsen går ner, blodtrycket kan sjunka, muskler slappnar av och andningen blir djupare.</p>
            <p>Hijama kan också påverka <strong>kortisolet</strong>. Flera studier tyder på att koppning kan hjälpa till att sänka förhöjda kortisolnivåer, vilket minskar den biokemiska stressbelastningen. Samtidigt frisätts endorfiner – kroppens egna “må bra”-hormoner.</p>
            
            <h2>Vad säger forskningen?</h2>
            <p>Forskningen på Hijama och stress är fortfarande i utveckling, men resultaten hittills är lovande. Studier har visat minskade stressnivåer och förbättrat välbefinnande hos personer som fått koppning. Mycket talar för att effekten hänger ihop med aktivering av det parasympatiska nervsystemet och minskad muskelspänning.</p>
            
            <h2>Stresshantering i vardagen – tillsammans med Hijama</h2>
            <ul>
              <li><strong>Andning & meditation:</strong> Kombinera koppning med djupandning.</li>
              <li><strong>Sömn:</strong> Många sover bättre efter en behandling.</li>
              <li><strong>Rörelse:</strong> Lätt fysisk aktivitet hjälper kroppen att “bränna av” stresshormoner.</li>
            </ul>
            <p>Om du känner dig <strong>uppvarvad, spänd eller mentalt trött</strong> kan Hijama vara den naturliga återställaren du behöver. <strong>Boka en tid hos Hijama Harmony idag</strong>.</p>
          `,
          category: 'Benefits',
          date: '2024-11-05',
          image: 'https://images.unsplash.com/photo-1544367563-12123d832d34?auto=format&fit=crop&q=80',
          author: 'Hijama Harmony Team'
        },
        {
          id: 'hijama-holistic-health',
          title: 'Holistisk hälsa i harmoni: Så kompletterar Hijama en hälsosam livsstil',
          excerpt: 'Utforska holistisk hälsa med Hijama! Lär dig hur koppningsterapi passar in i en balanserad livsstil – från immunförsvar och energi till bättre sömn.',
          content: `
            <p class="lead">Äkta hälsa handlar inte bara om att släcka bränder – det handlar om att ta hand om hela dig. Det är kärnan i holistisk hälsa. I Sandviken söker allt fler naturliga metoder som Hijama (koppningsterapi) för att stötta kropp, sinne och livsstil i harmoni.</p>

            <h2>Vad menas med holistisk hälsa?</h2>
            <p>Holistisk hälsa innebär att se kroppen som en helhet. I stället för att bara behandla ett enskilt symptom, försöker man förstå <strong>orsaker</strong> och hur olika delar av livet hänger ihop. Fysisk hälsa, mental balans, känslor, relationer, sömn, kost – allt påverkar varandra.</p>
            
            <h2>Varför Hijama är en naturligt holistisk metod</h2>
            <p>Hijama är holistisk av sin natur, eftersom behandlingen påverkar flera system samtidigt. När koppning ökar blodcirkulationen och lymfflödet får kroppen bättre tillgång till syre och näring, samtidigt som slaggprodukter transporteras bort mer effektivt. Det kan i sin tur stärka immunförsvaret och energinivåer.</p>
            
            <h2>Hijama + kost och livsstil = sant</h2>
            <p>För att få ut maximalt av Hijama är det smart att kombinera behandlingen med bra kost- och livsstilsval.</p>
            <ul>
              <li><strong>Kost:</strong> Vid våtkoppning är det extra viktigt med järn, B-vitaminer och koppar. Ät gröna bladgrönsaker, baljväxter, ägg och fisk.</li>
              <li><strong>Vatten:</strong> Drick mycket vatten efter behandling för att hjälpa kroppen transportera bort slaggprodukter.</li>
              <li><strong>Rörelse:</strong> Hijama kan minska smärta och stelhet, vilket gör det lättare att röra på sig.</li>
            </ul>
            
            <h2>Holistisk hälsa i praktiken hos Hijama Harmony</h2>
            <p>På <strong>Hijama Harmony i Sandviken</strong> ser vi varje klient som en helhet. Vi frågar ofta om sömn, energinivå och vardagsstress, inte bara om “var det gör ont”. <strong>Kontakta oss idag</strong> för att boka en behandling och skapa en plan som passar just din kropp.</p>
          `,
          category: 'Tips',
          date: '2024-11-10',
          image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&q=80',
          author: 'Hijama Harmony Team'
        },
        {
          id: 'hijama-sleep-recovery',
          title: 'Sov bättre, må bättre: Hijama för sömn och återhämtning',
          excerpt: 'Trött på dålig sömn? Upptäck hur Hijama (koppning) kan förbättra sömnkvalitet och återhämtning. Lär dig hur koppning hjälper kroppen att slappna av.',
          content: `
            <p class="lead">Det finns inget som slår en riktigt god natts sömn. Men om du vrider och vänder dig eller vaknar trött, kan det vara dags att prova en naturlig metod som allt fler upptäcker i Sandviken: Hijama.</p>

            <h2>Varför är sömn så avgörande?</h2>
            <p>Under natten reparerar kroppen vävnader, justerar hormoner, stärker immunförsvaret och bearbetar dagens intryck. Brist på sömn gör att allt detta fungerar sämre. Vanliga sömnstörare är stress, spänningar och oregelbundna rutiner. Hijama kan hjälpa till att adressera både kropp och sinne.</p>
            
            <h2>Så hjälper Hijama din sömn</h2>
            <ul>
              <li><strong>Djup avslappning:</strong> Koppning aktiverar det parasympatiska nervsystemet. Många upplever att de somnar snabbare och sover mer sammanhängande natten efter en behandling.</li>
              <li><strong>Minskad smärta & spänningar:</strong> Om du har värk i rygg eller nacke är det svårt att hitta en bekväm sovställning. Hijama löser upp muskelknutor och minskar inflammation.</li>
              <li><strong>Stress & hormonbalans:</strong> Genom att sänka stressen och kortisolet skapar Hijama bättre förutsättningar för sömnhormonet melatonin.</li>
            </ul>
            
            <h2>Återhämtning för både kropp och hjärna</h2>
            <p>Sömn och återhämtning hänger ihop. Hijama stödjer muskulär återhämtning, vilket är perfekt för dig som tränar. Djup sömn stärker också immunförsvaret och ger mental klarhet.</p>
            
            <h2>Så maxar du effekten</h2>
            <ul>
              <li><strong>Tidpunkt:</strong> Välj gärna sen eftermiddag eller tidig kväll.</li>
              <li><strong>Efter-behandling:</strong> Håll kvällen lugn, undvik skärmar och stress.</li>
              <li><strong>Sömnmiljö:</strong> Se till att sovrummet är mörkt, svalt och tyst.</li>
            </ul>
            <p>Vill du ge dig själv chansen till <strong>djupare sömn</strong>? <strong>Kontakta Hijama Harmony idag</strong> för att boka din session.</p>
          `,
          category: 'Benefits',
          date: '2024-11-15',
          image: 'https://images.unsplash.com/photo-1511295742362-92c96b504802?auto=format&fit=crop&q=80',
          author: 'Hijama Harmony Team'
        },
        {
          id: 'hijama-detox-diet',
          title: 'Detoxa och fyll på: Så samverkar Hijama och bra kost',
          excerpt: 'Utnyttja kroppens naturliga läkning! Lär dig hur Hijama (våtkoppning) kan stödja detox och hur näringsrik kost förstärker effekten.',
          content: `
            <p class="lead">När man vill må bättre handlar det ofta om två saker: att hjälpa kroppen bli av med det den inte behöver – och att fylla på med sådant den mår bra av.</p>

            <h2>Hijama som naturlig detox</h2>
            <p>Kroppen har redan ett inbyggt detoxsystem: levern, njurarna och lymfsystemet. Hijama fungerar som en extra knuff. Genom att skapa sug i koppen drar man blod och vätska upp mot hudytan. Detta kan öka lokal blodcirkulation och stimulera lymfsystemet att transportera bort slaggprodukter.</p>
            <p>Vid <strong>våtkoppning</strong> görs små snitt så att en liten mängd "stagnant" blod kan tas bort. Många beskriver en känsla av lätthet och “rengjord” kropp efteråt.</p>
            
            <h2>Näring – bränslet som gör skillnad</h2>
            <p>Det är en sak att rensa ut – en annan att fylla på. Efter en Hijama-behandling vill kroppen ha bra råvaror för att reparera och bygga upp. Extra viktiga näringsämnen är:</p>
            <ul>
              <li><strong>Järn:</strong> Finns i gröna blad, baljväxter, ägg och kött.</li>
              <li><strong>B-vitaminer:</strong> Centrala för blodbildning och energi.</li>
              <li><strong>Vätska:</strong> Drick vatten eller örtte för att hjälpa kroppen transportera bort slagg.</li>
            </ul>
            <p>En näringstät måltid efter Hijama – till exempel linssoppa med spenat – hjälper kroppen att fylla på depåerna.</p>
            
            <h2>Matsmältning & Hijama</h2>
            <p>Hijama har traditionellt använts för mag- och tarmbesvär. En bättre blodcirkulation kring matsmältningsorganen kan underlätta matsmältning och minska uppblåsthet. Kombinera detta med fiberrik kost för bästa effekt.</p>
            <p><strong>Kontakta Hijama Harmony</strong> för att boka en tid och diskutera hur du kan stötta kroppen med rätt näring och behandling.</p>
          `,
          category: 'Tips',
          date: '2024-11-20',
          image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80',
          author: 'Hijama Harmony Team'
        },
        {
          id: 'hijama-pain-relief',
          title: 'Från värk till styrka: Hijama för smärtlindring och energi',
          excerpt: 'Säg adjö till värk – upptäck hur Hijama kan lindra smärta, öka energin och stötta en aktiv livsstil. Få tillbaka rörelseglädjen i Sandviken.',
          content: `
            <p class="lead">Ständig värk? Låg energi? Du är långt ifrån ensam. Många kämpar med ryggont, stelhet, huvudvärk eller allmän trötthet som gör livet tyngre än det behöver vara.</p>

            <h2>Smärta och trötthet – den jobbiga kombinationen</h2>
            <p>Långvarig smärta stjäl energi och påverkar sömnen. Resultatet blir ofta en negativ spiral: mer smärta leder till mindre rörelse, vilket leder till mer stelhet. Hijama jobbar med cirkulation, muskelspänningar och nervsystem för att bryta denna spiral.</p>
            
            <h2>Hur Hijama lindrar smärta</h2>
            <p>När kopparna skapar undertryck ökar blodflödet till området, och metaboliter som mjölksyra transporteras bort. Detta ger ofta minskad inflammation och ökad rörlighet. Forskning visar att koppning också kan trigga frisättning av endorfiner – kroppens egna smärtstillande ämnen.</p>
            
            <h2>Energi – när cirkulationen vaknar</h2>
            <p>När cirkulationen förbättras, når mer syre och näring fram till cellerna. Många beskriver att de efter behandling känner sig lättare i kroppen och får mer ork i vardagen. När smärtan släpper, frigörs energi till annat.</p>
            
            <h2>Stöd för en aktiv livsstil</h2>
            <p>Målet är att få tillbaka livet – att kunna promenera, träna och leka utan smärta. Hijama kan be en viktig pusselbit. När smärtan minskar och energin ökar blir det lättare att komma igång med träning och goda vanor.</p>
            <p>Föreställ dig en vardag där värken inte styr. <strong>Hijama Harmony i Sandviken</strong> finns här för att hjälpa dig. <strong>Kontakta oss idag</strong> – din resa från värk till styrka kan börja nu.</p>
          `,
          category: 'Benefits',
          date: '2024-11-25',
          image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80',
          author: 'Hijama Harmony Team'
        }
      ]
    },
    booking: {
      title: "Boka Din Tid",
      description: "Hitta din harmoni med oss. Boka enkelt via DM, mail eller telefon.",
      buttonText: "Skicka Bokningsförfrågan",
      disclaimer: "Avbokning måste ske senast 24 timmar innan bokad tid.",
    },
    contact: {
      title: "Kontaktuppgifter",
      formTitle: "Skicka ett meddelande",
      nameLabel: "Ditt Namn",
      emailLabel: "Din Email",
      messageLabel: "Meddelande",
      sendButton: "Skicka",
      address: "Torggatan 5, 811 39 Sandviken",
      phone: "076 022 30 42",
      email: "info@hijamaharmony.se",
      hours: "Öppet enligt bokning",
      social: "@hijama_harmony_"
    },
    ai: {
      title: "Fråga Vår AI-Expert",
      description: "Har du frågor om behandlingen? Vår Gemini-drivna assistent kan svara på dina frågor baserat på våra riktlinjer.",
      placeholder: "T.ex. Hur känns det efteråt?",
      button: "Fråga",
      disclaimer: "AI-genererade svar ersätter inte professionell medicinsk rådgivning.",
    },
    footer: {
      copyright: "© 2024 Hijama Harmony.",
      links: "Integritetspolicy",
    },
  },
  en: {
    nav: {
      home: "Home",
      services: "Services",
      about: "About Us",
      booking: "Book",
      contact: "Contact",
      aiAssistant: "AI Help",
      blog: "Blog",
    },
    hero: {
      welcome: "Welcome to Hijama Harmony",
      headline: "Restore Your Balance with Premium Hijama",
      subheadline: "Experience the healing power of traditional cupping therapy in a professional and serene environment at Torggatan in Sandviken.",
      cta: "Book Appointment",
    },
    testimonials: {
      title: "What Our Clients Say",
      subtitle: "Stories of healing and balance from Sandviken.",
      items: [
        {
          id: "1",
          name: "Sarah Lindberg",
          role: "Regular Client",
          quote: "Finally a clinic that understands traditional Hijama but keeps it sterile and modern. Felt so safe throughout and my neck stiffness went away immediately.",
          rating: 5
        },
        {
          id: "2",
          name: "Johan Ek",
          role: "Athlete",
          quote: "Incredibly professional. Dry cupping helped me recover after the gym in a way massage never has. Highly recommended!",
          rating: 5
        },
        {
          id: "3",
          name: "Amina H.",
          role: "Client",
          quote: "Very calming environment. The therapists are knowledgeable and really take the time to listen. Felt like a new person afterwards.",
          rating: 5
        }
      ]
    },
    services: {
      title: "Our Treatments",
      subtitle: "Certified wet and dry cupping for your well-being",
      processTitle: "Patient Guide & Advice",
      faqTitle: "Frequently Asked Questions",
      wetCupping: {
        id: 'wet',
        title: "Wet Cupping (Hijama)",
        price: "699 kr",
        description: "The classic method where superficial incisions are made to draw out stagnant blood and toxins.",
        features: ["Body detoxification", "Increased circulation", "Immune support", "Pain relief"],
        icon: "💧",
      },
      dryCupping: {
        id: 'dry',
        title: "Dry Cupping",
        price: "599 kr",
        description: "Deep tissue massage with cups that increases blood flow and dissolves tension without skin puncture.",
        features: ["Muscle relaxation", "Reduced stiffness", "Increased mobility", "Stress reduction"],
        icon: "🔥",
      },
      combined: {
        id: 'combo',
        title: "Combined Therapy",
        price: "699 kr",
        description: "Special Offer! Get the best of both worlds. We combine wet and dry cupping for maximum effect.",
        features: ["Full body balance", "Deep treatment", "Maximum circulation", "Holistic recovery"],
        icon: "✨",
      },
      preCare: {
        title: "Before Treatment",
        items: [
          "Shower before arriving.",
          "Wear loose and comfortable clothing.",
          "Drink plenty of water.",
          "Avoid eating 1-2 hours before treatment."
        ]
      },
      afterCare: {
        title: "Aftercare - We Recommend",
        items: [
          "Drink plenty of water to help the body recover.",
          "Eat something light during the first few hours.",
          "Apply oil to the area if itchy (perfume-free)."
        ]
      },
      afterCareAvoid: {
        title: "Aftercare - Avoid",
        items: [
          "Do not shower until the next day (if necessary, use lukewarm water).",
          "No heavy exercise or strain until the next day.",
          "No sunbathing or sauna for approx. 3 days.",
          "Do not fly during the same week."
        ]
      },
      faq: [
        {
          question: "Does it hurt?",
          answer: "No, it should not hurt. Most clients find the treatment deeply relaxing. For wet cupping, the incisions are extremely superficial – often compared to a tiny scratch or mosquito bite. We always adjust the suction pressure to ensure your comfort."
        },
        {
          question: "Will there be marks?",
          answer: "Yes, cupping often leaves round marks that can vary in color from light red to dark purple depending on stagnation. These are harmless and usually fade within 3–10 days."
        },
        {
          question: "Is the equipment sterile?",
          answer: "Yes, without exception. Your safety is our absolute highest priority. We use exclusively sterile, single-use materials for cups, blades, and gloves. Everything is opened in front of you and disposed of immediately after use according to strict clinical standards."
        },
        {
          question: "Who should avoid treatment?",
          answer: "Pregnant women, people with hemophilia, or those taking blood thinners should consult a doctor before treatment. We always review your health status before starting."
        }
      ]
    },
    about: {
      title: "Our Story",
      description: "Hijama Harmony was founded with a vision to bring the prophetic healing art of Hijama into the modern world. We saw a need for a clinic in Gävleborg that combines traditional methods with clinical cleanliness and Swedish care standards. Our passion is helping people find balance in a stressful daily life through natural healing.",
      benefitsTitle: "Why Hijama?",
      benefits: [
        "Increased blood circulation",
        "Reduced pain and stiffness",
        "Body detoxification",
        "Improved energy and sleep",
        "Strengthened immune system"
      ],
      usps: [
        {
          title: "Certified Expertise",
          description: "We are trained and certified therapists with deep knowledge of both wet and dry cupping.",
          icon: "🎓"
        },
        {
          title: "Clinical Hygiene",
          description: "We never compromise on hygiene. All materials are sterile and disposable.",
          icon: "✨"
        },
        {
          title: "Wellness Allowance",
          description: "As an approved provider, you can use your wellness allowance (Friskvårdsbidrag) with us.",
          icon: "💳"
        },
        {
          title: "Peace & Calm",
          description: "Our premises at Torggatan are designed to give you a moment of total relaxation.",
          icon: "🌿"
        }
      ],
      teamTitle: "Meet our dedicated and certified therapists committed to your health journey.",
      team: [
        {
          name: "Deniz",
          role: "Experienced and Certified Hijama Therapist",
          description: "Deniz is a skilled and experienced therapist with specialist knowledge in both wet and dry cupping. With a deep commitment to safety and a professional approach, Deniz has appreciated expertise in meeting the unique needs of male clients to achieve pain relief and increased vitality.",
          gender: "male"
        },
        {
          name: "Habiba",
          role: "Experienced and Certified Hijama Therapist",
          description: "Habiba is a dedicated and certified therapist who places great importance on creating a calm and safe treatment environment. With her experience and focus on individual needs, Habiba is well-versed in guiding female clients towards balance and long-term health.",
          gender: "female"
        }
      ]
    },
    blog: {
      title: "Knowledge Base",
      subtitle: "Explore the history, science, and benefits of cupping therapy.",
      readMore: "Read More",
      backToBlog: "Back to Blog",
      categories: {
        all: "All",
        history: "History",
        benefits: "Benefits",
        research: "Research",
        tips: "Tips"
      },
      posts: [
        {
          id: 'hijama-sandviken-history',
          title: 'Ancient Healing for Modern Health: Hijama in Sandviken',
          excerpt: 'Discover how Hijama – also known as cupping therapy – can strengthen your health in Sandviken. From stress relief and pain reduction to better circulation.',
          content: `
            <p class="lead">Have you noticed round, purple marks on athletes or heard someone talk about "cupping" in health contexts? Hijama, or cupping therapy, is an ancient form of treatment that is now available in Sandviken and is seriously taking its place in the modern health world. In this article, we go through what Hijama is, its roots in both global and Swedish tradition, and how it can help reduce stress, relieve pain, and revitalize the body.</p>

            <h2>A Timeless Treatment from East to West</h2>
            <p>Hijama (Arabic for "to suck") refers to cupping therapy – a traditional medical method used for thousands of years in Asia, the Middle East, and Scandinavia. Historical sources describe how cups were used in China and Egypt to "draw out" bad blood or blockages. In Sweden, <strong>cupping</strong> has been part of folk medicine for generations. Swedish sources describe how suction on the skin <strong>increases blood circulation and helps transport away waste products</strong>.</p>
            <p>Hijama is now experiencing a global renaissance. Elite athletes have shown off their cupping marks, sparking curiosity. But beyond trends, Hijama remains what it has always been: a natural method to support the body's own healing processes.</p>
            
            <h2>How Does Hijama (Cupping) Work?</h2>
            <p>Practically, cupping is simple. A trained therapist places special cups on the skin and creates a vacuum using heat or a pump. This lifts the skin into the cup and increases blood flow in the area. It acts like a reverse massage: instead of pressing down on muscles, Hijama lifts the tissue up.</p>
            <p>This has several effects. Small blood vessels (capillaries) under the skin dilate, triggering a healing response and drawing fresh, oxygen-rich blood to the area. The result can be <strong>faster recovery, reduced muscle tension, and less pain</strong>.</p>
            
            <h2>Health Benefits: Tradition Meets Modern Insights</h2>
            <p>Why try Hijama? The reported effects are numerous. Cupping is particularly known for relieving muscle and joint pain. By increasing blood flow and reducing inflammation, Hijama can reduce chronic pain in the back, neck, and shoulders. Studies show that cupping can provide significant pain relief, likely by triggering the release of the body's own painkillers (endorphins).</p>
            
            <h2>Your Hijama Experience in Sandviken</h2>
            <p>A typical treatment at <strong>Hijama Harmony in Sandviken</strong> begins with a short consultation where you talk about your symptoms and goals. Then, cups are placed on selected areas. You feel suction and slight tightness, but many describe it as deeply relaxing.</p>
            <p><strong>Contact Hijama Harmony in Sandviken today to book your appointment</strong> and take the first step towards a more balanced, pain-free, and harmonious body.</p>
          `,
          category: 'History',
          date: '2024-11-01',
          image: 'https://images.unsplash.com/photo-1542848284-8afa78a08ccb?auto=format&fit=crop&q=80',
          author: 'Hijama Harmony Team'
        },
        {
          id: 'hijama-stress-relief',
          title: 'Release Stress Naturally: How Hijama Helps You Relax',
          excerpt: 'Real stress relief – discover how Hijama (cupping) can reduce stress, anxiety, and tension. Learn the scientific explanation behind the calming effect of Hijama.',
          content: `
            <p class="lead">Stress has become a part of everyday life for many, affecting mood, sleep, and health. What if a natural treatment could help you melt away tension and regain calm? Hijama (cupping) is not just an ancient method – it is also a powerful stress reliever that more and more people are discovering.</p>

            <h2>Stress – More Than Just a Feeling</h2>
            <p>We all know how stress feels: racing thoughts, tense shoulders. The body releases stress hormones like cortisol and adrenaline. When stress becomes chronic, these levels stay too high, wearing down the body. Elevated cortisol can contribute to anxiety, sleep problems, high blood pressure, and lowered immunity.</p>
            
            <h2>Ancient Method, Modern Relaxation</h2>
            <p>Hijama has been used for centuries for "nervous disorders." When cups create suction on the skin, it affects the nervous system. The parasympathetic nervous system – the body's <strong>"rest and digest"</strong> mode – is activated. Heart rate slows, blood pressure can drop, muscles relax, and breathing deepens.</p>
            <p>Hijama can also affect <strong>cortisol</strong>. Studies suggest cupping helps lower elevated cortisol levels, reducing biochemical stress load. At the same time, endorphins – the body's "feel-good" hormones – are released.</p>
            
            <h2>What Does the Research Say?</h2>
            <p>Research on Hijama and stress is promising. Studies show reduced stress levels and improved well-being in people receiving cupping. The effect is likely linked to parasympathetic activation and reduced muscle tension.</p>
            
            <h2>Managing Stress in Daily Life – With Hijama</h2>
            <ul>
              <li><strong>Breathing & Meditation:</strong> Combine cupping with deep breathing.</li>
              <li><strong>Sleep:</strong> Many sleep better after a treatment.</li>
              <li><strong>Movement:</strong> Light physical activity helps the body "burn off" stress hormones.</li>
            </ul>
            <p>If you feel <strong>wound up, tense, or mentally tired</strong>, Hijama might be the natural reset you need. <strong>Book an appointment at Hijama Harmony today</strong>.</p>
          `,
          category: 'Benefits',
          date: '2024-11-05',
          image: 'https://images.unsplash.com/photo-1544367563-12123d832d34?auto=format&fit=crop&q=80',
          author: 'Hijama Harmony Team'
        },
        {
          id: 'hijama-holistic-health',
          title: 'Holistic Health in Harmony: Hijama & Healthy Lifestyle',
          excerpt: 'Explore holistic health with Hijama! Learn how cupping therapy fits into a balanced lifestyle – from immune system and energy to better sleep.',
          content: `
            <p class="lead">True health isn't just about putting out fires – it's about taking care of the whole you. This is the core of holistic health. In Sandviken, more and more people are seeking natural methods like Hijama (cupping therapy) to support body, mind, and lifestyle in harmony.</p>

            <h2>What is Holistic Health?</h2>
            <p>Holistic health means seeing the body as a whole. Instead of just treating a symptom, we try to understand <strong>causes</strong> and how different parts of life connect. Physical health, mental balance, emotions, sleep, diet – everything affects everything else.</p>
            
            <h2>Why Hijama is Naturally Holistic</h2>
            <p>Hijama is holistic by nature, as the treatment affects multiple systems simultaneously. Increasing blood circulation and lymph flow gives the body better access to oxygen and nutrients while removing waste more efficiently. This can in turn strengthen the immune system and energy levels.</p>
            
            <h2>Hijama + Diet and Lifestyle</h2>
            <p>To get the most out of Hijama, combine it with good choices.</p>
            <ul>
              <li><strong>Diet:</strong> For wet cupping, iron, B-vitamins, and copper are important. Eat leafy greens, legumes, eggs, and fish.</li>
              <li><strong>Water:</strong> Drink plenty of water after treatment to help transport away waste.</li>
              <li><strong>Movement:</strong> Hijama reduces pain and stiffness, making it easier to move.</li>
            </ul>
            
            <h2>Holistic Health in Practice at Hijama Harmony</h2>
            <p>At <strong>Hijama Harmony in Sandviken</strong>, we see every client as a whole. We ask about sleep, energy levels, and daily stress. <strong>Contact us today</strong> to create a plan that fits your body.</p>
          `,
          category: 'Tips',
          date: '2024-11-10',
          image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&q=80',
          author: 'Hijama Harmony Team'
        },
        {
          id: 'hijama-sleep-recovery',
          title: 'Sleep Better, Feel Better: Hijama for Sleep & Recovery',
          excerpt: 'Tired of poor sleep? Discover how Hijama (cupping) can improve sleep quality and recovery. Learn how cupping helps the body relax.',
          content: `
            <p class="lead">There's nothing like a really good night's sleep. But if you toss and turn or wake up tired, it might be time to try a natural method that more people are discovering in Sandviken: Hijama.</p>

            <h2>Why is Sleep Crucial?</h2>
            <p>During the night, the body repairs tissues, balances hormones, strengthens the immune system, and processes the day's impressions. Lack of sleep impairs these functions. Common sleep disruptors are stress, tension, and irregular routines. Hijama can help address both body and mind.</p>
            
            <h2>How Hijama Helps Your Sleep</h2>
            <ul>
              <li><strong>Deep Relaxation:</strong> Cupping activates the parasympathetic nervous system. Many feel they fall asleep faster and stay asleep longer after treatment.</li>
              <li><strong>Reduced Pain & Tension:</strong> Pain makes it hard to sleep. Hijama dissolves muscle knots and reduces inflammation.</li>
              <li><strong>Stress & Hormones:</strong> By lowering stress and cortisol, Hijama creates better conditions for melatonin, the sleep hormone.</li>
            </ul>
            
            <h2>Recovery for Body and Brain</h2>
            <p>Sleep and recovery go hand in hand. Hijama supports muscular recovery, perfect for active individuals. Deep sleep also strengthens the immune system and mental clarity.</p>
            
            <h2>Maximize the Effect</h2>
            <ul>
              <li><strong>Timing:</strong> Choose late afternoon or early evening.</li>
              <li><strong>Post-Treatment:</strong> Keep the evening calm, avoid screens.</li>
              <li><strong>Environment:</strong> Ensure your bedroom is dark, cool, and quiet.</li>
            </ul>
            <p>Want <strong>deeper sleep</strong>? <strong>Contact Hijama Harmony today</strong> to book your session.</p>
          `,
          category: 'Benefits',
          date: '2024-11-15',
          image: 'https://images.unsplash.com/photo-1511295742362-92c96b504802?auto=format&fit=crop&q=80',
          author: 'Hijama Harmony Team'
        },
        {
          id: 'hijama-detox-diet',
          title: 'Detox and Replenish: Hijama and Nutrition',
          excerpt: 'Leverage the body\'s natural healing! Learn how Hijama (wet cupping) supports detox and how nutritious food amplifies the effect.',
          content: `
            <p class="lead">When you want to feel better, it's often about two things: helping the body get rid of what it doesn't need – and refilling it with what makes it thrive.</p>

            <h2>Hijama as Natural Detox</h2>
            <p>The body has built-in detox systems: liver, kidneys, lymph. Hijama gives them a boost. Suction draws blood and fluid to the surface, increasing local circulation and stimulating the lymphatic system to remove waste.</p>
            <p>In <strong>wet cupping</strong>, small incisions allow "stagnant" blood to be removed. Many describe a feeling of lightness and feeling "cleansed" afterwards.</p>
            
            <h2>Nutrition – The Fuel That Matters</h2>
            <p>Cleansing is one thing – replenishing is another. After Hijama, the body needs good raw materials to repair. Important nutrients include:</p>
            <ul>
              <li><strong>Iron:</strong> In leafy greens, legumes, eggs, meat.</li>
              <li><strong>B-Vitamins:</strong> Key for blood formation and energy.</li>
              <li><strong>Hydration:</strong> Drink water or herbal tea to help transport waste.</li>
            </ul>
            
            <h2>Digestion & Hijama</h2>
            <p>Hijama has traditionally been used for digestive issues. Better circulation around digestive organs can ease digestion and reduce bloating. Combine with a fiber-rich diet for best results.</p>
            <p><strong>Contact Hijama Harmony</strong> to discuss how to support your body with the right nutrition and treatment.</p>
          `,
          category: 'Tips',
          date: '2024-11-20',
          image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80',
          author: 'Hijama Harmony Team'
        },
        {
          id: 'hijama-pain-relief',
          title: 'From Pain to Strength: Hijama for Pain Relief & Energy',
          excerpt: 'Say goodbye to pain – discover how Hijama can relieve pain, boost energy, and support an active lifestyle. Regain the joy of movement.',
          content: `
            <p class="lead">Chronic pain? Low energy? You are far from alone. Many struggle with back pain, stiffness, headaches, or general fatigue that makes life heavier than it needs to be.</p>

            <h2>Pain and Fatigue – The Difficult Combination</h2>
            <p>Chronic pain steals energy and affects sleep. This leads to a negative spiral: more pain leads to less movement, which leads to more stiffness. Hijama works with circulation, muscle tension, and the nervous system to break this cycle.</p>
            
            <h2>How Hijama Relieves Pain</h2>
            <p>Suction increases blood flow and removes metabolites like lactic acid. This reduces inflammation and increases mobility. Research shows cupping can trigger the release of endorphins – natural painkillers.</p>
            
            <h2>Energy – Waking Up Circulation</h2>
            <p>Improved circulation delivers more oxygen to cells. Many feel lighter and have more energy after treatment. When pain subsides, energy is freed up for other things.</p>
            
            <h2>Support for an Active Lifestyle</h2>
            <p>The goal is to get your life back – to walk, train, and play without pain. Hijama can be a key piece of the puzzle. When pain decreases and energy increases, it's easier to start training and building good habits.</p>
            <p>Imagine a life not ruled by pain. <strong>Hijama Harmony in Sandviken</strong> is here to help. <strong>Contact us today</strong> – your journey from pain to strength can start now.</p>
          `,
          category: 'Benefits',
          date: '2024-11-25',
          image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80',
          author: 'Hijama Harmony Team'
        }
      ]
    },
    booking: {
      title: "Book Your Session",
      description: "Find your harmony with us. Book easily via DM, email, or phone.",
      buttonText: "Send Booking Request",
      disclaimer: "Cancellations must be made at least 24 hours before the scheduled time.",
    },
    contact: {
      title: "Contact Details",
      formTitle: "Send a Message",
      nameLabel: "Your Name",
      emailLabel: "Your Email",
      messageLabel: "Message",
      sendButton: "Send",
      address: "Torggatan 5, 811 39 Sandviken",
      phone: "+46 76 022 30 42",
      email: "info@hijamaharmony.se",
      hours: "Open by appointment",
      social: "@hijama_harmony_"
    },
    ai: {
      title: "Ask Our AI Expert",
      description: "Questions about the treatment? Our Gemini-powered assistant can answer based on our guidelines.",
      placeholder: "E.g., How does it feel afterwards?",
      button: "Ask",
      disclaimer: "AI-generated answers do not replace professional medical advice.",
    },
    footer: {
      copyright: "© 2024 Hijama Harmony.",
      links: "Privacy Policy",
    },
  }
};