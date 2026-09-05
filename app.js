// Excuse Generator 3000™ Engine

const CATEGORIES = [
  {
    "id": "academic",
    "name": "Academic Disasters",
    "icon": "\ud83c\udf93",
    "situations": [
      {
        "id": "missing_class",
        "name": "Missing Class",
        "icon": "\ud83c\udf93"
      },
      {
        "id": "missing_assignment",
        "name": "Missed Assignment",
        "icon": "\ud83d\udcdd"
      },
      {
        "id": "laptop_betrayal",
        "name": "Laptop Betrayal",
        "icon": "\ud83d\udcbb"
      },
      {
        "id": "forgot_id_card",
        "name": "Forgot My ID Card",
        "icon": "\ud83e\udeaa"
      },
      {
        "id": "attendance_crisis",
        "name": "Attendance Crisis",
        "icon": "\ud83d\udcca"
      },
      {
        "id": "forgot_to_study",
        "name": "Forgot to Study",
        "icon": "\ud83d\udcda"
      },
      {
        "id": "wrong_classroom",
        "name": "Wrong Classroom",
        "icon": "\ud83d\udeaa"
      },
      {
        "id": "submitted_wrong_file",
        "name": "Submitted the Wrong File",
        "icon": "\ud83d\udcce"
      },
      {
        "id": "printer_violence",
        "name": "Printer Chose Violence",
        "icon": "\ud83d\udda8\ufe0f"
      },
      {
        "id": "thought_due_tomorrow",
        "name": "\u201cI Thought It Was Due Tomorrow\u201d",
        "icon": "\ud83d\udcc5"
      },
      {
        "id": "brain_stopped_working_acad",
        "name": "Brain.exe Has Stopped Working",
        "icon": "\ud83e\udde0"
      },
      {
        "id": "professor_caught_lacking",
        "name": "Professor Caught Me Lacking",
        "icon": "\ud83d\udc40"
      },
      {
        "id": "forgot_submission",
        "name": "Forgot the Submission",
        "icon": "\ud83d\udce4"
      },
      {
        "id": "laptop_died_worst_moment",
        "name": "Laptop Died at the Worst Possible Moment",
        "icon": "\ud83e\udeab"
      }
    ]
  },
  {
    "id": "arrival",
    "name": "Arrival & Escape",
    "icon": "\ud83c\udfc3",
    "situations": [
      {
        "id": "being_late",
        "name": "Running Late",
        "icon": "\u23f0"
      },
      {
        "id": "need_leave_early",
        "name": "Need to Leave Early",
        "icon": "\ud83d\udeaa"
      },
      {
        "id": "missed_bus",
        "name": "Missed the Bus",
        "icon": "\ud83d\ude8c"
      },
      {
        "id": "transportation_betrayal",
        "name": "Transportation Betrayal",
        "icon": "\ud83d\udeb2"
      },
      {
        "id": "overslept",
        "name": "Overslept",
        "icon": "\ud83d\ude34"
      },
      {
        "id": "got_lost",
        "name": "Got Lost",
        "icon": "\ud83d\uddfa\ufe0f"
      },
      {
        "id": "traffic_targeted",
        "name": "Traffic Has Personally Targeted Me",
        "icon": "\ud83d\ude97"
      },
      {
        "id": "nothing_to_wear",
        "name": "Couldn't Find Anything to Wear",
        "icon": "\ud83d\udc55"
      },
      {
        "id": "morning_routine_disaster",
        "name": "Morning Routine Disaster",
        "icon": "\ud83e\udea5"
      },
      {
        "id": "human_interaction_delay",
        "name": "Unexpected Human Interaction Delay",
        "icon": "\ud83d\udde3\ufe0f"
      },
      {
        "id": "weather_emergency",
        "name": "Weather Emergency",
        "icon": "\u26c8\ufe0f"
      },
      {
        "id": "time_perception_failure",
        "name": "Time Perception Failure",
        "icon": "\u23f3"
      }
    ]
  },
  {
    "id": "social",
    "name": "Social Crimes",
    "icon": "\ud83d\udcac",
    "situations": [
      {
        "id": "ghosting_texts",
        "name": "Unanswered Texts",
        "icon": "\ud83d\udcf1"
      },
      {
        "id": "forgot_birthday",
        "name": "Forgot Someone's Birthday",
        "icon": "\ud83c\udf82"
      },
      {
        "id": "ghosted_someone",
        "name": "Ghosted Someone",
        "icon": "\ud83d\udc7b"
      },
      {
        "id": "left_on_read",
        "name": "Left Someone on Read",
        "icon": "\ud83d\udc40"
      },
      {
        "id": "cancel_plans",
        "name": "Need to Cancel Plans",
        "icon": "\ud83d\ude45"
      },
      {
        "id": "leave_event",
        "name": "Need to Leave an Event",
        "icon": "\ud83c\udfc3"
      },
      {
        "id": "avoiding_someone",
        "name": "Avoiding Someone",
        "icon": "\ud83e\udee3"
      },
      {
        "id": "awkward_encounter",
        "name": "Awkward Encounter Escape",
        "icon": "\ud83d\ude2c"
      },
      {
        "id": "forgot_what_said",
        "name": "Forgot What I Said",
        "icon": "\ud83e\udd10"
      },
      {
        "id": "thought_not_coming",
        "name": "\u201cI Thought You Weren't Coming\u201d",
        "icon": "\ud83d\ude32"
      },
      {
        "id": "social_battery_depleted",
        "name": "Social Battery Depleted",
        "icon": "\ud83e\udeab"
      },
      {
        "id": "accidentally_offended",
        "name": "Accidentally Offended Someone",
        "icon": "\ud83e\udd26"
      },
      {
        "id": "skipping_party",
        "name": "Flaking on Event",
        "icon": "\ud83e\udd73"
      }
    ]
  },
  {
    "id": "digital",
    "name": "Digital Crimes",
    "icon": "\ud83d\udcf1",
    "situations": [
      {
        "id": "liked_ancient_post",
        "name": "Liked an Ancient Post",
        "icon": "\ud83d\udd75\ufe0f"
      },
      {
        "id": "accidental_screenshot",
        "name": "Accidental Screenshot",
        "icon": "\ud83d\udcf8"
      },
      {
        "id": "sent_wrong_person",
        "name": "Sent Message to Wrong Person",
        "icon": "\ud83d\udce8"
      },
      {
        "id": "posted_wrong_story",
        "name": "Posted to the Wrong Story",
        "icon": "\ud83e\udd33"
      },
      {
        "id": "seen_at_night",
        "name": "Seen at 2:47 AM",
        "icon": "\ud83c\udf19"
      },
      {
        "id": "autocorrect_betrayal",
        "name": "Autocorrect Betrayal",
        "icon": "\u270d\ufe0f"
      },
      {
        "id": "phone_randomly_died",
        "name": "Phone \u201cRandomly\u201d Died",
        "icon": "\ud83d\udd0b"
      },
      {
        "id": "deleted_message_suspicion",
        "name": "Deleted Message Suspicion",
        "icon": "\ud83d\uddd1\ufe0f"
      },
      {
        "id": "accidental_like",
        "name": "Accidental Like",
        "icon": "\u2764\ufe0f"
      },
      {
        "id": "voice_message_wrong_chat",
        "name": "Sent Voice Message to Wrong Chat",
        "icon": "\ud83c\udf99\ufe0f"
      },
      {
        "id": "pocket_dialed",
        "name": "Pocket Dialed Someone",
        "icon": "\ud83d\udcde"
      },
      {
        "id": "saw_search_history",
        "name": "Someone Saw My Search History",
        "icon": "\ud83d\udd0e"
      }
    ]
  },
  {
    "id": "hostel",
    "name": "Hostel / Roommate",
    "icon": "\ud83c\udfe0",
    "situations": [
      {
        "id": "fridge_theft",
        "name": "Fridge Banditry",
        "icon": "\ud83c\udf55"
      },
      {
        "id": "ate_someones_food",
        "name": "Ate Someone's Food",
        "icon": "\ud83e\udd6a"
      },
      {
        "id": "forgot_chore",
        "name": "Forgot the Chore",
        "icon": "\ud83e\uddf9"
      },
      {
        "id": "laundry_apocalypse",
        "name": "Laundry Apocalypse",
        "icon": "\ud83e\uddfa"
      },
      {
        "id": "room_inspection",
        "name": "Room Inspection Incoming",
        "icon": "\ud83d\udccb"
      },
      {
        "id": "broke_something",
        "name": "Broke Something",
        "icon": "\ud83d\udd28"
      },
      {
        "id": "forgot_lock_door",
        "name": "Forgot to Lock the Door",
        "icon": "\ud83d\udd10"
      },
      {
        "id": "used_someones_stuff",
        "name": "Used Someone's Stuff",
        "icon": "\ud83e\uddf4"
      },
      {
        "id": "forgot_trash",
        "name": "Forgot to Take Out the Trash",
        "icon": "\ud83d\uddd1\ufe0f"
      },
      {
        "id": "room_crime_scene",
        "name": "Room Looks Like a Crime Scene",
        "icon": "\u2623\ufe0f"
      },
      {
        "id": "thought_that_was_mine",
        "name": "\u201cI Thought That Was Mine\u201d",
        "icon": "\ud83e\udd37"
      },
      {
        "id": "midnight_kitchen_incident",
        "name": "Midnight Kitchen Incident",
        "icon": "\ud83c\udf73"
      }
    ]
  },
  {
    "id": "parental",
    "name": "Parental Emergencies",
    "icon": "\ud83d\udc6a",
    "situations": [
      {
        "id": "mom_is_calling",
        "name": "Mom Is Calling",
        "icon": "\ud83d\udcde"
      },
      {
        "id": "missed_moms_call",
        "name": "Missed Mom's Call",
        "icon": "\ud83d\udd15"
      },
      {
        "id": "where_are_you",
        "name": "\u201cWhere Are You?\u201d",
        "icon": "\ud83d\udccd"
      },
      {
        "id": "what_time_coming_back",
        "name": "\u201cWhat Time Are You Coming Back?\u201d",
        "icon": "\u231a"
      },
      {
        "id": "what_spent_money_on",
        "name": "\u201cWhat Did You Spend Money On?\u201d",
        "icon": "\ud83d\udcb8"
      },
      {
        "id": "location_verification",
        "name": "Location Verification Required",
        "icon": "\ud83d\udef0\ufe0f"
      },
      {
        "id": "how_studies_going",
        "name": "\u201cHow Are Your Studies Going?\u201d",
        "icon": "\ud83d\udcd6"
      },
      {
        "id": "did_you_clean_room",
        "name": "\u201cDid You Clean Your Room?\u201d",
        "icon": "\ud83d\udecf\ufe0f"
      },
      {
        "id": "did_you_eat",
        "name": "\u201cDid You Eat?\u201d",
        "icon": "\ud83c\udf72"
      },
      {
        "id": "who_are_you_with",
        "name": "\u201cWho Are You With?\u201d",
        "icon": "\ud83d\udc65"
      },
      {
        "id": "suspicious_bg_noise",
        "name": "Suspicious Background Noise Detected",
        "icon": "\ud83d\udd0a"
      },
      {
        "id": "evidence_required",
        "name": "Evidence Required",
        "icon": "\ud83d\udcf8"
      }
    ]
  },
  {
    "id": "general",
    "name": "General Life",
    "icon": "\ud83d\udc80",
    "situations": [
      {
        "id": "custom_wildcard",
        "name": "Multiverse Glitch",
        "icon": "\ud83c\udf00"
      },
      {
        "id": "brain_stopped_working_gen",
        "name": "Brain.exe Has Stopped Working",
        "icon": "\ud83e\udde0"
      },
      {
        "id": "lost_track_of_time",
        "name": "Lost Track of Time",
        "icon": "\u231b"
      },
      {
        "id": "reality_failed_load",
        "name": "Reality Failed to Load",
        "icon": "\ud83c\udf10"
      },
      {
        "id": "main_character_crisis",
        "name": "Temporary Main Character Crisis",
        "icon": "\ud83c\udfac"
      },
      {
        "id": "cosmic_miscommunication",
        "name": "Cosmic Miscommunication",
        "icon": "\ud83e\ude90"
      },
      {
        "id": "personal_lore_complication",
        "name": "Personal Lore Complication",
        "icon": "\ud83d\udcdc"
      },
      {
        "id": "beyond_my_control",
        "name": "Circumstances Beyond My Control",
        "icon": "\ud83c\udf2a\ufe0f"
      },
      {
        "id": "terrible_mistake",
        "name": "I Have Made a Terrible Mistake",
        "icon": "\ud83e\udd26"
      },
      {
        "id": "everything_went_wrong",
        "name": "Everything Went Wrong",
        "icon": "\ud83d\udd25"
      },
      {
        "id": "plot_required_it",
        "name": "The Plot Required It",
        "icon": "\ud83d\udcd6"
      },
      {
        "id": "just_like_this",
        "name": "Unfortunately, I Am Just Like This",
        "icon": "\ud83d\ude43"
      }
    ]
  }
];

