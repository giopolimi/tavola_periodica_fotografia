// ============================================================
// TAVOLA PERIODICA DEI GENERI FOTOGRAFICI
// ============================================================

const CATS = {
  portrait:    { label: "Ritratto & Moda",  abbr: "Ritratto",  bg: [152,53,86],   sym: [240,153,123], border: [113,43,19]  },
  landscape:   { label: "Paesaggio & Nat.", abbr: "Paesaggio", bg: [15,110,86],   sym: [93,202,165],  border: [8,80,65]    },
  street:      { label: "Strada & Sport",   abbr: "Strada",    bg: [83,74,183],   sym: [175,169,236], border: [60,52,137]  },
  documentary: { label: "Documentario",     abbr: "Doc.",      bg: [186,117,23],  sym: [250,199,117], border: [99,56,6]    },
  abstract:    { label: "Astratto & F.Art", abbr: "Astratto",  bg: [212,83,126],  sym: [237,147,177], border: [114,36,62]  },
  science:     { label: "Scientifico",      abbr: "Scienza",   bg: [23,95,165],   sym: [133,183,235], border: [12,68,124]  },
  commercial:  { label: "Comm. & Still",    abbr: "Comm.",     bg: [99,153,34],   sym: [151,196,89],  border: [39,80,10]   },
};

