(() => {
  const A = 'assets/';

  const mainPages = [
    {
      source: '29.svg',
      kicker: 'SOMEWHERE IN ZORBAX',
      title: 'SHIP IS GOING DOWN',
      alt: 'Glorb in his spaceship as the dashboard alarms, followed by his ship crashing.',
      transcript: `Somewhere in Zorbax.\n\nShip is going down. I repeat, ship is going down. According to my notes, all elements are pointing to total signal meltdown... my ears, my dashboard and my... ship.`
    },
    {
      source: '30.svg',
      kicker: 'FLIGHT RECORDER // ENTRY 2',
      title: 'THE CRASH',
      alt: 'A taped photograph of Glorb’s wrecked ship with a handwritten research log underneath.',
      transcript: `The signal from my ship didn't jump straight to danger. It climbed slowly, for six minutes, while I kept pushing the ship harder and harder.\n\nMy dashboard recorded every second of it. It alerted me. My body was alerting me too. I just wasn't listening. I wanted to see how fast it could go chasing those Gleborna aliens. I don't like them at all.\n\nThis was totally preventable. And it's all their fault. Ugh. Now I have to fix this.\n\nTo do: Fill out incident report form and mail it to Amy in A.R., Alien Resources. Review charted findings on previous data. Travel to Earth.`
    },
    {
      source: '31.svg',
      kicker: 'ALIEN RESOURCES // OUTGOING',
      title: 'DEAR AMY',
      alt: 'Glorb’s handwritten letter to Alien Resources clipped over his incident report.',
      transcript: `Department of A.R., Alien Resources, Zorbax and Co.\n\nDear Amy, please find my incident report from today's “incident” attached. I have booked a small holiday home on Earth for some R plus R — Research and Reporting. I will be in touch with my findings. Please forward all correspondence there.\n\nMy ship is currently unavailable. Mostly because it exploded.\n\nThanks, Glorb.\n\nP.S. I am aware this is my third ship. P.P.S. Sorry.`
    },
    {
      source: '32.svg',
      kicker: 'ZORBAX-9 RESEARCH DIVISION',
      title: 'INCIDENT REPORT',
      alt: 'Glorb’s formal incident report showing signal overload, his angry ears, and the crashed ship.',
      transcript: `Zorbax-9 Research Division. Incident report form. Subject: self monitored signal overload. Location: in transit, Zorbax-9 orbital lane.\n\nOne. Signal identification. Name: signal overload. This is probably not good, considering the outcome. Three red exclamation marks: critical marking, highest importance.\n\nTwo. Physical response. Main physical response: angry ear. Pinned flat back against head. Reactive ear. Field note: ears pressed flat against the head. One of the clearest warning signs across the animal world. It usually means the animal feels overwhelmed, scared, or ready to react. Give space.\n\nThree. Observed outcome: not good.\n\nAnalyst summary: total signal meltdown. Preventable. Failure to react to rising signal. Systems overwhelmed. Monitor early warning signs.`
    },
    {
      source: '33.svg',
      kicker: 'CHART READING // CRASH REPORT',
      title: 'TIME LINE OF EVENTS',
      alt: 'A coloured timeline moving from low signal to steady signal, rising signal and signal overload.',
      interactive: 'incidents',
      transcript: `Time line of events. Chart reading extracted from crash report.\n\nLow signal mode: woke up tired, couldn't start ship, just sank. Had breakfast, rested, played with Frog, the flying space dog.\n\nSteady signal: started flying, feeling a bit better, started listening to radio, great tunes, dancing a little while driving, having a good time.\n\nRising signal: saw those Gleborna aliens on the terrace. They made fun of my ears. They wouldn't stop even when I asked. Started chasing them. Saw rising signal flash on my dash. Ignored it.\n\nSignal overload: they kept making fun of my ears. Chased harder. Ignored all ship signals. Push, push, push.\n\nClick the four “see other similar incidents logged” notes to open Glorb's other examples.`
    },
    {
      source: '36.svg',
      kicker: 'A FEW WEEKS LATER // ON EARTH',
      title: 'RESEARCH LOG // DAY 23',
      alt: 'Glorb’s Earth research log showing him dancing in Tom’s face at lunch while Tom becomes annoyed.',
      transcript: `A few weeks later, on Earth. School playground: lunch.\n\nGlorb: research log, entry 14. Day 23 on Earth.\n\nI have not exploded anything. This feels like the correct amount of progress.\n\nHowever, today at lunch I went to sit next to my friend Tom. I started dancing in his face and shouting, “Let's have a party, Tommy boy, the world is ours and the day is young!” over and over because I saw someone on TV do it and the audience laughed.\n\nIt did not make Tom laugh. Instead, it had an unexpected outcome. Please see my attached drawings of the events that occurred.\n\nPlease turn page to see the outcome.`
    },
    {
      source: '37.svg',
      kicker: 'SCHOOL PLAYGROUND // LUNCH',
      title: 'OUTCOME',
      alt: 'Tom pushes Glorb away after becoming increasingly upset.',
      transcript: `Outcome.\n\nTommy did apologise for pushing me. However, someone also pointed out that I'd ignored his signals: the ones that showed he was getting more and more upset, long before it got to pushing.\n\nThat got me thinking. My ship has signals too. Maybe humans just wear theirs on the outside instead of on a dashboard. I think I need some help sorting them into the right categories.`
    },
    {
      source: '38.svg',
      kicker: 'GLORB // HUMAN SIGNAL CATEGORIES',
      title: 'CLICK TO FIND OUT MORE',
      alt: 'Glorb’s four signal categories: low signal, steady signal, rising signal and signal overload.',
      interactive: 'signals',
      transcript: `I categorised human signals like this. Click each category to find out more. Low signal. Steady signal. Rising signal. Signal overload.`
    },
    {
      source: '43.svg',
      kicker: 'FIELD GUIDE // SUMMARY',
      title: 'FOUR SIGNALS',
      alt: 'A four-part summary showing signal overload, rising signal, steady signal and low signal with emotion examples.',
      final: true,
      transcript: `Glorb's field guide summary. Signal overload. Rising signal. Steady signal. Low signal. Notice the signal early, then choose the kind of help that fits.`
    }
  ];

  const incidentDetails = {
    low: {
      eyebrow: 'SIMILAR INCIDENT // LOW SIGNAL',
      title: 'LOW SIGNAL LOG',
      page: '35.svg',
      crop: 'bottom',
      caption: 'Glorb notices low energy, low attention and a drooping flight pattern.',
      transcript: `Okay, so I don't know about any of this or why I have to write what happened. Basically, I'd been flying for ages, hadn't really talked to anyone, wasn't really paying attention to where I even was. My ears just started drooping and, I don't know, I guess I stopped noticing stuff around me. I wasn't mad. I was just... I don't know... which way? I was just really low. I think I missed a turn somewhere, but I don't even care enough to go check.\n\nIncident report: self monitored low signal. Energy is running low, a bit slow, just down. Easy to miss things while it's happening. Main physical response: sad ear. Observed outcome: starts slowly drooping, not much energy to move in any other direction other than down, down, down.`
    },
    steady: {
      eyebrow: 'SIMILAR INCIDENT // STEADY SIGNAL',
      title: 'STEADY SIGNAL LOG',
      page: '35.svg',
      crop: 'top',
      caption: 'A good day: nothing needs fixing, and Glorb can keep doing what is working.',
      transcript: `Okay, so honestly nothing really happened. I was just cruising down All-Gravity Street, had a really good breakfast, ears just chilling forward the whole time, listening to my rock and roll tunes.\n\nI didn't need to fix anything, didn't need a break, didn't need anyone to leave me alone. It was just a good day. A perfect day, really. I was in a great mood.\n\nI thought it was worth writing down because I usually write in here after an “incident” happens, and I didn't want you to think I am always having negative incidents. To be honest, I don't really have a story for this one. That's the whole point of it. Great day, ten out of ten.\n\nIncident report: self monitored steady signal. Everything is working the way it's supposed to. Calm. Focused. Ready. Observed outcome: perfection.`
    },
    rising: {
      eyebrow: 'SIMILAR INCIDENT // RISING SIGNAL',
      title: 'RISING SIGNAL LOG',
      page: '34.svg',
      crop: 'bottom',
      caption: 'Glorb notices the warning early, changes course and avoids overload.',
      transcript: `Okay, so what happened is: I was just flying past Splartzee Terrace, minding my own business, when I saw those Gleborna aliens. They are always around just sitting there being smug, looking at my ears like that.\n\nI hadn't even done anything yet. My ears just started twitching and I got that jumpy, annoyed feeling. That's around when the fire light came on, actually. I thought I'd better check it out and not ignore it, so I turned around and drove away. Around the corner I pulled over, put out the fire and my ship seemed okay. I went home, had a cup of tea, played with my Frog, floating space dog. Surprisingly, all ended up okay.\n\nIncident report: self monitored rising signal. This means something is off. Probably time to stop and check it out. Main physical response: uneasy ear. Observed outcome: still flying, but a few issues. Fire being one.`
    },
    overload: {
      eyebrow: 'SIMILAR INCIDENT // SIGNAL OVERLOAD',
      title: 'OVERLOAD LOG',
      page: '34.svg',
      crop: 'top',
      caption: 'Glorb ignores the rising signal, keeps pushing, and ends in signal overload.',
      transcript: `Okay, so what happened is I saw those Gleborna aliens and they were making fun of my ears again. They are not nice.\n\nSo I wanted to teach them a lesson and, well, I started chasing them. But they kept getting away and teasing me even more. I don't really know what happened. I sort of blacked out. I know I saw the rising signal and ignored it. I was just trying to catch them, so I pushed my ship to go harder and then all of a sudden it was signal overload.\n\nIncident report: self monitored signal overload. Main physical response: angry ear. Observed outcome: not good.`
    }
  };

  const signalDetails = {
    low: {
      eyebrow: 'HUMAN SIGNAL // LOW',
      title: 'LOW SIGNAL',
      page: '39.svg',
      caption: 'Low energy, low preparedness, low awareness and low attention.',
      transcript: `Low signal is seen and felt as low energy, low preparedness, low awareness and low attention. It can look like sad, embarrassed, lonely, bored, tired or unsure.\n\nWhat can help: rest for a few minutes. Get a drink of water or a snack. Do some gentle movement, like a stretch or a short walk. Talk to someone about it. Change what you're doing for a bit. Ask for some quiet space.`
    },
    steady: {
      eyebrow: 'HUMAN SIGNAL // STEADY',
      title: 'STEADY SIGNAL',
      page: '40.svg',
      caption: 'Steady energy, preparedness, awareness and attention.',
      transcript: `Steady signal is seen and felt as steady energy, steady preparedness, steady awareness and steady attention. It can look like calm, focused, proud and content.\n\nWhat can help: keep doing what's working. Notice how good this feels. Take on a challenge, or help someone else with theirs. Set a goal while your mind is clear. Enjoy it. There's nothing to fix.`
    },
    rising: {
      eyebrow: 'HUMAN SIGNAL // RISING',
      title: 'RISING SIGNAL',
      page: '41.svg',
      caption: 'Rising energy, tension, reactivity and urgency.',
      transcript: `Rising signal is seen and felt as rising energy, rising tension, rising reactivity and rising urgency. It can look like upset, disrespected, excited, frustrated or nervous.\n\nWhat can help: take a breath, or count to ten. Step away for a moment. Move your body: shake it out, stretch, squeeze something. Say how you're feeling out loud. Ask for a break before it gets bigger. Use a fidget tool.`
    },
    overload: {
      eyebrow: 'HUMAN SIGNAL // OVERLOAD',
      title: 'SIGNAL OVERLOAD',
      page: '42.svg',
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

  let pageIndex = 0;
  let modalData = null;
  let speechActive = false;
  let touchStartX = null;
  let toastTimer = null;

  const pageStage = document.getElementById('pageStage');
  const comicPage = document.getElementById('comicPage');
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

    if (animate) pageStage.classList.add('is-changing');
    const nextSrc = A + p.source;
    const preload = new Image();
    preload.onload = () => {
      comicPage.src = nextSrc;
      comicPage.alt = p.alt;
      pageKicker.textContent = p.kicker;
      pageCounter.textContent = `${String(pageIndex + 1).padStart(2, '0')} / ${String(mainPages.length).padStart(2, '0')}`;
      transcriptTitle.textContent = p.title;
      transcriptText.textContent = p.transcript;
      prevBtn.disabled = pageIndex === 0;
      nextLabel.textContent = p.final ? 'RESTART' : 'NEXT';
      nextBtn.querySelector('[aria-hidden="true"]:last-child').textContent = p.final ? '↻' : '→';
      updateDots();
      renderHotspots(p.interactive);
      updateInteractionNote(p.interactive);
      history.replaceState(null, '', `#page=${pageIndex + 1}`);
      window.setTimeout(() => pageStage.classList.remove('is-changing'), animate ? 60 : 0);
      preloadAdjacent();
    };
    preload.onerror = () => {
      comicPage.src = nextSrc;
      pageStage.classList.remove('is-changing');
      showToast('I COULDN’T LOAD THIS PAGE IMAGE. CHECK THE ASSETS FOLDER.');
    };
    preload.src = nextSrc;
  }

  function preloadAdjacent() {
    [pageIndex - 1, pageIndex + 1].forEach(i => {
      if (mainPages[i]) {
        const img = new Image();
        img.src = A + mainPages[i].source;
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
      btn.className = 'hotspot';
      btn.setAttribute('aria-label', spot.label);
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

  function go(delta) {
    if (mainPages[pageIndex].final && delta > 0) {
      pageIndex = 0;
      renderPage();
      window.scrollTo({top: 0, behavior: 'smooth'});
      return;
    }
    const next = Math.max(0, Math.min(mainPages.length - 1, pageIndex + delta));
    if (next === pageIndex) return;
    pageIndex = next;
    renderPage();
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

  function openDetail(type, id) {
    stopSpeech();
    modalData = type === 'incidents' ? incidentDetails[id] : signalDetails[id];
    if (!modalData) return;

    modalEyebrow.textContent = modalData.eyebrow;
    modalTitle.textContent = modalData.title;
    modalCaption.textContent = modalData.caption;

    if (type === 'incidents') {
      const cls = modalData.crop === 'top' ? 'incident-crop--top' : 'incident-crop--bottom';
      modalVisual.innerHTML = `<div class="incident-crop ${cls}"><img src="${A + modalData.page}" alt="${modalData.title}"></div>`;
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
  nextBtn.addEventListener('click', () => go(1));
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
    if (event.key === 'ArrowRight') go(1);
    if (event.key === 'ArrowLeft') go(-1);
    if (event.key.toLowerCase() === 'r') readCurrent();
  });

  pageStage.addEventListener('touchstart', (event) => {
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