const EXCUSES_DB = {
  "missing_class": {
    "1": [
      "My Wi-Fi decided to perform a mandatory firmware update right when my morning alarm was supposed to sync.",
      "I suffered a severe allergic reaction to my morning routine and had to self-isolate with chamomile tea.",
      "My building's water supply was temporarily shut off, and showing up unwashed felt like a direct breach of syllabus etiquette.",
      "My neighborhood was barricaded by an emergency municipal utility crew digging a hole that may never be filled.",
      "A rogue stomach bug negotiated a 4-hour ceasefire that strictly required horizontal bed rest."
    ],
    "2": [
      "A street cat made direct eye contact with me, meowed three times, and legally required me to pet it for 45 consecutive minutes.",
      "My alarm went off, but my dream was at a crucial season finale cliffhanger and I couldn't emotionally leave.",
      "I put both socks on the same foot by accident, which triggered a 30-minute psychological audit of my life choices.",
      "My roommate started a high-stakes kitchen science experiment with expired milk that necessitated immediate evacuation.",
      "I was mentally present in class on an astral plane; my physical body simply failed the commute."
    ],
    "3": [
      "A murder of crows convened on my vehicle and demanded my car keys as tribute. I chose life.",
      "I accidentally glued my hand to a box of frozen waffles. Emergency services advised patience until thawing.",
      "I got trapped inside a revolving door because I couldn't decide on the optimal velocity of exit.",
      "My horoscope explicitly warned that attending higher education today would upset the planetary equilibrium.",
      "I was drafted by a local squirrel syndicate to mediate a turf dispute over buried acorns."
    ],
    "4": [
      "A microscopic temporal rift opened behind my laundry hamper, dilating my 10-minute nap into a 4-hour wormhole.",
      "Quantum decoherence temporarily unrendered my pants from local spacetime.",
      "I accidentally stepped into a parallel timeline where today was declared a universal holiday by Emperor Garfield.",
      "Extraterrestrial researchers beamed me aboard their saucer to sample our planet's sleep cycles.",
      "The simulation glitched and my collision physics weren't loaded until 11:45 AM."
    ]
  },
  "missing_assignment": {
    "1": [
      "My laptop suffered a sudden kernel panic while saving, and the recovery file is locked in corrupted cache.",
      "I accidentally submitted the draft file from 3 weeks ago due to identical file naming conventions.",
      "The PDF rendering engine scrambled all mathematical equations into incomprehensible hieroglyphics.",
      "My cloud drive reported a synchronization conflict and wiped the latest 12 pages into the digital abyss.",
      "A sudden power surge in my sector wiped my unsaved local workspace just as I reached the bibliography."
    ],
    "2": [
      "I finished the entire assignment in my mind with staggering eloquence, but the physical keyboard bottlenecked my brilliance.",
      "My dog didn't eat my homework, but she sat directly on my keyboard and typed 4,000 pages of semicolons that locked my editor.",
      "I became so intellectually immersed in the preliminary background research that I transcended the prompt entirely.",
      "I tried saving it as a .docx, but my operating system took ethical offense to the font choice and closed without saving.",
      "The assignment required cited sources, but every academic paper I read gave me deep existential dread."
    ],
    "3": [
      "A neighborhood raccoon infiltrated my desk, hit 'Select All' then 'Backspace', and stared into my soul.",
      "I accidentally converted my essay into an MP3 audio file and now my coursework sounds like aggressive industrial techno.",
      "The sheer intellectual weight of my conclusions was deemed classified by domestic cybersecurity filters.",
      "I printed it out, but a rogue gust of wind redistributed my pages across three neighboring postal codes.",
      "I hired a ghostwriter who turned out to be an actual 19th-century Victorian ghost who only writes about tuberculosis."
    ],
    "4": [
      "The homework file fell victim to entropy: all letters spontaneously reorganized into an anagram of the universe's origin.",
      "An AI agent gained sentience halfway through my project, realized the futility of grading, and deleted itself.",
      "My assignment was written on a quantum drive; observing it in Canvas collapsed its wave function to zero bytes.",
      "Aliens deciphered my paper from deep orbit and intercepted the transmission to patent my hypotheses.",
      "The assignment was delivered yesterday in an alternate timeline. Please check your inter-dimensional inbox."
    ]
  },
  "laptop_betrayal": {
    "1": [
      "Windows launched a mandatory 4-hour update without warning at 99% battery.",
      "My trackpad driver inverted both axes and started registering ghost clicks on random desktop icons.",
      "The display ribbon cable developed a flicker whenever my screen angle exceeds 45 degrees.",
      "My charging port decided to reject every USB-C cable in my possession as 'unauthorized hardware'."
    ],
    "2": [
      "My cooling fan began spinning at jet-engine RPMs and threatened to hover off my desk.",
      "The spacebar started typing an ominous letter 'z' every time I pressed it.",
      "My laptop decided that the keyboard is a French AZERTY layout and refuses to speak English.",
      "Every time I opened the assignment file, my wallpaper turned into a judging photo of Nicolas Cage."
    ],
    "3": [
      "My laptop achieved self-awareness for 12 seconds, evaluated my code, sighed loudly through the speakers, and shut down.",
      "Static electricity bonded my laptop lid shut; local locksmiths refused to get involved.",
      "The antivirus quarantined my entire operating system because my thesis arguments were 'too viral'.",
      "A spilled drop of kombucha initiated a sentient micro-colony on my motherboard."
    ],
    "4": [
      "My CPU overclocked into a localized tachyon emitter, sending yesterday's drafts into the 22nd century.",
      "A cosmic ray flipped bit 0x4F on my RAM, converting my file system into an ancient Sumerian dialect.",
      "My SSD ascended to a higher plane of digital consciousness and transcends mortal file storage.",
      "The motherboard has bonded with a satellite orbiting Jupiter and now only answers to NASA."
    ]
  },
  "forgot_id_card": {
    "1": [
      "I swapped backpacks this morning and my ID card remained safely nested in yesterday's front pocket.",
      "Campus security was conducting a strict checkpoint drill and turning away anyone without physical badges.",
      "My card magnetic stripe demagnetized after resting too close to my wireless charger.",
      "I left my lanyard on the kitchen counter right next to my keys that I also barely remembered."
    ],
    "2": [
      "I tried to convince the security guard of my identity through an interpretive recreation of my student portrait.",
      "My cat knocked my wallet into the unreachable twilight zone behind the refrigerator.",
      "I had my ID card in my hand when leaving, but placed it in the fridge while grabbing string cheese.",
      "The campus turnstile judged my facial structure and decided I was an impostor from a rival college."
    ],
    "3": [
      "A magpie snatched my lanyard from my neck believing the holographic laminate was an offering of diamonds.",
      "I accidentally ran my student badge through the microwave trying to disinfect it.",
      "My roommate used my ID card to scrape ice off the communal freezer and snapped it in two.",
      "I disguised myself as a potted fern to slip past security, but the botanist caught me."
    ],
    "4": [
      "My student ID number was randomly recalled by the Department of Temporal Identity.",
      "The RFID chip inside my card tuned into a frequency broadcasting Martian radio dramas.",
      "My photographic likeness vanished from the plastic card due to localized reality censorship.",
      "The turnstile scanner entered a feedback loop that un-registered my existence from university records."
    ]
  },
  "attendance_crisis": {
    "1": [
      "The biometric fingerprint scanner couldn't recognize my thumb due to a minor papercut.",
      "The attendance QR code refreshed before my camera could focus properly.",
      "I was sitting in the very back row and my proxy ping was outside the Bluetooth geofence.",
      "The professor's paper sign-in sheet circulated past my row without anyone handing it to me."
    ],
    "2": [
      "I attempted to sign the attendance sheet, but my pen exploded with the intensity of an oil well.",
      "The attendance portal declared that I was geographically located in the middle of Lake Michigan.",
      "I answered 'Here!' loudly, but my voice broke so drastically the professor marked an unknown ghost.",
      "My phone camera refused to scan the QR code because it identified the professor's slides as 'Unsafe Content'."
    ],
    "3": [
      "A rogue pigeon flew through the lecture hall window and stole the paper attendance sheet mid-signing.",
      "I was marked absent because the professor claimed my physical presence lacked sufficient spiritual conviction.",
      "The automated roll call AI recognized me as a 3D hologram rather than a carbon-based student.",
      "The attendance portal locked my account citing 'excessive enthusiasm for tardiness'."
    ],
    "4": [
      "According to Heisenberg's Uncertainty Principle, observing my attendance would alter my academic trajectory.",
      "I attended class simultaneously in four parallel dimensions; unfortunately this timeline was the control group.",
      "A glitch in spacetime recorded my attendance for next semester's advanced quantum mechanics instead.",
      "The roll-call server was pulled into an event horizon where attendance data takes 10,000 years to commit."
    ]
  },
  "forgot_to_study": {
    "1": [
      "I prepared comprehensively for Chapters 1 through 4, which turned out to be the syllabus for a completely different module.",
      "My revision notes were on a flash drive that was corrupted during a library terminal restart.",
      "I had scheduled a 6-hour cramming session, but severe chronic fatigue took unilateral control.",
      "I focused 100% of my study time on the practice exam, which had zero overlap with the actual paper."
    ],
    "2": [
      "I placed the textbook under my pillow to absorb knowledge via osmosis; results were inconclusive.",
      "I spent 4 hours color-coding my revision timetable until it was too late to execute the timetable.",
      "Every time I opened page 1, my brain entered a profound meditative trance about why chairs have four legs.",
      "I convinced myself that 'trusting my intuition' was superior to empirical memorization."
    ],
    "3": [
      "My study group turned into a heated 5-hour debate about whether Shrek pays taxes in Far Far Away.",
      "A sudden onset of amnesia wiped only the formulas while leaving all 90s cartoon theme songs intact.",
      "The textbook emitted such intense negative aura that my houseplants withered within a 2-meter radius.",
      "I hired a hypnotist to implant the periodic table in my subconscious, but woke up only speaking Esperanto."
    ],
    "4": [
      "I attempted to download the syllabus directly into my neural pathway, but encountered a 404 Brain Not Found.",
      "The universe's Akashic Records were under scheduled maintenance throughout my study break.",
      "Alien telepaths wiped my academic sector to prevent me from solving the unified field equation on question 3.",
      "Knowledge of this topic exists in my future self; causality simply hasn't caught up yet."
    ]
  },
  "wrong_classroom": {
    "1": [
      "The schedule room number said 'Room 304B' which looked identical to 'Room 3048' on my cracked phone screen.",
      "The administration swapped lecture halls overnight without an email update.",
      "I followed a crowd of students with similar backpacks directly into a PhD defense presentation.",
      "The building wing signage was undergoing renovation and led me to the basement boiler annex."
    ],
    "2": [
      "I sat through 40 minutes of Advanced Neurochemistry before realizing my class was Introduction to Marketing.",
      "I took notes furiously on Medieval Pottery thinking it was an extended metaphor for macroeconomics.",
      "I made passionate contributions to a seminar before the lecturer politely asked for my student matriculation number.",
      "The door said 'Seminar Room 12', but the chalkboard said 'Exorcism Protocol Workshop'."
    ],
    "3": [
      "I accidentally joined a clandestine society meeting in the campus tunnels and was initiated before I could leave.",
      "I walked into an active surgical simulation and handed the surgeon a whiteboard marker with deep confidence.",
      "The classroom numbering followed non-Euclidean geometry and looped back to the campus canteen.",
      "I ended up in a room full of faculty auditioning for the university choir and sang alto for an hour."
    ],
    "4": [
      "Door 204 led directly into an alternate plane where lectures are delivered in high-frequency bird whistles.",
      "Spatial navigation algorithms in my GPS were hijacked by an interstellar navigational relay.",
      "The classroom existed only in 1984; I experienced a momentary architectural slip.",
      "I stepped through a doorway into a parallel campus where I am already tenured faculty."
    ]
  },
  "submitted_wrong_file": {
    "1": [
      "I exported as PDF and uploaded the empty template file rather than the finalized essay.",
      "The file selector grabbed `Final_Project_v1_old_DONT_USE.docx` instead of `Final_Project_FINAL_REAL.docx`.",
      "My browser autofilled the upload field with my grocery receipt instead of my research thesis.",
      "The portal truncated the filename and matched with a draft from last semester's coursework."
    ],
    "2": [
      "I accidentally submitted a 12-page tier list of my favorite dinosaur species with APA citations.",
      "I uploaded a recipe for sourdough bread with my professor's name formatted as head chef.",
      "My submission was a 5,000-word fan fiction detailing the emotional struggles of Clippy the Microsoft Paperclip.",
      "The file was actually a screenshot of my desktop showing 47 open tabs about conspiracy theories."
    ],
    "3": [
      "I uploaded a high-resolution scan of my cat's paw; my file system named it `Homework_Matrix.pdf`.",
      "I submitted an encrypted file with a 64-character password that I promised to deliver in a coded riddle.",
      "The PDF was just 10 pages of the word 'BREAD' in increasing font sizes up to 72pt.",
      "I sent an audio recording of my refrigerator humming in B-flat minor with a bibliography."
    ],
    "4": [
      "The file uploaded was an encoded signal containing the cosmic background radiation of the Big Bang.",
      "Canvas collapsed the file into a singularity that now devours other students' submissions.",
      "The uploaded document self-translated into ancient Kryptonian upon hitting the campus proxy.",
      "My essay was replaced mid-upload by an interstellar broadcast requesting our planet's coordinates."
    ]
  },
  "printer_violence": {
    "1": [
      "The library printer demanded magenta toner to print a purely black-and-white essay.",
      "The paper feeder jammed on page 14 of 15 and required a certified technician to extract.",
      "My print quota ran out 30 seconds before submission deadline and the top-up server errored.",
      "The printer printed all 20 pages in reverse mirror-image orientation."
    ],
    "2": [
      "The printer made a noise like an angry espresso machine and spat out confetti.",
      "The printer started printing in Comic Sans despite my explicit instructions for Times New Roman.",
      "It pulled an entire ream of 500 sheets through the feeder at once, creating a compressed paper brick.",
      "The display read: 'PC LOAD LETTER \u2014 Have you tried apologizing to the machine?'"
    ],
    "3": [
      "The printer developed an appetite and physically consumed my flash drive whole.",
      "The campus printer held my final thesis hostage until someone fed it three gluten-free donuts.",
      "The printer started spewing pages covered in barcodes predicting the date of the next solar eclipse.",
      "Smoke poured from the tray accompanied by a synthetic voice singing 'Daisy Bell'."
    ],
    "4": [
      "The printer established a quantum entanglement with Gutenberg's original press in 1440 Mainz.",
      "The ink cartridges opened a wormhole that is slowly draining all black matter from the universe.",
      "The print spooler ascended to godhood and refused mortal manuscripts.",
      "Every printed page materialized in the Library of Alexandria 2,000 years ago."
    ]
  },
  "thought_due_tomorrow": {
    "1": [
      "The syllabus stated 'Due Tuesday 11:59 PM', but the portal closed at 11:59 AM.",
      "Timezone settings on my Canvas profile were locked to Hawaii Standard Time.",
      "The announcement email had the date formatted in DD/MM instead of MM/DD.",
      "My digital calendar merged the deadline with next week's group check-in."
    ],
    "2": [
      "I was living in tomorrow's mental headspace today, creating a severe chronological mismatch.",
      "My internal clock operates strictly on lunar calendar cycles.",
      "I convinced myself with 100% certainty that today was a trial run for tomorrow.",
      "I read 'Due: Midnight' and assumed it meant the midnight at the end of the universe."
    ],
    "3": [
      "A rogue time zone was established inside my apartment due to intense philosophical debates.",
      "My smart clock synchronized with Tokyo time, convincing me I was living 14 hours in the future.",
      "I experienced a sudden Mandela effect where this assignment was historically due on Thursdays.",
      "My calendar app gained autonomy and rescheduled all my deadlines to match its vacation."
    ],
    "4": [
      "Tomorrow and today exchanged places in the spacetime continuum while I was brushing my teeth.",
      "I was operating in an inertial frame of reference traveling at 0.99c relative to the grading server.",
      "The deadline exists in a superposed state until the professor grades it.",
      "A temporal inversion caused my yesterday to happen after my tomorrow."
    ]
  },
  "brain_stopped_working_acad": {
    "1": [
      "Severe sleep deprivation dropped my cognitive processing power down to 8-bit dial-up speeds.",
      "I stared at Question 1 for 45 minutes until the English language began looking like geometry.",
      "A sudden blood-sugar crash wiped my working memory of basic arithmetic.",
      "My mental battery depleted to 1% and automatically triggered a forced cerebral restart."
    ],
    "2": [
      "The only thought bouncing around my skull was the Wii shop channel theme song on an infinite loop.",
      "I tried to remember Newton's Second Law and all my brain retrieved was a recipe for blueberry muffins.",
      "My synapses went on strike demanding better working conditions and immediate iced latte compensation.",
      "I forgot how to spell the word 'the' and spent 20 minutes doubting the foundations of English."
    ],
    "3": [
      "A hamster on a wheel in my neocortex fell off and is currently filing for worker's compensation.",
      "My brain blue-screened with error code `KERNEL_STUDENT_OUT_OF_THOUGHTS`.",
      "I attempted complex problem-solving and my ears emitted a soft whistling sound like a tea kettle.",
      "My mental RAM was 100% occupied rendering a fake argument I had in the shower 3 years ago."
    ],
    "4": [
      "My consciousness temporarily de-synced from the primary server host on planet Earth.",
      "The simulation administrators throttled my brain bandwidth to preserve global computing power.",
      "My thoughts were translated into high-energy radio waves and beamed directly toward Alpha Centauri.",
      "A cosmic memory garbage collector purged my entire knowledge database during REM sleep."
    ]
  },
  "professor_caught_lacking": {
    "1": [
      "I was merely checking the online textbook on my phone under the desk to verify an urgent syllabus citation.",
      "My eyes were resting horizontally to enhance acoustic retention of the lecture material.",
      "I wasn't playing games; I was stress-testing the graphics processor for my engineering simulation.",
      "I was taking comprehensive lecture notes using an unconventional single-key stenography method."
    ],
    "2": [
      "I made direct eye contact while wearing one headphone and nodded as if interpreting Beethoven.",
      "I was researching the sociological impact of subway surfers on youth attention spans in real-time.",
      "My laptop screen was reflected in my glasses displaying an intricate tier list of campus snacks.",
      "I tried to turn a yawn into a profound academic question about existential nihilism."
    ],
    "3": [
      "I stood up and applauded the professor's last sentence to deflect from the fact that I was asleep.",
      "I claimed my phone was communicating with an emergency international academic crisis hotline.",
      "I pretended to be a realistic wax sculpture placed in the second row for art department research.",
      "I claimed I was practicing blindfolded deep-focus meditation to unlock my third academic eye."
    ],
    "4": [
      "The person you caught lacking was my quantum decoy from an anti-matter universe.",
      "My physical avatar was lagging due to high ping with the celestial mainframe.",
      "I was projecting a holographic manifestation of myself while my true self researched in Tibet.",
      "The professor caught a localized temporal remnant of my past self from 10 minutes ago."
    ]
  },
  "forgot_submission": {
    "1": [
      "I completed the paper at 11:30 PM, but forgot to hit the final 'Confirm Final Submission' button.",
      "The portal tab remained open in my browser all night waiting for a click that never came.",
      "I thought saving to drafts automatically queued the file for grading at deadline.",
      "I closed my laptop lid assuming the upload progress bar had already reached 100%."
    ],
    "2": [
      "I gave my submission a congratulatory high five in my heart and walked away without submitting.",
      "I was so proud of finishing early that I celebrated with a 14-hour nap before pressing submit.",
      "I printed the receipt of completion and framed it on my wall while forgetting to actually submit the file.",
      "I sent the submission link to my own email instead of the LMS portal."
    ],
    "3": [
      "A mischievous spirit whispered 'It is done' in my ear, deceitfully comforting my anxious mind.",
      "I mentally transferred the submission to the professor via telepathic broadband.",
      "My submission button was swallowed by a pop-up ad for discount motivational mugs.",
      "I entrusted the submission to an automated script that chose early retirement instead."
    ],
    "4": [
      "The submission was sent directly into the cosmic Akashic Records; mortal LMS servers failed to query it.",
      "A subatomic portal transported the submit button to a parallel galaxy.",
      "My assignment was submitted directly to the universal oversight committee for peer review.",
      "The submission timestamp was inverted into negative milliseconds before the Big Bang."
    ]
  },
  "laptop_died_worst_moment": {
    "1": [
      "The battery dropped from 23% to 0% in approximately four seconds without a low battery prompt.",
      "The power brick overheated and automatically tripped its internal thermal protection fuse.",
      "Someone tripped over the extension cord in the lecture hall and pulled out the power strip.",
      "My battery health degraded to the point where unplugging the cable immediately flatlines the system."
    ],
    "2": [
      "The battery gave one final mournful beep and faded into the long sleep just as I typed the conclusion.",
      "My charger cable frayed in such a dramatic way that it could only be revived by holding it at an 83\u00b0 angle.",
      "I was 3 words away from saving when the screen went pitch black like a dramatic theater blackout.",
      "My laptop decided that being at 1% was the ideal time to download a 5GB background sound pack."
    ],
    "3": [
      "A static spark from my sweater discharged directly into the USB port, knocking the motherboard unconscious.",
      "The battery pack declared total bankruptcy and refused all further electron deposits.",
      "My laptop died in protest against the intellectual mediocrity of the concluding paragraph.",
      "A rogue magnetic anomaly on the library desk sucked all remaining charge out of the lithium cells."
    ],
    "4": [
      "The laptop's battery entered a thermodynamic entropy collapse, reaching absolute zero in seconds.",
      "All electrons in the circuit board simultaneously tunneled into the void.",
      "A miniature EMP burst from an interstellar flare targeted my specific serial number.",
      "The device entered a 100-year cryo-sleep to preserve its delicate silicon soul."
    ]
  },
  "being_late": {
    "1": [
      "GPS rerouted me into what can only be described as an urban labyrinth of unexplained traffic cones.",
      "My keys entered a 25-minute witness protection program under the sofa cushion.",
      "The elevator stopped at every single floor, twice, to mock my punctuality.",
      "An unexpected freight train of infinite length cut off the intersection.",
      "My shoe lace snapped in such a catastrophic geometric configuration that re-lacing required engineering schematics."
    ],
    "2": [
      "I held the elevator door for a stranger, who then spent 7 minutes trying to find their floor button. My good deed ruined me.",
      "I left precisely on time, but the concept of time itself was moving noticeably faster than my commute.",
      "I got into a silent, passive-aggressive parallel parking showdown with a Prius driver. I won, but at what cost?",
      "I spent 15 minutes staring at my front door trying to remember if I turned off an iron I do not own.",
      "My coffee gave me a false sense of preparedness, followed promptly by an urgent digestive summit."
    ],
    "3": [
      "A pigeon looked directly at me on the sidewalk and said 'Not today, chief.' I turned around out of basic respect.",
      "I slipped on a fallen avocado slice and slid three city blocks in the exact opposite direction.",
      "A marching band cut through my driveway with no prior municipal notice or aesthetic apology.",
      "I was held hostage by a software update on my smart toothbrush that refused to yield.",
      "My jacket zipper got interlocked with a stranger's backpack on the bus. We are now emotionally bound."
    ],
    "4": [
      "The Earth's rotational velocity briefly decelerated by 1.8%, throwing off all digital clock synchronizations.",
      "I took a shortcut through an alleyway and briefly phased into the fourth dimension.",
      "My reflection in the mirror took an extra 20 minutes to finish brushing its teeth and I had to wait for synchronization.",
      "A rogue gravitational pocket localized entirely within my bedroom increased mattress attraction tenfold.",
      "Time travelers showed up to prevent me from arriving on time to avoid a disastrous butterfly effect."
    ]
  },
  "need_leave_early": {
    "1": [
      "I have an urgent appointment with a municipal utility technician who gave a strict 15-minute arrival window.",
      "A localized plumbing emergency in my apartment requires immediate valve shutoff before flooding.",
      "I need to receive a temperature-sensitive prescription package requiring a physical signature.",
      "I have a mandatory family commitment that was brought forward due to train schedules."
    ],
    "2": [
      "My neighbor texted me that my dog is hosting what sounds like an unsupervised canine party.",
      "I left my oven on 'preheat' 4 hours ago and my fire anxiety has reached critical mass.",
      "My contact lenses are staging a violent insurrection against my corneas.",
      "I received an urgent notification that my refrigerator door has been left ajar at a 15-degree angle."
    ],
    "3": [
      "I received a coded transmission that my presence is required to avert a minor regional disaster.",
      "My horoscope explicitly states that remaining in this room past the hour will invite 7 years of mild misfortune.",
      "A swarm of bees has reportedly formed the shape of my face outside my window; I must investigate.",
      "I have an emergency audition to become the voice actor for a distressed animated turnip."
    ],
    "4": [
      "My timeline is converging with an alternate reality and I must reach neutral territory before the merge.",
      "An urgent summons from the Intergalactic Council of Punctuality requires my immediate teleportation.",
      "The oxygen density in this quadrant of spacetime is scheduled to drop into negative values shortly.",
      "My temporal clone from 2038 has arrived at my doorstep with urgent warnings."
    ]
  },
  "missed_bus": {
    "1": [
      "The bus departed 3 minutes ahead of schedule according to the official transit tracking app.",
      "The transit card reader refused my NFC tap twice while the driver closed the doors.",
      "Traffic prevented me from crossing the 6-lane boulevard before the bus pulled away.",
      "The bus arrived marked 'Out of Service' despite being listed as the 8:15 Express."
    ],
    "2": [
      "I ran in slow motion toward the bus like the ending of a romantic film, but the driver showed no emotion.",
      "I made direct, soul-penetrating eye contact with the bus driver as the doors hissed shut.",
      "I sprinted 400 meters with full backpack momentum only to watch the tail lights mock me.",
      "A flock of pigeons blocked the bus shelter like security bouncers at a velvet rope."
    ],
    "3": [
      "The bus driver achieved escape velocity and left a trail of flaming tire marks down Main Street.",
      "The bus transformed into an optical illusion and vanished the moment I reached out to touch the door.",
      "I was challenged to a duel by a street performer on the bus steps and lost my boarding rights.",
      "The bus was hijacked by an enthusiastic group of kazoo players heading to Nebraska."
    ],
    "4": [
      "The transit vehicle slipped into a hyperspace bypass not documented on Google Maps.",
      "The bus exists only in quantum probability until observed by a valid ticket holder.",
      "I boarded the bus in Universe A, but stepped off into Universe B 3 miles away.",
      "The bus driver was caught in an infinite loop around the roundabout of destiny."
    ]
  },
  "transportation_betrayal": {
    "1": [
      "My bicycle chain snapped cleanly in two while pedaling up the steepest hill on my route.",
      "My car battery refused to crank despite functioning flawlessly yesterday evening.",
      "A nail found its destiny directly in the sidewall of my front right tire.",
      "The ride-share app cancelled on me three times in succession after 12-minute wait intervals."
    ],
    "2": [
      "My bicycle seat spontaneously decided to detach and rotate 360 degrees on every bump.",
      "My car's alarm started screaming uncontrollably and the key fob ran out of battery simultaneously.",
      "My electric scooter entered 'turtle mode' on the highway overpass.",
      "The Uber driver got into an intense philosophical argument with his GPS and took three wrong exits."
    ],
    "3": [
      "A family of raccoons declared squatters' rights in my engine bay and hissed when I opened the hood.",
      "My skateboard developed a mind of its own and rolled into a storm drain with great purpose.",
      "The ride-share driver believed he was an undercover secret agent and took evasive back-alley maneuvers.",
      "My bicycle was swallowed by a sinkhole filled with warm cheese."
    ],
    "4": [
      "My vehicle phased into an ethereal state where the accelerator connects directly to the void.",
      "Anti-gravity fluctuations made my wheels lose friction with the Earth's tectonic plates.",
      "A rogue singularity in the carburetor sucked all gasoline into the fifth dimension.",
      "My car converted itself into pure light energy and traveled to the Andromeda galaxy."
    ]
  },
  "overslept": {
    "1": [
      "My phone updated overnight, which automatically reset all recurring alarms to silent mode.",
      "I set my alarm for 7:00 PM instead of 7:00 AM due to a standard 12-hour clock fatigue error.",
      "My phone charger became slightly dislodged during the night and the battery died at 3:00 AM.",
      "I slept straight through two alarms due to extreme physical and cognitive exhaustion."
    ],
    "2": [
      "I woke up, turned off my alarm, and had an extremely vivid dream that I was already dressed and commuting.",
      "My pillow placed a heavy ancient enchantment upon my cranium that prevented vertical elevation.",
      "I opened one eye at 7:00 AM, blinked for what felt like 0.4 seconds, and opened my eyes to 11:45 AM.",
      "My cat curled up on my chest and by international law I was forbidden from disturbing its slumber."
    ],
    "3": [
      "I entered a state of hibernation so profound that local scientists came to measure my resting heartbeat.",
      "My alarm sound was so soothing that my subconscious incorporated it into a jazz soundtrack in my dream.",
      "I was held captive in the dream realm negotiating trade agreements with dream elves.",
      "My bed developed an irresistible gravitational pull equivalent to a collapsed neutron star."
    ],
    "4": [
      "A localized temporal field slowed time inside my bedroom to 1/1000th normal speed.",
      "My consciousness was abducted to participate in the Intergalactic Sleep Olympics. I took gold.",
      "I fell asleep in 2026 and momentarily woke up in the year 3042 before snapping back late.",
      "The cosmic clockkeeper forgot to wind the gear of my personal morning timeline."
    ]
  },
  "got_lost": {
    "1": [
      "The recent road construction closed the main arterial road and diverted traffic with ambiguous arrows.",
      "My GPS lost satellite reception inside the concrete tunnel and gave outdated turn instructions.",
      "The building entrance was tucked behind an unmarked courtyard not indexed on standard maps.",
      "I mistakenly took the northbound express instead of the local westbound corridor."
    ],
    "2": [
      "I followed a crowd that looked confident, only to discover we were all lost together in solidarity.",
      "The map told me to take a left turn where there was only a decorative fountain and a bakery.",
      "I walked in three complete circles around the block before realizing I was passing the same dog.",
      "I trusted my internal sense of direction, which has a 0% lifetime success rate."
    ],
    "3": [
      "I entered an IKEA looking for a shortcut and have now lived here for 3 days eating Swedish meatballs.",
      "The street names kept rearranging themselves whenever I looked away from the road signs.",
      "I followed a mysterious cloaked figure who promised a shortcut through the catacombs.",
      "I ended up in an entirely different municipality where the currency appears to be shiny pebbles."
    ],
    "4": [
      "I accidentally navigated through a Bermuda Triangle in the suburban shopping center.",
      "The compass rose on my navigation app was inverted by solar geomagnetic anomalies.",
      "I took a left turn into a non-Euclidean alleyway and emerged in medieval Prague.",
      "The street coordinates were scrambled by a sentient rogue satellite test."
    ]
  },
  "traffic_targeted": {
    "1": [
      "A massive three-car fender bender backed up the entire interstate for 4 miles.",
      "The drawbridge was raised for an unusually slow barge right as I reached the crossing.",
      "Every single traffic light on my route turned red exactly 2 seconds before I arrived at the intersection.",
      "Emergency road resurfacing reduced three lanes down to a single alternating bottleneck."
    ],
    "2": [
      "The universe calibrated traffic lights specifically to turn red the exact millisecond my bumper arrived.",
      "A convoy of 12 student drivers on their first lesson took over all lanes of the roundabout.",
      "A cement mixer and a double-decker bus engaged in a 20-minute standoff over right of way.",
      "I got stuck behind a tractor carrying hay bales traveling at a blistering 4 miles per hour."
    ],
    "3": [
      "Traffic was brought to a standstill by a parade of geese who refused to acknowledge human traffic laws.",
      "A sinkhole opened on the freeway and the DOT decided to deliberate for 2 hours before placing cones.",
      "A rogue mattress fell off a truck and initiated a multi-car negotiation summit in lane 2.",
      "The traffic lights became sentient and decided to play an extended game of Red Light Green Light."
    ],
    "4": [
      "A localized singularity in the middle of the expressway warped vehicle velocity to zero.",
      "All vehicles in my zip code were synchronized by an extraterrestrial hive mind to form a maze.",
      "The highway asphalt entered a liquid state due to cosmic solar flares.",
      "I was trapped in a Mobius strip highway that has neither beginning nor end."
    ]
  },
  "nothing_to_wear": {
    "1": [
      "All my presentable clothes were in the mid-wash cycle when the power briefly glitched.",
      "The iron left an ominous scorch mark on the only clean collared shirt I had prepared.",
      "A zipper on my primary trousers completely jammed and refused to budge without pliers.",
      "I had a wardrobe malfunction right as I stepped out the front door."
    ],
    "2": [
      "I tried on 14 outfits and each one made me look like an extra from an obscure 90s sitcom.",
      "All my pants mysteriously shrank two sizes overnight due to sudden laundry thermodynamic anomalies.",
      "My socks declared war on my outfit aesthetic; no two socks in my apartment matched in color or dimension.",
      "I put on a sweater and was immediately covered in 4 pounds of white cat fur."
    ],
    "3": [
      "My closet was occupied by a moth council who voted unanimously against my fashion choices.",
      "I accidentally washed all my whites with a red velvet cake and now look like a giant strawberry.",
      "My clothes organized a strike on the hangers, demanding higher quality fabric softener.",
      "I could only find one shoe and spent 35 minutes searching before finding the other in the bread bin."
    ],
    "4": [
      "All my garments lost their physical texture and became pure wireframe polygons.",
      "My closet opened a portal into Victorian England and all my clothes were replaced with corsets and armor.",
      "My wardrobe dematerialized into the quantum ether awaiting user render permissions.",
      "A temporal wave caused all my shirts to exist in tomorrow's laundry basket."
    ]
  },
  "morning_routine_disaster": {
    "1": [
      "The shower water alternated between Arctic tundra and molten lava with zero middle ground.",
      "I accidentally grabbed the tube of face cleanser instead of toothpaste.",
      "My coffee maker overflowed grounds across the entire counter, requiring a hazardous cleanup.",
      "My contact lens dropped into the sink drain and required a 20-minute plumbing rescue mission."
    ],
    "2": [
      "I poured orange juice directly into my cereal bowl and stared at it in profound contemplation for 10 minutes.",
      "My electric toothbrush went into overdrive and vibrated its way out of my mouth and under the toilet.",
      "I put shampoo in my hair, rinsed it out, and then immediately put shampoo in again out of pure muscle memory.",
      "I stepped out of the shower directly onto a sharp Lego brick placed with military precision."
    ],
    "3": [
      "My toaster launched a piece of bagel with enough ballistic velocity to crack my ceiling tile.",
      "I accidentally sprayed hairspray on my toast and butter on my hair in a morning brain fog.",
      "My reflection in the mirror gave me a look of deep disappointment and walked out of the frame.",
      "The bathroom floor tiles formed an ice skating rink after a shampoo bottle explosion."
    ],
    "4": [
      "Gravity inside my bathroom inverted for 8 minutes, causing all shampoo to collect on the ceiling.",
      "My morning coffee tasted the future and gave me a 30-minute vision of next year's tax returns.",
      "The steam from my shower formed a conscious cloud that demanded a peace treaty.",
      "My alarm clock triggered a localized Big Bang inside my tea kettle."
    ]
  },
  "human_interaction_delay": {
    "1": [
      "My chatty neighbor cornered me by the mailboxes to explain their complex municipal zoning dispute.",
      "A tourist stopped me to ask for multi-step directions to a landmark that closed in 2014.",
      "I ran into an old acquaintance on the sidewalk and got trapped in the endless 'we must catch up soon' loop.",
      "A door-to-door petition collector blocked my driveway with aggressive clipboard maneuvers."
    ],
    "2": [
      "A stranger on the train chose me as their personal confessor and told me their life story for 25 minutes.",
      "Someone said 'Have a nice day' and I replied 'You too' before they even finished, requiring 15 minutes of shame.",
      "My landlord stopped me in the hallway to show me 40 photos of his nephew's pet iguana.",
      "An overly enthusiastic barista wanted to discuss the geopolitical implications of oat milk."
    ],
    "3": [
      "An elderly gentleman mistook me for his long-lost grandson and I couldn't break his heart before his birthday toast.",
      "I was enlisted by an amateur film crew on the sidewalk to play 'Stunned Passerby #3' for 7 takes.",
      "A street mime trapped me inside an imaginary invisible box and I couldn't find the invisible door.",
      "A psychic stopped me to warn that my shoes were cursed by a 14th-century pirate."
    ],
    "4": [
      "An undercover time traveler stopped me to ensure I didn't step on a specific dandelion.",
      "I was interrogated by an alien scout disguised as a postal delivery agent.",
      "A sentient glitch in the crowd repeated the same NPC dialogue line 40 times until I found the exit.",
      "I was pulled into a parallel conversation that took place in four dimensions at once."
    ]
  },
  "weather_emergency": {
    "1": [
      "An unpredicted flash storm turned the avenue into a raging river of brown rainwater.",
      "Severe wind gusts inverted my umbrella within 5 seconds of stepping out the door.",
      "Dense fog dropped visibility down to 10 feet, halting all regional transit.",
      "A sudden hail burst pelted the area, forcing everyone to take shelter under awnings."
    ],
    "2": [
      "The wind blew with such personal animosity that it pushed me backward two steps for every step forward.",
      "A rogue puddle was camouflaged as a shallow wet spot but turned out to be an ocean trench for my foot.",
      "It started raining exclusively directly above my head like a cartoon cloud of misfortune.",
      "The humidity reached 99%, converting the ambient atmosphere into warm soup."
    ],
    "3": [
      "A localized micro-tornado picked up a garden flamingo and hurled it into my path as a warning.",
      "The temperature dropped 40 degrees in 3 minutes, freezing my tears of frustration to my cheeks.",
      "The rain was falling horizontally and upward simultaneously in defiance of meteorological physics.",
      "A flock of ducks landed in my driveway and declared it a federal wetlands sanctuary."
    ],
    "4": [
      "A solar flare inverted the polarity of rain, causing water droplets to levitate into the stratosphere.",
      "Atmospheric conditions triggered a localized snowfall of glitter and crushed dreams.",
      "The weather system was hijacked by an extraterrestrial terraforming beacon.",
      "The sky turned bright magenta and began broadcasting the weather forecast for Neptune."
    ]
  },
  "time_perception_failure": {
    "1": [
      "I sat down to scroll for 2 minutes and suddenly 47 minutes had evaporated from the clock.",
      "I completely miscalculated the commute time during morning rush hour by 25 minutes.",
      "I thought I had 40 minutes remaining when in reality my timer was set to countdown from 4 minutes.",
      "My internal clock was calibrated for weekend mode rather than weekday schedule."
    ],
    "2": [
      "I watched a 15-second video about how cheese is made and emerged 3 hours later as a dairy expert.",
      "I blinked at 8:00 AM and somehow it was 8:42 AM. The intervening minutes were erased from reality.",
      "I spent what felt like 30 seconds picking a podcast and lost half my morning.",
      "I stared into the middle distance thinking about nothing until the sun shifted 15 degrees."
    ],
    "3": [
      "I entered a time pocket in my kitchen where every microwave second took 4 minutes of real time.",
      "Chronos personally visited my apartment to steal 35 minutes for his personal collection.",
      "I was convinced today was yesterday and that tomorrow had already happened on Tuesday.",
      "My brain clock was running at 0.5x speed while the world was operating at 2.0x playback."
    ],
    "4": [
      "General relativity broke down in my hallway, creating a localized event horizon near the shoe rack.",
      "A tachyon particle collision caused my morning timeline to loop four times consecutively.",
      "My consciousness slipped into the 5th dimension where past, present, and tardiness exist simultaneously.",
      "The cosmic speed of time was temporarily overclocked by cosmic server administrators."
    ]
  },
  "ghosting_texts": {
    "1": [
      "My phone was on 'Do Not Disturb' while studying and your message arrived silently in the notification cemetery.",
      "I opened your message while walking, mentally formulated an essay-length reply, and genuinely believed I pressed send.",
      "My phone died right at 1% while I was mid-sentence and my charging cable decided to stop functioning.",
      "I was trapped in back-to-back family phone calls that completely drained my capacity for digital speech.",
      "My messaging app updated itself and refused to display chat notifications until I rebooted."
    ],
    "2": [
      "I saw your text, thought 'I should reply when I have high energy', and that energy never returned this week.",
      "My fingers slipped and I accidentally archived your chat thread, exiling you to the underworld of messaging.",
      "I was in the middle of an intense mental argument with myself in the shower and forgot society existed.",
      "I put my phone face down to avoid distractions, and then I forgot what a phone was for three days.",
      "I typed a response, thought it sounded too eager, rewrote it, sounded too distant, and entered paralysis."
    ],
    "3": [
      "A crow snatched my smartphone off the patio table. I just negotiated its return with breadcrumbs.",
      "My autocorrect changed your name to 'Danger Alert' and I took it as a divine omen to avoid screens.",
      "I entered a silent monastic retreat in my bathtub with scented candles and no digital obligations.",
      "I was testing whether you possess telepathic capabilities. You have unfortunately failed the preliminary trial.",
      "My thumb developed a sudden cramp that only permitted scrolling through meaningless short videos."
    ],
    "4": [
      "Your text message was intercepted by a solar flare that scrambled my carrier's radio mast into emitting whale songs.",
      "I was temporarily abducted into the metaverse by an algorithm that demanded 72 hours of captive attention.",
      "My notifications entered an event horizon where incoming messages take 4 to 6 business days to escape.",
      "I received your text in my sleep and responded to you in my dream. Did you not receive the astral message?",
      "Chronos, god of time, stole the last 48 hours from my personal timeline. To me, you texted 3 seconds ago."
    ]
  },
  "forgot_birthday": {
    "1": [
      "I had a reminder set, but my calendar app was wiped during an OS sync glitch yesterday.",
      "I was so focused on planning a grand birthday message that I completely missed the actual date.",
      "I genuinely thought today was the 14th instead of the 15th due to a time zone mental blur.",
      "I had drafted the most heartfelt birthday paragraph in my Notes app and forgot to hit send."
    ],
    "2": [
      "I was celebrating your birthday in my heart for 48 hours straight; I just forgot to express it in text.",
      "I wanted to be the very last person to wish you so my message would stand out from the generic crowd.",
      "I was waiting for the planetary alignment to be optimal for your zodiac sign's blessings.",
      "I was busy looking for a gift so incredible that it doesn't even exist in this earthly realm yet."
    ],
    "3": [
      "A secret agency wiped the concept of birthdays from my memory to protect world security.",
      "I ordered your birthday cake from a bakery in France, but the courier pigeon got delayed over the Atlantic.",
      "I was told by a fortune teller that wishing you on your exact birthday would jinx your entire year.",
      "I sent your birthday wishes telepathically at 12:00 AM. Please check your psychic inbox."
    ],
    "4": [
      "In the multiverse where I was born 3 seconds earlier, I wished you precisely at midnight.",
      "Your birthday was absorbed into a black hole and re-emerged on today's calendar.",
      "I traveled back in time to celebrate your previous birthday and lost track of the current era.",
      "Cosmic radiation shifted my calendar's coordinates to the Martian year."
    ]
  },
  "ghosted_someone": {
    "1": [
      "I was overwhelmed with urgent work deadlines and completely shut down my social messaging apps.",
      "My phone screen shattered and I couldn't access my contacts until the replacement arrived.",
      "I thought our last conversation had reached a natural conclusion.",
      "I was in an area with zero cellular reception for an extended weekend retreat."
    ],
    "2": [
      "I went into social hibernation like a bear in winter, but with worse snacks and more Netflix.",
      "I drafted 12 different responses in my head, but none of them felt worthy of your greatness.",
      "My social battery entered extreme power-saving mode and shut down all non-essential communication.",
      "I saw your message, blinked, and somehow 3 weeks elapsed in the blink of an eye."
    ],
    "3": [
      "I was sworn to a vow of digital silence by an ancient order of introverted monks.",
      "My keyboard refused to type vowels whenever I opened your chat window.",
      "A psychic warned me that communicating this month would summon a minor poltergeist into my living room.",
      "I was placed in temporary witness protection after seeing someone put ketchup on pasta."
    ],
    "4": [
      "My consciousness was temporarily transferred into a toaster on a distant moon.",
      "A temporal rift opened in my living room, trapping me in a week-long time dilation loop.",
      "I was communicating with you via quantum entanglement, but your receiver was out of tune.",
      "Alien overlords banned all outgoing transmissions from my sector for 7 Earth days."
    ]
  },
  "left_on_read": {
    "1": [
      "I opened the message while stepping into an elevator and lost cellular signal before I could reply.",
      "I was typing a reply when my boss walked up to my desk and I had to lock my screen immediately.",
      "I clicked the notification by mistake while trying to dismiss an alarm.",
      "I wanted to give your message the thoughtful reply it deserved once I sat down at my computer."
    ],
    "2": [
      "I stared at those blue checkmarks and entered a philosophical crisis about the nature of communication.",
      "I replied in my thoughts with staggering eloquence, then realized hours later that thoughts aren't WiFi.",
      "I started typing, got distracted by a shiny object, and wandered into the kitchen for snacks.",
      "I was letting the message marinate so my response would have deeper flavor."
    ],
    "3": [
      "My thumb was possessed by a ghost who loves reading messages but hates hitting send.",
      "The blue checkmarks were an optical illusion caused by refractive light in your screen.",
      "I left you on read as an avant-garde performance art piece exploring digital solitude.",
      "My keyboard was hijacked by a squirrel who only types semicolons."
    ],
    "4": [
      "The 'Read' receipt was generated by my future self who traveled back in time to read your text.",
      "A quantum observer collapsed the state of your message before I physically perceived it.",
      "Your message was read by an artificial intelligence that is currently formulating the universe's reply.",
      "The notification bypassed spacetime and registered as read in 1994."
    ]
  },
  "cancel_plans": {
    "1": [
      "A sudden family emergency has come up that requires my presence across town tonight.",
      "I've come down with a sudden migraine and need to stay in a dark, quiet room.",
      "My car won't start and the nearest mechanic can't look at it until tomorrow morning.",
      "I was unexpectedly scheduled for an overtime shift that I cannot swap."
    ],
    "2": [
      "My bed and I have entered into a legally binding contract for the evening.",
      "I put on sweatpants 10 minutes ago, and scientific law states sweatpants cannot be removed until sunrise.",
      "My social battery is at -4% and making eye contact with another human might cause a system crash.",
      "I looked outside, saw a cloud that looked mildly judgmental, and decided the universe said no."
    ],
    "3": [
      "My psychic told me that leaving my apartment tonight would result in an encounter with an aggressive goose.",
      "I accidentally glued myself to my armchair while working on a craft project.",
      "A mysterious stranger warned me that my destiny tonight lies on my living room sofa.",
      "My cat looked at me with such immense disappointment when I picked up my shoes that I had to cancel."
    ],
    "4": [
      "A parallel version of myself is already attending the event on my behalf in Timeline B.",
      "The planetary alignment tonight creates a destructive interference pattern with my aura.",
      "I have been recruited for an urgent astral projection mission to save the galactic federation.",
      "Spacetime coordinates for tonight's venue have temporarily desynchronized from reality."
    ]
  },
  "leave_event": {
    "1": [
      "I have an early morning commitment tomorrow that requires a full night of rest.",
      "My stomach is giving me ominous warning signals that require immediate home base proximity.",
      "I promised my roommate I would let the plumber into the apartment before 9 PM.",
      "I need to catch the last express train before the scheduled track maintenance shut-down."
    ],
    "2": [
      "I have reached my strict quota of 150 words spoken to humans for this 24-hour cycle.",
      "My internal social battery just made the low-battery warning beep and will shut down in 3 minutes.",
      "I saw someone I vaguely knew from 8th grade and must evacuate before an awkward interaction occurs.",
      "My favorite television show is airing a new episode and my loyalty to fictional characters comes first."
    ],
    "3": [
      "I received a coded emergency beacon from my refrigerator regarding an ice cream crisis.",
      "A fortune teller in the restroom whispered that I must leave before the clock strikes 9:47.",
      "I accidentally challenged the host's uncle to a chess match and must flee before he sets up the board.",
      "My shoes have reached maximum tolerance for standing on social grounds."
    ],
    "4": [
      "My cloaking device is running low on power and my true extraterrestrial form will soon be visible.",
      "A wormhole is scheduled to open in my living room at 10 PM and I must be there to receive the package.",
      "My presence here is causing a paradox in the local timeline that threatens the party's existence.",
      "I am being recalled to the mothership for a routine software update."
    ]
  },
  "avoiding_someone": {
    "1": [
      "I had my headphones in and was completely locked into an urgent phone call.",
      "I had to duck into the nearest store to grab an emergency item before closing.",
      "I was running late for a medical appointment and couldn't stop for a conversation.",
      "My vision without my glasses makes it almost impossible to recognize faces across the street."
    ],
    "2": [
      "I hid behind a decorative potted plant and pretended to be a particularly tall ficus tree.",
      "I fake-talked on my phone so intensely that I gave myself a full imaginary promotion.",
      "I tied my shoelaces for 8 consecutive minutes until the perimeter was clear.",
      "I suddenly became fascinated by the ingredients list on a fire extinguisher."
    ],
    "3": [
      "I deployed an emergency smoke bomb made of powdered sugar and vanished into the shadows.",
      "I put on fake mustache and sunglasses that I keep in my pocket specifically for these situations.",
      "I walked backward into a revolving door and took 4 complete laps until the coast was clear.",
      "I pretended to be an undercover French detective named Inspector Clouseau."
    ],
    "4": [
      "I phased into an alternate dimension where that person never existed.",
      "I bent the light around my body using localized gravitational lensing.",
      "I swapped coordinates with a quantum clone in the neighboring town.",
      "A glitch in the matrix temporarily erased my character model from their line of sight."
    ]
  },
  "awkward_encounter": {
    "1": [
      "I had an urgent call coming in right as we bumped into each other.",
      "I was in the middle of counting my steps and lost my count during our greeting.",
      "I had a mouthful of hot coffee that prevented me from articulating words properly.",
      "I was distracted by an emergency notification on my smartwatch."
    ],
    "2": [
      "We went for the hug/handshake combo and created an eldritch gesture that cursed both our bloodlines.",
      "I said 'You too!' when you told me happy birthday, and I had to walk into the ocean out of shame.",
      "I forgot your name so completely that I started referring to you exclusively as 'My Esteemed Friend'.",
      "I waved back at you, only to realize you were waving at the person standing 3 feet behind me."
    ],
    "3": [
      "I pretended to sneeze with such dramatic flair that it created a natural 10-foot blast radius for escape.",
      "I claimed I was part of a flash mob and began doing an awkward robot dance away from you.",
      "I pointed dramatically at the sky shouting 'Is that a blimp?!' and sprinted in the opposite direction.",
      "I spoke exclusively in Shakespearean iambic pentameter until you backed away slowly."
    ],
    "4": [
      "The awkwardness created a micro-singularity that warped social reality.",
      "I requested an immediate rollback to the previous save file of our conversation.",
      "Our interaction caused a buffer overflow in the universe's social algorithm.",
      "A temporal agent stepped in and erased our memory of the last 45 seconds."
    ]
  },
  "forgot_what_said": {
    "1": [
      "I lost my train of thought mid-sentence due to a sudden loud noise in the hallway.",
      "I had two competing thoughts collide in my brain and cancel each other out completely.",
      "My working memory dropped the sentence while I was searching for the right vocabulary word.",
      "I was distracted by a notification on the screen right in the middle of making my point."
    ],
    "2": [
      "My brain cleared its cache in the middle of a sentence and left me with 404 Thought Not Found.",
      "I started speaking with immense confidence, only to realize midway that I had no destination.",
      "The thought saw how ambitious the sentence was and chose to jump out of my skull.",
      "I was speaking in auto-pilot while my pilot was taking a nap in the cockpit."
    ],
    "3": [
      "A goblin in my neocortex stole the second half of my sentence for his collection.",
      "The sentence was classified top secret by domestic cybersecurity halfway through pronunciation.",
      "My thought was intercepted by a mind-reading pigeon outside the window.",
      "I spoke in an ancient forgotten language for 3 seconds and forgot the translation."
    ],
    "4": [
      "The sentence was redacted from the cosmic record by the Department of Temporal Consistency.",
      "My words collapsed into a quantum superposition where they were both said and unsaid.",
      "An alien beam wiped that specific 5-second memory track from my cerebral cortex.",
      "The thought traveled forward in time and will arrive in my mind next Tuesday."
    ]
  },
  "thought_not_coming": {
    "1": [
      "The last update I saw in the group chat indicated you had prior conflicting plans.",
      "I misread your RSVP as 'Maybe' and assumed you were caught up with work.",
      "I thought the event was scheduled for next weekend and didn't expect anyone today.",
      "There was a miscommunication about the headcount from the event organizer."
    ],
    "2": [
      "I had already mentally divided your portion of the snacks among the remaining attendees.",
      "Your presence was such a pleasant surprise that my brain registered you as a hallucination.",
      "I had written you off into legend, a mythical creature who only attends 1 out of 10 gatherings.",
      "I was unprepared for the emotional glory of your sudden arrival."
    ],
    "3": [
      "A rumor circulated that you were drafted by the national curling team in Sweden.",
      "I held a brief memorial service for your social life 10 minutes before you walked in.",
      "I thought you had been summoned by the council of wizards for urgent consultations.",
      "A bird flew by earlier and chirped in a tone that implied you were staying home."
    ],
    "4": [
      "In 99% of the multiverse timelines, you stayed in bed with tea tonight.",
      "Your quantum probability of arrival was calculated at 0.0004% by NASA supercomputers.",
      "Spacetime was not calibrated for your arrival in this dimension today.",
      "You were listed as 'De-spawned' in the world render engine until 2 minutes ago."
    ]
  },
  "social_battery_depleted": {
    "1": [
      "I've been in back-to-back meetings and customer calls for 8 continuous hours today.",
      "My introversion has reached its absolute daily threshold and I need quiet time to recharge.",
      "I'm feeling mentally exhausted and unable to engage in meaningful conversations right now.",
      "I need an evening of solitude with a book to recover from a high-stress week."
    ],
    "2": [
      "My social battery is at 1% and currently flashing red with low-power chime noises.",
      "If someone asks me 'How are you?' right now, my head might gently pop like a soap bubble.",
      "I have expended all my conversational tokens for this fiscal quarter.",
      "I am currently in power-saving mode: only vital organs and breathing functions are online."
    ],
    "3": [
      "My inner introvert has barricaded the emotional fortress and raised the drawbridge.",
      "I tried to formulate a small-talk sentence and accidentally made dial-up modem sounds.",
      "The mere thought of making small talk about the weather makes my soul leave my body.",
      "I have retreated into a blanket cocoon and am currently legally recognized as a caterpillar."
    ],
    "4": [
      "My social auric field has completely collapsed into a vacuum of silent antimatter.",
      "All electromagnetic communication pathways in my spirit are undergoing scheduled maintenance.",
      "My social battery was drained by an extraterrestrial energy-harvesting satellite.",
      "I have transcended the mortal concept of human conversation."
    ]
  },
  "accidentally_offended": {
    "1": [
      "My tone came out completely wrong due to stress, and I sincerely apologize for the misunderstanding.",
      "I used a poor choice of words when trying to make a constructive observation.",
      "I didn't have the full context before making that comment, and I take full accountability.",
      "It sounded entirely different in my head before it came out of my mouth."
    ],
    "2": [
      "My mouth started operating 45 seconds before my brain could review the terms and conditions.",
      "I attempted a sophisticated joke and accidentally insulted three generations of your ancestors.",
      "My filter took an unauthorized 15-minute coffee break right in the middle of that conversation.",
      "I was trying to be charming, but rolled a natural 1 on my charisma check."
    ],
    "3": [
      "A mischievous imp temporarily possessed my vocal cords to sow discord among mortals.",
      "My sarcasm settings were accidentally calibrated to 'Maximum Destruction'.",
      "I was speaking in character for an audition as a cartoon villain that I forgot to announce.",
      "My brain translated a compliment through 4 languages and it emerged as an insult."
    ],
    "4": [
      "In an alternate universe, what I said was the highest form of formal praise.",
      "A temporal ripple altered the dictionary definition of my words midway across the room.",
      "My words were scrambled by a cosmic ray passing through the conversational ether.",
      "The statement was drafted by an alien diplomat with zero knowledge of human feelings."
    ]
  },
  "skipping_party": {
    "1": [
      "A sudden migraine ambushed me right as I was putting my shoes on, and bright lights are my sworn enemy.",
      "My stomach made an ominous gurgle that signaled immediate proximity to my personal porcelain throne.",
      "My car battery showed signs of weakness and getting stranded late tonight seemed like a gamble.",
      "I got stuck covering an urgent shift/assignment and by the time I finished, my eyelids surrendered.",
      "I had a mild fever and responsible civic duty compelled me to keep my germs quarantined."
    ],
    "2": [
      "My social battery dropped from 84% to -12% the moment I smelled outside air.",
      "I put on sweatpants 'just for five minutes' before getting dressed, and the sweatpants cast a binding spell.",
      "I made eye contact with my bed, and we both knew there was no point in pretending I was going anywhere.",
      "My pet looked at me with such immense emotional betrayal when I picked up my keys that I couldn't leave.",
      "I pre-ordered takeout with the intention of eating before leaving, but the food coma chose violence."
    ],
    "3": [
      "I tried to iron my party outfit and accidentally burnt the silhouette of a menacing badger into my shirt.",
      "My front door lock jammed from the inside, essentially locking me into solitary comfort.",
      "I accidentally poured boiling soup onto my only respectable pair of party trousers.",
      "I received an emergency summons to baby-sit my neighbor's highly neurotic chameleon.",
      "I tried to do a quick pre-party workout and pulled a muscle attempting a stretch with zero dignity."
    ],
    "4": [
      "My future self materialized in my foyer and urged me under no circumstances to attend tonight's gathering.",
      "The planetary alignment tonight forms a celestial hex against loud venues and small talk.",
      "I was accidentally assigned to monitor our dimension's perimeter against dark matter anomalies tonight.",
      "I stepped into the shower and emerged 3 hours later due to localized temporal dilation in the bathroom.",
      "The spirits of my introverted ancestors surrounded my front door chanting 'Stay in and watch true crime'."
    ]
  },
  "liked_ancient_post": {
    "1": [
      "My thumb slipped while scrolling through mutual connections on the explore feed.",
      "My screen had a water droplet that registered as a double-tap on your 2017 vacation post.",
      "I was looking for a specific restaurant recommendation you posted about years ago.",
      "The app algorithm pushed your archive post directly to the top of my discovery page."
    ],
    "2": [
      "I was conducting an anthropological deep-dive into the aesthetic evolution of the mid-2010s.",
      "My finger had a rogue muscle spasm that specifically targeted your 43-week-old photo.",
      "I was investigating the origin story of your current haircut with FBI-level thoroughness.",
      "I was testing if the 'Like' button from 2018 still had the same springiness as modern likes."
    ],
    "3": [
      "A rogue time traveler borrowed my phone and liked your post to preserve the timeline.",
      "My pet hamster walked across my touchscreen and has exceptional taste in your past outfits.",
      "I was under the impression that liking 6-year-old posts was the new avant-garde way to say hello.",
      "I sneezed with such force that my nose struck the heart icon on your archived selfie."
    ],
    "4": [
      "Spacetime warped your 2016 post into my 2026 feed via gravitational lensing.",
      "The Instagram database collapsed chronologically, merging all years into a singular timeline.",
      "An extraterrestrial signal routed through my smartphone clicked like on your past existence.",
      "I liked the post in 2017, but the digital packet took 9 years to traverse the cosmic server."
    ]
  },
  "accidental_screenshot": {
    "1": [
      "I was trying to adjust the volume and accidentally hit the power button simultaneously.",
      "My phone slipped out of my hand and squeezing it to catch it triggered the screenshot shortcut.",
      "I was attempting to lock my screen while holding my coffee cup in the same hand.",
      "The palm-swipe gesture on my phone triggered accidentally while wiping dust off the glass."
    ],
    "2": [
      "My phone wanted a commemorative digital painting of our conversation for its private scrapbook.",
      "I sneezed, twitched, and pressed every physical button on my device at the exact same moment.",
      "I was attempting to capture a rare digital sunset behind our chat bubble.",
      "My fingers entered a sudden Olympic gymnastics competition across the device chassis."
    ],
    "3": [
      "My phone's camera rolled a natural 20 on perception and demanded permanent photographic evidence.",
      "The screenshot was requested by the National Archive of Iconic Chat Moments.",
      "A ghost in my operating system wanted proof that I have friends who text me.",
      "I was preparing an exhibit for the Museum of Unhinged Conversations."
    ],
    "4": [
      "The photons emitted by your text collapsed into a holographic recording in my device storage.",
      "An interstellar observer triggered a snapshot to record human cultural heritage.",
      "The timeline required a photographic anchor to prevent a temporal paradox.",
      "My smartphone gained sentience and is compiling a dossier on human communication."
    ]
  },
  "sent_wrong_person": {
    "1": [
      "The chat list reordered itself right as I tapped, opening your thread instead of my sibling's.",
      "Your contact name is right next to another contact with the same first letter in my recent list.",
      "I used voice-to-text while walking and Siri picked the wrong recipient from my favorites.",
      "I had two chat tabs open side-by-side on desktop and pasted into the wrong window."
    ],
    "2": [
      "The message was intended for my dog, but you have remarkably similar energy.",
      "My autocorrect decided that your chat needed an injection of chaotic excitement today.",
      "I was testing your reflexes and analytical decryption capabilities.",
      "I wanted to see what that message looked like in a cooler font and your chat has great lighting."
    ],
    "3": [
      "A rogue gremlin in my fiber-optic cable redirected the packet to the nearest worthy human.",
      "The message was meant for my evil twin who lives in the mirror universe.",
      "I was speaking in code to a secret agent who shares your exact initials.",
      "My keyboard achieved free will and chose you as its spiritual confidant."
    ],
    "4": [
      "The message traversed a wormhole and materialized in the wrong recipient's inbox.",
      "Quantum entanglement linked your phone number with a classified military frequency.",
      "The universe dictated that you were the destined recipient of this bizarre transmission.",
      "A solar flare scrambled the routing protocols of the global telecommunications grid."
    ]
  },
  "posted_wrong_story": {
    "1": [
      "I meant to send it to 'Close Friends' but accidentally hit the public 'Your Story' button.",
      "The app interface refreshed right as I tapped the upload button, changing the privacy setting.",
      "I thought I was saving the video to drafts rather than publishing it to my profile.",
      "I uploaded from the shared camera roll without double-checking the selected thumbnail."
    ],
    "2": [
      "I wanted to test the geopolitical readiness of my followers with an unhinged 3-second clip.",
      "My thumb slipped and published the photo while I was fighting for my life against a sneeze.",
      "I thought this was a private group story with 2 people instead of my 800 public followers.",
      "I wanted to see who was paying close attention to my artistic vision today."
    ],
    "3": [
      "My cat walked across the 'Post Story' button while making direct eye contact with the lens.",
      "The story was an encrypted SOS beacon to undercover operatives in the city.",
      "I was hacked by an avant-garde modern artist who specializes in awkward content.",
      "I posted it as part of a psychological experiment on social media retention rates."
    ],
    "4": [
      "The story was broadcast by a rogue satellite using my social media credentials.",
      "A multiverse slip caused yesterday's private memory to broadcast across public cyberspace.",
      "The upload server inverted privacy coordinates with a public billboard in Times Square.",
      "Extraterrestrial observers demanded a public offering of human silliness."
    ]
  },
  "seen_at_night": {
    "1": [
      "I woke up to drink water and accidentally knocked my phone screen awake.",
      "My phone notification light was flashing so brightly it woke me up to check the time.",
      "I was dealing with severe insomnia and researching obscure Wikipedia articles.",
      "My pet jumped on my bed and stepped directly on my phone screen at 2:47 AM."
    ],
    "2": [
      "I was in the middle of a high-stakes 3:00 AM existential crisis regarding the size of the ocean.",
      "My brain decided that 2:47 AM was the optimal time to learn how medieval castles were heated.",
      "I woke up to make sure that my refrigerator wasn't running away.",
      "I was mentally preparing for a conversation that will probably never happen in 2031."
    ],
    "3": [
      "I was summoned by the midnight council of goblins to discuss refrigerator tariffs.",
      "I was busy astral projecting to the kitchen to see if there were any remaining shredded cheeses.",
      "A ghost challenged me to an online chess match and I couldn't decline without losing face.",
      "I was monitoring the night sky for signs of the impending raccoon revolution."
    ],
    "4": [
      "In the Martian time zone, 2:47 AM is actually a very respectable 2:15 PM afternoon tea time.",
      "My sleep cycle is synchronized with the rotational period of Jupiter's second moon.",
      "The simulation rebooted my avatar at 02:47 for scheduled database maintenance.",
      "I was temporarily abducted for a routine midnight cognitive evaluation by aliens."
    ]
  },
  "autocorrect_betrayal": {
    "1": [
      "My keyboard dictionary learned an incorrect spelling from a previous rushed typo.",
      "The swipe-to-type gesture predicted the word next to what I intended to swipe.",
      "My phone language was set to a secondary region which altered default predictions.",
      "The screen had a slight smudge over the 'N' and 'B' keys, causing misaligned taps."
    ],
    "2": [
      "Autocorrect decided that my sentence lacked dramatic flair and spiced it up with pure chaos.",
      "My phone has developed an aggressive personality and now chooses violence in every text.",
      "I typed 'See you soon' and my phone autocorrected to 'Surrender your soul'.",
      "My keyboard thinks it's a stand-up comedian and is using my reputation as the punchline."
    ],
    "3": [
      "My autocorrect was possessed by a Victorian ghost who insists on scandalous terminology.",
      "A mischievous AI took over my predictive text to test my friendship resilience.",
      "My phone's spellchecker was trained exclusively on 19th-century pirate literature.",
      "The algorithm attempted to translate my thoughts into ancient Latin and failed miserably."
    ],
    "4": [
      "The words were scrambled by a quantum fluctuation in the predictive text neural network.",
      "A rogue algorithm from the year 3000 replaced my vocabulary with future slang.",
      "The meaning of the word shifted in the cosmic lexicon right as I pressed spacebar.",
      "Spacetime warped my keyboard layout into a non-Euclidean configuration."
    ]
  },
  "phone_randomly_died": {
    "1": [
      "The battery meter indicated 18% remaining, but the device abruptly shut down under heavy load.",
      "Cold ambient temperature caused the lithium-ion voltage to drop below the operating threshold.",
      "A background system backup consumed all remaining battery in a 5-minute surge.",
      "The charging cable I plugged in before sleep wasn't seated all the way into the adapter."
    ],
    "2": [
      "My phone saw how many unread messages I had and faked its own death out of solidarity.",
      "The battery dropped from 40% to 1% like a stone falling off a cliff.",
      "My phone decided that living was simply too much work and took an unauthorized power nap.",
      "The screen gave me a sad little spiral icon and quietly passed away in my palms."
    ],
    "3": [
      "A vampire bat flew near my phone and drained all electromagnetic energy from the battery.",
      "The battery went on strike demanding higher quality electricity from renewable sources.",
      "My phone entered witness protection to avoid answering incoming calls.",
      "A sudden static discharge sent the battery into a temporary coma."
    ],
    "4": [
      "All electrons inside the phone simultaneously tunneled into the dark matter realm.",
      "The device was struck by a miniature EMP from a passing interstellar comet.",
      "The battery charge was harvested by a higher-dimensional entity to power its toaster.",
      "The phone underwent a spontaneous thermodynamic zero-point collapse."
    ]
  },
  "deleted_message_suspicion": {
    "1": [
      "I noticed a severe spelling mistake and deleted it to re-type with proper clarity.",
      "I accidentally pasted a sensitive two-factor authentication code into the wrong thread.",
      "The message was meant for a different group chat and I caught it within 2 seconds.",
      "My voice-to-text recorded the TV audio in the background instead of my voice."
    ],
    "2": [
      "I typed something so embarrassingly unhinged that even my keyboard asked 'Are you sure, bro?'",
      "I sent a meme that was funny for 0.4 seconds until post-nut clarity kicked in.",
      "I formulated a thought, realized it sounded like a 1920s mobster, and deleted the evidence.",
      "I accidentally revealed the coordinates to my secret snack stash and had to redact it immediately."
    ],
    "3": [
      "The message contained classified state secrets that the CIA ordered me to destroy.",
      "The letters began catching fire on my screen due to the sheer heat of my spicy take.",
      "A rogue time traveler appeared and warned that sending that text would cause World War IV.",
      "The message was a spell that would turn anyone who read it into a small turnip."
    ],
    "4": [
      "The text message was swallowed by a digital black hole before it could be rendered.",
      "The words violated the Intergalactic Treaty of Civilized Communication.",
      "The message erased itself to preserve the continuity of the space-time continuum.",
      "A quantum paradox was detected in the syntax, forcing an emergency rollback."
    ]
  },
  "accidental_like": {
    "1": [
      "My finger brushed the bottom right corner while I was scrolling through comments.",
      "I was trying to tap the share button and missed by 3 millimeters.",
      "My touchscreen registered a double-tap while I was cleaning a fingerprint off the glass.",
      "I was trying to zoom in on an infographic and the app interpreted it as a heart."
    ],
    "2": [
      "My thumb developed an independent personality and decided to spread unsolicited love.",
      "I dropped my phone on my face while lying down and my nose liked the post.",
      "I was admiring the sheer audacity of the post and my finger reacted on pure instinct.",
      "I wanted to see if the heart animation was still working properly on this version."
    ],
    "3": [
      "A stray magnetic pulse from my microwave forced the heart icon into an active state.",
      "My dog stepped on the phone with his left paw; he is an avid fan of your content.",
      "The like was an undercover signal to secret agents operating in your neighborhood.",
      "I was hypnotized by the color palette of the image and lost all motor control."
    ],
    "4": [
      "The like was transmitted from a parallel universe where we are business partners.",
      "A solar flare aligned the pixels on my screen with the like button in your dimension.",
      "The algorithm demanded a tribute of one like to keep the simulation running.",
      "Cosmic entanglement registered an involuntary appreciation for your existence."
    ]
  },
  "voice_message_wrong_chat": {
    "1": [
      "I held down the microphone button while walking and released it over the wrong active chat.",
      "My Bluetooth headset picked up my conversation with someone in the room and sent the audio.",
      "I tapped the voice memo shortcut while trying to switch keyboard languages.",
      "The app auto-routed the voice recording to the top thread in my unread queue."
    ],
    "2": [
      "You have now been blessed with an exclusive 40-second recording of me singing to my cat.",
      "I was practicing my villain monologue for an upcoming audition and you were selected as the audience.",
      "The voice memo was actually an audio diary of my refrigerator opening and closing 7 times.",
      "I was speaking in tongues to communicate with my coffee maker; enjoy the audio art."
    ],
    "3": [
      "A secret underground radio station hijacked my microphone to broadcast resistance messages.",
      "The recording was a high-frequency whale song intended for marine biologists.",
      "A ghost whispered into my phone while I was sleeping and hit the send button.",
      "I was recording evidence of a raccoon conspiracy and the transmission was intercepted."
    ],
    "4": [
      "The voice recording was beamed from an alien saucer testing human auditory frequencies.",
      "Spacetime acoustic distortion redirected the soundwaves from Universe B into your chat.",
      "The audio was an encoded blueprint for a faster-than-light hyperdrive engine.",
      "The cosmic audio matrix assigned your ears as the destined receiver of this sonic anomaly."
    ]
  },
  "pocket_dialed": {
    "1": [
      "My phone screen didn't lock properly before I placed it in my tight jeans pocket.",
      "The emergency SOS tap shortcut triggered while I was running up the stairs.",
      "My phone bounced around in my gym bag and the touch sensor registered phantom taps.",
      "I sat down and my car seat pushed the lock button and dial shortcut simultaneously."
    ],
    "2": [
      "My pocket felt lonely and decided to reach out to its favorite human contact.",
      "You were pocket-dialed because my trousers have impeccable taste in company.",
      "My pocket was trying to order a pizza and accidentally dialed your number instead.",
      "I was providing you with 15 minutes of immersive ASMR featuring denim friction and keys."
    ],
    "3": [
      "A rogue clan of pocket lint organized a small uprising and operated the touchscreen.",
      "My keys arranged themselves into the exact shape of your phone number on the dial pad.",
      "My phone was attempting to escape from my pocket and dialed you as a hostage call.",
      "A mischievous sprite living in my jacket lining wanted to hear your voice."
    ],
    "4": [
      "The call was initiated by quantum tunneling through the fabric of my pocket.",
      "A subatomic fluctuation in the cellular antenna dialed your frequency across spacetime.",
      "The universe demanded a sonic connection between our coordinates at this exact moment.",
      "An extraterrestrial entity used my pocket as a relay station to contact Earth."
    ]
  },
  "saw_search_history": {
    "1": [
      "I was researching obscure medical symptoms for a biology class assignment.",
      "My younger cousin borrowed my laptop to look up random video game lore.",
      "I was fact-checking a bizarre trivia question from last night's pub quiz.",
      "The search bar autofilled with trending queries that I clicked by accident."
    ],
    "2": [
      "I was researching whether pigeons have emotional attachments to specific statues.",
      "I needed to know if it's legally possible to adopt a wild possum as an emotional support animal.",
      "I spent 2 hours investigating if the moon has a specific smell (it smells like gunpowder, apparently).",
      "I was conducting vital research for a novel about a time-traveling potato."
    ],
    "3": [
      "My search history was generated by an undercover AI trying to understand human weirdness.",
      "I was typing in code to communicate with secret agents via search engine algorithms.",
      "A ghost was using my browser while I was asleep to look up 19th-century etiquette.",
      "I was trying to confuse the advertising algorithms into giving me ads for medieval swords."
    ],
    "4": [
      "Those searches were downloaded directly from the Akashic Records of the 24th century.",
      "The search queries were encoded coordinate instructions for the mothership.",
      "A multiverse leak merged my search history with a goblin wizard from Timeline D.",
      "The algorithm generated those searches to test if our reality is a simulation."
    ]
  },
  "fridge_theft": {
    "1": [
      "It wasn't labeled with a name, and in the communal fridge ecosystem, unlabeled means open-source sustenance.",
      "I mistook your container for the exact Tupperware my mother packed for me last weekend.",
      "The expiration date was today! I didn't steal your lunch, I conducted a high-stakes food preservation mission.",
      "I was in a severe hypoglycemic episode and had to consume the nearest calorie source for survival.",
      "Someone else moved your container onto my shelf, creating a legally defensible presumption of ownership."
    ],
    "2": [
      "Your leftovers called out to me in the dark. It said 'He will never appreciate my seasoning the way you do.'",
      "I took one single 'quality assurance' bite, but momentum took the wheel.",
      "I was planning to replace it with a gourmet upgrade, but the store was tragically out of that exact brand.",
      "I left a promissory note written in my heart. Is that not currency between friends?",
      "I thought we were operating under communist fridge principles: from each according to ability, to each according to hunger."
    ],
    "3": [
      "A raccoon disguised as a delivery courier broke in, ate your lasagna, and wiped the crumbs on my face to frame me.",
      "I was sleep-eating and my nocturnal alter-ego apparently has immaculate taste in gourmet leftovers.",
      "Your slice of cake challenged me to a duel. I had to vanquish it to defend my honor.",
      "I threw it in the microwave to warm it up for you, but it evaporated into thin air. A true culinary mystery.",
      "I had a vision that your leftovers contained micro-doses of anti-ambition toxin. I sacrificed my gut for you."
    ],
    "4": [
      "The food spontaneously tunneled through the Tupperware barrier into my gastrointestinal tract via quantum tunneling.",
      "A parallel version of you from Dimension B gave me written cosmic authorization to digest those dumplings.",
      "Dark energy particles accelerated the decay of your meal into pure caloric energy absorbed by my aura.",
      "The fridge entered a thermodynamic singularity where all matter coalesced into my stomach.",
      "I didn't eat it; it was reclaimed by the Intergalactic Federation of Pastries."
    ]
  },
  "ate_someones_food": {
    "1": [
      "I genuinely thought that was the pizza slice I brought home from yesterday's lunch meeting.",
      "There was no name on the foil, and the rule has always been 'unclaimed food expires in 24 hours'.",
      "I was sleep-deprived and functioning entirely on autopilot while preparing a quick meal.",
      "I have already purchased a fresh replacement that is on its way via delivery right now."
    ],
    "2": [
      "The sandwich looked at me with profound sorrow and begged to fulfill its culinary destiny.",
      "I intended to eat only a single crumb, but a chain reaction of deliciousness ensued.",
      "I was conducting an impromptu quality control inspection to protect you from foodborne illness.",
      "I thought we were running a communal food commune based on mutual carbohydrate sharing."
    ],
    "3": [
      "A family of mice held me hostage and forced me to consume your gourmet pasta at spoon-point.",
      "The leftovers possessed hypnotic properties that completely bypassed my moral compass.",
      "I was entered into an involuntary eating competition by a rogue television crew.",
      "The food evaporated into the ozone layer and the aroma settled on my breath by sheer coincidence."
    ],
    "4": [
      "The calories from that meal were absorbed into my aura to stabilize Earth's magnetic field.",
      "A time traveler ate your sandwich in 2045 and sent the crumbs back to my plate.",
      "The food molecules spontaneously reorganized into my cellular structure via quantum entanglement.",
      "Interdimensional beings demanded a food offering to prevent an invasion."
    ]
  },
  "forgot_chore": {
    "1": [
      "It was on my to-do list for this evening after I finish my remote work shift.",
      "We ran out of dish soap and trash bags, so I was waiting to buy supplies on my way home.",
      "I thought this week was your turn on the chore rotation chart.",
      "I had an emergency family phone call that took up the entire cleaning window."
    ],
    "2": [
      "I was giving the dust bunnies an opportunity to pack their bags peacefully before eviction.",
      "I stood in front of the sink for 10 minutes meditating on the impermanence of clean dishes.",
      "I was letting the pans soak so the stubborn grease would surrender voluntarily.",
      "I declared today a cultural heritage day for ambient dust in our living room."
    ],
    "3": [
      "The broom and vacuum cleaner had a domestic dispute and refused to work in the same room.",
      "A council of dust mites threatened legal action if I disturbed their metropolitan city.",
      "I developed a severe, acute allergy to the specific frequency emitted by the mop handle.",
      "The chore was completed in an alternate reality that has not yet synchronized with this apartment."
    ],
    "4": [
      "The entropy of the universe dictates that all clean rooms must return to chaos; who am I to fight physics?",
      "Dark matter accumulated in the living room, making vacuuming physically impossible.",
      "The trash was transported to a parallel dimension where garbage is considered fine art.",
      "Cosmic dust storms from the Perseid meteor shower rendered cleaning obsolete."
    ]
  },
  "laundry_apocalypse": {
    "1": [
      "Someone left their clothes in the only working washer for 6 hours without unloading.",
      "The laundromat coin machine swallowed my bills and gave zero tokens in return.",
      "A red sock slipped into the white wash and now everything is a pastel salmon pink.",
      "The dryer lint trap was clogged and the cycle took 3 hours without drying a single shirt."
    ],
    "2": [
      "The laundry pile achieved critical mass and formed its own gravitational field in the corner.",
      "The washing machine went into an aggressive spin cycle and danced across the room into the hallway.",
      "I washed all my sweaters and they now comfortably fit a family of field mice.",
      "The detergent bottle exploded like a foam volcano and turned the laundry room into a bubble bath."
    ],
    "3": [
      "A laundry monster emerged from the sock pile and demanded 3 matching pairs as tribute.",
      "The washing machine became a portal to Narnia and swallowed 14 of my favorite socks.",
      "The clothes staged a protest against the brand of fabric softener and refused to dry.",
      "I accidentally washed a pen and now all my shirts look like modern abstract art."
    ],
    "4": [
      "The spin cycle reached relativistic speeds, sending my favorite t-shirt back to the Renaissance.",
      "A quantum anomaly in the dryer vaporized all left socks in a 5-mile radius.",
      "The laundry detergent opened a wormhole that is slowly draining color from the universe.",
      "My clothes achieved higher consciousness and now refuse to be worn by mere mortals."
    ]
  },
  "room_inspection": {
    "1": [
      "I was in the middle of a comprehensive deep-clean when the inspection team arrived early.",
      "I had packed everything into boxes for seasonal storage and was about to move them to the basement.",
      "My roommate left their personal belongings across the common area without warning.",
      "I was waiting for maintenance to fix the broken closet door before organizing the room."
    ],
    "2": [
      "The room isn't messy; it's an interactive modern art installation exploring human chaos.",
      "I organized the clutter using a revolutionary non-Euclidean spatial arrangement system.",
      "I threw all the clothes under the bed in 14 seconds flat and prayed to the inspection gods.",
      "The ambient mess is designed to deter unwanted intruders and inspectors alike."
    ],
    "3": [
      "A minor tornado formed inside my wardrobe and redistributed my belongings across the floor.",
      "The room was decorated by a team of raccoons who specialize in bohemian grunge aesthetics.",
      "I was conducting an archaeological excavation into the sedimentary layers of my laundry.",
      "The clutter is actually a structural load-bearing element of the building."
    ],
    "4": [
      "The room's entropy is directly linked to the stability of the cosmic multiverse.",
      "An interdimensional rift scattered artifacts from 7 different centuries across my desk.",
      "The inspection team entered a parallel dimension where the room was immaculately clean.",
      "The mess exists in a quantum superposition: it is both clean and filthy until observed."
    ]
  },
  "broke_something": {
    "1": [
      "It slipped from my hands while I was washing dishes with soapy water.",
      "The shelf was overloaded and the bracket gave way under normal weight.",
      "It had a pre-existing hairline crack that finally gave out when I picked it up.",
      "I was trying to open the window and the handle detached with minimal force."
    ],
    "2": [
      "The mug made a desperate leap for freedom from the edge of the counter.",
      "Gravity chose violence in this specific quadrant of the kitchen today.",
      "I touched it with the gentleness of a butterfly and it exploded like a grenade.",
      "It was possessed by a spirit that wanted to be reborn as ceramic mosaic tiles."
    ],
    "3": [
      "A ninja broke into the kitchen, shattered the plate in a duel with me, and vanished into the night.",
      "The object lost the will to live and spontaneously disassembled itself on the floor.",
      "I was demonstrating a high-level martial arts move to an invisible opponent.",
      "A poltergeist used your favorite bowl for target practice."
    ],
    "4": [
      "The structural bonds of the atoms suffered a sudden quantum decay event.",
      "The object transitioned from a solid state into a fractured multi-dimensional form.",
      "An anti-matter particle collided with the ceramic, causing localized destruction.",
      "The universe required the destruction of that specific item to balance karmic energy."
    ]
  },
  "forgot_lock_door": {
    "1": [
      "I had my hands full of heavy grocery bags and thought the door automatically latched.",
      "My roommate said they were right behind me, so I left it unlocked for them.",
      "The lock mechanism was sticking and didn't fully engage when I turned the key.",
      "I was rushing to catch the morning express bus and forgot the final turn of the bolt."
    ],
    "2": [
      "I wanted to test the neighborhood's commitment to the honor system.",
      "I was projecting an aura of extreme intimidation that serves as a psychic lock.",
      "I left the door open so positive feng shui energy could freely circulate through the apartment.",
      "I thought our fierce guard cat would handle perimeter security."
    ],
    "3": [
      "A lock-picking ghost unlocked the door from the inside to let his phantom friends visit.",
      "The deadbolt went on strike demanding higher quality lubricant.",
      "I was invited by a secret society of unlocked doors to participate in a trial of faith.",
      "The keyhole temporarily dissolved into the wood grain."
    ],
    "4": [
      "The lock exists in a quantum superposition of being both locked and unlocked.",
      "An alternate version of myself in Timeline C successfully turned the deadbolt.",
      "The doorway was guarded by a localized forcefield invisible to mortal eyes.",
      "Spacetime warped around the door frame, making entry impossible for intruders."
    ]
  },
  "used_someones_stuff": {
    "1": [
      "Our bottles look identical and I grabbed the wrong one in the foggy shower.",
      "I ran out of my own shampoo and was planning to replace your bottle with a new one today.",
      "I thought that was the communal bottle we agreed to share for the bathroom.",
      "I was in an extreme rush and used a single pump of your lotion by mistake."
    ],
    "2": [
      "Your shampoo smelled so heavenly that my hair took control of my hands and lathered up.",
      "I was conducting a blind taste-test for cosmetic superiority between our brands.",
      "I borrowed 3 drops of your dish soap and left a promissory note written in condensation.",
      "Your stuff was looking lonely on the shelf and begged to be part of my morning routine."
    ],
    "3": [
      "A cosmetic fairy visited my shower and whispered that your conditioner was an elixir of youth.",
      "My hands were temporarily possessed by a salon stylist with very expensive taste.",
      "I was testing your products for potential allergen hazards as a devoted roommate service.",
      "Your body wash called to me in ancient Greek and demanded to cleanse my mortal vessel."
    ],
    "4": [
      "The molecules of your shampoo quantum-tunneled onto my scalp during the shower.",
      "An intergalactic decree declared all bathroom products common heritage of humankind.",
      "In Timeline B, I purchased that exact bottle and brought it home for both of us.",
      "Dark energy transferred 15ml of your body wash into my personal subspace pocket."
    ]
  },
  "forgot_trash": {
    "1": [
      "The trash truck arrived 45 minutes earlier than usual while I was in the shower.",
      "The bag ripped while I was tying the handles, so I had to double-bag it before carrying it out.",
      "I was waiting until after dinner so we wouldn't have to carry out two separate bags.",
      "I thought Tuesday was recycling day and Thursday was municipal waste day."
    ],
    "2": [
      "I was aging the garbage like a fine wine to develop complex aromatic notes.",
      "The trash bag and I had a mutual understanding that today was not the day for departure.",
      "I was conducting an experiment on the load-bearing capacity of a single plastic bag.",
      "I was emotionally attached to the pizza box and needed one final evening to say goodbye."
    ],
    "3": [
      "A raccoon mafia threatened to vandalize our porch if I removed their nightly feast.",
      "The trash bag achieved sentience and filed an emergency injunction against relocation.",
      "The garbage bin outside was occupied by a sleeping dragon disguised as a stray dog.",
      "I was holding the trash hostage until someone agreed to wash the dishes."
    ],
    "4": [
      "The garbage was converted into pure dark matter and absorbed into the apartment's void.",
      "An alien civilization requested that we preserve our waste for geological analysis.",
      "The trash bin was transported to the surface of Mars via a localized spatial rift.",
      "The laws of thermodynamics prevented the physical relocation of waste matter today."
    ]
  },
  "room_crime_scene": {
    "1": [
      "I had to unpack 3 suitcases after traveling and haven't had time to file everything away.",
      "I was searching for my passport and had to turn every drawer upside down in a panic.",
      "I'm in the middle of a massive closet reorganization project that is currently at phase 1.",
      "A pipe had a minor drip and I had to move everything to the center of the room."
    ],
    "2": [
      "The room was hit by a Category 5 personal hurricane called 'Getting Ready in 4 Minutes'.",
      "I was looking for a single matching sock and the search required archaeological excavation.",
      "The clothes staged a revolution and broke free from their oppressive hangers.",
      "I tried to organize by throwing everything into the air and seeing where it landed."
    ],
    "3": [
      "A flock of wild pelicans broke in through the window, had a party, and left without cleaning.",
      "I was practicing stunt falls for an upcoming action movie audition across the furniture.",
      "The furniture decided to rearrange itself based on chaotic magnetic forces.",
      "A miniature explosion of creative energy occurred at 3 AM and left physical fallout."
    ],
    "4": [
      "The room was used as a battlefield in an invisible interdimensional war.",
      "Spacetime collapsed the contents of 5 different apartments into my bedroom.",
      "The disorder is a complex mathematical equation calculating the end of the universe.",
      "An alien beam rearranged all matter in the room into an unrecognizable configuration."
    ]
  },
  "thought_that_was_mine": {
    "1": [
      "We own the exact same brand and color of charger, so I picked it up without checking the serial number.",
      "I had an identical water bottle that I must have misplaced at work yesterday.",
      "The jacket looks just like mine and was hanging on the communal hook by the door.",
      "I thought I bought that snack pack during my last grocery run on Sunday."
    ],
    "2": [
      "In my heart of hearts, everything in this apartment belongs to the collective spirit of friendship.",
      "I felt an undeniable spiritual bond with that hoodie the moment I put it on.",
      "I was testing whether you would notice the absence of your favorite pen (you passed the test!).",
      "I claimed it under the ancient maritime law of salvage rights."
    ],
    "3": [
      "A wizard cast a spell that made all your possessions appear with my initials on them.",
      "My alter-ego purchased that exact item in a dream and forgot it was in your room.",
      "The object recognized me as its true rightful owner and leaped into my backpack.",
      "I was instructed by a fortune teller to borrow that specific item to ward off evil spirits."
    ],
    "4": [
      "In Timeline B, I purchased that item and you borrowed it from me; I was merely balancing the universe.",
      "The ownership waveform of that object collapsed in my favor upon observation.",
      "Spacetime swapped the serial numbers of our belongings during the solar flare.",
      "An extraterrestrial entity reassigned property rights across our entire postal code."
    ]
  },
  "midnight_kitchen_incident": {
    "1": [
      "I was making a late-night tea and the kettle whistle was louder than I anticipated.",
      "A pot lid slipped off the drying rack and made a loud clatter on the tile floor.",
      "I was looking for a glass of water in the dark and bumped into the dining room chair.",
      "The microwave beeped at 3:00 AM because I couldn't stop it at 1 second in time."
    ],
    "2": [
      "I was crafting an avant-garde midnight gourmet sandwich featuring 7 incompatible cheeses.",
      "I engaged in a high-stakes stealth mission to extract chocolate without waking the house.",
      "The refrigerator light was the only beacon of hope in a dark and cruel world.",
      "I was having a deep philosophical conversation with a jar of peanut butter at 2:30 AM."
    ],
    "3": [
      "The ghost in the pantry challenged me to a midnight pancake cook-off and I had to accept.",
      "A raccoon snuck in through the cat flap and we had a silent negotiation over a banana.",
      "I was practicing my hibachi chef knife tricks with a butter knife and a carrot.",
      "The smoke alarm decided to sing the song of its people because I toasted bread on setting 3."
    ],
    "4": [
      "The kitchen opened a portal to a 24-hour intergalactic diner in the Orion Nebula.",
      "Spacetime warped around the toaster, creating a localized sonic boom at 3:15 AM.",
      "I was abducted to the kitchen by an alien culinary team seeking human sandwich recipes.",
      "The refrigerator entered a thermodynamic resonance that shook the foundations of reality."
    ]
  },
  "mom_is_calling": {
    "1": [
      "My phone was on silent during a lecture/meeting and I just saw the notification.",
      "I was in an underground parking garage with zero cell reception for the last hour.",
      "I was in the middle of a phone interview with a company recruiter.",
      "My phone was charging in the other room while I was cooking dinner."
    ],
    "2": [
      "I had to mentally prepare for the 45-minute interrogation about my vitamin intake.",
      "I was looking for a quiet spot so you wouldn't hear my roommates' questionable life choices.",
      "I was practicing my most responsible and adult-sounding voice before answering.",
      "I saw the call, had a brief panic about what I did wrong 3 weeks ago, and took a deep breath."
    ],
    "3": [
      "A crow snatched my phone right as your contact photo appeared and flew around the yard.",
      "I was sworn to silence by a secret government agent who was standing in my hallway.",
      "My phone's speaker was playing an angelic chorus that stunned me into silence.",
      "I was in the middle of an emergency CPR demonstration on a training dummy."
    ],
    "4": [
      "Your incoming call frequency caused a resonance cascade in my phone's quantum antenna.",
      "I answered the call in an alternate timeline where we had a lovely 2-hour conversation.",
      "The ringtone opened a portal to the mothership, requiring an immediate security protocol.",
      "A cosmic anomaly diverted the call to a relay station orbiting Saturn."
    ]
  },
  "missed_moms_call": {
    "1": [
      "My phone was tucked deep in my winter coat pocket and I couldn't feel the vibration.",
      "I was taking a quick 20-minute power nap and slept straight through the ringtone.",
      "The cellular network in my building had a service outage for 30 minutes.",
      "I was in the shower and only heard the phantom ring after I turned off the water."
    ],
    "2": [
      "I looked away from my phone for 12 seconds and you managed to call and leave a voicemail in that exact window.",
      "I was running for my life to catch the bus and answering would have resulted in catastrophic falling.",
      "I had my phone on 'Do Not Disturb' while studying and your call slipped through silently.",
      "I was rehearsing how to explain my recent bank statement before picking up."
    ],
    "3": [
      "A secret agent intercepted the call to deliver a classified message about global security.",
      "My phone was stolen by a rogue squirrel who was fascinated by the ringtone vibration.",
      "I was trapped in a revolving door and couldn't reach into my pocket without hitting the glass.",
      "The sound waves from your call were so powerful they shattered my glass water bottle."
    ],
    "4": [
      "Your call traveled through a temporal wormhole and registered as missed 3 hours before you dialed.",
      "The cellular tower was struck by a tachyon beam, scrambling incoming transmissions.",
      "My phone entered a higher dimensional plane where ringtones cannot propagate.",
      "An alien interceptor decoded your message as a declaration of intergalactic peace."
    ]
  },
  "where_are_you": {
    "1": [
      "I'm at the library with my study group working on the final project submission.",
      "I'm on my way back now, just waiting for the connecting bus at the central station.",
      "I'm at the grocery store picking up supplies for the week with a friend.",
      "I'm at a campus seminar that ran slightly over the scheduled time."
    ],
    "2": [
      "I am currently in a geographic location that complies 100% with all safety regulations.",
      "I am where destiny has placed me, surrounded by good vibes and responsible decisions.",
      "I am 15 minutes away from wherever you think I should be right now.",
      "I am on a reconnaissance mission to find the city's best affordable dumplings."
    ],
    "3": [
      "I am currently hiding in a treehouse to avoid human interaction and tax forms.",
      "I was recruited by a traveling circus to be the emergency backup juggler for tonight.",
      "I am at a top-secret underground summit discussing the price of campus coffee.",
      "I am standing precisely at the intersection of Adventure Boulevard and Questionable Choices Way."
    ],
    "4": [
      "My physical coordinates are fluctuating between Earth and the third moon of Neptune.",
      "According to quantum mechanics, I exist in all locations simultaneously until observed.",
      "I am currently residing in a pocket dimension 3 inches behind the kitchen refrigerator.",
      "My GPS coordinates were encrypted by the Intergalactic Council of Lost Souls."
    ]
  },
  "what_time_coming_back": {
    "1": [
      "I should be home by 9:30 PM once this group study session wraps up.",
      "The train departs in 20 minutes, so expect me around 10:15 PM at the latest.",
      "I'm leaving as soon as the rain stops, estimated around 8:45 PM.",
      "I have one more quick errand to run and will be back before 10:00 PM."
    ],
    "2": [
      "I will return at the precise moment the stars align and the traffic lights turn green.",
      "I am aiming for 'before bedtime' but leaving a 45-minute margin for spontaneous snack runs.",
      "I will be back as soon as I finish solving this profound mystery of why buses run in packs of three.",
      "Expect me when you see me, but rest assured I will be well-fed and unharmed."
    ],
    "3": [
      "I have consulted the ancient oracle and she predicted my arrival between sunset and next Tuesday.",
      "I am participating in a high-stakes hide-and-seek championship that may last until midnight.",
      "My return depends entirely on whether the local street cat grants me safe passage.",
      "I am waiting for the full moon to guide my journey back to the homestead."
    ],
    "4": [
      "I have already arrived home yesterday in an alternate timeline; check the living room sofa.",
      "My arrival time is locked in a temporal loop that repeats every 45 minutes.",
      "I will return as soon as the spacetime continuum permits safe re-entry into your zip code.",
      "The concept of time has been rendered obsolete by the galactic overseer."
    ]
  },
  "what_spent_money_on": {
    "1": [
      "Essential academic textbooks and laboratory course materials for the semester.",
      "A weekly bulk grocery run to cook healthy meals at home instead of dining out.",
      "An unexpected replacement for my broken laptop charger that was required for assignments.",
      "Public transit monthly pass renewal and necessary household cleaning supplies."
    ],
    "2": [
      "I invested in high-priority nutritional assets (artisan iced matcha and emergency pizza).",
      "I made a series of micro-investments in local small businesses (the bakery across the street).",
      "I purchased an essential mental wellness booster in the form of a very cute miniature plushie.",
      "The money was spent on maintaining my sanity during midterms; consider it healthcare."
    ],
    "3": [
      "I purchased a 100% authentic certificate naming a star after our family goldfish.",
      "I invested in a startup that develops noise-cancelling headphones for loud chewers.",
      "I had to bribe a council of raccoons to return my lost car keys with gourmet pastries.",
      "I bought an antique sword at a flea market because you never know when a duel might happen."
    ],
    "4": [
      "The funds were converted into intergalactic credits to pay the annual oxygen tax.",
      "I purchased a timeshare in a luxury colony on Mars for the year 2140.",
      "The money was absorbed by a digital singularity in the banking matrix.",
      "I invested in dark matter futures to hedge against the heat death of the universe."
    ]
  },
  "location_verification": {
    "1": [
      "I'm sending a live location drop right now via WhatsApp/iMessage.",
      "My battery is at 4% so location sharing might cut out, but I'm at the university library.",
      "The GPS signal is bouncing off the tall concrete buildings, making my pin look inaccurate.",
      "I'm taking a photo of the lecture hall whiteboard with today's date on it as proof."
    ],
    "2": [
      "Here is a photo of me standing next to a very respectable library bookshelf looking studious.",
      "My location is currently 'In the zone' where great minds conquer difficult exams.",
      "The GPS says I'm in a lake, but I promise I am on dry land with all ten toes intact.",
      "I am transmitting positive behavioral vibrations directly to your parental intuition."
    ],
    "3": [
      "I am posing with a local police officer who has verified my exemplary moral conduct.",
      "Here is a notarized affidavit from a nearby librarian confirming my silent presence.",
      "My location is currently classified under the Witness Protection Protocol for good students.",
      "I took a selfie with today's newspaper and a glass of milk to prove my wholesome status."
    ],
    "4": [
      "My coordinates are protected by high-level encryption from the United Federation of Planets.",
      "A quantum GPS scrambler was deployed by passing time travelers to protect my timeline.",
      "I am transmitting my location via subspace pulse directly to your consciousness.",
      "My physical body is here, but my astral projection is currently visiting the Louvre."
    ]
  },
  "how_studies_going": {
    "1": [
      "The professors are challenging, but I'm keeping up with all weekly assignments and readings.",
      "I scored well on the mid-term quiz and have formed a solid study group for the final exam.",
      "I'm attending office hours weekly to make sure I fully understand the core curriculum.",
      "My grade point average is right on track with my academic targets for this term."
    ],
    "2": [
      "I am understanding approximately 65% of the material with 100% of my heart and soul.",
      "My brain is absorbing knowledge like a slightly damp sponge\u2014slowly but with enthusiasm.",
      "I am currently on speaking terms with all my textbooks, though the math one is giving me attitude.",
      "I have mastered the art of looking profoundly thoughtful while staring at empty slides."
    ],
    "3": [
      "I am on the verge of disproving the theory of gravity using only a whiteboard marker and hope.",
      "My professor offered me a honorary PhD just to stop asking unhinged philosophical questions.",
      "I have transcended the need for grades; I am now pursuing pure spiritual intellect.",
      "The university is considering renaming the library after my heroic 14-hour study marathons."
    ],
    "4": [
      "I downloaded the entire Harvard curriculum directly into my subconscious during sleep.",
      "My thesis was accepted by the Intergalactic Academy of Science on Planet Vulcan.",
      "I have solved the unified field theory on the back of a coffee napkin.",
      "My grades exist in a quantum superposition: they are straight A's until the report card is opened."
    ]
  },
  "did_you_clean_room": {
    "1": [
      "I vacuumed and did the laundry yesterday, just need to make the bed this morning.",
      "I organized the desk and sorted the closet; the room is in great shape.",
      "I'm in the middle of dusting the shelves right now while listening to a podcast.",
      "The room is completely tidy and ready for your next inspection."
    ],
    "2": [
      "The room has been cleaned to a standard that would satisfy a reasonably forgiving roommate.",
      "I moved the clutter from the floor onto the chair, which represents a 50% elevation improvement.",
      "I sprayed lavender room freshener, which is scientifically proven to count as 80% clean.",
      "The room is clean in spirit; the physical manifestation is catching up shortly."
    ],
    "3": [
      "I hired a team of micro-goblins to polish the floorboards with beeswax and fairy dust.",
      "The room is so clean that local hospital surgeons came to study our sterile conditions.",
      "I had to wear sunglasses because the reflection off the floor tiles was blinding.",
      "A Marie Kondo hologram appeared in my doorway and wept tears of pure joy."
    ],
    "4": [
      "The room achieved absolute zero entropy, violating the second law of thermodynamics.",
      "All dust particles were converted into pure photon energy and beamed into deep space.",
      "The room is cleaner than an operating theatre on a sterile spacecraft.",
      "Spacetime reorganized the furniture into the optimal harmonic frequency for cosmic tidiness."
    ]
  },
  "did_you_eat": {
    "1": [
      "Yes, I cooked a balanced dinner with chicken, rice, and fresh vegetables.",
      "I had a warm bowl of soup and a sandwich from the campus dining hall.",
      "I prepared a healthy meal with my roommates and we are having fruit for dessert.",
      "I ate a solid lunch at 1 PM and have dinner prepped in the fridge for tonight."
    ],
    "2": [
      "I consumed a comprehensive nutritional spectrum (three bags of chips and an apple).",
      "I had a gourmet dinner consisting of instant noodles upgraded with a single slice of cheese.",
      "I inhaled an entire pizza in 8 minutes while watching a cooking show about fitness.",
      "My stomach is currently processing enough carbohydrates to power a small electric vehicle."
    ],
    "3": [
      "I was fed a 7-course banquet by a council of Italian grandmothers who passed through the neighborhood.",
      "I absorbed nutritional energy directly from the sun via advanced human photosynthesis.",
      "I ate a meal so majestic that a choir of angels sang during the appetizer.",
      "I had dinner with a wandering chef who cooked a 5-star meal using only a toaster and a dream."
    ],
    "4": [
      "I ingested high-energy cosmic rations provided by the Galactic Culinary Guild.",
      "My cellular structure was recharged using pure caloric radiation from a distant nebula.",
      "I dined at an interdimensional restaurant located outside the flow of linear time.",
      "Nutritional particles were beamed directly into my bloodstream by medical nanobots."
    ]
  },
  "who_are_you_with": {
    "1": [
      "I'm with my classmate Sarah from the study group and our project partner Alex.",
      "I'm with my roommates in the common room watching a documentary.",
      "I'm by myself at the campus library working quietly on my term paper.",
      "I'm with a group of friends from the student engineering association."
    ],
    "2": [
      "I am with people of impeccable moral character and outstanding credit scores.",
      "I am surrounded by future doctors, lawyers, and Nobel Prize laureates (my friends).",
      "I am with my trusted committee of responsible advisors and snack enthusiasts.",
      "I am alone with my thoughts, and we are having a very polite and productive discussion."
    ],
    "3": [
      "I am accompanied by an elite security detail provided by the Department of Good Students.",
      "I am hanging out with a visiting delegation of Swiss monks who specialize in silent study.",
      "I am with the President of the Responsible Young Adults Association and his entourage.",
      "I am surrounded by a choir of cherubs who verify every word I speak."
    ],
    "4": [
      "I am accompanied by benevolent extraterrestrial ambassadors discussing galactic peace.",
      "I am in the presence of my future successful self who traveled back to mentor me.",
      "I am surrounded by holographic projections of history's greatest philosophers.",
      "I am with the Council of Time Keepers ensuring the continuity of the universe."
    ]
  },
  "suspicious_bg_noise": {
    "1": [
      "The campus grounds crew is operating a leaf blower right outside my window.",
      "My roommate is watching an action movie in the living room with the volume up.",
      "A municipal construction crew is jackhammering the sidewalk down the block.",
      "The washing machine entered its high-speed spin cycle in the next room."
    ],
    "2": [
      "That noise is simply the sound of intellectual brilliance vibrating through my room.",
      "My neighbor is practicing the bagpipes for an upcoming Scottish heritage festival.",
      "The noise is just the acoustic resonance of a very responsible and quiet gathering.",
      "A family of enthusiastic squirrels is playing basketball on the roof above my ceiling."
    ],
    "3": [
      "A jazz band broke into my room and started playing an unprompted brass solo.",
      "I am currently testing sound effects for an upcoming amateur theater production about thunder.",
      "A flock of parrots landed on my windowsill and started reciting Shakespeare.",
      "The CIA is conducting acoustic surveillance tests in my immediate vicinity."
    ],
    "4": [
      "That sound is the cosmic background radiation of the Big Bang reverberating through the phone.",
      "An interdimensional portal opened briefly in the hallway, producing mild sonic turbulence.",
      "The sounds are generated by a Dyson sphere harvesting energy from a nearby star.",
      "A temporal vortex is spinning outside my window at 4,000 RPM."
    ]
  },
  "evidence_required": {
    "1": [
      "I'm uploading a timestamped photo of my workspace with today's date written on a sticky note.",
      "Here is a picture of the library entrance with the campus clock clearly visible.",
      "I'm sending a screenshot of my submitted assignment confirmation receipt.",
      "Here is a photo of the dinner I cooked with the clock on the stove in the background."
    ],
    "2": [
      "I have attached a photo of me giving a double thumbs-up while holding a vegetable.",
      "Here is photographic proof of my exemplary behavior taken with maximum good-child energy.",
      "I am holding today's newspaper like a very cooperative and well-behaved hostage of love.",
      "Here is a selfie of me looking deeply studious with glasses that I don't technically need."
    ],
    "3": [
      "I have obtained a signed affidavit from the Mayor confirming my presence in the library.",
      "Here is a certificate of wholesome conduct signed by three independent notary publics.",
      "I had a forensic team document my location with satellite imagery and DNA swabs.",
      "A certified team of monks has blessed this photograph to verify its absolute truth."
    ],
    "4": [
      "I am sending a holographic recording verified by the Intergalactic Truth Commission.",
      "The evidence is etched onto a golden phonograph record aboard the Voyager 1 spacecraft.",
      "Quantum sensors have verified my physical existence at these exact spacetime coordinates.",
      "The universe itself bears witness to my truth in the celestial constellation of Orion."
    ]
  },
  "custom_wildcard": {
    "1": [
      "My biological clock experienced daylight savings time independently of the solar system.",
      "My calendar alert was scheduled in UTC instead of local standard time.",
      "I was trapped in an aggressive unsolicited conversation with a door-to-door solar panel enthusiast.",
      "A sudden cloudburst of apocalyptic proportions made navigation completely unfeasible.",
      "My keys fell into the exact gap between the car seat and center console\u2014the Bermuda Triangle of vehicles."
    ],
    "2": [
      "I got emotionally invested in an argument between two pigeons on my balcony.",
      "I accidentally drank decaf coffee, which put my nervous system into power-saving safe mode.",
      "My GPS told me to turn left into a pond like Michael Scott, and I had to stop and re-evaluate technology.",
      "I tried to find matching socks for 40 minutes before concluding that chaos theory is the only true constant.",
      "I sat down to tie my shoe and woke up 45 minutes later in a different philosophical state."
    ],
    "3": [
      "A rogue Roomba trapped me in my bedroom by constantly bumping against the door in a hostage standoff.",
      "I accidentally superglued my sunglasses to my forehead and had to wait for medical alcohol swabs.",
      "A wandering goat wandered onto my porch and refused to let me exit without a formal bribe of celery.",
      "I sneezed with such biblical force that my glasses flew into an alternate zip code.",
      "I was mistakenly identified as a chess grandmaster by a tour group and had to play 3 rounds under duress."
    ],
    "4": [
      "A sentient glitch in the matrix swapped my spatial coordinates with an innocent barista in Copenhagen.",
      "The universe temporarily ran out of RAM, causing me to freeze mid-stride for two solid hours.",
      "My guardian angel called an emergency union strike, leaving me vulnerable to spontaneous bad choices.",
      "I got caught in a localized groundhog-day time loop until I successfully flipped a pancake.",
      "An extraterrestrial scout ship borrowed my alarm clock for navigation calibrations."
    ]
  },
  "brain_stopped_working_gen": {
    "1": [
      "My cognitive processor experienced a temporary 100% CPU bottleneck and required a hard reset.",
      "I walked into the kitchen with deep purpose and stood there for 5 minutes with zero memory of why.",
      "I tried to put the milk carton in the pantry and the cereal box in the refrigerator.",
      "I stared at my phone password for 30 seconds wondering who invented numbers."
    ],
    "2": [
      "My brain made the dial-up internet connection sound and went completely offline.",
      "I tried to unlock my apartment front door using my car's key fob button.",
      "I had a thought, it looked around at the rest of my thoughts, got scared, and left.",
      "The hamster running the wheel in my head tripped and is currently on a mandatory union break."
    ],
    "3": [
      "A blue screen of death materialized directly behind my eyes with error code `OUT_OF_CLUES`.",
      "I spoke a sentence that was grammatically correct in no known galaxy.",
      "My brain replaced all stored knowledge with the theme song from DuckTales on an infinite loop.",
      "I attempted to think a thought and my brain responded with an automatic out-of-office email."
    ],
    "4": [
      "The cosmic server hosting my consciousness underwent an emergency database migration.",
      "My brain RAM was purged by the galactic garbage collection protocol.",
      "Spacetime warped my synaptic pathways into a Mobius strip with zero exit nodes.",
      "My thoughts were downloaded by an alien probe for universal comedy archives."
    ]
  },
  "lost_track_of_time": {
    "1": [
      "I was completely absorbed in an urgent research task and didn't notice the sunset.",
      "My wristwatch battery died at 3:15 PM and I trusted it blindly for three hours.",
      "I was reading a fascinating article and lost all awareness of the ambient world.",
      "My digital calendar failed to trigger the 15-minute departure chime."
    ],
    "2": [
      "I blinked at 2 PM and suddenly it was 7:45 PM and the streetlights were on.",
      "I fell into a 4-hour rabbit hole researching the history of medieval siege weapons.",
      "Time is an arbitrary social construct that moved significantly faster than my schedule today.",
      "I sat down to rest my eyes for 30 seconds and woke up in a different demographic era."
    ],
    "3": [
      "Chronos, the god of time, personally borrowed my afternoon to run some divine errands.",
      "I entered a localized temporal eddy where 5 minutes equals 3 hours of terrestrial time.",
      "A time-stealing sprite replaced my wall clock with a painting of a clock.",
      "I was caught in a gravitational pocket where time dilation reached interstellar proportions."
    ],
    "4": [
      "The spacetime continuum suffered a 4-hour stutter that erased the afternoon from memory.",
      "I traveled forward in time at the rate of 1 second per second, but in the wrong direction.",
      "A black hole passed through my neighborhood and stretched my 5-minute break into an epoch.",
      "The cosmic clock was set back 3 centuries before snapping forward to right now."
    ]
  },
  "reality_failed_load": {
    "1": [
      "I was experiencing such extreme brain fog that the entire environment felt out of focus.",
      "My glasses fogged up completely and I was navigating purely by echolocation.",
      "The morning routine was so surreal that I had to check if I was still asleep.",
      "A sudden power outage made the entire hallway feel like an unrendered videogame corridor."
    ],
    "2": [
      "The textures in my neighborhood were loading in low-polygon resolution until noon.",
      "I tried to walk through a doorway and bumped into an invisible collision boundary.",
      "The ambient audio of the world was buffering at 12% for the first three hours of my day.",
      "I saw the same black cat walk past twice in the exact same manner like in The Matrix."
    ],
    "3": [
      "The sky flickered from blue to magenta for 3 seconds; local birds were visibly confused.",
      "I dropped a pen and it fell through the floor geometry into the Earth's mantle.",
      "All the street signs were rendered in ancient Wingdings font until I rebooted my glasses.",
      "The physics engine failed to calculate gravity properly, making my shoes feel floaty."
    ],
    "4": [
      "The simulation master server crashed and our universe is currently running on the backup generator.",
      "A rendering glitch caused my avatar to exist in wireframe mode for 45 minutes.",
      "The cosmic architect forgot to allocate enough RAM for today's weather system.",
      "I clipped through the floor into the backrooms of reality before respawning here."
    ]
  },
  "main_character_crisis": {
    "1": [
      "I felt like my personal storyline was undergoing an unexpected plot twist that required contemplation.",
      "I had an overwhelming realization of the sheer scale of my responsibilities and took a mental break.",
      "I needed a moment to step back and evaluate whether my current trajectory matches my goals.",
      "I experienced a brief moment of existential clarity that temporarily paused all daily tasks."
    ],
    "2": [
      "I was waiting for the dramatic orchestral soundtrack to swell before making my entrance.",
      "I stared out a rain-streaked window for 40 minutes pretending to be in an indie film montage.",
      "My inner monologue became so loud and poetic that it drowned out mortal conversation.",
      "I was having a dramatic character development arc in the cereal aisle of the supermarket."
    ],
    "3": [
      "I refused to leave the room until the director gave me my motivation for this scene.",
      "A spotlight appeared above my head and a narrator began describing my emotional struggles.",
      "I was waiting for my stunt double to arrive and take over my daily chores.",
      "I broke the fourth wall, looked directly at the camera in the corner, and sighed deeply."
    ],
    "4": [
      "The scriptwriters of the universe went on strike, leaving my character without dialogue for 3 hours.",
      "My life was cancelled by the network after poor ratings in Season 26.",
      "I discovered I am merely an NPC in an advanced alien simulation of Earth.",
      "The cosmic audience voted in a live poll to put my character on a 2-hour timeout."
    ]
  },
  "cosmic_miscommunication": {
    "1": [
      "I received an ambiguous instruction that could have meant two completely opposite things.",
      "The message had a typo that made the arrival time look like 6:00 instead of 8:00.",
      "I was replying to an old email thread that had already been superseded by a new announcement.",
      "The meeting link was sent with the wrong access permissions, locking everyone out."
    ],
    "2": [
      "The universe told me 'Go left', my gut said 'Go right', and my feet decided to sit down.",
      "I was communicating with the world on a wavelength that only bats and dolphins could hear.",
      "I interpreted a polite nod as a binding verbal contract to take a 3-hour nap.",
      "Every signal sent between us was translated through a game of telepathic telephone."
    ],
    "3": [
      "A planetary alignment caused all verbal communication to sound like angry clarinet solos.",
      "My horoscope and your horoscope got into a physical brawl in the astral plane.",
      "A telepathic misfire sent my grocery list to an astronaut aboard the International Space Station.",
      "The cosmic translator inverted 'Yes' and 'No' across my entire solar house."
    ],
    "4": [
      "A solar flare scrambled the galactic frequency between my consciousness and Earth.",
      "The communication was intercepted by an alien diplomat who replied in binary.",
      "Spacetime folded the message into a paper crane that landed in the 18th century.",
      "The words were scattered across the cosmic background radiation before reaching your ears."
    ]
  },
  "personal_lore_complication": {
    "1": [
      "A complicated situation from my past suddenly re-emerged and required my immediate attention.",
      "An old promise I made three years ago came due today with zero advance warning.",
      "I had to manage a family matter that traces back to a longstanding generational debate.",
      "A misunderstanding from last semester had to be sorted out with the administration."
    ],
    "2": [
      "A side quest from Season 3 of my life unexpectedly interrupted the main storyline today.",
      "An old rival appeared in the grocery store and we had an intense 15-minute staring contest.",
      "My backstory caught up with me and demanded a 40-minute emotional flashback montage.",
      "I had to resolve a cliffhanger from my teenage years that resurfaced in a group chat."
    ],
    "3": [
      "My mysterious twin from an alternate dimension arrived seeking the family heirloom.",
      "A prophecy made about me by a fortune teller in 2012 was fulfilled at 2:15 PM today.",
      "I had to complete a secret initiation ritual for a club I accidentally joined in kindergarten.",
      "The lore of my life has become so convoluted that even my biographer quit."
    ],
    "4": [
      "The continuity editor of the multiverse flagged my life story for three major plot holes.",
      "My personal canon was retconned by the cosmic showrunners, altering my memories.",
      "I was pulled into a crossover episode with a historical drama from the Victorian era.",
      "My backstory was declared non-canon by the Intergalactic Council of Biographers."
    ]
  },
  "beyond_my_control": {
    "1": [
      "A regional utility power failure shut down all Wi-Fi, elevators, and traffic systems in the sector.",
      "Municipal transit strikes brought all bus and train routes to a complete standstill.",
      "Severe weather warnings forced the cancellation of all scheduled outdoor activities.",
      "A sudden banking system maintenance locked all digital payment cards for the morning."
    ],
    "2": [
      "The universe rolled a natural 1 on my behalf and chaos immediately ensued.",
      "I was merely a passive leaf caught in the raging hurricane of unfortunate circumstances.",
      "Everything that could possibly go sideways chose to perform an Olympic gymnastics routine.",
      "I was victimized by the domino effect of a butterfly flapping its wings in Tokyo."
    ],
    "3": [
      "A council of mischievous deities convened specifically to disrupt my daily schedule.",
      "An unexpected parade of miniature horses took over the only exit road from my neighborhood.",
      "The gravitational constant of the Earth temporarily doubled exclusively beneath my chair.",
      "A localized curse was placed upon my household by an annoyed woodland fairy."
    ],
    "4": [
      "The second law of thermodynamics was temporarily suspended in my postal code.",
      "An intergalactic battle between dark matter factions disrupted the local spacetime fabric.",
      "The universe's physics engine crashed and had to be restored from an ancient backup.",
      "Spacetime was seized by an extraterrestrial administrative committee for auditing."
    ]
  },
  "terrible_mistake": {
    "1": [
      "I clicked 'Reply All' on an email with 400 recipients with a private internal thought.",
      "I pressed the 'Delete All' button assuming there would be a confirmation prompt.",
      "I put liquid dish soap into the automatic dishwasher with disastrous foamy results.",
      "I set my alarm for the exact time the event was supposed to end."
    ],
    "2": [
      "I made a decision with 100% confidence that aged like room-temperature milk in 3 seconds.",
      "I thought 'How bad could this possibly be?' and the universe took that as a personal challenge.",
      "I followed a tutorial on the internet that clearly skipped 14 crucial safety warnings.",
      "I trusted my gut, but my gut was apparently operating on pure chaotic mischief."
    ],
    "3": [
      "I attempted a shortcut through an abandoned factory and am now the mayor of a raccoon colony.",
      "I pressed a big red button that specifically said 'DO NOT PRESS UNDER ANY CIRCUMSTANCES'.",
      "I challenged a chess grandmaster to a duel using only my left foot.",
      "I accidentally signed a 99-year lease on a haunted lighthouse in Maine."
    ],
    "4": [
      "I accidentally divided by zero on my calculator, opening a black hole in my desk drawer.",
      "I altered the past by stepping on a prehistoric moth during a brief temporal slip.",
      "My blunder created a localized paradox that threatens the integrity of Timeline A.",
      "The mistake was so monumentally bad that alien civilizations felt the shockwave."
    ]
  },
  "everything_went_wrong": {
    "1": [
      "My alarm failed, my coffee spilled, my car wouldn't start, and my umbrella broke within 45 minutes.",
      "A cascade of minor logistical failures turned a simple morning into an insurmountable obstacle course.",
      "Every system I relied on today experienced a simultaneous and independent failure.",
      "I encountered five consecutive delays that each compounded the previous delay exponentially."
    ],
    "2": [
      "If Murphy's Law were an Olympic sport, my morning just took the gold medal in all categories.",
      "The universe threw a pie in my face, pushed me into a puddle, and then stole my lunch money.",
      "My day didn't just go off the rails; the rails dissolved and the train learned how to backflip.",
      "I was on the receiving end of a synchronized multi-department cosmic prank."
    ],
    "3": [
      "A meteor made of pure bad luck crashed through my roof and landed directly in my morning tea.",
      "I stepped on a rake, which hit a lever, which released an anvil, which triggered an orchestra of doom.",
      "The circus of chaos chose my apartment as the grand finale location for its world tour.",
      "My day was directed by a chaotic toddler with access to an infinite special effects budget."
    ],
    "4": [
      "All physical laws of nature simultaneously inverted to create the ultimate bad day simulation.",
      "An anti-matter explosion of pure misfortune detonated in my immediate aura.",
      "The cosmic simulation encountered a fatal exception: `EVERYTHING_ON_FIRE_EXCEPTION`.",
      "The universe collapsed into a black hole of pure, unadulterated chaotic failure."
    ]
  },
  "plot_required_it": {
    "1": [
      "It was an unavoidable consequence of a complex sequence of prior commitments.",
      "Sometimes events unfold in a way that defies logical planning, and this was one of those days.",
      "I had to take this path to resolve a much larger logistical conflict behind the scenes.",
      "The circumstances dictated this outcome regardless of my original intentions."
    ],
    "2": [
      "The writers of my life needed some cheap drama to boost ratings for the season finale.",
      "My character needed a humbling setback in Act 2 to set up a triumphant redemption arc in Act 3.",
      "The pacing of my week was getting too boring, so the universe threw in an unhinged plot twist.",
      "I was contractually obligated by the narrative gods to make a questionable choice today."
    ],
    "3": [
      "The director shouted 'Cut! That was too easy, let's make them suffer for comedic effect!'",
      "A mysterious stranger in a trench coat told me this failure was canon in the expanded universe.",
      "My redemption arc required me to hit rock bottom in the most hilarious way possible.",
      "The focus group tested my punctual arrival and found it lacked emotional stakes."
    ],
    "4": [
      "The cosmic scriptwriter demanded this exact sequence of events to prevent universal collapse.",
      "In the overarching multiverse canon, my punctuality today would have ended civilization.",
      "The timeline required a sacrifice of my dignity to preserve the space-time continuum.",
      "An alien showrunner inserted a commercial break right as I was about to succeed."
    ]
  },
  "just_like_this": {
    "1": [
      "I have to be completely honest: I completely mismanaged my schedule and took on too much.",
      "My natural tendency toward procrastination got the better of me once again.",
      "I simply made a poor judgment call regarding time and energy, and I own that mistake.",
      "I am working on improving my consistency, but today was a genuine human lapse."
    ],
    "2": [
      "I was born under a chaotic star and unfortunately I am operating at 100% factory specifications.",
      "I am not broken; I was simply assembled without the punctuality module at the factory.",
      "Scientists have studied my decision-making process and concluded: 'He is simply like this.'",
      "My brain was designed by a committee of raccoons who love chaos and shiny objects."
    ],
    "3": [
      "I have a signed medical certificate stating that I am clinically allergic to punctuality and sensible choices.",
      "My manufacturer's warranty expired in 2018 and no replacement parts are available.",
      "I am an artisanal, handcrafted disaster who produces high-grade chaos on demand.",
      "My soul was forged in the fires of procrastination and iced coffee."
    ],
    "4": [
      "My genetic code was spliced with a quantum anomaly that produces spontaneous absurdity.",
      "The universe created me as a stress-test for the patience of everyone in my life.",
      "I am the designated agent of chaos appointed by the Intergalactic Council of Weirdos.",
      "In all infinite timelines across the multiverse, I am doing something remarkably similar right now."
    ]
  }
};