let GENRES = [
  { id:1,  symbol:'Rs',  name:'Ritratto in studio',  cat:'portrait',  row:1, col:1,
    desc:'Realizzato in ambiente controllato, con luce artificiale o naturale modellata, fondali neutri o tematici. Privilegia l\'isolamento del soggetto e la cura formale dell\'illuminazione (light shaping). Posa costruita.',
    maestri:'Nadar, Julia Margaret Cameron, August Sander, Yousuf Karsh, Irving Penn, Richard Avedon, Annie Leibovitz, Diane Arbus, Steve McCurry, Platon, Martin Schoeller',
    photoCredit:'', photoDate:'', image:'', imageDesc:'Soggetto isolato su fondo neutro, illuminazione studiata', categoria:'Fotografia di Ritratto' },
  { id:2,  symbol:'Ra',  name:'Ritratto ambientale (Environmental Portrait)',  cat:'portrait',  row:1, col:2,
    desc:'Il soggetto è ritratto nel proprio contesto di vita o lavoro: l\'ambiente diventa elemento narrativo che ne rivela ruolo, mestiere e identità sociale.',
    maestri:'Nadar, Julia Margaret Cameron, August Sander, Yousuf Karsh, Irving Penn, Richard Avedon, Annie Leibovitz, Diane Arbus, Steve McCurry, Platon, Martin Schoeller',
    photoCredit:'', photoDate:'', image:'', imageDesc:'Soggetto nel proprio ambiente di lavoro o vita quotidiana', categoria:'Fotografia di Ritratto' },
  { id:3,  symbol:'Au',  name:'Autoritratto (Self-portrait)',  cat:'portrait',  row:1, col:3,
    desc:'Il fotografo è insieme soggetto e oggetto. Strumento di indagine identitaria, esistenziale o di costruzione di personae.',
    maestri:'Nadar, Julia Margaret Cameron, August Sander, Yousuf Karsh, Irving Penn, Richard Avedon, Annie Leibovitz, Diane Arbus, Steve McCurry, Platon, Martin Schoeller',
    photoCredit:'', photoDate:'', image:'', imageDesc:'Il fotografo riflesso in uno specchio o ritratto da sé stesso', categoria:'Fotografia di Ritratto' },
  { id:4,  symbol:'Rg',  name:'Ritratto di gruppo',  cat:'portrait',  row:1, col:4,
    desc:'Più persone legate da relazioni familiari, professionali o sociali. Richiede gestione complessa di posa, sguardi e gerarchie compositive.',
    maestri:'Nadar, Julia Margaret Cameron, August Sander, Yousuf Karsh, Irving Penn, Richard Avedon, Annie Leibovitz, Diane Arbus, Steve McCurry, Platon, Martin Schoeller',
    photoCredit:'', photoDate:'', image:'', imageDesc:'Gruppo di persone in posa o in modo naturale', categoria:'Fotografia di Ritratto' },
  { id:5,  symbol:'Hc',  name:'Headshot e ritratto corporate',  cat:'portrait',  row:1, col:5,
    desc:'Ritratto formale, busto o mezzo busto, su fondo neutro, destinato a uso professionale.',
    maestri:'Nadar, Julia Margaret Cameron, August Sander, Yousuf Karsh, Irving Penn, Richard Avedon, Annie Leibovitz, Diane Arbus, Steve McCurry, Platon, Martin Schoeller',
    photoCredit:'', photoDate:'', image:'', imageDesc:'Primo piano o busto su sfondo neutro, stile professionale', categoria:'Fotografia di Ritratto' },
  { id:6,  symbol:'Rc',  name:'Ritratto candid',  cat:'portrait',  row:1, col:6,
    desc:'Non posato, spesso colto a soggetto inconsapevole. Si avvicina alla street e al fotogiornalismo.',
    maestri:'Nadar, Julia Margaret Cameron, August Sander, Yousuf Karsh, Irving Penn, Richard Avedon, Annie Leibovitz, Diane Arbus, Steve McCurry, Platon, Martin Schoeller',
    photoCredit:'', photoDate:'', image:'', imageDesc:'Soggetto colto in modo spontaneo, senza posa', categoria:'Fotografia di Ritratto' },
  { id:7,  symbol:'Rp',  name:'Ritratto psicologico / d\'autore',  cat:'portrait',  row:1, col:7,
    desc:'Punta alla restituzione profonda della soggettività, spesso con resa formalmente scarna ma intensa, talvolta perturbante.',
    maestri:'Nadar, Julia Margaret Cameron, August Sander, Yousuf Karsh, Irving Penn, Richard Avedon, Annie Leibovitz, Diane Arbus, Steve McCurry, Platon, Martin Schoeller',
    photoCredit:'', photoDate:'', image:'', imageDesc:'Ritratto intenso e psicologicamente denso, spesso in bianco e nero', categoria:'Fotografia di Ritratto' },
  { id:8,  symbol:'Bg',  name:'Boudoir e glamour',  cat:'portrait',  row:1, col:8,
    desc:'Ritrattistica intima e sensuale, con forte cura di luce, trucco e abiti.',
    maestri:'Nadar, Julia Margaret Cameron, August Sander, Yousuf Karsh, Irving Penn, Richard Avedon, Annie Leibovitz, Diane Arbus, Steve McCurry, Platon, Martin Schoeller',
    photoCredit:'', photoDate:'', image:'', imageDesc:'Ritratto intimo o patinato, luce morbida e cura estetica', categoria:'Fotografia di Ritratto' },
  { id:9,  symbol:'Fe',  name:'Fashion editoriale',  cat:'portrait',  row:1, col:9,
    desc:'Servizi narrativi pubblicati su riviste (Vogue, Harper\'s Bazaar, W). Ampio margine creativo, tematizzazione, storytelling.',
    maestri:'Edward Steichen, Cecil Beaton, Horst P. Horst, Richard Avedon, Irving Penn, Helmut Newton, Guy Bourdin, Peter Lindbergh, Steven Meisel, Mario Testino, Patrick Demarchelier, David LaChapelle, Tim Walker, Paolo Roversi',
    photoCredit:'', photoDate:'', image:'', imageDesc:'Servizio moda narrativo e tematizzato su rivista', categoria:'Fotografia di Moda' },
  { id:10,  symbol:'Hm',  name:'Alta moda (Haute Couture)',  cat:'portrait',  row:1, col:10,
    desc:'Iconografia delle collezioni couture: forte cura del set, abito come scultura, pose statuarie.',
    maestri:'Edward Steichen, Cecil Beaton, Horst P. Horst, Richard Avedon, Irving Penn, Helmut Newton, Guy Bourdin, Peter Lindbergh, Steven Meisel, Mario Testino, Patrick Demarchelier, David LaChapelle, Tim Walker, Paolo Roversi',
    photoCredit:'', photoDate:'', image:'', imageDesc:'Modella in abito couture su set curato e pose statuarie', categoria:'Fotografia di Moda' },
  { id:11,  symbol:'Be',  name:'Beauty',  cat:'portrait',  row:1, col:11,
    desc:'Volti, pelle, trucco, capelli in primissimo piano. Forte cura della luce e dei dettagli.',
    maestri:'Edward Steichen, Cecil Beaton, Horst P. Horst, Richard Avedon, Irving Penn, Helmut Newton, Guy Bourdin, Peter Lindbergh, Steven Meisel, Mario Testino, Patrick Demarchelier, David LaChapelle, Tim Walker, Paolo Roversi',
    photoCredit:'', photoDate:'', image:'', imageDesc:'Primo piano di volto con attenzione a trucco, pelle e capelli', categoria:'Fotografia di Moda' },
  { id:12,  symbol:'Cl',  name:'Catalogo e lookbook',  cat:'portrait',  row:1, col:12,
    desc:'Funzione commerciale: presentazione chiara del prodotto. Set neutri, luce piana.',
    maestri:'Edward Steichen, Cecil Beaton, Horst P. Horst, Richard Avedon, Irving Penn, Helmut Newton, Guy Bourdin, Peter Lindbergh, Steven Meisel, Mario Testino, Patrick Demarchelier, David LaChapelle, Tim Walker, Paolo Roversi',
    photoCredit:'', photoDate:'', image:'', imageDesc:'Modella in abito su fondo neutro con luce piana', categoria:'Fotografia di Moda' },
  { id:13,  symbol:'Ag',  name:'Avant-garde fashion',  cat:'portrait',  row:1, col:13,
    desc:'Sperimentazione visiva spinta, contaminazione con surrealismo, performance, fashion come linguaggio artistico.',
    maestri:'Edward Steichen, Cecil Beaton, Horst P. Horst, Richard Avedon, Irving Penn, Helmut Newton, Guy Bourdin, Peter Lindbergh, Steven Meisel, Mario Testino, Patrick Demarchelier, David LaChapelle, Tim Walker, Paolo Roversi',
    photoCredit:'', photoDate:'', image:'', imageDesc:'Set sperimentale con elementi surreali o visivamente estremi', categoria:'Fotografia di Moda' },
  { id:14,  symbol:'Sk',  name:'Street fashion',  cat:'portrait',  row:1, col:14,
    desc:'Documenta la moda in the wild: stile reale, sfilate viste fuori dalle passerelle, persone comuni come icone di stile.',
    maestri:'Edward Steichen, Cecil Beaton, Horst P. Horst, Richard Avedon, Irving Penn, Helmut Newton, Guy Bourdin, Peter Lindbergh, Steven Meisel, Mario Testino, Patrick Demarchelier, David LaChapelle, Tim Walker, Paolo Roversi',
    photoCredit:'', photoDate:'', image:'', imageDesc:'Persone stilose fotografate in strada fuori dalle sfilate', categoria:'Fotografia di Moda' },
  { id:15,  symbol:'Na',  name:'Nudo artistico',  cat:'portrait',  row:1, col:15,
    desc:'Approccio plastico-formale, scultoreo. Corpo come paesaggio o forma astratta.',
    maestri:'Eadweard Muybridge, Edward Weston, Imogen Cunningham, Bill Brandt, Lucien Clergue, Helmut Newton, Robert Mapplethorpe, Ruth Bernhard, Spencer Tunick',
    photoCredit:'', photoDate:'', image:'', imageDesc:'Corpo nudo fotografato come forma scultorea o paesaggio', categoria:'Fotografia di Nudo' },
  { id:16,  symbol:'Ne',  name:'Nudo erotico / glamour',  cat:'portrait',  row:1, col:16,
    desc:'Componente sensuale o esplicita prevalente, spesso al confine con la moda.',
    maestri:'Eadweard Muybridge, Edward Weston, Imogen Cunningham, Bill Brandt, Lucien Clergue, Helmut Newton, Robert Mapplethorpe, Ruth Bernhard, Spencer Tunick',
    photoCredit:'', photoDate:'', image:'', imageDesc:'Nudo con connotazione sensuale e cura estetica della luce', categoria:'Fotografia di Nudo' },
  { id:17,  symbol:'Bo',  name:'Boudoir',  cat:'portrait',  row:1, col:17,
    desc:'Nudo intimo in interni, con soggetti privati.',
    maestri:'Eadweard Muybridge, Edward Weston, Imogen Cunningham, Bill Brandt, Lucien Clergue, Helmut Newton, Robert Mapplethorpe, Ruth Bernhard, Spencer Tunick',
    photoCredit:'', photoDate:'', image:'', imageDesc:'Nudo in ambiente intimo domestico con luce morbida', categoria:'Fotografia di Nudo' },
  { id:18,  symbol:'Nm',  name:'Nudo di massa / corpo politico',  cat:'portrait',  row:1, col:18,
    desc:'Corpi nudi come soggetto collettivo, con valenza estetica, politica o di occupazione dello spazio.',
    maestri:'Eadweard Muybridge, Edward Weston, Imogen Cunningham, Bill Brandt, Lucien Clergue, Helmut Newton, Robert Mapplethorpe, Ruth Bernhard, Spencer Tunick',
    photoCredit:'', photoDate:'', image:'', imageDesc:'Folla di persone nude in spazio pubblico (installazione)', categoria:'Fotografia di Nudo' },
  { id:19,  symbol:'Ns',  name:'Nudo scientifico e del movimento',  cat:'portrait',  row:2, col:1,
    desc:'Origini ottocentesche dello studio del corpo in azione. Antesignana del cinema.',
    maestri:'Eadweard Muybridge, Edward Weston, Imogen Cunningham, Bill Brandt, Lucien Clergue, Helmut Newton, Robert Mapplethorpe, Ruth Bernhard, Spencer Tunick',
    photoCredit:'', photoDate:'', image:'', imageDesc:'Sequenza cronofotografica di corpo in movimento', categoria:'Fotografia di Nudo' },
  { id:20,  symbol:'Pn',  name:'Paesaggio naturale',  cat:'landscape',  row:2, col:2,
    desc:'Soggetto sono montagne, deserti, foreste, fiumi, zone selvagge. Tradizione americana: previsualizzazione, zone system, grande formato.',
    maestri:'Carleton Watkins, Eadweard Muybridge, Timothy O\'Sullivan, Ansel Adams, Edward Weston, Galen Rowell, Sebastião Salgado, Hiroshi Sugimoto, Andreas Gursky, Michael Kenna',
    photoCredit:'', photoDate:'', image:'', imageDesc:'Montagna, deserto o foresta con luce naturale', categoria:'Fotografia di Paesaggio' },
  { id:21,  symbol:'Pu',  name:'Paesaggio urbano (Cityscape)',  cat:'landscape',  row:2, col:3,
    desc:'La città come organismo: skyline, architetture, vie, piazze. Spesso lavora con ore blu, ore d\'oro e luci notturne.',
    maestri:'Carleton Watkins, Eadweard Muybridge, Timothy O\'Sullivan, Ansel Adams, Edward Weston, Galen Rowell, Sebastião Salgado, Hiroshi Sugimoto, Andreas Gursky, Michael Kenna',
    photoCredit:'', photoDate:'', image:'', imageDesc:'Skyline o vie urbane con luce dorata o notturna', categoria:'Fotografia di Paesaggio' },
  { id:22,  symbol:'Se',  name:'Seascape (paesaggio marino)',  cat:'landscape',  row:2, col:4,
    desc:'Mare e costa come soggetto. Spesso lavora sull\'orizzonte, la lunga esposizione e la riduzione formale.',
    maestri:'Carleton Watkins, Eadweard Muybridge, Timothy O\'Sullivan, Ansel Adams, Edward Weston, Galen Rowell, Sebastião Salgado, Hiroshi Sugimoto, Andreas Gursky, Michael Kenna',
    photoCredit:'', photoDate:'', image:'', imageDesc:'Orizzonte marino con lunga esposizione, acqua seta', categoria:'Fotografia di Paesaggio' },
  { id:23,  symbol:'Nt',  name:'Paesaggio notturno',  cat:'landscape',  row:2, col:5,
    desc:'Lunghe esposizioni, condizioni di scarsa luce, presenza di stelle, luna o luci artificiali.',
    maestri:'Carleton Watkins, Eadweard Muybridge, Timothy O\'Sullivan, Ansel Adams, Edward Weston, Galen Rowell, Sebastião Salgado, Hiroshi Sugimoto, Andreas Gursky, Michael Kenna',
    photoCredit:'', photoDate:'', image:'', imageDesc:'Paesaggio sotto cielo stellato o luce lunare con lunga esposizione', categoria:'Fotografia di Paesaggio' },
  { id:24,  symbol:'Pa',  name:'Paesaggio aereo',  cat:'landscape',  row:2, col:6,
    desc:'Vista dall\'alto (aereo, elicottero, drone). Tende a una grammatica per pattern e astrazione geometrica del territorio.',
    maestri:'Carleton Watkins, Eadweard Muybridge, Timothy O\'Sullivan, Ansel Adams, Edward Weston, Galen Rowell, Sebastião Salgado, Hiroshi Sugimoto, Andreas Gursky, Michael Kenna',
    photoCredit:'', photoDate:'', image:'', imageDesc:'Territorio visto dall\'alto con pattern geometrici', categoria:'Fotografia di Paesaggio' },
  { id:25,  symbol:'Np',  name:'Paesaggio antropizzato (New Topographics)',  cat:'landscape',  row:2, col:7,
    desc:'Territori modificati dall\'uomo (parcheggi, periferie, infrastrutture), ripresi senza enfasi estetica.',
    maestri:'Carleton Watkins, Eadweard Muybridge, Timothy O\'Sullivan, Ansel Adams, Edward Weston, Galen Rowell, Sebastião Salgado, Hiroshi Sugimoto, Andreas Gursky, Michael Kenna',
    photoCredit:'', photoDate:'', image:'', imageDesc:'Periferia, parcheggio o infrastruttura ripresi con distanza neutra', categoria:'Fotografia di Paesaggio' },
  { id:26,  symbol:'Pm',  name:'Paesaggio minimalista',  cat:'landscape',  row:2, col:8,
    desc:'Composizione ridotta a pochi elementi, ampi vuoti, riduzione tonale.',
    maestri:'Carleton Watkins, Eadweard Muybridge, Timothy O\'Sullivan, Ansel Adams, Edward Weston, Galen Rowell, Sebastião Salgado, Hiroshi Sugimoto, Andreas Gursky, Michael Kenna',
    photoCredit:'', photoDate:'', image:'', imageDesc:'Paesaggio essenziale con pochi elementi e ampi spazi vuoti', categoria:'Fotografia di Paesaggio' },
  { id:27,  symbol:'Wl',  name:'Wildlife (fauna selvatica)',  cat:'landscape',  row:2, col:9,
    desc:'Animali nel loro habitat. Si valutano comportamento, momento, luce, distanza.',
    maestri:'Eliot Porter, Frans Lanting, Art Wolfe, Nick Brandt, Vincent Munier, Tim Laman, Steve Winter, David Doubilet, Cristina Mittermeier, Paul Nicklen',
    photoCredit:'', photoDate:'', image:'', imageDesc:'Animale selvatico nel suo habitat naturale', categoria:'Fotografia Naturalistica' },
  { id:28,  symbol:'Av',  name:'Avifauna (Bird Photography)',  cat:'landscape',  row:2, col:10,
    desc:'Sottocategoria del wildlife dedicata agli uccelli: in volo, in habitat, in comportamento riproduttivo.',
    maestri:'Eliot Porter, Frans Lanting, Art Wolfe, Nick Brandt, Vincent Munier, Tim Laman, Steve Winter, David Doubilet, Cristina Mittermeier, Paul Nicklen',
    photoCredit:'', photoDate:'', image:'', imageDesc:'Uccello in volo o nel proprio habitat', categoria:'Fotografia Naturalistica' },
  { id:29,  symbol:'Mk',  name:'Macro',  cat:'landscape',  row:2, col:11,
    desc:'Riprende soggetti molto piccoli con forte ingrandimento. Lavora su profondità di campo ridotta, focus stacking.',
    maestri:'Eliot Porter, Frans Lanting, Art Wolfe, Nick Brandt, Vincent Munier, Tim Laman, Steve Winter, David Doubilet, Cristina Mittermeier, Paul Nicklen',
    photoCredit:'', photoDate:'', image:'', imageDesc:'Insetto o fiore ingrandito con profondità di campo ridotta', categoria:'Fotografia Naturalistica' },
  { id:30,  symbol:'Sb',  name:'Subacquea',  cat:'landscape',  row:2, col:12,
    desc:'Vita marina e ambienti sommersi.',
    maestri:'Eliot Porter, Frans Lanting, Art Wolfe, Nick Brandt, Vincent Munier, Tim Laman, Steve Winter, David Doubilet, Cristina Mittermeier, Paul Nicklen',
    photoCredit:'', photoDate:'', image:'', imageDesc:'Fauna marina o ambiente subacqueo con luce filtrata', categoria:'Fotografia Naturalistica' },
  { id:31,  symbol:'Bt',  name:'Botanica e flora',  cat:'landscape',  row:2, col:13,
    desc:'Piante, fiori, dettagli vegetali, isolati o in habitat.',
    maestri:'Eliot Porter, Frans Lanting, Art Wolfe, Nick Brandt, Vincent Munier, Tim Laman, Steve Winter, David Doubilet, Cristina Mittermeier, Paul Nicklen',
    photoCredit:'', photoDate:'', image:'', imageDesc:'Fiore o pianta con dettaglio botanico', categoria:'Fotografia Naturalistica' },
  { id:32,  symbol:'Ae',  name:'Architettura esterni',  cat:'landscape',  row:2, col:14,
    desc:'Edificio nel suo contesto, con luce naturale che ne modella i volumi.',
    maestri:'Eugène Atget, Berenice Abbott, Julius Shulman, Ezra Stoller, Lucien Hervé, Bernd e Hilla Becher, Hélène Binet, Hiroshi Sugimoto, Iwan Baan, Candida Höfer, Andreas Gursky',
    photoCredit:'', photoDate:'', image:'', imageDesc:'Edificio fotografato all\'esterno con luce naturale', categoria:'Fotografia di Architettura' },
  { id:33,  symbol:'Ai',  name:'Architettura interni',  cat:'landscape',  row:2, col:15,
    desc:'Spazi interni, materiali, arredi, atmosfere.',
    maestri:'Eugène Atget, Berenice Abbott, Julius Shulman, Ezra Stoller, Lucien Hervé, Bernd e Hilla Becher, Hélène Binet, Hiroshi Sugimoto, Iwan Baan, Candida Höfer, Andreas Gursky',
    photoCredit:'', photoDate:'', image:'', imageDesc:'Interno di edificio con luce diffusa e spazio simmetrico', categoria:'Fotografia di Architettura' },
  { id:34,  symbol:'Ac',  name:'Architettura urbana e paesaggio costruito',  cat:'landscape',  row:2, col:16,
    desc:'Si sovrappone al cityscape: si concentra sul tessuto urbano stratificato.',
    maestri:'Eugène Atget, Berenice Abbott, Julius Shulman, Ezra Stoller, Lucien Hervé, Bernd e Hilla Becher, Hélène Binet, Hiroshi Sugimoto, Iwan Baan, Candida Höfer, Andreas Gursky',
    photoCredit:'', photoDate:'', image:'', imageDesc:'Tessuto urbano stratificato, strade e facciate', categoria:'Fotografia di Architettura' },
  { id:35,  symbol:'Td',  name:'Tipologica (Düsseldorf School)',  cat:'landscape',  row:2, col:17,
    desc:'Inventario seriale di edifici/strutture dello stesso tipo, fotografate frontalmente con luce piatta.',
    maestri:'Eugène Atget, Berenice Abbott, Julius Shulman, Ezra Stoller, Lucien Hervé, Bernd e Hilla Becher, Hélène Binet, Hiroshi Sugimoto, Iwan Baan, Candida Höfer, Andreas Gursky',
    photoCredit:'', photoDate:'', image:'', imageDesc:'Serie di strutture simili (es. torri d\'acqua) in griglia comparativa', categoria:'Fotografia di Architettura' },
  { id:36,  symbol:'Ar',  name:'Architettura industriale',  cat:'landscape',  row:2, col:18,
    desc:'Stabilimenti, infrastrutture, archeologia industriale.',
    maestri:'Eugène Atget, Berenice Abbott, Julius Shulman, Ezra Stoller, Lucien Hervé, Bernd e Hilla Becher, Hélène Binet, Hiroshi Sugimoto, Iwan Baan, Candida Höfer, Andreas Gursky',
    photoCredit:'', photoDate:'', image:'', imageDesc:'Fabbrica, gasometro o infrastruttura industriale', categoria:'Fotografia di Architettura' },
  { id:37,  symbol:'St',  name:'Street classica / del momento decisivo',  cat:'street',  row:3, col:1,
    desc:'Codificata dalla scuola francese e dalla Magnum: composizione rigorosa, geometria, attesa del momento perfetto.',
    maestri:'Henri Cartier-Bresson, Robert Doisneau, Walker Evans, Helen Levitt, Robert Frank, Garry Winogrand, Lee Friedlander, Joel Meyerowitz, William Klein, Saul Leiter, Vivian Maier, Daido Moriyama, Bruce Gilden, Alex Webb',
    photoCredit:'', photoDate:'', image:'', imageDesc:'Scena urbana colta nel momento decisivo, bianco e nero', categoria:'Fotografia di Strada' },
  { id:38,  symbol:'Sa',  name:'Street americana del dopoguerra',  cat:'street',  row:3, col:2,
    desc:'Più cruda, energica, frammentaria. Sguardo errante e disilluso sull\'American Way of Life.',
    maestri:'Henri Cartier-Bresson, Robert Doisneau, Walker Evans, Helen Levitt, Robert Frank, Garry Winogrand, Lee Friedlander, Joel Meyerowitz, William Klein, Saul Leiter, Vivian Maier, Daido Moriyama, Bruce Gilden, Alex Webb',
    photoCredit:'', photoDate:'', image:'', imageDesc:'Strada americana con atmosfera grezza e spontanea', categoria:'Fotografia di Strada' },
  { id:39,  symbol:'Sg',  name:'Street giapponese (cerchia Provoke)',  cat:'street',  row:3, col:3,
    desc:'Linguaggio sgranato, sfocato, sovraesposto: estetica are, bure, boke della rivista Provoke (1968-69).',
    maestri:'Henri Cartier-Bresson, Robert Doisneau, Walker Evans, Helen Levitt, Robert Frank, Garry Winogrand, Lee Friedlander, Joel Meyerowitz, William Klein, Saul Leiter, Vivian Maier, Daido Moriyama, Bruce Gilden, Alex Webb',
    photoCredit:'', photoDate:'', image:'', imageDesc:'Scene urbane sgranate, sfocate, ad alto contrasto', categoria:'Fotografia di Strada' },
  { id:40,  symbol:'Sc',  name:'Street a colori',  cat:'street',  row:3, col:4,
    desc:'Riabilitazione del colore nel linguaggio fotografico autoriale a partire da fine anni \'50.',
    maestri:'Henri Cartier-Bresson, Robert Doisneau, Walker Evans, Helen Levitt, Robert Frank, Garry Winogrand, Lee Friedlander, Joel Meyerowitz, William Klein, Saul Leiter, Vivian Maier, Daido Moriyama, Bruce Gilden, Alex Webb',
    photoCredit:'', photoDate:'', image:'', imageDesc:'Scene di strada con uso espressivo del colore', categoria:'Fotografia di Strada' },
  { id:41,  symbol:'Sf',  name:'Street ravvicinata e flash',  cat:'street',  row:3, col:5,
    desc:'Approccio invadente, ravvicinato, spesso con flash diretto. Frontalità che viola il soggetto.',
    maestri:'Henri Cartier-Bresson, Robert Doisneau, Walker Evans, Helen Levitt, Robert Frank, Garry Winogrand, Lee Friedlander, Joel Meyerowitz, William Klein, Saul Leiter, Vivian Maier, Daido Moriyama, Bruce Gilden, Alex Webb',
    photoCredit:'', photoDate:'', image:'', imageDesc:'Ritratto ravvicinato con flash diretto in strada', categoria:'Fotografia di Strada' },
  { id:42,  symbol:'As',  name:'Action sportiva',  cat:'street',  row:3, col:6,
    desc:'Coglie il gesto agonistico nel suo apice. Richiede tempi rapidi, ottiche lunghe, anticipazione del momento.',
    maestri:'Hy Peskin, Walter Iooss Jr., Neil Leifer, Robert Riger, Heinz Kluetmeier, Lyle Owerko',
    photoCredit:'', photoDate:'', image:'', imageDesc:'Atleta in azione nel momento culminante della competizione', categoria:'Fotografia Sportiva' },
  { id:43,  symbol:'Rsp',  name:'Ritratto sportivo',  cat:'street',  row:3, col:7,
    desc:'Atleta come icona, in studio o in contesto.',
    maestri:'Hy Peskin, Walter Iooss Jr., Neil Leifer, Robert Riger, Heinz Kluetmeier, Lyle Owerko',
    photoCredit:'', photoDate:'', image:'', imageDesc:'Atleta ritratto in studio o in contesto sportivo', categoria:'Fotografia Sportiva' },
  { id:44,  symbol:'Sx',  name:'Sport estremi / outdoor',  cat:'street',  row:3, col:8,
    desc:'Arrampicata, surf, base jumping. Spesso fotografo è anche praticante.',
    maestri:'Hy Peskin, Walter Iooss Jr., Neil Leifer, Robert Riger, Heinz Kluetmeier, Lyle Owerko',
    photoCredit:'', photoDate:'', image:'', imageDesc:'Atleta in sport estremo (arrampicata, surf, alpinismo)', categoria:'Fotografia Sportiva' },
  { id:45,  symbol:'Fj',  name:'Fotogiornalismo (News / Press)',  cat:'documentary',  row:3, col:9,
    desc:'Copertura di eventi di cronaca per stampa periodica, agenzie, settimanali.',
    maestri:'Mathew Brady, Jacob Riis, Lewis Hine, Walker Evans, Dorothea Lange, Robert Capa, W. Eugene Smith, Eve Arnold, Don McCullin, Larry Burrows, James Nachtwey, Sebastião Salgado, Susan Meiselas, Mary Ellen Mark, Gilles Peress',
    photoCredit:'', photoDate:'', image:'', imageDesc:'Immagine iconica di evento di cronaca o notizia', categoria:'Fotografia Documentaria e Fotogiornalismo' },
  { id:46,  symbol:'Gx',  name:'Fotografia di guerra e di conflitto',  cat:'documentary',  row:3, col:10,
    desc:'Sottofamiglia del fotogiornalismo dedicata a guerre, conflitti armati, post-conflitto.',
    maestri:'Mathew Brady, Jacob Riis, Lewis Hine, Walker Evans, Dorothea Lange, Robert Capa, W. Eugene Smith, Eve Arnold, Don McCullin, Larry Burrows, James Nachtwey, Sebastião Salgado, Susan Meiselas, Mary Ellen Mark, Gilles Peress',
    photoCredit:'', photoDate:'', image:'', imageDesc:'Scene di conflitto armato, soldati, civili in guerra', categoria:'Fotografia Documentaria e Fotogiornalismo' },
  { id:47,  symbol:'Cs',  name:'Fotografia sociale e umanitaria',  cat:'documentary',  row:3, col:11,
    desc:'Documenta condizioni di disuguaglianza, povertà, sfruttamento, marginalità per finalità di denuncia.',
    maestri:'Mathew Brady, Jacob Riis, Lewis Hine, Walker Evans, Dorothea Lange, Robert Capa, W. Eugene Smith, Eve Arnold, Don McCullin, Larry Burrows, James Nachtwey, Sebastião Salgado, Susan Meiselas, Mary Ellen Mark, Gilles Peress',
    photoCredit:'', photoDate:'', image:'', imageDesc:'Persone in condizioni di povertà o marginalità sociale', categoria:'Fotografia Documentaria e Fotogiornalismo' },
  { id:48,  symbol:'Et',  name:'Documentaria etnografica e antropologica',  cat:'documentary',  row:3, col:12,
    desc:'Studia popolazioni, culture e modi di vita, spesso con rigore quasi tassonomico.',
    maestri:'Mathew Brady, Jacob Riis, Lewis Hine, Walker Evans, Dorothea Lange, Robert Capa, W. Eugene Smith, Eve Arnold, Don McCullin, Larry Burrows, James Nachtwey, Sebastião Salgado, Susan Meiselas, Mary Ellen Mark, Gilles Peress',
    photoCredit:'', photoDate:'', image:'', imageDesc:'Comunità indigena o tradizionale nel proprio contesto culturale', categoria:'Fotografia Documentaria e Fotogiornalismo' },
  { id:49,  symbol:'Ld',  name:'Long-form documentary / saggio fotografico',  cat:'documentary',  row:3, col:13,
    desc:'Progetti di lunga durata che evolvono in libro o mostra, con tema unitario e narrazione articolata.',
    maestri:'Mathew Brady, Jacob Riis, Lewis Hine, Walker Evans, Dorothea Lange, Robert Capa, W. Eugene Smith, Eve Arnold, Don McCullin, Larry Burrows, James Nachtwey, Sebastião Salgado, Susan Meiselas, Mary Ellen Mark, Gilles Peress',
    photoCredit:'', photoDate:'', image:'', imageDesc:'Serie narrativa su un tema unitario sviluppata nel tempo', categoria:'Fotografia Documentaria e Fotogiornalismo' },
  { id:50,  symbol:'Ds',  name:'Documentaria storica e d\'archivio',  cat:'documentary',  row:3, col:14,
    desc:'Documentazione di eventi e luoghi storici, anche con valore d\'archivio e ricostruzione.',
    maestri:'Mathew Brady, Jacob Riis, Lewis Hine, Walker Evans, Dorothea Lange, Robert Capa, W. Eugene Smith, Eve Arnold, Don McCullin, Larry Burrows, James Nachtwey, Sebastião Salgado, Susan Meiselas, Mary Ellen Mark, Gilles Peress',
    photoCredit:'', photoDate:'', image:'', imageDesc:'Immagine storica di archivio con valenza documentale', categoria:'Fotografia Documentaria e Fotogiornalismo' },
  { id:51,  symbol:'Gm',  name:'Astratta geometrica e materica',  cat:'abstract',  row:3, col:15,
    desc:'Astrazione che parte dal reale (muri, vegetazione, superfici) per estrarne pattern e gesti grafici.',
    maestri:'Alvin Langdon Coburn, László Moholy-Nagy, Aaron Siskind, Harry Callahan, Minor White, Wolfgang Tillmans, Hiroshi Sugimoto',
    photoCredit:'', photoDate:'', image:'', imageDesc:'Superficie o dettaglio di muro che diventa pattern astratto', categoria:'Fotografia Astratta' },
  { id:52,  symbol:'Sp',  name:'Sperimentale e cameraless',  cat:'abstract',  row:3, col:16,
    desc:'Immagini ottenute senza macchina fotografica: fotogrammi, chemigrammi, luminogrammi.',
    maestri:'Alvin Langdon Coburn, László Moholy-Nagy, Aaron Siskind, Harry Callahan, Minor White, Wolfgang Tillmans, Hiroshi Sugimoto',
    photoCredit:'', photoDate:'', image:'', imageDesc:'Fotogramma o impronta di oggetti su carta fotosensibile', categoria:'Fotografia Astratta' },
  { id:53,  symbol:'Pi',  name:'Pittoricista / fotografia equivalent',  cat:'abstract',  row:3, col:17,
    desc:'Immagini riconoscibili (nuvole, acqua) usate come metafora emotiva astratta.',
    maestri:'Alvin Langdon Coburn, László Moholy-Nagy, Aaron Siskind, Harry Callahan, Minor White, Wolfgang Tillmans, Hiroshi Sugimoto',
    photoCredit:'', photoDate:'', image:'', imageDesc:'Nuvole o acqua fotografate come metafore emotive', categoria:'Fotografia Astratta' },
  { id:54,  symbol:'Vt',  name:'Staged / tableaux vivants',  cat:'abstract',  row:3, col:18,
    desc:'Scene costruite e dirette dal fotografo, con attori, set, illuminazione cinematografica.',
    maestri:'Alfred Stieglitz, Man Ray, Edward Weston, Diane Arbus, Cindy Sherman, Jeff Wall, Andreas Gursky, Hiroshi Sugimoto, Gregory Crewdson, Wolfgang Tillmans, Nan Goldin, Sally Mann',
    photoCredit:'', photoDate:'', image:'', imageDesc:'Scena costruita e diretta come un tableau cinematografico', categoria:'Fotografia Fine Art e Concettuale' },
  { id:55,  symbol:'Cp',  name:'Concettuale (puro)',  cat:'abstract',  row:4, col:1,
    desc:'L\'idea conta più dell\'oggetto. La foto è documento di un\'operazione concettuale o seriale.',
    maestri:'Alfred Stieglitz, Man Ray, Edward Weston, Diane Arbus, Cindy Sherman, Jeff Wall, Andreas Gursky, Hiroshi Sugimoto, Gregory Crewdson, Wolfgang Tillmans, Nan Goldin, Sally Mann',
    photoCredit:'', photoDate:'', image:'', imageDesc:'Serie sistematica che documenta un\'operazione concettuale', categoria:'Fotografia Fine Art e Concettuale' },
  { id:56,  symbol:'Su',  name:'Surrealista',  cat:'abstract',  row:4, col:2,
    desc:'Erede del surrealismo storico: gioco con sogno, inconscio, doppio, manipolazione visiva.',
    maestri:'Alfred Stieglitz, Man Ray, Edward Weston, Diane Arbus, Cindy Sherman, Jeff Wall, Andreas Gursky, Hiroshi Sugimoto, Gregory Crewdson, Wolfgang Tillmans, Nan Goldin, Sally Mann',
    photoCredit:'', photoDate:'', image:'', imageDesc:'Composizione onirica con elementi incongrui e atmosfera surreale', categoria:'Fotografia Fine Art e Concettuale' },
  { id:57,  symbol:'Di',  name:'Diaristica intima',  cat:'abstract',  row:4, col:3,
    desc:'Documento autobiografico delle vite del fotografo e del proprio cerchio: amici, amanti, famiglia, malattia.',
    maestri:'Alfred Stieglitz, Man Ray, Edward Weston, Diane Arbus, Cindy Sherman, Jeff Wall, Andreas Gursky, Hiroshi Sugimoto, Gregory Crewdson, Wolfgang Tillmans, Nan Goldin, Sally Mann',
    photoCredit:'', photoDate:'', image:'', imageDesc:'Istantanea intima di vita quotidiana del fotografo e della sua cerchia', categoria:'Fotografia Fine Art e Concettuale' },
  { id:58,  symbol:'Ap',  name:'Appropriazione e post-fotografia',  cat:'abstract',  row:4, col:4,
    desc:'Riuso e citazione di immagini esistenti; dissoluzione del concetto di autorialità del singolo scatto.',
    maestri:'Alfred Stieglitz, Man Ray, Edward Weston, Diane Arbus, Cindy Sherman, Jeff Wall, Andreas Gursky, Hiroshi Sugimoto, Gregory Crewdson, Wolfgang Tillmans, Nan Goldin, Sally Mann',
    photoCredit:'', photoDate:'', image:'', imageDesc:'Fotografia rifotografata o appropriata da un\'altra immagine', categoria:'Fotografia Fine Art e Concettuale' },
  { id:59,  symbol:'Sl',  name:'Still life d\'autore',  cat:'commercial',  row:4, col:5,
    desc:'Oggetti come pretesto per ricerca formale, simbolica o materica.',
    maestri:'Edward Steichen, Edward Weston, Irving Penn, Karl Blossfeldt, Paul Outerbridge, Robert Mapplethorpe, Wolfgang Tillmans, Laura Letinsky',
    photoCredit:'', photoDate:'', image:'', imageDesc:'Composizione di oggetti con luce studiata e valenza estetica', categoria:'Fotografia Still Life' },
  { id:60,  symbol:'Fo',  name:'Food',  cat:'commercial',  row:4, col:6,
    desc:'Cibo come oggetto. Si articola tra editoriale (riviste, libri di cucina) e pubblicitario (packaging, brand).',
    maestri:'Edward Steichen, Edward Weston, Irving Penn, Karl Blossfeldt, Paul Outerbridge, Robert Mapplethorpe, Wolfgang Tillmans, Laura Letinsky',
    photoCredit:'', photoDate:'', image:'', imageDesc:'Cibo composto e illuminato con cura', categoria:'Fotografia Still Life' },
  { id:61,  symbol:'Pr',  name:'Product',  cat:'commercial',  row:4, col:7,
    desc:'Prodotti commerciali (orologi, bottiglie, cosmetici, automotive). Tecnica avanzata di luce, riflessi, post-produzione.',
    maestri:'Edward Steichen, Edward Weston, Irving Penn, Karl Blossfeldt, Paul Outerbridge, Robert Mapplethorpe, Wolfgang Tillmans, Laura Letinsky',
    photoCredit:'', photoDate:'', image:'', imageDesc:'Prodotto commerciale isolato con luce tecnica precisa', categoria:'Fotografia Still Life' },
  { id:62,  symbol:'Tv',  name:'Tabletop e vanitas',  cat:'commercial',  row:4, col:8,
    desc:'Composizioni su piano (tabletop). Vanitas riprende la tradizione barocca con simboli della caducità.',
    maestri:'Edward Steichen, Edward Weston, Irving Penn, Karl Blossfeldt, Paul Outerbridge, Robert Mapplethorpe, Wolfgang Tillmans, Laura Letinsky',
    photoCredit:'', photoDate:'', image:'', imageDesc:'Composizione con teschio, fiori appassiti o frutta marcia su piano', categoria:'Fotografia Still Life' },
  { id:63,  symbol:'Uw',  name:'Fotografia subacquea',  cat:'landscape',  row:5, col:1,
    desc:'Riprese sotto la superficie dell\'acqua. Richiede attrezzatura stagna, illuminazione dedicata, conoscenza dell\'ambiente marino.',
    maestri:'David Doubilet, Paul Nicklen, Ernst Haas, Zena Holloway, Howard Schatz',
    photoCredit:'', photoDate:'', image:'', imageDesc:'Fauna marina o diver in ambiente subacqueo con luce blu', categoria:'Fotografia Subacquea' },
  { id:64,  symbol:'Dr',  name:'Fotografia aerea e da drone',  cat:'landscape',  row:5, col:2,
    desc:'Vista zenitale o dall\'alto del territorio. Forte resa grafica.',
    maestri:'Yann Arthus-Bertrand, Edward Burtynsky, Emmet Gowin, George Steinmetz, Cassio Vasconcellos',
    photoCredit:'', photoDate:'', image:'', imageDesc:'Territorio visto dall\'alto con pattern e geometrie visibili', categoria:'Fotografia Aerea e da Drone' },
  { id:65,  symbol:'Vg',  name:'Fotografia di viaggio',  cat:'landscape',  row:5, col:3,
    desc:'Documenta luoghi, persone e culture in chiave esperienziale.',
    maestri:'Steve McCurry, Jimmy Nelson, Michael Yamashita, Jodi Cobb, Cristina García Rodero',
    photoCredit:'', photoDate:'', image:'', imageDesc:'Luogo, persona o rito culturale in contesto di viaggio', categoria:'Fotografia di Viaggio' },
  { id:66,  symbol:'Nn',  name:'Fotografia notturna',  cat:'street',  row:5, col:4,
    desc:'Lunghe esposizioni, alti ISO, luci artificiali. Soggetti: città, paesaggi, cieli, ritratti notturni.',
    maestri:'Brassaï, Bill Brandt, Michael Kenna, Rut Blees Luxemburg, Todd Hido',
    photoCredit:'', photoDate:'', image:'', imageDesc:'Scena notturna urbana o naturale con lunga esposizione', categoria:'Fotografia Notturna' },
  { id:67,  symbol:'Wr',  name:'Matrimonio reportage',  cat:'documentary',  row:5, col:5,
    desc:'Approccio narrativo non posato che documenta la giornata come reportage.',
    maestri:'Jeff Ascough, Yervant Zanazanian, Jerry Ghionis',
    photoCredit:'', photoDate:'', image:'', imageDesc:'Momento spontaneo durante una cerimonia di matrimonio', categoria:'Fotografia di Matrimonio ed Eventi' },
  { id:68,  symbol:'Wf',  name:'Matrimonio editoriale e fine art',  cat:'documentary',  row:5, col:6,
    desc:'Ispirazione fashion, set e luce curati, post-produzione raffinata.',
    maestri:'Jeff Ascough, Yervant Zanazanian, Jerry Ghionis, José Villa',
    photoCredit:'', photoDate:'', image:'', imageDesc:'Sposi in posa curata con luce cinematografica', categoria:'Fotografia di Matrimonio ed Eventi' },
  { id:69,  symbol:'Ev',  name:'Eventi (corporate, pubblici)',  cat:'documentary',  row:5, col:7,
    desc:'Conferenze, premiazioni, concerti, eventi politici. Affine al fotogiornalismo.',
    maestri:'Jeff Ascough, Yervant Zanazanian, Jerry Ghionis, José Villa',
    photoCredit:'', photoDate:'', image:'', imageDesc:'Evento pubblico o cerimonia con pubblico', categoria:'Fotografia di Matrimonio ed Eventi' },
  { id:70,  symbol:'Dk',  name:'Cielo profondo (Deep Sky)',  cat:'science',  row:5, col:8,
    desc:'Galassie, nebulose, ammassi stellari. Strumenti astronomici dedicati.',
    maestri:'Babak Tafreshi, Marco Lorenzi, Petr Horálek, Adam Block',
    photoCredit:'', photoDate:'', image:'', imageDesc:'Nebulosa o galassia con dettaglio ad alta risoluzione', categoria:'Astrofotografia' },
  { id:71,  symbol:'Ss',  name:'Sistema solare (alta risoluzione)',  cat:'science',  row:5, col:9,
    desc:'Sole, Luna, pianeti. Tecnica del lucky imaging.',
    maestri:'Babak Tafreshi, Marco Lorenzi, Petr Horálek, Adam Block',
    photoCredit:'', photoDate:'', image:'', imageDesc:'Pianeta (Giove, Saturno) con dettaglio ad alta risoluzione', categoria:'Astrofotografia' },
  { id:72,  symbol:'Ng',  name:'Paesaggistica notturna (Nightscape)',  cat:'science',  row:5, col:10,
    desc:'Cielo stellato e Via Lattea integrati nel paesaggio terrestre.',
    maestri:'Babak Tafreshi, Marco Lorenzi, Petr Horálek, Adam Block',
    photoCredit:'', photoDate:'', image:'', imageDesc:'Via Lattea sopra paesaggio naturale o montagna', categoria:'Astrofotografia' },
  { id:73,  symbol:'Fs',  name:'Fotografia scientifica generale',  cat:'science',  row:5, col:11,
    desc:'Documentazione di esperimenti, fenomeni, oggetti di laboratorio.',
    maestri:'Harold Edgerton, Berenice Abbott, Lennart Nilsson, Wilhelm Röntgen, Alphonse Bertillon, Weegee, Eadweard Muybridge, Étienne-Jules Marey',
    photoCredit:'', photoDate:'', image:'', imageDesc:'Fenomeno fisico catturato con stroboscopia (es. goccia d\'acqua)', categoria:'Fotografia Scientifica e Tecnica' },
  { id:74,  symbol:'Mi',  name:'Microfotografia',  cat:'science',  row:5, col:12,
    desc:'Soggetti molto piccoli, attraverso microscopio ottico o elettronico.',
    maestri:'Harold Edgerton, Berenice Abbott, Lennart Nilsson, Wilhelm Röntgen, Alphonse Bertillon, Weegee, Eadweard Muybridge, Étienne-Jules Marey',
    photoCredit:'', photoDate:'', image:'', imageDesc:'Cellula, cristallo o organismo microscopico visto al microscopio', categoria:'Fotografia Scientifica e Tecnica' },
  { id:75,  symbol:'Mr',  name:'Fotografia medica e radiologica',  cat:'science',  row:5, col:13,
    desc:'Documentazione clinica, dermatologica, chirurgica, radiografie.',
    maestri:'Harold Edgerton, Berenice Abbott, Lennart Nilsson, Wilhelm Röntgen, Alphonse Bertillon, Weegee, Eadweard Muybridge, Étienne-Jules Marey',
    photoCredit:'', photoDate:'', image:'', imageDesc:'Radiografia o immagine medica diagnostica', categoria:'Fotografia Scientifica e Tecnica' },
  { id:76,  symbol:'Ff',  name:'Fotografia forense',  cat:'science',  row:5, col:14,
    desc:'Scene del crimine, prove. Sistematizzata da Alphonse Bertillon con l\'antropometria e la segnaletica.',
    maestri:'Harold Edgerton, Berenice Abbott, Lennart Nilsson, Wilhelm Röntgen, Alphonse Bertillon, Weegee, Eadweard Muybridge, Étienne-Jules Marey',
    photoCredit:'', photoDate:'', image:'', imageDesc:'Scena urbana notturna di cronaca nera (stile Weegee)', categoria:'Fotografia Scientifica e Tecnica' },
  { id:77,  symbol:'Cr',  name:'Cronofotografia',  cat:'science',  row:5, col:15,
    desc:'Decomposizione del movimento in fotografie successive, antesignana del cinema.',
    maestri:'Harold Edgerton, Berenice Abbott, Lennart Nilsson, Wilhelm Röntgen, Alphonse Bertillon, Weegee, Eadweard Muybridge, Étienne-Jules Marey',
    photoCredit:'', photoDate:'', image:'', imageDesc:'Sequenza multipla di un movimento su una stessa lastra', categoria:'Fotografia Scientifica e Tecnica' },
  { id:78,  symbol:'In',  name:'Fotografia industriale',  cat:'commercial',  row:5, col:16,
    desc:'Documenta impianti, processi produttivi, infrastrutture, archeologia industriale.',
    maestri:'Albert Renger-Patzsch, Charles Sheeler, Bernd e Hilla Becher, Edward Burtynsky, Sebastião Salgado, Gabriele Basilico',
    photoCredit:'', photoDate:'', image:'', imageDesc:'Stabilimento industriale, torre o infrastruttura fotografata con rigore formale', categoria:'Fotografia Industriale' },
  { id:79,  symbol:'Pc',  name:'Fotografia pubblicitaria e commerciale',  cat:'commercial',  row:5, col:17,
    desc:'Realizzata per finalità di marketing: campagne, packaging, cataloghi, comunicazione di brand.',
    maestri:'Erwin Blumenfeld, Irving Penn, Annie Leibovitz, David LaChapelle, Oliviero Toscani, Erik Almås',
    photoCredit:'', photoDate:'', image:'', imageDesc:'Immagine pubblicitaria con prodotto o soggetto in set curato', categoria:'Fotografia Pubblicitaria e Commerciale' }
];

