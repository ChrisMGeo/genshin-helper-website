import { useTranslation } from "react-i18next";

const characterInfo = [
  {
    "id": 10000002,
    "weaponType": "sword",
    "titleHash": 3614785250,
    "detailHash": 4223738138,
    "constellationHash": 2735576330,
    "rarity": 5,
    "vision": "cryo",
    "nameId": "kamisato_ayaka",
    "nameHash": 1006042610,
    "descHash": 3703438153,
    "constellations": [
      {
        "nameHash": 3364696049,
        "descHash": 194851991
      },
      {
        "nameHash": 562006217,
        "descHash": 846522047
      },
      {
        "nameHash": 1186654377,
        "descHash": 2194749263
      },
      {
        "nameHash": 2463454169,
        "descHash": 2503540655
      },
      {
        "nameHash": 51561297,
        "descHash": 2689473807
      },
      {
        "nameHash": 2587184913,
        "descHash": 1834326191
      }
    ],
    "energySkill": {
      "nameHash": 81399925,
      "descHash": 3746604880
    },
    "skills": [
      {
        "nameHash": 813430205,
        "descHash": 3246000152
      },
      {
        "nameHash": 682887613,
        "descHash": 4048563120
      },
      {
        "nameHash": 2687935733,
        "descHash": 1819205104
      }
    ],
    "passives": [
      {
        "nameHash": 894491949,
        "descHash": 2636480403
      },
      {
        "nameHash": 93137789,
        "descHash": 3965126451
      },
      {
        "nameHash": 447551629,
        "descHash": 779979035
      }
    ]
  },
  {
    "id": 10000003,
    "weaponType": "sword",
    "titleHash": 1200647962,
    "detailHash": 1963658218,
    "constellationHash": 201010258,
    "rarity": 5,
    "vision": "anemo",
    "nameId": "jean",
    "nameHash": 3221566250,
    "descHash": 2215890689,
    "constellations": [
      {
        "nameHash": 2935753641,
        "descHash": 988897943
      },
      {
        "nameHash": 573725673,
        "descHash": 544290319
      },
      {
        "nameHash": 997607873,
        "descHash": 3837932671
      },
      {
        "nameHash": 2887613457,
        "descHash": 2911211423
      },
      {
        "nameHash": 2712156785,
        "descHash": 3588133439
      },
      {
        "nameHash": 3167949041,
        "descHash": 4148193751
      }
    ],
    "energySkill": {
      "nameHash": 1586562613,
      "descHash": 1484586416
    },
    "skills": [
      {
        "nameHash": 3128535397,
        "descHash": 2357477968
      },
      {
        "nameHash": 1433276421,
        "descHash": 1281904448
      }
    ],
    "passives": [
      {
        "nameHash": 1495472693,
        "descHash": 1706320299
      },
      {
        "nameHash": 2466088197,
        "descHash": 854544579
      },
      {
        "nameHash": 3874514189,
        "descHash": 1823299387
      }
    ]
  },
  {
    "id": 10000006,
    "weaponType": "catalyst",
    "titleHash": 3138609954,
    "detailHash": 3571277394,
    "constellationHash": 34090282,
    "rarity": 4,
    "vision": "electro",
    "nameId": "lisa",
    "nameHash": 3344622722,
    "descHash": 1387136209,
    "constellations": [
      {
        "nameHash": 12874089,
        "descHash": 1939598815
      },
      {
        "nameHash": 1523216321,
        "descHash": 607155167
      },
      {
        "nameHash": 3707731441,
        "descHash": 3643569183
      },
      {
        "nameHash": 1540277121,
        "descHash": 4061309583
      },
      {
        "nameHash": 2256541273,
        "descHash": 1025564511
      },
      {
        "nameHash": 2935728161,
        "descHash": 2237370327
      }
    ],
    "energySkill": {
      "nameHash": 3387608453,
      "descHash": 2561961032
    },
    "skills": [
      {
        "nameHash": 2499144501,
        "descHash": 3362612400
      },
      {
        "nameHash": 3342928733,
        "descHash": 2036101496
      }
    ],
    "passives": [
      {
        "nameHash": 3611282821,
        "descHash": 1118493307
      },
      {
        "nameHash": 1069142525,
        "descHash": 3499444667
      },
      {
        "nameHash": 200498901,
        "descHash": 3877764179
      }
    ]
  },
  {
    "id": 10000014,
    "weaponType": "catalyst",
    "titleHash": 1823500338,
    "detailHash": 2573623138,
    "constellationHash": 2960169546,
    "rarity": 4,
    "vision": "hydro",
    "nameId": "barbara",
    "nameHash": 3775299170,
    "descHash": 1566920073,
    "constellations": [
      {
        "nameHash": 696499609,
        "descHash": 1541078791
      },
      {
        "nameHash": 3458095841,
        "descHash": 3401415943
      },
      {
        "nameHash": 929991257,
        "descHash": 3525415831
      },
      {
        "nameHash": 2093148473,
        "descHash": 1120190279
      },
      {
        "nameHash": 3139814905,
        "descHash": 1422637159
      },
      {
        "nameHash": 2183173281,
        "descHash": 3744328127
      }
    ],
    "energySkill": {
      "nameHash": 3238780589,
      "descHash": 3483681304
    },
    "skills": [
      {
        "nameHash": 1555695317,
        "descHash": 3743135664
      },
      {
        "nameHash": 645814357,
        "descHash": 403491544
      }
    ],
    "passives": [
      {
        "nameHash": 2589212997,
        "descHash": 4114751091
      },
      {
        "nameHash": 868478693,
        "descHash": 3220600547
      },
      {
        "nameHash": 3475904157,
        "descHash": 1532071283
      }
    ]
  },
  {
    "id": 10000015,
    "weaponType": "sword",
    "titleHash": 1785544946,
    "detailHash": 1365496954,
    "constellationHash": 1247404986,
    "rarity": 4,
    "vision": "cryo",
    "nameId": "kaeya",
    "nameHash": 4119663210,
    "descHash": 783578577,
    "constellations": [
      {
        "nameHash": 1478938545,
        "descHash": 2364565991
      },
      {
        "nameHash": 1425365945,
        "descHash": 2342848423
      },
      {
        "nameHash": 1397996209,
        "descHash": 4020405287
      },
      {
        "nameHash": 1595754497,
        "descHash": 3513562087
      },
      {
        "nameHash": 1102683585,
        "descHash": 3968399879
      },
      {
        "nameHash": 2310553705,
        "descHash": 3726105031
      }
    ],
    "energySkill": {
      "nameHash": 2486277181,
      "descHash": 2120666136
    },
    "skills": [
      {
        "nameHash": 3795823997,
        "descHash": 3473499832
      },
      {
        "nameHash": 1067425573,
        "descHash": 1929962560
      }
    ],
    "passives": [
      {
        "nameHash": 73889597,
        "descHash": 2556398915
      },
      {
        "nameHash": 2837976013,
        "descHash": 1886880811
      },
      {
        "nameHash": 433695005,
        "descHash": 1546033427
      }
    ]
  },
  {
    "id": 10000016,
    "weaponType": "claymore",
    "titleHash": 2612198306,
    "detailHash": 4246347802,
    "constellationHash": 2314116250,
    "rarity": 5,
    "vision": "pyro",
    "nameId": "diluc",
    "nameHash": 3608180322,
    "descHash": 2413312897,
    "constellations": [
      {
        "nameHash": 1050836105,
        "descHash": 4178291015
      },
      {
        "nameHash": 610672953,
        "descHash": 3591206935
      },
      {
        "nameHash": 4084228505,
        "descHash": 4123556519
      },
      {
        "nameHash": 1732979729,
        "descHash": 3027261279
      },
      {
        "nameHash": 2293832361,
        "descHash": 1232419951
      },
      {
        "nameHash": 4215692089,
        "descHash": 2507810183
      }
    ],
    "energySkill": {
      "nameHash": 2772119557,
      "descHash": 2932734984
    },
    "skills": [
      {
        "nameHash": 2878874285,
        "descHash": 2306677240
      },
      {
        "nameHash": 2979035429,
        "descHash": 1648914688
      }
    ],
    "passives": [
      {
        "nameHash": 2844158725,
        "descHash": 1808773251
      },
      {
        "nameHash": 2904319165,
        "descHash": 2686849171
      },
      {
        "nameHash": 4168878421,
        "descHash": 1726568035
      }
    ]
  },
  {
    "id": 10000020,
    "weaponType": "claymore",
    "titleHash": 2753191042,
    "detailHash": 2084554490,
    "constellationHash": 4052447146,
    "rarity": 4,
    "vision": "electro",
    "nameId": "razor",
    "nameHash": 4160147242,
    "descHash": 3901895113,
    "constellations": [
      {
        "nameHash": 456119193,
        "descHash": 3596694423
      },
      {
        "nameHash": 3370625609,
        "descHash": 791295375
      },
      {
        "nameHash": 3366391689,
        "descHash": 2668228831
      },
      {
        "nameHash": 770839401,
        "descHash": 3886927615
      },
      {
        "nameHash": 1781683177,
        "descHash": 2350685383
      },
      {
        "nameHash": 4050704465,
        "descHash": 2977840775
      }
    ],
    "energySkill": {
      "nameHash": 1752405213,
      "descHash": 4038491440
    },
    "skills": [
      {
        "nameHash": 3392494725,
        "descHash": 398360984
      },
      {
        "nameHash": 2720517437,
        "descHash": 183207800
      }
    ],
    "passives": [
      {
        "nameHash": 2218832005,
        "descHash": 2005122803
      },
      {
        "nameHash": 1235274093,
        "descHash": 583080003
      },
      {
        "nameHash": 43323709,
        "descHash": 3924700747
      }
    ]
  },
  {
    "id": 10000021,
    "weaponType": "bow",
    "titleHash": 1238477178,
    "detailHash": 3097194818,
    "constellationHash": 1404729682,
    "rarity": 4,
    "vision": "pyro",
    "nameId": "amber",
    "nameHash": 1966438658,
    "descHash": 3898061993,
    "constellations": [
      {
        "nameHash": 1803598873,
        "descHash": 2709231575
      },
      {
        "nameHash": 2183507145,
        "descHash": 967025055
      },
      {
        "nameHash": 1196596641,
        "descHash": 2432552951
      },
      {
        "nameHash": 2969048825,
        "descHash": 3308085223
      },
      {
        "nameHash": 1752633193,
        "descHash": 3697934583
      },
      {
        "nameHash": 1429105737,
        "descHash": 2414194279
      }
    ],
    "energySkill": {
      "nameHash": 4246808797,
      "descHash": 1744785232
    },
    "skills": [
      {
        "nameHash": 1422444957,
        "descHash": 440387256
      },
      {
        "nameHash": 3667697773,
        "descHash": 1744735952
      }
    ],
    "passives": [
      {
        "nameHash": 644206373,
        "descHash": 2816835699
      },
      {
        "nameHash": 3924875829,
        "descHash": 3525842155
      },
      {
        "nameHash": 318191261,
        "descHash": 1991866363
      }
    ]
  },
  {
    "id": 10000022,
    "weaponType": "bow",
    "titleHash": 1225242490,
    "detailHash": 3527710554,
    "constellationHash": 2226738162,
    "rarity": 5,
    "vision": "anemo",
    "nameId": "venti",
    "nameHash": 2466140362,
    "descHash": 4137166409,
    "constellations": [
      {
        "nameHash": 2201097153,
        "descHash": 665988159
      },
      {
        "nameHash": 509053297,
        "descHash": 577887399
      },
      {
        "nameHash": 1436400889,
        "descHash": 1214899311
      },
      {
        "nameHash": 2667025441,
        "descHash": 3475049103
      },
      {
        "nameHash": 3652037273,
        "descHash": 3697781887
      },
      {
        "nameHash": 544150889,
        "descHash": 1651730135
      }
    ],
    "energySkill": {
      "nameHash": 1181756941,
      "descHash": 2599674792
    },
    "skills": [
      {
        "nameHash": 4043029317,
        "descHash": 4144150840
      },
      {
        "nameHash": 2470093149,
        "descHash": 2480880816
      }
    ],
    "passives": [
      {
        "nameHash": 1562102965,
        "descHash": 3352373235
      },
      {
        "nameHash": 2149736101,
        "descHash": 697661523
      },
      {
        "nameHash": 1704267989,
        "descHash": 1111860827
      }
    ]
  },
  {
    "id": 10000023,
    "weaponType": "polearm",
    "titleHash": 2467527666,
    "detailHash": 3294048674,
    "constellationHash": 1451760122,
    "rarity": 4,
    "vision": "pyro",
    "nameId": "xiangling",
    "nameHash": 1130996346,
    "descHash": 2058084377,
    "constellations": [
      {
        "nameHash": 1194445449,
        "descHash": 3866122911
      },
      {
        "nameHash": 1745094577,
        "descHash": 515394687
      },
      {
        "nameHash": 2414003921,
        "descHash": 1194236287
      },
      {
        "nameHash": 2365969361,
        "descHash": 2051519231
      },
      {
        "nameHash": 4257441793,
        "descHash": 4011282063
      },
      {
        "nameHash": 2739862033,
        "descHash": 366896479
      }
    ],
    "energySkill": {
      "nameHash": 3051726149,
      "descHash": 1407584528
    },
    "skills": [
      {
        "nameHash": 2921789333,
        "descHash": 2304447960
      },
      {
        "nameHash": 1925269741,
        "descHash": 3652072736
      }
    ],
    "passives": [
      {
        "nameHash": 338716653,
        "descHash": 3659479899
      },
      {
        "nameHash": 3631919501,
        "descHash": 4053428835
      },
      {
        "nameHash": 4101043149,
        "descHash": 3985819811
      }
    ]
  },
  {
    "id": 10000024,
    "weaponType": "claymore",
    "titleHash": 1152777210,
    "detailHash": 3138225274,
    "constellationHash": 3853657898,
    "rarity": 4,
    "vision": "electro",
    "nameId": "beidou",
    "nameHash": 2646367730,
    "descHash": 2910785993,
    "constellations": [
      {
        "nameHash": 1598246073,
        "descHash": 2899101639
      },
      {
        "nameHash": 2620399769,
        "descHash": 2277441935
      },
      {
        "nameHash": 2741836993,
        "descHash": 4053128919
      },
      {
        "nameHash": 1523101409,
        "descHash": 1024043391
      },
      {
        "nameHash": 2181637521,
        "descHash": 938587127
      },
      {
        "nameHash": 688452449,
        "descHash": 1391917287
      }
    ],
    "energySkill": {
      "nameHash": 2874294485,
      "descHash": 1233611720
    },
    "skills": [
      {
        "nameHash": 3770302877,
        "descHash": 723463672
      },
      {
        "nameHash": 3028116765,
        "descHash": 3101314424
      }
    ],
    "passives": [
      {
        "nameHash": 4133627029,
        "descHash": 2212073723
      },
      {
        "nameHash": 634340965,
        "descHash": 3738470891
      },
      {
        "nameHash": 2541261109,
        "descHash": 792917115
      }
    ]
  },
  {
    "id": 10000025,
    "weaponType": "sword",
    "titleHash": 4067465850,
    "detailHash": 2731162298,
    "constellationHash": 2497169002,
    "rarity": 4,
    "vision": "hydro",
    "nameId": "xingqiu",
    "nameHash": 4197635682,
    "descHash": 3660176857,
    "constellations": [
      {
        "nameHash": 792197377,
        "descHash": 3521725647
      },
      {
        "nameHash": 4158193737,
        "descHash": 1801328303
      },
      {
        "nameHash": 3515928625,
        "descHash": 2322919439
      },
      {
        "nameHash": 3998346513,
        "descHash": 2523868735
      },
      {
        "nameHash": 2024007257,
        "descHash": 3421075471
      },
      {
        "nameHash": 4055521313,
        "descHash": 2227218487
      }
    ],
    "energySkill": {
      "nameHash": 3014291477,
      "descHash": 551308952
    },
    "skills": [
      {
        "nameHash": 3909984477,
        "descHash": 503479248
      },
      {
        "nameHash": 4213665965,
        "descHash": 200360760
      }
    ],
    "passives": [
      {
        "nameHash": 3839275837,
        "descHash": 1227800275
      },
      {
        "nameHash": 1606021549,
        "descHash": 4284314139
      },
      {
        "nameHash": 3481723485,
        "descHash": 3755741851
      }
    ]
  },
  {
    "id": 10000026,
    "weaponType": "polearm",
    "titleHash": 2182504186,
    "detailHash": 1863419602,
    "constellationHash": 3401180666,
    "rarity": 5,
    "vision": "anemo",
    "nameId": "xiao",
    "nameHash": 1021947690,
    "descHash": 2789047073,
    "constellations": [
      {
        "nameHash": 3656758641,
        "descHash": 2211607487
      },
      {
        "nameHash": 1959296641,
        "descHash": 2430102759
      },
      {
        "nameHash": 2385509657,
        "descHash": 627668303
      },
      {
        "nameHash": 3724086753,
        "descHash": 2599764583
      },
      {
        "nameHash": 4032000625,
        "descHash": 934068495
      },
      {
        "nameHash": 998328113,
        "descHash": 2528103471
      }
    ],
    "energySkill": {
      "nameHash": 2396025797,
      "descHash": 3694684504
    },
    "skills": [
      {
        "nameHash": 232048445,
        "descHash": 81972888
      },
      {
        "nameHash": 45357229,
        "descHash": 1423350968
      }
    ],
    "passives": [
      {
        "nameHash": 1374919229,
        "descHash": 3596785467
      },
      {
        "nameHash": 2600189189,
        "descHash": 1170290667
      },
      {
        "nameHash": 1046467645,
        "descHash": 1894256979
      }
    ]
  },
  {
    "id": 10000027,
    "weaponType": "catalyst",
    "titleHash": 1976081594,
    "detailHash": 1658614834,
    "constellationHash": 20629626,
    "rarity": 4,
    "vision": "geo",
    "nameId": "ningguang",
    "nameHash": 4127888970,
    "descHash": 2174640361,
    "constellations": [
      {
        "nameHash": 2798083633,
        "descHash": 3095075175
      },
      {
        "nameHash": 3383823929,
        "descHash": 215899111
      },
      {
        "nameHash": 2150334649,
        "descHash": 3390871
      },
      {
        "nameHash": 900430793,
        "descHash": 3712986823
      },
      {
        "nameHash": 276636521,
        "descHash": 1513475887
      },
      {
        "nameHash": 637125593,
        "descHash": 1654510391
      }
    ],
    "energySkill": {
      "nameHash": 3719617877,
      "descHash": 4121543128
    },
    "skills": [
      {
        "nameHash": 2745030989,
        "descHash": 3500884936
      },
      {
        "nameHash": 2863733197,
        "descHash": 226285648
      }
    ],
    "passives": [
      {
        "nameHash": 2007496293,
        "descHash": 936555731
      },
      {
        "nameHash": 2498988029,
        "descHash": 3667556291
      },
      {
        "nameHash": 3990426357,
        "descHash": 3051868187
      }
    ]
  },
  {
    "id": 10000029,
    "weaponType": "catalyst",
    "titleHash": 1897358210,
    "detailHash": 1801721474,
    "constellationHash": 2230999650,
    "rarity": 5,
    "vision": "pyro",
    "nameId": "klee",
    "nameHash": 3339083250,
    "descHash": 2313554193,
    "constellations": [
      {
        "nameHash": 600240137,
        "descHash": 4004824647
      },
      {
        "nameHash": 328772169,
        "descHash": 4201661495
      },
      {
        "nameHash": 1369435161,
        "descHash": 2182377015
      },
      {
        "nameHash": 1327047857,
        "descHash": 3999371183
      },
      {
        "nameHash": 3317796233,
        "descHash": 4010119167
      },
      {
        "nameHash": 1554210529,
        "descHash": 1281989519
      }
    ],
    "energySkill": {
      "nameHash": 1371192733,
      "descHash": 3680863856
    },
    "skills": [
      {
        "nameHash": 161160581,
        "descHash": 468291488
      },
      {
        "nameHash": 3723743117,
        "descHash": 713417336
      }
    ],
    "passives": [
      {
        "nameHash": 1539278821,
        "descHash": 633641795
      },
      {
        "nameHash": 330795749,
        "descHash": 3585141899
      },
      {
        "nameHash": 3590967205,
        "descHash": 710544459
      }
    ]
  },
  {
    "id": 10000030,
    "weaponType": "polearm",
    "titleHash": 2789626970,
    "detailHash": 3237080338,
    "constellationHash": 1594094098,
    "rarity": 5,
    "vision": "geo",
    "nameId": "zhongli",
    "nameHash": 3862787418,
    "descHash": 2898546105,
    "constellations": [
      {
        "nameHash": 3111572937,
        "descHash": 2163509591
      },
      {
        "nameHash": 519733529,
        "descHash": 3521405695
      },
      {
        "nameHash": 1427308897,
        "descHash": 706146151
      },
      {
        "nameHash": 583045657,
        "descHash": 1050713703
      },
      {
        "nameHash": 3586646841,
        "descHash": 2198645143
      },
      {
        "nameHash": 2555647321,
        "descHash": 221212679
      }
    ],
    "energySkill": {
      "nameHash": 3055197325,
      "descHash": 3466156896
    },
    "skills": [
      {
        "nameHash": 2119081949,
        "descHash": 804532184
      },
      {
        "nameHash": 3426814373,
        "descHash": 20709872
      }
    ],
    "passives": [
      {
        "nameHash": 4116255925,
        "descHash": 4290345675
      },
      {
        "nameHash": 3036449245,
        "descHash": 1026698715
      },
      {
        "nameHash": 3319973493,
        "descHash": 487161675
      }
    ]
  },
  {
    "id": 10000031,
    "weaponType": "bow",
    "titleHash": 353285794,
    "detailHash": 1139039362,
    "constellationHash": 2198842266,
    "rarity": 4,
    "vision": "electro",
    "nameId": "fischl",
    "nameHash": 3277782506,
    "descHash": 1695621873,
    "constellations": [
      {
        "nameHash": 5726609,
        "descHash": 379923407
      },
      {
        "nameHash": 899523649,
        "descHash": 3682583391
      },
      {
        "nameHash": 1999125225,
        "descHash": 1088869759
      },
      {
        "nameHash": 469910073,
        "descHash": 733548871
      },
      {
        "nameHash": 3322353681,
        "descHash": 2975315583
      },
      {
        "nameHash": 2314026161,
        "descHash": 3112929279
      }
    ],
    "energySkill": {
      "nameHash": 1386345573,
      "descHash": 3443626520
    },
    "skills": [
      {
        "nameHash": 3733168437,
        "descHash": 3636661160
      },
      {
        "nameHash": 2390005205,
        "descHash": 4282764920
      }
    ],
    "passives": [
      {
        "nameHash": 3295781565,
        "descHash": 1468026939
      },
      {
        "nameHash": 1677689517,
        "descHash": 921704627
      },
      {
        "nameHash": 993478661,
        "descHash": 2825787947
      }
    ]
  },
  {
    "id": 10000032,
    "weaponType": "sword",
    "titleHash": 1078060234,
    "detailHash": 1030159626,
    "constellationHash": 2225075946,
    "rarity": 4,
    "vision": "pyro",
    "nameId": "bennett",
    "nameHash": 968893378,
    "descHash": 3696214329,
    "constellations": [
      {
        "nameHash": 804447537,
        "descHash": 2073825087
      },
      {
        "nameHash": 2431201553,
        "descHash": 471991591
      },
      {
        "nameHash": 698148913,
        "descHash": 1713009919
      },
      {
        "nameHash": 3306938097,
        "descHash": 3601575975
      },
      {
        "nameHash": 2443947665,
        "descHash": 2838302743
      },
      {
        "nameHash": 3326774305,
        "descHash": 596615087
      }
    ],
    "energySkill": {
      "nameHash": 3528607669,
      "descHash": 2911356856
    },
    "skills": [
      {
        "nameHash": 422353221,
        "descHash": 280312952
      },
      {
        "nameHash": 1809314813,
        "descHash": 2368393840
      }
    ],
    "passives": [
      {
        "nameHash": 1863603757,
        "descHash": 684037875
      },
      {
        "nameHash": 1897523725,
        "descHash": 2550793755
      },
      {
        "nameHash": 1766090197,
        "descHash": 1620966331
      }
    ]
  },
  {
    "id": 10000033,
    "weaponType": "bow",
    "titleHash": 3875370554,
    "detailHash": 3593799522,
    "constellationHash": 3423950162,
    "rarity": 5,
    "vision": "hydro",
    "nameId": "tartaglia",
    "nameHash": 3847143266,
    "descHash": 1915755417,
    "constellations": [
      {
        "nameHash": 1777276769,
        "descHash": 926660471
      },
      {
        "nameHash": 3821979753,
        "descHash": 3189611455
      },
      {
        "nameHash": 1562607913,
        "descHash": 1409214983
      },
      {
        "nameHash": 3252659577,
        "descHash": 2705925063
      },
      {
        "nameHash": 1429851537,
        "descHash": 2922457007
      },
      {
        "nameHash": 1479737849,
        "descHash": 792778623
      }
    ],
    "energySkill": {
      "nameHash": 2804759909,
      "descHash": 3448962704
    },
    "skills": [
      {
        "nameHash": 2900039733,
        "descHash": 3006751504
      },
      {
        "nameHash": 863456805,
        "descHash": 4166160984
      }
    ],
    "passives": [
      {
        "nameHash": 3534614517,
        "descHash": 2913186835
      },
      {
        "nameHash": 662584285,
        "descHash": 2794165467
      },
      {
        "nameHash": 3474329165,
        "descHash": 3671922915
      }
    ]
  },
  {
    "id": 10000034,
    "weaponType": "claymore",
    "titleHash": 2339950258,
    "detailHash": 2464288834,
    "constellationHash": 808906466,
    "rarity": 4,
    "vision": "geo",
    "nameId": "noelle",
    "nameHash": 1921418842,
    "descHash": 1136975897,
    "constellations": [
      {
        "nameHash": 3743570273,
        "descHash": 2305612271
      },
      {
        "nameHash": 680992073,
        "descHash": 2663640239
      },
      {
        "nameHash": 4141797449,
        "descHash": 2912207711
      },
      {
        "nameHash": 50520097,
        "descHash": 4101456727
      },
      {
        "nameHash": 976069081,
        "descHash": 2820351255
      },
      {
        "nameHash": 79084353,
        "descHash": 2091165375
      }
    ],
    "energySkill": {
      "nameHash": 1615963973,
      "descHash": 313107928
    },
    "skills": [
      {
        "nameHash": 1521716213,
        "descHash": 3131531104
      },
      {
        "nameHash": 737506901,
        "descHash": 204798264
      }
    ],
    "passives": [
      {
        "nameHash": 4119686205,
        "descHash": 59436107
      },
      {
        "nameHash": 10500405,
        "descHash": 3560753459
      },
      {
        "nameHash": 1771533717,
        "descHash": 4099575347
      }
    ]
  },
  {
    "id": 10000035,
    "weaponType": "sword",
    "titleHash": 2560957650,
    "detailHash": 987428418,
    "constellationHash": 1580087082,
    "rarity": 5,
    "vision": "cryo",
    "nameId": "qiqi",
    "nameHash": 168956722,
    "descHash": 3128332321,
    "constellations": [
      {
        "nameHash": 3894833521,
        "descHash": 1696126103
      },
      {
        "nameHash": 388179873,
        "descHash": 606329007
      },
      {
        "nameHash": 1454042537,
        "descHash": 2773207751
      },
      {
        "nameHash": 3785958321,
        "descHash": 1811613895
      },
      {
        "nameHash": 243639329,
        "descHash": 655434095
      },
      {
        "nameHash": 1456237985,
        "descHash": 1392516727
      }
    ],
    "energySkill": {
      "nameHash": 2926659693,
      "descHash": 3521541160
    },
    "skills": [
      {
        "nameHash": 1361102277,
        "descHash": 989342840
      },
      {
        "nameHash": 2328467573,
        "descHash": 293117848
      }
    ],
    "passives": [
      {
        "nameHash": 3698199485,
        "descHash": 1229898787
      },
      {
        "nameHash": 3159951405,
        "descHash": 1235554483
      },
      {
        "nameHash": 4097525341,
        "descHash": 1381757851
      }
    ]
  },
  {
    "id": 10000036,
    "weaponType": "claymore",
    "titleHash": 2804590466,
    "detailHash": 3590770538,
    "constellationHash": 4203973938,
    "rarity": 4,
    "vision": "cryo",
    "nameId": "chongyun",
    "nameHash": 2876340530,
    "descHash": 572700337,
    "constellations": [
      {
        "nameHash": 1859111849,
        "descHash": 3874733319
      },
      {
        "nameHash": 1016771721,
        "descHash": 1537894911
      },
      {
        "nameHash": 294514897,
        "descHash": 1615074199
      },
      {
        "nameHash": 1282888193,
        "descHash": 461481359
      },
      {
        "nameHash": 1493556457,
        "descHash": 3819808039
      },
      {
        "nameHash": 3391919345,
        "descHash": 121953951
      }
    ],
    "energySkill": {
      "nameHash": 514253413,
      "descHash": 3537624992
    },
    "skills": [
      {
        "nameHash": 1917853333,
        "descHash": 588212448
      },
      {
        "nameHash": 1241562797,
        "descHash": 543360552
      }
    ],
    "passives": [
      {
        "nameHash": 1471902469,
        "descHash": 2917701275
      },
      {
        "nameHash": 2188306525,
        "descHash": 1400289131
      },
      {
        "nameHash": 1722331629,
        "descHash": 225068227
      }
    ]
  },
  {
    "id": 10000037,
    "weaponType": "bow",
    "titleHash": 1902407402,
    "detailHash": 1747000882,
    "constellationHash": 3362074034,
    "rarity": 5,
    "vision": "cryo",
    "nameId": "ganyu",
    "nameHash": 2679781122,
    "descHash": 313187777,
    "constellations": [
      {
        "nameHash": 2361723385,
        "descHash": 975174791
      },
      {
        "nameHash": 1383329801,
        "descHash": 3346118319
      },
      {
        "nameHash": 3222345473,
        "descHash": 2569532143
      },
      {
        "nameHash": 3290499593,
        "descHash": 1565817023
      },
      {
        "nameHash": 1752707929,
        "descHash": 1288501871
      },
      {
        "nameHash": 37217545,
        "descHash": 3563825719
      }
    ],
    "energySkill": {
      "nameHash": 683098317,
      "descHash": 1897366776
    },
    "skills": [
      {
        "nameHash": 798389461,
        "descHash": 3036547760
      },
      {
        "nameHash": 1812426093,
        "descHash": 2539067016
      }
    ],
    "passives": [
      {
        "nameHash": 3611339165,
        "descHash": 931735291
      },
      {
        "nameHash": 760610189,
        "descHash": 218500755
      },
      {
        "nameHash": 4278043437,
        "descHash": 2590341483
      }
    ]
  },
  {
    "id": 10000038,
    "weaponType": "sword",
    "titleHash": 3646853002,
    "detailHash": 3002069946,
    "constellationHash": 4143774770,
    "rarity": 5,
    "vision": "geo",
    "nameId": "albedo",
    "nameHash": 4108620722,
    "descHash": 3544652497,
    "constellations": [
      {
        "nameHash": 4171208737,
        "descHash": 3462874567
      },
      {
        "nameHash": 151370681,
        "descHash": 2243530431
      },
      {
        "nameHash": 625211161,
        "descHash": 4113451831
      },
      {
        "nameHash": 1728244745,
        "descHash": 1431711711
      },
      {
        "nameHash": 3896567129,
        "descHash": 3779396687
      },
      {
        "nameHash": 3605875457,
        "descHash": 2084479351
      }
    ],
    "energySkill": {
      "nameHash": 1170150789,
      "descHash": 4198905856
    },
    "skills": [
      {
        "nameHash": 1763139317,
        "descHash": 3484591568
      },
      {
        "nameHash": 4277075117,
        "descHash": 706635616
      }
    ],
    "passives": [
      {
        "nameHash": 1581011589,
        "descHash": 654921947
      },
      {
        "nameHash": 442320245,
        "descHash": 1378375771
      },
      {
        "nameHash": 2878058053,
        "descHash": 810427107
      }
    ]
  },
  {
    "id": 10000039,
    "weaponType": "bow",
    "titleHash": 955121114,
    "detailHash": 3267731642,
    "constellationHash": 2062356506,
    "rarity": 4,
    "vision": "cryo",
    "nameId": "diona",
    "nameHash": 1468367538,
    "descHash": 3149724857,
    "constellations": [
      {
        "nameHash": 2653503505,
        "descHash": 1358209303
      },
      {
        "nameHash": 3233494081,
        "descHash": 2723142055
      },
      {
        "nameHash": 1153113417,
        "descHash": 266501231
      },
      {
        "nameHash": 389925129,
        "descHash": 1880884495
      },
      {
        "nameHash": 2582391273,
        "descHash": 859024503
      },
      {
        "nameHash": 3637405321,
        "descHash": 1673554303
      }
    ],
    "energySkill": {
      "nameHash": 948563965,
      "descHash": 56887240
    },
    "skills": [
      {
        "nameHash": 3860542709,
        "descHash": 55456664
      },
      {
        "nameHash": 3942666181,
        "descHash": 3246576584
      }
    ],
    "passives": [
      {
        "nameHash": 3742754573,
        "descHash": 3924394963
      },
      {
        "nameHash": 184677189,
        "descHash": 907839219
      },
      {
        "nameHash": 2478336245,
        "descHash": 2768580979
      }
    ]
  },
  {
    "id": 10000041,
    "weaponType": "catalyst",
    "titleHash": 2216682674,
    "detailHash": 2099446386,
    "constellationHash": 677289434,
    "rarity": 5,
    "vision": "hydro",
    "nameId": "mona",
    "nameHash": 1113306282,
    "descHash": 506249649,
    "constellations": [
      {
        "nameHash": 3262519193,
        "descHash": 452602631
      },
      {
        "nameHash": 3030801713,
        "descHash": 2775748423
      },
      {
        "nameHash": 3782923609,
        "descHash": 4292322247
      },
      {
        "nameHash": 488631345,
        "descHash": 4223850175
      },
      {
        "nameHash": 496658001,
        "descHash": 167333135
      },
      {
        "nameHash": 300946497,
        "descHash": 2932631807
      }
    ],
    "energySkill": {
      "nameHash": 3616116589,
      "descHash": 3902311160
    },
    "skills": [
      {
        "nameHash": 2512572181,
        "descHash": 239283280
      },
      {
        "nameHash": 1125648053,
        "descHash": 3421937592
      },
      {
        "nameHash": 1057341493,
        "descHash": 3378550992
      }
    ],
    "passives": [
      {
        "nameHash": 2516099965,
        "descHash": 1706572851
      },
      {
        "nameHash": 1413844365,
        "descHash": 3379482011
      },
      {
        "nameHash": 3413416829,
        "descHash": 1213329395
      }
    ]
  },
  {
    "id": 10000042,
    "weaponType": "sword",
    "titleHash": 3308312162,
    "detailHash": 2307865106,
    "constellationHash": 3587152074,
    "rarity": 5,
    "vision": "electro",
    "nameId": "keqing",
    "nameHash": 1864015138,
    "descHash": 2249961857,
    "constellations": [
      {
        "nameHash": 3733936569,
        "descHash": 2584168503
      },
      {
        "nameHash": 1003272937,
        "descHash": 2875204959
      },
      {
        "nameHash": 1005679025,
        "descHash": 1530917495
      },
      {
        "nameHash": 2598965033,
        "descHash": 2256041831
      },
      {
        "nameHash": 1939891865,
        "descHash": 1494899271
      },
      {
        "nameHash": 547902305,
        "descHash": 1142266335
      }
    ],
    "energySkill": {
      "nameHash": 535180037,
      "descHash": 3277139448
    },
    "skills": [
      {
        "nameHash": 1732155229,
        "descHash": 3229237400
      },
      {
        "nameHash": 2146753981,
        "descHash": 990496552
      }
    ],
    "passives": [
      {
        "nameHash": 3756056829,
        "descHash": 269863707
      },
      {
        "nameHash": 389797077,
        "descHash": 3833281507
      },
      {
        "nameHash": 3655777485,
        "descHash": 4104953003
      }
    ]
  },
  {
    "id": 10000043,
    "weaponType": "catalyst",
    "titleHash": 682411194,
    "detailHash": 4125000058,
    "constellationHash": 4244741386,
    "rarity": 4,
    "vision": "anemo",
    "nameId": "sucrose",
    "nameHash": 1053433018,
    "descHash": 4249311673,
    "constellations": [
      {
        "nameHash": 1387979801,
        "descHash": 659439671
      },
      {
        "nameHash": 412718689,
        "descHash": 393014655
      },
      {
        "nameHash": 3504453161,
        "descHash": 3346841599
      },
      {
        "nameHash": 2203237409,
        "descHash": 1019396935
      },
      {
        "nameHash": 1605290329,
        "descHash": 901461951
      },
      {
        "nameHash": 344305449,
        "descHash": 4078577031
      }
    ],
    "energySkill": {
      "nameHash": 234765309,
      "descHash": 2314820896
    },
    "skills": [
      {
        "nameHash": 3941337549,
        "descHash": 897873448
      },
      {
        "nameHash": 159360653,
        "descHash": 3348243704
      }
    ],
    "passives": [
      {
        "nameHash": 2797937013,
        "descHash": 1686676419
      },
      {
        "nameHash": 3490252853,
        "descHash": 4161226819
      },
      {
        "nameHash": 197407101,
        "descHash": 2984501507
      }
    ]
  },
  {
    "id": 10000044,
    "weaponType": "claymore",
    "titleHash": 2007781754,
    "detailHash": 3355473986,
    "constellationHash": 4126360330,
    "rarity": 4,
    "vision": "pyro",
    "nameId": "xinyan",
    "nameHash": 4273845410,
    "descHash": 2430683361,
    "constellations": [
      {
        "nameHash": 3068951001,
        "descHash": 3151757471
      },
      {
        "nameHash": 2247567929,
        "descHash": 4058915415
      },
      {
        "nameHash": 3545262929,
        "descHash": 4067254263
      },
      {
        "nameHash": 3472180281,
        "descHash": 630340871
      },
      {
        "nameHash": 3343552585,
        "descHash": 1190369383
      },
      {
        "nameHash": 2632855681,
        "descHash": 1450102367
      }
    ],
    "energySkill": {
      "nameHash": 405900781,
      "descHash": 1175339880
    },
    "skills": [
      {
        "nameHash": 327566445,
        "descHash": 1969995312
      },
      {
        "nameHash": 980327173,
        "descHash": 3704294280
      }
    ],
    "passives": [
      {
        "nameHash": 3137818373,
        "descHash": 1844902995
      },
      {
        "nameHash": 2516474765,
        "descHash": 3964569155
      },
      {
        "nameHash": 2639347341,
        "descHash": 1386621859
      }
    ]
  },
  {
    "id": 10000045,
    "weaponType": "polearm",
    "titleHash": 3918225546,
    "detailHash": 2858258162,
    "constellationHash": 3331210802,
    "rarity": 4,
    "vision": "cryo",
    "nameId": "rosaria",
    "nameHash": 4260733330,
    "descHash": 1025256649,
    "constellations": [
      {
        "nameHash": 1747862233,
        "descHash": 3325524863
      },
      {
        "nameHash": 3870318265,
        "descHash": 1426432255
      },
      {
        "nameHash": 3057954913,
        "descHash": 3853272615
      },
      {
        "nameHash": 1072343465,
        "descHash": 1502603863
      },
      {
        "nameHash": 1802655737,
        "descHash": 2207642951
      },
      {
        "nameHash": 3739872265,
        "descHash": 1651444399
      }
    ],
    "energySkill": {
      "nameHash": 3067800421,
      "descHash": 2194551560
    },
    "skills": [
      {
        "nameHash": 37074469,
        "descHash": 1514818096
      },
      {
        "nameHash": 2398605029,
        "descHash": 1467181408
      }
    ],
    "passives": [
      {
        "nameHash": 1821354965,
        "descHash": 978610771
      },
      {
        "nameHash": 3761750205,
        "descHash": 311863307
      },
      {
        "nameHash": 1285745693,
        "descHash": 3191921099
      }
    ]
  },
  {
    "id": 10000046,
    "weaponType": "polearm",
    "titleHash": 662587002,
    "detailHash": 2488599434,
    "constellationHash": 3041688594,
    "rarity": 5,
    "vision": "pyro",
    "nameId": "hu_tao",
    "nameHash": 1940919994,
    "descHash": 223073489,
    "constellations": [
      {
        "nameHash": 2081199193,
        "descHash": 67778231
      },
      {
        "nameHash": 1768747369,
        "descHash": 3620258903
      },
      {
        "nameHash": 3111083697,
        "descHash": 3057870071
      },
      {
        "nameHash": 4276933609,
        "descHash": 3695286279
      },
      {
        "nameHash": 658527361,
        "descHash": 2735458983
      },
      {
        "nameHash": 2361886209,
        "descHash": 3811817239
      }
    ],
    "energySkill": {
      "nameHash": 1115787101,
      "descHash": 4072387376
    },
    "skills": [
      {
        "nameHash": 2345944629,
        "descHash": 2233988720
      },
      {
        "nameHash": 214248165,
        "descHash": 3772368888
      }
    ],
    "passives": [
      {
        "nameHash": 2050097581,
        "descHash": 1251434283
      },
      {
        "nameHash": 2294463397,
        "descHash": 3730912435
      },
      {
        "nameHash": 1749668397,
        "descHash": 3062891747
      }
    ]
  },
  {
    "id": 10000047,
    "weaponType": "sword",
    "titleHash": 484877954,
    "detailHash": 3202001138,
    "constellationHash": 1782640050,
    "rarity": 5,
    "vision": "anemo",
    "nameId": "kaedehara_kazuha",
    "nameHash": 88505754,
    "descHash": 174508593,
    "constellations": [
      {
        "nameHash": 2040563073,
        "descHash": 3794647287
      },
      {
        "nameHash": 7765353,
        "descHash": 57094423
      },
      {
        "nameHash": 2202533753,
        "descHash": 190411063
      },
      {
        "nameHash": 2888381665,
        "descHash": 2322280143
      },
      {
        "nameHash": 4207271041,
        "descHash": 4023044479
      },
      {
        "nameHash": 234189249,
        "descHash": 2071805463
      }
    ],
    "energySkill": {
      "nameHash": 2015878197,
      "descHash": 1543060392
    },
    "skills": [
      {
        "nameHash": 137786925,
        "descHash": 1020885688
      },
      {
        "nameHash": 3645237197,
        "descHash": 3589501064
      }
    ],
    "passives": [
      {
        "nameHash": 1573553381,
        "descHash": 1770302715
      },
      {
        "nameHash": 138639933,
        "descHash": 1440993195
      },
      {
        "nameHash": 2537361669,
        "descHash": 1222696027
      }
    ]
  },
  {
    "id": 10000048,
    "weaponType": "catalyst",
    "titleHash": 1186691770,
    "detailHash": 1570282706,
    "constellationHash": 4078029322,
    "rarity": 4,
    "vision": "pyro",
    "nameId": "yanfei",
    "nameHash": 697277554,
    "descHash": 1827440433,
    "constellations": [
      {
        "nameHash": 690499809,
        "descHash": 3765119039
      },
      {
        "nameHash": 886053825,
        "descHash": 821476695
      },
      {
        "nameHash": 168010785,
        "descHash": 246599983
      },
      {
        "nameHash": 2878639121,
        "descHash": 1661753439
      },
      {
        "nameHash": 3698266505,
        "descHash": 876690903
      },
      {
        "nameHash": 3677492353,
        "descHash": 2987376519
      }
    ],
    "energySkill": {
      "nameHash": 3041237813,
      "descHash": 867292376
    },
    "skills": [
      {
        "nameHash": 2553270533,
        "descHash": 2964053104
      },
      {
        "nameHash": 4230930285,
        "descHash": 37336040
      }
    ],
    "passives": [
      {
        "nameHash": 3896657501,
        "descHash": 3007454043
      },
      {
        "nameHash": 3992511069,
        "descHash": 3308737507
      },
      {
        "nameHash": 1046409877,
        "descHash": 3547895363
      }
    ]
  },
  {
    "id": 10000049,
    "weaponType": "bow",
    "titleHash": 422431338,
    "detailHash": 77669938,
    "constellationHash": 1841952946,
    "rarity": 5,
    "vision": "pyro",
    "nameId": "yoimiya",
    "nameHash": 2504399314,
    "descHash": 1813152017,
    "constellations": [
      {
        "nameHash": 106208137,
        "descHash": 3438911311
      },
      {
        "nameHash": 3836801473,
        "descHash": 2102275567
      },
      {
        "nameHash": 3467544337,
        "descHash": 3229313215
      },
      {
        "nameHash": 2352994657,
        "descHash": 2299629615
      },
      {
        "nameHash": 3785597649,
        "descHash": 1007404639
      },
      {
        "nameHash": 3248653433,
        "descHash": 1202044591
      }
    ],
    "energySkill": {
      "nameHash": 4251575685,
      "descHash": 1220046344
    },
    "skills": [
      {
        "nameHash": 1887244733,
        "descHash": 672946912
      },
      {
        "nameHash": 3119836125,
        "descHash": 3354049592
      }
    ],
    "passives": [
      {
        "nameHash": 539964053,
        "descHash": 3580171643
      },
      {
        "nameHash": 1567653061,
        "descHash": 2717127555
      },
      {
        "nameHash": 964826125,
        "descHash": 953360891
      }
    ]
  },
  {
    "id": 10000050,
    "weaponType": "polearm",
    "titleHash": 2157757826,
    "detailHash": 3621848770,
    "constellationHash": 2749427906,
    "rarity": 4,
    "vision": "pyro",
    "nameId": "thoma",
    "nameHash": 3555115602,
    "descHash": 3062484009,
    "constellations": [
      {
        "nameHash": 288006665,
        "descHash": 3077252167
      },
      {
        "nameHash": 4132403369,
        "descHash": 1866802871
      },
      {
        "nameHash": 2578792073,
        "descHash": 2167442199
      },
      {
        "nameHash": 1754888249,
        "descHash": 976028519
      },
      {
        "nameHash": 3609710361,
        "descHash": 1553651527
      },
      {
        "nameHash": 297689921,
        "descHash": 2142833663
      }
    ],
    "energySkill": {
      "nameHash": 3548079181,
      "descHash": 3214600680
    },
    "skills": [
      {
        "nameHash": 3651752365,
        "descHash": 3009612584
      },
      {
        "nameHash": 3732507581,
        "descHash": 432172712
      }
    ],
    "passives": [
      {
        "nameHash": 2361872037,
        "descHash": 1069705163
      },
      {
        "nameHash": 4028465645,
        "descHash": 4029622747
      },
      {
        "nameHash": 1914527421,
        "descHash": 2521602571
      }
    ]
  },
  {
    "id": 10000051,
    "weaponType": "claymore",
    "titleHash": 3679187618,
    "detailHash": 87994090,
    "constellationHash": 2912362594,
    "rarity": 5,
    "vision": "cryo",
    "nameId": "eula",
    "nameHash": 3717667418,
    "descHash": 490802649,
    "constellations": [
      {
        "nameHash": 1401913601,
        "descHash": 1142115463
      },
      {
        "nameHash": 4116602505,
        "descHash": 2873233407
      },
      {
        "nameHash": 4017023737,
        "descHash": 3953679079
      },
      {
        "nameHash": 260126841,
        "descHash": 2211149663
      },
      {
        "nameHash": 3295716345,
        "descHash": 4202659807
      },
      {
        "nameHash": 1963500825,
        "descHash": 658737255
      }
    ],
    "energySkill": {
      "nameHash": 3521320029,
      "descHash": 569748832
    },
    "skills": [
      {
        "nameHash": 242311157,
        "descHash": 1500184616
      },
      {
        "nameHash": 741315613,
        "descHash": 1769739528
      }
    ],
    "passives": [
      {
        "nameHash": 1425537069,
        "descHash": 2607513067
      },
      {
        "nameHash": 1966610773,
        "descHash": 236148939
      },
      {
        "nameHash": 4003186445,
        "descHash": 2270889547
      }
    ]
  },
  {
    "id": 10000052,
    "weaponType": "polearm",
    "titleHash": 3922655010,
    "detailHash": 1478158106,
    "constellationHash": 2211667090,
    "rarity": 5,
    "vision": "electro",
    "nameId": "raiden_shogun",
    "nameHash": 3024507506,
    "descHash": 553307289,
    "constellations": [
      {
        "nameHash": 1241899985,
        "descHash": 705509495
      },
      {
        "nameHash": 2594998721,
        "descHash": 4099832223
      },
      {
        "nameHash": 250956849,
        "descHash": 3261842327
      },
      {
        "nameHash": 1996396257,
        "descHash": 4043363607
      },
      {
        "nameHash": 361792665,
        "descHash": 1503284487
      },
      {
        "nameHash": 1600914409,
        "descHash": 1732565431
      }
    ],
    "energySkill": {
      "nameHash": 725251661,
      "descHash": 2620797824
    },
    "skills": [
      {
        "nameHash": 1302153717,
        "descHash": 2745803944
      },
      {
        "nameHash": 1312969485,
        "descHash": 3829407712
      }
    ],
    "passives": [
      {
        "nameHash": 4015874637,
        "descHash": 3034837563
      },
      {
        "nameHash": 1211449733,
        "descHash": 4258620891
      },
      {
        "nameHash": 3357434469,
        "descHash": 2267129547
      }
    ]
  },
  {
    "id": 10000053,
    "weaponType": "claymore",
    "titleHash": 1757728074,
    "detailHash": 4079111402,
    "constellationHash": 3872411226,
    "rarity": 4,
    "vision": "anemo",
    "nameId": "sayu",
    "nameHash": 2388785242,
    "descHash": 3029516969,
    "constellations": [
      {
        "nameHash": 1959569841,
        "descHash": 443786623
      },
      {
        "nameHash": 2759348737,
        "descHash": 2039052767
      },
      {
        "nameHash": 1035025377,
        "descHash": 2151111671
      },
      {
        "nameHash": 3582154129,
        "descHash": 2015470223
      },
      {
        "nameHash": 4066463977,
        "descHash": 3761904935
      },
      {
        "nameHash": 3913839841,
        "descHash": 3551240383
      }
    ],
    "energySkill": {
      "nameHash": 3632447629,
      "descHash": 2950233224
    },
    "skills": [
      {
        "nameHash": 1631640581,
        "descHash": 1904361664
      },
      {
        "nameHash": 866970125,
        "descHash": 2361803880
      }
    ],
    "passives": [
      {
        "nameHash": 1284587621,
        "descHash": 1766003643
      },
      {
        "nameHash": 3662642061,
        "descHash": 3244306483
      },
      {
        "nameHash": 1990554101,
        "descHash": 356439491
      }
    ]
  },
  {
    "id": 10000054,
    "weaponType": "catalyst",
    "titleHash": 3706226538,
    "detailHash": 1510500586,
    "constellationHash": 1752197778,
    "rarity": 5,
    "vision": "hydro",
    "nameId": "sangonomiya_kokomi",
    "nameHash": 3914045794,
    "descHash": 505027577,
    "constellations": [
      {
        "nameHash": 693089601,
        "descHash": 448795879
      },
      {
        "nameHash": 3826006561,
        "descHash": 2419325143
      },
      {
        "nameHash": 2416690001,
        "descHash": 3060614847
      },
      {
        "nameHash": 1493731113,
        "descHash": 387385127
      },
      {
        "nameHash": 2584265937,
        "descHash": 421479455
      },
      {
        "nameHash": 652576049,
        "descHash": 2604721911
      }
    ],
    "energySkill": {
      "nameHash": 2835602565,
      "descHash": 2542344080
    },
    "skills": [
      {
        "nameHash": 3150512989,
        "descHash": 3761647400
      },
      {
        "nameHash": 369441117,
        "descHash": 1340059768
      }
    ],
    "passives": [
      {
        "nameHash": 867237797,
        "descHash": 2444155491
      },
      {
        "nameHash": 165346429,
        "descHash": 460145995
      },
      {
        "nameHash": 2492336389,
        "descHash": 2540173555
      },
      {
        "nameHash": 1396546717,
        "descHash": 1376470603
      }
    ]
  },
  {
    "id": 10000055,
    "weaponType": "bow",
    "titleHash": 1890326034,
    "detailHash": 194478258,
    "constellationHash": 1574145170,
    "rarity": 4,
    "vision": "geo",
    "nameId": "gorou",
    "nameHash": 3400133546,
    "descHash": 2692321673,
    "constellations": [
      {
        "nameHash": 674796161,
        "descHash": 438942695
      },
      {
        "nameHash": 879885745,
        "descHash": 2750519095
      },
      {
        "nameHash": 1718191057,
        "descHash": 3711276975
      },
      {
        "nameHash": 3990139889,
        "descHash": 2595428727
      },
      {
        "nameHash": 1205827537,
        "descHash": 1584361191
      },
      {
        "nameHash": 3335516265,
        "descHash": 622715863
      }
    ],
    "energySkill": {
      "nameHash": 406282597,
      "descHash": 1236862952
    },
    "skills": [
      {
        "nameHash": 527760517,
        "descHash": 2178965904
      },
      {
        "nameHash": 2527853093,
        "descHash": 1410062040
      }
    ],
    "passives": [
      {
        "nameHash": 574868277,
        "descHash": 1439744475
      },
      {
        "nameHash": 787754445,
        "descHash": 175486939
      },
      {
        "nameHash": 705002701,
        "descHash": 291298051
      }
    ]
  },
  {
    "id": 10000056,
    "weaponType": "bow",
    "titleHash": 2295939930,
    "detailHash": 3576556674,
    "constellationHash": 912981282,
    "rarity": 4,
    "vision": "electro",
    "nameId": "kujou_sara",
    "nameHash": 1483922610,
    "descHash": 148777793,
    "constellations": [
      {
        "nameHash": 2730852953,
        "descHash": 2966673567
      },
      {
        "nameHash": 828426713,
        "descHash": 3371927015
      },
      {
        "nameHash": 847916265,
        "descHash": 1002234751
      },
      {
        "nameHash": 4283074321,
        "descHash": 3556395063
      },
      {
        "nameHash": 747301089,
        "descHash": 3457909759
      },
      {
        "nameHash": 165492609,
        "descHash": 3985105143
      }
    ],
    "energySkill": {
      "nameHash": 2275338309,
      "descHash": 1189895712
    },
    "skills": [
      {
        "nameHash": 1547762373,
        "descHash": 4139104344
      },
      {
        "nameHash": 2752568269,
        "descHash": 4167203120
      }
    ],
    "passives": [
      {
        "nameHash": 3514401477,
        "descHash": 701827235
      },
      {
        "nameHash": 2365582789,
        "descHash": 138769971
      },
      {
        "nameHash": 3504701645,
        "descHash": 3436263651
      }
    ]
  },
  {
    "id": 10000057,
    "weaponType": "claymore",
    "titleHash": 2604770706,
    "detailHash": 1595289146,
    "constellationHash": 1196020994,
    "rarity": 5,
    "vision": "geo",
    "nameId": "arataki_itto",
    "nameHash": 3068316954,
    "descHash": 3512498385,
    "constellations": [
      {
        "nameHash": 1236864529,
        "descHash": 2717145007
      },
      {
        "nameHash": 2007985425,
        "descHash": 3672317095
      },
      {
        "nameHash": 4058778385,
        "descHash": 2337487487
      },
      {
        "nameHash": 351727225,
        "descHash": 574002791
      },
      {
        "nameHash": 2178273601,
        "descHash": 3097963231
      },
      {
        "nameHash": 2138862273,
        "descHash": 3956713543
      }
    ],
    "energySkill": {
      "nameHash": 3385637213,
      "descHash": 1268643616
    },
    "skills": [
      {
        "nameHash": 1791467005,
        "descHash": 2321318320
      },
      {
        "nameHash": 1142785501,
        "descHash": 1842558776
      }
    ],
    "passives": [
      {
        "nameHash": 2760962061,
        "descHash": 2529397811
      },
      {
        "nameHash": 2838534445,
        "descHash": 855434523
      },
      {
        "nameHash": 2444677501,
        "descHash": 3981724819
      }
    ]
  },
  {
    "id": 10000058,
    "weaponType": "catalyst",
    "titleHash": 1488134754,
    "detailHash": 458309866,
    "constellationHash": 2170266186,
    "rarity": 5,
    "vision": "electro",
    "nameId": "yae_miko",
    "nameHash": 2713453234,
    "descHash": 1170085417,
    "constellations": [
      {
        "nameHash": 2281393129,
        "descHash": 3672936767
      },
      {
        "nameHash": 2254983737,
        "descHash": 1386782575
      },
      {
        "nameHash": 516586793,
        "descHash": 509551311
      },
      {
        "nameHash": 1524489289,
        "descHash": 580900487
      },
      {
        "nameHash": 3181299049,
        "descHash": 2441345199
      },
      {
        "nameHash": 913339777,
        "descHash": 2127512239
      }
    ],
    "energySkill": {
      "nameHash": 3675029365,
      "descHash": 1743360824
    },
    "skills": [
      {
        "nameHash": 3966360853,
        "descHash": 976224872
      },
      {
        "nameHash": 823035501,
        "descHash": 1814358328
      }
    ],
    "passives": [
      {
        "nameHash": 4293081189,
        "descHash": 3689732219
      },
      {
        "nameHash": 1210172149,
        "descHash": 886862779
      },
      {
        "nameHash": 294064029,
        "descHash": 1058193419
      }
    ]
  },
  {
    "id": 10000059,
    "weaponType": "catalyst",
    "titleHash": 4014506362,
    "detailHash": 1643709354,
    "constellationHash": 536290178,
    "rarity": 4,
    "vision": "anemo",
    "nameId": "shikanoin_heizou",
    "nameHash": 646032090,
    "descHash": 3971624201,
    "constellations": [
      {
        "nameHash": 1159663785,
        "descHash": 2455515991
      },
      {
        "nameHash": 286623921,
        "descHash": 3972074095
      },
      {
        "nameHash": 2470569577,
        "descHash": 2770450111
      },
      {
        "nameHash": 501887121,
        "descHash": 1412115951
      },
      {
        "nameHash": 298040329,
        "descHash": 4071192391
      },
      {
        "nameHash": 2921909753,
        "descHash": 757878495
      }
    ],
    "energySkill": {
      "nameHash": 3584687669,
      "descHash": 2838062416
    },
    "skills": [
      {
        "nameHash": 2195671413,
        "descHash": 1669209888
      },
      {
        "nameHash": 3012298293,
        "descHash": 2688600376
      }
    ],
    "passives": [
      {
        "nameHash": 1259547077,
        "descHash": 1686165531
      },
      {
        "nameHash": 834687325,
        "descHash": 2886727987
      },
      {
        "nameHash": 2266183085,
        "descHash": 3003364227
      }
    ]
  },
  {
    "id": 10000060,
    "weaponType": "bow",
    "titleHash": 144441626,
    "detailHash": 2989616018,
    "constellationHash": 1929498690,
    "rarity": 5,
    "vision": "hydro",
    "nameId": "yelan",
    "nameHash": 2848374378,
    "descHash": 2689854257,
    "constellations": [
      {
        "nameHash": 748294089,
        "descHash": 3598001479
      },
      {
        "nameHash": 1030894625,
        "descHash": 1733458319
      },
      {
        "nameHash": 2703450625,
        "descHash": 887338575
      },
      {
        "nameHash": 2029790617,
        "descHash": 2426727055
      },
      {
        "nameHash": 2362082321,
        "descHash": 2488367639
      },
      {
        "nameHash": 1272265729,
        "descHash": 824672567
      }
    ],
    "energySkill": {
      "nameHash": 4098371861,
      "descHash": 1896068072
    },
    "skills": [
      {
        "nameHash": 1713742645,
        "descHash": 2537126376
      },
      {
        "nameHash": 890827533,
        "descHash": 1089734336
      }
    ],
    "passives": [
      {
        "nameHash": 2010349533,
        "descHash": 3218137499
      },
      {
        "nameHash": 1181356845,
        "descHash": 1408090907
      },
      {
        "nameHash": 4230029053,
        "descHash": 3143097979
      }
    ]
  },
  {
    "id": 10000061,
    "weaponType": "sword",
    "titleHash": 3294635634,
    "detailHash": 882707162,
    "constellationHash": 1610912066,
    "rarity": 4,
    "vision": "dendro",
    "nameId": "kirara",
    "nameHash": 1456643042,
    "descHash": 3108007489,
    "constellations": [
      {
        "nameHash": 3502158873,
        "descHash": 1368346599
      },
      {
        "nameHash": 3954516065,
        "descHash": 2538080919
      },
      {
        "nameHash": 3397892401,
        "descHash": 3218345863
      },
      {
        "nameHash": 3551684865,
        "descHash": 2912087495
      },
      {
        "nameHash": 34942769,
        "descHash": 2975759831
      },
      {
        "nameHash": 2439940993,
        "descHash": 335597623
      }
    ],
    "energySkill": {
      "nameHash": 2543392221,
      "descHash": 2438885328
    },
    "skills": [
      {
        "nameHash": 2089915453,
        "descHash": 288912712
      },
      {
        "nameHash": 3512914781,
        "descHash": 2238189056
      }
    ],
    "passives": [
      {
        "nameHash": 4017209669,
        "descHash": 4023198939
      },
      {
        "nameHash": 2101970181,
        "descHash": 2938529283
      },
      {
        "nameHash": 3092482013,
        "descHash": 1887945779
      }
    ]
  },
  {
    "id": 10000062,
    "weaponType": "bow",
    "titleHash": 3657688538,
    "detailHash": 2522784722,
    "constellationHash": 1620998442,
    "rarity": 4,
    "vision": "cryo",
    "nameId": "aloy",
    "nameHash": 3689108098,
    "descHash": 2468599457,
    "constellations": [
      {
        "nameHash": 1426348289,
        "descHash": 4200726279
      },
      {
        "nameHash": 3468411401,
        "descHash": 1371842791
      },
      {
        "nameHash": 2621661209,
        "descHash": 873529775
      },
      {
        "nameHash": 890048705,
        "descHash": 2073552343
      },
      {
        "nameHash": 2013072401,
        "descHash": 554591055
      },
      {
        "nameHash": 3578739209,
        "descHash": 1335613687
      }
    ],
    "energySkill": {
      "nameHash": 902219717,
      "descHash": 3360208896
    },
    "skills": [
      {
        "nameHash": 2994648485,
        "descHash": 3151277984
      },
      {
        "nameHash": 1871687965,
        "descHash": 647988592
      }
    ],
    "passives": [
      {
        "nameHash": 523305877,
        "descHash": 3940970907
      },
      {
        "nameHash": 433318997,
        "descHash": 4257487235
      },
      {
        "nameHash": 3414124565,
        "descHash": 3074893395
      }
    ]
  },
  {
    "id": 10000063,
    "weaponType": "polearm",
    "titleHash": 1527983530,
    "detailHash": 1428853842,
    "constellationHash": 2040902610,
    "rarity": 5,
    "vision": "cryo",
    "nameId": "shenhe",
    "nameHash": 334242634,
    "descHash": 373064729,
    "constellations": [
      {
        "nameHash": 4149849577,
        "descHash": 1344815239
      },
      {
        "nameHash": 865989105,
        "descHash": 626517111
      },
      {
        "nameHash": 1441248001,
        "descHash": 552199
      },
      {
        "nameHash": 2316341393,
        "descHash": 3717716927
      },
      {
        "nameHash": 2221287353,
        "descHash": 3627816983
      },
      {
        "nameHash": 1596851281,
        "descHash": 2857247287
      }
    ],
    "energySkill": {
      "nameHash": 207401861,
      "descHash": 1476893920
    },
    "skills": [
      {
        "nameHash": 2933047013,
        "descHash": 3127230504
      },
      {
        "nameHash": 3028595085,
        "descHash": 917615616
      }
    ],
    "passives": [
      {
        "nameHash": 3816902837,
        "descHash": 1196405195
      },
      {
        "nameHash": 3169168565,
        "descHash": 2828541003
      },
      {
        "nameHash": 1867531237,
        "descHash": 3605696435
      }
    ]
  },
  {
    "id": 10000064,
    "weaponType": "polearm",
    "titleHash": 1737472474,
    "detailHash": 2551483266,
    "constellationHash": 3086360386,
    "rarity": 4,
    "vision": "geo",
    "nameId": "yun_jin",
    "nameHash": 655825874,
    "descHash": 4037633993,
    "constellations": [
      {
        "nameHash": 3266663729,
        "descHash": 196548151
      },
      {
        "nameHash": 3949157249,
        "descHash": 1258924591
      },
      {
        "nameHash": 3536888569,
        "descHash": 26925591
      },
      {
        "nameHash": 2785617601,
        "descHash": 2804375063
      },
      {
        "nameHash": 1985942201,
        "descHash": 1265824527
      },
      {
        "nameHash": 2696040833,
        "descHash": 3355249799
      }
    ],
    "energySkill": {
      "nameHash": 3248431565,
      "descHash": 1997720160
    },
    "skills": [
      {
        "nameHash": 4286587805,
        "descHash": 1810789288
      },
      {
        "nameHash": 2178272253,
        "descHash": 1567883432
      }
    ],
    "passives": [
      {
        "nameHash": 2061261821,
        "descHash": 1764840187
      },
      {
        "nameHash": 1468378453,
        "descHash": 3288929659
      },
      {
        "nameHash": 773398885,
        "descHash": 1415116931
      }
    ]
  },
  {
    "id": 10000065,
    "weaponType": "sword",
    "titleHash": 1098938354,
    "detailHash": 1310009266,
    "constellationHash": 1722980498,
    "rarity": 4,
    "vision": "electro",
    "nameId": "kuki_shinobu",
    "nameHash": 1940821986,
    "descHash": 738455441,
    "constellations": [
      {
        "nameHash": 3845919769,
        "descHash": 248122007
      },
      {
        "nameHash": 1476645953,
        "descHash": 1650156031
      },
      {
        "nameHash": 969784713,
        "descHash": 1031038967
      },
      {
        "nameHash": 1870557153,
        "descHash": 1847218111
      },
      {
        "nameHash": 2031120145,
        "descHash": 70909911
      },
      {
        "nameHash": 856483153,
        "descHash": 3252448839
      }
    ],
    "energySkill": {
      "nameHash": 1690703909,
      "descHash": 3065150096
    },
    "skills": [
      {
        "nameHash": 2013854373,
        "descHash": 3593456928
      },
      {
        "nameHash": 1345666909,
        "descHash": 4080904480
      }
    ],
    "passives": [
      {
        "nameHash": 98541941,
        "descHash": 3324442635
      },
      {
        "nameHash": 2905492469,
        "descHash": 2362024107
      },
      {
        "nameHash": 345260181,
        "descHash": 1072782803
      }
    ]
  },
  {
    "id": 10000066,
    "weaponType": "sword",
    "titleHash": 448523378,
    "detailHash": 1492104922,
    "constellationHash": 3121506370,
    "rarity": 5,
    "vision": "hydro",
    "nameId": "kamisato_ayato",
    "nameHash": 1588620330,
    "descHash": 2887592185,
    "constellations": [
      {
        "nameHash": 2715418569,
        "descHash": 501879071
      },
      {
        "nameHash": 4259062785,
        "descHash": 3191408815
      },
      {
        "nameHash": 2402833929,
        "descHash": 893583671
      },
      {
        "nameHash": 517644137,
        "descHash": 1916995439
      },
      {
        "nameHash": 993707681,
        "descHash": 2541322175
      },
      {
        "nameHash": 1168376425,
        "descHash": 2267009151
      }
    ],
    "energySkill": {
      "nameHash": 2907386981,
      "descHash": 993012864
    },
    "skills": [
      {
        "nameHash": 3116393605,
        "descHash": 3145153016
      },
      {
        "nameHash": 856237685,
        "descHash": 64942672
      }
    ],
    "passives": [
      {
        "nameHash": 3736274925,
        "descHash": 2546406659
      },
      {
        "nameHash": 8289349,
        "descHash": 1701064667
      },
      {
        "nameHash": 1590740317,
        "descHash": 720429075
      }
    ]
  },
  {
    "id": 10000067,
    "weaponType": "bow",
    "titleHash": 3714185090,
    "detailHash": 473409506,
    "constellationHash": 1135583386,
    "rarity": 4,
    "vision": "dendro",
    "nameId": "collei",
    "nameHash": 2948362178,
    "descHash": 2491093329,
    "constellations": [
      {
        "nameHash": 2655987137,
        "descHash": 838052359
      },
      {
        "nameHash": 3472492497,
        "descHash": 3024851719
      },
      {
        "nameHash": 1426971073,
        "descHash": 56316599
      },
      {
        "nameHash": 3753636729,
        "descHash": 4094592551
      },
      {
        "nameHash": 2500538945,
        "descHash": 2543166839
      },
      {
        "nameHash": 1091837217,
        "descHash": 1015584855
      }
    ],
    "energySkill": {
      "nameHash": 1430301637,
      "descHash": 744666440
    },
    "skills": [
      {
        "nameHash": 3768859965,
        "descHash": 2885504752
      },
      {
        "nameHash": 2943851901,
        "descHash": 1878895672
      }
    ],
    "passives": [
      {
        "nameHash": 78962293,
        "descHash": 1181280875
      },
      {
        "nameHash": 3603599453,
        "descHash": 1230852467
      },
      {
        "nameHash": 3064942109,
        "descHash": 1937602267
      }
    ]
  },
  {
    "id": 10000068,
    "weaponType": "claymore",
    "titleHash": 3848819674,
    "detailHash": 1490694082,
    "constellationHash": 3012601882,
    "rarity": 4,
    "vision": "electro",
    "nameId": "dori",
    "nameHash": 388272194,
    "descHash": 71570297,
    "constellations": [
      {
        "nameHash": 1156598585,
        "descHash": 2364339263
      },
      {
        "nameHash": 3136137929,
        "descHash": 683722431
      },
      {
        "nameHash": 4285795529,
        "descHash": 2003426135
      },
      {
        "nameHash": 3498425217,
        "descHash": 895973127
      },
      {
        "nameHash": 3715110481,
        "descHash": 3465489175
      },
      {
        "nameHash": 1782869129,
        "descHash": 1392847887
      }
    ],
    "energySkill": {
      "nameHash": 4155943733,
      "descHash": 3813497976
    },
    "skills": [
      {
        "nameHash": 3134128957,
        "descHash": 145589464
      },
      {
        "nameHash": 2851422357,
        "descHash": 289369624
      }
    ],
    "passives": [
      {
        "nameHash": 989380157,
        "descHash": 3162665395
      },
      {
        "nameHash": 1428982037,
        "descHash": 3100591859
      },
      {
        "nameHash": 2040369357,
        "descHash": 3283377219
      }
    ]
  },
  {
    "id": 10000069,
    "weaponType": "bow",
    "titleHash": 3265594242,
    "detailHash": 3478695082,
    "constellationHash": 18086514,
    "rarity": 5,
    "vision": "dendro",
    "nameId": "tighnari",
    "nameHash": 2506955778,
    "descHash": 2793013657,
    "constellations": [
      {
        "nameHash": 3505971089,
        "descHash": 1106096311
      },
      {
        "nameHash": 2309081673,
        "descHash": 1101606991
      },
      {
        "nameHash": 3708646913,
        "descHash": 1850244687
      },
      {
        "nameHash": 376580577,
        "descHash": 1776421039
      },
      {
        "nameHash": 3499024713,
        "descHash": 2666902391
      },
      {
        "nameHash": 2750929897,
        "descHash": 2217630895
      }
    ],
    "energySkill": {
      "nameHash": 3822928381,
      "descHash": 1756743120
    },
    "skills": [
      {
        "nameHash": 3409522557,
        "descHash": 416050040
      },
      {
        "nameHash": 3726986301,
        "descHash": 3970361016
      }
    ],
    "passives": [
      {
        "nameHash": 4268651301,
        "descHash": 2730346547
      },
      {
        "nameHash": 848821669,
        "descHash": 3888956347
      },
      {
        "nameHash": 704527549,
        "descHash": 2405982315
      }
    ]
  },
  {
    "id": 10000070,
    "weaponType": "sword",
    "titleHash": 2558588218,
    "detailHash": 3517922962,
    "constellationHash": 4233109642,
    "rarity": 5,
    "vision": "hydro",
    "nameId": "nilou",
    "nameHash": 3850149970,
    "descHash": 3126933153,
    "constellations": [
      {
        "nameHash": 3475888113,
        "descHash": 2661312839
      },
      {
        "nameHash": 318992601,
        "descHash": 3919673783
      },
      {
        "nameHash": 4083203921,
        "descHash": 3288808887
      },
      {
        "nameHash": 3019515057,
        "descHash": 888080927
      },
      {
        "nameHash": 4211988457,
        "descHash": 4076971143
      },
      {
        "nameHash": 684061273,
        "descHash": 3861878943
      }
    ],
    "energySkill": {
      "nameHash": 1967463157,
      "descHash": 3122656376
    },
    "skills": [
      {
        "nameHash": 1390577909,
        "descHash": 1185988448
      },
      {
        "nameHash": 2640547533,
        "descHash": 3630489128
      }
    ],
    "passives": [
      {
        "nameHash": 1079985949,
        "descHash": 2790893747
      },
      {
        "nameHash": 4260729629,
        "descHash": 174660427
      },
      {
        "nameHash": 746325437,
        "descHash": 141861795
      }
    ]
  },
  {
    "id": 10000071,
    "weaponType": "polearm",
    "titleHash": 3695276266,
    "detailHash": 3565246018,
    "constellationHash": 2651954010,
    "rarity": 5,
    "vision": "electro",
    "nameId": "cyno",
    "nameHash": 1049891906,
    "descHash": 2253913929,
    "constellations": [
      {
        "nameHash": 748102489,
        "descHash": 2323427151
      },
      {
        "nameHash": 3035895129,
        "descHash": 1790987583
      },
      {
        "nameHash": 3680254705,
        "descHash": 1482911911
      },
      {
        "nameHash": 1630701449,
        "descHash": 1262681015
      },
      {
        "nameHash": 1368859857,
        "descHash": 3824690295
      },
      {
        "nameHash": 2479658985,
        "descHash": 306126727
      }
    ],
    "energySkill": {
      "nameHash": 2604847405,
      "descHash": 2282154672
    },
    "skills": [
      {
        "nameHash": 2262721981,
        "descHash": 1651662752
      },
      {
        "nameHash": 584952661,
        "descHash": 431532312
      }
    ],
    "passives": [
      {
        "nameHash": 406259061,
        "descHash": 1396793139
      },
      {
        "nameHash": 2701967301,
        "descHash": 1900475347
      },
      {
        "nameHash": 4091746589,
        "descHash": 1571484299
      }
    ]
  },
  {
    "id": 10000072,
    "weaponType": "polearm",
    "titleHash": 260307914,
    "detailHash": 1266475946,
    "constellationHash": 1078252442,
    "rarity": 4,
    "vision": "hydro",
    "nameId": "candace",
    "nameHash": 3092975658,
    "descHash": 369426969,
    "constellations": [
      {
        "nameHash": 449508113,
        "descHash": 1938462311
      },
      {
        "nameHash": 3442281625,
        "descHash": 1981457807
      },
      {
        "nameHash": 3256412025,
        "descHash": 3763148479
      },
      {
        "nameHash": 984253913,
        "descHash": 33452751
      },
      {
        "nameHash": 2382311049,
        "descHash": 1048738031
      },
      {
        "nameHash": 955051961,
        "descHash": 2921686415
      }
    ],
    "energySkill": {
      "nameHash": 2669120029,
      "descHash": 2300903224
    },
    "skills": [
      {
        "nameHash": 2594921261,
        "descHash": 3352315424
      },
      {
        "nameHash": 2160740245,
        "descHash": 2763201128
      }
    ],
    "passives": [
      {
        "nameHash": 2824567053,
        "descHash": 956822595
      },
      {
        "nameHash": 997098981,
        "descHash": 1769542171
      },
      {
        "nameHash": 3750730405,
        "descHash": 109186163
      }
    ]
  },
  {
    "id": 10000073,
    "weaponType": "catalyst",
    "titleHash": 1137340338,
    "detailHash": 2412105602,
    "constellationHash": 3107413186,
    "rarity": 5,
    "vision": "dendro",
    "nameId": "nahida",
    "nameHash": 712501082,
    "descHash": 2629071729,
    "constellations": [
      {
        "nameHash": 552761193,
        "descHash": 869558663
      },
      {
        "nameHash": 3200237953,
        "descHash": 493826087
      },
      {
        "nameHash": 2629291377,
        "descHash": 1677220719
      },
      {
        "nameHash": 2649754961,
        "descHash": 1969605439
      },
      {
        "nameHash": 762504897,
        "descHash": 1943180071
      },
      {
        "nameHash": 2904102233,
        "descHash": 1986384751
      }
    ],
    "energySkill": {
      "nameHash": 3862968797,
      "descHash": 3393154248
    },
    "skills": [
      {
        "nameHash": 48372133,
        "descHash": 1280328928
      },
      {
        "nameHash": 3592193965,
        "descHash": 2457010104
      }
    ],
    "passives": [
      {
        "nameHash": 3351382301,
        "descHash": 4230321475
      },
      {
        "nameHash": 3993200637,
        "descHash": 2180925971
      },
      {
        "nameHash": 3871657645,
        "descHash": 1117960731
      }
    ]
  },
  {
    "id": 10000074,
    "weaponType": "sword",
    "titleHash": 3090378778,
    "detailHash": 2237383218,
    "constellationHash": 4213464010,
    "rarity": 4,
    "vision": "cryo",
    "nameId": "layla",
    "nameHash": 2889777514,
    "descHash": 2729249993,
    "constellations": [
      {
        "nameHash": 624034681,
        "descHash": 1381519175
      },
      {
        "nameHash": 1108627585,
        "descHash": 1073517111
      },
      {
        "nameHash": 1578144217,
        "descHash": 670134735
      },
      {
        "nameHash": 886256817,
        "descHash": 3376385767
      },
      {
        "nameHash": 1129381953,
        "descHash": 2999141175
      },
      {
        "nameHash": 1961053441,
        "descHash": 114201887
      }
    ],
    "energySkill": {
      "nameHash": 64091533,
      "descHash": 3978333320
    },
    "skills": [
      {
        "nameHash": 1078955685,
        "descHash": 471350016
      },
      {
        "nameHash": 3200711933,
        "descHash": 3269652328
      }
    ],
    "passives": [
      {
        "nameHash": 1433567325,
        "descHash": 1108188771
      },
      {
        "nameHash": 3710001141,
        "descHash": 2777043699
      },
      {
        "nameHash": 2480425949,
        "descHash": 2031527075
      }
    ]
  },
  {
    "id": 10000075,
    "weaponType": "catalyst",
    "titleHash": 3790608850,
    "detailHash": 3954453410,
    "constellationHash": 2549749394,
    "rarity": 5,
    "vision": "anemo",
    "nameId": "wanderer",
    "nameHash": 3230559562,
    "descHash": 431267537,
    "constellations": [
      {
        "nameHash": 868773065,
        "descHash": 3424058423
      },
      {
        "nameHash": 2086697681,
        "descHash": 1024331583
      },
      {
        "nameHash": 215651225,
        "descHash": 2516153687
      },
      {
        "nameHash": 3961952345,
        "descHash": 3465818367
      },
      {
        "nameHash": 1037858905,
        "descHash": 3032413943
      },
      {
        "nameHash": 3600134161,
        "descHash": 4050147231
      }
    ],
    "energySkill": {
      "nameHash": 778366677,
      "descHash": 2253279664
    },
    "skills": [
      {
        "nameHash": 668478821,
        "descHash": 2152227072
      },
      {
        "nameHash": 3563341277,
        "descHash": 619167032
      }
    ],
    "passives": [
      {
        "nameHash": 2246220493,
        "descHash": 339524059
      },
      {
        "nameHash": 4277450877,
        "descHash": 3853922739
      },
      {
        "nameHash": 4150377701,
        "descHash": 2518698739
      }
    ]
  },
  {
    "id": 10000076,
    "weaponType": "bow",
    "titleHash": 2857055778,
    "detailHash": 3768390994,
    "constellationHash": 3178353930,
    "rarity": 4,
    "vision": "anemo",
    "nameId": "faruzan",
    "nameHash": 2387711994,
    "descHash": 4013065569,
    "constellations": [
      {
        "nameHash": 2013089553,
        "descHash": 1528960167
      },
      {
        "nameHash": 4140551721,
        "descHash": 1173832871
      },
      {
        "nameHash": 1613893961,
        "descHash": 2257513135
      },
      {
        "nameHash": 1099441465,
        "descHash": 2239791463
      },
      {
        "nameHash": 2879411097,
        "descHash": 3222950735
      },
      {
        "nameHash": 1813996249,
        "descHash": 2194389751
      }
    ],
    "energySkill": {
      "nameHash": 2294046741,
      "descHash": 3288766632
    },
    "skills": [
      {
        "nameHash": 47732325,
        "descHash": 4233673024
      },
      {
        "nameHash": 593897829,
        "descHash": 3487349912
      }
    ],
    "passives": [
      {
        "nameHash": 2949865501,
        "descHash": 67427819
      },
      {
        "nameHash": 3724169037,
        "descHash": 2841068683
      },
      {
        "nameHash": 2732974245,
        "descHash": 494209243
      }
    ]
  },
  {
    "id": 10000077,
    "weaponType": "polearm",
    "titleHash": 4049421714,
    "detailHash": 945268338,
    "constellationHash": 2612702186,
    "rarity": 4,
    "vision": "dendro",
    "nameId": "yaoyao",
    "nameHash": 1732418482,
    "descHash": 1595771809,
    "constellations": [
      {
        "nameHash": 2088049169,
        "descHash": 2207252855
      },
      {
        "nameHash": 1185801489,
        "descHash": 2615149191
      },
      {
        "nameHash": 1513031537,
        "descHash": 2456299903
      },
      {
        "nameHash": 2674638561,
        "descHash": 2648079719
      },
      {
        "nameHash": 738869801,
        "descHash": 3407006263
      },
      {
        "nameHash": 4046679753,
        "descHash": 3305258887
      }
    ],
    "energySkill": {
      "nameHash": 312209645,
      "descHash": 3855132632
    },
    "skills": [
      {
        "nameHash": 403331797,
        "descHash": 1838127856
      },
      {
        "nameHash": 3738045221,
        "descHash": 1207031736
      }
    ],
    "passives": [
      {
        "nameHash": 1806137181,
        "descHash": 613796971
      },
      {
        "nameHash": 442398253,
        "descHash": 146926091
      },
      {
        "nameHash": 2108275293,
        "descHash": 496849403
      }
    ]
  },
  {
    "id": 10000078,
    "weaponType": "sword",
    "titleHash": 1747432458,
    "detailHash": 1285637210,
    "constellationHash": 3211479602,
    "rarity": 5,
    "vision": "dendro",
    "nameId": "alhaitham",
    "nameHash": 4002157418,
    "descHash": 2584161865,
    "constellations": [
      {
        "nameHash": 1459644873,
        "descHash": 1350239855
      },
      {
        "nameHash": 3637950009,
        "descHash": 1314977759
      },
      {
        "nameHash": 2621846313,
        "descHash": 3590318815
      },
      {
        "nameHash": 1055939881,
        "descHash": 2223376895
      },
      {
        "nameHash": 3387153385,
        "descHash": 822413127
      },
      {
        "nameHash": 540494281,
        "descHash": 3238715695
      }
    ],
    "energySkill": {
      "nameHash": 52057253,
      "descHash": 2446716024
    },
    "skills": [
      {
        "nameHash": 4231831917,
        "descHash": 1536919408
      },
      {
        "nameHash": 1674438605,
        "descHash": 3631586904
      }
    ],
    "passives": [
      {
        "nameHash": 4124589749,
        "descHash": 2821263283
      },
      {
        "nameHash": 3595608541,
        "descHash": 202181803
      },
      {
        "nameHash": 1935332021,
        "descHash": 746918907
      }
    ]
  },
  {
    "id": 10000079,
    "weaponType": "claymore",
    "titleHash": 1079010306,
    "detailHash": 1487639730,
    "constellationHash": 2948453418,
    "rarity": 5,
    "vision": "pyro",
    "nameId": "dehya",
    "nameHash": 2360533154,
    "descHash": 1894790521,
    "constellations": [
      {
        "nameHash": 975929929,
        "descHash": 572639103
      },
      {
        "nameHash": 1063269113,
        "descHash": 3507377919
      },
      {
        "nameHash": 3309645225,
        "descHash": 890858055
      },
      {
        "nameHash": 1318685825,
        "descHash": 1101112519
      },
      {
        "nameHash": 2001862177,
        "descHash": 640281255
      },
      {
        "nameHash": 2802373841,
        "descHash": 343338087
      }
    ],
    "energySkill": {
      "nameHash": 594609117,
      "descHash": 2917310896
    },
    "skills": [
      {
        "nameHash": 804739701,
        "descHash": 3808525952
      },
      {
        "nameHash": 588248229,
        "descHash": 2962089080
      }
    ],
    "passives": [
      {
        "nameHash": 3149191733,
        "descHash": 1650958403
      },
      {
        "nameHash": 1909934141,
        "descHash": 1783340739
      },
      {
        "nameHash": 2291760437,
        "descHash": 335896635
      }
    ]
  },
  {
    "id": 10000080,
    "weaponType": "polearm",
    "titleHash": 3144322938,
    "detailHash": 2734451114,
    "constellationHash": 792782874,
    "rarity": 4,
    "vision": "cryo",
    "nameId": "mika",
    "nameHash": 231911858,
    "descHash": 3487590873,
    "constellations": [
      {
        "nameHash": 896455753,
        "descHash": 379336143
      },
      {
        "nameHash": 1491617321,
        "descHash": 3170359879
      },
      {
        "nameHash": 973254489,
        "descHash": 993496535
      },
      {
        "nameHash": 3408467449,
        "descHash": 4039593527
      },
      {
        "nameHash": 101621505,
        "descHash": 2531853591
      },
      {
        "nameHash": 1784924817,
        "descHash": 96145279
      }
    ],
    "energySkill": {
      "nameHash": 3170404421,
      "descHash": 1265120456
    },
    "skills": [
      {
        "nameHash": 2556517,
        "descHash": 3680931736
      },
      {
        "nameHash": 3335717533,
        "descHash": 2280652960
      }
    ],
    "passives": [
      {
        "nameHash": 2039050629,
        "descHash": 3741888171
      },
      {
        "nameHash": 2664880701,
        "descHash": 750604795
      },
      {
        "nameHash": 3575174365,
        "descHash": 1271240819
      }
    ]
  },
  {
    "id": 10000081,
    "weaponType": "claymore",
    "titleHash": 18885306,
    "detailHash": 477218418,
    "constellationHash": 1259949786,
    "rarity": 4,
    "vision": "dendro",
    "nameId": "kaveh",
    "nameHash": 466355514,
    "descHash": 2545348585,
    "constellations": [
      {
        "nameHash": 3110332641,
        "descHash": 3977732063
      },
      {
        "nameHash": 20172977,
        "descHash": 142654143
      },
      {
        "nameHash": 2730015409,
        "descHash": 3194810551
      },
      {
        "nameHash": 2860814489,
        "descHash": 422834023
      },
      {
        "nameHash": 1755584449,
        "descHash": 2702758807
      },
      {
        "nameHash": 2892000521,
        "descHash": 1058033695
      }
    ],
    "energySkill": {
      "nameHash": 1210107733,
      "descHash": 1228716272
    },
    "skills": [
      {
        "nameHash": 2101931541,
        "descHash": 183925528
      },
      {
        "nameHash": 4260508917,
        "descHash": 3670753800
      }
    ],
    "passives": [
      {
        "nameHash": 444483245,
        "descHash": 3428274843
      },
      {
        "nameHash": 4205698869,
        "descHash": 1749561651
      },
      {
        "nameHash": 1658971005,
        "descHash": 839041299
      }
    ]
  },
  {
    "id": 10000082,
    "weaponType": "catalyst",
    "titleHash": 3839498106,
    "detailHash": 3584266538,
    "constellationHash": 1283071826,
    "rarity": 5,
    "vision": "dendro",
    "nameId": "baizhu",
    "nameHash": 2984815066,
    "descHash": 3312539857,
    "constellations": [
      {
        "nameHash": 858748369,
        "descHash": 726807703
      },
      {
        "nameHash": 1849398401,
        "descHash": 2052539311
      },
      {
        "nameHash": 2410139081,
        "descHash": 3847136863
      },
      {
        "nameHash": 4262913073,
        "descHash": 558876359
      },
      {
        "nameHash": 63855777,
        "descHash": 4128659319
      },
      {
        "nameHash": 1293460177,
        "descHash": 448109855
      }
    ],
    "energySkill": {
      "nameHash": 3249611093,
      "descHash": 2541374272
    },
    "skills": [
      {
        "nameHash": 2662918965,
        "descHash": 3072450328
      },
      {
        "nameHash": 2409917,
        "descHash": 3418529592
      }
    ],
    "passives": [
      {
        "nameHash": 385116517,
        "descHash": 3415323803
      },
      {
        "nameHash": 160949085,
        "descHash": 2457551347
      },
      {
        "nameHash": 3003644021,
        "descHash": 4112691211
      }
    ]
  },
  {
    "id": 10000083,
    "weaponType": "sword",
    "titleHash": 1033214146,
    "detailHash": 2276870554,
    "constellationHash": 42240306,
    "rarity": 4,
    "vision": "anemo",
    "nameId": "lynette",
    "nameHash": 1225226258,
    "descHash": 3450878153,
    "constellations": [
      {
        "nameHash": 2471765961,
        "descHash": 869926711
      },
      {
        "nameHash": 1377369345,
        "descHash": 3768701959
      },
      {
        "nameHash": 4173595889,
        "descHash": 4286169519
      },
      {
        "nameHash": 1475870801,
        "descHash": 1810643623
      },
      {
        "nameHash": 1789577793,
        "descHash": 2432455031
      },
      {
        "nameHash": 2746616153,
        "descHash": 2044769967
      }
    ],
    "energySkill": {
      "nameHash": 496785501,
      "descHash": 1899034328
    },
    "skills": [
      {
        "nameHash": 2038141157,
        "descHash": 279424064
      },
      {
        "nameHash": 2169745509,
        "descHash": 1613005168
      }
    ],
    "passives": [
      {
        "nameHash": 1980717781,
        "descHash": 3751620875
      },
      {
        "nameHash": 4169357213,
        "descHash": 2518754107
      },
      {
        "nameHash": 2032306893,
        "descHash": 1993361595
      }
    ]
  },
  {
    "id": 10000084,
    "weaponType": "bow",
    "titleHash": 1298389802,
    "detailHash": 3474221690,
    "constellationHash": 2699749050,
    "rarity": 5,
    "vision": "pyro",
    "nameId": "lyney",
    "nameHash": 2472444970,
    "descHash": 3225015385,
    "constellations": [
      {
        "nameHash": 1235684201,
        "descHash": 1890563511
      },
      {
        "nameHash": 4294085417,
        "descHash": 1203560143
      },
      {
        "nameHash": 2593991761,
        "descHash": 1615632079
      },
      {
        "nameHash": 2932106129,
        "descHash": 3036331255
      },
      {
        "nameHash": 2035233753,
        "descHash": 2858061671
      },
      {
        "nameHash": 3525594449,
        "descHash": 3179900767
      }
    ],
    "energySkill": {
      "nameHash": 2543605245,
      "descHash": 1421521272
    },
    "skills": [
      {
        "nameHash": 2045120365,
        "descHash": 2019251496
      },
      {
        "nameHash": 3118483965,
        "descHash": 1206694224
      }
    ],
    "passives": [
      {
        "nameHash": 2381332469,
        "descHash": 1096745083
      },
      {
        "nameHash": 1098518261,
        "descHash": 1627957115
      },
      {
        "nameHash": 3975335557,
        "descHash": 2480634491
      }
    ]
  },
  {
    "id": 10000085,
    "weaponType": "claymore",
    "titleHash": 3824251530,
    "detailHash": 2878178530,
    "constellationHash": 850970138,
    "rarity": 4,
    "vision": "cryo",
    "nameId": "freminet",
    "nameHash": 4201964354,
    "descHash": 2838709961,
    "constellations": [
      {
        "nameHash": 2267561625,
        "descHash": 3704799783
      },
      {
        "nameHash": 2404188193,
        "descHash": 203581487
      },
      {
        "nameHash": 2569900185,
        "descHash": 3239889999
      },
      {
        "nameHash": 2906179801,
        "descHash": 1201397575
      },
      {
        "nameHash": 2128995113,
        "descHash": 3696772231
      },
      {
        "nameHash": 2077326505,
        "descHash": 770079951
      }
    ],
    "energySkill": {
      "nameHash": 285889909,
      "descHash": 3334587608
    },
    "skills": [
      {
        "nameHash": 2253281405,
        "descHash": 3584480432
      },
      {
        "nameHash": 2430743149,
        "descHash": 848787248
      }
    ],
    "passives": [
      {
        "nameHash": 204369621,
        "descHash": 883684755
      },
      {
        "nameHash": 3921543373,
        "descHash": 154148051
      },
      {
        "nameHash": 2659345781,
        "descHash": 3755914139
      }
    ]
  },
  {
    "id": 10000086,
    "weaponType": "catalyst",
    "titleHash": 1614804522,
    "detailHash": 1595742610,
    "constellationHash": 1541133810,
    "rarity": 5,
    "vision": "cryo",
    "nameId": "wriothesley",
    "nameHash": 370151050,
    "descHash": 3963795561,
    "constellations": [
      {
        "nameHash": 4114524601,
        "descHash": 2935572527
      },
      {
        "nameHash": 2190383313,
        "descHash": 2294412511
      },
      {
        "nameHash": 1926021769,
        "descHash": 1200373447
      },
      {
        "nameHash": 2263893849,
        "descHash": 531475447
      },
      {
        "nameHash": 2419244785,
        "descHash": 2614066263
      },
      {
        "nameHash": 126955769,
        "descHash": 2420457295
      }
    ],
    "energySkill": {
      "nameHash": 1703060229,
      "descHash": 3737007768
    },
    "skills": [
      {
        "nameHash": 3047671029,
        "descHash": 3286773288
      },
      {
        "nameHash": 3496870941,
        "descHash": 2303069416
      }
    ],
    "passives": [
      {
        "nameHash": 3678165437,
        "descHash": 3120113283
      },
      {
        "nameHash": 1122782717,
        "descHash": 4283491523
      },
      {
        "nameHash": 1753732789,
        "descHash": 408336923
      }
    ]
  },
  {
    "id": 10000087,
    "weaponType": "catalyst",
    "titleHash": 129466210,
    "detailHash": 3392552986,
    "constellationHash": 3286900818,
    "rarity": 5,
    "vision": "hydro",
    "nameId": "neuvillette",
    "nameHash": 1504902330,
    "descHash": 3918027945,
    "constellations": [
      {
        "nameHash": 3840366369,
        "descHash": 1228355591
      },
      {
        "nameHash": 2437610633,
        "descHash": 3291076927
      },
      {
        "nameHash": 2720290529,
        "descHash": 2622238719
      },
      {
        "nameHash": 1561601289,
        "descHash": 3253387287
      },
      {
        "nameHash": 4222513497,
        "descHash": 3167903271
      },
      {
        "nameHash": 1739750817,
        "descHash": 2954032279
      }
    ],
    "energySkill": {
      "nameHash": 2195272997,
      "descHash": 3656534880
    },
    "skills": [
      {
        "nameHash": 2288777957,
        "descHash": 2402676976
      },
      {
        "nameHash": 3874529309,
        "descHash": 1570362832
      }
    ],
    "passives": [
      {
        "nameHash": 3686583445,
        "descHash": 616645987
      },
      {
        "nameHash": 2519986829,
        "descHash": 2736917675
      },
      {
        "nameHash": 2693276525,
        "descHash": 632427675
      }
    ]
  },
  {
    "id": 10000088,
    "weaponType": "catalyst",
    "titleHash": 1693018890,
    "detailHash": 3083904506,
    "constellationHash": 2161973858,
    "rarity": 4,
    "vision": "cryo",
    "nameId": "charlotte",
    "nameHash": 3831162130,
    "descHash": 3090032161,
    "constellations": [
      {
        "nameHash": 2993271985,
        "descHash": 2701312023
      },
      {
        "nameHash": 2781039769,
        "descHash": 2657010327
      },
      {
        "nameHash": 2635170905,
        "descHash": 3096809447
      },
      {
        "nameHash": 1687165865,
        "descHash": 2634138191
      },
      {
        "nameHash": 3847359465,
        "descHash": 1583831663
      },
      {
        "nameHash": 445668929,
        "descHash": 1739507031
      }
    ],
    "energySkill": {
      "nameHash": 3217089605,
      "descHash": 2854066664
    },
    "skills": [
      {
        "nameHash": 2401741477,
        "descHash": 3733500616
      },
      {
        "nameHash": 3157868725,
        "descHash": 3302513136
      }
    ],
    "passives": [
      {
        "nameHash": 4178068901,
        "descHash": 1137814243
      },
      {
        "nameHash": 3221938253,
        "descHash": 1803415443
      },
      {
        "nameHash": 3894932549,
        "descHash": 910377859
      }
    ]
  },
  {
    "id": 10000089,
    "weaponType": "sword",
    "titleHash": 1998143314,
    "detailHash": 3897247930,
    "constellationHash": 3172443770,
    "rarity": 5,
    "vision": "hydro",
    "nameId": "furina",
    "nameHash": 2180900234,
    "descHash": 2843800569,
    "constellations": [
      {
        "nameHash": 1796785,
        "descHash": 2915363591
      },
      {
        "nameHash": 3119753889,
        "descHash": 1346666799
      },
      {
        "nameHash": 3349664969,
        "descHash": 1316847407
      },
      {
        "nameHash": 3047423481,
        "descHash": 2787322863
      },
      {
        "nameHash": 2146750841,
        "descHash": 3859992423
      },
      {
        "nameHash": 3889320921,
        "descHash": 2439371303
      }
    ],
    "energySkill": {
      "nameHash": 1469226733,
      "descHash": 1648187112
    },
    "skills": [
      {
        "nameHash": 4233347141,
        "descHash": 731376160
      },
      {
        "nameHash": 3819525205,
        "descHash": 2663784392
      }
    ],
    "passives": [
      {
        "nameHash": 2207888077,
        "descHash": 2804468875
      },
      {
        "nameHash": 4267816053,
        "descHash": 2749489547
      },
      {
        "nameHash": 2905446949,
        "descHash": 2458235035
      }
    ]
  },
  {
    "id": 10000090,
    "weaponType": "polearm",
    "titleHash": 2576986026,
    "detailHash": 3863752658,
    "constellationHash": 2735454538,
    "rarity": 4,
    "vision": "pyro",
    "nameId": "chevreuse",
    "nameHash": 540313842,
    "descHash": 3743936161,
    "constellations": [
      {
        "nameHash": 398920769,
        "descHash": 3123102119
      },
      {
        "nameHash": 2697538289,
        "descHash": 3329834511
      },
      {
        "nameHash": 2071053617,
        "descHash": 2002552207
      },
      {
        "nameHash": 737124137,
        "descHash": 3219931159
      },
      {
        "nameHash": 4209804241,
        "descHash": 2866944343
      },
      {
        "nameHash": 3915841073,
        "descHash": 2694669951
      }
    ],
    "energySkill": {
      "nameHash": 1517901117,
      "descHash": 1494115240
    },
    "skills": [
      {
        "nameHash": 1264627869,
        "descHash": 1993424232
      },
      {
        "nameHash": 2811155029,
        "descHash": 3734410000
      }
    ],
    "passives": [
      {
        "nameHash": 160338149,
        "descHash": 1694837179
      },
      {
        "nameHash": 3818310781,
        "descHash": 31275139
      },
      {
        "nameHash": 281288237,
        "descHash": 3695857659
      }
    ]
  },
  {
    "id": 10000091,
    "weaponType": "claymore",
    "titleHash": 2673266866,
    "detailHash": 3521032186,
    "constellationHash": 785421794,
    "rarity": 5,
    "vision": "geo",
    "nameId": "navia",
    "nameHash": 2877588578,
    "descHash": 251470345,
    "constellations": [
      {
        "nameHash": 3689024969,
        "descHash": 1833391103
      },
      {
        "nameHash": 4246729273,
        "descHash": 3824009927
      },
      {
        "nameHash": 4008218041,
        "descHash": 3410355711
      },
      {
        "nameHash": 3461445297,
        "descHash": 601633783
      },
      {
        "nameHash": 3983244161,
        "descHash": 2676785151
      },
      {
        "nameHash": 4110233153,
        "descHash": 2381304071
      }
    ],
    "energySkill": {
      "nameHash": 3301203725,
      "descHash": 519817776
    },
    "skills": [
      {
        "nameHash": 2696840005,
        "descHash": 1654915064
      },
      {
        "nameHash": 4005542485,
        "descHash": 1529102704
      }
    ],
    "passives": [
      {
        "nameHash": 610153453,
        "descHash": 1457246011
      },
      {
        "nameHash": 1794143765,
        "descHash": 224154643
      },
      {
        "nameHash": 438270701,
        "descHash": 3514609507
      }
    ]
  },
  {
    "id": 10000092,
    "weaponType": "claymore",
    "titleHash": 366162906,
    "detailHash": 2194925506,
    "constellationHash": 2892332658,
    "rarity": 4,
    "vision": "pyro",
    "nameId": "gaming",
    "nameHash": 2822240322,
    "descHash": 669926801,
    "constellations": [
      {
        "nameHash": 4018877873,
        "descHash": 3450583255
      },
      {
        "nameHash": 246603977,
        "descHash": 3328193055
      },
      {
        "nameHash": 4116318089,
        "descHash": 1295622719
      },
      {
        "nameHash": 4187766889,
        "descHash": 2357270623
      },
      {
        "nameHash": 3549980385,
        "descHash": 75197663
      },
      {
        "nameHash": 3486976633,
        "descHash": 2246196183
      }
    ],
    "energySkill": {
      "nameHash": 2764774957,
      "descHash": 3695775368
    },
    "skills": [
      {
        "nameHash": 526099557,
        "descHash": 440396008
      },
      {
        "nameHash": 2601302837,
        "descHash": 2614779392
      }
    ],
    "passives": [
      {
        "nameHash": 2690435901,
        "descHash": 3676076291
      },
      {
        "nameHash": 1429562741,
        "descHash": 3903208267
      },
      {
        "nameHash": 1742506509,
        "descHash": 401997259
      }
    ]
  },
  {
    "id": 10000093,
    "weaponType": "catalyst",
    "titleHash": 952438522,
    "detailHash": 2183158842,
    "constellationHash": 2514371570,
    "rarity": 5,
    "vision": "anemo",
    "nameId": "xianyun",
    "nameHash": 3648220770,
    "descHash": 1611204721,
    "constellations": [
      {
        "nameHash": 1584930553,
        "descHash": 4195313575
      },
      {
        "nameHash": 94680617,
        "descHash": 2714469207
      },
      {
        "nameHash": 3143851073,
        "descHash": 2650581351
      },
      {
        "nameHash": 301585425,
        "descHash": 396072583
      },
      {
        "nameHash": 2080335137,
        "descHash": 1510311207
      },
      {
        "nameHash": 3383313401,
        "descHash": 2169768367
      }
    ],
    "energySkill": {
      "nameHash": 2968788269,
      "descHash": 4264465336
    },
    "skills": [
      {
        "nameHash": 3031546037,
        "descHash": 2761927832
      },
      {
        "nameHash": 418524149,
        "descHash": 2228432704
      }
    ],
    "passives": [
      {
        "nameHash": 1114914749,
        "descHash": 660789307
      },
      {
        "nameHash": 3770830541,
        "descHash": 2827326891
      },
      {
        "nameHash": 1543802685,
        "descHash": 1282326523
      }
    ]
  },
  {
    "id": 10000094,
    "weaponType": "sword",
    "titleHash": 2878325034,
    "detailHash": 2527476874,
    "constellationHash": 3871564042,
    "rarity": 5,
    "vision": "geo",
    "nameId": "chiori",
    "nameHash": 1944606922,
    "descHash": 808184993,
    "constellations": [
      {
        "nameHash": 689897337,
        "descHash": 256130927
      },
      {
        "nameHash": 2112971153,
        "descHash": 583489951
      },
      {
        "nameHash": 645847961,
        "descHash": 1781876559
      },
      {
        "nameHash": 6373505,
        "descHash": 3824887847
      },
      {
        "nameHash": 167855529,
        "descHash": 3198150175
      },
      {
        "nameHash": 94228129,
        "descHash": 420287047
      }
    ],
    "energySkill": {
      "nameHash": 373425821,
      "descHash": 691967512
    },
    "skills": [
      {
        "nameHash": 914798901,
        "descHash": 2598150344
      },
      {
        "nameHash": 2315821309,
        "descHash": 1761053408
      }
    ],
    "passives": [
      {
        "nameHash": 2220299421,
        "descHash": 3745151251
      },
      {
        "nameHash": 1121440229,
        "descHash": 4158183115
      },
      {
        "nameHash": 2852843805,
        "descHash": 2587377395
      }
    ]
  },
  {
    "id": 10000095,
    "weaponType": "bow",
    "titleHash": 1006607674,
    "detailHash": 2479226994,
    "constellationHash": 3701764290,
    "rarity": 5,
    "vision": "hydro",
    "nameId": "sigewinne",
    "nameHash": 781488962,
    "descHash": 1746058729,
    "constellations": [
      {
        "nameHash": 2069380665,
        "descHash": 62042775
      },
      {
        "nameHash": 2490532081,
        "descHash": 3504124391
      },
      {
        "nameHash": 2818554353,
        "descHash": 4146947367
      },
      {
        "nameHash": 952229337,
        "descHash": 2940536535
      },
      {
        "nameHash": 3412453553,
        "descHash": 1790125943
      },
      {
        "nameHash": 2161046649,
        "descHash": 2720279207
      }
    ],
    "energySkill": {
      "nameHash": 35144573,
      "descHash": 1952003288
    },
    "skills": [
      {
        "nameHash": 2933818773,
        "descHash": 2071310448
      },
      {
        "nameHash": 4122008677,
        "descHash": 2707021480
      }
    ],
    "passives": [
      {
        "nameHash": 1653891701,
        "descHash": 1747985019
      },
      {
        "nameHash": 3692863445,
        "descHash": 2473339683
      },
      {
        "nameHash": 2759902629,
        "descHash": 2591230947
      }
    ]
  },
  {
    "id": 10000096,
    "weaponType": "polearm",
    "titleHash": 3049476050,
    "detailHash": 348922594,
    "constellationHash": 3841193010,
    "rarity": 5,
    "vision": "pyro",
    "nameId": "arlecchino",
    "nameHash": 167199474,
    "descHash": 4055490121,
    "constellations": [
      {
        "nameHash": 1931573609,
        "descHash": 616607903
      },
      {
        "nameHash": 2743280569,
        "descHash": 178397695
      },
      {
        "nameHash": 1222541609,
        "descHash": 1505879071
      },
      {
        "nameHash": 2103473001,
        "descHash": 4133108567
      },
      {
        "nameHash": 3475324945,
        "descHash": 1012067151
      },
      {
        "nameHash": 585561937,
        "descHash": 4255841423
      }
    ],
    "energySkill": {
      "nameHash": 2156811133,
      "descHash": 4027350792
    },
    "skills": [
      {
        "nameHash": 3395884205,
        "descHash": 1331353336
      },
      {
        "nameHash": 88213301,
        "descHash": 3339866608
      }
    ],
    "passives": [
      {
        "nameHash": 1161358925,
        "descHash": 539613867
      },
      {
        "nameHash": 1331115029,
        "descHash": 1406040603
      },
      {
        "nameHash": 1874329437,
        "descHash": 936115699
      }
    ]
  },
  {
    "id": 10000097,
    "weaponType": "bow",
    "titleHash": 592620818,
    "detailHash": 711156994,
    "constellationHash": 1839324786,
    "rarity": 4,
    "vision": "electro",
    "nameId": "sethos",
    "nameHash": 1431322346,
    "descHash": 865382657,
    "constellations": [
      {
        "nameHash": 2929346465,
        "descHash": 63677183
      },
      {
        "nameHash": 4002600217,
        "descHash": 2748153623
      },
      {
        "nameHash": 3225646441,
        "descHash": 1122504295
      },
      {
        "nameHash": 1034621857,
        "descHash": 758586999
      },
      {
        "nameHash": 1113819633,
        "descHash": 723914999
      },
      {
        "nameHash": 1135303145,
        "descHash": 3861559575
      }
    ],
    "energySkill": {
      "nameHash": 4109522381,
      "descHash": 2899845904
    },
    "skills": [
      {
        "nameHash": 4267851909,
        "descHash": 1847162024
      },
      {
        "nameHash": 1391395133,
        "descHash": 1807188216
      }
    ],
    "passives": [
      {
        "nameHash": 3768923317,
        "descHash": 1026249555
      },
      {
        "nameHash": 3020838397,
        "descHash": 2389729987
      },
      {
        "nameHash": 4130587461,
        "descHash": 2951193203
      }
    ]
  },
  {
    "id": 10000098,
    "weaponType": "sword",
    "titleHash": 2204666066,
    "detailHash": 3607804282,
    "constellationHash": 3930517194,
    "rarity": 5,
    "vision": "electro",
    "nameId": "clorinde",
    "nameHash": 2745369298,
    "descHash": 3165106529,
    "constellations": [
      {
        "nameHash": 3895585233,
        "descHash": 1687782079
      },
      {
        "nameHash": 1056604337,
        "descHash": 3535418991
      },
      {
        "nameHash": 808249241,
        "descHash": 2013066655
      },
      {
        "nameHash": 3782829777,
        "descHash": 2706606543
      },
      {
        "nameHash": 2786589217,
        "descHash": 2982049503
      },
      {
        "nameHash": 2154723033,
        "descHash": 3835955255
      }
    ],
    "energySkill": {
      "nameHash": 2680644485,
      "descHash": 1317936912
    },
    "skills": [
      {
        "nameHash": 3852547301,
        "descHash": 170937832
      },
      {
        "nameHash": 2915566557,
        "descHash": 322812776
      }
    ],
    "passives": [
      {
        "nameHash": 2922943605,
        "descHash": 2183367531
      },
      {
        "nameHash": 1935840165,
        "descHash": 2086955811
      },
      {
        "nameHash": 994844541,
        "descHash": 3297764699
      }
    ]
  },
  {
    "id": 10000099,
    "weaponType": "polearm",
    "titleHash": 1620786530,
    "detailHash": 2872568882,
    "constellationHash": 2104011930,
    "rarity": 5,
    "vision": "dendro",
    "nameId": "emilie",
    "nameHash": 1705786122,
    "descHash": 780007609,
    "constellations": [
      {
        "nameHash": 740813377,
        "descHash": 1921212431
      },
      {
        "nameHash": 888272609,
        "descHash": 2420728727
      },
      {
        "nameHash": 1597660969,
        "descHash": 4015232911
      },
      {
        "nameHash": 349963729,
        "descHash": 3341136607
      },
      {
        "nameHash": 100927345,
        "descHash": 1432258103
      },
      {
        "nameHash": 1536750705,
        "descHash": 1697945399
      }
    ],
    "energySkill": {
      "nameHash": 1229406621,
      "descHash": 2486211072
    },
    "skills": [
      {
        "nameHash": 1813209645,
        "descHash": 4190230648
      },
      {
        "nameHash": 1448975781,
        "descHash": 2621801520
      }
    ],
    "passives": [
      {
        "nameHash": 4275365317,
        "descHash": 1621740187
      },
      {
        "nameHash": 3854790965,
        "descHash": 3155882867
      },
      {
        "nameHash": 587283525,
        "descHash": 3687897243
      }
    ]
  }
] as const;
export type CharacterInfo = typeof characterInfo[number];
export default characterInfo;
export const translatedCharacterInfo = (
) => {
  const { t } = useTranslation();
  return characterInfo.map((info) => {
    const { nameHash, descHash, constellations, constellationHash, energySkill, skills, passives, titleHash, detailHash, ...rest } = info;
    return {
      ...rest,
      name: t(`dm.${nameHash}`),
      desc: t(`dm.${descHash}`),
      title: t(`dm.${titleHash}`),
      detail: t(`dm.${detailHash}`),
      constellation: t(`dm.${constellationHash}`),
      constellations: constellations.map(({ nameHash, descHash }) => ({
        name: t(`dm.${nameHash}`),
        desc: t(`dm.${descHash}`),
      })),
      energySkill: {
        name: t(`dm.${energySkill.nameHash}`),
        desc: t(`dm.${energySkill.descHash}`),
      },
      skills: skills.map(({ nameHash, descHash }) => ({
        name: t(`dm.${nameHash}`),
        desc: t(`dm.${descHash}`),
      })),
      passives: passives.map(({ nameHash, descHash }) => ({
        name: t(`dm.${nameHash}`),
        desc: t(`dm.${descHash}`),
      })),
    }
  });
}

export type TranslatedCharacterInfo = ReturnType<typeof translatedCharacterInfo>[number];

/*
 type AvatarData = {
  id: number;
  nameId: string;
  nameHash: number;
  descHash: number;
  constellations: ConstellationData[];
  energySkill?: SkillData;
  skills: SkillData[];
  // subSkills: SkillData[];
  passives: SkillData[];
  rarity: 4 | 5;
  vision: string;
  weaponType: string;
  titleHash: number;
  detailHash: number;
};
type ConstellationData = {
  nameHash: number;
  descHash: number;
};
type SkillData = {
  nameHash: number;
  descHash: number;
};
 * */