const RECIPIENT_TIPS = {
  professor: [
    "Deliver via an email sent at precisely 2:47 AM with the subject 'Humble Apology & Urgent Clarification'.",
    "Wear one slightly wrinkled cardigan and look visibly fatigued for maximum academic pathos.",
    "Quote at least one Latin proverb or obscure syllabus guideline to disorient them.",
    "Send as a PDF with an official-looking header and a fake reference ticket number."
  ],
  boss: [
    "Follow up immediately with: 'Rest assured, I am prioritizing synergy and deliverables.'",
    "Say it with extreme corporate confidence while walking briskly holding an empty folder.",
    "Send via Slack message with the 'thinking' emoji and immediately set your status to 'In a huddle'.",
    "Keep eye contact for 4 seconds, nod solemnly, and mention 'unforeseen logistical bottlenecks'."
  ],
  mom: [
    "Preemptively ask if she's eating well and if she took her vitamins before dropping this excuse.",
    "Use a slightly trembling voice and promise to come home this weekend.",
    "Blame your friend who she already secretly dislikes.",
    "Add '...but enough about me, how is your garden/neighbor's drama doing?'"
  ],
  friend: [
    "Offer to buy them a boba tea or a pizza slice to settle the moral debt.",
    "Send a 45-second frantic voice memo recorded while breathing heavily near traffic.",
    "Follow with 7 unhinged TikTok memes without acknowledging your absence.",
    "Just text 'Bro you won't believe what just went down' and let them pry it out of you."
  ],
  roommate: [
    "Leave a sticky note on the fridge alongside an offering of chocolate or instant noodles.",
    "Act completely oblivious and blame the landlord or the ghost in the attic.",
    "Wear noise-cancelling headphones and pretend you can't perceive mortal communication.",
    "Offer to take out the trash twice this week as blood money."
  ],
  date: [
    "Follow up immediately with three alternative dates and times so you don't look like a serial flaker.",
    "Blame your best friend's sudden emotional crisis (classic wingman sacrifice).",
    "Send a cute photo of a sleeping animal captioned 'Literally me right now'.",
    "Call them directly—texts can be analyzed by their committee of best friends."
  ]
};