// ═══════════════════════════════════════════════════════════════
// STATO GLOBALE
// ═══════════════════════════════════════════════════════════════
let activeFilter  = 'all';
let selectedGenre = null;
let hoveredGenre  = null;
let cells         = [];   // celle blocco principale (righe 1–4)
let extraCells    = [];   // celle blocco tecnico (generi con row >= 5)
let images        = {};

// ── LAYOUT BLOCCO PRINCIPALE ─────────────────────────────────
const MAIN_COLS  = 18;   // riga 4 ha 18 elementi → larghezza fissa
const MAIN_ROWS  = 4;    // righe 1–4

// ── LAYOUT BLOCCO TECNICO ────────────────────────────────────
const EXTRA_COLS = 12;   // max 12 celle per riga, poi va a capo
                          // allineato a destra rispetto alla griglia principale

const GAP     = 3;
const PAD_X   = 38;      // margine sinistro (dove stanno i numeri di riga)
const PAD_TOP = 72;      // spazio sopra la prima riga
const PAD_BOT = 40;

// Gap verticale tra blocco principale e blocco tecnico
const EXTRA_GAP = 48;

// Larghezza della colonna etichetta a sinistra del blocco tecnico
const LABEL_COL_W = 54;

// PANEL
const PANEL_W   = 310;
const PANEL_PAD = 18;

