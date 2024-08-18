import { useTranslation } from "react-i18next";

const artifactInfo = [
  {
    "id": 10001,
    "nameId": "resolution_of_sojourner",
    "nameHash": 35587211,
    "minRarity": 3,
    "maxRarity": 4,
    "setBonuses": {
      "2": {
        "descHash": 853519921
      },
      "4": {
        "descHash": 1219449745
      }
    },
    "pieces": {
      "flower": {
        "nameHash": 1445795932,
        "descHash": 1105146856
      },
      "feather": {
        "nameHash": 3114338660,
        "descHash": 739057480
      },
      "sands": {
        "nameHash": 1658110324,
        "descHash": 1779271128
      },
      "goblet": {
        "nameHash": 3492048612,
        "descHash": 224592184
      },
      "circlet": {
        "nameHash": 1516923756,
        "descHash": 3567487368
      }
    }
  },
  {
    "id": 10002,
    "nameId": "brave_heart",
    "nameHash": 3794490427,
    "minRarity": 3,
    "maxRarity": 4,
    "setBonuses": {
      "2": {
        "descHash": 3344602193
      },
      "4": {
        "descHash": 3336988449
      }
    },
    "pieces": {
      "flower": {
        "nameHash": 3199766924,
        "descHash": 4048977752
      },
      "feather": {
        "nameHash": 723367108,
        "descHash": 298740056
      },
      "sands": {
        "nameHash": 3787302940,
        "descHash": 2571974960
      },
      "goblet": {
        "nameHash": 2705164436,
        "descHash": 808237392
      },
      "circlet": {
        "nameHash": 1290511100,
        "descHash": 2549910208
      }
    }
  },
  {
    "id": 10003,
    "nameId": "defender_s_will",
    "nameHash": 3431172843,
    "minRarity": 3,
    "maxRarity": 4,
    "setBonuses": {
      "2": {
        "descHash": 2466150113
      },
      "4": {
        "descHash": 1585683273
      }
    },
    "pieces": {
      "flower": {
        "nameHash": 2752003612,
        "descHash": 3184282712
      },
      "feather": {
        "nameHash": 2944056820,
        "descHash": 2763975008
      },
      "sands": {
        "nameHash": 1281494740,
        "descHash": 4074603384
      },
      "goblet": {
        "nameHash": 235230780,
        "descHash": 4057886184
      },
      "circlet": {
        "nameHash": 101049580,
        "descHash": 797266216
      }
    }
  },
  {
    "id": 10004,
    "nameId": "tiny_miracle",
    "nameHash": 539533683,
    "minRarity": 3,
    "maxRarity": 4,
    "setBonuses": {
      "2": {
        "descHash": 2743516289
      },
      "4": {
        "descHash": 3105583961
      }
    },
    "pieces": {
      "flower": {
        "nameHash": 3110660540,
        "descHash": 2825191976
      },
      "feather": {
        "nameHash": 569980612,
        "descHash": 2875720440
      },
      "sands": {
        "nameHash": 3107502420,
        "descHash": 3489132848
      },
      "goblet": {
        "nameHash": 2683140980,
        "descHash": 3600602768
      },
      "circlet": {
        "nameHash": 1744296068,
        "descHash": 911241232
      }
    }
  },
  {
    "id": 10005,
    "nameId": "berserker",
    "nameHash": 3567247531,
    "minRarity": 3,
    "maxRarity": 4,
    "setBonuses": {
      "2": {
        "descHash": 936048889
      },
      "4": {
        "descHash": 861564337
      }
    },
    "pieces": {
      "flower": {
        "nameHash": 3288745244,
        "descHash": 2706840664
      },
      "feather": {
        "nameHash": 2233479140,
        "descHash": 3784962112
      },
      "sands": {
        "nameHash": 2060782292,
        "descHash": 3061775360
      },
      "goblet": {
        "nameHash": 750064948,
        "descHash": 2942999640
      },
      "circlet": {
        "nameHash": 471492732,
        "descHash": 1634030848
      }
    }
  },
  {
    "id": 10006,
    "nameId": "martial_artist",
    "nameHash": 3685215283,
    "minRarity": 3,
    "maxRarity": 4,
    "setBonuses": {
      "2": {
        "descHash": 2808039409
      },
      "4": {
        "descHash": 3109431249
      }
    },
    "pieces": {
      "flower": {
        "nameHash": 1259933548,
        "descHash": 2545280200
      },
      "feather": {
        "nameHash": 1428344324,
        "descHash": 2337112672
      },
      "sands": {
        "nameHash": 1312221300,
        "descHash": 1091265984
      },
      "goblet": {
        "nameHash": 65972244,
        "descHash": 2734453664
      },
      "circlet": {
        "nameHash": 2391349164,
        "descHash": 3457708896
      }
    }
  },
  {
    "id": 10007,
    "nameId": "instructor",
    "nameHash": 2662295475,
    "minRarity": 3,
    "maxRarity": 4,
    "setBonuses": {
      "2": {
        "descHash": 3817263353
      },
      "4": {
        "descHash": 2436815897
      }
    },
    "pieces": {
      "flower": {
        "nameHash": 3434716644,
        "descHash": 3505879736
      },
      "feather": {
        "nameHash": 3055914596,
        "descHash": 371948760
      },
      "sands": {
        "nameHash": 458540388,
        "descHash": 3566788320
      },
      "goblet": {
        "nameHash": 3922962156,
        "descHash": 741775376
      },
      "circlet": {
        "nameHash": 2672735756,
        "descHash": 1027969920
      }
    }
  },
  {
    "id": 10008,
    "nameId": "gambler",
    "nameHash": 1543521331,
    "minRarity": 3,
    "maxRarity": 4,
    "setBonuses": {
      "2": {
        "descHash": 537400553
      },
      "4": {
        "descHash": 2010024433
      }
    },
    "pieces": {
      "flower": {
        "nameHash": 670369980,
        "descHash": 3054152256
      },
      "feather": {
        "nameHash": 3974717380,
        "descHash": 311387024
      },
      "sands": {
        "nameHash": 2081258500,
        "descHash": 3693304984
      },
      "goblet": {
        "nameHash": 2268972532,
        "descHash": 2006272472
      },
      "circlet": {
        "nameHash": 3998773628,
        "descHash": 3494520576
      }
    }
  },
  {
    "id": 10009,
    "nameId": "the_exile",
    "nameHash": 1519053555,
    "minRarity": 3,
    "maxRarity": 4,
    "setBonuses": {
      "2": {
        "descHash": 2925848985
      },
      "4": {
        "descHash": 16297649
      }
    },
    "pieces": {
      "flower": {
        "nameHash": 2838508492,
        "descHash": 803162560
      },
      "feather": {
        "nameHash": 1998163092,
        "descHash": 1610599096
      },
      "sands": {
        "nameHash": 1410636292,
        "descHash": 4033767576
      },
      "goblet": {
        "nameHash": 2501899244,
        "descHash": 145890208
      },
      "circlet": {
        "nameHash": 583811308,
        "descHash": 4070254752
      }
    }
  },
  {
    "id": 10010,
    "nameId": "adventurer",
    "nameHash": 1779329603,
    "minRarity": 1,
    "maxRarity": 3,
    "setBonuses": {
      "2": {
        "descHash": 442488281
      },
      "4": {
        "descHash": 437092201
      }
    },
    "pieces": {
      "flower": {
        "nameHash": 57791340,
        "descHash": 1191694160
      },
      "feather": {
        "nameHash": 1361849460,
        "descHash": 3655505080
      },
      "sands": {
        "nameHash": 3634286204,
        "descHash": 1302447024
      },
      "goblet": {
        "nameHash": 228768948,
        "descHash": 3160505056
      },
      "circlet": {
        "nameHash": 1724042012,
        "descHash": 3773397232
      }
    }
  },
  {
    "id": 10011,
    "nameId": "lucky_dog",
    "nameHash": 4129405451,
    "minRarity": 1,
    "maxRarity": 3,
    "setBonuses": {
      "2": {
        "descHash": 2098728089
      },
      "4": {
        "descHash": 944828201
      }
    },
    "pieces": {
      "flower": {
        "nameHash": 4114113236,
        "descHash": 3032531744
      },
      "feather": {
        "nameHash": 2986717660,
        "descHash": 3609762704
      },
      "sands": {
        "nameHash": 901976724,
        "descHash": 2878580040
      },
      "goblet": {
        "nameHash": 1734027908,
        "descHash": 1385959048
      },
      "circlet": {
        "nameHash": 4284905668,
        "descHash": 2484005808
      }
    }
  },
  {
    "id": 10012,
    "nameId": "scholar",
    "nameHash": 763536243,
    "minRarity": 3,
    "maxRarity": 4,
    "setBonuses": {
      "2": {
        "descHash": 4027523145
      },
      "4": {
        "descHash": 507378161
      }
    },
    "pieces": {
      "flower": {
        "nameHash": 492873164,
        "descHash": 3957805112
      },
      "feather": {
        "nameHash": 469721372,
        "descHash": 2160084184
      },
      "sands": {
        "nameHash": 3829153404,
        "descHash": 3738016672
      },
      "goblet": {
        "nameHash": 3508997436,
        "descHash": 3604039488
      },
      "circlet": {
        "nameHash": 1229973572,
        "descHash": 2443761144
      }
    }
  },
  {
    "id": 10013,
    "nameId": "traveling_doctor",
    "nameHash": 3898556667,
    "minRarity": 1,
    "maxRarity": 3,
    "setBonuses": {
      "2": {
        "descHash": 181561457
      },
      "4": {
        "descHash": 1889654273
      }
    },
    "pieces": {
      "flower": {
        "nameHash": 3220052996,
        "descHash": 3611783640
      },
      "feather": {
        "nameHash": 2294600964,
        "descHash": 1721492552
      },
      "sands": {
        "nameHash": 2739386988,
        "descHash": 230484072
      },
      "goblet": {
        "nameHash": 3874090700,
        "descHash": 1161353360
      },
      "circlet": {
        "nameHash": 2038307524,
        "descHash": 3754980040
      }
    }
  },
  {
    "id": 14001,
    "nameId": "blizzard_strayer",
    "nameHash": 1959650699,
    "minRarity": 4,
    "maxRarity": 5,
    "setBonuses": {
      "2": {
        "descHash": 2712405201
      },
      "4": {
        "descHash": 1080795585
      }
    },
    "pieces": {
      "flower": {
        "nameHash": 831881100,
        "descHash": 3888493928
      },
      "feather": {
        "nameHash": 1313955948,
        "descHash": 3749905624
      },
      "sands": {
        "nameHash": 3743396924,
        "descHash": 1123469872
      },
      "goblet": {
        "nameHash": 4095885972,
        "descHash": 3412946240
      },
      "circlet": {
        "nameHash": 2931704460,
        "descHash": 2408720304
      }
    }
  },
  {
    "id": 14002,
    "nameId": "thundersoother",
    "nameHash": 915693491,
    "minRarity": 4,
    "maxRarity": 5,
    "setBonuses": {
      "2": {
        "descHash": 3556101057
      },
      "4": {
        "descHash": 3318279857
      }
    },
    "pieces": {
      "flower": {
        "nameHash": 448015732,
        "descHash": 383548112
      },
      "feather": {
        "nameHash": 1331477796,
        "descHash": 3096556104
      },
      "sands": {
        "nameHash": 1749721516,
        "descHash": 2511856504
      },
      "goblet": {
        "nameHash": 1165988380,
        "descHash": 356790688
      },
      "circlet": {
        "nameHash": 1056372524,
        "descHash": 3191466208
      }
    }
  },
  {
    "id": 14003,
    "nameId": "lavawalker",
    "nameHash": 1414807643,
    "minRarity": 4,
    "maxRarity": 5,
    "setBonuses": {
      "2": {
        "descHash": 3669175857
      },
      "4": {
        "descHash": 2323993841
      }
    },
    "pieces": {
      "flower": {
        "nameHash": 3210375772,
        "descHash": 3653420640
      },
      "feather": {
        "nameHash": 2633787044,
        "descHash": 3475228808
      },
      "sands": {
        "nameHash": 3725731108,
        "descHash": 2829330672
      },
      "goblet": {
        "nameHash": 2219352860,
        "descHash": 892922376
      },
      "circlet": {
        "nameHash": 3677898068,
        "descHash": 2499237456
      }
    }
  },
  {
    "id": 14004,
    "nameId": "maiden_beloved",
    "nameHash": 3135412419,
    "minRarity": 4,
    "maxRarity": 5,
    "setBonuses": {
      "2": {
        "descHash": 1619689457
      },
      "4": {
        "descHash": 1947253905
      }
    },
    "pieces": {
      "flower": {
        "nameHash": 1891145604,
        "descHash": 2228498664
      },
      "feather": {
        "nameHash": 1894154524,
        "descHash": 2500701240
      },
      "sands": {
        "nameHash": 2443198244,
        "descHash": 2419658432
      },
      "goblet": {
        "nameHash": 2942754732,
        "descHash": 1836675336
      },
      "circlet": {
        "nameHash": 2752169068,
        "descHash": 1111438984
      }
    }
  },
  {
    "id": 15001,
    "nameId": "gladiator_s_finale",
    "nameHash": 1312582827,
    "minRarity": 4,
    "maxRarity": 5,
    "setBonuses": {
      "2": {
        "descHash": 3552809081
      },
      "4": {
        "descHash": 3135183041
      }
    },
    "pieces": {
      "flower": {
        "nameHash": 1800041716,
        "descHash": 2378799912
      },
      "feather": {
        "nameHash": 3775459988,
        "descHash": 4204827440
      },
      "sands": {
        "nameHash": 2889861500,
        "descHash": 638330728
      },
      "goblet": {
        "nameHash": 1160889444,
        "descHash": 280940376
      },
      "circlet": {
        "nameHash": 3380011260,
        "descHash": 722837752
      }
    }
  },
  {
    "id": 15002,
    "nameId": "viridescent_venerer",
    "nameHash": 3237665819,
    "minRarity": 4,
    "maxRarity": 5,
    "setBonuses": {
      "2": {
        "descHash": 2092181985
      },
      "4": {
        "descHash": 2340004825
      }
    },
    "pieces": {
      "flower": {
        "nameHash": 3140236764,
        "descHash": 2285030552
      },
      "feather": {
        "nameHash": 3047752436,
        "descHash": 3663410032
      },
      "sands": {
        "nameHash": 766258124,
        "descHash": 2199767576
      },
      "goblet": {
        "nameHash": 988418652,
        "descHash": 1480479216
      },
      "circlet": {
        "nameHash": 3484637620,
        "descHash": 589296296
      }
    }
  },
  {
    "id": 15003,
    "nameId": "wanderer_s_troupe",
    "nameHash": 4257423931,
    "minRarity": 4,
    "maxRarity": 5,
    "setBonuses": {
      "2": {
        "descHash": 1653158305
      },
      "4": {
        "descHash": 3961839441
      }
    },
    "pieces": {
      "flower": {
        "nameHash": 962538140,
        "descHash": 1162447312
      },
      "feather": {
        "nameHash": 1591240212,
        "descHash": 3509297680
      },
      "sands": {
        "nameHash": 335598708,
        "descHash": 2677037312
      },
      "goblet": {
        "nameHash": 3082750644,
        "descHash": 70538032
      },
      "circlet": {
        "nameHash": 1069900300,
        "descHash": 262455240
      }
    }
  },
  {
    "id": 15005,
    "nameId": "thundering_fury",
    "nameHash": 1213967619,
    "minRarity": 4,
    "maxRarity": 5,
    "setBonuses": {
      "2": {
        "descHash": 1716838313
      },
      "4": {
        "descHash": 4186114257
      }
    },
    "pieces": {
      "flower": {
        "nameHash": 1555581276,
        "descHash": 3941148136
      },
      "feather": {
        "nameHash": 4198064884,
        "descHash": 1549696592
      },
      "sands": {
        "nameHash": 1937623084,
        "descHash": 1731769432
      },
      "goblet": {
        "nameHash": 3178572852,
        "descHash": 2520800280
      },
      "circlet": {
        "nameHash": 67289772,
        "descHash": 15892448
      }
    }
  },
  {
    "id": 15006,
    "nameId": "crimson_witch_of_flames",
    "nameHash": 1928302715,
    "minRarity": 4,
    "maxRarity": 5,
    "setBonuses": {
      "2": {
        "descHash": 2602260593
      },
      "4": {
        "descHash": 1376888985
      }
    },
    "pieces": {
      "flower": {
        "nameHash": 1048327996,
        "descHash": 1543914824
      },
      "feather": {
        "nameHash": 852500780,
        "descHash": 387796416
      },
      "sands": {
        "nameHash": 1745274132,
        "descHash": 2215635416
      },
      "goblet": {
        "nameHash": 3282801820,
        "descHash": 4283707056
      },
      "circlet": {
        "nameHash": 1916183716,
        "descHash": 694711048
      }
    }
  },
  {
    "id": 15007,
    "nameId": "noblesse_oblige",
    "nameHash": 1750139131,
    "minRarity": 4,
    "maxRarity": 5,
    "setBonuses": {
      "2": {
        "descHash": 4115763905
      },
      "4": {
        "descHash": 2492204929
      }
    },
    "pieces": {
      "flower": {
        "nameHash": 506098300,
        "descHash": 1227984392
      },
      "feather": {
        "nameHash": 605169836,
        "descHash": 570226888
      },
      "sands": {
        "nameHash": 2162178732,
        "descHash": 881450648
      },
      "goblet": {
        "nameHash": 1716677620,
        "descHash": 292960160
      },
      "circlet": {
        "nameHash": 609401788,
        "descHash": 2033471384
      }
    }
  },
  {
    "id": 15008,
    "nameId": "bloodstained_chivalry",
    "nameHash": 4211407267,
    "minRarity": 4,
    "maxRarity": 5,
    "setBonuses": {
      "2": {
        "descHash": 1773482865
      },
      "4": {
        "descHash": 4274195441
      }
    },
    "pieces": {
      "flower": {
        "nameHash": 4293364300,
        "descHash": 1444714608
      },
      "feather": {
        "nameHash": 78894836,
        "descHash": 3859704448
      },
      "sands": {
        "nameHash": 3671134780,
        "descHash": 3370921072
      },
      "goblet": {
        "nameHash": 511805676,
        "descHash": 3104073952
      },
      "circlet": {
        "nameHash": 441371804,
        "descHash": 303415512
      }
    }
  },
  {
    "id": 15009,
    "nameId": "prayers_for_illumination",
    "nameHash": 2060049099,
    "minRarity": 3,
    "maxRarity": 4,
    "setBonuses": {
      "1": {
        "descHash": 304358537
      }
    },
    "pieces": {
      "circlet": {
        "nameHash": 1349215084,
        "descHash": 2250326760
      }
    }
  },
  {
    "id": 15010,
    "nameId": "prayers_for_destiny",
    "nameHash": 3999792907,
    "minRarity": 3,
    "maxRarity": 4,
    "setBonuses": {
      "1": {
        "descHash": 499321217
      }
    },
    "pieces": {
      "circlet": {
        "nameHash": 3293851596,
        "descHash": 1583881512
      }
    }
  },
  {
    "id": 15011,
    "nameId": "prayers_for_wisdom",
    "nameHash": 212557731,
    "minRarity": 3,
    "maxRarity": 4,
    "setBonuses": {
      "1": {
        "descHash": 3433981801
      }
    },
    "pieces": {
      "circlet": {
        "nameHash": 3081896228,
        "descHash": 3794793768
      }
    }
  },
  {
    "id": 15013,
    "nameId": "prayers_to_springtime",
    "nameHash": 262428003,
    "minRarity": 3,
    "maxRarity": 4,
    "setBonuses": {
      "1": {
        "descHash": 90374833
      }
    },
    "pieces": {
      "circlet": {
        "nameHash": 2801067940,
        "descHash": 1836808568
      }
    }
  },
  {
    "id": 15014,
    "nameId": "archaic_petra",
    "nameHash": 1330908707,
    "minRarity": 4,
    "maxRarity": 5,
    "setBonuses": {
      "2": {
        "descHash": 1236705993
      },
      "4": {
        "descHash": 1797264985
      }
    },
    "pieces": {
      "flower": {
        "nameHash": 3273650028,
        "descHash": 3779121008
      },
      "feather": {
        "nameHash": 1951255452,
        "descHash": 1897102040
      },
      "sands": {
        "nameHash": 337471076,
        "descHash": 630589520
      },
      "goblet": {
        "nameHash": 3887584276,
        "descHash": 1367254200
      },
      "circlet": {
        "nameHash": 2743637772,
        "descHash": 1819507560
      }
    }
  },
  {
    "id": 15015,
    "nameId": "retracing_bolide",
    "nameHash": 3669096219,
    "minRarity": 4,
    "maxRarity": 5,
    "setBonuses": {
      "2": {
        "descHash": 2028904593
      },
      "4": {
        "descHash": 2303302721
      }
    },
    "pieces": {
      "flower": {
        "nameHash": 2702380420,
        "descHash": 3472844216
      },
      "feather": {
        "nameHash": 2453726724,
        "descHash": 3897589080
      },
      "sands": {
        "nameHash": 1946354604,
        "descHash": 3101861904
      },
      "goblet": {
        "nameHash": 3142440124,
        "descHash": 1303791944
      },
      "circlet": {
        "nameHash": 1936039084,
        "descHash": 3463853680
      }
    }
  },
  {
    "id": 15016,
    "nameId": "heart_of_depth",
    "nameHash": 3639055403,
    "minRarity": 4,
    "maxRarity": 5,
    "setBonuses": {
      "2": {
        "descHash": 1931206529
      },
      "4": {
        "descHash": 83285737
      }
    },
    "pieces": {
      "flower": {
        "nameHash": 4197393380,
        "descHash": 1937717328
      },
      "feather": {
        "nameHash": 202451868,
        "descHash": 2477627536
      },
      "sands": {
        "nameHash": 481017500,
        "descHash": 1516298960
      },
      "goblet": {
        "nameHash": 1240815132,
        "descHash": 3146370736
      },
      "circlet": {
        "nameHash": 3283302740,
        "descHash": 1881713800
      }
    }
  },
  {
    "id": 15017,
    "nameId": "tenacity_of_the_millelith",
    "nameHash": 4007102419,
    "minRarity": 4,
    "maxRarity": 5,
    "setBonuses": {
      "2": {
        "descHash": 417927761
      },
      "4": {
        "descHash": 2524947961
      }
    },
    "pieces": {
      "flower": {
        "nameHash": 2374569956,
        "descHash": 864540264
      },
      "feather": {
        "nameHash": 298622532,
        "descHash": 4109074080
      },
      "sands": {
        "nameHash": 2532545548,
        "descHash": 592691696
      },
      "goblet": {
        "nameHash": 874573532,
        "descHash": 320320712
      },
      "circlet": {
        "nameHash": 2235788284,
        "descHash": 4189400896
      }
    }
  },
  {
    "id": 15018,
    "nameId": "pale_flame",
    "nameHash": 2704460819,
    "minRarity": 4,
    "maxRarity": 5,
    "setBonuses": {
      "2": {
        "descHash": 2678953001
      },
      "4": {
        "descHash": 1972611657
      }
    },
    "pieces": {
      "flower": {
        "nameHash": 1276109836,
        "descHash": 2069380744
      },
      "feather": {
        "nameHash": 2605600084,
        "descHash": 4024533896
      },
      "sands": {
        "nameHash": 3916130268,
        "descHash": 2610963520
      },
      "goblet": {
        "nameHash": 1454538188,
        "descHash": 3248298096
      },
      "circlet": {
        "nameHash": 1171494620,
        "descHash": 2419425632
      }
    }
  },
  {
    "id": 15019,
    "nameId": "shimenawa_s_reminiscence",
    "nameHash": 608159787,
    "minRarity": 4,
    "maxRarity": 5,
    "setBonuses": {
      "2": {
        "descHash": 507246609
      },
      "4": {
        "descHash": 2211841193
      }
    },
    "pieces": {
      "flower": {
        "nameHash": 3421259324,
        "descHash": 3378367376
      },
      "feather": {
        "nameHash": 4215220100,
        "descHash": 3437984552
      },
      "sands": {
        "nameHash": 1361580564,
        "descHash": 2768776696
      },
      "goblet": {
        "nameHash": 649020436,
        "descHash": 2324731664
      },
      "circlet": {
        "nameHash": 1411200988,
        "descHash": 1038220408
      }
    }
  },
  {
    "id": 15020,
    "nameId": "emblem_of_severed_fate",
    "nameHash": 930487011,
    "minRarity": 4,
    "maxRarity": 5,
    "setBonuses": {
      "2": {
        "descHash": 2240727577
      },
      "4": {
        "descHash": 415295825
      }
    },
    "pieces": {
      "flower": {
        "nameHash": 2789860524,
        "descHash": 789007304
      },
      "feather": {
        "nameHash": 1318924932,
        "descHash": 2405956584
      },
      "sands": {
        "nameHash": 899616420,
        "descHash": 2880450432
      },
      "goblet": {
        "nameHash": 4235719196,
        "descHash": 989842064
      },
      "circlet": {
        "nameHash": 2600126940,
        "descHash": 2772167744
      }
    }
  },
  {
    "id": 15021,
    "nameId": "husk_of_opulent_dreams",
    "nameHash": 797656147,
    "minRarity": 4,
    "maxRarity": 5,
    "setBonuses": {
      "2": {
        "descHash": 3536372153
      },
      "4": {
        "descHash": 34198977
      }
    },
    "pieces": {
      "flower": {
        "nameHash": 1854905796,
        "descHash": 3777709896
      },
      "feather": {
        "nameHash": 2643392284,
        "descHash": 3237756848
      },
      "sands": {
        "nameHash": 2465380076,
        "descHash": 785316224
      },
      "goblet": {
        "nameHash": 2291977340,
        "descHash": 2616061464
      },
      "circlet": {
        "nameHash": 420762140,
        "descHash": 2697309216
      }
    }
  },
  {
    "id": 15022,
    "nameId": "ocean_hued_clam",
    "nameHash": 4186447371,
    "minRarity": 4,
    "maxRarity": 5,
    "setBonuses": {
      "2": {
        "descHash": 437396137
      },
      "4": {
        "descHash": 912268385
      }
    },
    "pieces": {
      "flower": {
        "nameHash": 2165032812,
        "descHash": 257942696
      },
      "feather": {
        "nameHash": 3899110204,
        "descHash": 624244896
      },
      "sands": {
        "nameHash": 1444931908,
        "descHash": 4223562128
      },
      "goblet": {
        "nameHash": 3110638860,
        "descHash": 1506391072
      },
      "circlet": {
        "nameHash": 3554489260,
        "descHash": 3320427800
      }
    }
  },
  {
    "id": 15023,
    "nameId": "vermillion_hereafter",
    "nameHash": 1931332699,
    "minRarity": 4,
    "maxRarity": 5,
    "setBonuses": {
      "2": {
        "descHash": 4135660569
      },
      "4": {
        "descHash": 3806784241
      }
    },
    "pieces": {
      "flower": {
        "nameHash": 4286903444,
        "descHash": 3625631536
      },
      "feather": {
        "nameHash": 583297276,
        "descHash": 907191296
      },
      "sands": {
        "nameHash": 3161046692,
        "descHash": 469888744
      },
      "goblet": {
        "nameHash": 1317296644,
        "descHash": 2810898232
      },
      "circlet": {
        "nameHash": 2637888852,
        "descHash": 2070248072
      }
    }
  },
  {
    "id": 15024,
    "nameId": "echoes_of_an_offering",
    "nameHash": 2829471595,
    "minRarity": 4,
    "maxRarity": 5,
    "setBonuses": {
      "2": {
        "descHash": 1016673521
      },
      "4": {
        "descHash": 2940482105
      }
    },
    "pieces": {
      "flower": {
        "nameHash": 2279084284,
        "descHash": 2652575600
      },
      "feather": {
        "nameHash": 131415972,
        "descHash": 789683344
      },
      "sands": {
        "nameHash": 4008135244,
        "descHash": 3745003232
      },
      "goblet": {
        "nameHash": 2032060660,
        "descHash": 2339439408
      },
      "circlet": {
        "nameHash": 1869722260,
        "descHash": 2206087752
      }
    }
  },
  {
    "id": 15025,
    "nameId": "deepwood_memories",
    "nameHash": 3857111747,
    "minRarity": 4,
    "maxRarity": 5,
    "setBonuses": {
      "2": {
        "descHash": 1987945857
      },
      "4": {
        "descHash": 1381267761
      }
    },
    "pieces": {
      "flower": {
        "nameHash": 1961752204,
        "descHash": 3698963136
      },
      "feather": {
        "nameHash": 2574434972,
        "descHash": 2228328048
      },
      "sands": {
        "nameHash": 4098729604,
        "descHash": 1109985392
      },
      "goblet": {
        "nameHash": 1676197220,
        "descHash": 2180841032
      },
      "circlet": {
        "nameHash": 2887190844,
        "descHash": 1925424472
      }
    }
  },
  {
    "id": 15026,
    "nameId": "gilded_dreams",
    "nameHash": 3450579555,
    "minRarity": 4,
    "maxRarity": 5,
    "setBonuses": {
      "2": {
        "descHash": 1833229521
      },
      "4": {
        "descHash": 1474644585
      }
    },
    "pieces": {
      "flower": {
        "nameHash": 2987059292,
        "descHash": 994121632
      },
      "feather": {
        "nameHash": 3098409180,
        "descHash": 1694389168
      },
      "sands": {
        "nameHash": 2158357020,
        "descHash": 249945680
      },
      "goblet": {
        "nameHash": 3544683012,
        "descHash": 2620312192
      },
      "circlet": {
        "nameHash": 2851585876,
        "descHash": 4100464928
      }
    }
  },
  {
    "id": 15027,
    "nameId": "desert_pavilion_chronicle",
    "nameHash": 1473084923,
    "minRarity": 4,
    "maxRarity": 5,
    "setBonuses": {
      "2": {
        "descHash": 508888905
      },
      "4": {
        "descHash": 394891321
      }
    },
    "pieces": {
      "flower": {
        "nameHash": 2264087148,
        "descHash": 572872864
      },
      "feather": {
        "nameHash": 519167772,
        "descHash": 1121308536
      },
      "sands": {
        "nameHash": 2809576500,
        "descHash": 115118912
      },
      "goblet": {
        "nameHash": 1749874020,
        "descHash": 3338414640
      },
      "circlet": {
        "nameHash": 2813217444,
        "descHash": 4188435872
      }
    }
  },
  {
    "id": 15028,
    "nameId": "flower_of_paradise_lost",
    "nameHash": 440290627,
    "minRarity": 4,
    "maxRarity": 5,
    "setBonuses": {
      "2": {
        "descHash": 2339860337
      },
      "4": {
        "descHash": 2451397817
      }
    },
    "pieces": {
      "flower": {
        "nameHash": 1724658612,
        "descHash": 1092143440
      },
      "feather": {
        "nameHash": 3307324868,
        "descHash": 1911969536
      },
      "sands": {
        "nameHash": 1303563340,
        "descHash": 2636448432
      },
      "goblet": {
        "nameHash": 1819665068,
        "descHash": 1827818984
      },
      "circlet": {
        "nameHash": 3827761476,
        "descHash": 2184554888
      }
    }
  },
  {
    "id": 15029,
    "nameId": "nymph_s_dream",
    "nameHash": 3583902035,
    "minRarity": 4,
    "maxRarity": 5,
    "setBonuses": {
      "2": {
        "descHash": 3564514145
      },
      "4": {
        "descHash": 3662501241
      }
    },
    "pieces": {
      "flower": {
        "nameHash": 4194054668,
        "descHash": 810893560
      },
      "feather": {
        "nameHash": 300735980,
        "descHash": 1063516520
      },
      "sands": {
        "nameHash": 569289700,
        "descHash": 3228836256
      },
      "goblet": {
        "nameHash": 3623460348,
        "descHash": 1488958208
      },
      "circlet": {
        "nameHash": 906667788,
        "descHash": 3963957072
      }
    }
  },
  {
    "id": 15030,
    "nameId": "vourukasha_s_glow",
    "nameHash": 2519840043,
    "minRarity": 4,
    "maxRarity": 5,
    "setBonuses": {
      "2": {
        "descHash": 4197544345
      },
      "4": {
        "descHash": 1783751721
      }
    },
    "pieces": {
      "flower": {
        "nameHash": 2192067188,
        "descHash": 1420983000
      },
      "feather": {
        "nameHash": 2606766532,
        "descHash": 4211426032
      },
      "sands": {
        "nameHash": 3947874620,
        "descHash": 964976152
      },
      "goblet": {
        "nameHash": 1352276684,
        "descHash": 3431109800
      },
      "circlet": {
        "nameHash": 331647924,
        "descHash": 1934616016
      }
    }
  },
  {
    "id": 15031,
    "nameId": "marechaussee_hunter",
    "nameHash": 730759547,
    "minRarity": 4,
    "maxRarity": 5,
    "setBonuses": {
      "2": {
        "descHash": 620228345
      },
      "4": {
        "descHash": 4117991857
      }
    },
    "pieces": {
      "flower": {
        "nameHash": 2375045428,
        "descHash": 1553286144
      },
      "feather": {
        "nameHash": 2547799604,
        "descHash": 2670342384
      },
      "sands": {
        "nameHash": 1651765236,
        "descHash": 734746568
      },
      "goblet": {
        "nameHash": 3155192452,
        "descHash": 745439840
      },
      "circlet": {
        "nameHash": 1955993636,
        "descHash": 1838436200
      }
    }
  },
  {
    "id": 15032,
    "nameId": "golden_troupe",
    "nameHash": 3539135179,
    "minRarity": 4,
    "maxRarity": 5,
    "setBonuses": {
      "2": {
        "descHash": 3600369433
      },
      "4": {
        "descHash": 3116751433
      }
    },
    "pieces": {
      "flower": {
        "nameHash": 2592796852,
        "descHash": 957287280
      },
      "feather": {
        "nameHash": 3679772588,
        "descHash": 2961458344
      },
      "sands": {
        "nameHash": 3989736364,
        "descHash": 1867890768
      },
      "goblet": {
        "nameHash": 1173569964,
        "descHash": 2790804168
      },
      "circlet": {
        "nameHash": 3797161348,
        "descHash": 3173059512
      }
    }
  },
  {
    "id": 15033,
    "nameId": "song_of_days_past",
    "nameHash": 3228309243,
    "minRarity": 4,
    "maxRarity": 5,
    "setBonuses": {
      "2": {
        "descHash": 1046021713
      },
      "4": {
        "descHash": 3260891121
      }
    },
    "pieces": {
      "flower": {
        "nameHash": 866374916,
        "descHash": 2457422576
      },
      "feather": {
        "nameHash": 659937796,
        "descHash": 3396509552
      },
      "sands": {
        "nameHash": 922399468,
        "descHash": 847756032
      },
      "goblet": {
        "nameHash": 3030294180,
        "descHash": 3970739240
      },
      "circlet": {
        "nameHash": 3332436196,
        "descHash": 3722197800
      }
    }
  },
  {
    "id": 15034,
    "nameId": "nighttime_whispers_in_the_echoing_woods",
    "nameHash": 994089547,
    "minRarity": 4,
    "maxRarity": 5,
    "setBonuses": {
      "2": {
        "descHash": 472031545
      },
      "4": {
        "descHash": 346244985
      }
    },
    "pieces": {
      "flower": {
        "nameHash": 2030509332,
        "descHash": 1442580448
      },
      "feather": {
        "nameHash": 961216004,
        "descHash": 2861279760
      },
      "sands": {
        "nameHash": 1989415020,
        "descHash": 3435487512
      },
      "goblet": {
        "nameHash": 2154391060,
        "descHash": 2660986000
      },
      "circlet": {
        "nameHash": 1951072580,
        "descHash": 4068758136
      }
    }
  },
  {
    "id": 15035,
    "nameId": "fragment_of_harmonic_whimsy",
    "nameHash": 3029495379,
    "minRarity": 4,
    "maxRarity": 5,
    "setBonuses": {
      "2": {
        "descHash": 650567761
      },
      "4": {
        "descHash": 3356546321
      }
    },
    "pieces": {
      "flower": {
        "nameHash": 1809415524,
        "descHash": 4066629824
      },
      "feather": {
        "nameHash": 3081478772,
        "descHash": 670727600
      },
      "sands": {
        "nameHash": 3134129324,
        "descHash": 341535056
      },
      "goblet": {
        "nameHash": 1691105380,
        "descHash": 1256275440
      },
      "circlet": {
        "nameHash": 3246653860,
        "descHash": 1702312488
      }
    }
  },
  {
    "id": 15036,
    "nameId": "unfinished_reverie",
    "nameHash": 1407869611,
    "minRarity": 4,
    "maxRarity": 5,
    "setBonuses": {
      "2": {
        "descHash": 3591394537
      },
      "4": {
        "descHash": 2509713777
      }
    },
    "pieces": {
      "flower": {
        "nameHash": 1794117964,
        "descHash": 4278048448
      },
      "feather": {
        "nameHash": 777741588,
        "descHash": 4059193120
      },
      "sands": {
        "nameHash": 329286804,
        "descHash": 2935977832
      },
      "goblet": {
        "nameHash": 3749124492,
        "descHash": 718167024
      },
      "circlet": {
        "nameHash": 700967596,
        "descHash": 194753136
      }
    }
  }
] as const;
export default artifactInfo;
export type ArtifactInfo = typeof artifactInfo[number];
export const translatedArtifactInfo = () => {
  const { t } = useTranslation();
  return artifactInfo.map(artifact => {
    const { nameHash, setBonuses, pieces, ...rest } = artifact;
    return {
      ...rest,
      name: t(`dm.${nameHash}`),
      pieces: Object.fromEntries(Object.keys(pieces).map(key => {
        const { nameHash, descHash } = pieces[key as keyof ArtifactInfo["pieces"]]
        return [key as keyof ArtifactInfo["pieces"], {
          name: t(`dm.${nameHash}`),
          desc: t(`dm.${descHash}`)
        }]
      })),
      setBonuses: Object.fromEntries(Object.keys(setBonuses).map(key => {
        const { descHash } = (setBonuses as unknown as { [key: number]: { descHash: number } })[parseInt(key)]
        return [
          parseInt(key) as number, {
            desc: t(`dm.${descHash}`)
          }]
      }))
    }
  })
}
export type TranslatedArtifactInfo = ReturnType<typeof translatedArtifactInfo>[number];
export type ArtifactId = ArtifactInfo["nameId"];