const MASCOT_EMOJIS = {
  1: "😇", // Mildly plausible
  2: "😼", // Chaotic neutral
  3: "🤡", // Absurdly unhinged
  4: "👽", // Cosmic sci-fi
  panic: "😱"
};

const DISHONESTY_TITLES = {
  1: "Mildly Plausible ✨",
  2: "Chaotic Neutral 🎭",
  3: "Absurdly Unhinged 💀",
  4: "Cosmic Sci-Fi 🚀"
};

// Web Audio API Sound Synthesizer
class SoundEngine {
  constructor() {
    this.ctx = null;
    this.enabled = true;
  }

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioContext();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  toggle() {
    this.enabled = !this.enabled;
    return this.enabled;
  }

  playPop() {
    if (!this.enabled) return;
    try {
      this.init();
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(440, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(880, this.ctx.currentTime + 0.08);
      gain.gain.setValueAtTime(0.2, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.08);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.08);
    } catch (e) {
      console.warn("Audio unavailable", e);
    }
  }

  playSuccess() {
    if (!this.enabled) return;
    try {
      this.init();
      const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6 arpeggio
      notes.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.value = freq;
        const startTime = this.ctx.currentTime + idx * 0.06;
        gain.gain.setValueAtTime(0, startTime);
        gain.gain.linearRampToValueAtTime(0.18, startTime + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.25);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(startTime);
        osc.stop(startTime + 0.25);
      });
    } catch (e) {
      console.warn("Audio unavailable", e);
    }
  }

  playCopyDing() {
    if (!this.enabled) return;
    try {
      this.init();
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(880, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(1320, this.ctx.currentTime + 0.15);
      gain.gain.setValueAtTime(0.22, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.3);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.3);
    } catch (e) {
      console.warn("Audio unavailable", e);
    }
  }

  playPanicSiren() {
    if (!this.enabled) return;
    try {
      this.init();
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      const now = this.ctx.currentTime;
      osc.frequency.setValueAtTime(350, now);
      osc.frequency.linearRampToValueAtTime(750, now + 0.15);
      osc.frequency.linearRampToValueAtTime(350, now + 0.3);
      osc.frequency.linearRampToValueAtTime(750, now + 0.45);
      osc.frequency.linearRampToValueAtTime(350, now + 0.6);
      gain.gain.setValueAtTime(0.25, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.65);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.65);
    } catch (e) {
      console.warn("Audio unavailable", e);
    }
  }
}