// HEADER
const HDR_H = 62;
const SEP_H = 1;

// LEGENDA
const LEG_H      = 26;
const LEG_ITEM_W = 108;

// Calcolate in buildCells()
let cw, ch, totalH;

// Animazione pannello
let panelOpen    = false;
let panelX       = 0;
let panelTargetX = 0;

// ═══════════════════════════════════════════════════════════════
// P5.JS SKETCH
// ═══════════════════════════════════════════════════════════════

function setup() {
  buildCells();
  let cnv = createCanvas(windowWidth, totalH + HDR_H + SEP_H + LEG_H + 10);
  cnv.style('display', 'block');
  panelX       = width + PANEL_W;
  panelTargetX = width + PANEL_W;
  textFont('monospace');
}

// ── COSTRUZIONE GRIGLIA ──────────────────────────────────────
function buildCells() {
  cells      = [];
  extraCells = [];

  // Dimensione cella basata su MAIN_COLS (18) e larghezza finestra
  cw = floor((windowWidth - PAD_X * 2 - GAP * (MAIN_COLS - 1)) / MAIN_COLS);
  cw = max(cw, 28);
  ch = max(36, round(cw * 1.12));

  // ── Generi suddivisi ─────────────────────────────────────
  const mainGenres  = GENRES.filter(g => g.row <= MAIN_ROWS);
  const extraGenres = GENRES.filter(g => g.row >  MAIN_ROWS);

  // ── Blocco principale: righe 1–4, 18 colonne ─────────────
  const mainMap = {};
  mainGenres.forEach(g => { mainMap[`${g.row}_${g.col}`] = g; });

  for (let r = 1; r <= MAIN_ROWS; r++) {
    for (let c = 1; c <= MAIN_COLS; c++) {
      const x = PAD_X + (c - 1) * (cw + GAP);
      const y = HDR_H + SEP_H + LEG_H + 10 + PAD_TOP + (r - 1) * (ch + GAP);
      cells.push({ x, y, w: cw, h: ch, genre: mainMap[`${r}_${c}`] || null });
    }
  }

  // ── Blocco tecnico: EXTRA_COLS colonne, allineato a destra ─
  // Larghezza totale del blocco principale
  const mainGridW = MAIN_COLS * cw + (MAIN_COLS - 1) * GAP;
  // Larghezza del blocco extra (12 colonne, stessa cw)
  const extraGridW = EXTRA_COLS * cw + (EXTRA_COLS - 1) * GAP;
  // X di partenza: allineato a destra rispetto alla griglia principale
  const extraStartX = PAD_X + mainGridW - extraGridW;
  // Y di partenza: dopo il gap
  const extraBaseY  = HDR_H + SEP_H + LEG_H + 10 + PAD_TOP + MAIN_ROWS * (ch + GAP) + EXTRA_GAP;

  // Quante righe servono per tutti i generi extra con EXTRA_COLS colonne per riga
  const extraRowCount = Math.ceil(extraGenres.length / EXTRA_COLS);

  extraGenres.forEach((g, idx) => {
    const rowIdx = Math.floor(idx / EXTRA_COLS); // 0-based
    const colIdx = idx % EXTRA_COLS;             // 0-based
    const x = extraStartX + colIdx * (cw + GAP);
    const y = extraBaseY  + rowIdx * (ch + GAP);
    extraCells.push({ x, y, w: cw, h: ch, genre: g });
  });

  // Altezza totale canvas
  totalH = PAD_TOP
    + MAIN_ROWS * (ch + GAP)
    + EXTRA_GAP
    + extraRowCount * (ch + GAP)
    + PAD_BOT;
}

