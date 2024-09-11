import { useTranslation } from "react-i18next";

const weaponInfo = [
  {
    "id": 11101,
    "type": "sword",
    "nameId": "dull_blade",
    "rarity": 1,
    "nameHash": 2410593283,
    "descHash": 3807468957,
    "refinementInfo": []
  },
  {
    "id": 12101,
    "type": "claymore",
    "nameId": "waster_greatsword",
    "rarity": 1,
    "nameHash": 2666951267,
    "descHash": 2490958125,
    "refinementInfo": []
  },
  {
    "id": 13101,
    "type": "polearm",
    "nameId": "beginner_s_protector",
    "rarity": 1,
    "nameHash": 2796697027,
    "descHash": 1707406541,
    "refinementInfo": []
  },
  {
    "id": 14101,
    "type": "catalyst",
    "nameId": "apprentice_s_notes",
    "rarity": 1,
    "nameHash": 3584825427,
    "descHash": 62211301,
    "refinementInfo": []
  },
  {
    "id": 15101,
    "type": "bow",
    "nameId": "hunter_s_bow",
    "rarity": 1,
    "nameHash": 3600623979,
    "descHash": 2408955477,
    "refinementInfo": []
  },
  {
    "id": 11201,
    "type": "sword",
    "nameId": "silver_sword",
    "rarity": 2,
    "nameHash": 2125206395,
    "descHash": 2342805333,
    "refinementInfo": []
  },
  {
    "id": 12201,
    "type": "claymore",
    "nameId": "old_merc_s_pal",
    "rarity": 2,
    "nameHash": 1182966603,
    "descHash": 169605981,
    "refinementInfo": []
  },
  {
    "id": 13201,
    "type": "polearm",
    "nameId": "iron_point",
    "rarity": 2,
    "nameHash": 3070169307,
    "descHash": 1460440477,
    "refinementInfo": []
  },
  {
    "id": 14201,
    "type": "catalyst",
    "nameId": "pocket_grimoire",
    "rarity": 2,
    "nameHash": 2705029563,
    "descHash": 728247149,
    "refinementInfo": []
  },
  {
    "id": 15201,
    "type": "bow",
    "nameId": "seasoned_hunter_s_bow",
    "rarity": 2,
    "nameHash": 2340970067,
    "descHash": 905810789,
    "refinementInfo": []
  },
  {
    "id": 11301,
    "type": "sword",
    "nameId": "cool_steel",
    "rarity": 3,
    "nameHash": 479076483,
    "descHash": 1214777829,
    "refinementInfo": [
      {
        "nameHash": 523615731,
        "descHash": 4047259305
      },
      {
        "nameHash": 3702337643,
        "descHash": 4252592161
      },
      {
        "nameHash": 3383361395,
        "descHash": 1779029265
      },
      {
        "nameHash": 2686426699,
        "descHash": 3979717609
      },
      {
        "nameHash": 1722706579,
        "descHash": 3264134801
      }
    ]
  },
  {
    "id": 11302,
    "type": "sword",
    "nameId": "harbinger_of_dawn",
    "rarity": 3,
    "nameHash": 1608953539,
    "descHash": 1716657229,
    "refinementInfo": [
      {
        "nameHash": 2866125259,
        "descHash": 307733865
      },
      {
        "nameHash": 1904734035,
        "descHash": 3332141809
      },
      {
        "nameHash": 2516138955,
        "descHash": 3037472457
      },
      {
        "nameHash": 2440249107,
        "descHash": 1527692505
      },
      {
        "nameHash": 1319974859,
        "descHash": 1272240945
      }
    ]
  },
  {
    "id": 11303,
    "type": "sword",
    "nameId": "traveler_s_handy_sword",
    "rarity": 3,
    "nameHash": 3673792067,
    "descHash": 2969158189,
    "refinementInfo": [
      {
        "nameHash": 3982569419,
        "descHash": 1907931185
      },
      {
        "nameHash": 3578935179,
        "descHash": 302455697
      },
      {
        "nameHash": 1971805307,
        "descHash": 1608926681
      },
      {
        "nameHash": 2976598075,
        "descHash": 2336567089
      },
      {
        "nameHash": 1119368259,
        "descHash": 1356454433
      }
    ]
  },
  {
    "id": 11304,
    "type": "sword",
    "nameId": "dark_iron_sword",
    "rarity": 3,
    "nameHash": 160493219,
    "descHash": 4211009349,
    "refinementInfo": [
      {
        "nameHash": 4047629611,
        "descHash": 1124150097
      },
      {
        "nameHash": 3304710627,
        "descHash": 3152487993
      },
      {
        "nameHash": 1835628963,
        "descHash": 2656165345
      },
      {
        "nameHash": 395848235,
        "descHash": 575353417
      },
      {
        "nameHash": 3337249451,
        "descHash": 3471395985
      }
    ]
  },
  {
    "id": 11305,
    "type": "sword",
    "nameId": "fillet_blade",
    "rarity": 3,
    "nameHash": 3421967235,
    "descHash": 2798582285,
    "refinementInfo": [
      {
        "nameHash": 3397834435,
        "descHash": 3893281385
      },
      {
        "nameHash": 1407710315,
        "descHash": 4143726001
      },
      {
        "nameHash": 1071782747,
        "descHash": 3297377633
      },
      {
        "nameHash": 2379581723,
        "descHash": 91557945
      },
      {
        "nameHash": 2190368347,
        "descHash": 3687483889
      }
    ]
  },
  {
    "id": 11306,
    "type": "sword",
    "nameId": "skyrider_sword",
    "rarity": 3,
    "nameHash": 1388004931,
    "descHash": 3086923557,
    "refinementInfo": [
      {
        "nameHash": 94261931,
        "descHash": 4238264529
      },
      {
        "nameHash": 1763553235,
        "descHash": 4191987009
      },
      {
        "nameHash": 849325035,
        "descHash": 283262361
      },
      {
        "nameHash": 2111115387,
        "descHash": 3076540873
      },
      {
        "nameHash": 3112448011,
        "descHash": 86444217
      }
    ]
  },
  {
    "id": 12301,
    "type": "claymore",
    "nameId": "ferrous_shadow",
    "rarity": 3,
    "nameHash": 1479961579,
    "descHash": 1887050717,
    "refinementInfo": [
      {
        "nameHash": 99463579,
        "descHash": 2855766121
      },
      {
        "nameHash": 3060552571,
        "descHash": 2312372713
      },
      {
        "nameHash": 4032497395,
        "descHash": 423698633
      },
      {
        "nameHash": 1304287955,
        "descHash": 3298730305
      },
      {
        "nameHash": 3832443723,
        "descHash": 3417004121
      }
    ]
  },
  {
    "id": 12302,
    "type": "claymore",
    "nameId": "bloodtainted_greatsword",
    "rarity": 3,
    "nameHash": 4090429643,
    "descHash": 3230364157,
    "refinementInfo": [
      {
        "nameHash": 2101250667,
        "descHash": 2986417169
      },
      {
        "nameHash": 406217499,
        "descHash": 448306209
      },
      {
        "nameHash": 3895183691,
        "descHash": 563867881
      },
      {
        "nameHash": 931715979,
        "descHash": 1722471113
      },
      {
        "nameHash": 246984427,
        "descHash": 2736186969
      }
    ]
  },
  {
    "id": 12303,
    "type": "claymore",
    "nameId": "white_iron_greatsword",
    "rarity": 3,
    "nameHash": 850802171,
    "descHash": 2243594437,
    "refinementInfo": [
      {
        "nameHash": 2479230075,
        "descHash": 3395408817
      },
      {
        "nameHash": 1122324635,
        "descHash": 568240425
      },
      {
        "nameHash": 2733367347,
        "descHash": 1069952849
      },
      {
        "nameHash": 1872400259,
        "descHash": 3748745
      },
      {
        "nameHash": 3996017211,
        "descHash": 622203977
      }
    ]
  },
  {
    "id": 12305,
    "type": "claymore",
    "nameId": "debate_club",
    "rarity": 3,
    "nameHash": 3097441915,
    "descHash": 2797040229,
    "refinementInfo": [
      {
        "nameHash": 2276876379,
        "descHash": 1389968321
      },
      {
        "nameHash": 2552035995,
        "descHash": 3174462481
      },
      {
        "nameHash": 3474529259,
        "descHash": 1857844849
      },
      {
        "nameHash": 4130799979,
        "descHash": 3559833745
      },
      {
        "nameHash": 1706534267,
        "descHash": 2231593369
      }
    ]
  },
  {
    "id": 12306,
    "type": "claymore",
    "nameId": "skyrider_greatsword",
    "rarity": 3,
    "nameHash": 2614170427,
    "descHash": 599093453,
    "refinementInfo": [
      {
        "nameHash": 3197152099,
        "descHash": 1429134689
      },
      {
        "nameHash": 1556773651,
        "descHash": 2570007249
      },
      {
        "nameHash": 1427393771,
        "descHash": 417154673
      },
      {
        "nameHash": 4211971891,
        "descHash": 2775093177
      },
      {
        "nameHash": 4080317355,
        "descHash": 513636433
      }
    ]
  },
  {
    "id": 13301,
    "type": "polearm",
    "nameId": "white_tassel",
    "rarity": 3,
    "nameHash": 1390797107,
    "descHash": 3496480741,
    "refinementInfo": [
      {
        "nameHash": 4054406475,
        "descHash": 419764609
      },
      {
        "nameHash": 2877466907,
        "descHash": 2847269313
      },
      {
        "nameHash": 2467168099,
        "descHash": 2856889985
      },
      {
        "nameHash": 3066283019,
        "descHash": 3378916585
      },
      {
        "nameHash": 2871793795,
        "descHash": 2426268353
      }
    ]
  },
  {
    "id": 13302,
    "type": "polearm",
    "nameId": "halberd",
    "rarity": 3,
    "nameHash": 618786571,
    "descHash": 4218316925,
    "refinementInfo": [
      {
        "nameHash": 1364562483,
        "descHash": 12012241
      },
      {
        "nameHash": 916244787,
        "descHash": 4224599497
      },
      {
        "nameHash": 414431683,
        "descHash": 1141380905
      },
      {
        "nameHash": 2036962203,
        "descHash": 2326110457
      },
      {
        "nameHash": 1097898243,
        "descHash": 1869215529
      }
    ]
  },
  {
    "id": 13303,
    "type": "polearm",
    "nameId": "black_tassel",
    "rarity": 3,
    "nameHash": 4103766499,
    "descHash": 2692633181,
    "refinementInfo": [
      {
        "nameHash": 651784635,
        "descHash": 1419204745
      },
      {
        "nameHash": 2420054267,
        "descHash": 3187246905
      },
      {
        "nameHash": 3338676083,
        "descHash": 1250775489
      },
      {
        "nameHash": 899547187,
        "descHash": 2335392873
      },
      {
        "nameHash": 3314157803,
        "descHash": 3410883329
      }
    ]
  },
  {
    "id": 14301,
    "type": "catalyst",
    "nameId": "magic_guide",
    "rarity": 3,
    "nameHash": 2279290283,
    "descHash": 1128957,
    "refinementInfo": [
      {
        "nameHash": 2612787867,
        "descHash": 1270011833
      },
      {
        "nameHash": 3862042163,
        "descHash": 34396009
      },
      {
        "nameHash": 2667214787,
        "descHash": 4226431209
      },
      {
        "nameHash": 377361155,
        "descHash": 1865334985
      },
      {
        "nameHash": 54857595,
        "descHash": 3466198865
      }
    ]
  },
  {
    "id": 14302,
    "type": "catalyst",
    "nameId": "thrilling_tales_of_dragon_slayers",
    "rarity": 3,
    "nameHash": 3500935003,
    "descHash": 4081562589,
    "refinementInfo": [
      {
        "nameHash": 110253283,
        "descHash": 1439036377
      },
      {
        "nameHash": 3105176579,
        "descHash": 880919241
      },
      {
        "nameHash": 2917197323,
        "descHash": 3534876777
      },
      {
        "nameHash": 1435492867,
        "descHash": 3632690217
      },
      {
        "nameHash": 1610242915,
        "descHash": 4025167113
      }
    ]
  },
  {
    "id": 14303,
    "type": "catalyst",
    "nameId": "otherworldly_story",
    "rarity": 3,
    "nameHash": 1406746947,
    "descHash": 201204037,
    "refinementInfo": [
      {
        "nameHash": 2433054179,
        "descHash": 3986553513
      },
      {
        "nameHash": 3846219291,
        "descHash": 4118449793
      },
      {
        "nameHash": 3624857035,
        "descHash": 3866142489
      },
      {
        "nameHash": 813820979,
        "descHash": 3983462457
      },
      {
        "nameHash": 577103787,
        "descHash": 694477017
      }
    ]
  },
  {
    "id": 14304,
    "type": "catalyst",
    "nameId": "emerald_orb",
    "rarity": 3,
    "nameHash": 2963220587,
    "descHash": 4004013141,
    "refinementInfo": [
      {
        "nameHash": 4164346867,
        "descHash": 3736277897
      },
      {
        "nameHash": 35528435,
        "descHash": 3424958577
      },
      {
        "nameHash": 3518607987,
        "descHash": 3724222105
      },
      {
        "nameHash": 904456067,
        "descHash": 1485253745
      },
      {
        "nameHash": 2743659331,
        "descHash": 3868306657
      }
    ]
  },
  {
    "id": 14305,
    "type": "catalyst",
    "nameId": "twin_nephrite",
    "rarity": 3,
    "nameHash": 3719372715,
    "descHash": 2737744437,
    "refinementInfo": [
      {
        "nameHash": 2615715275,
        "descHash": 1635683641
      },
      {
        "nameHash": 3851292843,
        "descHash": 389885337
      },
      {
        "nameHash": 2254257499,
        "descHash": 59677433
      },
      {
        "nameHash": 28673707,
        "descHash": 2971188409
      },
      {
        "nameHash": 3305772819,
        "descHash": 1364056569
      }
    ]
  },
  {
    "id": 15301,
    "type": "bow",
    "nameId": "raven_bow",
    "rarity": 3,
    "nameHash": 3975746731,
    "descHash": 367902357,
    "refinementInfo": [
      {
        "nameHash": 1958685971,
        "descHash": 4021611305
      },
      {
        "nameHash": 1245361827,
        "descHash": 4029571225
      },
      {
        "nameHash": 544849091,
        "descHash": 2539460561
      },
      {
        "nameHash": 1370734891,
        "descHash": 1584444065
      },
      {
        "nameHash": 2476346187,
        "descHash": 3786618233
      }
    ]
  },
  {
    "id": 15302,
    "type": "bow",
    "nameId": "sharpshooter_s_oath",
    "rarity": 3,
    "nameHash": 656120259,
    "descHash": 894007269,
    "refinementInfo": [
      {
        "nameHash": 1849455683,
        "descHash": 2851659249
      },
      {
        "nameHash": 1469197779,
        "descHash": 1636621233
      },
      {
        "nameHash": 2395083315,
        "descHash": 3110378385
      },
      {
        "nameHash": 3312747755,
        "descHash": 4144128505
      },
      {
        "nameHash": 3465493459,
        "descHash": 3361078809
      }
    ]
  },
  {
    "id": 15303,
    "type": "bow",
    "nameId": "recurve_bow",
    "rarity": 3,
    "nameHash": 4267718859,
    "descHash": 851960253,
    "refinementInfo": [
      {
        "nameHash": 3707047091,
        "descHash": 2023641585
      },
      {
        "nameHash": 54254971,
        "descHash": 79083241
      },
      {
        "nameHash": 3010639355,
        "descHash": 2689073929
      },
      {
        "nameHash": 2542016059,
        "descHash": 1358074017
      },
      {
        "nameHash": 902282051,
        "descHash": 3623505681
      }
    ]
  },
  {
    "id": 15304,
    "type": "bow",
    "nameId": "slingshot",
    "rarity": 3,
    "nameHash": 1021898539,
    "descHash": 2260945613,
    "refinementInfo": [
      {
        "nameHash": 595085987,
        "descHash": 3429616905
      },
      {
        "nameHash": 3207233203,
        "descHash": 1915137313
      },
      {
        "nameHash": 3579112539,
        "descHash": 224169849
      },
      {
        "nameHash": 500802395,
        "descHash": 881017425
      },
      {
        "nameHash": 2384519283,
        "descHash": 1534621105
      }
    ]
  },
  {
    "id": 15305,
    "type": "bow",
    "nameId": "messenger",
    "rarity": 3,
    "nameHash": 4139294531,
    "descHash": 2838701821,
    "refinementInfo": [
      {
        "nameHash": 3847633451,
        "descHash": 1470376425
      },
      {
        "nameHash": 3919718523,
        "descHash": 186000497
      },
      {
        "nameHash": 2952520179,
        "descHash": 3712082401
      },
      {
        "nameHash": 1070991403,
        "descHash": 333248849
      },
      {
        "nameHash": 2893964243,
        "descHash": 386704385
      }
    ]
  },
  {
    "id": 11401,
    "type": "sword",
    "nameId": "favonius_sword",
    "rarity": 4,
    "nameHash": 2474354867,
    "descHash": 1169620325,
    "refinementInfo": [
      {
        "nameHash": 1914259,
        "descHash": 3907822617
      },
      {
        "nameHash": 1552700819,
        "descHash": 3433948025
      },
      {
        "nameHash": 335718315,
        "descHash": 128560713
      },
      {
        "nameHash": 1396000043,
        "descHash": 375309617
      },
      {
        "nameHash": 3252085691,
        "descHash": 3671275313
      }
    ]
  },
  {
    "id": 11402,
    "type": "sword",
    "nameId": "the_flute",
    "rarity": 4,
    "nameHash": 3587621259,
    "descHash": 2174961477,
    "refinementInfo": [
      {
        "nameHash": 3057490131,
        "descHash": 3475654257
      },
      {
        "nameHash": 987747875,
        "descHash": 3917796225
      },
      {
        "nameHash": 1309300323,
        "descHash": 2774146129
      },
      {
        "nameHash": 701669851,
        "descHash": 1603229217
      },
      {
        "nameHash": 1114777131,
        "descHash": 3801618697
      }
    ]
  },
  {
    "id": 11403,
    "type": "sword",
    "nameId": "sacrificial_sword",
    "rarity": 4,
    "nameHash": 1990641987,
    "descHash": 4131542477,
    "refinementInfo": [
      {
        "nameHash": 2041231043,
        "descHash": 1838208513
      },
      {
        "nameHash": 4221614027,
        "descHash": 3695199497
      },
      {
        "nameHash": 648728683,
        "descHash": 327206377
      },
      {
        "nameHash": 2145684963,
        "descHash": 434906769
      },
      {
        "nameHash": 3001782875,
        "descHash": 825324697
      }
    ]
  },
  {
    "id": 11404,
    "type": "sword",
    "nameId": "royal_longsword",
    "rarity": 4,
    "nameHash": 2375993851,
    "descHash": 1115870133,
    "refinementInfo": [
      {
        "nameHash": 2129974699,
        "descHash": 299250633
      },
      {
        "nameHash": 744390051,
        "descHash": 536277905
      },
      {
        "nameHash": 1800526803,
        "descHash": 3141229913
      },
      {
        "nameHash": 3891197923,
        "descHash": 1601558289
      },
      {
        "nameHash": 942758755,
        "descHash": 3338287161
      }
    ]
  },
  {
    "id": 11405,
    "type": "sword",
    "nameId": "lion_s_roar",
    "rarity": 4,
    "nameHash": 1321135667,
    "descHash": 750378765,
    "refinementInfo": [
      {
        "nameHash": 2541719715,
        "descHash": 4063568689
      },
      {
        "nameHash": 2016717299,
        "descHash": 3309338761
      },
      {
        "nameHash": 2362445307,
        "descHash": 3276257433
      },
      {
        "nameHash": 2458188387,
        "descHash": 228648857
      },
      {
        "nameHash": 1522029867,
        "descHash": 2630710345
      }
    ]
  },
  {
    "id": 11406,
    "type": "sword",
    "nameId": "prototype_rancour",
    "rarity": 4,
    "nameHash": 1991707099,
    "descHash": 626666981,
    "refinementInfo": [
      {
        "nameHash": 2507863675,
        "descHash": 3563143057
      },
      {
        "nameHash": 129973411,
        "descHash": 1802515777
      },
      {
        "nameHash": 1114407539,
        "descHash": 2817384937
      },
      {
        "nameHash": 3010340987,
        "descHash": 14760489
      },
      {
        "nameHash": 2108574027,
        "descHash": 3447558873
      }
    ]
  },
  {
    "id": 11407,
    "type": "sword",
    "nameId": "iron_sting",
    "rarity": 4,
    "nameHash": 4103022435,
    "descHash": 904885541,
    "refinementInfo": [
      {
        "nameHash": 3208149443,
        "descHash": 4042640001
      },
      {
        "nameHash": 1443191355,
        "descHash": 215695545
      },
      {
        "nameHash": 184858347,
        "descHash": 527934417
      },
      {
        "nameHash": 2831639755,
        "descHash": 1988092641
      },
      {
        "nameHash": 1485303435,
        "descHash": 452776505
      }
    ]
  },
  {
    "id": 11408,
    "type": "sword",
    "nameId": "blackcliff_longsword",
    "rarity": 4,
    "nameHash": 3378007475,
    "descHash": 2690715037,
    "refinementInfo": [
      {
        "nameHash": 3117686331,
        "descHash": 3223695473
      },
      {
        "nameHash": 175286851,
        "descHash": 3223662353
      },
      {
        "nameHash": 2500561803,
        "descHash": 143574985
      },
      {
        "nameHash": 2955442235,
        "descHash": 2925900017
      },
      {
        "nameHash": 4022012131,
        "descHash": 570467441
      }
    ]
  },
  {
    "id": 11409,
    "type": "sword",
    "nameId": "the_black_sword",
    "rarity": 4,
    "nameHash": 3796905611,
    "descHash": 1253880813,
    "refinementInfo": [
      {
        "nameHash": 1092738771,
        "descHash": 1687951521
      },
      {
        "nameHash": 859237731,
        "descHash": 4260048817
      },
      {
        "nameHash": 2226122899,
        "descHash": 2207401681
      },
      {
        "nameHash": 193959043,
        "descHash": 4178576897
      },
      {
        "nameHash": 1545992315,
        "descHash": 1270460209
      }
    ]
  },
  {
    "id": 11412,
    "type": "sword",
    "nameId": "sword_of_descension",
    "rarity": 4,
    "nameHash": 1773425155,
    "descHash": 3798627613,
    "refinementInfo": [
      {
        "nameHash": 613846163,
        "descHash": 2090107097
      }
    ]
  },
  {
    "id": 11413,
    "type": "sword",
    "nameId": "festering_desire",
    "rarity": 4,
    "nameHash": 2749853923,
    "descHash": 279012485,
    "refinementInfo": [
      {
        "nameHash": 1399609651,
        "descHash": 1015127657
      },
      {
        "nameHash": 2425199739,
        "descHash": 2757463545
      },
      {
        "nameHash": 3022611643,
        "descHash": 3027339465
      },
      {
        "nameHash": 1946002339,
        "descHash": 1124392161
      },
      {
        "nameHash": 1934830979,
        "descHash": 3098144017
      }
    ]
  },
  {
    "id": 11410,
    "type": "sword",
    "nameId": "the_alley_flash",
    "rarity": 4,
    "nameHash": 2947140987,
    "descHash": 3674581941,
    "refinementInfo": [
      {
        "nameHash": 3197835587,
        "descHash": 820748057
      },
      {
        "nameHash": 790249091,
        "descHash": 221557857
      },
      {
        "nameHash": 4219645787,
        "descHash": 1186671217
      },
      {
        "nameHash": 1513577275,
        "descHash": 191893953
      },
      {
        "nameHash": 2365025043,
        "descHash": 493971049
      }
    ]
  },
  {
    "id": 11414,
    "type": "sword",
    "nameId": "amenoma_kageuchi",
    "rarity": 4,
    "nameHash": 1990820123,
    "descHash": 1446802077,
    "refinementInfo": [
      {
        "nameHash": 2700351571,
        "descHash": 984538585
      },
      {
        "nameHash": 2380875155,
        "descHash": 4113058249
      },
      {
        "nameHash": 472537043,
        "descHash": 3362584929
      },
      {
        "nameHash": 1247800371,
        "descHash": 472483073
      },
      {
        "nameHash": 1660598451,
        "descHash": 3428672009
      }
    ]
  },
  {
    "id": 11415,
    "type": "sword",
    "nameId": "cinnabar_spindle",
    "rarity": 4,
    "nameHash": 342097547,
    "descHash": 1249151821,
    "refinementInfo": [
      {
        "nameHash": 1348697123,
        "descHash": 1104846361
      },
      {
        "nameHash": 1813743603,
        "descHash": 4208719337
      },
      {
        "nameHash": 52424235,
        "descHash": 4195913993
      },
      {
        "nameHash": 3966264403,
        "descHash": 1849966937
      },
      {
        "nameHash": 288666635,
        "descHash": 3490528385
      }
    ]
  },
  {
    "id": 11416,
    "type": "sword",
    "nameId": "kagotsurube_isshin",
    "rarity": 4,
    "nameHash": 1012170803,
    "descHash": 2752898277,
    "refinementInfo": [
      {
        "nameHash": 607067963,
        "descHash": 3133487137
      }
    ]
  },
  {
    "id": 11417,
    "type": "sword",
    "nameId": "sapwood_blade",
    "rarity": 4,
    "nameHash": 313300315,
    "descHash": 3987309645,
    "refinementInfo": [
      {
        "nameHash": 243701939,
        "descHash": 979137945
      },
      {
        "nameHash": 1381400659,
        "descHash": 3459882025
      },
      {
        "nameHash": 560773659,
        "descHash": 2658277625
      },
      {
        "nameHash": 2694159123,
        "descHash": 3420168881
      },
      {
        "nameHash": 2257505883,
        "descHash": 2510301081
      }
    ]
  },
  {
    "id": 11418,
    "type": "sword",
    "nameId": "xiphos_moonlight",
    "rarity": 4,
    "nameHash": 143051931,
    "descHash": 2220863565,
    "refinementInfo": [
      {
        "nameHash": 815912907,
        "descHash": 4282331977
      },
      {
        "nameHash": 3502264827,
        "descHash": 594057257
      },
      {
        "nameHash": 2144501923,
        "descHash": 2533040249
      },
      {
        "nameHash": 3709039099,
        "descHash": 3869556209
      },
      {
        "nameHash": 1702903411,
        "descHash": 3714764705
      }
    ]
  },
  {
    "id": 11422,
    "type": "sword",
    "nameId": "toukabou_shigure",
    "rarity": 4,
    "nameHash": 2448629019,
    "descHash": 449599061,
    "refinementInfo": [
      {
        "nameHash": 3451100379,
        "descHash": 4144694345
      },
      {
        "nameHash": 1435365675,
        "descHash": 4192568969
      },
      {
        "nameHash": 1769231171,
        "descHash": 3708899353
      },
      {
        "nameHash": 2358176443,
        "descHash": 4047793905
      },
      {
        "nameHash": 2029582603,
        "descHash": 3683552009
      }
    ]
  },
  {
    "id": 11424,
    "type": "sword",
    "nameId": "wolf_fang",
    "rarity": 4,
    "nameHash": 2265792579,
    "descHash": 3195892829,
    "refinementInfo": [
      {
        "nameHash": 2361105603,
        "descHash": 1103989697
      },
      {
        "nameHash": 665350219,
        "descHash": 2246840761
      },
      {
        "nameHash": 3658910035,
        "descHash": 3286136633
      },
      {
        "nameHash": 2853246259,
        "descHash": 409508081
      },
      {
        "nameHash": 1229532227,
        "descHash": 1557883289
      }
    ]
  },
  {
    "id": 11425,
    "type": "sword",
    "nameId": "finale_of_the_deep",
    "rarity": 4,
    "nameHash": 800766043,
    "descHash": 1506912621,
    "refinementInfo": [
      {
        "nameHash": 2548633643,
        "descHash": 3336813881
      },
      {
        "nameHash": 565430179,
        "descHash": 1500128585
      },
      {
        "nameHash": 761834251,
        "descHash": 3140078825
      },
      {
        "nameHash": 1072868019,
        "descHash": 1833521993
      },
      {
        "nameHash": 3102522787,
        "descHash": 509281977
      }
    ]
  },
  {
    "id": 11426,
    "type": "sword",
    "nameId": "fleuve_cendre_ferryman",
    "rarity": 4,
    "nameHash": 1921306659,
    "descHash": 1176357813,
    "refinementInfo": [
      {
        "nameHash": 3150573483,
        "descHash": 1248450665
      },
      {
        "nameHash": 1518894483,
        "descHash": 210123041
      },
      {
        "nameHash": 3428202107,
        "descHash": 1850668225
      },
      {
        "nameHash": 3744883139,
        "descHash": 2805880025
      },
      {
        "nameHash": 4231466539,
        "descHash": 1703274889
      }
    ]
  },
  {
    "id": 11427,
    "type": "sword",
    "nameId": "the_dockhand_s_assistant",
    "rarity": 4,
    "nameHash": 1790067483,
    "descHash": 3916442333,
    "refinementInfo": [
      {
        "nameHash": 608700371,
        "descHash": 599063001
      },
      {
        "nameHash": 2943048963,
        "descHash": 2755790513
      },
      {
        "nameHash": 2850241187,
        "descHash": 2539226393
      },
      {
        "nameHash": 324631875,
        "descHash": 1592387057
      },
      {
        "nameHash": 1176721851,
        "descHash": 1802453905
      }
    ]
  },
  {
    "id": 11428,
    "type": "sword",
    "nameId": "sword_of_narzissenkreuz",
    "rarity": 4,
    "nameHash": 3016493955,
    "descHash": 1128438781,
    "refinementInfo": [
      {
        "nameHash": 601505755,
        "descHash": 3374127689
      },
      {
        "nameHash": 1125422011,
        "descHash": 3777858249
      },
      {
        "nameHash": 1020748699,
        "descHash": 3907757297
      },
      {
        "nameHash": 2192953035,
        "descHash": 1378454873
      },
      {
        "nameHash": 185760547,
        "descHash": 1403347537
      }
    ]
  },
  {
    "id": 11431,
    "type": "sword",
    "nameId": "flute_of_ezpitzal",
    "rarity": 4,
    "nameHash": 3434743027,
    "descHash": 2033585341,
    "refinementInfo": [
      {
        "nameHash": 641137867,
        "descHash": 1202080585
      },
      {
        "nameHash": 1317648891,
        "descHash": 749488785
      },
      {
        "nameHash": 1892110635,
        "descHash": 2052768985
      },
      {
        "nameHash": 2790338987,
        "descHash": 2931565025
      },
      {
        "nameHash": 1959332915,
        "descHash": 2652634777
      }
    ]
  },
  {
    "id": 12401,
    "type": "claymore",
    "nameId": "favonius_greatsword",
    "rarity": 4,
    "nameHash": 735056795,
    "descHash": 4068970301,
    "refinementInfo": [
      {
        "nameHash": 2638835051,
        "descHash": 1804237897
      },
      {
        "nameHash": 3970563883,
        "descHash": 3964113633
      },
      {
        "nameHash": 490894475,
        "descHash": 1985577185
      },
      {
        "nameHash": 3946055427,
        "descHash": 4218866921
      },
      {
        "nameHash": 506630267,
        "descHash": 1263404889
      }
    ]
  },
  {
    "id": 12402,
    "type": "claymore",
    "nameId": "the_bell",
    "rarity": 4,
    "nameHash": 930640955,
    "descHash": 2055764669,
    "refinementInfo": [
      {
        "nameHash": 896844259,
        "descHash": 3641399833
      },
      {
        "nameHash": 3997414571,
        "descHash": 1645488473
      },
      {
        "nameHash": 4263387163,
        "descHash": 2418525641
      },
      {
        "nameHash": 914985779,
        "descHash": 3996316769
      },
      {
        "nameHash": 1836628747,
        "descHash": 3001724009
      }
    ]
  },
  {
    "id": 12403,
    "type": "claymore",
    "nameId": "sacrificial_greatsword",
    "rarity": 4,
    "nameHash": 1675686363,
    "descHash": 3985911901,
    "refinementInfo": [
      {
        "nameHash": 4267154851,
        "descHash": 327279921
      },
      {
        "nameHash": 610751099,
        "descHash": 4150617129
      },
      {
        "nameHash": 3100684235,
        "descHash": 665615489
      },
      {
        "nameHash": 1352016307,
        "descHash": 1396465993
      },
      {
        "nameHash": 2312640651,
        "descHash": 1659390633
      }
    ]
  },
  {
    "id": 12404,
    "type": "claymore",
    "nameId": "royal_greatsword",
    "rarity": 4,
    "nameHash": 877751435,
    "descHash": 205162989,
    "refinementInfo": [
      {
        "nameHash": 2759911603,
        "descHash": 2117112953
      },
      {
        "nameHash": 1920335227,
        "descHash": 3119127689
      },
      {
        "nameHash": 4067505323,
        "descHash": 1440638649
      },
      {
        "nameHash": 1453285163,
        "descHash": 713108929
      },
      {
        "nameHash": 2176134843,
        "descHash": 1895179769
      }
    ]
  },
  {
    "id": 12405,
    "type": "claymore",
    "nameId": "rainslasher",
    "rarity": 4,
    "nameHash": 3684723963,
    "descHash": 2688397213,
    "refinementInfo": [
      {
        "nameHash": 3070186411,
        "descHash": 1692191241
      },
      {
        "nameHash": 3015786819,
        "descHash": 3691086665
      },
      {
        "nameHash": 2649926907,
        "descHash": 3957483593
      },
      {
        "nameHash": 1536940163,
        "descHash": 605182377
      },
      {
        "nameHash": 135182203,
        "descHash": 3866769929
      }
    ]
  },
  {
    "id": 12406,
    "type": "claymore",
    "nameId": "prototype_archaic",
    "rarity": 4,
    "nameHash": 3722933411,
    "descHash": 356356197,
    "refinementInfo": [
      {
        "nameHash": 2430074939,
        "descHash": 2542595553
      },
      {
        "nameHash": 668379347,
        "descHash": 586715849
      },
      {
        "nameHash": 2450269283,
        "descHash": 3163655049
      },
      {
        "nameHash": 3985941171,
        "descHash": 3470900905
      },
      {
        "nameHash": 2322648115,
        "descHash": 2849616817
      }
    ]
  },
  {
    "id": 12407,
    "type": "claymore",
    "nameId": "whiteblind",
    "rarity": 4,
    "nameHash": 680510411,
    "descHash": 1683286045,
    "refinementInfo": [
      {
        "nameHash": 2323524931,
        "descHash": 762668369
      },
      {
        "nameHash": 746210211,
        "descHash": 8483777
      },
      {
        "nameHash": 1535239955,
        "descHash": 1860409153
      },
      {
        "nameHash": 444775803,
        "descHash": 3017173617
      },
      {
        "nameHash": 3265161211,
        "descHash": 4191876393
      }
    ]
  },
  {
    "id": 12408,
    "type": "claymore",
    "nameId": "blackcliff_slasher",
    "rarity": 4,
    "nameHash": 20848859,
    "descHash": 4287559013,
    "refinementInfo": [
      {
        "nameHash": 2584262195,
        "descHash": 286622321
      },
      {
        "nameHash": 2775455723,
        "descHash": 626084945
      },
      {
        "nameHash": 1746768075,
        "descHash": 2580781905
      },
      {
        "nameHash": 1599261995,
        "descHash": 3771057593
      },
      {
        "nameHash": 2172529947,
        "descHash": 2662618537
      }
    ]
  },
  {
    "id": 12409,
    "type": "claymore",
    "nameId": "serpent_spine",
    "rarity": 4,
    "nameHash": 1437658243,
    "descHash": 4199357237,
    "refinementInfo": [
      {
        "nameHash": 2504503675,
        "descHash": 3670994657
      },
      {
        "nameHash": 3914708531,
        "descHash": 38478873
      },
      {
        "nameHash": 882589075,
        "descHash": 663761017
      },
      {
        "nameHash": 185963979,
        "descHash": 432294409
      },
      {
        "nameHash": 240385755,
        "descHash": 3300288489
      }
    ]
  },
  {
    "id": 12411,
    "type": "claymore",
    "nameId": "snow_tombed_starsilver",
    "rarity": 4,
    "nameHash": 2753539619,
    "descHash": 2688837757,
    "refinementInfo": [
      {
        "nameHash": 486943795,
        "descHash": 928696521
      },
      {
        "nameHash": 1346038779,
        "descHash": 2912439457
      },
      {
        "nameHash": 1957483979,
        "descHash": 1964272937
      },
      {
        "nameHash": 314309907,
        "descHash": 3642074465
      },
      {
        "nameHash": 3302787771,
        "descHash": 2833564329
      }
    ]
  },
  {
    "id": 12410,
    "type": "claymore",
    "nameId": "lithic_blade",
    "rarity": 4,
    "nameHash": 2006422931,
    "descHash": 3110406349,
    "refinementInfo": [
      {
        "nameHash": 2185338403,
        "descHash": 3932180281
      },
      {
        "nameHash": 2180294243,
        "descHash": 1375954089
      },
      {
        "nameHash": 3417339803,
        "descHash": 3700384849
      },
      {
        "nameHash": 3533218187,
        "descHash": 1731395913
      },
      {
        "nameHash": 3587062891,
        "descHash": 2487928801
      }
    ]
  },
  {
    "id": 12414,
    "type": "claymore",
    "nameId": "katsuragikiri_nagamasa",
    "rarity": 4,
    "nameHash": 4193089947,
    "descHash": 2449465901,
    "refinementInfo": [
      {
        "nameHash": 1828182659,
        "descHash": 437621345
      },
      {
        "nameHash": 3483722371,
        "descHash": 4257676377
      },
      {
        "nameHash": 981176883,
        "descHash": 2352434905
      },
      {
        "nameHash": 3846627859,
        "descHash": 715445137
      },
      {
        "nameHash": 1745286795,
        "descHash": 2607024913
      }
    ]
  },
  {
    "id": 12412,
    "type": "claymore",
    "nameId": "luxurious_sea_lord",
    "rarity": 4,
    "nameHash": 346510395,
    "descHash": 3519261853,
    "refinementInfo": [
      {
        "nameHash": 1016634707,
        "descHash": 2335370529
      },
      {
        "nameHash": 2372130131,
        "descHash": 2419718961
      },
      {
        "nameHash": 3628226555,
        "descHash": 1030583761
      },
      {
        "nameHash": 2930013435,
        "descHash": 292425609
      },
      {
        "nameHash": 949506483,
        "descHash": 2434899201
      }
    ]
  },
  {
    "id": 12416,
    "type": "claymore",
    "nameId": "akuoumaru",
    "rarity": 4,
    "nameHash": 2359799475,
    "descHash": 4140001317,
    "refinementInfo": [
      {
        "nameHash": 737697771,
        "descHash": 174137073
      },
      {
        "nameHash": 1678152843,
        "descHash": 1416683081
      },
      {
        "nameHash": 3478676971,
        "descHash": 929790153
      },
      {
        "nameHash": 2511917067,
        "descHash": 3358068185
      },
      {
        "nameHash": 2383998915,
        "descHash": 1438082665
      }
    ]
  },
  {
    "id": 12417,
    "type": "claymore",
    "nameId": "forest_regalia",
    "rarity": 4,
    "nameHash": 902184579,
    "descHash": 2548100069,
    "refinementInfo": [
      {
        "nameHash": 3264225139,
        "descHash": 3788767897
      },
      {
        "nameHash": 1398894123,
        "descHash": 1250863065
      },
      {
        "nameHash": 1999252763,
        "descHash": 2950728033
      },
      {
        "nameHash": 792456187,
        "descHash": 3409962761
      },
      {
        "nameHash": 2691070627,
        "descHash": 2847008297
      }
    ]
  },
  {
    "id": 12415,
    "type": "claymore",
    "nameId": "makhaira_aquamarine",
    "rarity": 4,
    "nameHash": 3073454867,
    "descHash": 370563661,
    "refinementInfo": [
      {
        "nameHash": 1388031899,
        "descHash": 4253695721
      },
      {
        "nameHash": 3452890147,
        "descHash": 2631100273
      },
      {
        "nameHash": 3079238395,
        "descHash": 2587200169
      },
      {
        "nameHash": 1203956419,
        "descHash": 1205059969
      },
      {
        "nameHash": 2153521307,
        "descHash": 3020531697
      }
    ]
  },
  {
    "id": 12418,
    "type": "claymore",
    "nameId": "mailed_flower",
    "rarity": 4,
    "nameHash": 1200948859,
    "descHash": 1929795277,
    "refinementInfo": [
      {
        "nameHash": 3332024747,
        "descHash": 1871681561
      },
      {
        "nameHash": 2330732555,
        "descHash": 1564752681
      },
      {
        "nameHash": 2577799971,
        "descHash": 4014670841
      },
      {
        "nameHash": 1265062867,
        "descHash": 1210736121
      },
      {
        "nameHash": 141119323,
        "descHash": 3281999001
      }
    ]
  },
  {
    "id": 12424,
    "type": "claymore",
    "nameId": "talking_stick",
    "rarity": 4,
    "nameHash": 3459616011,
    "descHash": 3235165093,
    "refinementInfo": [
      {
        "nameHash": 691666275,
        "descHash": 660840241
      },
      {
        "nameHash": 711176003,
        "descHash": 1735712289
      },
      {
        "nameHash": 645337715,
        "descHash": 3917427265
      },
      {
        "nameHash": 2576049259,
        "descHash": 3498175529
      },
      {
        "nameHash": 2470144971,
        "descHash": 3125054561
      }
    ]
  },
  {
    "id": 12425,
    "type": "claymore",
    "nameId": "tidal_shadow",
    "rarity": 4,
    "nameHash": 2077869763,
    "descHash": 1211932805,
    "refinementInfo": [
      {
        "nameHash": 4049199251,
        "descHash": 2478658393
      },
      {
        "nameHash": 674747003,
        "descHash": 3375917609
      },
      {
        "nameHash": 2124565483,
        "descHash": 2406033353
      },
      {
        "nameHash": 2759381691,
        "descHash": 781679801
      },
      {
        "nameHash": 2258943483,
        "descHash": 179909169
      }
    ]
  },
  {
    "id": 12427,
    "type": "claymore",
    "nameId": "portable_power_saw",
    "rarity": 4,
    "nameHash": 3693117451,
    "descHash": 1920379541,
    "refinementInfo": [
      {
        "nameHash": 2632478283,
        "descHash": 1517871385
      },
      {
        "nameHash": 4083639739,
        "descHash": 2632278705
      },
      {
        "nameHash": 4284059019,
        "descHash": 2397891113
      },
      {
        "nameHash": 1158557283,
        "descHash": 3702201761
      },
      {
        "nameHash": 2415974179,
        "descHash": 2409099817
      }
    ]
  },
  {
    "id": 12426,
    "type": "claymore",
    "nameId": "ultimate_overlord_s_mega_magic_sword",
    "rarity": 4,
    "nameHash": 933442195,
    "descHash": 465747525,
    "refinementInfo": [
      {
        "nameHash": 508918019,
        "descHash": 2549899337
      },
      {
        "nameHash": 3809487403,
        "descHash": 991088745
      },
      {
        "nameHash": 2545585891,
        "descHash": 1233808257
      },
      {
        "nameHash": 2400249843,
        "descHash": 3425954033
      },
      {
        "nameHash": 3078961123,
        "descHash": 1118454481
      }
    ]
  },
  {
    "id": 12431,
    "type": "claymore",
    "nameId": "earth_shaker",
    "rarity": 4,
    "nameHash": 2481464075,
    "descHash": 469532517,
    "refinementInfo": [
      {
        "nameHash": 2824611011,
        "descHash": 1106830769
      },
      {
        "nameHash": 529466347,
        "descHash": 4120989449
      },
      {
        "nameHash": 1062506011,
        "descHash": 283333489
      },
      {
        "nameHash": 426612339,
        "descHash": 3544584305
      },
      {
        "nameHash": 3611039419,
        "descHash": 178699713
      }
    ]
  },
  {
    "id": 13401,
    "type": "polearm",
    "nameId": "dragon_s_bane",
    "rarity": 4,
    "nameHash": 2664629131,
    "descHash": 1575094381,
    "refinementInfo": [
      {
        "nameHash": 2359918763,
        "descHash": 2788068617
      },
      {
        "nameHash": 2534035563,
        "descHash": 2618093289
      },
      {
        "nameHash": 713219995,
        "descHash": 3771176529
      },
      {
        "nameHash": 2266747051,
        "descHash": 3411103305
      },
      {
        "nameHash": 514784907,
        "descHash": 2489651689
      }
    ]
  },
  {
    "id": 13402,
    "type": "polearm",
    "nameId": "prototype_starglitter",
    "rarity": 4,
    "nameHash": 1154009435,
    "descHash": 2616355533,
    "refinementInfo": [
      {
        "nameHash": 734556419,
        "descHash": 3806082625
      },
      {
        "nameHash": 1696465867,
        "descHash": 173699449
      },
      {
        "nameHash": 1229704443,
        "descHash": 470481049
      },
      {
        "nameHash": 95073131,
        "descHash": 2527665809
      },
      {
        "nameHash": 3258658763,
        "descHash": 1658920241
      }
    ]
  },
  {
    "id": 13403,
    "type": "polearm",
    "nameId": "crescent_pike",
    "rarity": 4,
    "nameHash": 578575283,
    "descHash": 4181232573,
    "refinementInfo": [
      {
        "nameHash": 1859047483,
        "descHash": 3150512345
      },
      {
        "nameHash": 2252920179,
        "descHash": 1629566577
      },
      {
        "nameHash": 1893343643,
        "descHash": 162703737
      },
      {
        "nameHash": 2472895091,
        "descHash": 2050638753
      },
      {
        "nameHash": 2317820211,
        "descHash": 2830231553
      }
    ]
  },
  {
    "id": 13404,
    "type": "polearm",
    "nameId": "blackcliff_pole",
    "rarity": 4,
    "nameHash": 481755219,
    "descHash": 2074162709,
    "refinementInfo": [
      {
        "nameHash": 4236194011,
        "descHash": 1032102393
      },
      {
        "nameHash": 3077090395,
        "descHash": 1818031017
      },
      {
        "nameHash": 1966559019,
        "descHash": 2974192209
      },
      {
        "nameHash": 4284496723,
        "descHash": 3037189817
      },
      {
        "nameHash": 2469300579,
        "descHash": 3351061593
      }
    ]
  },
  {
    "id": 13405,
    "type": "polearm",
    "nameId": "deathmatch",
    "rarity": 4,
    "nameHash": 4049410651,
    "descHash": 885061045,
    "refinementInfo": [
      {
        "nameHash": 2523397235,
        "descHash": 2488158001
      },
      {
        "nameHash": 2360636963,
        "descHash": 1635499705
      },
      {
        "nameHash": 1205504491,
        "descHash": 3325990985
      },
      {
        "nameHash": 3675659627,
        "descHash": 1138390113
      },
      {
        "nameHash": 3541083923,
        "descHash": 4026522113
      }
    ]
  },
  {
    "id": 13407,
    "type": "polearm",
    "nameId": "favonius_lance",
    "rarity": 4,
    "nameHash": 3755004051,
    "descHash": 2331820333,
    "refinementInfo": [
      {
        "nameHash": 1244742355,
        "descHash": 3935138497
      },
      {
        "nameHash": 3753137251,
        "descHash": 3560981425
      },
      {
        "nameHash": 2699056291,
        "descHash": 2705032601
      },
      {
        "nameHash": 946878467,
        "descHash": 4009221001
      },
      {
        "nameHash": 2025598051,
        "descHash": 721375305
      }
    ]
  },
  {
    "id": 13408,
    "type": "polearm",
    "nameId": "royal_spear",
    "rarity": 4,
    "nameHash": 2935286715,
    "descHash": 219606109,
    "refinementInfo": [
      {
        "nameHash": 1960421107,
        "descHash": 2597690433
      },
      {
        "nameHash": 2841941499,
        "descHash": 1245133505
      },
      {
        "nameHash": 544075427,
        "descHash": 2662513249
      },
      {
        "nameHash": 4014298771,
        "descHash": 3055901025
      },
      {
        "nameHash": 2109571443,
        "descHash": 2820634713
      }
    ]
  },
  {
    "id": 13409,
    "type": "polearm",
    "nameId": "dragonspine_spear",
    "rarity": 4,
    "nameHash": 3443142923,
    "descHash": 3283185533,
    "refinementInfo": [
      {
        "nameHash": 1340415555,
        "descHash": 3136502233
      },
      {
        "nameHash": 4269064939,
        "descHash": 2987860217
      },
      {
        "nameHash": 2406785251,
        "descHash": 2334371601
      },
      {
        "nameHash": 183313883,
        "descHash": 1964991545
      },
      {
        "nameHash": 3192689683,
        "descHash": 3566718937
      }
    ]
  },
  {
    "id": 13406,
    "type": "polearm",
    "nameId": "lithic_spear",
    "rarity": 4,
    "nameHash": 716252627,
    "descHash": 366604621,
    "refinementInfo": [
      {
        "nameHash": 2295392083,
        "descHash": 958977537
      },
      {
        "nameHash": 1200416483,
        "descHash": 2223743225
      },
      {
        "nameHash": 563427555,
        "descHash": 7064641
      },
      {
        "nameHash": 3151104187,
        "descHash": 1737027817
      },
      {
        "nameHash": 646100491,
        "descHash": 4195168345
      }
    ]
  },
  {
    "id": 13414,
    "type": "polearm",
    "nameId": "kitain_cross_spear",
    "rarity": 4,
    "nameHash": 2491797315,
    "descHash": 4129402597,
    "refinementInfo": [
      {
        "nameHash": 1395788379,
        "descHash": 736733185
      },
      {
        "nameHash": 1366228667,
        "descHash": 2577898849
      },
      {
        "nameHash": 1624564275,
        "descHash": 2790286897
      },
      {
        "nameHash": 1797516307,
        "descHash": 2098223657
      },
      {
        "nameHash": 4226083179,
        "descHash": 2490589633
      }
    ]
  },
  {
    "id": 13415,
    "type": "polearm",
    "nameId": "the_catch",
    "rarity": 4,
    "nameHash": 1148024603,
    "descHash": 1942599173,
    "refinementInfo": [
      {
        "nameHash": 2723770651,
        "descHash": 1255493729
      },
      {
        "nameHash": 2617966475,
        "descHash": 66627713
      },
      {
        "nameHash": 2778398699,
        "descHash": 2163892497
      },
      {
        "nameHash": 2191377667,
        "descHash": 76648377
      },
      {
        "nameHash": 3018479371,
        "descHash": 3574278937
      }
    ]
  },
  {
    "id": 13416,
    "type": "polearm",
    "nameId": "wavebreaker_s_fin",
    "rarity": 4,
    "nameHash": 4122509083,
    "descHash": 1730885565,
    "refinementInfo": [
      {
        "nameHash": 1938172147,
        "descHash": 2943644025
      },
      {
        "nameHash": 1880327931,
        "descHash": 3756656953
      },
      {
        "nameHash": 2449480531,
        "descHash": 325676553
      },
      {
        "nameHash": 752818171,
        "descHash": 759699921
      },
      {
        "nameHash": 1745712907,
        "descHash": 775754601
      }
    ]
  },
  {
    "id": 13417,
    "type": "polearm",
    "nameId": "moonpiercer",
    "rarity": 4,
    "nameHash": 452357939,
    "descHash": 3043809421,
    "refinementInfo": [
      {
        "nameHash": 3177166091,
        "descHash": 3977927625
      },
      {
        "nameHash": 3533588491,
        "descHash": 2139257321
      },
      {
        "nameHash": 436278779,
        "descHash": 3276080153
      },
      {
        "nameHash": 3066823523,
        "descHash": 2411818033
      },
      {
        "nameHash": 3717341819,
        "descHash": 2688364001
      }
    ]
  },
  {
    "id": 13419,
    "type": "polearm",
    "nameId": "missive_windspear",
    "rarity": 4,
    "nameHash": 1470442731,
    "descHash": 242089325,
    "refinementInfo": [
      {
        "nameHash": 2975846323,
        "descHash": 3285409097
      },
      {
        "nameHash": 1908721923,
        "descHash": 3326677273
      },
      {
        "nameHash": 1200187531,
        "descHash": 2164830705
      },
      {
        "nameHash": 1877319723,
        "descHash": 3006326401
      },
      {
        "nameHash": 3513240283,
        "descHash": 83744945
      }
    ]
  },
  {
    "id": 13424,
    "type": "polearm",
    "nameId": "ballad_of_the_fjords",
    "rarity": 4,
    "nameHash": 449192923,
    "descHash": 3517068677,
    "refinementInfo": [
      {
        "nameHash": 969070931,
        "descHash": 4049592633
      },
      {
        "nameHash": 2433999219,
        "descHash": 140017297
      },
      {
        "nameHash": 2311770739,
        "descHash": 1722582873
      },
      {
        "nameHash": 3932267795,
        "descHash": 2063764033
      },
      {
        "nameHash": 1533746995,
        "descHash": 766211481
      }
    ]
  },
  {
    "id": 13425,
    "type": "polearm",
    "nameId": "rightful_reward",
    "rarity": 4,
    "nameHash": 4158971171,
    "descHash": 1841932117,
    "refinementInfo": [
      {
        "nameHash": 2803637475,
        "descHash": 919529425
      },
      {
        "nameHash": 4059873867,
        "descHash": 4104859353
      },
      {
        "nameHash": 3636672723,
        "descHash": 775653137
      },
      {
        "nameHash": 525924659,
        "descHash": 372559665
      },
      {
        "nameHash": 925251851,
        "descHash": 1687588209
      }
    ]
  },
  {
    "id": 13427,
    "type": "polearm",
    "nameId": "prospector_s_drill",
    "rarity": 4,
    "nameHash": 882305891,
    "descHash": 433501733,
    "refinementInfo": [
      {
        "nameHash": 2462229963,
        "descHash": 261264401
      },
      {
        "nameHash": 2269290675,
        "descHash": 3644727417
      },
      {
        "nameHash": 3484690051,
        "descHash": 2017370537
      },
      {
        "nameHash": 3485564083,
        "descHash": 110167017
      },
      {
        "nameHash": 2195436779,
        "descHash": 1635838433
      }
    ]
  },
  {
    "id": 13426,
    "type": "polearm",
    "nameId": "dialogues_of_the_desert_sages",
    "rarity": 4,
    "nameHash": 2847771107,
    "descHash": 3525950357,
    "refinementInfo": [
      {
        "nameHash": 1092884699,
        "descHash": 829216985
      },
      {
        "nameHash": 1132036667,
        "descHash": 263326249
      },
      {
        "nameHash": 2682729115,
        "descHash": 2959904857
      },
      {
        "nameHash": 651127963,
        "descHash": 2942678465
      },
      {
        "nameHash": 4019696531,
        "descHash": 3488627601
      }
    ]
  },
  {
    "id": 13431,
    "type": "polearm",
    "nameId": "footprint_of_the_rainbow",
    "rarity": 4,
    "nameHash": 415520051,
    "descHash": 845466069,
    "refinementInfo": [
      {
        "nameHash": 4067650259,
        "descHash": 1875602489
      },
      {
        "nameHash": 2396964763,
        "descHash": 3656135553
      },
      {
        "nameHash": 810092707,
        "descHash": 311578129
      },
      {
        "nameHash": 3093827683,
        "descHash": 4160912473
      },
      {
        "nameHash": 663168267,
        "descHash": 514220601
      }
    ]
  },
  {
    "id": 14401,
    "type": "catalyst",
    "nameId": "favonius_codex",
    "rarity": 4,
    "nameHash": 623534363,
    "descHash": 311411373,
    "refinementInfo": [
      {
        "nameHash": 2196160115,
        "descHash": 60910497
      },
      {
        "nameHash": 3684823915,
        "descHash": 1336872385
      },
      {
        "nameHash": 3123192099,
        "descHash": 3760694201
      },
      {
        "nameHash": 4103290643,
        "descHash": 2247561017
      },
      {
        "nameHash": 1344953075,
        "descHash": 2604821145
      }
    ]
  },
  {
    "id": 14402,
    "type": "catalyst",
    "nameId": "the_widsith",
    "rarity": 4,
    "nameHash": 1163263227,
    "descHash": 3079323733,
    "refinementInfo": [
      {
        "nameHash": 4145256331,
        "descHash": 2898987529
      },
      {
        "nameHash": 2820766355,
        "descHash": 747993785
      },
      {
        "nameHash": 1785826579,
        "descHash": 1981599713
      },
      {
        "nameHash": 550110747,
        "descHash": 1514212673
      },
      {
        "nameHash": 2684365579,
        "descHash": 1344237017
      }
    ]
  },
  {
    "id": 14403,
    "type": "catalyst",
    "nameId": "sacrificial_fragments",
    "rarity": 4,
    "nameHash": 2195665683,
    "descHash": 789905885,
    "refinementInfo": [
      {
        "nameHash": 1971972187,
        "descHash": 3386789833
      },
      {
        "nameHash": 3671474467,
        "descHash": 3500633425
      },
      {
        "nameHash": 4115596027,
        "descHash": 2667889233
      },
      {
        "nameHash": 2195374451,
        "descHash": 68588217
      },
      {
        "nameHash": 1492752155,
        "descHash": 2678116945
      }
    ]
  },
  {
    "id": 14404,
    "type": "catalyst",
    "nameId": "royal_grimoire",
    "rarity": 4,
    "nameHash": 3827789435,
    "descHash": 2717009405,
    "refinementInfo": [
      {
        "nameHash": 916503587,
        "descHash": 3437160097
      },
      {
        "nameHash": 3852801011,
        "descHash": 1512900809
      },
      {
        "nameHash": 2075979499,
        "descHash": 3546181585
      },
      {
        "nameHash": 2311842099,
        "descHash": 1052312137
      },
      {
        "nameHash": 1982136171,
        "descHash": 953622361
      }
    ]
  },
  {
    "id": 14405,
    "type": "catalyst",
    "nameId": "solar_pearl",
    "rarity": 4,
    "nameHash": 37147251,
    "descHash": 3980674549,
    "refinementInfo": [
      {
        "nameHash": 3201455595,
        "descHash": 1817875553
      },
      {
        "nameHash": 3003090523,
        "descHash": 2944062225
      },
      {
        "nameHash": 3789209163,
        "descHash": 1989864025
      },
      {
        "nameHash": 3161092035,
        "descHash": 1181546193
      },
      {
        "nameHash": 4060235987,
        "descHash": 3275074409
      }
    ]
  },
  {
    "id": 14406,
    "type": "catalyst",
    "nameId": "prototype_amber",
    "rarity": 4,
    "nameHash": 2521338131,
    "descHash": 1207804933,
    "refinementInfo": [
      {
        "nameHash": 1373284307,
        "descHash": 604175817
      },
      {
        "nameHash": 1927060291,
        "descHash": 3989966961
      },
      {
        "nameHash": 3119895835,
        "descHash": 13797873
      },
      {
        "nameHash": 820590507,
        "descHash": 1229589209
      },
      {
        "nameHash": 836208539,
        "descHash": 2589589977
      }
    ]
  },
  {
    "id": 14407,
    "type": "catalyst",
    "nameId": "mappa_mare",
    "rarity": 4,
    "nameHash": 1072884907,
    "descHash": 727794477,
    "refinementInfo": [
      {
        "nameHash": 1663313163,
        "descHash": 170742345
      },
      {
        "nameHash": 1145327387,
        "descHash": 7429425
      },
      {
        "nameHash": 1098970339,
        "descHash": 3809105025
      },
      {
        "nameHash": 3055091459,
        "descHash": 3091429793
      },
      {
        "nameHash": 4245213187,
        "descHash": 3645696297
      }
    ]
  },
  {
    "id": 14408,
    "type": "catalyst",
    "nameId": "blackcliff_agate",
    "rarity": 4,
    "nameHash": 3273999011,
    "descHash": 3555971517,
    "refinementInfo": [
      {
        "nameHash": 1776215435,
        "descHash": 215535497
      },
      {
        "nameHash": 3334631483,
        "descHash": 816725657
      },
      {
        "nameHash": 2506618411,
        "descHash": 3681942025
      },
      {
        "nameHash": 4138639099,
        "descHash": 906061657
      },
      {
        "nameHash": 339931171,
        "descHash": 436195881
      }
    ]
  },
  {
    "id": 14409,
    "type": "catalyst",
    "nameId": "eye_of_perception",
    "rarity": 4,
    "nameHash": 3156385731,
    "descHash": 2055966237,
    "refinementInfo": [
      {
        "nameHash": 2057934371,
        "descHash": 1031538761
      },
      {
        "nameHash": 1601200899,
        "descHash": 1715885393
      },
      {
        "nameHash": 1234360603,
        "descHash": 1431811881
      },
      {
        "nameHash": 2016628075,
        "descHash": 1120470593
      },
      {
        "nameHash": 1789612403,
        "descHash": 2496973505
      }
    ]
  },
  {
    "id": 14412,
    "type": "catalyst",
    "nameId": "frostbearer",
    "rarity": 4,
    "nameHash": 2587614459,
    "descHash": 234405637,
    "refinementInfo": [
      {
        "nameHash": 2459894187,
        "descHash": 3743087417
      },
      {
        "nameHash": 1998815035,
        "descHash": 2638100617
      },
      {
        "nameHash": 1394994395,
        "descHash": 3670272705
      },
      {
        "nameHash": 560824227,
        "descHash": 2227378393
      },
      {
        "nameHash": 1163616891,
        "descHash": 2637568257
      }
    ]
  },
  {
    "id": 14410,
    "type": "catalyst",
    "nameId": "wine_and_song",
    "rarity": 4,
    "nameHash": 3090373787,
    "descHash": 2844428397,
    "refinementInfo": [
      {
        "nameHash": 824508131,
        "descHash": 1480134065
      },
      {
        "nameHash": 4090110723,
        "descHash": 1640744441
      },
      {
        "nameHash": 1746837299,
        "descHash": 106144785
      },
      {
        "nameHash": 1078543107,
        "descHash": 2898215233
      },
      {
        "nameHash": 3796702635,
        "descHash": 153003145
      }
    ]
  },
  {
    "id": 14413,
    "type": "catalyst",
    "nameId": "dodoco_tales",
    "rarity": 4,
    "nameHash": 3456986819,
    "descHash": 746319397,
    "refinementInfo": [
      {
        "nameHash": 3845860995,
        "descHash": 1766027041
      },
      {
        "nameHash": 2101805483,
        "descHash": 2187045233
      },
      {
        "nameHash": 3363649675,
        "descHash": 2377666601
      },
      {
        "nameHash": 1735904867,
        "descHash": 1754041689
      },
      {
        "nameHash": 824949859,
        "descHash": 2121914769
      }
    ]
  },
  {
    "id": 14414,
    "type": "catalyst",
    "nameId": "hakushin_ring",
    "rarity": 4,
    "nameHash": 2324146259,
    "descHash": 4273575325,
    "refinementInfo": [
      {
        "nameHash": 905477059,
        "descHash": 269996233
      },
      {
        "nameHash": 3141980971,
        "descHash": 3729857457
      },
      {
        "nameHash": 3250696475,
        "descHash": 1502300617
      },
      {
        "nameHash": 923396363,
        "descHash": 1265537273
      },
      {
        "nameHash": 630452219,
        "descHash": 3270418049
      }
    ]
  },
  {
    "id": 14415,
    "type": "catalyst",
    "nameId": "oathsworn_eye",
    "rarity": 4,
    "nameHash": 2539208459,
    "descHash": 4267791309,
    "refinementInfo": [
      {
        "nameHash": 2254346691,
        "descHash": 3361934785
      },
      {
        "nameHash": 2004037027,
        "descHash": 443566497
      },
      {
        "nameHash": 49845771,
        "descHash": 1117653353
      },
      {
        "nameHash": 350407835,
        "descHash": 3163783449
      },
      {
        "nameHash": 1082448331,
        "descHash": 2865937601
      }
    ]
  },
  {
    "id": 14417,
    "type": "catalyst",
    "nameId": "fruit_of_fulfillment",
    "rarity": 4,
    "nameHash": 2267978875,
    "descHash": 1504631261,
    "refinementInfo": [
      {
        "nameHash": 2058139371,
        "descHash": 3992441009
      },
      {
        "nameHash": 4273692083,
        "descHash": 3749660473
      },
      {
        "nameHash": 1718988147,
        "descHash": 3123572273
      },
      {
        "nameHash": 108454619,
        "descHash": 304674417
      },
      {
        "nameHash": 586598971,
        "descHash": 3344113473
      }
    ]
  },
  {
    "id": 14416,
    "type": "catalyst",
    "nameId": "wandering_evenstar",
    "rarity": 4,
    "nameHash": 426363739,
    "descHash": 1089360837,
    "refinementInfo": [
      {
        "nameHash": 3326699803,
        "descHash": 936957161
      },
      {
        "nameHash": 4082982659,
        "descHash": 279441465
      },
      {
        "nameHash": 3756990723,
        "descHash": 512729449
      },
      {
        "nameHash": 3317604851,
        "descHash": 305516921
      },
      {
        "nameHash": 3209694115,
        "descHash": 2576455153
      }
    ]
  },
  {
    "id": 14424,
    "type": "catalyst",
    "nameId": "sacrificial_jade",
    "rarity": 4,
    "nameHash": 2275710883,
    "descHash": 1386549829,
    "refinementInfo": [
      {
        "nameHash": 3738338491,
        "descHash": 405227377
      },
      {
        "nameHash": 4107446859,
        "descHash": 2175601089
      },
      {
        "nameHash": 1610745555,
        "descHash": 2137676545
      },
      {
        "nameHash": 2046947067,
        "descHash": 3301288985
      },
      {
        "nameHash": 4227142475,
        "descHash": 2548126553
      }
    ]
  },
  {
    "id": 14425,
    "type": "catalyst",
    "nameId": "flowing_purity",
    "rarity": 4,
    "nameHash": 2432865507,
    "descHash": 611376829,
    "refinementInfo": [
      {
        "nameHash": 3335241819,
        "descHash": 2592389929
      },
      {
        "nameHash": 3054765843,
        "descHash": 976843281
      },
      {
        "nameHash": 3151178187,
        "descHash": 646763353
      },
      {
        "nameHash": 2880952019,
        "descHash": 1390361721
      },
      {
        "nameHash": 307541163,
        "descHash": 3970584353
      }
    ]
  },
  {
    "id": 14426,
    "type": "catalyst",
    "nameId": "ballad_of_the_boundless_blue",
    "rarity": 4,
    "nameHash": 2722902043,
    "descHash": 1847390029,
    "refinementInfo": [
      {
        "nameHash": 3858980811,
        "descHash": 2461233121
      },
      {
        "nameHash": 1479566443,
        "descHash": 801517033
      },
      {
        "nameHash": 3255568683,
        "descHash": 2801635609
      },
      {
        "nameHash": 2114283907,
        "descHash": 1138009081
      },
      {
        "nameHash": 22949795,
        "descHash": 1843893521
      }
    ]
  },
  {
    "id": 14427,
    "type": "catalyst",
    "nameId": "ash_graven_drinking_horn",
    "rarity": 4,
    "nameHash": 422144187,
    "descHash": 1970749037,
    "refinementInfo": [
      {
        "nameHash": 2452156291,
        "descHash": 2549641625
      },
      {
        "nameHash": 155836435,
        "descHash": 2554988529
      },
      {
        "nameHash": 3912935251,
        "descHash": 372277385
      },
      {
        "nameHash": 2275380699,
        "descHash": 2714650921
      },
      {
        "nameHash": 63399523,
        "descHash": 2916162057
      }
    ]
  },
  {
    "id": 14431,
    "type": "catalyst",
    "nameId": "ring_of_yaxche",
    "rarity": 4,
    "nameHash": 3092853059,
    "descHash": 2465912757,
    "refinementInfo": [
      {
        "nameHash": 3167934411,
        "descHash": 4177367921
      },
      {
        "nameHash": 1784212683,
        "descHash": 210855793
      },
      {
        "nameHash": 4125747035,
        "descHash": 2205018745
      },
      {
        "nameHash": 4169591259,
        "descHash": 3306972617
      },
      {
        "nameHash": 1279937955,
        "descHash": 1527140721
      }
    ]
  },
  {
    "id": 15401,
    "type": "bow",
    "nameId": "favonius_warbow",
    "rarity": 4,
    "nameHash": 1240067179,
    "descHash": 2697551509,
    "refinementInfo": [
      {
        "nameHash": 3964029091,
        "descHash": 4176757297
      },
      {
        "nameHash": 3641673747,
        "descHash": 2919406737
      },
      {
        "nameHash": 2910179243,
        "descHash": 4292321513
      },
      {
        "nameHash": 3926264619,
        "descHash": 741994297
      },
      {
        "nameHash": 3406113971,
        "descHash": 1905637081
      }
    ]
  },
  {
    "id": 15402,
    "type": "bow",
    "nameId": "the_stringless",
    "rarity": 4,
    "nameHash": 2556914683,
    "descHash": 1284213621,
    "refinementInfo": [
      {
        "nameHash": 1839966563,
        "descHash": 4139255441
      },
      {
        "nameHash": 3971128907,
        "descHash": 2177504897
      },
      {
        "nameHash": 3375452731,
        "descHash": 4107628401
      },
      {
        "nameHash": 2710727259,
        "descHash": 442434801
      },
      {
        "nameHash": 1820235315,
        "descHash": 3103561353
      }
    ]
  },
  {
    "id": 15403,
    "type": "bow",
    "nameId": "sacrificial_bow",
    "rarity": 4,
    "nameHash": 2400012995,
    "descHash": 59873837,
    "refinementInfo": [
      {
        "nameHash": 4136879547,
        "descHash": 191449169
      },
      {
        "nameHash": 427892467,
        "descHash": 1528626153
      },
      {
        "nameHash": 793316371,
        "descHash": 486075657
      },
      {
        "nameHash": 3091886315,
        "descHash": 2142767705
      },
      {
        "nameHash": 2017033267,
        "descHash": 741199593
      }
    ]
  },
  {
    "id": 15404,
    "type": "bow",
    "nameId": "royal_bow",
    "rarity": 4,
    "nameHash": 2832648187,
    "descHash": 1025771861,
    "refinementInfo": [
      {
        "nameHash": 2136205043,
        "descHash": 200129153
      },
      {
        "nameHash": 1689687171,
        "descHash": 2460772961
      },
      {
        "nameHash": 3093711995,
        "descHash": 828207073
      },
      {
        "nameHash": 10912107,
        "descHash": 3884130657
      },
      {
        "nameHash": 85795635,
        "descHash": 354025529
      }
    ]
  },
  {
    "id": 15405,
    "type": "bow",
    "nameId": "rust",
    "rarity": 4,
    "nameHash": 3169209451,
    "descHash": 3931321797,
    "refinementInfo": [
      {
        "nameHash": 3717831651,
        "descHash": 3268538449
      },
      {
        "nameHash": 1387407787,
        "descHash": 3179243025
      },
      {
        "nameHash": 3406258539,
        "descHash": 657870729
      },
      {
        "nameHash": 3902006539,
        "descHash": 705040913
      },
      {
        "nameHash": 2297485451,
        "descHash": 1454583665
      }
    ]
  },
  {
    "id": 15406,
    "type": "bow",
    "nameId": "prototype_crescent",
    "rarity": 4,
    "nameHash": 3625393819,
    "descHash": 2174225037,
    "refinementInfo": [
      {
        "nameHash": 1166144531,
        "descHash": 1361434521
      },
      {
        "nameHash": 2623317355,
        "descHash": 3442169441
      },
      {
        "nameHash": 1584746507,
        "descHash": 3341545649
      },
      {
        "nameHash": 3028234083,
        "descHash": 3524996897
      },
      {
        "nameHash": 303155515,
        "descHash": 2700504721
      }
    ]
  },
  {
    "id": 15407,
    "type": "bow",
    "nameId": "compound_bow",
    "rarity": 4,
    "nameHash": 411685275,
    "descHash": 1166197037,
    "refinementInfo": [
      {
        "nameHash": 2843293987,
        "descHash": 324143905
      },
      {
        "nameHash": 1304628907,
        "descHash": 984691073
      },
      {
        "nameHash": 1414412643,
        "descHash": 576501033
      },
      {
        "nameHash": 356025075,
        "descHash": 2109756401
      },
      {
        "nameHash": 2673337443,
        "descHash": 469959537
      }
    ]
  },
  {
    "id": 15408,
    "type": "bow",
    "nameId": "blackcliff_warbow",
    "rarity": 4,
    "nameHash": 3447737235,
    "descHash": 1032617965,
    "refinementInfo": [
      {
        "nameHash": 1421912251,
        "descHash": 543707433
      },
      {
        "nameHash": 3952439211,
        "descHash": 2100079113
      },
      {
        "nameHash": 1429273603,
        "descHash": 1193712033
      },
      {
        "nameHash": 1857233331,
        "descHash": 1886181673
      },
      {
        "nameHash": 1499235563,
        "descHash": 4141833753
      }
    ]
  },
  {
    "id": 15409,
    "type": "bow",
    "nameId": "the_viridescent_hunt",
    "rarity": 4,
    "nameHash": 3439749859,
    "descHash": 3378934725,
    "refinementInfo": [
      {
        "nameHash": 4203843315,
        "descHash": 75004577
      },
      {
        "nameHash": 1061772011,
        "descHash": 1054698953
      },
      {
        "nameHash": 1170846067,
        "descHash": 1516978649
      },
      {
        "nameHash": 3232295027,
        "descHash": 2631397065
      },
      {
        "nameHash": 1499817443,
        "descHash": 3337229097
      }
    ]
  },
  {
    "id": 15410,
    "type": "bow",
    "nameId": "alley_hunter",
    "rarity": 4,
    "nameHash": 2417717595,
    "descHash": 726318957,
    "refinementInfo": [
      {
        "nameHash": 2308173611,
        "descHash": 1333678233
      },
      {
        "nameHash": 1822790827,
        "descHash": 3490203185
      },
      {
        "nameHash": 870281363,
        "descHash": 3969501113
      },
      {
        "nameHash": 2302209155,
        "descHash": 1108020297
      },
      {
        "nameHash": 4000770243,
        "descHash": 3785180097
      }
    ]
  },
  {
    "id": 15413,
    "type": "bow",
    "nameId": "windblume_ode",
    "rarity": 4,
    "nameHash": 650049651,
    "descHash": 1031521493,
    "refinementInfo": [
      {
        "nameHash": 2243732203,
        "descHash": 3011253385
      },
      {
        "nameHash": 1791450699,
        "descHash": 1438538761
      },
      {
        "nameHash": 2526334419,
        "descHash": 1633168769
      },
      {
        "nameHash": 685897059,
        "descHash": 1464349937
      },
      {
        "nameHash": 1628928163,
        "descHash": 2359422417
      }
    ]
  },
  {
    "id": 15412,
    "type": "bow",
    "nameId": "mitternachts_waltz",
    "rarity": 4,
    "nameHash": 3949653579,
    "descHash": 2436529629,
    "refinementInfo": [
      {
        "nameHash": 3737766939,
        "descHash": 1858983641
      },
      {
        "nameHash": 3909725051,
        "descHash": 3937803169
      },
      {
        "nameHash": 4180020923,
        "descHash": 1365133105
      },
      {
        "nameHash": 2587986547,
        "descHash": 3266651353
      },
      {
        "nameHash": 4258047555,
        "descHash": 3863858193
      }
    ]
  },
  {
    "id": 15414,
    "type": "bow",
    "nameId": "hamayumi",
    "rarity": 4,
    "nameHash": 4186179883,
    "descHash": 852893197,
    "refinementInfo": [
      {
        "nameHash": 3099408603,
        "descHash": 1005674993
      },
      {
        "nameHash": 2564498299,
        "descHash": 1500615753
      },
      {
        "nameHash": 4055475027,
        "descHash": 3258541705
      },
      {
        "nameHash": 3567923499,
        "descHash": 3854525521
      },
      {
        "nameHash": 3337185491,
        "descHash": 2650909905
      }
    ]
  },
  {
    "id": 15415,
    "type": "bow",
    "nameId": "predator",
    "rarity": 4,
    "nameHash": 540938627,
    "descHash": 602632589,
    "refinementInfo": [
      {
        "nameHash": 3063488107,
        "descHash": 3524881273
      }
    ]
  },
  {
    "id": 15416,
    "type": "bow",
    "nameId": "mouun_s_moon",
    "rarity": 4,
    "nameHash": 1860795787,
    "descHash": 3698523357,
    "refinementInfo": [
      {
        "nameHash": 1276285163,
        "descHash": 1976549289
      },
      {
        "nameHash": 220863851,
        "descHash": 3356038753
      },
      {
        "nameHash": 2409102419,
        "descHash": 2661940401
      },
      {
        "nameHash": 3185305267,
        "descHash": 482219433
      },
      {
        "nameHash": 3079462611,
        "descHash": 581963593
      }
    ]
  },
  {
    "id": 15411,
    "type": "bow",
    "nameId": "fading_twilight",
    "rarity": 4,
    "nameHash": 2425414923,
    "descHash": 3884152605,
    "refinementInfo": [
      {
        "nameHash": 4218009595,
        "descHash": 3378712409
      },
      {
        "nameHash": 3677412523,
        "descHash": 3843600817
      },
      {
        "nameHash": 65635723,
        "descHash": 3471843569
      },
      {
        "nameHash": 1031322395,
        "descHash": 4210777393
      },
      {
        "nameHash": 2915865819,
        "descHash": 172930873
      }
    ]
  },
  {
    "id": 15417,
    "type": "bow",
    "nameId": "king_s_squire",
    "rarity": 4,
    "nameHash": 3176599083,
    "descHash": 2353466805,
    "refinementInfo": [
      {
        "nameHash": 2741603307,
        "descHash": 968925825
      },
      {
        "nameHash": 3081860275,
        "descHash": 719975745
      },
      {
        "nameHash": 433141419,
        "descHash": 1571660977
      },
      {
        "nameHash": 3664634043,
        "descHash": 1088897665
      },
      {
        "nameHash": 3956074723,
        "descHash": 1613193777
      }
    ]
  },
  {
    "id": 15418,
    "type": "bow",
    "nameId": "end_of_the_line",
    "rarity": 4,
    "nameHash": 3063191787,
    "descHash": 1035513069,
    "refinementInfo": [
      {
        "nameHash": 280615747,
        "descHash": 1439153113
      },
      {
        "nameHash": 1973085531,
        "descHash": 528144953
      },
      {
        "nameHash": 1136260067,
        "descHash": 1411249217
      },
      {
        "nameHash": 1740575163,
        "descHash": 1049862001
      },
      {
        "nameHash": 3453611803,
        "descHash": 3079622417
      }
    ]
  },
  {
    "id": 15419,
    "type": "bow",
    "nameId": "ibis_piercer",
    "rarity": 4,
    "nameHash": 316078811,
    "descHash": 1832503421,
    "refinementInfo": [
      {
        "nameHash": 4279279011,
        "descHash": 3781576809
      },
      {
        "nameHash": 2956288995,
        "descHash": 1904964657
      },
      {
        "nameHash": 209504107,
        "descHash": 2431620361
      },
      {
        "nameHash": 2450897907,
        "descHash": 3892203393
      },
      {
        "nameHash": 650438131,
        "descHash": 3377155433
      }
    ]
  },
  {
    "id": 15424,
    "type": "bow",
    "nameId": "scion_of_the_blazing_sun",
    "rarity": 4,
    "nameHash": 2958179435,
    "descHash": 1559956301,
    "refinementInfo": [
      {
        "nameHash": 3791123787,
        "descHash": 596616945
      },
      {
        "nameHash": 4069206187,
        "descHash": 1834542889
      },
      {
        "nameHash": 86657187,
        "descHash": 1721962329
      },
      {
        "nameHash": 2874441691,
        "descHash": 3244311409
      },
      {
        "nameHash": 3747103099,
        "descHash": 3071518593
      }
    ]
  },
  {
    "id": 15425,
    "type": "bow",
    "nameId": "song_of_stillness",
    "rarity": 4,
    "nameHash": 2600875323,
    "descHash": 3827044733,
    "refinementInfo": [
      {
        "nameHash": 369701419,
        "descHash": 1061403841
      },
      {
        "nameHash": 3153232995,
        "descHash": 2776149585
      },
      {
        "nameHash": 1729129955,
        "descHash": 1098991777
      },
      {
        "nameHash": 600496635,
        "descHash": 1785678841
      },
      {
        "nameHash": 3082528187,
        "descHash": 148224081
      }
    ]
  },
  {
    "id": 15427,
    "type": "bow",
    "nameId": "range_gauge",
    "rarity": 4,
    "nameHash": 1055195035,
    "descHash": 3754733517,
    "refinementInfo": [
      {
        "nameHash": 4044517627,
        "descHash": 2042600953
      },
      {
        "nameHash": 1024357203,
        "descHash": 3185695601
      },
      {
        "nameHash": 2133903987,
        "descHash": 1746347169
      },
      {
        "nameHash": 3487882723,
        "descHash": 1124064681
      },
      {
        "nameHash": 1113839851,
        "descHash": 3696126169
      }
    ]
  },
  {
    "id": 15426,
    "type": "bow",
    "nameId": "cloudforged",
    "rarity": 4,
    "nameHash": 4038676067,
    "descHash": 1021500469,
    "refinementInfo": [
      {
        "nameHash": 3038225347,
        "descHash": 2369359553
      },
      {
        "nameHash": 4038539411,
        "descHash": 2572520369
      },
      {
        "nameHash": 3090149811,
        "descHash": 4021819873
      },
      {
        "nameHash": 2449584291,
        "descHash": 698709369
      },
      {
        "nameHash": 2669894379,
        "descHash": 3560394193
      }
    ]
  },
  {
    "id": 15431,
    "type": "bow",
    "nameId": "chain_breaker",
    "rarity": 4,
    "nameHash": 565052971,
    "descHash": 2165764013,
    "refinementInfo": [
      {
        "nameHash": 4131533283,
        "descHash": 1383279281
      },
      {
        "nameHash": 1067095707,
        "descHash": 3878715561
      },
      {
        "nameHash": 1381129923,
        "descHash": 2816651209
      },
      {
        "nameHash": 249335131,
        "descHash": 1571072649
      },
      {
        "nameHash": 1171552563,
        "descHash": 710690633
      }
    ]
  },
  {
    "id": 11501,
    "type": "sword",
    "nameId": "aquila_favonia",
    "rarity": 5,
    "nameHash": 902264035,
    "descHash": 291327109,
    "refinementInfo": [
      {
        "nameHash": 1362580043,
        "descHash": 2016911921
      },
      {
        "nameHash": 1737273211,
        "descHash": 3504557121
      },
      {
        "nameHash": 2486565851,
        "descHash": 2852492177
      },
      {
        "nameHash": 3954276771,
        "descHash": 1882608865
      },
      {
        "nameHash": 968378595,
        "descHash": 2400729121
      }
    ]
  },
  {
    "id": 11502,
    "type": "sword",
    "nameId": "skyward_blade",
    "rarity": 5,
    "nameHash": 4055003299,
    "descHash": 3627658141,
    "refinementInfo": [
      {
        "nameHash": 2711925747,
        "descHash": 1717393465
      },
      {
        "nameHash": 2750674883,
        "descHash": 2554522929
      },
      {
        "nameHash": 877272859,
        "descHash": 3221677057
      },
      {
        "nameHash": 2492915507,
        "descHash": 694496913
      },
      {
        "nameHash": 2853296811,
        "descHash": 395447553
      }
    ]
  },
  {
    "id": 11504,
    "type": "sword",
    "nameId": "summit_shaper",
    "rarity": 5,
    "nameHash": 944332883,
    "descHash": 1389297045,
    "refinementInfo": [
      {
        "nameHash": 649271795,
        "descHash": 3621568505
      },
      {
        "nameHash": 312445819,
        "descHash": 2646516457
      },
      {
        "nameHash": 1234331811,
        "descHash": 406310017
      },
      {
        "nameHash": 3709017723,
        "descHash": 1196389009
      },
      {
        "nameHash": 2749508387,
        "descHash": 1304570665
      }
    ]
  },
  {
    "id": 11505,
    "type": "sword",
    "nameId": "primordial_jade_cutter",
    "rarity": 5,
    "nameHash": 1345343763,
    "descHash": 1273837837,
    "refinementInfo": [
      {
        "nameHash": 1901402467,
        "descHash": 2675458201
      },
      {
        "nameHash": 4220707043,
        "descHash": 4021197649
      },
      {
        "nameHash": 4125060227,
        "descHash": 3638967625
      },
      {
        "nameHash": 1264183763,
        "descHash": 3329718681
      },
      {
        "nameHash": 909145139,
        "descHash": 861336673
      }
    ]
  },
  {
    "id": 11503,
    "type": "sword",
    "nameId": "freedom_sworn",
    "rarity": 5,
    "nameHash": 2949448555,
    "descHash": 1179976749,
    "refinementInfo": [
      {
        "nameHash": 4253965307,
        "descHash": 1807636393
      },
      {
        "nameHash": 2895005811,
        "descHash": 2862194921
      },
      {
        "nameHash": 3650053915,
        "descHash": 3922601713
      },
      {
        "nameHash": 1051104539,
        "descHash": 4133460769
      },
      {
        "nameHash": 1028735635,
        "descHash": 826926905
      }
    ]
  },
  {
    "id": 11509,
    "type": "sword",
    "nameId": "mistsplitter_reforged",
    "rarity": 5,
    "nameHash": 4124851547,
    "descHash": 1497683685,
    "refinementInfo": [
      {
        "nameHash": 1919913067,
        "descHash": 1308195009
      },
      {
        "nameHash": 3922317227,
        "descHash": 2464946881
      },
      {
        "nameHash": 3328722467,
        "descHash": 662806689
      },
      {
        "nameHash": 2676162067,
        "descHash": 2935141465
      },
      {
        "nameHash": 2534304035,
        "descHash": 3107589001
      }
    ]
  },
  {
    "id": 11510,
    "type": "sword",
    "nameId": "haran_geppaku_futsu",
    "rarity": 5,
    "nameHash": 1600275315,
    "descHash": 1849286797,
    "refinementInfo": [
      {
        "nameHash": 2204995987,
        "descHash": 1905619873
      },
      {
        "nameHash": 3554388067,
        "descHash": 2845885769
      },
      {
        "nameHash": 621949739,
        "descHash": 1429852217
      },
      {
        "nameHash": 2228642451,
        "descHash": 3540832473
      },
      {
        "nameHash": 1217552947,
        "descHash": 3077341265
      }
    ]
  },
  {
    "id": 11511,
    "type": "sword",
    "nameId": "key_of_khaj_nisut",
    "rarity": 5,
    "nameHash": 454086795,
    "descHash": 1788860021,
    "refinementInfo": [
      {
        "nameHash": 1054221195,
        "descHash": 1381038833
      },
      {
        "nameHash": 1783041251,
        "descHash": 1850615761
      },
      {
        "nameHash": 4214751211,
        "descHash": 649707033
      },
      {
        "nameHash": 3089763563,
        "descHash": 2119140073
      },
      {
        "nameHash": 2244980899,
        "descHash": 2529732929
      }
    ]
  },
  {
    "id": 11512,
    "type": "sword",
    "nameId": "light_of_foliar_incision",
    "rarity": 5,
    "nameHash": 275622963,
    "descHash": 3735292813,
    "refinementInfo": [
      {
        "nameHash": 2646627715,
        "descHash": 2525753369
      },
      {
        "nameHash": 3227901515,
        "descHash": 1965581625
      },
      {
        "nameHash": 1287376467,
        "descHash": 3431131633
      },
      {
        "nameHash": 1555379819,
        "descHash": 425981449
      },
      {
        "nameHash": 1383427723,
        "descHash": 2624565033
      }
    ]
  },
  {
    "id": 11513,
    "type": "sword",
    "nameId": "splendor_of_tranquil_waters",
    "rarity": 5,
    "nameHash": 1473399443,
    "descHash": 2011951989,
    "refinementInfo": [
      {
        "nameHash": 488906547,
        "descHash": 1399310409
      },
      {
        "nameHash": 3870995811,
        "descHash": 2296600089
      },
      {
        "nameHash": 4084980915,
        "descHash": 3588513889
      },
      {
        "nameHash": 2955131467,
        "descHash": 3460365145
      },
      {
        "nameHash": 3787561923,
        "descHash": 3049463433
      }
    ]
  },
  {
    "id": 11514,
    "type": "sword",
    "nameId": "uraku_misugiri",
    "rarity": 5,
    "nameHash": 1818340435,
    "descHash": 1906968093,
    "refinementInfo": [
      {
        "nameHash": 801463315,
        "descHash": 3249084313
      },
      {
        "nameHash": 1520322691,
        "descHash": 1504629913
      },
      {
        "nameHash": 413367035,
        "descHash": 1233828185
      },
      {
        "nameHash": 2109946579,
        "descHash": 899688609
      },
      {
        "nameHash": 1391705475,
        "descHash": 1149628033
      }
    ]
  },
  {
    "id": 11515,
    "type": "sword",
    "nameId": "absolution",
    "rarity": 5,
    "nameHash": 1009471939,
    "descHash": 3721613085,
    "refinementInfo": [
      {
        "nameHash": 2056241955,
        "descHash": 764444537
      },
      {
        "nameHash": 1082404963,
        "descHash": 1793927065
      },
      {
        "nameHash": 2568989595,
        "descHash": 1385755849
      },
      {
        "nameHash": 1445098411,
        "descHash": 129226489
      },
      {
        "nameHash": 2192523835,
        "descHash": 2721433081
      }
    ]
  },
  {
    "id": 12501,
    "type": "claymore",
    "nameId": "skyward_pride",
    "rarity": 5,
    "nameHash": 1089950259,
    "descHash": 2724154045,
    "refinementInfo": [
      {
        "nameHash": 3265578323,
        "descHash": 1198694153
      },
      {
        "nameHash": 2907166915,
        "descHash": 1998377849
      },
      {
        "nameHash": 3475574275,
        "descHash": 110338705
      },
      {
        "nameHash": 776616283,
        "descHash": 4133048689
      },
      {
        "nameHash": 368014203,
        "descHash": 2372241065
      }
    ]
  },
  {
    "id": 12502,
    "type": "claymore",
    "nameId": "wolf_s_gravestone",
    "rarity": 5,
    "nameHash": 3995710363,
    "descHash": 401408237,
    "refinementInfo": [
      {
        "nameHash": 2660534475,
        "descHash": 375174089
      },
      {
        "nameHash": 3268649363,
        "descHash": 2580155881
      },
      {
        "nameHash": 2651380827,
        "descHash": 706750905
      },
      {
        "nameHash": 794884699,
        "descHash": 1829653905
      },
      {
        "nameHash": 4275754179,
        "descHash": 693041753
      }
    ]
  },
  {
    "id": 12504,
    "type": "claymore",
    "nameId": "the_unforged",
    "rarity": 5,
    "nameHash": 2792766467,
    "descHash": 3341255373,
    "refinementInfo": [
      {
        "nameHash": 1405856115,
        "descHash": 973881321
      },
      {
        "nameHash": 2429514947,
        "descHash": 1081483713
      },
      {
        "nameHash": 2922504075,
        "descHash": 1261646089
      },
      {
        "nameHash": 476386659,
        "descHash": 2340517825
      },
      {
        "nameHash": 1771603299,
        "descHash": 3674872049
      }
    ]
  },
  {
    "id": 12505,
    "type": "claymore",
    "nameId": "primordial_jade_greatsword",
    "rarity": 5,
    "nameHash": 977648923,
    "descHash": 2108387445,
    "refinementInfo": []
  },
  {
    "id": 12503,
    "type": "claymore",
    "nameId": "song_of_broken_pines",
    "rarity": 5,
    "nameHash": 1075647299,
    "descHash": 3478455989,
    "refinementInfo": [
      {
        "nameHash": 7925115,
        "descHash": 3115311665
      },
      {
        "nameHash": 897844939,
        "descHash": 504603569
      },
      {
        "nameHash": 419168275,
        "descHash": 269545409
      },
      {
        "nameHash": 3342939715,
        "descHash": 2443211145
      },
      {
        "nameHash": 2433755451,
        "descHash": 3899169753
      }
    ]
  },
  {
    "id": 12510,
    "type": "claymore",
    "nameId": "redhorn_stonethresher",
    "rarity": 5,
    "nameHash": 3914951691,
    "descHash": 1789248637,
    "refinementInfo": [
      {
        "nameHash": 372854075,
        "descHash": 900434577
      },
      {
        "nameHash": 2486652419,
        "descHash": 1706844625
      },
      {
        "nameHash": 1653078539,
        "descHash": 3214818497
      },
      {
        "nameHash": 1853975731,
        "descHash": 1309441409
      },
      {
        "nameHash": 566772267,
        "descHash": 2900806161
      }
    ]
  },
  {
    "id": 12511,
    "type": "claymore",
    "nameId": "beacon_of_the_reed_sea",
    "rarity": 5,
    "nameHash": 2834063555,
    "descHash": 1038210501,
    "refinementInfo": [
      {
        "nameHash": 4248300875,
        "descHash": 3001876049
      },
      {
        "nameHash": 276874291,
        "descHash": 539746465
      },
      {
        "nameHash": 1101321627,
        "descHash": 825321633
      },
      {
        "nameHash": 660114051,
        "descHash": 707325593
      },
      {
        "nameHash": 1927643091,
        "descHash": 2866134609
      }
    ]
  },
  {
    "id": 12512,
    "type": "claymore",
    "nameId": "verdict",
    "rarity": 5,
    "nameHash": 3812523339,
    "descHash": 2615042885,
    "refinementInfo": [
      {
        "nameHash": 2378883547,
        "descHash": 306198225
      },
      {
        "nameHash": 3135127555,
        "descHash": 2640048297
      },
      {
        "nameHash": 63849907,
        "descHash": 1051959897
      },
      {
        "nameHash": 751395603,
        "descHash": 108839753
      },
      {
        "nameHash": 533413131,
        "descHash": 1496008745
      }
    ]
  },
  {
    "id": 12513,
    "type": "claymore",
    "nameId": "fang_of_the_mountain_king",
    "rarity": 5,
    "nameHash": 1183454019,
    "descHash": 665015597,
    "refinementInfo": [
      {
        "nameHash": 3276718699,
        "descHash": 138973009
      },
      {
        "nameHash": 2213372475,
        "descHash": 4032450441
      },
      {
        "nameHash": 3949991923,
        "descHash": 470856129
      },
      {
        "nameHash": 1767544347,
        "descHash": 3147604913
      },
      {
        "nameHash": 2770785803,
        "descHash": 176628873
      }
    ]
  },
  {
    "id": 13505,
    "type": "polearm",
    "nameId": "primordial_jade_winged_spear",
    "rarity": 5,
    "nameHash": 1997709467,
    "descHash": 1074834109,
    "refinementInfo": [
      {
        "nameHash": 3835416843,
        "descHash": 1709090265
      },
      {
        "nameHash": 2238355467,
        "descHash": 3604328689
      },
      {
        "nameHash": 4062985523,
        "descHash": 3159527857
      },
      {
        "nameHash": 351839803,
        "descHash": 794008505
      },
      {
        "nameHash": 4113638323,
        "descHash": 1722961881
      }
    ]
  },
  {
    "id": 13502,
    "type": "polearm",
    "nameId": "skyward_spine",
    "rarity": 5,
    "nameHash": 4158505619,
    "descHash": 2400004301,
    "refinementInfo": [
      {
        "nameHash": 2421341659,
        "descHash": 3677933153
      },
      {
        "nameHash": 4182874179,
        "descHash": 965461625
      },
      {
        "nameHash": 314659483,
        "descHash": 680920065
      },
      {
        "nameHash": 2033697203,
        "descHash": 2889838121
      },
      {
        "nameHash": 391273955,
        "descHash": 762646945
      }
    ]
  },
  {
    "id": 13504,
    "type": "polearm",
    "nameId": "vortex_vanquisher",
    "rarity": 5,
    "nameHash": 197755235,
    "descHash": 786121517,
    "refinementInfo": [
      {
        "nameHash": 3573862115,
        "descHash": 1102212161
      },
      {
        "nameHash": 2676155659,
        "descHash": 1235986465
      },
      {
        "nameHash": 2326108923,
        "descHash": 3214747377
      },
      {
        "nameHash": 940866619,
        "descHash": 1155728617
      },
      {
        "nameHash": 1414366819,
        "descHash": 714303001
      }
    ]
  },
  {
    "id": 13501,
    "type": "polearm",
    "nameId": "staff_of_homa",
    "rarity": 5,
    "nameHash": 3235324891,
    "descHash": 3487544829,
    "refinementInfo": [
      {
        "nameHash": 3284643571,
        "descHash": 3464064329
      },
      {
        "nameHash": 4160016587,
        "descHash": 4242489505
      },
      {
        "nameHash": 3762570619,
        "descHash": 407873177
      },
      {
        "nameHash": 4003321987,
        "descHash": 1346183937
      },
      {
        "nameHash": 3836188467,
        "descHash": 4016813361
      }
    ]
  },
  {
    "id": 13509,
    "type": "polearm",
    "nameId": "engulfing_lightning",
    "rarity": 5,
    "nameHash": 3717849275,
    "descHash": 859215189,
    "refinementInfo": [
      {
        "nameHash": 2229628659,
        "descHash": 3110784401
      },
      {
        "nameHash": 1031467107,
        "descHash": 1381088409
      },
      {
        "nameHash": 2320856515,
        "descHash": 445724265
      },
      {
        "nameHash": 1825144179,
        "descHash": 3958647865
      },
      {
        "nameHash": 991968139,
        "descHash": 57447913
      }
    ]
  },
  {
    "id": 13507,
    "type": "polearm",
    "nameId": "calamity_queller",
    "rarity": 5,
    "nameHash": 688991243,
    "descHash": 4156676173,
    "refinementInfo": [
      {
        "nameHash": 131958747,
        "descHash": 3432697505
      },
      {
        "nameHash": 1050154587,
        "descHash": 3619812593
      },
      {
        "nameHash": 2825095539,
        "descHash": 4237092561
      },
      {
        "nameHash": 3837959843,
        "descHash": 3817202369
      },
      {
        "nameHash": 1932742643,
        "descHash": 642703121
      }
    ]
  },
  {
    "id": 13511,
    "type": "polearm",
    "nameId": "staff_of_the_scarlet_sands",
    "rarity": 5,
    "nameHash": 4238339131,
    "descHash": 1590458749,
    "refinementInfo": [
      {
        "nameHash": 810032979,
        "descHash": 1366324041
      },
      {
        "nameHash": 962967571,
        "descHash": 3835351777
      },
      {
        "nameHash": 1396338995,
        "descHash": 1881405929
      },
      {
        "nameHash": 3415482075,
        "descHash": 4097388529
      },
      {
        "nameHash": 3909785739,
        "descHash": 368659377
      }
    ]
  },
  {
    "id": 13512,
    "type": "polearm",
    "nameId": "crimson_moon_s_semblance",
    "rarity": 5,
    "nameHash": 2944936683,
    "descHash": 2595316557,
    "refinementInfo": [
      {
        "nameHash": 742248595,
        "descHash": 682921641
      },
      {
        "nameHash": 3624979763,
        "descHash": 2604784385
      },
      {
        "nameHash": 813291827,
        "descHash": 3852918873
      },
      {
        "nameHash": 1607784379,
        "descHash": 851625105
      },
      {
        "nameHash": 1230304555,
        "descHash": 3876290713
      }
    ]
  },
  {
    "id": 13513,
    "type": "polearm",
    "nameId": "lumidouce_elegy",
    "rarity": 5,
    "nameHash": 1948935171,
    "descHash": 319629805,
    "refinementInfo": [
      {
        "nameHash": 3325137939,
        "descHash": 3299341681
      },
      {
        "nameHash": 2582457339,
        "descHash": 2580455345
      },
      {
        "nameHash": 366863523,
        "descHash": 3815678433
      },
      {
        "nameHash": 3066993707,
        "descHash": 3866324521
      },
      {
        "nameHash": 245002355,
        "descHash": 3317284001
      }
    ]
  },
  {
    "id": 14501,
    "type": "catalyst",
    "nameId": "skyward_atlas",
    "rarity": 5,
    "nameHash": 807607555,
    "descHash": 929689749,
    "refinementInfo": [
      {
        "nameHash": 2012979963,
        "descHash": 1572327097
      },
      {
        "nameHash": 853458811,
        "descHash": 1756765969
      },
      {
        "nameHash": 754460091,
        "descHash": 3690397193
      },
      {
        "nameHash": 3320576331,
        "descHash": 950631985
      },
      {
        "nameHash": 3898539027,
        "descHash": 483482313
      }
    ]
  },
  {
    "id": 14502,
    "type": "catalyst",
    "nameId": "lost_prayer_to_the_sacred_winds",
    "rarity": 5,
    "nameHash": 1455107995,
    "descHash": 2188385645,
    "refinementInfo": [
      {
        "nameHash": 483942315,
        "descHash": 3973186969
      },
      {
        "nameHash": 2082408731,
        "descHash": 2446228769
      },
      {
        "nameHash": 3585423243,
        "descHash": 1833471105
      },
      {
        "nameHash": 3458967547,
        "descHash": 1045127345
      },
      {
        "nameHash": 3364338659,
        "descHash": 3828463225
      }
    ]
  },
  {
    "id": 14504,
    "type": "catalyst",
    "nameId": "memory_of_dust",
    "rarity": 5,
    "nameHash": 693354267,
    "descHash": 1610195525,
    "refinementInfo": [
      {
        "nameHash": 2253837067,
        "descHash": 3201035057
      },
      {
        "nameHash": 2516967003,
        "descHash": 3356292009
      },
      {
        "nameHash": 1178760947,
        "descHash": 3581163817
      },
      {
        "nameHash": 3293204539,
        "descHash": 3650126921
      },
      {
        "nameHash": 2149411851,
        "descHash": 24698153
      }
    ]
  },
  {
    "id": 14506,
    "type": "catalyst",
    "nameId": "everlasting_moonglow",
    "rarity": 5,
    "nameHash": 1890163363,
    "descHash": 1589431549,
    "refinementInfo": [
      {
        "nameHash": 1301140251,
        "descHash": 1545098289
      },
      {
        "nameHash": 2842219875,
        "descHash": 3285363689
      },
      {
        "nameHash": 2334707419,
        "descHash": 1277904569
      },
      {
        "nameHash": 3840031139,
        "descHash": 2406669881
      },
      {
        "nameHash": 597991835,
        "descHash": 549838313
      }
    ]
  },
  {
    "id": 14509,
    "type": "catalyst",
    "nameId": "kagura_s_verity",
    "rarity": 5,
    "nameHash": 310247243,
    "descHash": 712713253,
    "refinementInfo": [
      {
        "nameHash": 3901432715,
        "descHash": 581756417
      },
      {
        "nameHash": 1199071947,
        "descHash": 4186939041
      },
      {
        "nameHash": 1016645683,
        "descHash": 265099305
      },
      {
        "nameHash": 676238211,
        "descHash": 1239317409
      },
      {
        "nameHash": 3371922315,
        "descHash": 931121153
      }
    ]
  },
  {
    "id": 14511,
    "type": "catalyst",
    "nameId": "a_thousand_floating_dreams",
    "rarity": 5,
    "nameHash": 1201790667,
    "descHash": 3566460341,
    "refinementInfo": [
      {
        "nameHash": 225077435,
        "descHash": 3277953105
      },
      {
        "nameHash": 2776303811,
        "descHash": 3483183761
      },
      {
        "nameHash": 2108426435,
        "descHash": 1346697681
      },
      {
        "nameHash": 1514094739,
        "descHash": 1288839953
      },
      {
        "nameHash": 453444347,
        "descHash": 176349145
      }
    ]
  },
  {
    "id": 14512,
    "type": "catalyst",
    "nameId": "tulaytullah_s_remembrance",
    "rarity": 5,
    "nameHash": 359484419,
    "descHash": 2928522477,
    "refinementInfo": [
      {
        "nameHash": 2327126659,
        "descHash": 214290361
      },
      {
        "nameHash": 1263737019,
        "descHash": 4045676329
      },
      {
        "nameHash": 1566273531,
        "descHash": 3361863785
      },
      {
        "nameHash": 1714786347,
        "descHash": 2360146377
      },
      {
        "nameHash": 2351445619,
        "descHash": 3801119057
      }
    ]
  },
  {
    "id": 14505,
    "type": "catalyst",
    "nameId": "jadefall_s_splendor",
    "rarity": 5,
    "nameHash": 4007372867,
    "descHash": 1564641749,
    "refinementInfo": [
      {
        "nameHash": 2612600955,
        "descHash": 3126185433
      },
      {
        "nameHash": 1099173571,
        "descHash": 152045553
      },
      {
        "nameHash": 3712117035,
        "descHash": 3236878545
      },
      {
        "nameHash": 4230343419,
        "descHash": 401263433
      },
      {
        "nameHash": 1523089323,
        "descHash": 1464714049
      }
    ]
  },
  {
    "id": 14513,
    "type": "catalyst",
    "nameId": "cashflow_supervision",
    "rarity": 5,
    "nameHash": 724881171,
    "descHash": 3051879797,
    "refinementInfo": [
      {
        "nameHash": 4262553859,
        "descHash": 3868894561
      },
      {
        "nameHash": 2871755403,
        "descHash": 2540929457
      },
      {
        "nameHash": 400104675,
        "descHash": 2830104241
      },
      {
        "nameHash": 2393793907,
        "descHash": 1066468313
      },
      {
        "nameHash": 3101537195,
        "descHash": 709889889
      }
    ]
  },
  {
    "id": 14514,
    "type": "catalyst",
    "nameId": "tome_of_the_eternal_flow",
    "rarity": 5,
    "nameHash": 4176923379,
    "descHash": 3974216757,
    "refinementInfo": [
      {
        "nameHash": 3205793275,
        "descHash": 2743511865
      },
      {
        "nameHash": 2574659219,
        "descHash": 2551163297
      },
      {
        "nameHash": 377075659,
        "descHash": 2246606513
      },
      {
        "nameHash": 1260809867,
        "descHash": 2209238281
      },
      {
        "nameHash": 675511059,
        "descHash": 3754696481
      }
    ]
  },
  {
    "id": 14515,
    "type": "catalyst",
    "nameId": "crane_s_echoing_call",
    "rarity": 5,
    "nameHash": 3660626387,
    "descHash": 3195584853,
    "refinementInfo": [
      {
        "nameHash": 1544097547,
        "descHash": 921985169
      },
      {
        "nameHash": 3574413835,
        "descHash": 944129313
      },
      {
        "nameHash": 2912190563,
        "descHash": 3379277113
      },
      {
        "nameHash": 4238964803,
        "descHash": 1082683113
      },
      {
        "nameHash": 1934855067,
        "descHash": 3211055345
      }
    ]
  },
  {
    "id": 14516,
    "type": "catalyst",
    "nameId": "surf_s_up",
    "rarity": 5,
    "nameHash": 1673987515,
    "descHash": 2031726741,
    "refinementInfo": [
      {
        "nameHash": 3837080627,
        "descHash": 3744504841
      },
      {
        "nameHash": 89994195,
        "descHash": 1214735841
      },
      {
        "nameHash": 1079513851,
        "descHash": 3111313161
      },
      {
        "nameHash": 708169307,
        "descHash": 520701065
      },
      {
        "nameHash": 832268067,
        "descHash": 1337581857
      }
    ]
  },
  {
    "id": 15501,
    "type": "bow",
    "nameId": "skyward_harp",
    "rarity": 5,
    "nameHash": 3933622347,
    "descHash": 1491045405,
    "refinementInfo": [
      {
        "nameHash": 2971867899,
        "descHash": 3850184073
      },
      {
        "nameHash": 3038668099,
        "descHash": 2742737713
      },
      {
        "nameHash": 3488991787,
        "descHash": 4244549793
      },
      {
        "nameHash": 4076186955,
        "descHash": 1674512929
      },
      {
        "nameHash": 2440850563,
        "descHash": 2384978993
      }
    ]
  },
  {
    "id": 15502,
    "type": "bow",
    "nameId": "amos_bow",
    "rarity": 5,
    "nameHash": 828711395,
    "descHash": 2543630901,
    "refinementInfo": [
      {
        "nameHash": 653910451,
        "descHash": 3340368201
      },
      {
        "nameHash": 3854319995,
        "descHash": 1670409121
      },
      {
        "nameHash": 1413400515,
        "descHash": 1879506945
      },
      {
        "nameHash": 608572019,
        "descHash": 3261388153
      },
      {
        "nameHash": 1133599347,
        "descHash": 591206441
      }
    ]
  },
  {
    "id": 15504,
    "type": "bow",
    "nameId": "kunwu_s_wyrmbane",
    "rarity": 5,
    "nameHash": 565329475,
    "descHash": 1330189981,
    "refinementInfo": []
  },
  {
    "id": 15505,
    "type": "bow",
    "nameId": "primordial_jade_vista",
    "rarity": 5,
    "nameHash": 1994081075,
    "descHash": 1352415965,
    "refinementInfo": []
  },
  {
    "id": 15503,
    "type": "bow",
    "nameId": "elegy_for_the_end",
    "rarity": 5,
    "nameHash": 3112679155,
    "descHash": 1305978565,
    "refinementInfo": [
      {
        "nameHash": 3170253363,
        "descHash": 3647072697
      },
      {
        "nameHash": 315311267,
        "descHash": 1876022129
      },
      {
        "nameHash": 4123739899,
        "descHash": 888324649
      },
      {
        "nameHash": 3758520035,
        "descHash": 346681641
      },
      {
        "nameHash": 1404688115,
        "descHash": 3387352401
      }
    ]
  },
  {
    "id": 15509,
    "type": "bow",
    "nameId": "thundering_pulse",
    "rarity": 5,
    "nameHash": 2918525947,
    "descHash": 2907094261,
    "refinementInfo": [
      {
        "nameHash": 1682410515,
        "descHash": 4166726593
      },
      {
        "nameHash": 2207515099,
        "descHash": 2262429105
      },
      {
        "nameHash": 1029977955,
        "descHash": 250047161
      },
      {
        "nameHash": 3971915331,
        "descHash": 3651035713
      },
      {
        "nameHash": 2470306939,
        "descHash": 832907033
      }
    ]
  },
  {
    "id": 15507,
    "type": "bow",
    "nameId": "polar_star",
    "rarity": 5,
    "nameHash": 1901973075,
    "descHash": 2563714373,
    "refinementInfo": [
      {
        "nameHash": 303627203,
        "descHash": 2605535553
      },
      {
        "nameHash": 2283089307,
        "descHash": 3585964169
      },
      {
        "nameHash": 1067527339,
        "descHash": 2433978561
      },
      {
        "nameHash": 3463007835,
        "descHash": 4087271041
      },
      {
        "nameHash": 1651985379,
        "descHash": 2134754385
      }
    ]
  },
  {
    "id": 15508,
    "type": "bow",
    "nameId": "aqua_simulacra",
    "rarity": 5,
    "nameHash": 4230231107,
    "descHash": 954648749,
    "refinementInfo": [
      {
        "nameHash": 665618219,
        "descHash": 2574022001
      },
      {
        "nameHash": 1836768195,
        "descHash": 2860268457
      },
      {
        "nameHash": 3401288155,
        "descHash": 4062998585
      },
      {
        "nameHash": 859975251,
        "descHash": 2433578777
      },
      {
        "nameHash": 3966753539,
        "descHash": 4260110017
      }
    ]
  },
  {
    "id": 15511,
    "type": "bow",
    "nameId": "hunter_s_path",
    "rarity": 5,
    "nameHash": 1348687251,
    "descHash": 2918205389,
    "refinementInfo": [
      {
        "nameHash": 1173973395,
        "descHash": 608698705
      },
      {
        "nameHash": 1082089515,
        "descHash": 64084113
      },
      {
        "nameHash": 4237332779,
        "descHash": 4259653657
      },
      {
        "nameHash": 2710178587,
        "descHash": 2834360001
      },
      {
        "nameHash": 1395607523,
        "descHash": 753180665
      }
    ]
  },
  {
    "id": 15512,
    "type": "bow",
    "nameId": "the_first_great_magic",
    "rarity": 5,
    "nameHash": 2988480723,
    "descHash": 2871661869,
    "refinementInfo": [
      {
        "nameHash": 3257922883,
        "descHash": 3310399593
      },
      {
        "nameHash": 1929531827,
        "descHash": 1271636001
      },
      {
        "nameHash": 580665027,
        "descHash": 1755279777
      },
      {
        "nameHash": 848698219,
        "descHash": 3915051033
      },
      {
        "nameHash": 1310150611,
        "descHash": 3389333457
      }
    ]
  },
  {
    "id": 15513,
    "type": "bow",
    "nameId": "silvershower_heartstrings",
    "rarity": 5,
    "nameHash": 1257396043,
    "descHash": 117570973,
    "refinementInfo": [
      {
        "nameHash": 2934369811,
        "descHash": 3328224025
      },
      {
        "nameHash": 1907460379,
        "descHash": 1720715737
      },
      {
        "nameHash": 286596507,
        "descHash": 2767959217
      },
      {
        "nameHash": 2192968379,
        "descHash": 2716834033
      },
      {
        "nameHash": 365216099,
        "descHash": 913631185
      }
    ]
  }
] as const;

export type WeaponInfo = typeof weaponInfo[number];
export default weaponInfo;
export const getTranslatedWeaponInfo = () => {
  const { t } = useTranslation();
  return weaponInfo.map((weapon) => {
    const { nameHash, descHash, refinementInfo, ...rest } = weapon;
    return {
      ...rest,
      name: t(`dm.${nameHash}`),
      desc: t(`dm.${descHash}`),
      refinementInfo: refinementInfo.map(({ nameHash, descHash }) => ({
        name: t(`dm.${nameHash}`),
        desc: t(`dm.${descHash}`),
      }))
    }
  });
}

export type TranslatedWeaponInfo = ReturnType<typeof getTranslatedWeaponInfo>[number];
export type WeaponId = WeaponInfo["nameId"];