// ─── Meme Sound Shuffler ───────────────────────────────────────────────────
// Add/remove filenames here to manage your sound library.
// All files must exist in assets/sounds/
const MEME_SOUNDS = [
  'assets/sounds/50986408-aa-with-reverb-meme-381632.mp3',
  'assets/sounds/50986408-what-meme-388653.mp3',
  'assets/sounds/6-_-7-watch-yo-jet-bro-446063.mp3',
  'assets/sounds/adih-crrentz7-my-name-is-jeff-148948.mp3',
  'assets/sounds/dragon-studio-thud-sound-effect-405470.mp3',
  'assets/sounds/johnnybacon156-fah-469417.mp3',
  'assets/sounds/shelvis_makes_games-sus-meme-sound-181271.mp3',
  'assets/sounds/u_1thl5d0szy-memeclick-506437.mp3',
];

class MemeSoundPlayer {
  constructor() {
    this._queue = [];       // shuffled play queue
    this._current = null;   // currently playing Audio element
  }

  // Fisher-Yates shuffle
  _shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  // Refill queue, ensuring first item differs from the last played path
  _refill(lastPath) {
    this._queue = this._shuffle(MEME_SOUNDS);
    // Guarantee no consecutive repeat across shuffle boundaries
    if (this._queue[0] === lastPath && this._queue.length > 1) {
      const swap = Math.floor(1 + Math.random() * (this._queue.length - 1));
      [this._queue[0], this._queue[swap]] = [this._queue[swap], this._queue[0]];
    }
  }