// ── DRAW PRINCIPALE ─────────────────────────────────────────
function draw() {
  background(13, 13, 13);
  panelX = lerp(panelX, panelTargetX, 0.18);

  drawHeader();
  drawSeparator();
  drawLegend();
  drawMainCoords();
  drawExtraBlock();
  drawCells();
  drawPanel();
}

// ── HEADER ──────────────────────────────────────────────────
function drawHeader() {
  noStroke();
  fill(212, 168, 67);
  textSize(26);
  textAlign(LEFT, TOP);
  textStyle(BOLD);
  text('TAVOLA PERIODICA', PAD_X, 10);
  textStyle(NORMAL);
  fill(110, 105, 98);
  textSize(11);
  text('DEI GENERI FOTOGRAFICI  —  EDIZIONE I', PAD_X, 38);
}

// ── LINEA SEPARATRICE ────────────────────────────────────────
function drawSeparator() {
  stroke(40, 38, 35);
  strokeWeight(0.5);
  line(PAD_X, HDR_H + 1, width - PAD_X, HDR_H + 1);
  noStroke();
}

// ── LEGENDA ──────────────────────────────────────────────────
function drawLegend() {
  const cats = [
    ['all', [136, 136, 136], 'Tutti'],
    ...Object.entries(CATS).map(([k, v]) => [k, v.sym, v.abbr])
  ];
  const startY = HDR_H + SEP_H + 2;
  const itemW  = min(LEG_ITEM_W, (width - PAD_X * 2) / cats.length);

  cats.forEach(([key, col, label], i) => {
    const x        = PAD_X + i * itemW;
    const y        = startY;
    const isActive = activeFilter === key;

    if (isActive) {
      noStroke();
      fill(25, 25, 25);
      rect(x, y, itemW - 3, LEG_H - 2, 2);
    }
    fill(col[0], col[1], col[2]);
    noStroke();
    rect(x + 7, y + LEG_H / 2 - 4, 7, 7, 1);
    fill(isActive ? 195 : 80, isActive ? 193 : 78, isActive ? 189 : 74);
    textSize(8.5);
    textAlign(LEFT, CENTER);
    textStyle(NORMAL);
    text(label, x + 20, y + LEG_H / 2);
  });
}

