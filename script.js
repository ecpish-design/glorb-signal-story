(() => {
  const A = 'assests/';

  const mainPages = [
    {
      source: 'story-01-ship-going-down.svg',
      kicker: 'SOMEWHERE IN ZORBAX',
      title: 'SHIP IS GOING DOWN',
      alt: 'Glorb in his spaceship as the dashboard alarms, followed by his ship crashing.',
      transcript: `Somewhere in Zorbax.\n\nShip is going down. I repeat, ship is going down. According to my notes, all elements are pointing to total signal meltdown... my ears, my dashboard and my... ship.`
    },
    {
      source: 'story-02-flight-recorder.svg',
      kicker: 'FLIGHT RECORDER // ENTRY 2',
      title: 'THE CRASH',
      alt: 'A taped photograph of Glorb’s wrecked ship with a handwritten research log underneath.',
      transcript: `The signal from my ship didn't jump straight to danger. It climbed slowly, for six minutes, while I kept pushing the ship harder and harder.\n\nMy dashboard recorded every second of it. It alerted me. My body was alerting me too. I just wasn't listening. I wanted to see how fast it could go chasing those Gleborna aliens. I don't like them at all.\n\nThis was totally preventable. And it's all their fault. Ugh. Now I have to fix this.\n\nTo do: Fill out incident report form and mail it to Amy in A.R., Alien Resources. Review charted findings on previous data. Travel to Earth.`
    },
    {
      source: 'story-03-dear-amy.svg',
      kicker: 'ALIEN RESOURCES // OUTGOING',
      title: 'DEAR AMY',
      alt: 'Glorb’s handwritten letter to Alien Resources clipped over his incident report.',
      transcript: `Department of A.R., Alien Resources, Zorbax and Co.\n\nDear Amy, please find my incident report from today's “incident” attached. I have booked a small holiday home on Earth for some R plus R — Research and Reporting. I will be in touch with my findings. Please forward all correspondence there.\n\nMy ship is currently unavailable. Mostly because it exploded.\n\nThanks, Glorb.\n\nP.S. I am aware this is my third ship. P.P.S. Sorry.`
    },
    {
      source: 'story-04-incident-report.svg',
      kicker: 'ZORBAX-9 RESEARCH DIVISION',
      title: 'INCIDENT REPORT',
      alt: 'Glorb’s formal incident report showing signal overload, his angry ears, and the crashed ship.',
      transcript: `Zorbax-9 Research Division. Incident report form. Subject: self monitored signal overload. Location: in transit, Zorbax-9 orbital lane.\n\nOne. Signal identification. Name: signal overload. This is probably not good, considering the outcome. Three red exclamation marks: critical marking, highest importance.\n\nTwo. Physical response. Main physical response: angry ear. Pinned flat back against head. Reactive ear. Field note: ears pressed flat against the head. One of the clearest warning signs across the animal world. It usually means the animal feels overwhelmed, scared, or ready to react. Give space.\n\nThree. Observed outcome: not good.\n\nAnalyst summary: total signal meltdown. Preventable. Failure to react to rising signal. Systems overwhelmed. Monitor early warning signs.`
    },
    {
      source: 'story-05-timeline.svg',
      kicker: 'CHART READING // CRASH REPORT',
      title: 'TIME LINE OF EVENTS',
      alt: 'A coloured timeline moving from low signal to steady signal, rising signal and signal overload.',
      interactive: 'incidents',
      transcript: `Time line of events. Chart reading extracted from crash report.\n\nLow signal mode: woke up tired, couldn't start ship, just sank. Had breakfast, rested, played with Frog, the flying space dog.\n\nSteady signal: started flying, feeling a bit better, started listening to radio, great tunes, dancing a little while driving, having a good time.\n\nRising signal: saw those Gleborna aliens on the terrace. They made fun of my ears. They wouldn't stop even when I asked. Started chasing them. Saw rising signal flash on my dash. Ignored it.\n\nSignal overload: they kept making fun of my ears. Chased harder. Ignored all ship signals. Push, push, push.\n\nClick the four “see other similar incidents logged” notes to open Glorb's other examples.`
    },
    {
      source: 'story-06-earth-day-23.svg',
      kicker: 'A FEW WEEKS LATER // ON EARTH',
      title: 'RESEARCH LOG // DAY 23',
      alt: 'Glorb’s Earth research log showing him dancing in Tom’s face at lunch while Tom becomes annoyed.',
      transcript: `A few weeks later, on Earth. School playground: lunch.\n\nGlorb: research log, entry 14. Day 23 on Earth.\n\nI have not exploded anything. This feels like the correct amount of progress.\n\nHowever, today at lunch I went to sit next to my friend Tom. I started dancing in his face and shouting, “Let's have a party, Tommy boy, the world is ours and the day is young!” over and over because I saw someone on TV do it and the audience laughed.\n\nIt did not make Tom laugh. Instead, it had an unexpected outcome. Please see my attached drawings of the events that occurred.\n\nPlease turn page to see the outcome.`
    },
    {
      source: 'story-07-outcome.svg',
      kicker: 'SCHOOL PLAYGROUND // LUNCH',
      title: 'OUTCOME',
      alt: 'Tom pushes Glorb away after becoming increasingly upset.',
      transcript: `Outcome.\n\nTommy did apologise for pushing me. However, someone also pointed out that I'd ignored his signals: the ones that showed he was getting more and more upset, long before it got to pushing.\n\nThat got me thinking. My ship has signals too. Maybe humans just wear theirs on the outside instead of on a dashboard. I think I need some help sorting them into the right categories.`
    },
    {
      source: 'story-08-signal-categories.svg',
      kicker: 'GLORB // HUMAN SIGNAL CATEGORIES',
      title: 'CLICK TO FIND OUT MORE',
      alt: 'Glorb’s four signal categories: low signal, steady signal, rising signal and signal overload.',
      interactive: 'signals',
      transcript: `I categorised human signals like this. Click each category to find out more. Low signal. Steady signal. Rising signal. Signal overload.`
    },
    {
      source: 'story-09-summary.svg',
      kicker: 'FIELD GUIDE // SUMMARY',
      title: 'FOUR SIGNALS',
      alt: 'A four-part summary showing signal overload, rising signal, steady signal and low signal with emotion examples.',
      transcript: `Glorb's field guide summary. Signal overload. Rising signal. Steady signal. Low signal. Notice the signal early, then choose the kind of help that fits.`
    },
    {
      type: 'sortboard',
      kicker: 'SORT MISSION // FOUR SIGNALS',
      title: 'SORT THE SIGNAL CLUES',
      transcript: `Glorb has collected all of the signal evidence, but it is mixed up. Drag every clue into one of the four signal categories: steady signal, rising signal, signal overload or low signal. The clues can be placed anywhere inside the matching signal box. When every clue has been sorted, check your work. If the sort is correct, Glorb will generate the four completed field reports.`
    },
    {
      type: 'results',
      kicker: 'ZORBAX-9 // GENERATED REPORTS',
      title: 'GLORB’S COMPLETED SIGNAL REPORTS',
      final: true,
      transcript: `Sort verified. Glorb has generated the completed field reports for steady signal, rising signal, signal overload and low signal. Open any report to view the full answer guide.`
    }
  ];

  const incidentDetails = {
    low: {
      eyebrow: 'SIMILAR INCIDENT // LOW SIGNAL',
      title: 'LOW SIGNAL LOG',
      equation: 'incident-low-equation.webp',
      note: 'incident-low-note.webp',
      report: 'incident-low-report.webp',
      caption: 'Glorb notices low energy, low attention and a drooping flight pattern.',
      transcript: `Okay, so I don't know about any of this or why I have to write what happened. Basically, I'd been flying for ages, hadn't really talked to anyone, wasn't really paying attention to where I even was. My ears just started drooping and, I don't know, I guess I stopped noticing stuff around me. I wasn't mad. I was just... I don't know... which way? I was just really low. I think I missed a turn somewhere, but I don't even care enough to go check.

Incident report: self monitored low signal. Energy is running low, a bit slow, just down. Easy to miss things while it's happening. Main physical response: sad ear. Observed outcome: starts slowly drooping, not much energy to move in any other direction other than down, down, down.`
    },
    steady: {
      eyebrow: 'SIMILAR INCIDENT // STEADY SIGNAL',
      title: 'STEADY SIGNAL LOG',
      equation: 'incident-steady-equation.webp',
      note: 'incident-steady-note.webp',
      report: 'incident-steady-report.webp',
      caption: 'A good day: nothing needs fixing, and Glorb can keep doing what is working.',
      transcript: `Okay, so honestly nothing really happened. I was just cruising down All-Gravity Street, had a really good breakfast, ears just chilling forward the whole time, listening to my rock and roll tunes.

I didn't need to fix anything, didn't need a break, didn't need anyone to leave me alone. It was just a good day. A perfect day, really. I was in a great mood.

I thought it was worth writing down because I usually write in here after an “incident” happens, and I didn't want you to think I am always having negative incidents. To be honest, I don't really have a story for this one. That's the whole point of it. Great day, ten out of ten.

Incident report: self monitored steady signal. Everything is working the way it's supposed to. Calm. Focused. Ready. Observed outcome: perfection.`
    },
    rising: {
      eyebrow: 'SIMILAR INCIDENT // RISING SIGNAL',
      title: 'RISING SIGNAL LOG',
      equation: 'incident-rising-equation.webp',
      note: 'incident-rising-note.webp',
      report: 'incident-rising-report.webp',
      caption: 'Glorb notices the warning early, changes course and avoids overload.',
      transcript: `Okay, so what happened is: I was just flying past Splartzee Terrace, minding my own business, when I saw those Gleborna aliens. They are always around just sitting there being smug, looking at my ears like that.

I hadn't even done anything yet. My ears just started twitching and I got that jumpy, annoyed feeling. That's around when the fire light came on, actually. I thought I'd better check it out and not ignore it, so I turned around and drove away. Around the corner I pulled over, put out the fire and my ship seemed okay. I went home, had a cup of tea, played with my Frog, floating space dog. Surprisingly, all ended up okay.

Incident report: self monitored rising signal. This means something is off. Probably time to stop and check it out. Main physical response: uneasy ear. Observed outcome: still flying, but a few issues. Fire being one.`
    },
    overload: {
      eyebrow: 'SIMILAR INCIDENT // SIGNAL OVERLOAD',
      title: 'OVERLOAD LOG',
      equation: 'incident-overload-equation.webp',
      note: 'incident-overload-note.webp',
      report: 'incident-overload-report.webp',
      caption: 'Glorb ignores the rising signal, keeps pushing, and ends in signal overload.',
      transcript: `Okay, so what happened is I saw those Gleborna aliens and they were making fun of my ears again. They are not nice.

So I wanted to teach them a lesson and, well, I started chasing them. But they kept getting away and teasing me even more. I don't really know what happened. I sort of blacked out. I know I saw the rising signal and ignored it. I was just trying to catch them, so I pushed my ship to go harder and then all of a sudden it was signal overload.

Incident report: self monitored signal overload. Main physical response: angry ear. Observed outcome: not good.`
    }
  };

  const signalDetails = {
    low: {
      eyebrow: 'HUMAN SIGNAL // LOW',
      title: 'LOW SIGNAL',
      page: 'signal-guide-low.svg',
      caption: 'Low energy, low preparedness, low awareness and low attention.',
      transcript: `Low signal is seen and felt as low energy, low preparedness, low awareness and low attention. It can look like sad, embarrassed, lonely, bored, tired or unsure.\n\nWhat can help: rest for a few minutes. Get a drink of water or a snack. Do some gentle movement, like a stretch or a short walk. Talk to someone about it. Change what you're doing for a bit. Ask for some quiet space.`
    },
    steady: {
      eyebrow: 'HUMAN SIGNAL // STEADY',
      title: 'STEADY SIGNAL',
      page: 'signal-guide-steady.svg',
      caption: 'Steady energy, preparedness, awareness and attention.',
      transcript: `Steady signal is seen and felt as steady energy, steady preparedness, steady awareness and steady attention. It can look like calm, focused, proud and content.\n\nWhat can help: keep doing what's working. Notice how good this feels. Take on a challenge, or help someone else with theirs. Set a goal while your mind is clear. Enjoy it. There's nothing to fix.`
    },
    rising: {
      eyebrow: 'HUMAN SIGNAL // RISING',
      title: 'RISING SIGNAL',
      page: 'signal-guide-rising.svg',
      caption: 'Rising energy, tension, reactivity and urgency.',
      transcript: `Rising signal is seen and felt as rising energy, rising tension, rising reactivity and rising urgency. It can look like upset, disrespected, excited, frustrated or nervous.\n\nWhat can help: take a breath, or count to ten. Step away for a moment. Move your body: shake it out, stretch, squeeze something. Say how you're feeling out loud. Ask for a break before it gets bigger. Use a fidget tool.`
    },
    overload: {
      eyebrow: 'HUMAN SIGNAL // OVERLOAD',
      title: 'SIGNAL OVERLOAD',
      page: 'signal-guide-overload.svg',
      caption: 'Out of control, racing heart, can’t think clearly, ready to react.',
      transcript: `Signal overload is seen and felt as out of control, racing heart, can't think clearly and ready to react. It can look like furious, panicked, terrified or overwhelmed.\n\nWhat can help: get to a safe, quiet space. Ask a trusted adult for help. Take slow, deep breaths. Try a big release: push against a wall or squeeze something tight. It's okay not to talk yet; that comes after. Give it time before deciding anything.`
    }
  };

  const incidentHotspots = [
    { id: 'low', label: 'Open low signal incident', x: 4.7, y: 78.8, w: 20.7, h: 4.4 },
    { id: 'steady', label: 'Open steady signal incident', x: 32.6, y: 67.8, w: 20.9, h: 4.5 },
    { id: 'rising', label: 'Open rising signal incident', x: 56.4, y: 66.3, w: 20.5, h: 4.4 },
    { id: 'overload', label: 'Open signal overload incident', x: 78.2, y: 64.2, w: 20.0, h: 4.4 }
  ];

  const signalHotspots = [
    { id: 'low', label: 'Open low signal guide', x: 2.5, y: 61.8, w: 26.0, h: 27.7 },
    { id: 'steady', label: 'Open steady signal guide', x: 29.1, y: 52.0, w: 25.3, h: 26.6 },
    { id: 'rising', label: 'Open rising signal guide', x: 53.2, y: 49.3, w: 24.8, h: 27.6 },
    { id: 'overload', label: 'Open signal overload guide', x: 76.3, y: 43.9, w: 22.3, h: 27.1 }
  ];

  const signalConfig = {
    low: {
      label: 'LOW SIGNAL',
      short: 'LOW',
      answer: 'sort/teacher-answer-low.png',
      accent: 'blue'
    },
    steady: {
      label: 'STEADY SIGNAL',
      short: 'STEADY',
      answer: 'sort/teacher-answer-steady.png',
      accent: 'green'
    },
    rising: {
      label: 'RISING SIGNAL',
      short: 'RISING',
      answer: 'sort/teacher-answer-rising.png',
      accent: 'orange'
    },
    overload: {
      label: 'SIGNAL OVERLOAD',
      short: 'OVERLOAD',
      answer: 'sort/teacher-answer-overload.png',
      accent: 'red'
    }
  };

  const evidenceTypes = [
    { id: 'wave', label: 'SIGNAL LINE' },
    { id: 'emotions', label: 'EMOTION CLUES' },
    { id: 'equation', label: 'GLORB + DASHBOARD CLUE' },
    { id: 'symbol', label: 'DASHBOARD SYMBOL' },
    { id: 'traits', label: 'SIGNAL DESCRIPTION' },
    { id: 'body', label: 'LOOKS / FEELS LIKE' },
    { id: 'help', label: 'WHAT CAN HELP' }
  ];

  const signals = ['steady', 'rising', 'overload', 'low'];

  // Mixed on purpose so students must sort by signal rather than by clue type.
  const evidenceDeck = [
    'wave-steady', 'emotions-rising', 'symbol-overload', 'traits-low',
    'equation-steady', 'help-rising', 'body-overload', 'symbol-low',
    'wave-rising', 'emotions-overload', 'traits-steady', 'equation-low',
    'help-overload', 'body-steady', 'symbol-rising', 'wave-low',
    'emotions-steady', 'traits-overload', 'equation-rising', 'help-low',
    'body-rising', 'symbol-steady', 'wave-overload', 'emotions-low',
    'traits-rising', 'equation-overload', 'help-steady', 'body-low'
  ];

  const itemWidths = {
    wave: 46,
    emotions: 64,
    equation: 55,
    symbol: 20,
    traits: 38,
    body: 43,
    help: 44
  };

  const itemYHalf = {
    wave: 8,
    emotions: 11,
    equation: 9,
    symbol: 10,
    traits: 14,
    body: 17,
    help: 17
  };

  const defaultPlacement = {
    equation: { x: 29, y: 15 },
    symbol: { x: 81, y: 15 },
    wave: { x: 28, y: 36 },
    emotions: { x: 63, y: 39 },
    traits: { x: 24, y: 64 },
    body: { x: 69, y: 64 },
    help: { x: 50, y: 86 }
  };

  const STORAGE_KEY = 'glorb-signal-category-sort-v2';
  let sortState = loadSortState();
  let selectedItem = null;
  let lastCheckWrong = [];

  let pageIndex = 0;
  let modalData = null;
  let speechActive = false;
  let touchStartX = null;
  let toastTimer = null;

  const pageStage = document.getElementById('pageStage');
  const comicPage = document.getElementById('comicPage');
  const activityStage = document.getElementById('activityStage');
  const pageKicker = document.getElementById('pageKicker');
  const pageCounter = document.getElementById('pageCounter');
  const hotspotLayer = document.getElementById('hotspotLayer');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const nextLabel = document.getElementById('nextLabel');
  const tapPrev = document.getElementById('tapPrev');
  const tapNext = document.getElementById('tapNext');
  const pagerDots = document.getElementById('pagerDots');
  const interactionNote = document.getElementById('interactionNote');
  const interactionNoteText = document.getElementById('interactionNoteText');

  const speakBtn = document.getElementById('speakBtn');
  const transcriptSpeakBtn = document.getElementById('transcriptSpeakBtn');
  const transcriptBtn = document.getElementById('transcriptBtn');
  const transcriptPanel = document.getElementById('transcriptPanel');
  const transcriptTitle = document.getElementById('transcriptTitle');
  const transcriptText = document.getElementById('transcriptText');
  const closeTranscriptBtn = document.getElementById('closeTranscriptBtn');

  const detailModal = document.getElementById('detailModal');
  const modalBackdrop = document.getElementById('modalBackdrop');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalSpeakBtn = document.getElementById('modalSpeakBtn');
  const modalEyebrow = document.getElementById('modalEyebrow');
  const modalTitle = document.getElementById('modalTitle');
  const modalVisual = document.getElementById('modalVisual');
  const modalCaption = document.getElementById('modalCaption');
  const toast = document.getElementById('toast');

  function setupDots() {
    pagerDots.innerHTML = mainPages.map((_, i) => `<span class="pager__dot${i === pageIndex ? ' is-active' : ''}"></span>`).join('');
  }

  function updateDots() {
    [...pagerDots.children].forEach((dot, i) => dot.classList.toggle('is-active', i === pageIndex));
  }

  function renderPage({animate = true} = {}) {
    const p = mainPages[pageIndex];
    stopSpeech();
    closeModal(false);
    selectedItem = null;

    pageKicker.textContent = p.kicker;
    pageCounter.textContent = `${String(pageIndex + 1).padStart(2, '0')} / ${String(mainPages.length).padStart(2, '0')}`;
    transcriptTitle.textContent = p.title;
    transcriptText.textContent = p.transcript || '';
    prevBtn.disabled = pageIndex === 0;
    nextBtn.disabled = false;

    if (p.type === 'results') {
      nextLabel.textContent = 'RESTART STORY';
      nextBtn.querySelector('[aria-hidden="true"]:last-child').textContent = '↻';
    } else if (pageIndex === 8) {
      nextLabel.textContent = 'START SORT MISSION';
      nextBtn.querySelector('[aria-hidden="true"]:last-child').textContent = '→';
    } else if (p.type === 'sortboard') {
      nextLabel.textContent = sortState.complete ? 'GENERATE REPORTS' : 'CHECK SORT';
      nextBtn.querySelector('[aria-hidden="true"]:last-child').textContent = sortState.complete ? '→' : '✓';
    } else {
      nextLabel.textContent = 'NEXT';
      nextBtn.querySelector('[aria-hidden="true"]:last-child').textContent = '→';
    }

    updateDots();
    updateInteractionNote(p.interactive);
    history.replaceState(null, '', `#page=${pageIndex + 1}`);

    if (p.type === 'sortboard' || p.type === 'results') {
      pageStage.classList.add('is-activity');
      pageStage.classList.remove('is-changing');
      comicPage.hidden = true;
      hotspotLayer.innerHTML = '';
      activityStage.hidden = false;
      tapPrev.hidden = true;
      tapNext.hidden = true;

      if (p.type === 'sortboard') renderSortBoard();
      else renderResultsPage();
      return;
    }

    pageStage.classList.remove('is-activity');
    activityStage.hidden = true;
    activityStage.innerHTML = '';
    comicPage.hidden = false;
    tapPrev.hidden = false;
    tapNext.hidden = false;

    if (animate) pageStage.classList.add('is-changing');
    const nextSrc = A + p.source;
    const preload = new Image();
    preload.onload = () => {
      comicPage.src = nextSrc;
      comicPage.alt = p.alt || '';
      renderHotspots(p.interactive);
      window.setTimeout(() => pageStage.classList.remove('is-changing'), animate ? 60 : 0);
      preloadAdjacent();
    };
    preload.onerror = () => {
      comicPage.src = nextSrc;
      pageStage.classList.remove('is-changing');
      showToast('I COULDN’T LOAD THIS PAGE IMAGE. CHECK THE ASSESTS FOLDER.');
    };
    preload.src = nextSrc;
  }

  function preloadAdjacent() {
    [pageIndex - 1, pageIndex + 1].forEach(i => {
      const p = mainPages[i];
      if (p?.source) {
        const img = new Image();
        img.src = A + p.source;
      }
    });
  }

  function renderHotspots(type) {
    hotspotLayer.innerHTML = '';
    if (!type) return;
    const spots = type === 'incidents' ? incidentHotspots : signalHotspots;
    spots.forEach(spot => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = `hotspot hotspot--${type}`;
      btn.setAttribute('aria-label', spot.label);
      if (type === 'signals') btn.setAttribute('data-badge', 'ZOOM +');
      Object.assign(btn.style, {
        left: `${spot.x}%`, top: `${spot.y}%`, width: `${spot.w}%`, height: `${spot.h}%`
      });
      btn.addEventListener('click', (event) => {
        event.stopPropagation();
        openDetail(type, spot.id);
      });
      hotspotLayer.appendChild(btn);
    });
  }

  function updateInteractionNote(type) {
    if (!type) {
      interactionNote.hidden = true;
      return;
    }
    interactionNote.hidden = false;
    interactionNoteText.textContent = type === 'incidents'
      ? 'CLICK ANY “SEE OTHER SIMILAR INCIDENTS” NOTE TO OPEN THE LOG.'
      : 'CLICK ANY SIGNAL GUIDE ON THE PAGE TO OPEN IT.';
  }


  function newSortState() {
    return { placements: {}, complete: false };
  }

  function loadSortState() {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null');
      if (!saved || typeof saved !== 'object' || !saved.placements || typeof saved.placements !== 'object') {
        return newSortState();
      }

      const clean = newSortState();
      evidenceDeck.forEach(item => {
        const placement = saved.placements[item];
        if (!placement || !signals.includes(placement.signal)) return;
        const type = itemType(item);
        const base = defaultPlacement[type] || { x: 50, y: 50 };
        clean.placements[item] = {
          signal: placement.signal,
          x: Number.isFinite(Number(placement.x)) ? Number(placement.x) : base.x,
          y: Number.isFinite(Number(placement.y)) ? Number(placement.y) : base.y
        };
      });
      clean.complete = Boolean(saved.complete) && isPlacementSetCorrect(clean.placements);
      return clean;
    } catch {
      return newSortState();
    }
  }

  function saveSortState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(sortState));
    } catch {}
  }

  function itemType(item) {
    return String(item || '').split('-')[0];
  }

  function correctSignalFor(item) {
    return String(item || '').split('-').slice(-1)[0];
  }

  function itemAssetByKey(item) {
    const type = itemType(item);
    const signal = correctSignalFor(item);
    return `${A}sort/${type}-${signal}.png`;
  }

  function itemLabel(item) {
    const type = evidenceTypes.find(t => t.id === itemType(item));
    return type?.label || 'SIGNAL CLUE';
  }

  function placementCount() {
    return Object.keys(sortState.placements).length;
  }

  function signalPlacementCount(signal) {
    return Object.values(sortState.placements).filter(p => p.signal === signal).length;
  }

  function isPlacementSetCorrect(placements = sortState.placements) {
    if (Object.keys(placements).length !== evidenceDeck.length) return false;
    return evidenceDeck.every(item => placements[item]?.signal === correctSignalFor(item));
  }

  function isSortComplete() {
    return Boolean(sortState.complete) && isPlacementSetCorrect();
  }

  function defaultCoordsFor(item, targetSignal) {
    const type = itemType(item);
    const base = defaultPlacement[type] || { x: 50, y: 50 };
    const sameTypeCount = Object.entries(sortState.placements).filter(([key, placement]) =>
      placement.signal === targetSignal && itemType(key) === type && key !== item
    ).length;
    const nudge = sameTypeCount * 4;
    return {
      x: Math.min(90, base.x + nudge),
      y: Math.min(92, base.y + nudge)
    };
  }

  function clampPlacement(item, x, y) {
    const type = itemType(item);
    const width = itemWidths[type] || 38;
    const halfX = width / 2 + 2;
    const halfY = itemYHalf[type] || 12;
    return {
      x: Math.max(halfX, Math.min(100 - halfX, x)),
      y: Math.max(halfY, Math.min(100 - halfY, y))
    };
  }

  function signalBinMarkup(signal) {
    const cfg = signalConfig[signal];
    const count = signalPlacementCount(signal);
    const wrongHere = lastCheckWrong.some(item => sortState.placements[item]?.signal === signal);
    const placed = Object.entries(sortState.placements)
      .filter(([, placement]) => placement.signal === signal)
      .map(([item, placement]) => {
        const type = itemType(item);
        const width = itemWidths[type] || 38;
        const wrong = lastCheckWrong.includes(item);
        return `
          <button class="placed-evidence placed-evidence--${type}${wrong ? ' is-wrong' : ''}${selectedItem === item ? ' is-selected' : ''}"
            type="button" draggable="true" data-item="${item}"
            style="left:${placement.x}%; top:${placement.y}%; width:${width}%"
            aria-label="${itemLabel(item)} placed in ${cfg.label}. Drag to move it, or tap to select it.">
            <img src="${itemAssetByKey(item)}" alt="">
          </button>`;
      }).join('');

    return `
      <section class="signal-bin signal-bin--${cfg.accent}${wrongHere ? ' has-wrong' : ''}${isSortComplete() ? ' is-verified' : ''}">
        <header class="signal-bin__header">
          <h3>SIGNAL ${cfg.short}</h3>
          <span>${count}/7</span>
        </header>
        <div class="signal-bin__canvas" role="button" tabindex="0" data-signal="${signal}"
          aria-label="Drop clues for ${cfg.label} anywhere in this square">
          ${count === 0 ? '<span class="signal-bin__placeholder">DROP CLUES ANYWHERE IN THIS SQUARE</span>' : ''}
          ${placed}
        </div>
      </section>`;
  }

  function clueBankMarkup() {
    const remaining = evidenceDeck.filter(item => !sortState.placements[item]);
    if (!remaining.length) {
      return `<div class="clue-bank__empty">ALL CLUES HAVE BEEN PLACED. CHECK YOUR SORT.</div>`;
    }

    return remaining.map(item => {
      const type = itemType(item);
      return `
        <button class="clue-card clue-card--${type}${selectedItem === item ? ' is-selected' : ''}"
          type="button" draggable="true" data-item="${item}"
          aria-label="Select ${itemLabel(item).toLowerCase()} clue">
          <img src="${itemAssetByKey(item)}" alt="">
        </button>`;
    }).join('');
  }

  function renderSortBoard() {
    const count = placementCount();
    const complete = isSortComplete();

    activityStage.innerHTML = `
      <div class="category-sort">
        <header class="category-sort__intro">
          <div>
            <span class="sort-mission__eyebrow">GLORB // SIGNAL SORT ACTIVITY</span>
            <h2>SORT THE CLUES INTO THE FOUR SIGNALS</h2>
            <p>Drag each clue into the signal it matches. <strong>It can go anywhere inside the square.</strong>
            On a touch screen, tap a clue and then tap where you want it to go.</p>
          </div>
          <div class="category-sort__counter" aria-label="${count} of ${evidenceDeck.length} clues placed">
            <strong>${count}/${evidenceDeck.length}</strong>
            <span>CLUES PLACED</span>
          </div>
        </header>

        <div class="signal-bin-grid" aria-label="Four signal sorting areas">
          ${['steady', 'rising', 'overload', 'low'].map(signalBinMarkup).join('')}
        </div>

        <div class="sort-actions">
          <div>
            <button class="check-sort" type="button" data-check-sort ${complete ? 'disabled' : ''}>
              ${complete ? 'SORT VERIFIED ✓' : 'CHECK MY SORT'}
            </button>
            <button class="reset-sort reset-sort--light" type="button" data-reset-sort>RESET</button>
          </div>
          <p id="selectionHelp">${selectedItem
            ? 'CLUE SELECTED — TAP A SIGNAL SQUARE TO PLACE IT. TAP THE EVIDENCE BANK TO RETURN IT.'
            : 'DRAG A CLUE, OR TAP IT TO SELECT. YOU CAN MOVE CLUES BETWEEN SQUARES.'}</p>
        </div>

        ${complete ? `
          <div class="sort-success" id="sortSuccess">
            <span>✓</span>
            <div>
              <strong>SORT VERIFIED.</strong>
              <p>All 28 clues are in the correct signal. Glorb can now generate the completed reports.</p>
            </div>
            <button class="generate-reports" type="button" data-generate-reports>GENERATE REPORTS →</button>
          </div>` : ''}

        <section class="clue-bank" id="clueBank" data-clue-bank tabindex="0">
          <header class="clue-bank__header">
            <div>
              <span class="sort-mission__eyebrow">PAGES 46–47 // MIXED EVIDENCE</span>
              <h3>EVIDENCE BANK</h3>
            </div>
            <p>${evidenceDeck.length - count} CLUES LEFT TO SORT</p>
          </header>
          <div class="clue-bank__grid">
            ${clueBankMarkup()}
          </div>
        </section>
      </div>`;

    attachCategorySortListeners();
  }

  function renderResultsPage() {
    if (!isSortComplete()) {
      activityStage.innerHTML = `
        <div class="generated-results generated-results--locked">
          <header class="generated-results__hero">
            <span class="sort-mission__eyebrow">ZORBAX-9 // GENERATED REPORTS</span>
            <h2>REPORTS LOCKED.</h2>
            <p>Finish sorting all 28 clues correctly first. The completed Glorb reports are the answer to the sort.</p>
            <button class="answer-button" type="button" data-back-to-sort>RETURN TO SORT →</button>
          </header>
        </div>`;
      activityStage.querySelector('[data-back-to-sort]')?.addEventListener('click', () => {
        pageIndex = 9;
        renderPage();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
      return;
    }

    activityStage.innerHTML = `
      <div class="generated-results">
        <header class="generated-results__hero is-complete">
          <span class="sort-mission__eyebrow">ZORBAX-9 // SORT VERIFIED</span>
          <h2>REPORTS GENERATED.</h2>
          <p>You sorted the signal evidence correctly. These completed field reports show the answer.</p>
        </header>

        <div class="answer-grid answer-grid--generated">
          ${['steady', 'rising', 'overload', 'low'].map(signal => {
            const cfg = signalConfig[signal];
            return `
              <article class="answer-card answer-card--${cfg.accent} is-unlocked">
                <div class="answer-card__status">GENERATED ✓</div>
                <h3>${cfg.label}</h3>
                <img src="${A + cfg.answer}" alt="${cfg.label} completed Glorb report">
                <button class="answer-button" type="button" data-answer="${signal}">OPEN FULL REPORT →</button>
              </article>`;
          }).join('')}
        </div>

        <div class="sort-results__footer">
          <button class="reset-sort" id="resetSortBtn" type="button">RESET SORT ACTIVITY</button>
          <span>The completed sheets are the answer guide for the sorting activity.</span>
        </div>
      </div>`;

    activityStage.querySelectorAll('[data-answer]').forEach(btn => {
      btn.addEventListener('click', () => openAnswerGuide(btn.dataset.answer));
    });
    document.getElementById('resetSortBtn')?.addEventListener('click', resetSortMission);
  }

  function attachDraggableClue(card) {
    card.addEventListener('dragstart', event => {
      selectedItem = card.dataset.item;
      event.dataTransfer?.setData('text/plain', selectedItem);
      if (event.dataTransfer) event.dataTransfer.effectAllowed = 'move';
      card.classList.add('is-dragging');
    });
    card.addEventListener('dragend', () => card.classList.remove('is-dragging'));
    card.addEventListener('click', event => {
      event.stopPropagation();
      const same = selectedItem === card.dataset.item;
      selectedItem = same ? null : card.dataset.item;
      activityStage.querySelectorAll('[data-item]').forEach(c => c.classList.toggle('is-selected', c.dataset.item === selectedItem));
      const help = document.getElementById('selectionHelp');
      if (help) help.textContent = selectedItem
        ? 'CLUE SELECTED — TAP A SIGNAL SQUARE TO PLACE IT. TAP THE EVIDENCE BANK TO RETURN IT.'
        : 'DRAG A CLUE, OR TAP IT TO SELECT. YOU CAN MOVE CLUES BETWEEN SQUARES.';
    });
  }

  function attachCategorySortListeners() {
    activityStage.querySelectorAll('.clue-card, .placed-evidence').forEach(attachDraggableClue);

    activityStage.querySelectorAll('.signal-bin__canvas').forEach(zone => {
      zone.addEventListener('dragover', event => {
        event.preventDefault();
        zone.classList.add('is-dragover');
        if (event.dataTransfer) event.dataTransfer.dropEffect = 'move';
      });
      zone.addEventListener('dragleave', event => {
        if (!zone.contains(event.relatedTarget)) zone.classList.remove('is-dragover');
      });
      zone.addEventListener('drop', event => {
        event.preventDefault();
        zone.classList.remove('is-dragover');
        const item = event.dataTransfer?.getData('text/plain') || selectedItem;
        if (item) placeItem(item, zone.dataset.signal, event.clientX, event.clientY, zone);
      });
      zone.addEventListener('click', event => {
        if (!selectedItem) return;
        placeItem(selectedItem, zone.dataset.signal, event.clientX, event.clientY, zone);
      });
      zone.addEventListener('keydown', event => {
        if ((event.key === 'Enter' || event.key === ' ') && selectedItem) {
          event.preventDefault();
          placeItem(selectedItem, zone.dataset.signal, null, null, zone);
        }
      });
    });

    const bank = activityStage.querySelector('[data-clue-bank]');
    if (bank) {
      bank.addEventListener('dragover', event => {
        event.preventDefault();
        bank.classList.add('is-dragover');
      });
      bank.addEventListener('dragleave', event => {
        if (!bank.contains(event.relatedTarget)) bank.classList.remove('is-dragover');
      });
      bank.addEventListener('drop', event => {
        event.preventDefault();
        bank.classList.remove('is-dragover');
        const item = event.dataTransfer?.getData('text/plain') || selectedItem;
        if (item && sortState.placements[item]) returnItemToBank(item);
      });
      bank.addEventListener('click', event => {
        if (event.target.closest('[data-item]')) return;
        if (selectedItem && sortState.placements[selectedItem]) returnItemToBank(selectedItem);
      });
      bank.addEventListener('keydown', event => {
        if ((event.key === 'Enter' || event.key === ' ') && selectedItem && sortState.placements[selectedItem]) {
          event.preventDefault();
          returnItemToBank(selectedItem);
        }
      });
    }

    activityStage.querySelector('[data-check-sort]')?.addEventListener('click', checkSort);
    activityStage.querySelector('[data-reset-sort]')?.addEventListener('click', resetSortMission);
    activityStage.querySelector('[data-generate-reports]')?.addEventListener('click', generateReports);
  }

  function placeItem(item, targetSignal, clientX, clientY, zone) {
    if (!evidenceDeck.includes(item) || !signals.includes(targetSignal)) return;

    let coords = defaultCoordsFor(item, targetSignal);
    if (Number.isFinite(clientX) && Number.isFinite(clientY) && zone) {
      const rect = zone.getBoundingClientRect();
      if (rect.width && rect.height) {
        coords = {
          x: ((clientX - rect.left) / rect.width) * 100,
          y: ((clientY - rect.top) / rect.height) * 100
        };
      }
    }

    coords = clampPlacement(item, coords.x, coords.y);
    sortState.placements[item] = { signal: targetSignal, x: coords.x, y: coords.y };
    sortState.complete = false;
    lastCheckWrong = [];
    selectedItem = null;
    saveSortState();
    renderSortBoard();
  }

  function returnItemToBank(item) {
    if (!sortState.placements[item]) return;
    delete sortState.placements[item];
    sortState.complete = false;
    lastCheckWrong = [];
    selectedItem = null;
    saveSortState();
    renderSortBoard();
  }

  function checkSort() {
    const missing = evidenceDeck.length - placementCount();
    if (missing > 0) {
      lastCheckWrong = [];
      showToast(`${missing} ${missing === 1 ? 'CLUE IS' : 'CLUES ARE'} STILL IN THE EVIDENCE BANK.`);
      return;
    }

    const wrong = evidenceDeck.filter(item => sortState.placements[item]?.signal !== correctSignalFor(item));
    if (wrong.length) {
      lastCheckWrong = wrong;
      sortState.complete = false;
      saveSortState();
      renderSortBoard();
      showToast(`${wrong.length} ${wrong.length === 1 ? 'CLUE NEEDS' : 'CLUES NEED'} ANOTHER LOOK. WRONG SIGNALS ARE MARKED.`);
      return;
    }

    lastCheckWrong = [];
    sortState.complete = true;
    saveSortState();
    renderSortBoard();
    showToast('SORT CORRECT — GLORB’S COMPLETED REPORTS ARE READY.');
    window.setTimeout(() => document.getElementById('sortSuccess')?.scrollIntoView({ behavior: 'smooth', block: 'center' }), 80);
  }

  function generateReports() {
    if (!isSortComplete()) {
      checkSort();
      return;
    }
    pageIndex = 10;
    renderPage();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function openAnswerGuide(signal) {
    if (!isSortComplete()) {
      showToast('SORT ALL FOUR SIGNALS CORRECTLY FIRST TO GENERATE THE REPORTS.');
      return;
    }
    stopSpeech();
    const cfg = signalConfig[signal];
    modalData = {
      transcript: `Completed teacher answer guide for ${cfg.label}.`
    };
    modalEyebrow.textContent = 'COMPLETED GLORB REPORT // ANSWER';
    modalTitle.textContent = cfg.label;
    modalCaption.textContent = 'This completed report is the answer generated after the signal clues are sorted correctly.';
    modalVisual.classList.remove('modal__visual--incident');
    modalVisual.classList.add('modal__visual--answer');
    modalVisual.innerHTML = `
      <div class="answer-guide">
        <div class="answer-guide__sheet">
          <img src="${A + cfg.answer}" alt="${cfg.label} completed answer guide">
        </div>
      </div>`;
    detailModal.classList.add('is-open');
    detailModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    window.setTimeout(() => modalCloseBtn.focus(), 10);
  }

  function resetSortMission() {
    if (!window.confirm('Reset the four-signal sort and return every clue to the evidence bank?')) return;
    sortState = newSortState();
    selectedItem = null;
    lastCheckWrong = [];
    saveSortState();
    pageIndex = 9;
    renderPage();
    showToast('SORT ACTIVITY RESET.');
  }

  function go(delta) {
    const current = mainPages[pageIndex];

    if (current.final && delta > 0) {
      pageIndex = 0;
      renderPage();
      window.scrollTo({top: 0, behavior: 'smooth'});
      return;
    }

    if (current.type === 'sortboard' && delta > 0 && !isSortComplete()) {
      checkSort();
      return;
    }

    const next = Math.max(0, Math.min(mainPages.length - 1, pageIndex + delta));
    if (next === pageIndex) return;

    if (mainPages[next]?.type === 'results' && !isSortComplete()) {
      pageIndex = 9;
      renderPage();
      showToast('SORT THE FOUR SIGNALS CORRECTLY BEFORE GENERATING THE REPORTS.');
      return;
    }

    pageIndex = next;
    renderPage();
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

  function handleNext() {
    const current = mainPages[pageIndex];
    if (current.type === 'sortboard') {
      if (isSortComplete()) generateReports();
      else checkSort();
      return;
    }
    go(1);
  }

  function openDetail(type, id) {
    stopSpeech();
    modalData = type === 'incidents' ? incidentDetails[id] : signalDetails[id];
    if (!modalData) return;

    modalEyebrow.textContent = modalData.eyebrow;
    modalTitle.textContent = modalData.title;
    modalCaption.textContent = modalData.caption;
    modalVisual.classList.remove('modal__visual--answer');
    modalVisual.classList.toggle('modal__visual--incident', type === 'incidents');

    if (type === 'incidents') {
      modalVisual.innerHTML = `
        <div class="incident-detail">
          <img class="incident-detail__equation" src="${A + modalData.equation}" alt="${modalData.title} signal equation">
          <div class="incident-detail__grid">
            <figure class="incident-detail__panel incident-detail__panel--note">
              <img src="${A + modalData.note}" alt="${modalData.title} handwritten field note">
            </figure>
            <figure class="incident-detail__panel incident-detail__panel--report">
              <img src="${A + modalData.report}" alt="${modalData.title} incident report">
            </figure>
          </div>
        </div>`;
    } else {
      modalVisual.innerHTML = `<img src="${A + modalData.page}" alt="${modalData.title} guide">`;
    }

    detailModal.classList.add('is-open');
    detailModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    window.setTimeout(() => modalCloseBtn.focus(), 10);
  }

  function closeModal(restoreFocus = true) {
    if (!detailModal.classList.contains('is-open')) return;
    stopSpeech();
    detailModal.classList.remove('is-open');
    detailModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    modalData = null;
    modalVisual.classList.remove('modal__visual--answer', 'modal__visual--incident');
    if (restoreFocus) window.setTimeout(() => pageStage.focus?.(), 0);
  }

  function toggleTranscript(force) {
    const shouldOpen = typeof force === 'boolean' ? force : !transcriptPanel.classList.contains('is-open');
    transcriptPanel.classList.toggle('is-open', shouldOpen);
    transcriptPanel.setAttribute('aria-hidden', String(!shouldOpen));
    transcriptBtn.setAttribute('aria-expanded', String(shouldOpen));
    if (shouldOpen) closeTranscriptBtn.focus();
  }

  function chooseVoice() {
    const voices = window.speechSynthesis?.getVoices?.() || [];
    return voices.find(v => /^en-AU/i.test(v.lang))
      || voices.find(v => /^en-GB/i.test(v.lang))
      || voices.find(v => /^en/i.test(v.lang))
      || null;
  }

  function speak(text) {
    if (!('speechSynthesis' in window) || !('SpeechSynthesisUtterance' in window)) {
      showToast('READ-ALOUD ISN’T SUPPORTED IN THIS BROWSER. THE TRANSCRIPT IS STILL AVAILABLE.');
      return;
    }
    if (speechActive) {
      stopSpeech();
      return;
    }
    const cleaned = (text || '').replace(/\s+/g, ' ').trim();
    if (!cleaned) return;

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(cleaned);
    const voice = chooseVoice();
    if (voice) utterance.voice = voice;
    utterance.lang = voice?.lang || 'en-AU';
    utterance.rate = 0.92;
    utterance.pitch = 1;
    utterance.volume = 1;
    utterance.onstart = () => setSpeaking(true);
    utterance.onend = () => setSpeaking(false);
    utterance.onerror = () => setSpeaking(false);
    window.speechSynthesis.speak(utterance);
  }

  function setSpeaking(on) {
    speechActive = on;
    speakBtn.classList.toggle('is-speaking', on);
    speakBtn.setAttribute('aria-pressed', String(on));
    modalSpeakBtn.classList.toggle('is-speaking', on && !!modalData);
  }

  function stopSpeech() {
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();
    setSpeaking(false);
  }

  function readCurrent() {
    speak(modalData?.transcript || mainPages[pageIndex].transcript);
  }

  function showToast(message) {
    toast.textContent = message;
    toast.classList.add('is-visible');
    clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => toast.classList.remove('is-visible'), 3000);
  }

  function initFromHash() {
    const match = location.hash.match(/page=(\d+)/);
    if (match) pageIndex = Math.max(0, Math.min(mainPages.length - 1, Number(match[1]) - 1));
  }

  prevBtn.addEventListener('click', () => go(-1));
  nextBtn.addEventListener('click', handleNext);
  tapPrev.addEventListener('click', () => go(-1));
  tapNext.addEventListener('click', () => go(1));

  transcriptBtn.addEventListener('click', () => toggleTranscript());
  closeTranscriptBtn.addEventListener('click', () => toggleTranscript(false));
  speakBtn.addEventListener('click', readCurrent);
  transcriptSpeakBtn.addEventListener('click', () => speak(mainPages[pageIndex].transcript));
  modalSpeakBtn.addEventListener('click', readCurrent);
  modalCloseBtn.addEventListener('click', () => closeModal());
  modalBackdrop.addEventListener('click', () => closeModal());

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      if (detailModal.classList.contains('is-open')) closeModal();
      else if (transcriptPanel.classList.contains('is-open')) toggleTranscript(false);
      else stopSpeech();
      return;
    }
    if (detailModal.classList.contains('is-open') || transcriptPanel.classList.contains('is-open')) return;
    if (event.key === 'ArrowRight') handleNext();
    if (event.key === 'ArrowLeft') go(-1);
    if (event.key.toLowerCase() === 'r') readCurrent();
  });

  pageStage.addEventListener('touchstart', (event) => {
    if (mainPages[pageIndex]?.type) { touchStartX = null; return; }
    touchStartX = event.changedTouches[0]?.clientX ?? null;
  }, {passive: true});

  pageStage.addEventListener('touchend', (event) => {
    if (touchStartX == null) return;
    const dx = (event.changedTouches[0]?.clientX ?? touchStartX) - touchStartX;
    touchStartX = null;
    if (Math.abs(dx) < 55) return;
    go(dx < 0 ? 1 : -1);
  }, {passive: true});

  window.addEventListener('beforeunload', stopSpeech);
  window.speechSynthesis?.addEventListener?.('voiceschanged', () => {});

  initFromHash();
  setupDots();
  renderPage({animate: false});
})();