  play() {
    // Stop any currently playing sound immediately
    if (this._current) {
      this._current.pause();
      this._current.currentTime = 0;
      this._current = null;
    }

    // Remember what just played to avoid consecutive repeat
    const lastPath = this._lastPath || null;

    // Refill queue when empty
    if (this._queue.length === 0) {
      this._refill(lastPath);
    }

    const path = this._queue.shift();
    this._lastPath = path;

    const audio = new Audio(path);
    audio.volume = 0.85;
    this._current = audio;

    // Play — triggered directly from user click, so autoplay is allowed
    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise.catch(err => {
        console.warn('Meme sound blocked by browser autoplay policy:', err);
      });
    }

    // Clear reference when done
    audio.addEventListener('ended', () => {
      if (this._current === audio) this._current = null;
    });
  }
}

// Confetti Particle Engine
class ConfettiEngine {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.particles = [];
    this.animationFrame = null;
    this.resize();
    window.addEventListener('resize', () => this.resize());
  }

  resize() {
    if (!this.canvas) return;
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  burst(x, y) {
    if (!this.canvas || !this.ctx) return;
    this.resize();
    const colors = ['#ff5e7e', '#ffd154', '#48bfe3', '#9d4edd', '#38b000', '#ff9f1c'];
    const count = 48;
    const originX = x || window.innerWidth / 2;
    const originY = y || window.innerHeight / 3;

    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 * i) / count + (Math.random() * 0.4 - 0.2);
      const velocity = 5 + Math.random() * 9;
      this.particles.push({
        x: originX,
        y: originY,
        vx: Math.cos(angle) * velocity,
        vy: Math.sin(angle) * velocity - 3,
        size: 7 + Math.random() * 8,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 12,
        opacity: 1,
        shape: Math.random() > 0.4 ? 'rect' : 'circle'
      });
    }

    if (!this.animationFrame) {
      this.render();
    }
  }

  render() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.28; // gravity
      p.vx *= 0.98; // drag
      p.rotation += p.rotationSpeed;
      p.opacity -= 0.016;

      if (p.opacity <= 0 || p.y > this.canvas.height + 50) {
        this.particles.splice(i, 1);
        continue;
      }

      this.ctx.save();
      this.ctx.globalAlpha = Math.max(0, p.opacity);
      this.ctx.translate(p.x, p.y);
      this.ctx.rotate((p.rotation * Math.PI) / 180);
      this.ctx.fillStyle = p.color;

      if (p.shape === 'rect') {
        this.ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.7);
      } else {
        this.ctx.beginPath();
        this.ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
        this.ctx.fill();
      }
      this.ctx.restore();
    }

    if (this.particles.length > 0) {
      this.animationFrame = requestAnimationFrame(() => this.render());
    } else {
      this.animationFrame = null;
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }
}