// ── COORDINATE BLOCCO PRINCIPALE ────────────────────────────
function drawMainCoords() {
  textSize(max(7, cw * 0.09));
  textStyle(NORMAL);

  // Numeri colonne sopra riga 1
  for (let c = 1; c <= MAIN_COLS; c++) {
    const x = PAD_X + (c - 1) * (cw + GAP) + cw / 2;
    const y = HDR_H + SEP_H + LEG_H + 10 + PAD_TOP - 13;
    fill(48, 46, 44);
    textAlign(CENTER, CENTER);
    text(c, x, y);
  }
  // Numeri righe
  for (let r = 1; r <= MAIN_ROWS; r++) {
    const y = HDR_H + SEP_H + LEG_H + 10 + PAD_TOP + (r - 1) * (ch + GAP) + ch / 2;
    fill(48, 46, 44);
    textAlign(RIGHT, CENTER);
    text(r, PAD_X - 9, y);
  }
}

// ── BLOCCO TECNICO: etichetta + celle + coordinate ───────────
function drawExtraBlock() {
  const extraGenres = GENRES.filter(g => g.row > MAIN_ROWS);
  if (extraGenres.length === 0) return;

  const mainGridW  = MAIN_COLS * cw + (MAIN_COLS - 1) * GAP;
  const extraGridW = EXTRA_COLS * cw + (EXTRA_COLS - 1) * GAP;
  const extraStartX = PAD_X + mainGridW - extraGridW;
  const extraBaseY  = HDR_H + SEP_H + LEG_H + 10 + PAD_TOP + MAIN_ROWS * (ch + GAP) + EXTRA_GAP;
  const extraRowCount = Math.ceil(extraGenres.length / EXTRA_COLS);
  const extraBlockH   = extraRowCount * (ch + GAP) - GAP;

  // ── Etichetta verticale a sinistra del blocco extra ──────
  const labelX = extraStartX - LABEL_COL_W;
  const labelCX = (PAD_X + extraStartX) / 2;
  const labelCY = extraBaseY + extraBlockH / 2;

  stroke(45, 43, 40);
  strokeWeight(0.5);
  line(extraStartX - 10, extraBaseY, extraStartX - 10, extraBaseY + extraBlockH);
  noStroke();

  push();
  translate(labelCX, labelCY);
  rotate(-HALF_PI);
  textAlign(CENTER, CENTER);
  textStyle(BOLD);
  fill(160, 155, 148);
  textSize(10);
  text('TECNICHE SPECIALISTICHE', 0, 0);
  textStyle(NORMAL);
  fill(90, 86, 82);
  textSize(8);
  text('& APPLICATIVE', 0, 13);
  pop();

  // ── Coordinate del blocco extra ──────────────────────────
  textSize(max(7, cw * 0.09));
  textStyle(NORMAL);

  for (let c = 1; c <= EXTRA_COLS; c++) {
    const x = extraStartX + (c - 1) * (cw + GAP) + cw / 2;
    fill(48, 46, 44);
    textAlign(CENTER, CENTER);
    text(c, x, extraBaseY - 13);
  }
  for (let ri = 0; ri < extraRowCount; ri++) {
    const y = extraBaseY + ri * (ch + GAP) + ch / 2;
    fill(48, 46, 44);
    textAlign(RIGHT, CENTER);
    text(MAIN_ROWS + 1 + ri, PAD_X - 9, y);
  }
}

// ── CELLE BLOCCO PRINCIPALE ──────────────────────────────────
function drawCells() {
  cells.forEach(cell => drawCell(cell, false));
  extraCells.forEach(cell => drawCell(cell, true));
}

function truncateName(name, maxW) {
  if (textWidth(name) <= maxW) return name;
  let t = name;
  while (t.length > 1 && textWidth(t + '…') > maxW) t = t.slice(0, -1);
  return t + '…';
}

function drawCell(cell, isExtra) {
  const g        = cell.genre;
  const isHov    = hoveredGenre  && g && hoveredGenre.id  === g.id;
  const isSel    = selectedGenre && g && selectedGenre.id === g.id;
  const filtered = activeFilter !== 'all' && g && g.cat !== activeFilter;

  if (!g) {
    noFill();
    stroke(20, 20, 20);
    strokeWeight(0.5);
    rect(cell.x, cell.y, cell.w, cell.h, 1);
    return;
  }

  const c   = CATS[g.cat] || Object.values(CATS)[0];
  const dim = filtered ? 0.08 : 1;

  push();
  translate(cell.x, cell.y);

  const bgAlpha = isHov && !filtered ? 52 : 30;
  fill(c.bg[0], c.bg[1], c.bg[2], 255 * bgAlpha / 100 * dim);
  const bAlpha  = filtered ? 18 : (isSel ? 255 : (isHov ? 180 : 100));
  stroke(c.border[0], c.border[1], c.border[2], bAlpha);
  strokeWeight(isSel ? 1.5 : (isHov ? 1 : 0.5));
  rect(0, 0, cell.w, cell.h, 1);

  if (isSel) {
    noFill();
    stroke(212, 168, 67, 50);
    strokeWeight(1);
    rect(-2, -2, cell.w + 4, cell.h + 4, 2);
  }
  noStroke();

  textSize(max(5, cw * 0.1));
  fill(65, 63, 60, 255 * dim);
  textAlign(LEFT, TOP);
  textStyle(NORMAL);
  text(g.id, 3, 2);

  if (g.image && g.image.length > 0) {
    fill(212, 168, 67, 200 * dim);
    noStroke();
    ellipse(cell.w - 5, 5, 4, 4);
  }

  const symSz = max(10, min(cw * 0.38, ch * 0.40));
  textSize(symSz);
  textStyle(BOLD);
  fill(c.sym[0], c.sym[1], c.sym[2], 255 * dim);
  textAlign(CENTER, CENTER);
  text(g.symbol, cell.w / 2, cell.h * 0.44);

  const nameSz = max(5.5, min(cw * 0.115, 8.5));
  textSize(nameSz);
  textStyle(NORMAL);
  fill(130, 127, 122, 255 * dim);
  textAlign(CENTER, BOTTOM);
  text(truncateName(g.name, cell.w - 4), cell.w / 2, cell.h - 3);

  pop();
}

// ═══════════════════════════════════════════════════════════════
// PANNELLO DETTAGLIO
// ═══════════════════════════════════════════════════════════════

function getNavigableList() {
  return activeFilter === 'all' ? GENRES : GENRES.filter(g => g.cat === activeFilter);
}

function drawImagePlaceholder(x, y, w, h, g) {
  const c = CATS[g.cat] || Object.values(CATS)[0];
  fill(16, 16, 16);
  stroke(26, 26, 24);
  strokeWeight(0.5);
  rect(x, y, w, h, 2);
  noStroke();
  fill(c.bg[0], c.bg[1], c.bg[2], 60);
  rect(x, y + h - 3, w, 3, 0, 0, 2, 2);

  const cx = x + w / 2;
  const icY = y + h * 0.28;
  const sz  = min(w, h) * 0.14;
  fill(c.sym[0], c.sym[1], c.sym[2], 40);
  noStroke();
  rectMode(CENTER);
  rect(cx, icY, sz * 2.8, sz * 2, 3);
  rect(cx - sz * 0.5, icY - sz * 1.1, sz * 1.1, sz * 0.7, 2);
  rectMode(CORNER);
  noFill();
  stroke(c.sym[0], c.sym[1], c.sym[2], 55);
  strokeWeight(1);
  ellipse(cx, icY, sz * 1.4, sz * 1.4);
  noStroke();

  const desc = g.imageDesc || '';
  if (desc.length > 0) {
    const maxW  = w - 16;
    const descY = y + h * 0.52;
    fill(c.sym[0], c.sym[1], c.sym[2], 50);
    textSize(7);
    textAlign(CENTER, TOP);
    textStyle(NORMAL);
    text('SOGGETTO IDEALE', cx, descY - 14);
    stroke(c.border[0], c.border[1], c.border[2], 35);
    strokeWeight(0.5);
    line(x + 12, descY - 5, x + w - 12, descY - 5);
    noStroke();
    fill(85, 82, 78);
    textSize(8.5);
    textAlign(CENTER, TOP);
    textStyle(NORMAL);
    drawWrappedTextCentered(desc, cx, descY, maxW, 13);
  } else {
    fill(40, 38, 36);
    textSize(8);
    textAlign(CENTER, CENTER);
    textStyle(NORMAL);
    text('nessuna immagine', cx, y + h / 2 + 16);
  }
}

function drawWrappedTextCentered(txt, cx, y, maxW, lineH) {
  const words = txt.split(' ');
  let line = '', cy = y;
  textAlign(CENTER, TOP);
  words.forEach(word => {
    const test = line + (line ? ' ' : '') + word;
    if (textWidth(test) > maxW && line) { text(line, cx, cy); cy += lineH; line = word; }
    else line = test;
  });
  if (line) text(line, cx, cy);
}