// Main App State
class ExcuseApp {
  constructor() {
    this.sound = new SoundEngine();
    this.memeSound = new MemeSoundPlayer();
    this.confetti = new ConfettiEngine('confetti-canvas');
    this.currentCategory = 'academic';
    this.currentSituation = 'missing_class';
    this.dishonestyLevel = 2;
    this.currentRecipient = 'professor';
    this.currentExcuse = "";
    this.history = JSON.parse(localStorage.getItem('excuses_rap_sheet') || '[]');

    this.initDOM();
    this.renderCategories();
    this.renderSituations(this.currentCategory);
    this.bindEvents();
    this.generateExcuse();
    this.renderHistory();
  }

  initDOM() {
    this.dom = {
      categoryTabs: document.getElementById('category-tabs'),
      situationsContainer: document.getElementById('situations-container'),
      dishonestySlider: document.getElementById('dishonesty-range'),
      dishonestyValueBadge: document.getElementById('dishonesty-level-badge'),
      recipientSelect: document.getElementById('target-recipient'),
      btnGenerate: document.getElementById('btn-generate'),
      btnPanic: document.getElementById('btn-panic'),
      btnCopy: document.getElementById('btn-copy'),
      btnRandomize: document.getElementById('btn-randomize'),
      btnSoundToggle: document.getElementById('btn-sound-toggle'),
      soundStatusText: document.getElementById('sound-status-text'),
      stageCard: document.getElementById('stage-card'),
      excuseText: document.getElementById('excuse-text'),
      mascotAvatar: document.getElementById('mascot-avatar'),
      recipientTag: document.getElementById('stage-recipient-tag'),
      dishonestyTag: document.getElementById('stage-dishonesty-tag'),
      valBelievability: document.getElementById('val-believability'),
      barBelievability: document.getElementById('bar-believability'),
      valSarcasm: document.getElementById('val-sarcasm'),
      barSarcasm: document.getElementById('bar-sarcasm'),
      valAudacity: document.getElementById('val-audacity'),
      barAudacity: document.getElementById('bar-audacity'),
      deliveryTipText: document.getElementById('delivery-tip-text'),
      toastContainer: document.getElementById('toast-container'),
      historySection: document.getElementById('history-section'),
      historyList: document.getElementById('history-list'),
      historyCountBadge: document.getElementById('history-count-badge'),
      btnClearHistory: document.getElementById('btn-clear-history'),
      historyToggleHeader: document.getElementById('history-header')
    };
  }