function drawPanel() {
  if (!selectedGenre && panelX >= width) return;
  const px = round(panelX);
  const g  = selectedGenre;

  fill(14, 14, 14);
  noStroke();
  rect(px, 0, PANEL_W, height);
  stroke(30, 30, 30);
  strokeWeight(0.5);
  line(px, 0, px, height);
  noStroke();
  if (!g) return;

  const c       = CATS[g.cat] || Object.values(CATS)[0];
  const tx      = px + PANEL_PAD;
  const navList = getNavigableList();
  const navIdx  = navList.findIndex(x => x.id === g.id);
  const hasPrev = navIdx > 0;
  const hasNext = navIdx < navList.length - 1;
  let ty        = 18;

  if (navList.length > 1) {
    fill(45, 43, 40); textSize(8); textAlign(LEFT, CENTER); textStyle(NORMAL);
    text(`${navIdx + 1} / ${navList.length}`, tx, ty + 11);
  }

  const prevX  = px + PANEL_W - 32 - 26 - 26;
  const nextX  = px + PANEL_W - 32 - 26;
  const closeX = px + PANEL_W - 32;
  const btnY   = ty;

  [
    [prevX, hasPrev, '‹'],
    [nextX, hasNext, '›'],
    [closeX, true,   '✕'],
  ].forEach(([bx, active, ch_]) => {
    fill(active ? 32 : 20, active ? 32 : 20, active ? 30 : 18);
    stroke(38, 38, 36); strokeWeight(0.5);
    rect(bx, btnY, 22, 22, 2); noStroke();
    fill(active ? 90 : 38, active ? 88 : 36, active ? 85 : 34);
    textSize(11); textAlign(CENTER, CENTER);
    text(ch_, bx + 11, btnY + 11);
  });
  ty += 32;

  stroke(25, 25, 23); strokeWeight(0.5);
  line(tx, ty, px + PANEL_W - PANEL_PAD, ty); noStroke(); ty += 12;

  fill(62, 60, 57); textSize(8.5); textAlign(LEFT, TOP); textStyle(NORMAL);
  text(`— ${String(g.id).padStart(2, '0')} —`, tx, ty); ty += 15;

  fill(c.sym[0], c.sym[1], c.sym[2]); textSize(48); textStyle(BOLD);
  text(g.symbol, tx, ty); ty += 54;

  fill(205, 201, 195); textSize(11); textStyle(NORMAL); textAlign(LEFT, TOP);
  const maxW = PANEL_W - PANEL_PAD * 2;
  if (textWidth(g.name) > maxW) {
    drawWrappedText(g.name, tx, ty, maxW, 15);
    ty += measureWrappedText(g.name, maxW, 15) + 4;
  } else { text(g.name, tx, ty); ty += 16; }

  fill(c.sym[0], c.sym[1], c.sym[2], 200); textSize(8); textAlign(LEFT, TOP); textStyle(NORMAL);
  text((g.categoria || c.label || g.cat).toUpperCase(), tx, ty); ty += 14;

  stroke(28, 28, 26); strokeWeight(0.5);
  line(tx, ty, px + PANEL_W - PANEL_PAD, ty); noStroke(); ty += 13;

  const imgW = PANEL_W - PANEL_PAD * 2;
  const imgH = round(imgW * 0.68);

  if (g.image && g.image.length > 0 && images[g.image]) {
    image(images[g.image], tx, ty, imgW, imgH); ty += imgH + 4;
    const credit = g.photoCredit || '', pdate = g.photoDate || '';
    if (credit || pdate) {
      fill(48, 46, 43); textSize(7.5); textAlign(RIGHT, TOP); textStyle(NORMAL);
      text(`${credit}${pdate ? '  ·  ' + pdate : ''}`, px + PANEL_W - PANEL_PAD, ty);
      ty += 14;
    } else ty += 4;
  } else if (g.image && g.image.length > 0) {
    fill(16, 16, 16); stroke(26, 26, 24); strokeWeight(0.5);
    rect(tx, ty, imgW, imgH, 2); noStroke();
    fill(55, 52, 48); textSize(8); textAlign(CENTER, CENTER);
    text('caricamento…', tx + imgW / 2, ty + imgH / 2); ty += imgH + 8;
  } else {
    drawImagePlaceholder(tx, ty, imgW, imgH, g); ty += imgH + 4;
    fill(40, 38, 35); textSize(7); textAlign(RIGHT, TOP); textStyle(NORMAL);
    text('nessuna immagine — aggiungi un URL nel campo image', px + PANEL_W - PANEL_PAD, ty);
    ty += 14;
  }

  stroke(28, 28, 26); strokeWeight(0.5);
  line(tx, ty, px + PANEL_W - PANEL_PAD, ty); noStroke(); ty += 11;

  fill(105, 102, 98); textSize(9.5); textStyle(NORMAL); textAlign(LEFT, TOP);
  drawWrappedText(g.desc || '—', tx, ty, maxW, 16);
  ty += measureWrappedText(g.desc || '—', maxW, 16) + 13;

  stroke(28, 28, 26); strokeWeight(0.5);
  line(tx, ty, px + PANEL_W - PANEL_PAD, ty); noStroke(); ty += 10;

  fill(52, 50, 47); textSize(8); textStyle(NORMAL); textAlign(LEFT, TOP);
  text('MAESTRI', tx, ty);
  fill(162, 158, 152); textSize(8); textStyle(NORMAL); textAlign(RIGHT, TOP);
  const rightEdge = px + PANEL_W - PANEL_PAD;
  const names = (g.maestri || '—').split(', ');
  let mLine = '', mCy = ty;
  names.forEach(name => {
    const test = mLine + (mLine ? ', ' : '') + name;
    if (textWidth(test) > maxW && mLine) { text(mLine, rightEdge, mCy); mCy += 13; mLine = name; }
    else mLine = test;
  });
  if (mLine) text(mLine, rightEdge, mCy);
}

function drawWrappedText(txt, x, y, maxW, lineH) {
  const words = txt.split(' ');
  let line = '', cy = y;
  words.forEach(word => {
    const test = line + (line ? ' ' : '') + word;
    if (textWidth(test) > maxW && line) { text(line, x, cy); cy += lineH; line = word; }
    else line = test;
  });
  if (line) text(line, x, cy);
}

function measureWrappedText(txt, maxW, lineH) {
  const words = txt.split(' ');
  let line = '', lines = 1;
  words.forEach(word => {
    const test = line + (line ? ' ' : '') + word;
    if (textWidth(test) > maxW && line) { lines++; line = word; }
    else line = test;
  });
  return lines * lineH;
}

// ═══════════════════════════════════════════════════════════════
// INTERAZIONE
// ═══════════════════════════════════════════════════════════════

function getPanelLeft() { return round(panelX); }
function isOverPanel(mx) { return panelOpen && mx >= getPanelLeft(); }

function mouseClicked() {
  const mx = mouseX, my = mouseY;
  const px = getPanelLeft();

  if (panelOpen && mx >= px) {
    const btnY = 18, closeX = px + PANEL_W - 32;
    const prevX = px + PANEL_W - 32 - 26 - 26, nextX = px + PANEL_W - 32 - 26;
    if (mx >= closeX && mx <= closeX + 22 && my >= btnY && my <= btnY + 22) { closePanel(); return; }
    if (mx >= prevX  && mx <= prevX  + 22 && my >= btnY && my <= btnY + 22) { navigatePanel(-1); return; }
    if (mx >= nextX  && mx <= nextX  + 22 && my >= btnY && my <= btnY + 22) { navigatePanel(1);  return; }
    return;
  }

  const cats   = [['all', [136,136,136], 'Tutti'], ...Object.entries(CATS).map(([k,v]) => [k, v.sym, v.abbr])];
  const startY = HDR_H + SEP_H + 2;
  const itemW  = min(LEG_ITEM_W, (width - PAD_X * 2) / cats.length);
  if (my >= startY && my <= startY + LEG_H) {
    const i = floor((mx - PAD_X) / itemW);
    if (i >= 0 && i < cats.length) { activeFilter = cats[i][0]; return; }
  }

  for (const cell of cells) {
    if (!cell.genre) continue;
    if (panelOpen && cell.x + cell.w >= getPanelLeft()) continue;
    if (mx >= cell.x && mx <= cell.x + cell.w && my >= cell.y && my <= cell.y + cell.h) {
      const g = cell.genre;
      if (activeFilter === 'all' || g.cat === activeFilter) { openPanel(g); return; }
    }
  }
  for (const cell of extraCells) {
    if (!cell.genre) continue;
    if (panelOpen && cell.x + cell.w >= getPanelLeft()) continue;
    if (mx >= cell.x && mx <= cell.x + cell.w && my >= cell.y && my <= cell.y + cell.h) {
      const g = cell.genre;
      if (activeFilter === 'all' || g.cat === activeFilter) { openPanel(g); return; }
    }
  }

  if (selectedGenre && !isOverPanel(mx)) closePanel();
}

function mouseMoved() {
  const px = getPanelLeft();
  let found = null;
  const allCells = [...cells, ...extraCells];
  for (const cell of allCells) {
    if (!cell.genre) continue;
    if (panelOpen && cell.x + cell.w >= px) continue;
    if (mouseX >= cell.x && mouseX <= cell.x + cell.w &&
        mouseY >= cell.y && mouseY <= cell.y + cell.h) {
      found = cell.genre; break;
    }
  }
  if (found !== hoveredGenre) { hoveredGenre = found; cursor(found ? HAND : ARROW); }
}

function windowResized() {
  buildCells();
  resizeCanvas(windowWidth, totalH + HDR_H + SEP_H + LEG_H + 10);
  panelX       = width + (panelOpen ? -PANEL_W : PANEL_W);
  panelTargetX = width + (panelOpen ? -PANEL_W : PANEL_W);
}

function keyPressed() {
  if (!panelOpen) return;
  if (keyCode === LEFT_ARROW)  navigatePanel(-1);
  if (keyCode === RIGHT_ARROW) navigatePanel(1);
  if (keyCode === ESCAPE)      closePanel();
}

function openPanel(g) {
  selectedGenre = g;
  panelOpen     = true;
  panelTargetX  = width - PANEL_W;
  if (g.image && g.image.length > 0 && !images[g.image]) {
    loadImage(g.image, img => { images[g.image] = img; }, () => { images[g.image] = null; });
  }
}

function closePanel() {
  selectedGenre = null;
  panelOpen     = false;
  panelTargetX  = width + PANEL_W;
  cursor(ARROW);
}

function navigatePanel(dir) {
  const list = getNavigableList();
  const idx  = list.findIndex(x => x.id === selectedGenre.id);
  const ni   = idx + dir;
  if (ni >= 0 && ni < list.length) {
    selectedGenre = list[ni];
    if (selectedGenre.image && selectedGenre.image.length > 0 && !images[selectedGenre.image]) {
      loadImage(selectedGenre.image, img => { images[selectedGenre.image] = img; }, () => { images[selectedGenre.image] = null; });
    }
  }
}

// ═══════════════════════════════════════════════════════════════
// CSV IMPORT
// ═══════════════════════════════════════════════════════════════
function parseAndLoadCSV(text) {
  const lines   = text.trim().split('\n');
  const headers = lines[0].split(',').map(h => h.trim().toLowerCase());
  const parsed  = lines.slice(1).map(line => {
    const vals = [];
    let cur = '', inQ = false;
    for (let ch of line) {
      if (ch === '"') inQ = !inQ;
      else if (ch === ',' && !inQ) { vals.push(cur); cur = ''; }
      else cur += ch;
    }
    vals.push(cur);
    const obj = {};
    headers.forEach((h, i) => { obj[h] = (vals[i] || '').trim(); });
    obj.id          = parseInt(obj.id)  || 0;
    obj.row         = parseInt(obj.row) || 1;
    obj.col         = parseInt(obj.col) || 1;
    obj.photoCredit = obj.photocredit || obj.photoCredit || '';
    obj.photoDate   = obj.photodate   || obj.photoDate   || '';
    obj.imageDesc   = obj.imagedesc   || obj.imageDesc   || '';
    return obj;
  }).filter(o => o.id > 0);
  return parsed;
}

window.loadGenresFromCSV = function(text) {
  GENRES = parseAndLoadCSV(text);
  images = {};
  buildCells();
  resizeCanvas(windowWidth, totalH + HDR_H + SEP_H + LEG_H + 10);
};