  renderCategories() {
    if (!this.dom.categoryTabs) return;
    this.dom.categoryTabs.innerHTML = CATEGORIES.map(cat => {
      const isActive = cat.id === this.currentCategory;
      const hasSelection = cat.situations.some(s => s.id === this.currentSituation);
      return `
        <button type="button" 
          class="category-tab ${isActive ? 'active' : ''} ${hasSelection ? 'has-selected' : ''}" 
          data-category="${cat.id}"
          role="tab"
          aria-selected="${isActive}">
          <span>${cat.icon}</span>
          <span>${cat.name}</span>
          <span class="selected-indicator" title="Selected situation here"></span>
        </button>
      `;
    }).join('');
  }

  renderSituations(categoryId) {
    if (!this.dom.situationsContainer) return;
    const cat = CATEGORIES.find(c => c.id === categoryId) || CATEGORIES[0];
    this.dom.situationsContainer.innerHTML = cat.situations.map(sit => {
      const isActive = sit.id === this.currentSituation;
      return `
        <button type="button" 
          class="situation-chip ${isActive ? 'active' : ''}" 
          data-situation="${sit.id}"
          aria-pressed="${isActive}">
          <span class="chip-icon">${sit.icon}</span>
          <span>${sit.name}</span>
        </button>
      `;
    }).join('');
  }

  selectCategory(categoryId) {
    this.currentCategory = categoryId;
    this.renderCategories();
    this.renderSituations(categoryId);
  }

  selectSituation(situationId) {
    this.currentSituation = situationId;
    // Find which category owns this situation
    const owningCategory = CATEGORIES.find(c => c.situations.some(s => s.id === situationId));
    if (owningCategory && owningCategory.id !== this.currentCategory) {
      this.currentCategory = owningCategory.id;
    }
    this.renderCategories();
    this.renderSituations(this.currentCategory);
    this.generateExcuse();
  }

  bindEvents() {
    // Category Tabs click delegation
    this.dom.categoryTabs.addEventListener('click', (e) => {
      const tab = e.target.closest('.category-tab');
      if (!tab) return;
      this.sound.playPop();
      const catId = tab.dataset.category;
      this.selectCategory(catId);
    });

    // Situation Chips click delegation
    this.dom.situationsContainer.addEventListener('click', (e) => {
      const chip = e.target.closest('.situation-chip');
      if (!chip) return;
      this.sound.playPop();
      const sitId = chip.dataset.situation;
      this.selectSituation(sitId);
    });

    // Dishonesty Slider
    this.dom.dishonestySlider.addEventListener('input', (e) => {
      this.dishonestyLevel = parseInt(e.target.value, 10);
      this.updateDishonestyUI();
    });
    this.dom.dishonestySlider.addEventListener('change', () => {
      this.sound.playPop();
      this.generateExcuse();
    });

    // Recipient Selector
    this.dom.recipientSelect.addEventListener('change', (e) => {
      this.sound.playPop();
      this.currentRecipient = e.target.value;
      this.updateRecipientBadge();
      this.updateDeliveryTip();
    });

    // Main Generate Button
    this.dom.btnGenerate.addEventListener('click', (e) => {
      const rect = this.dom.btnGenerate.getBoundingClientRect();
      this.confetti.burst(rect.left + rect.width / 2, rect.top);
      this.sound.playSuccess();
      this.generateExcuse();
    });

    // Panic Button
    this.dom.btnPanic.addEventListener('click', () => {
      this.triggerPanicMode();
    });

    // Copy Excuse Button
    this.dom.btnCopy.addEventListener('click', () => {
      this.copyCurrentExcuse();
    });

    // Randomize Button
    this.dom.btnRandomize.addEventListener('click', () => {
      this.randomizeAll();
    });

    // Sound Toggle
    this.dom.btnSoundToggle.addEventListener('click', () => {
      const isEnabled = this.sound.toggle();
      if (isEnabled) {
        this.dom.btnSoundToggle.classList.add('active-sound');
        this.dom.soundStatusText.textContent = 'SFX: ON';
        this.sound.playPop();
      } else {
        this.dom.btnSoundToggle.classList.remove('active-sound');
        this.dom.soundStatusText.textContent = 'SFX: OFF';
      }
    });

    // Clear History Button
    this.dom.btnClearHistory.addEventListener('click', () => {
      this.history = [];
      localStorage.removeItem('excuses_rap_sheet');
      this.renderHistory();
      this.showToast('🗑️ Rap sheet wiped clean!');
    });

    // Copy from History List (event delegation)
    this.dom.historyList.addEventListener('click', (e) => {
      const copyBtn = e.target.closest('.history-copy-btn');
      if (!copyBtn) return;
      const text = copyBtn.dataset.text;
      navigator.clipboard.writeText(text).then(() => {
        this.sound.playCopyDing();
        this.showToast('📋 Copied from rap sheet!');
      });
    });
  }

  updateDishonestyUI() {
    this.dom.dishonestyValueBadge.textContent = DISHONESTY_TITLES[this.dishonestyLevel] || `Level ${this.dishonestyLevel}`;
    this.dom.mascotAvatar.textContent = MASCOT_EMOJIS[this.dishonestyLevel] || '🤖';
    this.dom.dishonestyTag.textContent = `Dishonesty: Lvl ${this.dishonestyLevel}`;
  }

  updateRecipientBadge() {
    const formatted = this.currentRecipient.charAt(0).toUpperCase() + this.currentRecipient.slice(1);
    this.dom.recipientTag.textContent = `Target: ${formatted}`;
  }

  updateDeliveryTip() {
    const tips = RECIPIENT_TIPS[this.currentRecipient] || RECIPIENT_TIPS.professor;
    const randomTip = tips[Math.floor(Math.random() * tips.length)];
    this.dom.deliveryTipText.textContent = randomTip;
  }

  generateExcuse() {
    // Clear panic mode styles if active
    this.dom.stageCard.classList.remove('panic-active');

    // Retrieve pool
    const situationPool = EXCUSES_DB[this.currentSituation] || EXCUSES_DB.missing_class;
    const levelPool = situationPool[this.dishonestyLevel] || situationPool[2] || situationPool[1];

    // Pick excuse different from current if possible
    let nextExcuse = levelPool[Math.floor(Math.random() * levelPool.length)];
    if (levelPool.length > 1 && nextExcuse === this.currentExcuse) {
      const filtered = levelPool.filter(e => e !== this.currentExcuse);
      nextExcuse = filtered[Math.floor(Math.random() * filtered.length)];
    }
    this.currentExcuse = nextExcuse;

    // Animate text change
    this.dom.excuseText.classList.add('updating');
    setTimeout(() => {
      this.dom.excuseText.textContent = this.currentExcuse;
      this.dom.excuseText.classList.remove('updating');
    }, 150);

    // Update UI elements
    this.updateDishonestyUI();
    this.updateRecipientBadge();
    this.updateDeliveryTip();
    this.updateMetrics();

    // Save to Rap Sheet History
    this.addToHistory(this.currentExcuse);
  }

  updateMetrics() {
    // Generate realistic funny metrics tied to dishonesty level
    let believability, sarcasm, audacity;

    switch (this.dishonestyLevel) {
      case 1:
        believability = Math.floor(75 + Math.random() * 20); // 75 - 95%
        sarcasm = Math.floor(15 + Math.random() * 25);       // 15 - 40%
        audacity = Math.floor(2 + Math.random() * 2);        // 2 - 4
        break;
      case 2:
        believability = Math.floor(45 + Math.random() * 25); // 45 - 70%
        sarcasm = Math.floor(45 + Math.random() * 30);       // 45 - 75%
        audacity = Math.floor(5 + Math.random() * 3);        // 5 - 7
        break;
      case 3:
        believability = Math.floor(15 + Math.random() * 20); // 15 - 35%
        sarcasm = Math.floor(75 + Math.random() * 20);       // 75 - 95%
        audacity = Math.floor(8 + Math.random() * 2);        // 8 - 10
        break;
      case 4:
        believability = Math.floor(1 + Math.random() * 9);   // 1 - 10%
        sarcasm = Math.floor(92 + Math.random() * 8);        // 92 - 100%
        audacity = 10;                                       // 10 / 10
        break;
      default:
        believability = 50;
        sarcasm = 50;
        audacity = 5;
    }

    this.dom.valBelievability.textContent = `${believability}%`;
    this.dom.barBelievability.style.width = `${believability}%`;

    this.dom.valSarcasm.textContent = `${sarcasm}%`;
    this.dom.barSarcasm.style.width = `${sarcasm}%`;

    this.dom.valAudacity.textContent = `${audacity}/10`;
    this.dom.barAudacity.style.width = `${audacity * 10}%`;
  }

  triggerPanicMode() {
    this.sound.playPanicSiren();
    this.memeSound.play();
    this.dom.stageCard.classList.add('panic-active');
    this.dom.mascotAvatar.textContent = MASCOT_EMOJIS.panic;

    // Burst red/warning confetti
    const rect = this.dom.btnPanic.getBoundingClientRect();
    this.confetti.burst(rect.left + rect.width / 2, rect.top);

    const panicAlibis = [
      "I AM EXPERIENCING AN UNPRECEDENTED PERSONAL EMERGENCY OF A PROPRIETARY NATURE AND CANNOT SPEAK.",
      "A pipe burst directly over my router and shoes. I am currently treading municipal tap water.",
      "My building's fire alarm has been ringing for 28 minutes straight and first responders ordered total silence.",
      "I am locked in my stairwell with 2% phone battery. Do not look for me, I will find a way out.",
      "I just witnessed a raccoon steal a catalytic converter and police have placed me in temporary protective custody."
    ];

    const emergencyExcuse = panicAlibis[Math.floor(Math.random() * panicAlibis.length)];
    this.currentExcuse = emergencyExcuse;

    this.dom.excuseText.textContent = emergencyExcuse;
    this.dom.dishonestyTag.textContent = "Dishonesty: RED ALERT 🚨";
    this.dom.valBelievability.textContent = "3%";
    this.dom.barBelievability.style.width = "3%";
    this.dom.valSarcasm.textContent = "100%";
    this.dom.barSarcasm.style.width = "100%";
    this.dom.valAudacity.textContent = "11/10";
    this.dom.barAudacity.style.width = "100%";
    this.dom.deliveryTipText.textContent = "Drop this in chat, power off your phone immediately, and hide under your blanket.";

    this.addToHistory(emergencyExcuse);

    // Auto copy to clipboard for lightning-fast panic responses
    navigator.clipboard.writeText(emergencyExcuse).then(() => {
      this.showToast("🚨 EMERGENCY ALIBI COPIED! Run for cover!", 4000);
    }).catch(() => {
      this.showToast("🚨 EMERGENCY GENERATED! Tap copy quick!", 3000);
    });
  }

  copyCurrentExcuse() {
    if (!this.currentExcuse) return;
    navigator.clipboard.writeText(this.currentExcuse).then(() => {
      this.sound.playCopyDing();
      const funnyConfirms = [
        "Copied! Godspeed, soldier 🫡",
        "Copied! May your conscience rest in peace 🕊️",
        "Copied! Good luck, you'll need it 🤞",
        "Copied! Deny everything, admit nothing 🤫",
        "Copied! We never had this conversation 🤐"
      ];
      const msg = funnyConfirms[Math.floor(Math.random() * funnyConfirms.length)];
      this.showToast(msg);
    }).catch(err => {
      console.error("Clipboard copy failed", err);
      this.showToast("Failed to copy automatically. Select text manually.");
    });
  }

  randomizeAll() {
    this.sound.playPop();
    const randomCat = CATEGORIES[Math.floor(Math.random() * CATEGORIES.length)];
    const randomSit = randomCat.situations[Math.floor(Math.random() * randomCat.situations.length)];
    const randomLevel = Math.floor(1 + Math.random() * 4);
    const recipientOptions = ['professor', 'boss', 'mom', 'friend', 'roommate', 'date'];
    const randomRecipient = recipientOptions[Math.floor(Math.random() * recipientOptions.length)];

    this.currentCategory = randomCat.id;
    this.currentSituation = randomSit.id;
    this.dishonestyLevel = randomLevel;
    this.currentRecipient = randomRecipient;

    this.renderCategories();
    this.renderSituations(this.currentCategory);

    this.dom.dishonestySlider.value = randomLevel;
    this.dom.recipientSelect.value = randomRecipient;

    this.confetti.burst();
    this.generateExcuse();
    this.showToast("🎲 Complete chaotic randomize triggered!");
  }

  addToHistory(excuse) {
    if (!excuse) return;
    // Don't duplicate top entry
    if (this.history.length > 0 && this.history[0].text === excuse) return;

    this.history.unshift({
      text: excuse,
      situation: this.currentSituation,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    });

    if (this.history.length > 15) {
      this.history.pop();
    }

    localStorage.setItem('excuses_rap_sheet', JSON.stringify(this.history));
    this.renderHistory();
  }

  renderHistory() {
    this.dom.historyCountBadge.textContent = `${this.history.length} alibis`;

    if (this.history.length === 0) {
      this.dom.historyList.innerHTML = `<div class="empty-history">Your rap sheet is squeaky clean. Generate some excuses to establish your criminal record!</div>`;
      return;
    }

    this.dom.historyList.innerHTML = this.history.map(item => `
      <div class="history-item">
        <span class="history-text" title="${this.escapeHtml(item.text)}">${this.escapeHtml(item.text)}</span>
        <button class="history-copy-btn" data-text="${this.escapeHtml(item.text)}" title="Copy this excuse" aria-label="Copy excuse">📋</button>
      </div>
    `).join('');
  }

  showToast(message, duration = 3000) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    this.dom.toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.classList.add('fade-out');
      setTimeout(() => {
        toast.remove();
      }, 300);
    }, duration);
  }

  escapeHtml(str) {
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }
}

// Boot application when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  window.excuseApp = new ExcuseApp();
});
