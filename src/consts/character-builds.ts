import { CharacterId } from "./character-info";
import { Element, WeaponType } from "."
import { WeaponId } from "./weapon-info";
import { ArtifactGroupId, ArtifactId } from "./artifact-info";

const characterBuilds = [
  {
    "nameId": "amber",
    "element": "pyro",
    "weapon": "bow",
    "notes": "DPS\nAmber Melt DPS is a playstyle where she uses Charged Attacks to trigger Melt. Rankings assume she is used with Bennett. \n\nRegarding Weapon Choices:\nWhen attacking Weak Points, the attacks are guarenteed to Crit, making weapons with Crit Rate substat lose value.\nAmos' Bow: Ranking assumes you stay close to the enemy but this weapons has the potential to outclasses Aqua Simulacra with max stacks but maintaing stacks would be difficult.\nSharpshooter's Oath: Significantly more potent if used in a headshot heavy Charged Attack playstyle.\n\nSUPPORT\nDue to her poor scalings, this section is dedicated to a low-investment build that provides utility and shieldbreaking capabilities by abusing her quick Pyro application on her Elemental Burst. Due to her energy generation being extremely poor, her Energy Recharge options are prioritized.\n\nRegarding Artifact Sets:\nInstructor (4): This set is preferred over Noblesse Oblige (4) when Amber is used as support in a Hu Tao Vaporize team.",
    "builds": [
      {
        "name": "MELT DPS",
        "artifactMainStats": "Sands - ATK% / Elemental Mastery\nGoblet - Pyro DMG\nCirclet - Crit DMG",
        "artifactSubStats": "1. Crit DMG\n2. ATK%\n3. Elemental Mastery\n4. Flat ATK",
        "talentPriority": "1. Normal Attack\n2. Skill",
        "abilityTips": "",
        "weapons": [
          "the_first_great_magic",
          "aqua_simulacra",
          "thundering_pulse",
          "skyward_harp",
          "polar_star",
          "slingshot",
          "amos_bow",
          "hunter_s_path",
          "the_viridescent_hunt",
          "hamayumi",
          "prototype_crescent",
          "song_of_stillness",
          "windblume_ode",
          "the_stringless",
          "sharpshooter_s_oath",
          "king_s_squire",
          "scion_of_the_blazing_sun"
        ],
        "artifactSets": [
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "shimenawa_s_reminiscence"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "wanderer_s_troupe"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "crimson_witch_of_flames"
            }
          },
          {
            "type": "double",
            "options": [
              {
                "type": "set",
                "id": "crimson_witch_of_flames"
              },
              {
                "type": "set",
                "id": "marechaussee_hunter"
              }
            ]
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "gilded_dreams"
            }
          },
          {
            "type": "choose-2",
            "options": [
              {
                "type": "set",
                "id": "crimson_witch_of_flames"
              },
              {
                "type": "set",
                "id": "marechaussee_hunter"
              },
              {
                "type": "group",
                "id": "80-em"
              }
            ]
          },
          {
            "type": "choose-2",
            "options": [
              {
                "type": "set",
                "id": "crimson_witch_of_flames"
              },
              {
                "type": "set",
                "id": "marechaussee_hunter"
              },
              {
                "type": "group",
                "id": "18-atk"
              }
            ]
          },
          {
            "type": "double",
            "options": [
              {
                "type": "group",
                "id": "80-em"
              },
              {
                "type": "group",
                "id": "80-em"
              }
            ]
          },
          {
            "type": "double",
            "options": [
              {
                "type": "group",
                "id": "18-atk"
              },
              {
                "type": "group",
                "id": "18-atk"
              }
            ]
          },
          {
            "type": "double",
            "options": [
              {
                "type": "group",
                "id": "18-atk"
              },
              {
                "type": "group",
                "id": "80-em"
              }
            ]
          }
        ]
      },
      {
        "name": "SUPPORT\n✩",
        "artifactMainStats": "Sands - Energy Recharge / ATK%\nGoblet - Pyro DMG\nCirclet - Crit Rate / DMG\n",
        "artifactSubStats": "1. Energy Recharge\n2. Crit Rate / DMG\n3. ATK%\n4. Elemental Mastery\n5. Flat ATK",
        "talentPriority": "1. Burst\n2. Skill",
        "abilityTips": "",
        "weapons": [
          "elegy_for_the_end",
          "favonius_warbow",
          "sacrificial_bow",
          "the_viridescent_hunt"
        ],
        "artifactSets": [
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "noblesse_oblige"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "instructor"
            }
          },
          {
            "type": "double",
            "options": [
              {
                "type": "group",
                "id": "20-er"
              },
              {
                "type": "group",
                "id": "20-er"
              }
            ]
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "the_exile"
            }
          }
        ]
      }
    ]
  },
  {
    "nameId": "xiangling",
    "element": "pyro",
    "weapon": "polearm",
    "notes": "OFF-FIELD DPS\nRegarding Weapon Choices: THIS LIST ASSUMES THAT XIANGLING IS RUN WITH BOTH BENNETT AND A SECONDARY BUFFER (i.e. Kazuha/Sucrose)\nWavebreaker's Fin: At [R5], this weapon is equal to or outperforms Staff of Homa, depending on your total team burst cost.\nDragon's Bane: At [R5], this weapon outperforms Primordial Jade Winged-Spear.\nKitain Cross Spear: This weapon's passive reduces the ER threshold of Xiangling greatly. This allows you to distribute ER rolls into otherwise offensive substats and due to this, an [R5] Kitain Cross Spear can outperform Primordial Jade Winged-Spear. Due to lowering ER thresholds so much, the Crimson Witch of Flames (4) artifact set will outperform Emblem of Severed Fate (4).\nLithic Spear: At [R5], and with 2 stacks, this weapon performs equal to Primordial Jade Winged-Spear.\nFavonius Lance: The utility provided from a highly refined Favonius Lance can make it a weapon of choice in a team comp where Xiangling is not triggering the reaction and is instead used as an aura. (i.e. Reverse Melt teams)\nBallad of the Fjords: At [R5] this becomes a very strong weapon in reaction teams, being competitive with Staff of Homa and best in slot for Overvape (Overload + Vaporize) teams. \n\nRegarding Weapons and Artifacts with EM stat:\nDragon's Bane / Kitain Cross Spear / EM substats: In team comps where you can trigger both Vaporize and Overload at the same time (i.e. Raiden National), Elemental Mastery gets more value, pushing these weapons and artifacts ahead in damage.\n\nRegarding Artifact Sets:\nCrimson Witch of Flames (4): This set can be competitive with Emblem of Severed Fate (4) on team comps where Xiangling triggers Overloads in addition to Vaporize (i.e. Raiden National).\nThe Exile (2) Scholar (2): This set can be used as a very low investment support build to enable Reverse Melt team comps where Xiangling is not triggering the reaction and is instead used as an aura and needs a lot of Energy Recharge. Note that it is not recommended to stay on this build as Xiangling can still contribute respectable damage with offensive stats.\n",
    "builds": [
      {
        "name": "OFF-FIELD DPS ✩",
        "artifactMainStats": "Sands - Energy Recharge / ATK% / Elemental Mastery\nGoblet - Pyro DMG \nCirclet - Crit Rate / DMG ",
        "artifactSubStats": "1. Energy Recharge\n2. Crit Rate / DMG\n3. ATK%\n4. Elemental Mastery\n5. Flat ATK",
        "talentPriority": "1. Burst\n2. Skill\n",
        "abilityTips": "A few commonly used teams for pyro Xiangling are:\nNational Team: Xiangling, Xingqiu, Bennett and a Flex unit (Sucrose/Zhongli/Kazuha/Raiden/Chongyun/etc)\nChilde Team: Childe, Xiangling, Bennett and a Flex unit (Sucrose/Zhongli/Venti/Kazuha/etc)\n",
        "weapons": [
          "staff_of_the_scarlet_sands",
          "staff_of_homa",
          "lumidouce_elegy",
          "engulfing_lightning",
          "primordial_jade_winged_spear",
          "skyward_spine",
          "calamity_queller",
          "deathmatch",
          "ballad_of_the_fjords",
          "vortex_vanquisher",
          "wavebreaker_s_fin",
          "dragon_s_bane",
          "missive_windspear",
          "kitain_cross_spear",
          "lithic_spear",
          "favonius_lance",
          "prototype_starglitter"
        ],
        "artifactSets": [
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "emblem_of_severed_fate"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "crimson_witch_of_flames"
            }
          },
          {
            "type": "choose-2",
            "options": [
              {
                "type": "set",
                "id": "crimson_witch_of_flames"
              },
              {
                "type": "set",
                "id": "noblesse_oblige"
              },
              {
                "type": "set",
                "id": "emblem_of_severed_fate"
              },
              {
                "type": "group",
                "id": "18-atk"
              },
              {
                "type": "group",
                "id": "80-em"
              }
            ]
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "noblesse_oblige"
            }
          },
          {
            "type": "double",
            "options": [
              {
                "type": "set",
                "id": "the_exile"
              },
              {
                "type": "set",
                "id": "scholar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "nameId": "bennett",
    "element": "pyro",
    "weapon": "sword",
    "notes": "REGARDING BENNETT'S [C6]:\nBennett's Constellation 6 grants a Pyro Infusion to Swords, Claymores and Polearms and 15% Pyro DMG Bonus to the active character standing in his Elemental Burst. This infusion may limit some potential team comps, however this constellation does more good than it does harm, as the majority of characters and teams it negatively affects usually do not want Bennett slotted in with them anyway.\n\nDPS\nRegarding Weapon Choices:\nThe Black Sword: With an EM sand, this combo has the highest Melt/Vaporize damage. \nIron Sting: This weapon at [R1] with an Elemental Mastery sand turns out to have diminishing returns and isn't as good, but [R2+] Iron Sting is a different question because better buffs.\nAquila Favonia: Assuming you have a high investment build's CR/CD stats, this weapon with EM sands will be better than the two above.\nPrimordial Jade Cutter: With Thundering Fury (4), this weapon is able to out-perform Mistsplitter Reforged due to massive Crit Rate% substat, which allows consistent Vaporize damage despite the lack of Crit Rate/DMG substats, assuming that your EM Sands/Circlet lacks crit rate substats. However, in the rare occasion that your EM pieces manage to roll plenty of Crit subs, Mistsplitter Reforged easily overtakes the Primordial Jade Cutter.\nThe Alley Flash: This weapon has the potential to beat Iron Sting [R5], but this requires the passive to be up, whenever damaged, your passive is disabled for 5 seconds and you could be losing out a lot of damage, especially if you are constantly being damaged.\n\nRegarding Artifact Sets:\nCrimson Witch of Flames (4): Assuming a Melt/Vaporize team, this set is your best set for damage and works best with Chongyun on the same team for consistent Melt.\nThundering Fury (4): This set works best if paired with Electro supports such as Beidou and Fischl/Lisa, as it allows Bennett to accomplish 2 things: \n>1) Rapidly spam E for raw Pyro damage and application, allowing frequent Overload reaction triggers and breaking Electro shields rapidly.\n>2) Generate tons of energy for the entire team. \nThe setup is generally only recommended for those with Beidou [C2/C6].\nThe main-stat artifacts you want to farm for Thundering Fury (4) Bennett varies from the main-stat artifacts you'd normally go for the other builds. Instead of ATK%/EM, Pyro and Crit, you'd instead want to go for EM, Pyro and EM on a Thundering Fury (4) Bennett. As such, this also means weapons that have EM substats such as Iron Sting take priority over other swords. \n\nRecommended amount of ER%: 130-150%. \nWith Thundering Fury (4), you have a lot more leeway when it comes to ER.\n\nSUPPORT AND DAMAGE\nA Support and Damage Bennett completely ignores the need for excess healing potential and is aimed for people who prefer to squeeze out more damage instead. \nOn this build, Bennett is built with offensive stats like ATK%, Pyro Damage, and Crit stats while having a good amount of Energy Recharge to burst off cooldown. \nPrioritize Energy Recharge before offensive stats if you cannot cast your Elemental Burst off cooldown.\n\nSUPPORT\nHeals from his Elemental Burst scale off of HP, while his damage buff from Burst only scales with your base ATK (Character Base ATK stat and Weapon Base ATK stat)\nAlthough Bennett is usually considered a healer, he already heals a lot even without necessarily building for HP%, if you find it unnecessary to build for HP%, you can consider building him as a Burst Support.\n\nRegarding Weapon Choices:\nMistsplitter Reforged, Aquila Favonia, Absolution: These weapons have the highest Base ATK in the game for swords which is why it is ranked quite high. It is assuming you have enough Energy Recharge so you still can burst off cooldown for the maximum ATK buff.\nFreedom-Sworn: In comps where Bennett can reliably trigger reactions (and thus trigger this sword's passive), the buffs provided by this weapon will be stronger than Aquila Favonia.\nThe Alley Flash: This weapon currently has the highest Base ATK for a 4 Star weapon (even more Base ATK than some 5 stars like Skyward Blade).\n\nRegarding Artifact Sets:\nInstructor (4): The best option for teams that benefit more from Elemental Mastery boosts than ATK increases and where you can equip the Noblesse Oblige (4) set on a different character with minimal or no damage reduction.",
    "builds": [
      {
        "name": "DPS",
        "artifactMainStats": "Sands - Elemental Mastery / ATK%*\nGoblet - Pyro DMG \nCirclet - Crit Rate / DMG\n\n**EM sands is generally > ATK%, but substat quality and weapon choice can potentially favour ATK% sands.",
        "artifactSubStats": "1. Crit Rate / DMG\n2. Elemental Mastery \n3. ATK% \n4. Energy Recharge\n\n**Elemental Mastery has lower priority than ATK% when using Iron Sting",
        "talentPriority": "1. Skill\n2. Burst\n3. Normal Attack*\n\n*Normal Attack is only a priority if you have C6 Bennett",
        "abilityTips": "Bennett's EB grants you a pyro status as long as your characters are within his burst AoE (Cryo in specific, since Pyro > Cryo).\n\nFor that, cast EB with Bennett, switch to the character imbued with Cryo and walk on Bennett's Burst field\n\nUpon entering burst field, the Pyro status will continuously imbue you with Pyro, reacting with other elements on you and eventually removing them.\n",
        "weapons": [
          "mistsplitter_reforged",
          "primordial_jade_cutter",
          "freedom_sworn",
          "summit_shaper",
          "aquila_favonia",
          "blackcliff_longsword",
          "the_alley_flash",
          "skyward_blade",
          "the_black_sword",
          "iron_sting",
          "festering_desire",
          "prototype_rancour"
        ],
        "artifactSets": [
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "crimson_witch_of_flames"
            }
          },
          {
            "type": "choose-2",
            "options": [
              {
                "type": "set",
                "id": "crimson_witch_of_flames"
              },
              {
                "type": "set",
                "id": "noblesse_oblige"
              },
              {
                "type": "group",
                "id": "18-atk"
              },
              {
                "type": "group",
                "id": "80-em"
              }
            ]
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "thundering_fury"
            }
          }
        ]
      },
      {
        "name": "SUPPORT AND DAMAGE\n✩",
        "artifactMainStats": "Sands - ATK% / Energy Recharge\nGoblet - Pyro DMG\nCirclet - Crit Rate / DMG",
        "artifactSubStats": "1. Crit Rate / DMG\n2. ATK%\n3. Energy Recharge\n4. Elemental Mastery\n\n**Prioritize Energy Recharge first if you can't burst off cooldown",
        "talentPriority": "1. Burst\n2. Skill",
        "abilityTips": "",
        "weapons": [
          "mistsplitter_reforged",
          "aquila_favonia",
          "skyward_blade",
          "freedom_sworn",
          "the_alley_flash",
          "finale_of_the_deep",
          "sapwood_blade",
          "blackcliff_longsword",
          "prototype_rancour",
          "festering_desire"
        ],
        "artifactSets": [
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "noblesse_oblige"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "emblem_of_severed_fate"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "crimson_witch_of_flames"
            }
          },
          {
            "type": "choose-2",
            "options": [
              {
                "type": "set",
                "id": "crimson_witch_of_flames"
              },
              {
                "type": "set",
                "id": "noblesse_oblige"
              },
              {
                "type": "set",
                "id": "emblem_of_severed_fate"
              },
              {
                "type": "group",
                "id": "18-atk"
              },
              {
                "type": "group",
                "id": "80-em"
              }
            ]
          }
        ]
      },
      {
        "name": "SUPPORT\n✩",
        "artifactMainStats": "Sands - Energy Recharge / HP%\nGoblet - HP%\nCirclet - Healing Bonus% / HP%\n\n**Main stats aren't as important. Stack Energy Recharge for comfortable Elemental Burst uptime instead.",
        "artifactSubStats": "1. Energy Recharge\n2. HP%\n3. Flat HP",
        "talentPriority": "1. Burst\n\n",
        "abilityTips": "",
        "weapons": [
          "mistsplitter_reforged",
          "aquila_favonia",
          "absolution",
          "freedom_sworn",
          "the_alley_flash",
          "skyward_blade",
          "sapwood_blade",
          "prototype_rancour",
          "blackcliff_longsword",
          "festering_desire",
          "favonius_sword",
          "sacrificial_sword"
        ],
        "artifactSets": [
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "noblesse_oblige"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "instructor"
            }
          },
          {
            "type": "double",
            "options": [
              {
                "type": "group",
                "id": "20-er"
              },
              {
                "type": "group",
                "id": "20-er"
              }
            ]
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "tenacity_of_the_millelith"
            }
          }
        ]
      }
    ]
  },
  {
    "nameId": "xinyan",
    "element": "pyro",
    "weapon": "claymore",
    "notes": "PHYSICAL DPS\nThis build focuses primarily on her Physical Damage as an On-Field DPS. At [C2], she can build a 1:3 Crit Rate:Crit DMG ratio, instead of the usual 1:2 Crit Rate:Crit DMG ratio.\n\nRegarding Weapon Choices:\nSerpent Spine: At [R5], this weapon performs better than Skyward Pride.\nThe Unforged: This ranking is based on unshielded performance, while shielded this weapon performs better than low refinement Serpent Spine.\nPrototype Archaic: At [R5], this weapon performs better than Snow-Tombed Starsilver [R5].\n\nPYRO DPS\nIt is required to run this build with [C6] Bennett. However, it is not recommended to [C6] Bennett solely for Xinyan.\n\nRegarding Weapon Choices:\nSerpent Spine: It is worth noting that an [R5] Serpent Spine can outperform Redhorn Stonethresher [R1] with good Serpent Spine stack management.\nLithic Blade: This ranking assumes 2 stacks.\nBeacon of the Reed Sea: Weapon ranking assumes one stack.\n\nRegarding Artifact Sets:\nLavawalker (4): Xinyan can maintain a high Pyro aura uptime on an enemy, making this her best set.\n\nSUPPORT\nThis section is dedicated to using Xinyan as a shielder for her team.\n\nRegarding Artifact Sets:\nTenacity of the Millelith (4):  If you can maximize the uptime of Xinyan's Level 3 shield, she can provide a constant 30% Shield Strength and 20% ATK boost to the team (as long as the pulses hit an enemy). This means that Sacrificial Greatsword and Xinyan's [C2] are crucial to making this set shine on her. This set isn't as recommended for her if you have neither of the two.\n\nShield uptime is also crucial to maximizing her Physical/Shield Support capabilities. If you have neither Sacrificial Greatsword nor at least [C2] (but ideally [C4]) on Xinyan, you may want to build her as a DPS instead of Physical/Shield Support.\n\nGenerally not recommended for Pyro Applications, as the pulses only happen at Shield Level 3, and are not very efficient at breaking Cryo shields.\n\nCredit to the In-progress KQM Guide draft",
    "builds": [
      {
        "name": "PHYSICAL DPS ✩",
        "artifactMainStats": "Sands - ATK% / Energy Recharge\nGoblet - Physical DMG \nCirclet - Crit Rate / DMG ",
        "artifactSubStats": "1. Crit Rate / DMG \n2. ATK%\n3. Energy Recharge\n4. DEF%",
        "talentPriority": "1. Normal Attack\n>= Burst\n>= Skill",
        "abilityTips": "",
        "weapons": [
          "redhorn_stonethresher",
          "skyward_pride",
          "serpent_spine",
          "the_unforged",
          "song_of_broken_pines",
          "wolf_s_gravestone",
          "luxurious_sea_lord",
          "snow_tombed_starsilver",
          "prototype_archaic"
        ],
        "artifactSets": [
          {
            "type": "double",
            "options": [
              {
                "type": "set",
                "id": "bloodstained_chivalry"
              },
              {
                "type": "set",
                "id": "pale_flame"
              }
            ]
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "pale_flame"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "emblem_of_severed_fate"
            }
          },
          {
            "type": "choose-2",
            "options": [
              {
                "type": "set",
                "id": "noblesse_oblige"
              },
              {
                "type": "set",
                "id": "husk_of_opulent_dreams"
              },
              {
                "type": "group",
                "id": "18-atk"
              }
            ]
          }
        ]
      },
      {
        "name": "PYRO DPS",
        "artifactMainStats": "Sands - ATK%\nGoblet - Pyro DMG\nCirclet - Crit Rate / Crit DMG",
        "artifactSubStats": "1. Crit Rate / DMG \n2. ATK%\n3. Energy Recharge\n4. DEF%",
        "talentPriority": "1. Normal Attack\n>= Skill\n>= Burst",
        "abilityTips": "",
        "weapons": [
          "redhorn_stonethresher",
          "serpent_spine",
          "beacon_of_the_reed_sea",
          "wolf_s_gravestone",
          "the_unforged",
          "skyward_pride",
          "song_of_broken_pines",
          "blackcliff_slasher",
          "lithic_blade",
          "luxurious_sea_lord",
          "prototype_archaic"
        ],
        "artifactSets": [
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "lavawalker"
            }
          },
          {
            "type": "double",
            "options": [
              {
                "type": "set",
                "id": "crimson_witch_of_flames"
              },
              {
                "type": "set",
                "id": "emblem_of_severed_fate"
              }
            ]
          },
          {
            "type": "double",
            "options": [
              {
                "type": "set",
                "id": "emblem_of_severed_fate"
              },
              {
                "type": "group",
                "id": "18-atk"
              }
            ]
          },
          {
            "type": "choose-2",
            "options": [
              {
                "type": "set",
                "id": "crimson_witch_of_flames"
              },
              {
                "type": "set",
                "id": "noblesse_oblige"
              },
              {
                "type": "group",
                "id": "18-atk"
              }
            ]
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "crimson_witch_of_flames"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "retracing_bolide"
            }
          },
          {
            "type": "double",
            "options": [
              {
                "type": "set",
                "id": "crimson_witch_of_flames"
              },
              {
                "type": "set",
                "id": "husk_of_opulent_dreams"
              }
            ]
          }
        ]
      },
      {
        "name": "SUPPORT",
        "artifactMainStats": "Sands - DEF% /  Energy Recharge\nGoblet - DEF%\nCirclet - DEF%",
        "artifactSubStats": "1. Energy Recharge\n2. ATK% / DEF%\n3. Crit Rate / DMG",
        "talentPriority": "1. Skill",
        "abilityTips": "Xinyan's skill grants you a Pyro status upon contact with shield. No matter how many times you switch your characters, it'll still apply Pyro every instance you switch with shield. This allows you to cleanse most elemental statuses that has been applied to you.\n\nIf the status doesn't get cleansed, switch on that character one more time with the shield. Some elements, such as Hydro, are not cleansed very efficiently.",
        "weapons": [
          "sacrificial_greatsword",
          "whiteblind",
          "favonius_greatsword"
        ],
        "artifactSets": [
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "tenacity_of_the_millelith"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "husk_of_opulent_dreams"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "husk_of_opulent_dreams"
            }
          }
        ]
      }
    ]
  },
  {
    "nameId": "yanfei",
    "element": "pyro",
    "weapon": "catalyst",
    "notes": "DPS\nYanfei can have trouble trying to set up for her reaction DPS. Vaporize is generally the more consistent option and you need Xingqiu to make this work best. When running a Vaporize team with Xingqiu, 3 normal attacks into a charged attack (N1>N2>N3>C) is the safest and most reliable way to Vaporize your charged attacks. Make sure you're applying Hydro first before starting combos.\n\nRegarding Weapon Choices:\nLost Prayer to the Sacred Winds / Kagura's Verity: Bennett buff / Thrilling Tales of Dragon Slayer's buff + Noblesse Oblige (4) will push Lost Prayer to the Sacred Winds and Kagura's Verity ahead of Skyward Atlas and Memory of Dust.\nThe Widsith: Note that with strong attack buffs like Bennett's Burst, an [R5] Widsith can outperform most [R1] 5-star weapons, with the exception of Lost Prayer to the Sacred Winds.\nDodoco Tales: On equal refinements, The Widsith is better than Dodoco Tales, but assuming it's [R5] Dodoco Tales vs [R1]-[R3] The Widsith, [R5] Dodoco Tales is better. Note that Bennett buff / Thrilling Tales of Dragon Slayer's buff + Noblesse Oblige (4) buff may push Widsith and Solar Pearl above Dodoco Tales, even at low refinements.\n\nRegarding Artifact Sets:\nShimenawa's Reminiscence (4): Yanfei will rarely have her burst up due to the 15 energy cost on the 4-piece effect, however she can instead maintain the 4-piece DMG buff over a longer duration, making this set a good alternative to the other options. Note that this set loses out on some value at higher constellations, as she can't get her [C4] effects without casting Burst.\nGilded Dreams (4): Actually her BiS if used in a full Elemental Mastery build with a Overload team.\nRetracing Bolide (4): Running Yanfei with a shield character also allows you to make use of a full Retracing Bolide (4) as a placeholder until you're able to find a good Crimson Witch of Flames (4). \n\nRegarding Artifact Substats Priority: \nEnergy Recharge is prioritized over Elemental Mastery here since she has an 80 energy burst cost while her skill is also not very efficient at generating particles for getting it back. A major source of your energy will be coming from enemies as well as potential Pyro batteries like Bennett, so be sure to have her pick the particles up as off-field characters only get 0.6x the value of the particles.\n\nSHIELD SUPPORT\nThis section is dedicated to a playstyle where Yanfei is utilised as a primary shielder through her 4th Constellation. Due to the requirement of having to burst off cooldown, this build has high energy requirements.",
    "builds": [
      {
        "name": "DPS\n✩",
        "artifactMainStats": "Sands - ATK% / Elemental Mastery\nGoblet - Pyro DMG\nCirclet - Crit Rate / DMG",
        "artifactSubStats": "1. Crit Rate / DMG \n2. ATK%\n3. Energy Recharge\n4. Elemental Mastery\n5. Flat ATK",
        "talentPriority": "1. Normal Attack\n2. Burst\n3. Skill",
        "abilityTips": "Yanfei's Ascension 4 Talent does a second hit after a Crit Charge Attack. This scales 80% of your ATK and can trigger reactions as well due to having a separate internal cooldown on its Pyro application. \n",
        "weapons": [
          "skyward_atlas",
          "memory_of_dust",
          "lost_prayer_to_the_sacred_winds",
          "kagura_s_verity",
          "the_widsith",
          "solar_pearl",
          "blackcliff_agate",
          "mappa_mare"
        ],
        "artifactSets": [
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "crimson_witch_of_flames"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "gilded_dreams"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "wanderer_s_troupe"
            }
          },
          {
            "type": "choose-2",
            "options": [
              {
                "type": "set",
                "id": "crimson_witch_of_flames"
              },
              {
                "type": "group",
                "id": "18-atk"
              },
              {
                "type": "group",
                "id": "80-em"
              }
            ]
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "shimenawa_s_reminiscence"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "retracing_bolide"
            }
          }
        ]
      },
      {
        "name": "SHIELD SUPPORT \n[C4+ REQUIRED]",
        "artifactMainStats": "Sands - Energy Recharge / HP% \nGoblet - HP%\nCirclet - HP% ",
        "artifactSubStats": "1. Energy Recharge\n2. HP% \n3. Flat HP",
        "talentPriority": "*Yanfei's talent levels provide nothing for this role and it is not recommended to level them.",
        "abilityTips": "",
        "weapons": [
          "prototype_amber",
          "favonius_codex",
          "thrilling_tales_of_dragon_slayers"
        ],
        "artifactSets": [
          {
            "type": "double",
            "options": [
              {
                "type": "set",
                "id": "tenacity_of_the_millelith"
              },
              {
                "type": "set",
                "id": "emblem_of_severed_fate"
              }
            ]
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "noblesse_oblige"
            }
          }
        ]
      }
    ]
  },
  {
    "nameId": "thoma",
    "element": "pyro",
    "weapon": "polearm",
    "notes": "BURGEON\nThis section focuses on using Thoma as a trigger for Burgeon. Thoma's slow rate of Pyro application paired with frequent Fiery Collapse triggers make him a great option for Burgeon. Additionally, he provides defensive utility in the form of shields. \n\nRegarding Weapon Choices:\nKitain Cross Spear: High refinement is recommended to further reduce Thoma's Energy Recharge requirements\nDragon's Bane: Becomes a more reasonable option when you have Thoma's [C4].\nFavonius Lance: If using this weapon, try to build some Crit Rate so Thoma can trigger the passive. \nRightful Reward: In teams where you are able to heal Thoma consistently (overhealing also counts), Rightful Reward can be a reasonable option due to the amount of energy generation. \n\nRegarding Artifact Mainstats:\nWhile building as much Elemental Mastery (with enough Energy Recharge) as possible is optimal for damage, you may use some HP% mainstats if you desire a stronger shield. This can be relevant if running teams without other forms of defensive utility outside of Thoma's shields, and it's worth keeping in mind that Burgeon deals self-damage. \n\nRegarding Talent Priority: \nThoma's talent levels do not contribute towards his Burgeon damage, so leveling them is optional in this respect. However, you may still wish to level them for stronger shielding. \n\nSUPPORT\nThis build focuses on maximising Thoma's potential as a shield support. \n\nRegarding Weapon Choices:\nFavonius Lance: This is generally Thoma's best weapon for a shield support build, make sure to build some Crit Rate if using it so that you can trigger the passive. \nRightful Reward: In teams where you would typically use Thoma as a shield support, it is difficult or even unfeasible to trigger this weapon passive. If you are able to trigger the passive consistently then it becomes a good option due to the HP% stat along with energy generation. \n\nRegarding Artifact sets:\nInstructor (4): This set ideally works best in heavily reaction focused teams like Hu Tao Vape where the Elemental Mastery is utilized well. But this comes at the cost of making Thoma even more difficult to build, since you have fewer potential substat rolls using 4 star artifacts, and therefore less of a chance of hitting his Energy Recharge and HP goals.",
    "builds": [
      {
        "name": "BURGEON\n✩",
        "artifactMainStats": "Sands - Energy Recharge / Elemental Mastery\nGoblet - Elemental Mastery\nCirclet - Elemental Mastery\n\nCheck Notes",
        "artifactSubStats": "1. Energy Recharge until requirement is met\n2. Elemental Mastery\n3. HP%\n4. Flat HP\n5. Crit Rate*\n\n*Crit Rate is only useful if using Favonius Lance",
        "talentPriority": "1. Skill\n2. Burst\n\nCheck Notes",
        "abilityTips": "",
        "weapons": [
          "kitain_cross_spear",
          "favonius_lance",
          "dragon_s_bane",
          "moonpiercer",
          "black_tassel",
          "rightful_reward"
        ],
        "artifactSets": [
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "flower_of_paradise_lost"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "gilded_dreams"
            }
          },
          {
            "type": "choose-2",
            "options": [
              {
                "type": "set",
                "id": "emblem_of_severed_fate"
              },
              {
                "type": "group",
                "id": "80-em"
              },
              {
                "type": "group",
                "id": "80-em"
              }
            ]
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "crimson_witch_of_flames"
            }
          }
        ]
      },
      {
        "name": "SUPPORT\n",
        "artifactMainStats": "Sands - Energy Recharge / HP%\nGoblet - HP%\nCirclet - HP% / Crit Rate*\n\n*Crit Rate circlet is a good option if using Favonius Lance ",
        "artifactSubStats": "1. Energy Recharge until requirement is met\n2. HP%\n3. Crit Rate*\n4. Flat HP\n\n*Crit Rate is a desired substat when using Favonius Lance",
        "talentPriority": "1. Skill\n2. Burst",
        "abilityTips": "",
        "weapons": [
          "favonius_lance",
          "engulfing_lightning",
          "kitain_cross_spear",
          "prototype_starglitter",
          "skyward_spine",
          "black_tassel",
          "rightful_reward"
        ],
        "artifactSets": [
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "noblesse_oblige"
            }
          },
          {
            "type": "choose-2",
            "options": [
              {
                "type": "set",
                "id": "tenacity_of_the_millelith"
              },
              {
                "type": "set",
                "id": "emblem_of_severed_fate"
              },
              {
                "type": "set",
                "id": "vourukasha_s_glow"
              }
            ]
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "instructor"
            }
          }
        ]
      }
    ]
  },
  {
    "nameId": "chevreuse",
    "element": "pyro",
    "weapon": "polearm",
    "notes": "SUPPORT\nChevreuse provides various character buffs and enemy debuffs when party members trigger Overload. The main function of her kit, which is the Pyro and Electro RES reduction only activates if the entire team consists of Pyro and Electro characters. Her buff caps at 40,000 HP after which she no longer needs to build HP.\n\nChevreuse does not always need to use her Burst, as such Energy Recharge is not needed if she chooses not to use her Burst.\n\nRegarding Weapon Choices:\nFavonius Lance: Loses some value if Chevreuse does not Burst. Still valuable for team Energy.\n\nRegarding Artifact Sets:\nNoblesse Oblige (4): Only use this set if you use Chevreuse's Burst every rotation.\n\nRegarding Main Stats Priority:\nHealing Bonus: Only use this if Chevreuse has already reached 40,000 HP.\n\nRegarding Sub Stats Priority:\nCrit Rate: Only if using Favonius Lance.\n\nSUPPORT AND DAMAGE\nSupport and Damage Chevreuse aims to deal high amounts of damage with her Burst and Skill while maintaining her supportive abilities in Pyro Electro teams. This playstyle is made viable after C4 because of her ability to use multiple Skills per rotation.\n\nRegarding Weapon Choices:\nFavonius Lance: Though ranked lower for her own damage, Favonius' team Energy regen can make it a desirable option even if it means having lower Chevreuse damage.",
    "builds": [
      {
        "name": "SUPPORT\n✩",
        "artifactMainStats": "Sands - HP% / Energy Recharge\nGoblet - HP%\nCirclet - HP% / Healing Bonus",
        "artifactSubStats": "1. Energy Recharge*\n2. HP%\n3. Crit Rate**\n4. Flat HP\n5. Elemental Mastery\n\n*Only if needed, prioritize until meeting ER requirements.",
        "talentPriority": "1. Skill\n2. Burst",
        "abilityTips": "",
        "weapons": [
          "favonius_lance",
          "dialogues_of_the_desert_sages",
          "black_tassel",
          "rightful_reward",
          "prototype_starglitter"
        ],
        "artifactSets": [
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "noblesse_oblige"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "ocean_hued_clam"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "song_of_days_past"
            }
          },
          {
            "type": "double",
            "options": [
              {
                "type": "set",
                "id": "emblem_of_severed_fate"
              },
              {
                "type": "group",
                "id": "20-hp"
              }
            ]
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "maiden_beloved"
            }
          }
        ]
      },
      {
        "name": "SUPPORT AND DAMAGE",
        "artifactMainStats": "Sands - ATK% / Energy Recharge\nGoblet - Pyro DMG%\nCirclet - Crit Rate / DMG",
        "artifactSubStats": "1. Energy Recharge*\n2. Crit Rate / DMG\n3. ATK%\n4. HP%\n5. Elemental Mastery\n\n*Prioritize Energy Recharge until you meet the requirement.",
        "talentPriority": "1. Burst\n~= Skill",
        "abilityTips": "",
        "weapons": [
          "engulfing_lightning",
          "staff_of_homa",
          "staff_of_the_scarlet_sands",
          "lumidouce_elegy",
          "calamity_queller",
          "skyward_spine",
          "primordial_jade_winged_spear",
          "vortex_vanquisher",
          "deathmatch",
          "ballad_of_the_fjords",
          "missive_windspear",
          "favonius_lance"
        ],
        "artifactSets": [
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "noblesse_oblige"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "emblem_of_severed_fate"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "golden_troupe"
            }
          },
          {
            "type": "choose-2",
            "options": [
              {
                "type": "set",
                "id": "crimson_witch_of_flames"
              },
              {
                "type": "set",
                "id": "noblesse_oblige"
              },
              {
                "type": "set",
                "id": "emblem_of_severed_fate"
              },
              {
                "type": "set",
                "id": "golden_troupe"
              },
              {
                "type": "group",
                "id": "18-atk"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "nameId": "gaming",
    "element": "pyro",
    "weapon": "claymore",
    "notes": "VAPORIZE DPS\nGaming can reliably Vaporize most if not all of his Skill-enhanced Plunge Attacks. This allows him to deal high amounts of damage during his Burst's Wushou state.\n\nRegarding Weapon Choices:\nSerpent Spine: The value of Serpent Spine decreases if it is lower refinements and Gaming cannot maintain stacks with it (i.e. without a shielder).\nRainslasher: At [R5] this weapon is about equal to Redhorn Stonethresher.\nEnergy Recharge Weapons: These weapons gain value the higher Gaming's Energy Requirements are.\n\nRegarding Artifact Choices:\nMarechaussee Hunter (4): This set performs worse if Gaming is [C6] and using a weapon with a Crit Rate secondary stat.\n\nRegarding Talent Priority:\nNormal Attack: Prioritize this over the Burst talent if using [C6] Bennett and/or Xianyun.",
    "builds": [
      {
        "name": "VAPORIZE DPS\n✩",
        "artifactMainStats": "Sands - Elemental Mastery / ATK% / Energy Recharge\nGoblet - Pyro DMG\nCirclet - Crit Rate / DMG",
        "artifactSubStats": "1. Energy Recharge\n2. Crit Rate / DMG\n3. Elemental Mastery\n4. ATK%\n5. Flat ATK",
        "talentPriority": "1. Skill\n2. Burst\n~= Normal Attack*",
        "abilityTips": "",
        "weapons": [
          "serpent_spine",
          "redhorn_stonethresher",
          "beacon_of_the_reed_sea",
          "wolf_s_gravestone",
          "rainslasher",
          "song_of_broken_pines",
          "the_unforged",
          "skyward_pride",
          "mailed_flower",
          "tidal_shadow",
          "ultimate_overlord_s_mega_magic_sword"
        ],
        "artifactSets": [
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "crimson_witch_of_flames"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "marechaussee_hunter"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "gilded_dreams"
            }
          },
          {
            "type": "choose-2",
            "options": [
              {
                "type": "set",
                "id": "crimson_witch_of_flames"
              },
              {
                "type": "set",
                "id": "emblem_of_severed_fate"
              },
              {
                "type": "group",
                "id": "18-atk"
              },
              {
                "type": "group",
                "id": "80-em"
              }
            ]
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "vermillion_hereafter"
            }
          }
        ]
      }
    ]
  },
  {
    "nameId": "diluc",
    "element": "pyro",
    "weapon": "claymore",
    "notes": "DPS\nRegarding Weapon Choices:\nThese placements assume strong ATK buffs such as Bennett, as Diluc is commonly played with them present in his party.\nRedhorn Stonethresher: This weapon falls off considerably when strong ATK buffs are not present, still being a top tier option but similar in power to the weapons ranked directly below.\nBeacon of the Reed Sea: This weapon ranking assumes one stack, at two stacks it is Diluc's best weapon. \nSerpent Spine: This placement assumes you can maintain high stacks of the weapon effect. If you find yourself being hit often, a low-stacked Serpent Spine will find itself falling significantly in potential. This weapon scales well with refinements, having the potential to be Diluc's best weapon.\nThe Unforged: This weapon matches Wolf's Gravestone while shielded. While unshielded, it loses some potency but is still a strong weapon tied with a low refined Rainslasher.\nRainslasher: This weapon should only be used in teams where Diluc is consistently Vaporizing his attacks. This weapon scales well with refinements, potentially surpassing Wolf's Gravestone at [R5].\n\nRegarding Artifact Sets:\nCrimson Witch of Flames (4): Generally the best go to set for Diluc due to how easily Diluc can stack the Pyro Damage effect, while his burst imbues his Normal/Charged Attacks with Pyro.\nGladiator's Finale (4):  For those who are still reluctant on farming for Crimson Witch of Flames (4) (Pre-AR 45), this will still provide a fairly decent increase in DPS as a large portion of his damage is tied into his Normal Attack talent.\n\nRegarding Main Stats Priority:\nIf Diluc is run alongside Xingqiu where he can trigger Vaporize very often, he can run EM sands as an alternative to ATK sands as EM boosts Diluc's reaction damage significantly.",
    "builds": [
      {
        "name": "DPS\n ✩",
        "artifactMainStats": "Sands - Elemental Mastery* / ATK%\nGoblet - Pyro DMG\nCirclet - Crit Rate / DMG",
        "artifactSubStats": "1. Crit Rate / DMG \n2. ATK%\n3. Elemental Mastery* (higher prio in Vaporize/Melt comps)\n4. Energy Recharge",
        "talentPriority": "1. Normal Attack\n2. Skill\n3. Burst\n\n**Worth noting that Diluc's constellations boost his Elemental Skill's damage, so talent prioritization can vary from player to player",
        "abilityTips": "Diluc has a number of combos he can do during his uptime. \nN = Normal Attack, E = Elemental Skill, Q = Elemental Burst (N2 would equal 2 Normal Attacks)\nHis most common combo is Q N2 E N2 E N2 E. This fits perfectly into the buff window of his teams.\n\nFor high upfront damage, use Q E N1 E N1 E N1. This falls off significantly if the enemy isn't killed within this window.\n\nA full rotation combo can look similar to Q N2 E N2 E N2 E N4 N3 E N1 E E. An example video can be found here.\n\n",
        "weapons": [
          "redhorn_stonethresher",
          "beacon_of_the_reed_sea",
          "serpent_spine",
          "wolf_s_gravestone",
          "the_unforged",
          "rainslasher",
          "mailed_flower",
          "skyward_pride",
          "song_of_broken_pines",
          "blackcliff_slasher",
          "luxurious_sea_lord",
          "prototype_archaic"
        ],
        "artifactSets": [
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "crimson_witch_of_flames"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "gilded_dreams"
            }
          },
          {
            "type": "choose-2",
            "options": [
              {
                "type": "set",
                "id": "crimson_witch_of_flames"
              },
              {
                "type": "group",
                "id": "18-atk"
              },
              {
                "type": "group",
                "id": "80-em"
              }
            ]
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "gladiator_s_finale"
            }
          }
        ]
      }
    ]
  },
  {
    "nameId": "klee",
    "element": "pyro",
    "weapon": "catalyst",
    "notes": "DPS\nBeing extremely squishy and prone to interruptions, Klee requires great positioning. Check out the in-depth guide to learn in-depth about animation cancelling which may help with this issue.\n\nRegarding Weapon Choice:\nMemory of Dust: This weapon's rankings assume that Klee is played without a shielder, as forcing a shielder for the additional 20 ATK% leads to a damage loss compared to her best teams, even if said shielder is Zhongli. If in a situation where Klee is played with a shielder anyway, this weapon would be on par with Skyward Atlas.\nSolar Pearl: When using Solar Pearl, it is recommended to animation cancel a Normal Attack into an Elemental Skill and cancel that into her Elemental Burst at the start of her field time.\n\nRegarding Artifact Sets:\nLavawalker (4): Klee's kit makes it harder to utilize Vaporize and Melt the same way another Pyro carry would, but her constant Pyro application makes Lavawalker (4) a viable set. See KleefulFrame's great number breakdown here.\nCrimson Witch of Flames (4): This set is only recommended in a team where Klee is able to trigger Vaporize consistently.\nWanderer's Troupe (4): This set increases the Charged Attack by another 35% Damage Bonus. It can serve as a decent DPS choice but due to how clunky Klee's attack animations are, it's hard to put this in actual practice as it requires you to dodge more and consume more stamina, not to mention how the DPS gets caught up by the other builds mentioned above.\nMarechaussee Hunter (4): This becomes Klee's best set in teams that are running Furina. The DPS increase compared to split set options is so significant that it's advisable to opt for Furina even in situations where fanfare stack generation is sub-optimal, particularly with single-target healers like Bennett.",
    "builds": [
      {
        "name": "DPS\n ✩",
        "artifactMainStats": "Sands - ATK% \nGoblet - Pyro DMG\nCirclet - Crit Rate / DMG",
        "artifactSubStats": "1. Crit Rate / DMG \n2. ATK%\n3. Elemental Mastery\n4. Energy Recharge\n5. Flat ATK",
        "talentPriority": "1. Normal Attack\n2. Burst\n3. Skill\n\n",
        "abilityTips": "Klee has access to a number of animation cancels that allow her to deal damage with her talents faster than normal. \n\nHer N1 can be canceled through holding a directional key while clicking attack. This can be chained over and over again to produce a \"machine gun\" effect.\n\nHer optimal combos include N1C and N2C. N1C is higher DPS but eats stamina faster, while N2C has more consistency in keeping enemies stunned and gives a higher chance of obtaining her A1 passive onto the following CA.",
        "weapons": [
          "lost_prayer_to_the_sacred_winds",
          "kagura_s_verity",
          "the_widsith",
          "skyward_atlas",
          "tulaytullah_s_remembrance",
          "memory_of_dust",
          "solar_pearl",
          "blackcliff_agate",
          "mappa_mare",
          "magic_guide",
          "apprentice_s_notes"
        ],
        "artifactSets": [
          {
            "type": "double",
            "options": [
              {
                "type": "set",
                "id": "crimson_witch_of_flames"
              },
              {
                "type": "group",
                "id": "18-atk"
              }
            ]
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "lavawalker"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "crimson_witch_of_flames"
            }
          },
          {
            "type": "double",
            "options": [
              {
                "type": "set",
                "id": "crimson_witch_of_flames"
              },
              {
                "type": "set",
                "id": "noblesse_oblige"
              }
            ]
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "wanderer_s_troupe"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "marechaussee_hunter"
            }
          }
        ]
      }
    ]
  },
  {
    "nameId": "hu_tao",
    "element": "pyro",
    "weapon": "polearm",
    "notes": "DPS\nHu Tao is most effective when used with Xingqiu to proc Vaporize/Freeze Melt reactions. Freeze Melt refers to freezing enemies for Melt set up, since unlike Diluc or Klee, Hu Tao doesn't shatter frozen enemies.\n\nRegarding Weapon Choices:\nStaff of the Scarlet Sands: When using this weapon, Gilded Dreams (4) becomes competitive with Crimson Witch of Flames (4) for being Hu Tao's best artifact set.\nBallad of the Fjords and Lithic Spear (4 Stacks): At [R5], these weapons are better than Staff of the Scarlet Sands.\nPrimordial Jade Winged-Spear: Is better than the [R1] variants of Dragon's Bane and Deathmatch with ideal stacking. While this is a very strong weapon when fully stacked, maintaining the stacks on Hu Tao isn't ideal in realistic situations making the weapon less consistent than other options.\nDeathmatch: This weapon is better than Dragon's Bane when you're not doing Vaporize.\nBlackcliff Pole: Despite seeming quite good due to the Crit DMG substat, Blackcliff Pole at 1 stack performs only slightly better than an [R5] White Tassel in practice as it is difficult to maintain stacks consistently. It is not recommended to buy this weapon specifically for Hu Tao and should only be used if you already have one.\nWhite Tassel: This weapon prefers an N2C combo over an N1C combo.\n\nRegarding Artifact Sets: \nShimenawa's Reminiscence (4): Provides higher Normal and Charged Attack damage than Crimson Witch of Flames (4), but reduces Elemental Burst damage, impacting overall AoE damage. Additionally, if you're unable to burst, it might lead to survivability issues unless you're running a healer.\nGilded Dreams (4): At 3 EM stacks, this artifact set is equal to Crimson Witch of Flames (4) in teams where you are not getting EM from other sources (e.g team or weapon). \nRetracing Bolide (4) and Crimson Witch of Flames (2) / Tenacity of the Millelith (2) + 80 EM set (2): All these options are almost on equal footing because both of the sets have an equal overall damage output assuming you have 100% shield uptime when using Retracing Bolide (4). The difference is, you want to use +80 EM set (2) / +20% HP (2) / Crimson's Witch of Flame (2) when focusing on Nuking and better consistency, while Retracing Bolide (4) is for overall higher NA/CA damage at the expense of lower burst damage, although inconsistent if you cannot keep your shield permanently.\nMarechaussee Hunter (4) This is Hu Tao's best set when you can reliably get 3 stacks, which typically requires running Furina. \n\nRegarding Artifact Substats Priority: \nSince Hu Tao is able to trigger Vaporize on most of her damage output, Elemental Mastery is quite valuable on her. If you have less than 100EM total (including from Sucrose EM share, Instructor (4), etc) EM substats take priority over Crit Rate / DMG.",
    "builds": [
      {
        "name": "DPS\n ✩",
        "artifactMainStats": "Sands - HP% / Elemental Mastery\nGoblet - Pyro DMG\nCirclet - Crit Rate / DMG",
        "artifactSubStats": "1. Crit Rate / DMG\n2. Elemental Mastery*\n3. HP%\n4. ATK%\n5. Energy Recharge\n",
        "talentPriority": "1. Normal Attack\n2. Skill\n3. Burst",
        "abilityTips": "When ending Hu Tao's combos with an Elemental Burst, if you do not jump/dash cancel the last charged attack, the Elemental Burst will still benefit from Hu Tao's Elemental Skill.\n\nIt is recommended to use cancels when performing your Hu Tao combos as to maximize damage.\nN2CJ for [C0] and N2CD for [C1].\nN3CJ/N3CD can be used to conserve stamina at the cost of damage.\n\n*N = Normal Attack, C = Charged Attack, J = Jump, D = Dash",
        "weapons": [
          "staff_of_homa",
          "staff_of_the_scarlet_sands",
          "ballad_of_the_fjords",
          "lumidouce_elegy",
          "dragon_s_bane",
          "deathmatch",
          "primordial_jade_winged_spear",
          "missive_windspear",
          "white_tassel",
          "kitain_cross_spear",
          "rightful_reward"
        ],
        "artifactSets": [
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "crimson_witch_of_flames"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "shimenawa_s_reminiscence"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "gilded_dreams"
            }
          },
          {
            "type": "choose-2",
            "options": [
              {
                "type": "set",
                "id": "crimson_witch_of_flames"
              },
              {
                "type": "group",
                "id": "20-hp"
              },
              {
                "type": "group",
                "id": "80-em"
              }
            ]
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "retracing_bolide"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "marechaussee_hunter"
            }
          }
        ]
      }
    ]
  },
  {
    "nameId": "yoimiya",
    "element": "pyro",
    "weapon": "bow",
    "notes": "DPS\nYoimiya is an on-field Pyro damage dealer who focuses on Normal Attacks. Weapon rankings in this guide assume a Vaporize team of Yoimiya, Zhongli, Yelan/Xingqiu, Yun Jin/Bennett (averaged rankings). If your team differs significantly from the assumptions, you can refer to the Genshin Optimizer. \n\nRegarding Weapon Choices: \nAqua Simulacra: This weapon requires Yoimiya to be very close to enemies (~8m). As such, this weapon is recommended only with strong resistance to interruption. \nRust: Scales well with refinements, At [R5] this weapon outperforms several (5✩) options with the exceptions of Thundering Pulse and Aqua Simulacra. At [R4+] it ouperforms Slingshot [R5]\nPolar Star: Weapon rankings assume 2-3 stacks. You can perform a quick charged-shot prior to using Skill. \nAmos' Bow: Weapon rankings are assuming 3 stacks. At 2 stacks it performs worse than Slingshot [R5].\n\n\nRegarding Artifacts:  \nShimenawa's Reminiscence (4): This set is her Best in Slot in the vast majority of situations even when considering inconsistent Burst usage (once every 3-4 rotations).\nCrimson Witch of Flames (4): Usable in Vaporize teams and can be her Best in Slot for teams where she procs Vaporize and Overload (such as teams with a Fischl flex or Fischl + Beidou taser core)\nGilded Dreams (4): This artifact set is significantly worse in teams where Yoimiya is not triggering Elemental Reactions.\nEchoes of an Offering (4): This set has a lot of caveats that generally warrant it being a subpar choice. Its effects proccing is tied to your connection to the servers, so if your ping is above 100 and/or you have an unstable connection (fluctuations), you should avoid this set. Additionally, the RNG nature of its procs makes it unreliable in Vaporize teams as you can't guarantee it working on N1, N3 and N5 (her vaporized hits). \nRetracing Bolide (4): This set is only recommended to be used with a shielder. This set is also very resin inefficient, so its not recommended to farm for this set specifically.\nCrimson Witch of Flames (2) / 18% ATK set (2) / +80 EM set (2) [Choose Two]: While lacking in power compared to the other options, you will likely have good substats on the 2 piece combinations compared to a full 4 piece set which can compensate.\n\nRegarding Mainstats:\nElemental Mastery: A good option if Yoimiya is triggering Vaporize and/or Overload. Having Bennett in the team favours Elemental Mastery sands slightly more than ATK sands, however it is recommended to just use whichever has better substats.\n\nRegarding Talent Priorities: \nHer Skill has poor scaling which results in individual upgrades not affecting your damage much. Her Burst is also often low priority due to it being used once every few rotations in some scenarios (such as when using Shimenawa's Reminiscence (4) without an abundance of off field energy) which can reduce its effectiveness. ",
    "builds": [
      {
        "name": "DPS \n✩",
        "artifactMainStats": "Sands - ATK% / Elemental Mastery\nGoblet - Pyro DMG\nCirclet - Crit Rate / DMG",
        "artifactSubStats": "1. Crit Rate / DMG \r\n2. ATK%\r\n3. Elemental Mastery\r\n4. Energy Recharge\r\n5. Flat ATK",
        "talentPriority": "1. Normal Attack\n2. Skill = Burst*",
        "abilityTips": "Yoimiya's hardest hitting part of her Normal Attack string is her N5, and in Vaporize teams you should be Vaporizing the N1 (first hit), N3 and N5.",
        "weapons": [
          "thundering_pulse",
          "aqua_simulacra",
          "polar_star",
          "hunter_s_path",
          "skyward_harp",
          "amos_bow"
        ],
        "artifactSets": [
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "shimenawa_s_reminiscence"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "crimson_witch_of_flames"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "gilded_dreams"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "echoes_of_an_offering"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "retracing_bolide"
            }
          },
          {
            "type": "choose-2",
            "options": [
              {
                "type": "set",
                "id": "crimson_witch_of_flames"
              },
              {
                "type": "group",
                "id": "18-atk"
              },
              {
                "type": "group",
                "id": "80-em"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "nameId": "dehya",
    "element": "pyro",
    "weapon": "claymore",
    "notes": "ON FIELD DPS\nOn Field DPS Dehya relies on using her Elemental Skill and Elemental Burst to do damage. \n\nRegarding Weapon Choice:\nAkuoumaru: At [R5], it is better than Wolf's Gravestone at [R1].\n\nRegarding Artifacts:\nLavawalker (4): Becomes much worse if Dehya is not in a mono Pyro team.\nCrimson Witch of Flames (4): Significantly better in Vaporize.\n\nSUPPORT\nSupport Dehya uses her Skill to do passive damage and apply Pyro, while providing the team with interruption resistance and tank damage.\n\nRegarding Artifacts:\nInstructor (4): Only if your team is reaction based.\nDeepwood Memories (4): For teams that focus on Dendro damage, or Bloom-based damage.\n\nRegarding Main Stats:\nCirclet: Crit Rate is only for Favonius Greatsword.\n\nBURGEON\nBurgeon Dehya uses her Skill to apply Pyro that hits Dendro Cores to trigger the Burgeon reaction.",
    "builds": [
      {
        "name": "ON FIELD DPS",
        "artifactMainStats": "Sands - ATK% / Energy Recharge\nGoblet - Pyro DMG\nCirclet - Crit Rate / DMG",
        "artifactSubStats": "1. Energy Recharge\n2. Crit Rate / DMG\n3. ATK%\n4. Elemental Mastery\n5. HP%\n6. Flat ATK",
        "talentPriority": "1. Burst\n2. Skill",
        "abilityTips": "Dehya's Elemental Burst cannot trigger effects that trigger on normal attack animations or damage (e.g. Xingqiu, Beidou).",
        "weapons": [
          "beacon_of_the_reed_sea",
          "redhorn_stonethresher",
          "wolf_s_gravestone",
          "skyward_pride",
          "the_unforged",
          "blackcliff_slasher",
          "serpent_spine",
          "luxurious_sea_lord",
          "favonius_greatsword",
          "prototype_archaic"
        ],
        "artifactSets": [
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "emblem_of_severed_fate"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "vourukasha_s_glow"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "lavawalker"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "crimson_witch_of_flames"
            }
          },
          {
            "type": "choose-2",
            "options": [
              {
                "type": "set",
                "id": "crimson_witch_of_flames"
              },
              {
                "type": "set",
                "id": "noblesse_oblige"
              },
              {
                "type": "group",
                "id": "18-atk"
              }
            ]
          }
        ]
      },
      {
        "name": "SUPPORT\n ✩",
        "artifactMainStats": "Sands - HP%\nGoblet - HP%\nCirclet - HP% / Crit Rate*",
        "artifactSubStats": "1. HP%\n2. Flat HP\n3. Elemental Mastery\n4. ATK%\n5. Flat ATK",
        "talentPriority": "1. Skill",
        "abilityTips": "Support Dehya is not reliant on her Elemental Burst to support the team as a damage tank.",
        "weapons": [
          "favonius_greatsword",
          "wolf_s_gravestone",
          "makhaira_aquamarine",
          "the_bell",
          "prototype_archaic"
        ],
        "artifactSets": [
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "tenacity_of_the_millelith"
            }
          },
          {
            "type": "double",
            "options": [
              {
                "type": "group",
                "id": "20-hp"
              },
              {
                "type": "group",
                "id": "20-hp"
              }
            ]
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "instructor"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "ocean_hued_clam"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "maiden_beloved"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "deepwood_memories"
            }
          }
        ]
      },
      {
        "name": "BURGEON",
        "artifactMainStats": "Sands - Elemental Mastery\nGoblet - Elemental Mastery\nCirclet - Elemental Mastery",
        "artifactSubStats": "1. Elemental Mastery\n2. HP%\n3. Flat HP\n4. Crit Rate%",
        "talentPriority": "1. Skill\n2. Normal Attack\n3. Burst\n\n*For an EM-focused build, upgrading Dehya's talent levels isn't a necessity.",
        "abilityTips": "Since Dehya does not need her elemental burst to trigger burgeon, she doesn't need to build energy recharge.",
        "weapons": [
          "mailed_flower",
          "makhaira_aquamarine",
          "bloodtainted_greatsword",
          "rainslasher",
          "favonius_greatsword"
        ],
        "artifactSets": [
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "gilded_dreams"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "flower_of_paradise_lost"
            }
          },
          {
            "type": "double",
            "options": [
              {
                "type": "group",
                "id": "80-em"
              },
              {
                "type": "group",
                "id": "80-em"
              }
            ]
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "crimson_witch_of_flames"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "tenacity_of_the_millelith"
            }
          }
        ]
      }
    ]
  },
  {
    "nameId": "lyney",
    "element": "pyro",
    "weapon": "bow",
    "notes": "DPS\nLyney does high damage using his Charged Attacks along with supplemental damage from his Skill and Burst. Because of his A4, he is commonly used in Mono-Pyro teams. Weapon rankings assume he is used with Bennett and using Marechaussee Hunter (4). \n\nRegarding Artifacts:\nVermillion Hereafter (4): Only use this set if Lyney can Burst every rotation. If he can, this set is better than Lavawalker (4). Start your rotation with Lyney's Burst if using this set.\nShimenawa's Reminiscence (4): Only use this set if Lyney cannot Burst every rotation. If the following is true, this set is better than Lavawalker (4). Start your rotation with Lyney's Skill if using this set.\nRetracing Bolide (4): Only worthwhile if Lyney uses a strong shielder.\n\nRegarding Artifact Mainstats:\nMainstats are assuming Lyney is using Marechaussee Hunter (4). Crit Rate circlet becomes more viable on non-MH sets. \n\nRegarding Talent Priority:\nLyney's Skill and Burst talent priority largely depends on how often he uses his Burst and how many Prop Surplus stacks he gains per rotation.",
    "builds": [
      {
        "name": "DPS  \n✩",
        "artifactMainStats": "Sands - ATK%\nGoblet - Pyro DMG\nCirclet - Crit DMG",
        "artifactSubStats": "1. Crit Rate / DMG\n2. ATK%\n3. Energy Recharge\n4. Flat ATK",
        "talentPriority": "1. Normal Attack\n2. Skill / Burst*",
        "abilityTips": "",
        "weapons": [
          "the_first_great_magic",
          "aqua_simulacra",
          "thundering_pulse",
          "skyward_harp",
          "amos_bow",
          "polar_star",
          "song_of_stillness",
          "prototype_crescent",
          "scion_of_the_blazing_sun",
          "blackcliff_warbow"
        ],
        "artifactSets": [
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "marechaussee_hunter"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "lavawalker"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "vermillion_hereafter"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "shimenawa_s_reminiscence"
            }
          },
          {
            "type": "choose-2",
            "options": [
              {
                "type": "set",
                "id": "crimson_witch_of_flames"
              },
              {
                "type": "set",
                "id": "marechaussee_hunter"
              },
              {
                "type": "group",
                "id": "18-atk"
              }
            ]
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "retracing_bolide"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "desert_pavilion_chronicle"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "wanderer_s_troupe"
            }
          }
        ]
      }
    ]
  },
  {
    "nameId": "arlecchino",
    "element": "pyro",
    "weapon": "polearm",
    "notes": "DPS\nArlecchino is a Pyro DPS that focuses on dealing damage through her Bond of Life mechanic. It should be noted that while in combat, Arlecchino cannot be healed by any source other than her Elemental Burst. For this reason, a shielder is strongly recommended within her teams.\n\nRegarding Weapon Choice:\nWeapon ranking is assuming Arlecchino is used with Bennett.\nStaff of the Scarlet Sands: If Arlecchino is not triggering Vaporize or Melt, do not use an EM Sands with this weapon and it ranks lower than Staff of Homa.\nVortex Vanquisher: Ranking assumes you are shielded. Without a shield, this weapon performs similarly to White Tassel [R5].\nDeathmatch: At higher refinements, this weapon will perform similarly to Staff of Homa.\nBallad of the Fjords: In Vaporize teams, this weapon performs slightly better than Deathmatch.\n\nRegarding Artifact Choice:\nDesert Pavilion Chronicle (4): Don't cancel Arlecchino's Charged Attack too early to ensure that it hits opponents for the passive effect.\nEchoes of an Offering (4): This set performs similarly to Desert Pavilion Chronicle (4) if your ping is consistently lower than 200.\n\nRegarding Talent Priority:\nArlecchino's Elemental Skill and Burst do not need as high of an investment as her Normal Attack talent does.\n",
    "builds": [
      {
        "name": "DPS  \n✩",
        "artifactMainStats": "Sands - ATK% / Elemental Mastery*\nGoblet - Pyro DMG\nCirclet - Crit Rate / DMG\n\n*EM should only be considered in Vaporize or Melt scenarios",
        "artifactSubStats": "1. Crit Rate / DMG\n2. Elemental Mastery*\n3. ATK%\n4. Flat ATK\n\n*Elemental Mastery should\nonly be considered if Arlecchino\nis in a Vaporize or Melt team.",
        "talentPriority": "1. Normal Attack\n2. Skill*\n3. Burst*",
        "abilityTips": "Skill Combo:\n\nSkill > team buffs > CA > 6N3D* or 3N5D\n\n*In vaporize teams, 6N3D is preferred",
        "weapons": [
          "crimson_moon_s_semblance",
          "primordial_jade_winged_spear",
          "staff_of_the_scarlet_sands",
          "staff_of_homa",
          "lumidouce_elegy",
          "calamity_queller",
          "vortex_vanquisher",
          "deathmatch",
          "ballad_of_the_fjords"
        ],
        "artifactSets": [
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "fragment_of_harmonic_whimsy"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "gladiator_s_finale"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "desert_pavilion_chronicle"
            }
          },
          {
            "type": "double",
            "options": [
              {
                "type": "set",
                "id": "crimson_witch_of_flames"
              },
              {
                "type": "group",
                "id": "18-atk"
              }
            ]
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "echoes_of_an_offering"
            }
          }
        ]
      }
    ]
  },
  {
    "nameId": "fischl",
    "element": "electro",
    "weapon": "bow",
    "notes": "OFF-FIELD DPS \nElemental Burst and Skill both summon Oz, so make sure you're only using one at a time. Start with your Skill, use Burst for second Oz rotation and alternate. Hopefully, by the time your second/third round of Oz summoning is over, you'll have gained enough energy to repeat the loop.\n\nRegarding Weapon Choices: \nIn general, Fischl's rankings depend significantly on the refinements of her weapons. \nAlley Hunter: At [R5] this weapon can be similar in performance to Skyward Harp and Thundering Pulse.\nThe Stringless: At [R5] this weapon can be on par with Amos' Bow / Alley Hunter [R1] / The Viridescent Hunt.\nPrototype Crescent: If you can consistently hit a weakpoint on an enemy before summoning Oz, this weapon performs better than Fading Twilight.\nPolar Star: Perform a quick normal attack and charged attack before summoning Oz for more stacks.\n\nRegarding Artifact Sets:\nGolden Troupe (4): This set provides a significant amount of Elemental Skill DMG% and outperforms other set options by a large margin for personal damage.\nThundersoother (4): This artifact set will outperform +18% ATK set (2) Thundering Fury (2) if used in a team comp where an Electro aura is always present (e.g. Electro/Electro-charged comps) therefore it is highly recommended within this niche.\nTenacity of the Millelith (4): This set trades off a portion of Fischl's damage in return for a party wide 20% ATK buff. If you have good pieces as a result of farming Pale Flame (for Eula or otherwise) this can be a good option for her in specific teams. Fischl can benefit from the 20% ATK buff herself if she summons Oz within 3 seconds of his previous attack. Not recommended to specifically farm this set for Fischl. \n\nOFF-FIELD AGGRAVATE DPS\nRegarding Weapon Choices: \nPolar Star: Perform a quick normal attack and charged attack before summoning Oz for more stacks.\nAlley Hunter: At [R5] this weapon can be similar in performance to Skyward Harp.\nThe Stringless: At [R5] this weapon can be stronger than Skyward Harp / Alley Hunter [R5].",
    "builds": [
      {
        "name": "OFF-FIELD DPS \n✩",
        "artifactMainStats": "Sands - ATK%\nGoblet - Electro DMG\nCirclet - Crit Rate / DMG",
        "artifactSubStats": "1. Crit Rate / DMG\n2. ATK%\n3. Energy Recharge\n4. Elemental Mastery\n5. Flat ATK",
        "talentPriority": "1. Skill\n2. Burst\n",
        "abilityTips": "",
        "weapons": [
          "polar_star",
          "aqua_simulacra",
          "skyward_harp",
          "thundering_pulse",
          "hunter_s_path",
          "amos_bow",
          "alley_hunter",
          "the_viridescent_hunt",
          "elegy_for_the_end",
          "fading_twilight",
          "the_stringless",
          "prototype_crescent"
        ],
        "artifactSets": [
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "golden_troupe"
            }
          },
          {
            "type": "double",
            "options": [
              {
                "type": "set",
                "id": "thundering_fury"
              },
              {
                "type": "group",
                "id": "18-atk"
              }
            ]
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "thundersoother"
            }
          },
          {
            "type": "double",
            "options": [
              {
                "type": "group",
                "id": "18-atk"
              },
              {
                "type": "group",
                "id": "18-atk"
              }
            ]
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "tenacity_of_the_millelith"
            }
          }
        ]
      },
      {
        "name": "OFF-FIELD AGGRAVATE DPS \n✩",
        "artifactMainStats": "Sands - ATK% / Elemental Mastery\nGoblet - Electro DMG\nCirclet - Crit Rate / DMG",
        "artifactSubStats": "1. Crit Rate / DMG\n2. ATK% \n~= Elemental Mastery\n3. Energy Recharge\n4. Flat ATK",
        "talentPriority": "1. Skill\n2. Burst",
        "abilityTips": "",
        "weapons": [
          "polar_star",
          "aqua_simulacra",
          "hunter_s_path",
          "skyward_harp",
          "thundering_pulse",
          "the_stringless",
          "the_viridescent_hunt",
          "alley_hunter",
          "windblume_ode",
          "fading_twilight",
          "slingshot"
        ],
        "artifactSets": [
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "golden_troupe"
            }
          },
          {
            "type": "double",
            "options": [
              {
                "type": "set",
                "id": "thundering_fury"
              },
              {
                "type": "group",
                "id": "80-em"
              }
            ]
          },
          {
            "type": "double",
            "options": [
              {
                "type": "set",
                "id": "thundering_fury"
              },
              {
                "type": "group",
                "id": "18-atk"
              }
            ]
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "gilded_dreams"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "thundering_fury"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "thundersoother"
            }
          }
        ]
      }
    ]
  },
  {
    "nameId": "beidou",
    "element": "electro",
    "weapon": "claymore",
    "notes": "OFF-FIELD AGGRAVATE & OFF-FIELD DPS\nRegarding Weapon Choices:\nSerpent Spine: This weapon is a fine choice for Off-Field DPS Beidou and can outperform Wolf's Gravestone by a significant margin when Bennett/Sara ATK buffs are applied. Be sure to use Beidou in slot 1 to pre-stack Serpent Spine before starting an abyss floor. At high refinement, Serpent Spine has the potential to be Beidou's best weapon, especially at low-medium ER requirements.\nRedhorn Stonethresher and Beacon of the Reed Sea: Depending on the amount of ATK% buffs you're getting, these weapon can overtake Wolf's Gravestone in personal damage. Beacon ranking assumes one stack.\nAkuoumaru: Assuming 260 team energy, this weapon outperforms Skyward Pride on a low ER requirement Beidou (where she is paired with other Electro characters to battery her energy needs). At [R3+], it becomes exponentially better and comes very close to Serpent Spine and Wolf's Gravestone.\nRainslasher: At max refinement in Aggravate teams this weapon will perform slightly better than Luxurious Sea-Lord.\n\nRegarding Artifact Sets:\nEmblem of Severed Fate (4): Even after considering the 4-piece set effect, you should refrain from investing into Energy Recharge beyond what is needed to burst off cooldown as it will result in a damage loss as compared to prioritising offensive stats such as ATK/Crit. In team comps where Beidou has low ER requirements (i.e. when paired with Electro batteries), a Noblesse Oblige (2) / Thundering Fury (2) / +18% ATK set (2) [Choose Two] will outperform Emblem of Severed Fate (4).\nThundersoother (4): This set works best in teams where you can maintain near perfect uptime on its passive, such as in Electro-Charged, Mono Electro and Aggravate teams.\n\n",
    "builds": [
      {
        "name": "OFF-FIELD AGGRAVATE DPS",
        "artifactMainStats": "Sands - ATK% / Energy Recharge\nGoblet - Electro DMG\nCirclet - Crit Rate / DMG",
        "artifactSubStats": "1. Energy Recharge*\n2. Crit Rate / DMG\n3. ATK%\n4. Elemental Mastery\n5. Flat ATK\n\n* Prioritize Energy Recharge first until you can burst off cooldown",
        "talentPriority": "1. Burst\n2. Skill\n",
        "abilityTips": "Beidou's skill grants you an Electro status for a brief moment upon holding it. This means it can be used for status-cleansing (No particular effective element). Can only be done on herself\n\nDo note the weapon rankings are based on Beidou's unbuffed state.",
        "weapons": [
          "wolf_s_gravestone",
          "serpent_spine",
          "beacon_of_the_reed_sea",
          "redhorn_stonethresher",
          "akuoumaru",
          "luxurious_sea_lord",
          "skyward_pride",
          "rainslasher",
          "prototype_archaic"
        ],
        "artifactSets": [
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "emblem_of_severed_fate"
            }
          },
          {
            "type": "choose-2",
            "options": [
              {
                "type": "set",
                "id": "thundering_fury"
              },
              {
                "type": "set",
                "id": "noblesse_oblige"
              },
              {
                "type": "set",
                "id": "emblem_of_severed_fate"
              },
              {
                "type": "group",
                "id": "18-atk"
              }
            ]
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "thundersoother"
            }
          }
        ]
      },
      {
        "name": "OFF-FIELD DPS ✩",
        "artifactMainStats": "Sands - ATK% / Energy Recharge\nGoblet - Electro DMG\nCirclet - Crit Rate / DMG",
        "artifactSubStats": "1. Energy Recharge*\n2. Crit Rate / DMG\n3. ATK%\n4. Elemental Mastery\n5. Flat ATK\n\n* Prioritize Energy Recharge first until you can burst off cooldown",
        "talentPriority": "1. Burst\n2. Skill\n",
        "abilityTips": "",
        "weapons": [
          "wolf_s_gravestone",
          "beacon_of_the_reed_sea",
          "serpent_spine",
          "redhorn_stonethresher",
          "akuoumaru",
          "skyward_pride",
          "luxurious_sea_lord",
          "prototype_archaic",
          "rainslasher"
        ],
        "artifactSets": [
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "emblem_of_severed_fate"
            }
          },
          {
            "type": "choose-2",
            "options": [
              {
                "type": "set",
                "id": "thundering_fury"
              },
              {
                "type": "set",
                "id": "noblesse_oblige"
              },
              {
                "type": "set",
                "id": "emblem_of_severed_fate"
              },
              {
                "type": "group",
                "id": "18-atk"
              }
            ]
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "thundersoother"
            }
          }
        ]
      }
    ]
  },
  {
    "nameId": "lisa",
    "element": "electro",
    "weapon": "catalyst",
    "notes": "AGGRAVATE DPS\nThis build makes the best use of Lisa's entire kit, from her EM ascension stat to her high rate of Electro application. While also minimizing her high energy needs by making her an on-field driver for Quicken teams, and is therefore her best usage case.\n\nRegarding Weapons:\nFor more details see the sheet here\nThe Widsith: At high refinement [R4-R5] this weapon starts performing similarly to Lost Prayer to the Sacred Winds.\nSolar Pearl: At high refinement [R4-R5] this is competitive or even slightly better than Skyward Atlas, especially with external attack buffs.\n\nRegarding Artifact Sets:\nThundersoother (4): This set can outperform Gilded Dreams (4) in teams where she can keep high uptime on her Electro application.\n\nOFF-FIELD DPS\nThis build focuses more on making Lisa a flexible buffing/bursting unit in short durations as a part of a variety of teams including quickswap comps and, especially, Quicken comps.\n\nRegarding Weapon Choice:\nKagura's Verity: This weapon's ranking is based on executing a specific rotation, but the rotation is different for Off-Field DPS. The rotation is Tap E > N2 > Tap E > Q > Hold E (3 Stack).\nThrilling Tales of Dragon Slayers: This option is only recommended on a low investment Lisa whereby she is focused around buffing her teammates and contributing team DPS over outputting high damage on her own.\n\nRegarding Stats Priority: These options prioritize Lisa's Elemental Burst uptime as a defense shredding tool.\n\nREACTION DPS\nThis build aims to be the consistent trigger for reactions, Hyperbloom and Overload are generally the best reactions for this set up. These reactions are primarily triggered by her burst, which is why it's important to make sure its uptime is as high as possible. Avoid having a second Electro in the Overload team for this build since this could mess up the Pyro aura Lisa wants for this playstyle. \n\nRegarding Weapons:\nFruit of Fulfillment: At high refinement this weapon performs similarly to A Thousand Floating Dreams while also having a significant amount of Energy Recharge on it making it easier to build around.\n\nRegarding Artifact sets:\nFlower of Paradise Lost (4): This set only performs around 4-6% (varies according to the elemental composition of your team) better in terms of Hyperbloom damage. Therefore it's worth considering farming Gilded Dreams (4) instead since it's in a more resin efficient domain alongside Deepwood Memories (4).\n\nRegarding Stats Priority: Try to invest both into EM and ER. The goal is to try stack as much EM while getting enough ER for a comfortable Burst uptime depending on your teams.",
    "builds": [
      {
        "name": "AGGRAVATE DPS\n✩",
        "artifactMainStats": "Sands - Elemental Mastery / ATK%\nGoblet - Electro DMG\nCirclet - Crit Rate / DMG\n",
        "artifactSubStats": "1. Crit Rate / DMG\n2. ATK%\n~= Elemental Mastery\n3. Energy Recharge\n4. Flat ATK",
        "talentPriority": "1. Skill\n~= Burst\n2. Normal Attack",
        "abilityTips": "Optimal Thundering Fury Lisa String: \n- ES (tap) ES (tap) > N2 > ES (tap) ES (hold)\n(N2CA when ES is on cooldown)\n\n\n*N/NA = Normal attack, C = Charged attack, ES = Elemental Skill",
        "weapons": [
          "kagura_s_verity",
          "lost_prayer_to_the_sacred_winds",
          "skyward_atlas",
          "a_thousand_floating_dreams",
          "the_widsith",
          "tulaytullah_s_remembrance",
          "solar_pearl",
          "memory_of_dust",
          "blackcliff_agate",
          "mappa_mare",
          "dodoco_tales"
        ],
        "artifactSets": [
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "thundering_fury"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "gilded_dreams"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "thundersoother"
            }
          },
          {
            "type": "choose-2",
            "options": [
              {
                "type": "set",
                "id": "thundering_fury"
              },
              {
                "type": "group",
                "id": "18-atk"
              },
              {
                "type": "group",
                "id": "80-em"
              }
            ]
          }
        ]
      },
      {
        "name": "OFF-FIELD DPS",
        "artifactMainStats": "Sands - Energy Recharge / ATK% / Elemental Mastery*\nGoblet - Electro Damage\nCirclet - Crit Rate / DMG\n\n**Only used in Quicken teams",
        "artifactSubStats": "1. Energy Recharge*\n2. Crit Rate / DMG\n3. ATK%\n4. Elemental Mastery\n5. Flat ATK",
        "talentPriority": "1. Burst\n2. Skill\n3. Normal Attack",
        "abilityTips": "Lisa's Hold cast does not require 4 full seconds of charging to reach maximum damage threshold, as long as the indicator aligns with ring, you can release your cast at max damage.",
        "weapons": [
          "kagura_s_verity",
          "skyward_atlas",
          "lost_prayer_to_the_sacred_winds",
          "tulaytullah_s_remembrance",
          "memory_of_dust",
          "the_widsith",
          "oathsworn_eye",
          "hakushin_ring",
          "thrilling_tales_of_dragon_slayers"
        ],
        "artifactSets": [
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "emblem_of_severed_fate"
            }
          },
          {
            "type": "choose-2",
            "options": [
              {
                "type": "set",
                "id": "thundering_fury"
              },
              {
                "type": "set",
                "id": "noblesse_oblige"
              },
              {
                "type": "set",
                "id": "emblem_of_severed_fate"
              },
              {
                "type": "group",
                "id": "18-atk"
              }
            ]
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "gilded_dreams"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "noblesse_oblige"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "thundersoother"
            }
          }
        ]
      },
      {
        "name": "REACTION DPS",
        "artifactMainStats": "Sands - Elemental Mastery / Energy Recharge\nGoblet - Elemental Mastery\nCirclet - Elemental Mastery",
        "artifactSubStats": "1. Energy Recharge\n2. Elemental Mastery\n3. ATK%\n4. Crit Rate / DMG",
        "talentPriority": "1. Burst\n2. Skill\n3. Normal Attack\n\nReaction DPS Lisa's Talent Levels are not a necessity",
        "abilityTips": "",
        "weapons": [
          "fruit_of_fulfillment",
          "a_thousand_floating_dreams",
          "sacrificial_fragments",
          "favonius_codex",
          "magic_guide",
          "mappa_mare",
          "hakushin_ring",
          "thrilling_tales_of_dragon_slayers"
        ],
        "artifactSets": [
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "flower_of_paradise_lost"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "gilded_dreams"
            }
          },
          {
            "type": "choose-2",
            "options": [
              {
                "type": "set",
                "id": "emblem_of_severed_fate"
              },
              {
                "type": "group",
                "id": "80-em"
              },
              {
                "type": "group",
                "id": "80-em"
              }
            ]
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "thundering_fury"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "instructor"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "noblesse_oblige"
            }
          }
        ]
      }
    ]
  },
  {
    "nameId": "razor",
    "element": "electro",
    "weapon": "claymore",
    "notes": "HYPERBLOOM / REACTION DPS\nHyperbloom / REACTION DPS Razor focuses on using his Burst's electro to trigger Hyperbloom. If you have C6 Bennett you can infuse Razor's Normal Attacks with Pyro to trigger Hyperbloom, Burgeon, and Overload. \nRegarding Weapon Choices:\nFavonius Greatsword: This weapon sacrifices some of Razor's potential reaction damage for team energy\n\nDPS\nRegarding Weapon Choices:\nWolf's Gravestone: While the passive is inactive, this weapon outperforms Skyward Pride in every scenario except crowd battles.\nBeacon of the Reed Sea: Weapon ranking assumes one stack, at two stacks it outperforms the other weapon options. \nRedhorn Stonethresher: Depending on the amount of ATK% buffs you're getting, this weapon can overtake Wolf's Gravestone in personal damage.\nThe Unforged: The playstyle with this weapon becomes a lot more comfortable without having to worry about snapshotting Wolf's Gravestone / Song of Broken Pines buffs for Sub DPSes, while also granting more Shield Bonus for better Shield uptime. A shielder is required for this, with Zhongli being the most ideal option.\nSerpent Spine: At [C6] and high refinement Serpent Spine, it is better to run an ATK% Goblet over Physical Damage%. This is due to the oversaturation of damage bonuses (ascension stat + Serpent Spine) in addition to the fact that Electro accounts for a significant portion of Razor's damage. An in-depth explanation can be found here. It is also worth noting that an [R5] Serpent Spine with max stacks can outperform all 5✩ weapons at [R1].\nSkyward Pride: This weapon is viable with a Physical DMG goblet, as the damage dealt through its passive scales with Physical%.\n\nRegarding Artifact Sets: \nPale Flame (2) Bloodstained Chivalry (2): This set is better if your ATK% is covered by your substats, otherwise you would be better off running Gladiator's Finale (4). This is only recommended to those who have no immediate access to a decent Pale Flame (4) set, otherwise you would be better off investing on Pale Flame pieces, regardless of weapon choice.\n\n",
    "builds": [
      {
        "name": "HYPERBLOOM / REACTION DPS\n ✩",
        "artifactMainStats": "Sands - Elemental Mastery\nGoblet  - Elemental Mastery\nCirclet  - Elemental Mastery",
        "artifactSubStats": "1. Elemental Mastery\n2. Energy Recharge\n3. Crit Rate% [Only for Favonius Greatsword]",
        "talentPriority": "1. Burst\n2. Normal Attack\n3. Skill\n\n*EM Razor's Talent Levels are not a necessity.",
        "abilityTips": "",
        "weapons": [
          "mailed_flower",
          "makhaira_aquamarine",
          "rainslasher",
          "bloodtainted_greatsword",
          "favonius_greatsword",
          "forest_regalia"
        ],
        "artifactSets": [
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "gilded_dreams"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "flower_of_paradise_lost"
            }
          },
          {
            "type": "double",
            "options": [
              {
                "type": "group",
                "id": "80-em"
              },
              {
                "type": "group",
                "id": "80-em"
              }
            ]
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "thundering_fury"
            }
          }
        ]
      },
      {
        "name": "PHYSICAL\nDPS",
        "artifactMainStats": "Sands - ATK%\nGoblet - Physical DMG\nCirclet - Crit Rate / DMG\n",
        "artifactSubStats": "1. Crit Rate / DMG\n2. ATK%\n3. Energy Recharge \n4. Elemental Mastery\n5. Flat ATK\n",
        "talentPriority": "1. Normal Attack\n2. Burst\n3. Skill",
        "abilityTips": "Razor's EB grants you an Electro Status when you basic attack while burst is in-effect, that means it can be used for status-cleansing (no particular effective element).  Can only be done on himself.\n",
        "weapons": [
          "wolf_s_gravestone",
          "beacon_of_the_reed_sea",
          "song_of_broken_pines",
          "redhorn_stonethresher",
          "the_unforged",
          "skyward_pride",
          "prototype_archaic"
        ],
        "artifactSets": [
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "pale_flame"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "gladiator_s_finale"
            }
          },
          {
            "type": "double",
            "options": [
              {
                "type": "set",
                "id": "bloodstained_chivalry"
              },
              {
                "type": "set",
                "id": "pale_flame"
              }
            ]
          },
          {
            "type": "single",
            "option": {
              "type": "group",
              "id": "18-atk"
            }
          },
          {
            "type": "double",
            "options": [
              {
                "type": "group",
                "id": "18-atk"
              },
              {
                "type": "group",
                "id": "18-atk"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "nameId": "kujou_sara",
    "element": "electro",
    "weapon": "bow",
    "notes": "SUPPORT AND DAMAGE\nSara is a quickswap support who is able to buff your active characters via its Crowfeather mechanics. When Sara uses her Elemental Skill, her next Charged Shot will leave a Crowfeather on the target location and after a short while, the Crowfeather explodes and the active character in its AoE will benefit from Sara's ATK buff, which scales with her Base ATK. \n\nAt [C2], you can skip the Charged Shot as it immediately drops a Crowfeather, and save it for later on if you wanna swap back to her to extend her buffs. You can also use Elemental Skill followed by Elemental Burst so that she benefits from the Crowfeather dropped by her Elemental Skill, then swap to other character so that character can benefit from Sara's ATK buff. It's worth mentioning that Sara's Crit DMG buff at [C6] doesn't snapshot and it also doesn't show on the stats page, so don't freak out when you don't see it there.\n\nRegarding Weapon Choices: Weapons here are ranked based on their Base ATK to maximize Sara's ATK buff.\nPolar Star: This is the best weapon for her personal damage, at the cost of having weaker buffing capabilities compared to Skyward Harp.\nSkyward Harp: This is the best all-rounder weapon. Combining both high personal damage, with the second best buffing capabilities of any weapon.\nMouun's Moon: At [R5] this weapon performs similarly to Hunter's Path in personal damage while also giving you a stronger buff.\nElegy for the End: The cooldown on this weapon's passive aligns perfectly with Sara's Elemental Burst cooldown. This weapon has lower base ATK if compared with Skyward Harp, but this weapon can be considered over Skyward Harp due to the teamwide ATK% and EM buff it provides. It's worth keeping in mind that Sara can experience issues triggering the Elegy passive consistently, against small hitbox single-target scenarios.\nSacrificial Bow: The combination of high base ATK and a Energy Recharge substat makes this one of her best (4✩) weapon options in teams where she needs a Energy Recharge weapon to meet energy requirements and battery another Electro unit at the same time.\n\nRegarding Artifact Sets:\nNoblesse Oblige (4): Universal support set that is able to buff your party member's ATK by 20%, use this set on Sara if there's nobody else in the party who's equipping one.\n",
    "builds": [
      {
        "name": "SUPPORT AND DAMAGE\n✩",
        "artifactMainStats": "Sands - Energy Recharge / ATK%\nGoblet - Electro DMG\nCirclet - Crit Rate / DMG ",
        "artifactSubStats": "1. Energy Recharge*\n2. Crit Rate / DMG\n3. ATK%\n4. Flat ATK\n\n*Prioritize Energy Recharge first until you can burst off cooldown",
        "talentPriority": "1. Skill\n2. Burst",
        "abilityTips": "For her Elemental Skill to generate particles, you need to perform a Charged Shot to place a Crowfeather after casting her Elemental Skill. If the Crowfeather explosion hits an enemy, it generates 3 particles.\n\nCrowfeathers generated from Sara's [C2] do NOT generate particles.",
        "weapons": [
          "polar_star",
          "skyward_harp",
          "hunter_s_path",
          "aqua_simulacra",
          "thundering_pulse",
          "amos_bow",
          "mouun_s_moon",
          "elegy_for_the_end",
          "alley_hunter",
          "fading_twilight",
          "the_viridescent_hunt",
          "blackcliff_warbow",
          "sacrificial_bow",
          "prototype_crescent",
          "favonius_warbow",
          "messenger"
        ],
        "artifactSets": [
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "emblem_of_severed_fate"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "noblesse_oblige"
            }
          },
          {
            "type": "double",
            "options": [
              {
                "type": "set",
                "id": "thundering_fury"
              },
              {
                "type": "set",
                "id": "noblesse_oblige"
              }
            ]
          },
          {
            "type": "double",
            "options": [
              {
                "type": "set",
                "id": "noblesse_oblige"
              },
              {
                "type": "group",
                "id": "18-atk"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "nameId": "kuki_shinobu",
    "element": "electro",
    "weapon": "sword",
    "notes": "HYPERBLOOM\nThis is a Dendro team that requires a reliable Electro trigger unit to work,for which Kuki is one of the best Electro units to perform this role.\n\nRegarding Weapon Choices:\nKey of Khaj-Nisut: This becomes a better choice than Iron Sting at [C4] when you can gain the 3rd passive stack without extending your rotation time or taking extra field time. It can also net more Elemental Mastery than Freedom-Sworn at 3 stacks, assuming you have actually built some HP% Substats on your Sands/Goblet/Circlet, but this is usually not enough to out-perform the overall gains from Xiphos' Moonlight/Freedom-Sworn's respective passives.\nToukabou Shigure: This weapon performs very similarly in a Hyperbloom focused build to Iron Sting since its passive does not effect Hyperbloom damage. \n\nAGGRAVATE OFF-FIELD DPS\nThis adds flat damage to the triggering Electro attack that scales off Elemental Mastery and levels, which essentially allows Kuki's personal damage to become relevant while also filling the role of a healer in the team.\n\nRegarding Weapon Choices:\nFreedom-Sworn: While not having the highest personal damage it makes up for it in overall team damage through its competitive buffs.\nPrimordial Jade Cutter: Has the highest personal damage of any weapon on Kuki but little to no utility, which means it usually falls behind in overall team damage.\nKey of Khaj-Nisut: On paper combines a mixture of high personal damage with team buffs to potentially be her best weapon if you manage to get it fully stacked. This is usually a unrealistic scenario though with it taking up to 2-3\nrotations to fully stack or forcing you to stay on-field to let it stack which is usually a net DPS loss.\n\nRegarding Artifact choices:\nThundersoother (4): It's potentially your BIS set if you can maintain a constant Electro aura or near that, to be this consistent usually takes up to 3 Electro units (or possibly 2 Electro units and a Anemo unit like Kazuha or Venti swirling Electro)\nThundering Fury (2) +80 EM set (2) Noblesse Oblige (2): Usually performs so close to Gilded Dreams (4) that you can simply pick the set or combination of sets with the highest possible substats.\n\nSUPPORT\nOutside of reaction teams where she can be a reliable trigger unit, Kuki's damage contribution is usually insignificant. Hence her best usage case in those scenarios is building purely for utility.\n\nRegarding Weapon Choices:\nFavonius Sword: The passive lets her provide energy to the rest of the team. A Crit Rate circlet or substats should be considered to reliably trigger the passive.\nFreedom-Sworn: In teams where Kuki can reliably trigger reactions, the teamwide buff from this weapon can make it preferable over Favonius Sword.\nKey of Khaj-Nisut: Highest possible healing in exchange for weaker utility. Worth considering in teams that can't reliably trigger reactions for Freedom-Sworn or don't need extra energy particles from Favonius Sword.\nThe Dockhand's Assistant: Similarly to Key of Khaj-Nisut, this weapon trades utility for stronger healing.\n\nRegarding Artifact Choices:\nNoblesse Oblige (4): When using this set, make sure to build enough Energy Recharge to cast Burst off cooldown and keep good uptime on this set's passive.\nOcean-Hued Clam (4): Provides a decent amount of extra damage on a full healing build.\nInstructor (4) / The Exile (4): Can be a cheap alternative on teams where the extra ATK% buff from Tenacity of the Millelith (4) or Noblesse Oblige (4) is not as useful.",
    "builds": [
      {
        "name": "HYPERBLOOM \n✩",
        "artifactMainStats": "Sands - Elemental Mastery\nGoblet - Elemental Mastery\nCirclet - Elemental Mastery",
        "artifactSubStats": "1. Elemental Mastery*\n2. HP%\n3. Flat HP\n4. Energy Recharge\n\n*Elemental Mastery is essentially your only priority",
        "talentPriority": "1. Skill\n2. Burst",
        "abilityTips": "Aim for around 850-950+ Elemental Mastery. Depending on whether you use a Elemental Mastery weapon or not.",
        "weapons": [
          "freedom_sworn",
          "xiphos_moonlight",
          "iron_sting",
          "key_of_khaj_nisut",
          "toukabou_shigure",
          "dark_iron_sword",
          "sapwood_blade"
        ],
        "artifactSets": [
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "flower_of_paradise_lost"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "gilded_dreams"
            }
          },
          {
            "type": "double",
            "options": [
              {
                "type": "group",
                "id": "80-em"
              },
              {
                "type": "group",
                "id": "80-em"
              }
            ]
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "thundering_fury"
            }
          }
        ]
      },
      {
        "name": "AGGRAVATE OFF-FIELD DPS",
        "artifactMainStats": "Sands - Energy Recharge / Elemental Mastery\nGoblet - Electro DMG\nCirclet - Crit Rate / DMG",
        "artifactSubStats": "1. Energy Recharge\n2. Crit Rate / DMG\n3. Elemental Mastery\n4. HP%\n5. Flat HP",
        "talentPriority": "1. Skill\n2. Burst",
        "abilityTips": "",
        "weapons": [
          "freedom_sworn",
          "primordial_jade_cutter",
          "key_of_khaj_nisut",
          "festering_desire",
          "xiphos_moonlight",
          "iron_sting",
          "sapwood_blade",
          "favonius_sword",
          "dark_iron_sword"
        ],
        "artifactSets": [
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "gilded_dreams"
            }
          },
          {
            "type": "choose-2",
            "options": [
              {
                "type": "set",
                "id": "thundering_fury"
              },
              {
                "type": "set",
                "id": "noblesse_oblige"
              },
              {
                "type": "group",
                "id": "80-em"
              }
            ]
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "thundersoother"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "thundering_fury"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "tenacity_of_the_millelith"
            }
          }
        ]
      },
      {
        "name": "SUPPORT\n",
        "artifactMainStats": "Sands - HP%\nGoblet - HP%\nCirclet - Healing Bonus / HP% / Crit Rate",
        "artifactSubStats": "1. HP%\n2. Crit Rate*\n3. Elemental Mastery / Flat HP\n\n*Crit Rate is useful only when using Favonius Sword",
        "talentPriority": "1. Skill\n2. Burst",
        "abilityTips": "",
        "weapons": [
          "favonius_sword",
          "freedom_sworn",
          "key_of_khaj_nisut",
          "the_dockhand_s_assistant",
          "iron_sting"
        ],
        "artifactSets": [
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "tenacity_of_the_millelith"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "noblesse_oblige"
            }
          },
          {
            "type": "double",
            "options": [
              {
                "type": "set",
                "id": "instructor"
              },
              {
                "type": "set",
                "id": "the_exile"
              }
            ]
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "ocean_hued_clam"
            }
          }
        ]
      }
    ]
  },
  {
    "nameId": "dori",
    "element": "electro",
    "weapon": "claymore",
    "notes": "SUPPORT\nDori is mainly a support character that provides Healing and Energy to a teammate through her burst.\n\nRegarding Weapon Choices: \nSacrificial Greatsword: This weapon's passive allows Dori to cast her elemental skill twice while only swapping to her once per rotation. \n\nRegarding Artifact Choices: \nDeepwood Memories (4): This set should only be used when Dori is in a Dendro based team composition. \n",
    "builds": [
      {
        "name": "SUPPORT\r\n✩",
        "artifactMainStats": "Sands - Energy Recharge / HP% / Elemental Mastery\nGoblet - HP% / Elemental Mastery \nCirclet - Healing Bonus / HP% / Elemental Mastery*\n\n*A Crit Rate Circlet can be considered if running Favonius Greatsword",
        "artifactSubStats": "1. Crit Rate*\n2. Energy Recharge \n3. HP% \n4. Elemental Mastery\n\n*Crit Rate is useful only when using Favonius Greatsword ",
        "talentPriority": "1. Burst \n2. Skill ",
        "abilityTips": "It is generally advised to use 2 elemental skills per burst rotation, as this helps to alleviate her otherwise extreme Energy requirements. ",
        "weapons": [
          "favonius_greatsword",
          "sacrificial_greatsword",
          "katsuragikiri_nagamasa",
          "forest_regalia"
        ],
        "artifactSets": [
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "noblesse_oblige"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "deepwood_memories"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "instructor"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "the_exile"
            }
          }
        ]
      }
    ]
  },
  {
    "nameId": "keqing",
    "element": "electro",
    "weapon": "sword",
    "notes": "PHYSICAL DPS\nThis section is dedicated to a playstyle where Keqing does not infuse her attacks with Electro, and instead focuses on Physical damage (white numbers). For this reason, you should be charged attacking after casting Stellar Restoration (E) instead of recasting it.\n\nRegarding Artifact Sets:\nPale Flame (4): This set is the best by far as Keqing can proc its 4 piece set bonus instantly by charge attacking after casting E.\nPale Flame (2) Bloodstained Chivalry (2):  This set should only be used until getting Pale Flame (4).\n+25% Physical DMG set (2) +18% ATK set (2): The generalist Physical DPS set.\nRetracing Bolide (4): This set should only be used with a consistent shielder (i.e. Zhongli/Diona) for obvious reasons.\nBloodstained Chivalry (4): This set is for general solo and Abyss content where there are multiple mobs that can be killed with charged attacks within 10 seconds, this is for dealing with a crowd, in other words, AoE. It is not recommended because of the kill condition.\n\nELECTRO DPS\nRegarding Weapon Choices: \nLion's Roar: This weapon is only recommended on Pure Electro / Electro-charged teams. In teams where the Electro Aura can be easily removed OR when facing enemies with innate elements, this weapon will severely underperform. \n\nRegarding Artifact Sets: \nThundering Fury (2) +18% ATK set (2): This set is a generalist set, which means it can be used generally anywhere, whether it be Co-op or Abyss, or other singleplayer content. This has a lot of consistency due to its independence from Electro aura, and it is more viable in abyss.\n+18% ATK set (2) / +18% ATK set (2): While it is slightly behind Thundering Fury (2) +18% ATK set (2), this set is preferred to farm for due to the resin efficiency of Shimenawa's Reminiscence's Domain.\nThundersoother (4): This set should be used with Electro-charged team compositions (Keqing + Xingqiu). This set has a 35% DMG modifier which increases all damage from all sources, although that modifier is a bit unstable due to its dependency to the sustainability of Electro aura on enemies.\n\nAGGRAVATE DPS\nRegarding Weapon Choices:\nHarbinger of Dawn [R5]: This ranking assumes full uptime on the passive. If you cannnot maintain the passive, this weapon is not recommended.\nSummit Shaper: This ranking assumes Keqing is unshielded. If Keqing has a shielder, this weapon will perform better than Harbinger of Dawn [R5].\nToukabou Shigure: Eventually with high refinement Lion's Roar/The Black Sword will surpass it. But this ranking assumes [R1] for both, Iron Sting can also surpass it at equal refinement in Multi-target content where Toukabou Shigure's passive falls off, since it can only be applied to one target at a time.\nWolf-Fang: This ranking assumes you are using Thundering Fury, when using Gilded Dreams or Split Set options instead it performs slightly worse than The Black Sword.\nLion's Roar: This scales better with Higher refinement levels ([R5]) in comparison to The Black Sword.\n\nRegarding Artifact Choices:\nGilded Dreams (4): This set encourages the use of ATK% Sands over an EM Sands.",
    "builds": [
      {
        "name": "PHYSICAL DPS",
        "artifactMainStats": "Sands - ATK%\nGoblet - Physical DMG\nCirclet - Crit Rate / DMG ",
        "artifactSubStats": "1. Crit Rate / DMG\n2. ATK%\n3. Flat ATK\n4. Energy Recharge",
        "talentPriority": "1. Normal Attack\n2. Burst\n3. Skill\n\n(Refer to Notes below)",
        "abilityTips": "",
        "weapons": [
          "aquila_favonia",
          "primordial_jade_cutter",
          "summit_shaper",
          "haran_geppaku_futsu",
          "mistsplitter_reforged",
          "the_black_sword",
          "the_flute",
          "prototype_rancour"
        ],
        "artifactSets": [
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "pale_flame"
            }
          },
          {
            "type": "double",
            "options": [
              {
                "type": "set",
                "id": "bloodstained_chivalry"
              },
              {
                "type": "set",
                "id": "pale_flame"
              }
            ]
          },
          {
            "type": "single",
            "option": {
              "type": "group",
              "id": "18-atk"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "retracing_bolide"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "bloodstained_chivalry"
            }
          }
        ]
      },
      {
        "name": "ELECTRO DPS\n ✩",
        "artifactMainStats": "Sands - ATK%\nGoblet - Electro DMG\nCirclet - Crit Rate / DMG ",
        "artifactSubStats": "1. Crit Rate / DMG\n2. ATK%\n3. Elemental Mastery\n4. Flat ATK\n5. Energy Recharge\n",
        "talentPriority": "1. Normal Attack\n2. Burst\n3. Skill",
        "abilityTips": "Preferred Skill Combo: Skill (Place stiletto, don't reactivate yet) -> Burst -> Skill (Reactivation) -> Spam NA Combo (See Below) -> Repeat\n\nNA Combos:\nN1C = 1 Normal Attack followed by a Charged Attack - Highest DPS Combo, but costs a lot of stamina\nN4C = 4 Normal Attacks followed by a Charged Attack - Second best Combo, and conserves stamina.",
        "weapons": [
          "mistsplitter_reforged",
          "primordial_jade_cutter",
          "haran_geppaku_futsu",
          "summit_shaper",
          "aquila_favonia",
          "lion_s_roar",
          "the_black_sword",
          "kagotsurube_isshin",
          "amenoma_kageuchi"
        ],
        "artifactSets": [
          {
            "type": "double",
            "options": [
              {
                "type": "set",
                "id": "thundering_fury"
              },
              {
                "type": "group",
                "id": "18-atk"
              }
            ]
          },
          {
            "type": "double",
            "options": [
              {
                "type": "group",
                "id": "18-atk"
              },
              {
                "type": "group",
                "id": "18-atk"
              }
            ]
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "thundersoother"
            }
          }
        ]
      },
      {
        "name": "AGGRAVATE DPS\n ✩",
        "artifactMainStats": "Sands - ATK% / Elemental Mastery\nGoblet - Electro DMG\nCirclet - Crit Rate / DMG",
        "artifactSubStats": "1. Crit Rate / DMG\n2. ATK%\n~= Elemental Mastery\n4. Flat ATK\n5. Energy Recharge",
        "talentPriority": "1. Normal Attack\n2. Burst\n~= Skill\n\n*It is recommended to level Keqing to level 90",
        "abilityTips": "",
        "weapons": [
          "mistsplitter_reforged",
          "primordial_jade_cutter",
          "haran_geppaku_futsu",
          "freedom_sworn",
          "light_of_foliar_incision",
          "harbinger_of_dawn",
          "summit_shaper",
          "toukabou_shigure",
          "lion_s_roar",
          "the_black_sword",
          "iron_sting"
        ],
        "artifactSets": [
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "thundering_fury"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "thundersoother"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "gilded_dreams"
            }
          },
          {
            "type": "choose-2",
            "options": [
              {
                "type": "set",
                "id": "thundering_fury"
              },
              {
                "type": "group",
                "id": "18-atk"
              },
              {
                "type": "group",
                "id": "80-em"
              }
            ]
          },
          {
            "type": "double",
            "options": [
              {
                "type": "group",
                "id": "18-atk"
              },
              {
                "type": "group",
                "id": "80-em"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "nameId": "raiden_shogun",
    "element": "electro",
    "weapon": "polearm",
    "notes": "HYPERBLOOM\nIn this build Raiden is used as a Hyperbloom trigger unit in a Dendro team. She is one of the best units in the game for this role. Bringing greater energy particle generation, a faster rate of seed triggering and a team ult buff in exchange for reduced team flexibility compared to another top Hyperbloom triggering unit like Kuki.\n\nRegarding Artifact Choices:\n+80 EM set (2) / +80 EM set (2): In a team with one other Electro unit it's only 1 substat roll behind Gilded Dreams (4) (3-4 substat rolls behind in a team with no other Electro units) therefore you can usually just use the set with the most Elemental Mastery substat rolls on it.\n\nDPS\nRaiden's Elemental Burst damage depends on her team's energy consumption prior to her Burst, and her Burst restores a comfortable amount of energy for her team (which is further amplified by her passive). This is especially convenient on teams that doesn't conflict with her element and wants the energy provision. (i.e. Eula, Electro, National teams, etc.).\n\nRegarding Weapon Choices: This list assumes the average across a variety of buffs. \nFavonius Lance: In teams where Raiden's damage is less potent, this weapon gains a lot of value for its ability to further regenerate team Energy, making it better than \"The Catch\" on some teams.\nStaff of the Scarlet Sands: It is not recommended to build EM for this weapon as her other offensive stats still outclass it.\nSkyward Spine: Assumes that you are utilizing the ATK SPD buff to access higher damage combos. \nWavebreaker's Fin: At [R5], this weapon is competitive with the strong non-Engulfing 5* options, depending on your total team burst cost.\nLithic Spear: The ranking for this weapon assumes 1 stack on its passive.\nDeathmatch: With refinements, Deathmatch becomes a very competitive option with some of the strong non-Engulfing 5* options, especially in single-target situations. Even at low refinement against a single enemy it is similar to R5 The Catch in terms of performance. \n\nRegarding Artifact Sets:\nTenacity of the Millelith (4): This set acts as a low investment support oriented set. Raiden is an excellent Tenacity of the Millelith (4) holder since her Elemental Skill has 100% uptime and procs very easily. Do note that if your Raiden is equipping this set, then she will sacrifice her personal damage.\nRegarding Main Stats Priority: \nRaiden's main stat priority for Sands and Goblet entirely depends on the substats, whether she has external buffs, and which weapon she is running. Using an optimizer/calculator would be the best way to work out your optimal setup.",
    "builds": [
      {
        "name": "HYPERBLOOM ",
        "artifactMainStats": "Sands - Elemental Mastery\nGoblet - Elemental Mastery\nCirclet - Elemental Mastery\n",
        "artifactSubStats": "1. Elemental Mastery*\n2. ATK%\n3. Energy Recharge\n4. Crit Rate/ DMG\n\n*EM is essentially your only priority",
        "talentPriority": "1. Skill\n\n*Typically Raiden only uses her Skill for Hyperbloom, so leveling Burst is not necessary. ",
        "abilityTips": "In terms of playstyle, Hyperbloom Raiden is typically only using her Skill then swapping character. Try to ensure it's always active for Hyperbloom triggering.",
        "weapons": [
          "dragon_s_bane",
          "moonpiercer",
          "kitain_cross_spear"
        ],
        "artifactSets": [
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "flower_of_paradise_lost"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "gilded_dreams"
            }
          },
          {
            "type": "double",
            "options": [
              {
                "type": "group",
                "id": "80-em"
              },
              {
                "type": "group",
                "id": "80-em"
              }
            ]
          }
        ]
      },
      {
        "name": "DPS\n ✩",
        "artifactMainStats": "Sands - Energy Recharge / ATK%*\nGoblet - Electro DMG / ATK%*\nCirclet - Crit Rate / DMG ",
        "artifactSubStats": "1. Crit Rate / DMG\n2. ATK%\n3. Energy Recharge\n4. Elemental Mastery\n5. Flat ATK",
        "talentPriority": "1. Burst \n2. Skill",
        "abilityTips": "Start your rotation with Raiden's Elemental Skill.\n\nBurst combo :\n- Burst > 4N4D (Recommended for general use)\n- Burst > 3N3C + N1C (Recommended with Attack Speed)\n\n*N = Normal Attack, C = Charged Attack, D = Dash, E = Elemental Skill\nThe Attack Speed combo can theoretically be performed without Attack Speed, but with very little room for error. \n3N3C + N2C and 4N3C are other potential combos, the former being more difficult to perform and the latter requiring Attack Speed. \nN4E + 3N4D is an effective option for players adept at performing the 4N4D combo.",
        "weapons": [
          "engulfing_lightning",
          "staff_of_homa",
          "lumidouce_elegy",
          "primordial_jade_winged_spear",
          "staff_of_the_scarlet_sands",
          "calamity_queller",
          "skyward_spine",
          "vortex_vanquisher",
          "deathmatch",
          "wavebreaker_s_fin",
          "lithic_spear",
          "favonius_lance",
          "prototype_starglitter"
        ],
        "artifactSets": [
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "emblem_of_severed_fate"
            }
          },
          {
            "type": "choose-2",
            "options": [
              {
                "type": "set",
                "id": "thundering_fury"
              },
              {
                "type": "set",
                "id": "noblesse_oblige"
              },
              {
                "type": "set",
                "id": "emblem_of_severed_fate"
              },
              {
                "type": "group",
                "id": "18-atk"
              }
            ]
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "tenacity_of_the_millelith"
            }
          }
        ]
      }
    ]
  },
  {
    "nameId": "yae_miko",
    "element": "electro",
    "weapon": "catalyst",
    "notes": "GENERAL NOTES\nRegarding Artifact Choices:\nEmblem of Severed Fate (4): This set works best for Yae in multi-target scenarios where her Elemental Burst hits multiple enemies and she is bursting every rotation. This set also provides more value if she's used WITHOUT Raiden or Fischl (due to the higher ER requirements).\nGolden Troupe (4): Yae's best artifact set in single target. It is also the preferred choice if Yae does not Burst.\nThundersoother (4): Assuming you are able to maintain 100% uptime on its passive, this is competitive to be Yae's BiS set. This set works best for Yae in Electro-charged teams.\nTenacity of the Millelith (4): This set trades off a portion of Yae's damage in return for a party wide 20 ATK% buff. If you have good pieces as a result of farming Pale Flame (4) (for Eula or otherwise) this can be a good option for her. Not recommended to specifically farm this set for Yae.\n\nRegarding Talent Priority:  Do note that Yae's Elemental Burst does more damage than her Elemental Skill when it hits multiple enemies, and in some setups requiring high ER its more efficient to simply ult every second rotation rather than try to stack enough ER substats.\n\nOFF-FIELD DPS\nRegarding Weapon Choices:\nSolar Pearl: This weapon benefits a lot from refines and attack buffs like Bennett. [R5] Solar Pearl without buffs, or a low refine Solar Pearl with Bennett buff can perform similar to Skyward Atlas. Note that you should do a Normal Attack when you swap in and before you swap out of Yae Miko to keep good uptime on the passive.\nHakushin Ring: This weapon's passive can buff your other team members, which may be more beneficial than Yae Miko's personal damage depending on the team and rotation used. Note that the passive cannot be triggered when off-field.\n\nBig thanks to Fob#6835 for helping us with the weapon/artifact rankings. \n\nOFF-FIELD AGGRAVATE DPS\nRegarding Weapon Choices:\nA Thousand Floating Dreams: The team EM buff this weapon provides may make it desirable over other options.\nThe Widsith: At [R5] this weapon is equal to A Thousand Floating Dreams.\nSolar Pearl: At [R5] this weapon is better than Tome of the Eternal Flow.\nHakushin Ring: This weapon's passive can buff your other team members, which may be more beneficial than Yae Miko's personal damage depending on the team and rotation used. Note that the passive cannot be triggered when off-field.\n\nBig thanks to quinslay for helping us with the weapon and artifact rankings.",
    "builds": [
      {
        "name": "OFF-FIELD DPS ✩",
        "artifactMainStats": "Sands - Energy Recharge / ATK%\nGoblet - Electro DMG \nCirclet - Crit Rate / DMG\n",
        "artifactSubStats": "1. Crit Rate / DMG\n2. ATK%\n3. Energy Recharge\n4. Elemental Mastery\n5. Flat ATK",
        "talentPriority": "1. Skill\n2. Burst*",
        "abilityTips": "Start your rotations with Yae's Elemental Skill to amplify her Elemental Burst damage. \n\nBurst combo:\n- Skill > Skill > Skill > Burst > Skill > Skill > Skill\n\n(After the first set of EEE you usually swap out and go through your buff rotation before swapping back to burst)\n\nTake note that none of Yae Miko's abilities snapshot.\n",
        "weapons": [
          "kagura_s_verity",
          "skyward_atlas",
          "lost_prayer_to_the_sacred_winds",
          "memory_of_dust",
          "solar_pearl",
          "a_thousand_floating_dreams",
          "oathsworn_eye",
          "the_widsith",
          "hakushin_ring",
          "mappa_mare"
        ],
        "artifactSets": [
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "golden_troupe"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "emblem_of_severed_fate"
            }
          },
          {
            "type": "choose-2",
            "options": [
              {
                "type": "set",
                "id": "thundering_fury"
              },
              {
                "type": "set",
                "id": "emblem_of_severed_fate"
              },
              {
                "type": "group",
                "id": "18-atk"
              }
            ]
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "thundersoother"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "tenacity_of_the_millelith"
            }
          }
        ]
      },
      {
        "name": "OFF-FIELD AGGRAVATE DPS\n ✩",
        "artifactMainStats": "Sands - Energy Recharge / Elemental Mastery / ATK%\nGoblet - Electro DMG \nCirclet - Crit Rate / DMG\n",
        "artifactSubStats": "1. Crit Rate / DMG\n2. Elemental Mastery\n3. ATK%\n4. Energy Recharge\n5. Flat ATK",
        "talentPriority": "1. Skill\n2. Burst*",
        "abilityTips": "Same as above.",
        "weapons": [
          "kagura_s_verity",
          "a_thousand_floating_dreams",
          "tome_of_the_eternal_flow",
          "lost_prayer_to_the_sacred_winds",
          "skyward_atlas",
          "the_widsith",
          "tulaytullah_s_remembrance",
          "solar_pearl",
          "oathsworn_eye",
          "hakushin_ring",
          "mappa_mare"
        ],
        "artifactSets": [
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "gilded_dreams"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "emblem_of_severed_fate"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "golden_troupe"
            }
          },
          {
            "type": "choose-2",
            "options": [
              {
                "type": "set",
                "id": "thundering_fury"
              },
              {
                "type": "set",
                "id": "noblesse_oblige"
              },
              {
                "type": "set",
                "id": "golden_troupe"
              },
              {
                "type": "group",
                "id": "18-atk"
              },
              {
                "type": "group",
                "id": "80-em"
              }
            ]
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "thundersoother"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "tenacity_of_the_millelith"
            }
          }
        ]
      }
    ]
  },
  {
    "nameId": "cyno",
    "element": "electro",
    "weapon": "polearm",
    "notes": "Calculations can be found here\n\nQUICKBLOOM/HYPERBLOOM DPS\nCyno in Quickbloom/Hyperbloom involves building for a mixture of talent, Aggravate and Hyperbloom damage with a Hydro unit on the team. This is his highest damage setup at [C0]. However, at [C2] and above Aggravate teams become more competitive.  \n\n **Weapon Rankings Assuming a Significant Amount of Hydro Application from an Off Field Unit**\nRegarding Weapon Choices:\nEnergy Recharge Weapons: In teams where energy is scarce, such as teams without another Favonius weapon or an Electro user, these weapons can be desired for the Energy Recharge it gives. \nSkyward Spine: This weapon may perform equal to or better than White Tassel [R5] if the ATK Speed it gives is utilized to hit more of Cyno's Normal Attacks.\n\nRegarding Artifact Sets:\nMarechaussee Hunter (4): This set is specifically usable when pairing Cyno with Furina, a Quickbloom variant which wants reliable teamwide healing (ideally Baizhu). In this team, it performs similarly to Gilded Dreams (4). \n\nRegarding Mainstat Choices:\nAny combination of Elemental Mastery, Electro DMG Bonus, and Crit Rate / DMG is effective on Cyno. With consistent Hydro application, his highest damage combination is Elemental Mastery Sands, Electro DMG Bonus Goblet, and Elemental Mastery Circlet. However, the mainstats are extremely close in damage, so it should be determined through the value of the substats on your pieces.\n\nAGGRAVATE DPS\nCyno is a DPS character that uses his burst to change stance and deal Electro damage. The damage dealt during this stance is Normal Attack damage so burst damage buffs will not affect him. Cyno in Aggravate focuses solely on doing high personal damage with his burst stance with other Dendro and Electro characters.\n\nRegarding Weapon Choices:\nSkyward Spine: In teams where Cyno does not need the Energy Recharge from this weapon, do not use this weapon. This weapon may perform equal to or better than White Tassel [R5] if the ATK Speed it gives is utilized to hit more of Cyno's Normal Attacks.\nKitain Cross Spear: This weapon is especailly competitive with the options higher on the list if Cyno is not being run with an Electro battery.\nDeathmatch: At [R5], this weapon performs similarly to Primordial Jade Winged-Spear.\n\nRegarding Artifact Sets:\nThundering Fury (4): In optimal conditions, this is Cyno's best artifact set. This set is an especially competitive option when Cyno is the only Electro character in the team, as the extra Elemental Skill casts help alleviate his energy issues. Do note that casting his skill off cooldown with this set might lead to missing Endseer stance windows. It is highly recommended to use a shielder with Cyno with this set.\nGilded Dreams (4): This artifact set is better than Gladiator's Finale (4) on Staff of the Scarlet Sands and White Tassel.\nThundersoother (4): If you can guarantee 100% uptime on this set, it performs better than Gladiator's Finale (4). However, satifying this condition is infeasible on most teams.\n\nRegarding Main Stat Choices:\nSands: Elemental Mastery versus ATK% is heavily dependant on the weapon and team Cyno is in. It is recommended to test each and/or consult an optimizer.\nCirclet: With Staff of the Scarlet Sands, Elemental Mastery may be used as the circlet mainstat.",
    "builds": [
      {
        "name": "QUICKBLOOM / HYPERBLOOM DPS\n ✩",
        "artifactMainStats": "Sands - Elemental Mastery\nGoblet - Electro DMG / Elemental Mastery\nCirclet - Crit Rate / DMG / Elemental Mastery",
        "artifactSubStats": "1. Energy Recharge\n2. Elemental Mastery\n3. Crit Rate / DMG\n4. ATK%",
        "talentPriority": "1. Burst\n2. Skill",
        "abilityTips": "Rotations:\n\nThundering Fury (4):\nE N1 Q E 6[N4E]\n\nNon-Thundering Fury:\nE N1 Q N2E 3[N5 N2E]\n\n*E = Elemental Skill, N = Normal Attack, Q = Elemental Burst. ",
        "weapons": [
          "staff_of_the_scarlet_sands",
          "ballad_of_the_fjords",
          "primordial_jade_winged_spear",
          "deathmatch",
          "lumidouce_elegy",
          "staff_of_homa",
          "missive_windspear",
          "kitain_cross_spear",
          "dragon_s_bane",
          "skyward_spine",
          "favonius_lance"
        ],
        "artifactSets": [
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "thundering_fury"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "gilded_dreams"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "flower_of_paradise_lost"
            }
          },
          {
            "type": "choose-2",
            "options": [
              {
                "type": "set",
                "id": "thundering_fury"
              },
              {
                "type": "group",
                "id": "80-em"
              },
              {
                "type": "group",
                "id": "80-em"
              }
            ]
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "gladiator_s_finale"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "marechaussee_hunter"
            }
          }
        ]
      },
      {
        "name": " AGGRAVATE DPS",
        "artifactMainStats": "Sands - Elemental Mastery / ATK%*\nGoblet - Electro DMG\nCirclet - Crit Rate / DMG ",
        "artifactSubStats": "1. Energy Recharge\n2. Crit Rate / DMG \n3. ATK% \n~= Elemental Mastery",
        "talentPriority": "1. Burst \n2. Skill ",
        "abilityTips": "Rotations:\n\nThundering Fury (4):\nE N1 Q E 6[N4E]\n\nNon-Thundering Fury:\nE N1 Q N2E 3(N5 N2E)",
        "weapons": [
          "staff_of_the_scarlet_sands",
          "primordial_jade_winged_spear",
          "ballad_of_the_fjords",
          "staff_of_homa",
          "lumidouce_elegy",
          "deathmatch",
          "skyward_spine",
          "kitain_cross_spear",
          "favonius_lance"
        ],
        "artifactSets": [
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "thundering_fury"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "gladiator_s_finale"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "gilded_dreams"
            }
          },
          {
            "type": "choose-2",
            "options": [
              {
                "type": "set",
                "id": "thundering_fury"
              },
              {
                "type": "set",
                "id": "emblem_of_severed_fate"
              },
              {
                "type": "group",
                "id": "18-atk"
              },
              {
                "type": "group",
                "id": "80-em"
              }
            ]
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "thundersoother"
            }
          }
        ]
      }
    ]
  },
  {
    "nameId": "clorinde",
    "element": "electro",
    "weapon": "sword",
    "notes": "DPS\nClorinde is an Electro DPS who primarily deals damage with her Elemental Skill, which puts her into the Night Vigil state. Attacks during this state grant her a Bond of Life, and she can clear her Bond of Life by using her Elemental Skill again while in the Night Vigil state. It should be noted that while in the Night Vigil state, outside healing sources give Clorinde a Bond of Life instead of healing her. Clorinde's Elemental Burst also grants her a Bond of Life that increases based on her talent level.\n\nRegarding Weapon Choices:\nHaran Geppaku Futsu, Primoridal Jade Cutter: Be careful when using these weapons as it is easy to overcap on Crit Rate due to Clorinde's A4 talent giving her a free 20% Crit Rate.\nMistsplitter Reforged: Maximizing Stacks requires Clorinde to use her Elemental Burst before her Elemental Skill.\nFreedom-Sworn: This weapon loses significant value outside of Dendro-based teams.\nThe Black Sword: At [R5], this weapon will perform similarly to Primordial Jade Cutter.  \n\nRegarding Artifact Sets:\nThundering Fury (4): This set pulls ahead of Fragment of Harmonic Whimsy if Clorinde is played in Quickbloom with Furina, and is competitive with Fragment of Harmonic Whimsy in Aggravate.\n\nRegarding Main Stat Choices:\nSands: In Quickbloom, EM sands performs similarly to ATK% sands.\n\nRegarding Substats:\nElemental Mastery: In Quickbloom scenarios, EM has a similar priority to ATK%, and has a lower priority in Aggravate. It should not be built outside of Dendro-based teams.\nEnergy Recharge: Having ER rolls can allow Clorinde to be able to Burst every rotation, which is useful, however, ER should not be prioritized.\n\nRegarding Talent Priority:\nIt is recommended to bring Clorinde's Elemental Burst talent to at least Level 7 to take full advantage of her A4 talent. This also allows for the Burst rotations as seen in the Ability Tips section.",
    "builds": [
      {
        "name": " DPS\n ✩",
        "artifactMainStats": "Sands - ATK% / Elemental Mastery*\nGoblet - Electro DMG\nCirclet - Crit Rate / DMG",
        "artifactSubStats": "1. Crit Rate / DMG\n2. ATK%\n3. Elemental Mastery*\n4. Energy Recharge*",
        "talentPriority": "1. Skill\n2. Burst*",
        "abilityTips": "Skill Combos:\n\nWith Burst:\n\nQ > E > E > 5N3E > N2 or N3\n\nQ > E > 6N3E\n\nWithout Burst:\n\nE > 6N3E\n\nN = Normal Attack; E = Elemental Skill; Q = Elemental Burst",
        "weapons": [
          "absolution",
          "light_of_foliar_incision",
          "haran_geppaku_futsu",
          "mistsplitter_reforged",
          "primordial_jade_cutter",
          "uraku_misugiri",
          "freedom_sworn",
          "finale_of_the_deep",
          "the_black_sword"
        ],
        "artifactSets": [
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "fragment_of_harmonic_whimsy"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "gladiator_s_finale"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "thundering_fury"
            }
          }
        ]
      }
    ]
  },
  {
    "nameId": "xingqiu",
    "element": "hydro",
    "weapon": "sword",
    "notes": "OFF-FIELD DPS\nXingqiu's Off-Field DPS build centers on his ability to deal damage off-field with his Elemental Burst. His ER needs can change a lot based on team and constellations, and so do his list of recommended weapons. As such this serves a general idea of which weapons are most viable on Xingqiu.\n\nRegarding Weapon Choices:\nThe weapon rankings assume you are running enough Energy Recharge to get Xingqiu's burst up off cooldown. If you are not, select an Energy Recharge weapon from this list.\nWolf-Fang: At [R5] this weapon is about equal to Haran Geppaku Futsu and Mistsplitter Reforged. It surpasses these weapons if Xingqiu is used on-field.\nFinale of the Deep: This weapon's value depends on the healing capabilities of your team. It also scales heavily with refinements. At [R5] with a cleared Bond of Life, this weapon can rival Summit Shaper.\nEnergy Recharge Swords: Weapons that provide some form of Energy regen for Xingqiu become more valuable in teams where Xingqiu requires more ER to burst every rotation.\nFavonius Sword: The Energy this weapon can provide to teammates is a useful support option and may lead Favonius to be better than the above options.\nSacrificial Sword [R3+]: This weapon is extremely inconsistent and extends rotation lengths leading to an overall loss in DPS. This weapon does become more useful if Xingqiu is not the only Hydro character on the team. It is not recommended to use this weapon if it is not yet R3.\nSapwood Blade: This weapon can be especially useful as a support weapon in Dendro based teams.\nFreedom Sworn: This ranking assumes Xingqiu can reliably proc the passive by triggering Elemental Reactions such as Electro-Charged or Bloom. The buff it gives to the team is not accounted for here, but it is well worthy of noting.\nLion's Roar: This weapon is particularly useful in teams where Electro or Pyro auras are present. If they are, this weapon can rival Summit Shaper.\n\nBig thanks to Quincy#6965 for helping us with the weapon calculations.\n\nRegarding Artifact Sets:\nEmblem of Severed Fate (4): This set falls off in terms of damage if Xingqiu has less than 130% Energy Recharge.\nNoblesse Oblige (4): Offers party-wide ATK boost, you can use this set on Xingqiu if nobody else on the party is able to use it better. If someone else on the team already has Noblesse Oblige (4), Noblesse Oblige (4) should not be used.\nBlizzard Strayer (4): This set is only recommended on a freeze team to optimize Xingqiu's stats since he can mildly disregard Crit Rate and build Crit Damage instead for more damage output. Despite it outperforming Emblem of Severed Fate (4) within this niche, it is generally not recommended to specifically farm for this set.\n\nRegarding Main Stats Priority:\nIdeally you would run an ATK% Sands when your ER needs are fulfilled. ER needs can be found in the Xingqiu Mastersheet.",
    "builds": [
      {
        "name": "OFF-FIELD DPS ✩",
        "artifactMainStats": "Sands - Energy Recharge / ATK%*\nGoblet - Hydro DMG\nCirclet - Crit Rate / DMG",
        "artifactSubStats": "1. Crit Rate / DMG\n2. ATK%\n3. Energy Recharge*\n4. Elemental Mastery\n5. Flat ATK\n\n**Prioritize Energy Recharge first if you can't burst off cooldown",
        "talentPriority": "1. Burst\n2. Skill\n",
        "abilityTips": "Rotations:\nQuick E Q\nLonger rotation (C4+) Q N1 E D N2*\n\n*One can use the Book trick method instead of the final N2 which involves pausing the game by opening a menu for a second to allow him to collect the particles.",
        "weapons": [
          "primordial_jade_cutter",
          "mistsplitter_reforged",
          "haran_geppaku_futsu",
          "light_of_foliar_incision",
          "absolution",
          "skyward_blade",
          "summit_shaper",
          "favonius_sword",
          "fleuve_cendre_ferryman",
          "finale_of_the_deep",
          "festering_desire",
          "sacrificial_sword",
          "amenoma_kageuchi",
          "harbinger_of_dawn",
          "sapwood_blade",
          "freedom_sworn",
          "lion_s_roar"
        ],
        "artifactSets": [
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "emblem_of_severed_fate"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "noblesse_oblige"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "nymph_s_dream"
            }
          },
          {
            "type": "choose-2",
            "options": [
              {
                "type": "set",
                "id": "noblesse_oblige"
              },
              {
                "type": "set",
                "id": "emblem_of_severed_fate"
              },
              {
                "type": "group",
                "id": "18-atk"
              }
            ]
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "blizzard_strayer"
            }
          }
        ]
      }
    ]
  },
  {
    "nameId": "barbara",
    "element": "hydro",
    "weapon": "catalyst",
    "notes": "SUPPORT\nUse Elemental Skill and/or Elemental Burst and immediately switch. Building ER is not recommended on Support Barbara as her burst should be used as a last resort and should not be expected to be cast every rotation. This is further compounded by the fact that Barbara has no particle generation.\n \nRegarding Weapon Choices: \nEverlasting Moonglow: For Electro-Charged teams, this weapon will provide the highest personal damage for Barbara. However, Thrilling Tales of Dragon Slayers will still provide the highest team damage due to its 48 ATK% buff. \n\nRegarding Artifact Sets:\nOcean-Hued Clam (4): This set is often the best option for support Barbara, as it provides healing bonus along with some personal damage through Clam procs. \nInstructor (4): The Hydro application from Elemental Skill can be used to trigger an elemental reaction and provide a teamwide Elemental Mastery buff.\n\nBLOOM DPS\nThis build is specifically for Bloom teams where Barbara is the character intended to trigger the majority of Blooms.\n\nRegarding Aritfact Sets:\nOcean-Hued Clam (4): This set can do more damage than other options in certain situations, while also increasing Barbara's healing to deal with Bloom self-damage. ",
    "builds": [
      {
        "name": "SUPPORT\n✩",
        "artifactMainStats": "Sands - HP%\nGoblet - HP%\nCirclet - Healing Bonus",
        "artifactSubStats": "1. HP%\n2. Flat HP",
        "talentPriority": "1. Skill\n2. Burst",
        "abilityTips": "Barbara's skill gives you a pulse of healing every 5 seconds, every pulse will imbue you with a Hydro status, that means it can be used for status-cleansing (Pyro in specific, while other elements may take more pulses).\r\n\r\nTake note that Hydro reacting with Cryo status will freeze you in place, her skill should be used in consideration of the environment",
        "weapons": [
          "thrilling_tales_of_dragon_slayers",
          "everlasting_moonglow",
          "prototype_amber",
          "favonius_codex"
        ],
        "artifactSets": [
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "ocean_hued_clam"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "maiden_beloved"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "group",
              "id": "20-hp"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "instructor"
            }
          }
        ]
      },
      {
        "name": "BLOOM DPS",
        "artifactMainStats": "Sands - Elemental Mastery\nGoblet - Elemental Mastery\nCirclet - Elemental Mastery",
        "artifactSubStats": "1. Elemental Mastery\n2. Energy Recharge",
        "talentPriority": "1. Skill\n2. Burst",
        "abilityTips": "",
        "weapons": [
          "a_thousand_floating_dreams",
          "sacrificial_fragments",
          "magic_guide"
        ],
        "artifactSets": [
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "flower_of_paradise_lost"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "gilded_dreams"
            }
          },
          {
            "type": "double",
            "options": [
              {
                "type": "group",
                "id": "80-em"
              },
              {
                "type": "group",
                "id": "80-em"
              }
            ]
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "ocean_hued_clam"
            }
          }
        ]
      }
    ]
  },
  {
    "nameId": "candace",
    "element": "hydro",
    "weapon": "polearm",
    "notes": "SUPPORT\nCandace is a 4* Hydro Support that specializes in providing off-field Hydro application with her HP% scaling Burst, infusing the autos of melee allies (Sword/Claymore/Polearm) with Hydro via her Burst's Prayer of the Crimson Crown effect, and providing defensive utility with her Elemental Skill. It is worth noting that Candace will never be the strongest option for your teams; at the cost of having different kinds of utility options in one kit, she will never be the best at them. Her damage contribution will be surpassed by other offensive-type Hydro supports like Xingqiu and her defensive capabilities are outclassed by the healing capabilities of the other Hydro healers. Thus, it is recommended to focus on her strength as a consistent Hydro applier by getting as much Energy Recharge as possible, which will help her maintain a consistent uptime on her Burst (her main source of Hydro application). For this reason, Candace's weapon and artifact rankings will focus on getting the highest amounts of Particle/Energy generation and Recharge.\n\nRegarding Weapon Choices:\nFavonius Lance: This is going to be Candace's BIS option because of her drastically high ER requirement. If she's the only Hydro character in one team, Candace will need nearly 300% ER to maintain a consistent burst uptime. With another Hydro character to help her out, this ER requirement is lowered down to the 200-250% ER range. This kind of ER requirement is difficult to reach with most polearms, but Favonius Lance makes it possible because each proc of its passive cuts down this requirement by 20% (1 proc --> -20% ER req). Note that with this polearm equipped, Crit Rate also needs to be prioritized on Candace to ensure that its passive is constantly proc'd.\nEngulfing Lightning: This polearm offers a large amount of ER%, which makes it the next best option for Candace after Favonius Lance.\nStaff of Homa and Deathmatch: These weapons can be considered if you want Candace to have high personal damage, which is usually notable at [C6]\n\"The Catch\": This polearm is going to be Candace's strongest F2P option, due to its high amount of ER and burst-enhancing capabilities.\n\nRegarding Artifact Choices: \nEmblem of Severed Fate (4) and Emblem of Severed Fate (2) + Hydro Damage Bonus/Noblesse (2): With Candace, the only \"necessary\" stat from her artifacts is the 20% ER you get from EOSF's 2-piece effect. Emblem of Severed Fate's 4-piece effect allows her to better capitalize on the high amounts of ER% that you'll be equipping on her, which makes it her strongest option. However, EoSF is a highly contested artifact set and thus it is possible for you to end up using the 2-piece + 2-piece alternatives listed above. ",
    "builds": [
      {
        "name": "SUPPORT \n✩",
        "artifactMainStats": "Sands - Energy Recharge / HP%\nGoblet - HP% / Hydro DMG\nCirclet - HP% / Crit Rate / DMG \n\n",
        "artifactSubStats": "1. Energy Recharge \n2. Crit Rate* \n3. HP%\n4. Flat HP \n\n*Crit Rate only if running Favonius Lance",
        "talentPriority": "1. Burst\n2. Skill",
        "abilityTips": "In some teams, Candace's hold Elemental Skill cooldown is too long for rotations to work properly, so if Candace isn't C4, its recommended to avoid getting hit and to do a tap Skill as quick as possible.",
        "weapons": [
          "favonius_lance",
          "engulfing_lightning",
          "staff_of_homa",
          "deathmatch",
          "the_catch",
          "prototype_starglitter",
          "skyward_spine",
          "black_tassel"
        ],
        "artifactSets": [
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "emblem_of_severed_fate"
            }
          },
          {
            "type": "choose-2",
            "options": [
              {
                "type": "set",
                "id": "noblesse_oblige"
              },
              {
                "type": "set",
                "id": "emblem_of_severed_fate"
              },
              {
                "type": "group",
                "id": "20-hp"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "nameId": "tartaglia",
    "element": "hydro",
    "weapon": "bow",
    "notes": "DPS\nThe Weapon Rankings here are under the assumption that Childe is used with Bennett and Vaporizes his Burst, aswell as using the optimal attack combos listed in the Ability Tips section.\n\nRegarding Weapon Choices:\nPolar Star: Has varied performance depending on how many passive stacks you get. Getting 2-3 stacks at the start of your rotation can perform better than Thundering Pulse while getting no stacks can perform worse than Skyward Harp.  This only applies if you are Vaporizing Childe Burst together with Bennett. In teams without Bennett, Polar Star will always perform better than the other options. 3 stacks can be achieved by doing Skill + 1 Normal + 1 Charged Attack before setting up your Vaporize Burst. If your Skill is still on cooldown, a fully Charged Aimed shot against a riptide affected target, OR a Ranged Normal + quick Aimed shot gives 2 stacks (which can be followed by Skill for the 3rd stack).\nThundering Pulse: Slightly better than Skyward Harp depending on rotations - the more time you spend doing Normal Attacks, the more it pulls ahead over Skyward Harp, but it's not recommended to extend your Childe's melee rotation for this.\nThe Viridescent Hunt: Offers a valuable passive that helps a lot in grouping enemies, which can offer a ton of damage from Riptide.\nBlackcliff Warbow: Due to inconsistency of gaining stacks, falls off compared to other weapons at higher refinements.\nPrototype Crescent: Requires you to trigger its passive by hitting the enemy's weak points, falls off if compared with other options without the passive triggered.\nKing's Squire: Requires a different setup using his Charged Attack as it's passive ends when swapping out.\nThe Stringless: Main DPS Childe should only use this weapon in teams where you are Vaporizing your Burst, as the Elemental Mastery substat loses a lot of value in other teams. If Childe is being used as a Nuke Support only for his Vaporized Burst damage, R5 Stringless will rank just below Thundering Pulse. Note that the Stringless Elemental Skill passive does not affect Childe's melee stance auto attacks.\n\nRegarding Artifact Sets:\n+15% Hydro DMG set (2) +18% ATK set (2): This set is only about 1-2 substats behind Heart of Depth (4), you can opt out for this set instead if you already have decent pieces.\nShimenawa's Reminiscence (4): Due to this set requiring Childe to have around 150% Energy Recharge to reliably burst every rotation, it falls behind the other options. However, it outperforms Heart of Depth (4) if used in a single rotation setting (ignoring ER).",
    "builds": [
      {
        "name": "DPS\n ✩",
        "artifactMainStats": "Sands - ATK%\nGoblet - Hydro DMG\nCirclet - Crit Rate / DMG",
        "artifactSubStats": "1. Crit Rate / DMG\n2. ATK%\n3. Elemental Mastery\n4. Energy Recharge\n5. Flat ATK",
        "talentPriority": "1. Skill\n2. Burst\n3. Normal Attack",
        "abilityTips": "Optimal skill duration for [C0]: 7s, 9s or 12s.\nOptimal skill duration for [C1]: 9s, 11s or 14s.\n\nMelee Burst: Only to be used in situations where you need only 1 rotation to clear as the ER requirement to maintain burst uptime is quite high (170-190%), you'll always want to start your rotations with Ranged Burst since it refunds energy to maintain your rotation well.\n\nSkill Combo:\n- 2 NA + 1 CA (Optimal)\n- 3 NA + 1 CA (Recommended)\n- 5 NA + 1 CA (Recommended combo if using Rust or Thundering Pulse)\n\n*NA = Normal Attack, CA = Charged Attack\n\nThe Optimal combo provides more damage but consumes more stamina. Recommended combo provides slightly less damage but is stamina neutral and what most weapons should use. \n",
        "weapons": [
          "polar_star",
          "aqua_simulacra",
          "hunter_s_path",
          "thundering_pulse",
          "skyward_harp",
          "amos_bow",
          "prototype_crescent",
          "the_viridescent_hunt",
          "mouun_s_moon",
          "fading_twilight",
          "blackcliff_warbow",
          "the_stringless",
          "elegy_for_the_end"
        ],
        "artifactSets": [
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "nymph_s_dream"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "heart_of_depth"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "group",
              "id": "18-atk"
            }
          },
          {
            "type": "double",
            "options": [
              {
                "type": "set",
                "id": "noblesse_oblige"
              },
              {
                "type": "group",
                "id": "18-atk"
              }
            ]
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "shimenawa_s_reminiscence"
            }
          }
        ]
      }
    ]
  },
  {
    "nameId": "mona",
    "element": "hydro",
    "weapon": "catalyst",
    "notes": "DPS\nThis build is best utilised at [C2], but can work without it. Do note that several 4 stars will out-dps Mona, as Mona is better off as a Sub-DPS/Support.\n\nNUKE\nMona's Elemental Skill provides taunt and procs wet status on enemies, her Elemental Burst is also capable of rendering smaller enemies immobile (Mona needs to be at least 20 levels within the enemy's level) and providing a huge damage burst (and additional omen debuff after proc).\n\nRegarding Artifact Sets:\nInstructor (4): A niche set only really used for certain Hu Tao teams nuke setups.\n\nLook to the Nuke Mona's Ability Tip section for Vaporize Nuke set up instructions.\n\nBURST SUPPORT\nMona can use her Burst to apply the Omen debuff on enemies and allow teammates to deal more damage. This is most commonly seen in freeze teams. Mona's main role on a freeze team is to provide Omen debuff from her burst as it is extendable via Freeze mechanics. Note that you must apply Cryo before casting Mona's Elemental Burst for the extension to happen. Omen Freeze extension can be done by reapplying Cryo and Hydro aura consistently (this can be done with Cryo / Hydro infused Venti Elemental Burst + on-field Cryo / Hydro aura).\n\nRegarding Weapon Choices:\nThrilling Tales of Dragon Slayers: Generally the best option on Freeze Support Mona because she can furthermore buff the ATK of your Main DPS. This however comes with an assumption that with Thrilling Tales of Dragon Slayers, you still have 100% Elemental Burst uptime. If you do not, pick the other Energy Recharge weapon options for more Elemental Burst uptime.\nA Thousand Floating Dreams: If the team does not need Elemental Mastery this weapon should not be used on Mona. If the team does need Elemental Mastery and does not benefit heavily from ATK%, this weapon can compete with Thrilling Tales of Dragon Slayers.\n\nRegarding Artifact Sets:\nTenacity of the Millelith (4): Run this set if there's already another character with Noblesse Oblige (4) on the team.\n",
    "builds": [
      {
        "name": "DPS",
        "artifactMainStats": "Sands - ATK%\nGoblet - Hydro DMG\nCirclet - Crit Rate / DMG",
        "artifactSubStats": "1. Crit Rate / DMG\n2. ATK%\n3. Elemental Mastery\n4. Energy Recharge\n",
        "talentPriority": "1. Burst\n2. Normal Attack\n3. Skill",
        "abilityTips": "\n",
        "weapons": [
          "skyward_atlas",
          "the_widsith",
          "lost_prayer_to_the_sacred_winds",
          "solar_pearl",
          "dodoco_tales",
          "blackcliff_agate",
          "mappa_mare"
        ],
        "artifactSets": [
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "heart_of_depth"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "noblesse_oblige"
            }
          },
          {
            "type": "choose-2",
            "options": [
              {
                "type": "set",
                "id": "noblesse_oblige"
              },
              {
                "type": "group",
                "id": "18-atk"
              },
              {
                "type": "group",
                "id": "80-em"
              }
            ]
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "wanderer_s_troupe"
            }
          }
        ]
      },
      {
        "name": "NUKE\n ✩",
        "artifactMainStats": "Sands - ATK% / Energy Recharge / Elemental Mastery\nGoblet - Hydro DMG\nCirclet - Crit Rate / DMG ",
        "artifactSubStats": "1. Crit Rate / DMG\n2. Energy Recharge\n3. ATK%\n4. Elemental Mastery",
        "talentPriority": "1. Burst\n2. Skill",
        "abilityTips": "To make Mona's burst damage trigger the Vaporize 2.0x multiplier:\n1. Apply Pyro on enemy\n2. Cast Burst (should react and remove Pyro status on the enemy after using Burst)\n3. Wait 2.5 seconds for Mona's burst ICD (Mona should stay on field if you have Bennett, to keep the buff)\n4. Swap to Pyro character and apply Pyro on enemy\n5. Burst will pop after enemy gets hit, applying Hydro and Vaporizing her damage.\n\n",
        "weapons": [
          "the_widsith",
          "skyward_atlas",
          "memory_of_dust",
          "lost_prayer_to_the_sacred_winds",
          "solar_pearl",
          "mappa_mare"
        ],
        "artifactSets": [
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "emblem_of_severed_fate"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "noblesse_oblige"
            }
          },
          {
            "type": "choose-2",
            "options": [
              {
                "type": "set",
                "id": "noblesse_oblige"
              },
              {
                "type": "set",
                "id": "emblem_of_severed_fate"
              },
              {
                "type": "group",
                "id": "18-atk"
              },
              {
                "type": "group",
                "id": "80-em"
              }
            ]
          }
        ]
      },
      {
        "name": "BURST SUPPORT\n✩",
        "artifactMainStats": "Sands - Energy Recharge / ATK%\nGoblet - Hydro DMG / ATK%\nCirclet - Crit Rate\n\n**Offensive stats aren't actually needed on a Freeze Support Mona, focus on Artifact Set Bonus",
        "artifactSubStats": "1. Energy Recharge\n2. Crit Rate\n3. ATK%\n\n**Offensive stats aren't needed, just stack ER for comfortable Elemental Burst uptime",
        "talentPriority": "1. Burst\n2. Skill",
        "abilityTips": "Mona's Burst applies bubble and Omen debuff upon cast, the count down timer only begins when the bubble is broken.\n\nFrozen enemies can have their bubbles preserved as long as enemies stay in a frozen state. This technique makes Mona a priority Support for Freeze DPS teams.",
        "weapons": [
          "thrilling_tales_of_dragon_slayers",
          "favonius_codex",
          "a_thousand_floating_dreams",
          "prototype_amber",
          "wine_and_song"
        ],
        "artifactSets": [
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "noblesse_oblige"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "instructor"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "tenacity_of_the_millelith"
            }
          },
          {
            "type": "double",
            "options": [
              {
                "type": "group",
                "id": "20-er"
              },
              {
                "type": "group",
                "id": "20-er"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "nameId": "sangonomiya_kokomi",
    "element": "hydro",
    "weapon": "catalyst",
    "notes": "SUPPORT\nSupport Kokomi focuses on just using her Elemental Burst before her Elemental Skill's duration ends to refresh her skill duration. This allows 100% uptime on Hydro application from her Elemental Skill for Freeze / Electro-charge teams.\n\nRegarding Weapon Choices:\nHakushin Ring: This weapon can provide Elemental DMG% for the team in Electro-charged teams and will outperform Prototype Amber if you value damage more than healing.\nSacrificial Fragments: Can be useful as Kokomi won't need to use her Elemental Burst to reset her skill duration. This allows for smoother rotations as she will not face the problem of missing out on the reset for her Elemental Skill due to not casting Burst in time.\n\nRegarding Artifact Sets:\nTenacity of the Millelith (4): With proper extension of Kokomi's Elemental Skill, she can maintain near 100% uptime on this artifact set's 4 piece effect.\nOcean Hued Clam (4): This ranking assumes Kokomi is being used only for her Elemental Skill. If she is being used to attack onfield during Elemental Burst, this set may overtake Tenacity of the Millelith (4). \n\nRegarding Main Stats and Sub Stats: \nEnergy Recharge: Prioritise Energy Recharge first to ensure you can always use Elemental Burst before the Elemental Skill expires in order to maintain Hydro application. \n\nDPS\nDPS Kokomi aims to maximise her onfield damage during her Elemental Burst's duration. Outside of her Elemental Burst, her damage is lackluster and not worth building for.\n\nRegarding Weapon Choices:\nThrilling Tales of Dragon Slayers: Although this weapon doesn't provide as much personal damage for Kokomi, the 48% ATK buff is usually more worth in most cases. This can be her best weapon in for overall team DPS if you don't already have another Thrilling Tales of Dragon Slayers user in your team.\nHakushin Ring: This weapon can provide Elemental DMG% for the team in Electro-charged teams, and is the best choice in those situations.\n\nRegarding Artifact Sets:\nTenacity of the Millelith (4): Although this set offers the lowest personal damage for Kokomi, the 20% ATK team buff can sometimes be better for overall team DPS.\n\nBLOOM DPS\nThis build is specifically for Bloom teams where Kokomi is the character intended to trigger the majority of Blooms.\n\nRegarding Aritfact Sets:\nOcean-Hued Clam (4): This set can do more damage than other options in certain situations, while also increasing Kokomi's healing to deal with Bloom self-damage. However, this set is very resin inefficient and is thus not recommended to farm specifically for this set.",
    "builds": [
      {
        "name": "SUPPORT\n✩",
        "artifactMainStats": "Sands - Energy Recharge / HP%\nGoblet - HP%\nCirclet - Healing Bonus / HP%\n\n**Mainstats are not important for Tenacity of the Millelith (4) if you do not need the extra healing. Focus on Energy Recharge substats instead.",
        "artifactSubStats": "1. Energy Recharge\n2. HP%\n3. ATK%\n4. Flat HP\n5. Flat ATK\n\n",
        "talentPriority": "1. Skill\n2. Burst",
        "abilityTips": "Kokomi's Elemental Burst dynamically alters her skill's damage, this means that you cannot use her Burst to snapshot the buff onto the Skill and swap out.\n",
        "weapons": [
          "thrilling_tales_of_dragon_slayers",
          "prototype_amber",
          "hakushin_ring",
          "sacrificial_fragments"
        ],
        "artifactSets": [
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "tenacity_of_the_millelith"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "ocean_hued_clam"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "maiden_beloved"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "group",
              "id": "20-hp"
            }
          }
        ]
      },
      {
        "name": "DPS",
        "artifactMainStats": "Sands - HP% / Energy Recharge\r\nGoblet - Hydro DMG\r\nCirclet - Healing Bonus",
        "artifactSubStats": "1. HP%\n2. Energy Recharge\n3. ATK%\n~= Flat HP\n4. Elemental Mastery\n5. Flat ATK",
        "talentPriority": "1. Burst\n2. Normal Attack\n3. Skill",
        "abilityTips": "Due to Kokomi's high stamina cost on her Charged Attacks, her best attack strings are: \n\nAt [C0]: N2D \nAt [C1]: N3D*\n\n*N3D might result in a loss of Beidou Stormbreaker hits (DPS loss), and as such is only recommended in a Vaporize comp where the added Hydro application is favoured.\n\n*NA = Normal Attack, D = Dash\n",
        "weapons": [
          "everlasting_moonglow",
          "prototype_amber",
          "hakushin_ring",
          "thrilling_tales_of_dragon_slayers"
        ],
        "artifactSets": [
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "ocean_hued_clam"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "heart_of_depth"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "group",
              "id": "20-hp"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "tenacity_of_the_millelith"
            }
          }
        ]
      },
      {
        "name": "BLOOM DPS",
        "artifactMainStats": "Sands - Elemental Mastery\nGoblet - Elemental Mastery\nCirclet - Elemental Mastery",
        "artifactSubStats": "1. Elemental Mastery\n2. Energy Recharge\n3. HP%\n4. Flat HP",
        "talentPriority": "1. Skill\n2. Burst",
        "abilityTips": "",
        "weapons": [
          "a_thousand_floating_dreams",
          "sacrificial_fragments",
          "magic_guide",
          "fruit_of_fulfillment"
        ],
        "artifactSets": [
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "flower_of_paradise_lost"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "gilded_dreams"
            }
          },
          {
            "type": "double",
            "options": [
              {
                "type": "group",
                "id": "80-em"
              },
              {
                "type": "group",
                "id": "80-em"
              }
            ]
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "ocean_hued_clam"
            }
          }
        ]
      }
    ]
  },
  {
    "nameId": "kamisato_ayato",
    "element": "hydro",
    "weapon": "sword",
    "notes": "DPS\nDPS Ayato focuses on doing large amounts of on-field damage with his Elemental Skill and Elemental Burst. \n\nRegarding Weapon Choices:\nSkyward Blade: This ranking assumes Ayato needs 135% Energy Recharge to use his Burst every rotation. Its ranking changes based on his Energy Recharge Requirements.\nSummit Shaper: In teams where ATK buffs are scarce, this weapon has the potential to rival The Black Sword.\nFinale of the Deep: If you can reliably clear the Bond of Life, this weapon is better than the weapons ranked equal to it.\nLions Roar: In Electro-Charged teams, this weapon performs about equal to Summit Shaper.\nHarbinger of Dawn: Only recommended with a shielder. If shielded, this weapon is better than Finale of the Deep and can rival Splendor of Tranquil Waters in teams with high amounts of ATK buffs.\n\nRegarding Artifact Sets:\nEchoes of an Offering (4): The performance of this artifact set is inconsistent, and is based on user ping and other factors. It is not recommended to run this set unless your ping is consistently below 100. If you can achieve this, Echoes of an Offering (4) is only preferred on weapons with high amounts of DMG% such as Mistsplitter Reforged and Haran Geppaku Futsu. Otherwise, Heart of Depth (4) is preferred.\nNymph's Dream (4): Reliant on Ayato's Water Illusion hitting enemies which can be inconsistent against some content. Without the third stack of the passive, this set becomes about equal to +15% Hydro DMG set (2) +18% ATK set (2).\nBlizzard Strayer (4): When run in a Freeze Team, this is Ayato's best set. Note that it is not recommended to farm specifically for this set.\nThundering Fury (4): When run in an Electro-Charged team, this is Ayato's best set due to the Cooldown Reduction on Elemental Skill allowing for shorter rotations. Note that it is not recommended to farm specifically for this set.",
    "builds": [
      {
        "name": "DPS\n ✩",
        "artifactMainStats": "Sands - ATK%\nGoblet - Hydro DMG\nCirclet - Crit Rate / DMG",
        "artifactSubStats": "1. Crit Rate / DMG\n2. ATK%\n3. Energy Recharge\n4. HP%\n5. Elemental Mastery\n6. Flat ATK",
        "talentPriority": "1. Skill\n2. Burst",
        "abilityTips": "Try to activate Ayato's Elemental Burst before using his skill to maximize his Normal Attack DMG. Getting enough Energy Recharge for this is important, and varies based on team. Since the casting time is so long, it may not be worth snapshotting into buffs.\n\nThe amount of slashes Ayato can do during an Elemental Skill window is sometimes influenced by the player's set FPS.",
        "weapons": [
          "haran_geppaku_futsu",
          "primordial_jade_cutter",
          "mistsplitter_reforged",
          "light_of_foliar_incision",
          "the_black_sword",
          "skyward_blade",
          "splendor_of_tranquil_waters",
          "summit_shaper",
          "finale_of_the_deep",
          "kagotsurube_isshin",
          "harbinger_of_dawn",
          "the_flute",
          "sword_of_narzissenkreuz"
        ],
        "artifactSets": [
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "heart_of_depth"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "gladiator_s_finale"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "nymph_s_dream"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "group",
              "id": "18-atk"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "blizzard_strayer"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "thundering_fury"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "echoes_of_an_offering"
            }
          }
        ]
      }
    ]
  },
  {
    "nameId": "yelan",
    "element": "hydro",
    "weapon": "bow",
    "notes": "OFF-FIELD DPS\nYelan is an off-field DPS who is able to apply Hydro via her Elemental Burst, this part of her kit acts similarly to Xingqiu's Elemental Burst. Yelan mainly scales off HP%, so don't build her with ATK%. Yelan also wants a lot of Energy Recharge to be able to maintain her Elemental Burst uptime, this can decrease depending on the number of Hydro units or energy providers in the team.\n\nRegarding Weapon Choices:\nHunter's Path / Polar Star / Thundering Pulse / Skyward Harp: These weapons are stronger than Slingshot, however Yelan does not utilize them optimially. If you have another character that benefits from these weapons, it's recommended to prioritize these weapons on them, since these weapons are very small upgrades over Slingshot. It is not recommended to pull these weapons for Yelan specifically.\nElegy for the End: This weapon is to be used only in reaction based comps such as Vape Hu Tao, Yelan's personal damage is lower than other options on this list, but is more beneficial for the team's damage per rotation.\nMouun's Moon: This weapon works best at [R3+] and makes HP% Goblet potentially a stronger option instead of Hydro Bonus especially in comps with strong DMG% buffs.\nSacrificial Bow: This ideally needs to be at refinement [R3-R5] to function properly in most Yelan teams rotations without desyncing the rotation and extending her field time.\nAqua Simulacra: Can still perform well at high Energy Recharge as long as your minimum Energy Recharge requirements are met.\n\nRegarding Artifact Main Stats:\nGoblet: HP% Goblet is to be used only if the Hydro DMG% option has terrible substats and HP% option has great substats, or if Yelan has strong DMG% buffs such as Emblem of Severed Fate (4) + Mouun's Moon (especially with refinements) or Raiden + Kazuha and so on.\nOn top of that it's never recommended to run more than 2 HP% mainstat artifacts at a time.\n\nRegarding Talent Priority:\nNormal Attacks: Level this up only if you want to constantly use her Breakthrough Barbs.\n\nBig thanks to Vladone ツ#9281 and jstern25#1399 from Yelan Mains for helping us.                                  ",
    "builds": [
      {
        "name": "HIGH ENERGY REQUIREMENT\n(OFF-FIELD DPS)\n✩\n",
        "artifactMainStats": "Sands - Energy Recharge / HP%\nGoblet - Hydro DMG / HP%*\nCirclet - Crit Rate / Crit DMG / HP%",
        "artifactSubStats": "1. Energy Recharge*\n2. HP% \n~= Crit Rate / DMG\n3. Flat HP\n\n* Energy Recharge should be prioritised until requirements are met.",
        "talentPriority": "1. Burst\n2. Skill\n3. Normal Attack*",
        "abilityTips": "",
        "weapons": [
          "elegy_for_the_end",
          "favonius_warbow",
          "aqua_simulacra",
          "sacrificial_bow"
        ],
        "artifactSets": [
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "emblem_of_severed_fate"
            }
          },
          {
            "type": "choose-2",
            "options": [
              {
                "type": "set",
                "id": "noblesse_oblige"
              },
              {
                "type": "set",
                "id": "tenacity_of_the_millelith"
              },
              {
                "type": "set",
                "id": "emblem_of_severed_fate"
              }
            ]
          }
        ]
      },
      {
        "name": "LOW ENERGY REQUIREMENT\n(OFF-FIELD DPS)\n✩",
        "artifactMainStats": "Sands - Energy Recharge / HP%\nGoblet - Hydro DMG / HP%*\nCirclet - Crit Rate / Crit DMG / HP%",
        "artifactSubStats": "1. Energy Recharge*\n2. HP% \n~= Crit Rate / DMG\n3. Flat HP\n\n* Energy Recharge should be prioritised until requirements are met.",
        "talentPriority": "1. Burst\n2. Skill\n3. Normal Attack*",
        "abilityTips": "",
        "weapons": [
          "aqua_simulacra",
          "silvershower_heartstrings",
          "slingshot",
          "hunter_s_path",
          "polar_star",
          "thundering_pulse",
          "skyward_harp",
          "fading_twilight",
          "recurve_bow"
        ],
        "artifactSets": [
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "emblem_of_severed_fate"
            }
          },
          {
            "type": "choose-2",
            "options": [
              {
                "type": "set",
                "id": "noblesse_oblige"
              },
              {
                "type": "set",
                "id": "tenacity_of_the_millelith"
              },
              {
                "type": "set",
                "id": "emblem_of_severed_fate"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "nameId": "nilou",
    "element": "hydro",
    "weapon": "sword",
    "notes": "BLOOM SUPPORT\nAs a Bloom Support, Nilou's role is to maximize a team's Bloom Damage in teams of strictly Hydro and Dendro characters. Level 90 is highly recommended to maximize Nilou's HP and Bloom Damage\n\nRegarding Weapon Choices:\nFavonius Sword, Festering Desire and Sacrificial Sword: Strong options if opting to Burst every rotation. Favonius can potentially help other team members' energy needs. Do bear in mind though that Nilou strongly prefers Elemental Mastery weapons over Energy Recharge weapons in almost all circumstances.\n\nRegarding Artifact Sets:\n+80 Elemental Mastery set (2): These sets provide no benefit if Nilou isn't triggering Blooms.\n+15% Hydro DMG set (2): This is only really a viable option if Nilou is played mostly on-field instead of off-field.\nDeepwood Memories (4): Can be an option if other teammates are not Deepwood Memories holders.",
    "builds": [
      {
        "name": "BLOOM SUPPORT \n✩",
        "artifactMainStats": "Sands - HP% / Energy Recharge\nGoblet - HP%\nCirclet - HP%",
        "artifactSubStats": "1. HP% *\n2. Flat HP \n3. Energy Recharge (if bursting every rotation)\n4. Elemental Mastery\n5. Crit Rate / DMG\n\n* Prefers HP substats above all else until you reach the limit of your  A4 passive which is at 74444 HP",
        "talentPriority": "1. Skill\n2. Burst\n\nTalent levels do not affect Nilou's buff to Bloom damage, so heavy investment in Talents is not necessary",
        "abilityTips": "",
        "weapons": [
          "key_of_khaj_nisut",
          "the_dockhand_s_assistant",
          "freedom_sworn",
          "xiphos_moonlight",
          "iron_sting",
          "toukabou_shigure",
          "favonius_sword",
          "festering_desire",
          "sacrificial_sword",
          "sapwood_blade",
          "primordial_jade_cutter"
        ],
        "artifactSets": [
          {
            "type": "double",
            "options": [
              {
                "type": "group",
                "id": "20-hp"
              },
              {
                "type": "group",
                "id": "20-hp"
              }
            ]
          },
          {
            "type": "choose-2",
            "options": [
              {
                "type": "set",
                "id": "noblesse_oblige"
              },
              {
                "type": "group",
                "id": "20-hp"
              },
              {
                "type": "group",
                "id": "80-em"
              }
            ]
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "deepwood_memories"
            }
          }
        ]
      }
    ]
  },
  {
    "nameId": "neuvillette",
    "element": "hydro",
    "weapon": "catalyst",
    "notes": "DPS\nDPS Neuvillette centers around using his Charged Attacks to deal damage.\n\nRegarding Weapon Choices:\nWeapon options similar to Prototype Amber can be used better by other characters, so it's not recommended to pull or upgrade these weapons just for Neuvillette.\n\nRegarding Artifact Main Stats:\nGoblet and Circlet: HP% Mainstats gain more value when you have DMG% buffs. \nNot recommended to run more than 2 HP% mainstats at once",
    "builds": [
      {
        "name": "DPS \n✩",
        "artifactMainStats": "Sands - HP%\nGoblet - Hydro DMG / HP%*\nCirclet - Crit Rate / Crit DMG / HP%*",
        "artifactSubStats": "1. Energy Recharge*\n2. Crit Rate / Crit DMG\n~= HP%\n3. Flat HP\n\n* Energy Recharge should be prioritised until requirements are met.",
        "talentPriority": "1. Normal Attack\n2. Burst\n~= Skill\n",
        "abilityTips": "",
        "weapons": [
          "tome_of_the_eternal_flow",
          "sacrificial_jade",
          "jadefall_s_splendor",
          "prototype_amber",
          "cashflow_supervision",
          "the_widsith",
          "kagura_s_verity",
          "lost_prayer_to_the_sacred_winds"
        ],
        "artifactSets": [
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "marechaussee_hunter"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "heart_of_depth"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "group",
              "id": "20-hp"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "retracing_bolide"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "wanderer_s_troupe"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "nymph_s_dream"
            }
          }
        ]
      }
    ]
  },
  {
    "nameId": "furina",
    "element": "hydro",
    "weapon": "sword",
    "notes": "OFF-FIELD DPS & SUPPORT\nFurina buffs team members with her Burst, and deals off-field damage with her Skill.\n\nRegarding Weapon Choices:\nUraku Misugiri: This ranking assumes Furina is not paired with a Geo unit. If Furina is paired with a Geo unit, this weapon is better than Primordial Jade Cutter.\nKey of Khaj-Nisut: Three stacks of this weapon is extremely reliable as long as Furina's Skill hits opponents. It can help elevate the team's damage with its teamwide EM buff which can lead to it performing better than weapons listed above.\nNon-Energy Recharge Weapons: These see better performances when Furina is used in teams with lower Energy Recharge Requirements. \nFavonius Sword: The value of this weapon can fluctuate based on Furina's Energy Recharge requirements and the team's Energy Recharge Requirements.\n\nRegarding Artifact Main Stats:\nGoblet: HP% is recommended with Golden Troupe (4) as an artifact set, elsewise, Hydro DMG is recommended. At [C2] the two become roughly similar, assuming Golden Troupe (4).",
    "builds": [
      {
        "name": "OFF-FIELD DPS & SUPPORT\n✩",
        "artifactMainStats": "Sands - Energy Recharge / HP%\nGoblet - HP% / Hydro DMG*\nCirclet - Crit Rate / Crit DMG",
        "artifactSubStats": "1. Energy Recharge*\n2. HP%\n~= Crit Rate / Crit DMG\n3. Flat HP\n\n* Energy Recharge should be prioritised until requirements are met.",
        "talentPriority": "1. Burst\n~= Skill",
        "abilityTips": "Because of her HP drain and Burst mechanics, Furina encourages the use of teamwide healers. ",
        "weapons": [
          "splendor_of_tranquil_waters",
          "primordial_jade_cutter",
          "festering_desire",
          "key_of_khaj_nisut",
          "uraku_misugiri",
          "fleuve_cendre_ferryman",
          "favonius_sword",
          "wolf_fang",
          "haran_geppaku_futsu",
          "light_of_foliar_incision",
          "mistsplitter_reforged",
          "skyward_blade",
          "the_dockhand_s_assistant",
          "harbinger_of_dawn"
        ],
        "artifactSets": [
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "golden_troupe"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "tenacity_of_the_millelith"
            }
          },
          {
            "type": "choose-2",
            "options": [
              {
                "type": "set",
                "id": "emblem_of_severed_fate"
              },
              {
                "type": "set",
                "id": "golden_troupe"
              },
              {
                "type": "group",
                "id": "20-hp"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "nameId": "sigewinne",
    "element": "hydro",
    "weapon": "bow",
    "notes": "SUPPORT\nSigewinne focuses on teamwide healing with her Elemental Skill. Like Neuvillette and Hydro Traveler, she can also create Sourcewater Droplets. Absorbing these Sourcewater Droplets grant her a Bond of Life, and clearing this Bond of Life can give herself and her team energy. Her A1 talent grants her 10 Stacks of Convalescence upon skill cast, which buffs off-field skill damage, and a stack is consumed whenever a team member does off-field skill damage. Sigewinne cannot consume these stacks herself. She's best played in a team with Furina.\n\nRegarding Weapon Choices:\nFavonius Warbow: This weapon will place higher if the team values and needs energy. With this weapon, you want to build a little bit of Crit Rate to help proc the passive. It is unecessary to level this weapon if you are not planning to use Sigewinne's Elemental Burst.\nElegy for the End: While the Energy Recharge from this weapon is unecessary for this build, the passive can make it an effective choice in some teams. It is also not needed to level this weapon if you are not going to use Sigewinne's Elemental Burst.\n",
    "builds": [
      {
        "name": "SUPPORT\n✩",
        "artifactMainStats": "Sands - HP%\nGoblet - HP%\nCirclet - HP% / Crit Rate*\n\n*Crit Rate only if using Favonius Warbow",
        "artifactSubStats": "1. HP%\n2. Flat HP\n3. Crit Rate*\n\n*Crit Rate only if using Favonius Warbow",
        "talentPriority": "1. Skill",
        "abilityTips": "At [C1], Sigewinne instead gains 19 Convalescence stacks.",
        "weapons": [
          "silvershower_heartstrings",
          "recurve_bow",
          "favonius_warbow",
          "elegy_for_the_end"
        ],
        "artifactSets": [
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "ocean_hued_clam"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "song_of_days_past"
            }
          },
          {
            "type": "double",
            "options": [
              {
                "type": "set",
                "id": "tenacity_of_the_millelith"
              },
              {
                "type": "set",
                "id": "vourukasha_s_glow"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "nameId": "mualani",
    "element": "hydro",
    "weapon": "catalyst",
    "notes": "VAPORIZE DPS\nIn a smiliar fashion to Kirara, who runs into enemies to stack her shield in Urgent Neko Parcel state, Mualani can use her Elemental Skill to ride Sharky Surfboard and mark enemies that she runs into. While on Sharky Surfboard, Normal Attacking can cause her to perform Sharky Bites, which can fire additional missiles if she attacks a marked enemy. Sharky Bites are considered Normal Attack damage.\n\nRegarding Weapon Choices:\nSacrificial Jade: When paired with Obsidian Codex or Marechaussee Hunter, Crit Rate substats are no longer desireable.\nThe Widsith: On average, this weapon at R5 performs similarly to Ring of Yaxche [R5]. It's worth noting that due to buff downtime and the possibility of getting the ATK buff, this weapon is worse for consistent performance and can end up worse. However, if you are willing to reset for good Widsith buffs (DMG% or EM), it can outperform. \n\nRegarding Artifact Mainstats:\nStrong Elemental Mastery buffs, or an EM weapon, can devalue EM mainstats. HP circlet is primarily an option for Crit DMG weapons as well. \n\nRegarding Artifact Sets:\nMarechaussee Hunter: Only to be used when paired with Furina. Worse than Obsidian Codex (4).",
    "builds": [
      {
        "name": "VAPORIZE DPS\n✩",
        "artifactMainStats": "Sands - HP%/Elemental Mastery\nGoblet - Hydro DMG\nCirclet - Crit Rate/Crit DMG/HP%/Elemental Mastery*\n\nCheck notes",
        "artifactSubStats": "1. Crit Rate/DMG\n2. Elemental Mastery ~= HP%\n3. Flat HP",
        "talentPriority": "1. Skill\n2. Burst",
        "abilityTips": "",
        "weapons": [
          "surf_s_up",
          "sacrificial_jade",
          "a_thousand_floating_dreams",
          "tome_of_the_eternal_flow",
          "ring_of_yaxche"
        ],
        "artifactSets": [
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "obsidian_codex"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "heart_of_depth"
            }
          },
          {
            "type": "choose-2",
            "options": [
              {
                "type": "set",
                "id": "marechaussee_hunter"
              },
              {
                "type": "group",
                "id": "20-hp"
              },
              {
                "type": "group",
                "id": "80-em"
              }
            ]
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "marechaussee_hunter"
            }
          }
        ]
      }
    ]
  },
  {
    "nameId": "diona",
    "element": "cryo",
    "weapon": "bow",
    "notes": "SUPPORT\nAs a support, Diona's typically used for three things; Shielding, Healing, and Cryo particle generation. Pairing Diona with Cryo damage dealers such as Ayaka, Ganyu and Eula allows you to funnel energy into them while providing them a shield. Weapons such as Sacrificial Bow and Favonius Warbow greatly increase her potential as a battery.\n\nRegarding Weapon Choices:\nSacrificial Bow: Preferred over Favonius Warbow at higher refinements when batterying another Cryo character.\nFavonius Warbow: It is recommended to build some Crit Rate in substats to have a higher chance of triggering the bow passive for energy.\nSilvershower Heartstrings & Recurve Bow: These bows will be your best choice for stronger shields, however the Energy Recharge and useful passives of other weapons will generally make them a suboptimal pick.\n\nRegarding Artifact Sets:\nNoblesse Oblige (4): This set provides an teamwide ATK% buff while also increasing burst damage - Diona does not have the best uptime on this set, however, she may be the best option to use this set.\nInstructor (4): This set is a niche option for Diona. It can be considered in teams which value EM and where she can trigger a reaction while on-field. Do keep in mind that Instructor being limited to a 4* set means your stat potential will be lower. \nTenacity of the Millelith (4): This set is a niche option for Diona. It can be considered in teams including some variants of Ganyu Freeze which have shorter rotation lengths meaning Diona's burst will not be used every rotation, and where you can snapshot the ATK% buff onto Ganyu's burst. \n\nRegarding Main Stats Priority: \nFull Stack HP% is recommended if you want stronger shields but a weaker heal. You can use Healing Bonus Circlet if you want a nice balance between the two. \n\nRegarding Talent Priority: \nPrioritise whichever your Diona is geared for (shielder or healer), if built for a balance between the two, level both equally.",
    "builds": [
      {
        "name": "SUPPORT\n✩",
        "artifactMainStats": "Sands - Energy Recharge / HP% \nGoblet - HP% \nCirclet - HP% / Healing Bonus \n",
        "artifactSubStats": "1. Energy Recharge\n2. HP%\n3. Crit Rate*\n4. Flat HP\n\n*Crit Rate substats are only recommended when using Favonius Warbow.",
        "talentPriority": "1. Burst = Skill*",
        "abilityTips": "Diona's Elemental Skill grants you a Cryo shield which allows cleansing. Every time you swap characters with the shield up, it applies Cryo. This acts as a cleanse.",
        "weapons": [
          "favonius_warbow",
          "sacrificial_bow",
          "sacrificial_bow",
          "elegy_for_the_end",
          "silvershower_heartstrings",
          "recurve_bow"
        ],
        "artifactSets": [
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "noblesse_oblige"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "scroll_of_the_hero_of_cinder_city"
            }
          },
          {
            "type": "choose-2",
            "options": [
              {
                "type": "set",
                "id": "emblem_of_severed_fate"
              },
              {
                "type": "group",
                "id": "20-hp"
              },
              {
                "type": "group",
                "id": "20-hp"
              }
            ]
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "maiden_beloved"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "ocean_hued_clam"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "instructor"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "tenacity_of_the_millelith"
            }
          }
        ]
      }
    ]
  },
  {
    "nameId": "chongyun",
    "element": "cryo",
    "weapon": "claymore",
    "notes": "BURST SUPPORT\nIt is preferred to use Chongyun as a Burst Support Nuke over Main DPS as his Normal Attack scalings are very low, even when including Constellation 1. His Elemental Burst on the other hand hits extremely hard on later constellations and takes a much higher total damage portion over his Normal Attack. On top of that, you can Reverse Melt all 3 hits of his Elemental Burst on enemies applied with strong Pyro, such as Bennett's Elemental Skill and Elemental Burst.\n\nChongyun is very niche as he only performs well in certain teams and can completely destroy the other. He is mainly used on a team as an enabler, be it for Reverse Melt teams (e.g. Melt DPS Bennett) or Freeze teams (e.g. Freeze DPS Kaeya). He also does not function well with Physical teams (e.g. Razor, Eula) as it renders his Elemental Skill useless because it converts their Normal Attack damage from Physical to Cryo. They're usually using a Physical Goblet, so if they got their Normal Attack converted from Physical to Cryo, they won't benefit from Physical DMG Bonus from the goblet, thus it's a DPS loss.\n\nAt [C2], his Elemental Skill reduces ability cooldown that is casted within the zone by 15%. This is one of the few abilities in the game that can reduce cooldown.\n\nRegarding Weapon Choices:\nSerpent Spine: This weapon outperforms Wolf's Gravestone if we only look at Chongyun's damage contribution [5 Stacks Assumed]. Wolf's Gravestone is ranked higher as it provides more teamwide DPS and does not come with the need to acquire stacks before engaging in combat.\nRedhorn Stonethresher and Beacon of the Reed Sea: Depending on the amount of ATK% buffs you're getting, these weapon can overtake Wolf's Gravestone in personal damage. Beacon ranking assumes one stack.\nAkuoumaru: At [R1], Akuoumaru beats Luxurious Sea-Lord if Chongyun is used in a team with 260 or greater total team energy. Akuoumaru only beats Luxurious Sea-Lord if [R2] and above otherwise.\nSacrificial Greatsword: This weapon is your best choice if faced in a situation where you heavily rely on Chongyun's Cryo infusion uptime.\n\nRegarding Artifact Sets:\nNoblesse Oblige (4): Chongyun is one of the best Noblesse Oblige (4) holders since he has low energy requirements for his Elemental Burst.\nGilded Dreams (4): Gilded Dreams is a good set on Chongyun in teams where he Melts his Burst.\n\nRegarding Talent Priority: \nPrioritize Elemental Burst on a Melt team as it scales better than his Elemental Skill.\nPrioritize Elemental Skill on a Freeze team to furthermore extend the duration of the Cryo infusion.",
    "builds": [
      {
        "name": "BURST SUPPORT\n✩",
        "artifactMainStats": "Sands - ATK% / Energy Recharge / Elemental Mastery\nGoblet - Cryo DMG\nCirclet - Crit Rate / DMG\n",
        "artifactSubStats": "1. Crit Rate / DMG \n2. ATK% \n3. Elemental Mastery \n4. Energy Recharge\n5. Flat ATK",
        "talentPriority": "1. Burst = Skill*",
        "abilityTips": "Chongyun's Elemental Burst is calculated as Claymore damage, which means it breaks Geo Structures / Shields at a much easier rate and can proc Shatter.",
        "weapons": [
          "wolf_s_gravestone",
          "serpent_spine",
          "redhorn_stonethresher",
          "beacon_of_the_reed_sea",
          "the_unforged",
          "skyward_pride",
          "akuoumaru",
          "luxurious_sea_lord",
          "lithic_blade",
          "sacrificial_greatsword",
          "blackcliff_slasher",
          "prototype_archaic",
          "favonius_greatsword"
        ],
        "artifactSets": [
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "noblesse_oblige"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "emblem_of_severed_fate"
            }
          },
          {
            "type": "double",
            "options": [
              {
                "type": "set",
                "id": "blizzard_strayer"
              },
              {
                "type": "set",
                "id": "noblesse_oblige"
              }
            ]
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "scroll_of_the_hero_of_cinder_city"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "gilded_dreams"
            }
          },
          {
            "type": "choose-2",
            "options": [
              {
                "type": "set",
                "id": "blizzard_strayer"
              },
              {
                "type": "set",
                "id": "noblesse_oblige"
              },
              {
                "type": "set",
                "id": "emblem_of_severed_fate"
              },
              {
                "type": "group",
                "id": "18-atk"
              },
              {
                "type": "group",
                "id": "80-em"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "nameId": "kaeya",
    "element": "cryo",
    "weapon": "sword",
    "notes": "FREEZE / MONO CRYO\nKaeya Freeze is mostly used in a team with Chongyun and Xingqiu/Barbara while having Blizzard Strayer (4) equipped. In this team, Kaeya has 55% crit rate against Frozen enemies without any additional Crit stats, which means Crit Rate substats are generally prioritized less than ATK% or Crit DMG.\n\nRegarding Weapon Choices:\nFavonius Sword: In teams where this weapon's passive helps lower the team's ER Requirements, it sees higher value.\n\nREVERSE MELT\nKaeya's Elemental Burst makes him an excellent source of Cryo application for characters that often stay in melee range, although his burst can't be fully utilized with Reverse Melt teams due to how his Cryo damage is split into a barrage of attacks.\n\nRegarding Weapon Choices:\nSkyward Blade: In teams with a 2nd Cryo unit generating energy, this weapon would have a lower priority as the Energy Recharge stat would mostly be wasted.\nLion's Roar / The Alley Flash / Iron Sting: At [R5], these weapons would outperform Summit Shaper.\n\nRegarding Artifact Sets:\nInstructor (4): Due to his ability to easily trigger Instructor's (4) passive, Kaeya is a good holder of Instructor (4) for Reverse Melt teams. Aside from ER%, most of his other main stats don't matter as much, making this one of his budget support builds. \nNoblesse Oblige (4): This set is only recommended if there is no other member of the team running Noblesse Oblige (4).",
    "builds": [
      {
        "name": "FREEZE / MONO CRYO\n✩",
        "artifactMainStats": "Sands - ATK%\nGoblet - Cryo DMG \nCirclet - Crit DMG\n",
        "artifactSubStats": "1. Crit DMG \n2. ATK%\n3. Energy Recharge\n4. Crit Rate*\n5. Flat ATK\n\n*Generally has less value than the other offensive stats due to Blizzard Strayer and Cryo Resonance",
        "talentPriority": "1. Burst\n2. Normal Attack*\n3. Skill\n\n*If not paired with Chongyun, Skill takes priority over Normal Attacks\n",
        "abilityTips": "As a Freeze DPS, he gains over 55%+ Crit Rate with the right team set up:\n- 15% from Cryo Resonance against Cryo affected enemies\n- 40% from Blizzard Strayer against Frozen enemies\n- 15% from [C1] against Cryo affected enemies",
        "weapons": [
          "mistsplitter_reforged",
          "light_of_foliar_incision",
          "haran_geppaku_futsu",
          "summit_shaper",
          "primordial_jade_cutter",
          "aquila_favonia",
          "kagotsurube_isshin",
          "the_alley_flash",
          "amenoma_kageuchi",
          "harbinger_of_dawn",
          "favonius_sword"
        ],
        "artifactSets": [
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "blizzard_strayer"
            }
          },
          {
            "type": "double",
            "options": [
              {
                "type": "set",
                "id": "blizzard_strayer"
              },
              {
                "type": "group",
                "id": "18-atk"
              }
            ]
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "emblem_of_severed_fate"
            }
          },
          {
            "type": "double",
            "options": [
              {
                "type": "set",
                "id": "blizzard_strayer"
              },
              {
                "type": "set",
                "id": "noblesse_oblige"
              }
            ]
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "noblesse_oblige"
            }
          }
        ]
      },
      {
        "name": "REVERSE MELT ✩",
        "artifactMainStats": "Sands - Energy Recharge / ATK%\nGoblet - Cryo DMG\nCirclet - Crit Rate / DMG\n",
        "artifactSubStats": "1. Energy Recharge \n2. Crit Rate / DMG \n3. ATK%\n4. Elemental Mastery\n5. Flat ATK",
        "talentPriority": "1. Burst\n2. Skill",
        "abilityTips": "",
        "weapons": [
          "primordial_jade_cutter",
          "mistsplitter_reforged",
          "haran_geppaku_futsu",
          "light_of_foliar_incision",
          "freedom_sworn",
          "skyward_blade",
          "toukabou_shigure",
          "summit_shaper",
          "lion_s_roar",
          "kagotsurube_isshin",
          "aquila_favonia",
          "iron_sting",
          "the_alley_flash",
          "favonius_sword"
        ],
        "artifactSets": [
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "emblem_of_severed_fate"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "lavawalker"
            }
          },
          {
            "type": "double",
            "options": [
              {
                "type": "set",
                "id": "blizzard_strayer"
              },
              {
                "type": "set",
                "id": "noblesse_oblige"
              }
            ]
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "gilded_dreams"
            }
          },
          {
            "type": "choose-2",
            "options": [
              {
                "type": "set",
                "id": "blizzard_strayer"
              },
              {
                "type": "set",
                "id": "noblesse_oblige"
              },
              {
                "type": "group",
                "id": "18-atk"
              },
              {
                "type": "group",
                "id": "80-em"
              }
            ]
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "noblesse_oblige"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "instructor"
            }
          }
        ]
      }
    ]
  },
  {
    "nameId": "rosaria",
    "element": "cryo",
    "weapon": "polearm",
    "notes": "REVERSE MELT\nThis build capitalizes on the fact Rosaria's skill and burst dont have an ICD, allowing her to Melt all Skill and Burst procs. Which in combination with snapshotting buffs onto her burst makes it one of her highest personal damage builds.\n\nRegarding Weapon Choices:\nFor more details see the sheet here\nVortex Vanquisher: The ranking assumes you are unshielded. If you use a shield, it can surpass Calamity Queller.\nDragon's Bane: At high refinement [R4-R5] this performs a tad better than Primordial Jade Winged-Spear.\nWavebreaker's Fin: At high refinement [R4-R5] with a 260 energy cost team this performs just below Staff of Homa.\nDeathmatch: This weapon can outperform all (4✩) options and even Primordial Jade Winged-Spear when used with Gilded Dreams (4) in single target situations.\n\nRegarding Artifact Choices:\nEmblem of Severed Fate (4): In teams where her energy requirements are higher (130%+) it can surpass Gilded Dreams (4).\n\nFREEZE\nThis build can be used on both a quickswap/sub-dps and perma-freeze dps Rosaria. If played as a perma-freeze dps, Rosaria has the same team comp as Freeze Kaeya. Check Kaeya's ability tips section for teamcomp setup.\n\nRegarding Substats: \nRosaria does not need much Energy Recharge if paired with Kaeya. If paired with another Cryo unit such as Chongyun or Ayaka, she will need more Energy Recharge.\nCompared to Kaeya, Rosaria has even less desire for Crit Rate, as her Ascension 1 Talent includes an extra 12% Crit Rate once skill hits the back of an enemy.\n\nRegarding Weapon Choices:\nWavebreaker's Fin: At high refinement [R5], this weapon can perform similarly to Staff of Homa, and even outperform it with a high energy cost team (260 cost).\nDeathmatch: Rosaria gets a lot of Crit Rate from Blizzard Strayer (4) and Cryo Resonance. As a result, this weapon falls off in value as you will tend to overcap above 100% Crit Rate. If Rosaria is being used without the Blizzard Strayer (4) set, then this weapon can perform better compared to other options.\n\nRegarding Artifact Choices:\nNoblesse Oblige (4): This set is only used in her sub-dps/quickswap roles not her perma-freeze dps role. Also it should only be considered when you have no decent Blizzard Strayer (4) pieces and no one else on the team is holding Noblesse Oblige (4).\n\nSUPPORT\nThis Build focuses on her Buffing/Energy generation/Cryo application capabilities. Though it does not mean that you dont invest in her personal damage, only that it's a lower priority overall.\n\nRegarding Weapon Choices:\nFavonius Lance: The best option in situations where you havent met your teams energy requirements. Outside of that scenario you would be better of using a Crit Rate weapon that benefits her A4 buff.\n\nRegarding Artifact Sets:\nInstructor (4): Can be the better option in teams that prefer the Elemental Mastery buff over ATK, such as Hu Tao VapeMelt.",
    "builds": [
      {
        "name": "REVERSE\nMELT\n✩",
        "artifactMainStats": "Sands - Elemental Mastery / ATK%\nGoblet - Cryo DMG\nCirclet - Crit Rate / DMG",
        "artifactSubStats": "1. Crit Rate\n2. Crit DMG\n3. Elemental Mastery / ATK%\n4. Energy Recharge\n5. Flat ATK",
        "talentPriority": "1. Burst\n2. Skill",
        "abilityTips": "Be sure to cast skill before burst as Crit Rate granted by the Ascension 1 Talent will be included with Ascension 4 Talent Bonus as well.\n\nRosaria's Elemental Skill and Elemental Burst can be Reverse Melted (1.5x) with another Pyro applier for some quick and powerful damage. ",
        "weapons": [
          "staff_of_the_scarlet_sands",
          "staff_of_homa",
          "lumidouce_elegy",
          "primordial_jade_winged_spear",
          "calamity_queller",
          "vortex_vanquisher",
          "dragon_s_bane",
          "wavebreaker_s_fin",
          "missive_windspear",
          "deathmatch",
          "engulfing_lightning",
          "skyward_spine",
          "kitain_cross_spear"
        ],
        "artifactSets": [
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "gilded_dreams"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "lavawalker"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "emblem_of_severed_fate"
            }
          },
          {
            "type": "double",
            "options": [
              {
                "type": "set",
                "id": "blizzard_strayer"
              },
              {
                "type": "set",
                "id": "noblesse_oblige"
              }
            ]
          }
        ]
      },
      {
        "name": "FREEZE\n✩",
        "artifactMainStats": "Sands - ATK%\r\nGoblet - Cryo DMG \r\nCirclet - Crit DMG",
        "artifactSubStats": "1. Crit DMG \n2. ATK%\n3. Energy Recharge*\n4. Crit Rate*\n5. Flat ATK\n",
        "talentPriority": "1. Burst\n2. Skill\n3. Normal Attack",
        "abilityTips": "If Rosaria is being used with Chongyun to infuse her normal attacks with Cryo, her Normal Attack talent will have higher priority than Skill.",
        "weapons": [
          "staff_of_homa",
          "wavebreaker_s_fin",
          "vortex_vanquisher",
          "primordial_jade_winged_spear",
          "lumidouce_elegy",
          "skyward_spine",
          "engulfing_lightning",
          "staff_of_the_scarlet_sands",
          "deathmatch"
        ],
        "artifactSets": [
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "blizzard_strayer"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "noblesse_oblige"
            }
          },
          {
            "type": "double",
            "options": [
              {
                "type": "set",
                "id": "blizzard_strayer"
              },
              {
                "type": "set",
                "id": "noblesse_oblige"
              }
            ]
          }
        ]
      },
      {
        "name": "SUPPORT",
        "artifactMainStats": "Sands - ATK% / Energy Recharge\nGoblet - Cryo DMG\nCirclet - Crit Rate\n",
        "artifactSubStats": "1. Crit Rate\n2. Energy Recharge\n3. Crit DMG\n4. ATK%\n5. Flat ATK\n",
        "talentPriority": "1. Burst\n2. Skill",
        "abilityTips": "",
        "weapons": [
          "favonius_lance",
          "staff_of_the_scarlet_sands",
          "lumidouce_elegy",
          "deathmatch",
          "primordial_jade_winged_spear",
          "engulfing_lightning",
          "skyward_spine",
          "prototype_starglitter"
        ],
        "artifactSets": [
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "noblesse_oblige"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "instructor"
            }
          }
        ]
      }
    ]
  },
  {
    "nameId": "layla",
    "element": "cryo",
    "weapon": "sword",
    "notes": "SUPPORT\nThe goal of this build is to prioritize Layla's shield without building for personal damage. \n\nRegarding Weapon Choices:\nPrimordial Jade Cutter: This weapon sees more value on Layla when you're also investing into her damage to some extent. \nFavonius Sword: Try to build some Crit Rate if using this weapon to trigger the passive consistently. \nFreedom-Sworn: This weapon can be a good support option in teams where Layla can consistently trigger the passive. \n\nRegarding Artifact Sets:\nTenacity of the Millelith (4): This set is by far the best option for Layla, it complements her kit perfectly by providing HP% along with a teamwide ATK% and Shield Strength buff. \n\nSUPPORT AND DAMAGE\nLayla's shield is very durable thanks to a good Base DMG Absorption and the number of Shield Strength modifiers she has access to. Furthermore, her personal damage scales well with Constellations (particularly 5 and 6). This build is a higher investment option than a pure Support build, choosing to sacrifice some shield durability in exchange for greater personal damage. \n\nRegarding Weapon Choices:\nHarbinger of Dawn [R5]: Weapon ranking is assuming Layla is above 90% HP. As Layla is primarily used as an off-field character, she can usually have good uptime on the Harbinger passive. Though it's possible that good uptime may be unrealistic depending on your team, or if you're facing enemies where corrosion is present. \nWolf-Fang: At [R5] this weapon performs similarly to Harbinger of Dawn [R5].\nFavonius Sword: This weapon performs significantly worse than other listed options in terms of personal damage, but the extra particles for your team could be valuable. \n\nRegarding Artifact Sets:\nTenacity of the Millelith (4): This set is by far the best option for Layla's shield durability, and very often the best set for team damage. \nBlizzard Strayer (4): This is Layla's best set for personal damage in teams where enemies are affected by Cryo or Frozen.\n\nRegarding Artifact Mainstats:\nWhile a HP%/Cryo/Crit build is ideal for personal damage, additional HP% mainstats can be used to increase shield durability without a huge drop in personal damage as Layla's damage is partially HP scaling. \n\nCredits to Voidrev for the weapon ranking. ",
    "builds": [
      {
        "name": "SUPPORT \n✩",
        "artifactMainStats": "Sands - HP% / Energy Recharge\r\nGoblet - HP% \r\nCirclet - HP% / Crit Rate*\r\n\r\nCrit Rate is only recommended if using Favonius Sword",
        "artifactSubStats": "1. Energy Recharge until requirement is met\r\n2. HP%\r\n3. Crit Rate*\r\n4. Flat HP\r\n\r\nCrit Rate is only recommended if using Favonius Sword",
        "talentPriority": "1. Skill\n2. Burst",
        "abilityTips": "",
        "weapons": [
          "key_of_khaj_nisut",
          "the_dockhand_s_assistant",
          "primordial_jade_cutter",
          "favonius_sword",
          "freedom_sworn",
          "skyrider_sword"
        ],
        "artifactSets": [
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "tenacity_of_the_millelith"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "scroll_of_the_hero_of_cinder_city"
            }
          },
          {
            "type": "double",
            "options": [
              {
                "type": "set",
                "id": "tenacity_of_the_millelith"
              },
              {
                "type": "set",
                "id": "vourukasha_s_glow"
              }
            ]
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "noblesse_oblige"
            }
          }
        ]
      },
      {
        "name": "SUPPORT AND DAMAGE ✩",
        "artifactMainStats": "Sands - HP% / Energy Recharge*\r\nGoblet - Cryo DMG / HP% \r\nCirclet - Crit Rate / Crit DMG / HP%\r\n\r\nLayla's Energy Recharge requirements will generally be low enough (especially with C2 or other Cryo characters) that an ER sands is not justified ",
        "artifactSubStats": "1. Energy Recharge until requirement is met\n2. Crit Rate / Crit DMG\n~= HP%\n3. ATK%\n4. Flat HP\n",
        "talentPriority": "1. Skill\n2. Burst\n\n",
        "abilityTips": "",
        "weapons": [
          "primordial_jade_cutter",
          "harbinger_of_dawn",
          "uraku_misugiri",
          "splendor_of_tranquil_waters",
          "light_of_foliar_incision",
          "mistsplitter_reforged",
          "wolf_fang",
          "key_of_khaj_nisut",
          "favonius_sword"
        ],
        "artifactSets": [
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "tenacity_of_the_millelith"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "blizzard_strayer"
            }
          },
          {
            "type": "choose-2",
            "options": [
              {
                "type": "set",
                "id": "blizzard_strayer"
              },
              {
                "type": "set",
                "id": "tenacity_of_the_millelith"
              },
              {
                "type": "set",
                "id": "vourukasha_s_glow"
              }
            ]
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "noblesse_oblige"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "emblem_of_severed_fate"
            }
          }
        ]
      }
    ]
  },
  {
    "nameId": "mika",
    "element": "cryo",
    "weapon": "polearm",
    "notes": "SUPPORT\nMika is a Physical damage support who offers Physical DMG% through Detector Stacks, and Physical Crit Damage at C6. He is additionally able to heal and provide some Attack Speed. \nDo note that Mika's buffs apply to your on-field character and do not linger, this is something to keep in mind especially when playing him with Eula, as you will lose his buffs if you detonate her Lightfall Sword early. \n\nRegarding Weapon Choices:\nFavonius Lance: This is often Mika's best in slot option, as both an Energy Recharge weapon and one with a useful passive which generates particles on Crit. \nWeapons which provide Energy Recharge are prioritized to ensure good Burst uptime.\n\nRegarding Artifact Sets:\nNoblesse Oblige (4) is Mika's best set if nobody else is using it.\nOcean-Hued Clam (4) is a good option if another party member is using Noblesse Oblige (4).\n\nRegarding Artifact Mainstats and Substats:\nA Critical Rate circlet can be considered when running Favonius Lance for more consistent procs. Additionally, Critical Rate substats are useful when running Favonius Lance.",
    "builds": [
      {
        "name": "SUPPORT\n ✩",
        "artifactMainStats": "Sands - Energy Recharge / HP%\nGoblet - HP%\nCirclet - Healing Bonus / Crit Rate%*",
        "artifactSubStats": "1. Energy Recharge\n2. Crit Rate*\n3. HP%\n4. Flat HP\n\n*Critical Rate is only recommended when using Favonius Lance",
        "talentPriority": "1. Skill\n2. Burst\n\n**Prioritize Mika's Burst if you value additional healing**",
        "abilityTips": "",
        "weapons": [
          "favonius_lance",
          "dialogues_of_the_desert_sages",
          "engulfing_lightning",
          "prototype_starglitter",
          "rightful_reward",
          "black_tassel"
        ],
        "artifactSets": [
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "noblesse_oblige"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "ocean_hued_clam"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "maiden_beloved"
            }
          },
          {
            "type": "double",
            "options": [
              {
                "type": "set",
                "id": "emblem_of_severed_fate"
              },
              {
                "type": "group",
                "id": "20-hp"
              }
            ]
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "the_exile"
            }
          }
        ]
      }
    ]
  },
  {
    "nameId": "freminet",
    "element": "cryo",
    "weapon": "claymore",
    "notes": "PHYSICAL DPS\nPhysical DPS Freminet stacks his Pers Timer to max using Normal Attacks and unleashes a powerful Physical Shattering Pressure. Rankings assume he is in a team that can reliably trigger Shatter and Superconduct.\n\nRegarding Weapon Choices:\nSkyward Pride: If Freminet is C2 or has low Energy Recharge Requirements this weapon is less potent due to the ER stat being less useful.\nSerpent Spine: At [R5] this weapon can equal Skyward Pride.\nTidal Shadow: The performance of this weapon depends on the healing abilities of your team. If your team has healing capabilities, this weapon can be equal to Redhorn Stonethresher or better depending on refinement.\n\nCRYO DPS\nCryo DPS Freminet uses level zero Shattering Pressure instances to deal Cryo damage with his skill. Rankings assume he can reliably trigger Shatter.\n\nRegarding Weapon Choices:\nSkyward Pride: If Freminet is C2 or has low Energy Recharge Requirements this weapon is less potent due to the ER stat being less useful.\nSerpent Spine: At [R5] this weapon can equal or surpass Wolf's Gravestone.\nTidal Shadow: The performance of this weapon depends on the healing abilities of your team. If your team has healing capabilities, this weapon can be equal to Redhorn Stonethresher or better depending on refinement.",
    "builds": [
      {
        "name": "PHYSICAL DPS ✩",
        "artifactMainStats": "Sands - ATK%\nGoblet - Physical DMG%\nCirclet - Crit Rate / DMG",
        "artifactSubStats": "1. Energy Recharge\n2. Crit Rate / DMG\n3. ATK%\n4. Elemental Mastery\n5. Flat ATK\n\n*Prioritize Energy Recharge until you meet the requirement.",
        "talentPriority": "1. Skill\n2. Normal Attack\n3. Burst",
        "abilityTips": "Rotation:\nE Q N2 E 3[N1 E N2 (E or NA)]\n\n\n*E = Elemental Skill, Q = Elemental Burst, N = Normal Attack\n\n*You can perform a Normal Attack instead of using Elemental Skill at Pressure Level 4, because this also ends the Pers Timer state. ",
        "weapons": [
          "skyward_pride",
          "song_of_broken_pines",
          "wolf_s_gravestone",
          "beacon_of_the_reed_sea",
          "redhorn_stonethresher",
          "serpent_spine",
          "the_unforged",
          "prototype_archaic",
          "tidal_shadow",
          "snow_tombed_starsilver"
        ],
        "artifactSets": [
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "pale_flame"
            }
          },
          {
            "type": "double",
            "options": [
              {
                "type": "set",
                "id": "pale_flame"
              },
              {
                "type": "set",
                "id": "emblem_of_severed_fate"
              }
            ]
          },
          {
            "type": "double",
            "options": [
              {
                "type": "set",
                "id": "golden_troupe"
              },
              {
                "type": "group",
                "id": "18-atk"
              }
            ]
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "golden_troupe"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "gladiator_s_finale"
            }
          }
        ]
      },
      {
        "name": "CRYO DPS\n ✩",
        "artifactMainStats": "Sands - ATK%\nGoblet - Cryo DMG%\nCirclet - Crit Rate / DMG",
        "artifactSubStats": "1. Energy Recharge\n2. Crit Rate / DMG\n3. ATK%\n4. Elemental Mastery\n5. Flat ATK\n\n*Prioritize Energy Recharge until you meet the requirement.",
        "talentPriority": "1. Skill\n2. Normal Attack\n~= Burst",
        "abilityTips": "Rotation:\nE E Q 4[E E (N1 or N2)]",
        "weapons": [
          "wolf_s_gravestone",
          "skyward_pride",
          "beacon_of_the_reed_sea",
          "the_unforged",
          "serpent_spine",
          "redhorn_stonethresher",
          "song_of_broken_pines",
          "tidal_shadow",
          "mailed_flower",
          "prototype_archaic"
        ],
        "artifactSets": [
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "blizzard_strayer"
            }
          },
          {
            "type": "choose-2",
            "options": [
              {
                "type": "set",
                "id": "blizzard_strayer"
              },
              {
                "type": "set",
                "id": "golden_troupe"
              },
              {
                "type": "group",
                "id": "18-atk"
              }
            ]
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "golden_troupe"
            }
          }
        ]
      }
    ]
  },
  {
    "nameId": "charlotte",
    "element": "cryo",
    "weapon": "catalyst",
    "notes": "SUPPORT \nCharlotte supports the team through her healing, and minor off-field damage. Though she has ATK% scaling on her healing, her personal damage is rather poor and support based artifacts and weapons are recommended.\n\nRegarding Weapon Choices:\nThrilling Tales of Dragon Slayers: Due to Charlotte's high Energy Recharge needs, this weapon may not be suitable to run in some teams.\nWine and Song: It is very important to sprint before casting Charlotte's Elemental Burst so that she gains the extra ATK% for her burst.\nFavonius Codex: Try to build some Crit Rate in substats if using this weapon. \n\nRegarding Artifact Choices:\nBlizzard Strayer: The main utility for this set is more consistent Favonius Codex triggers. However, it also slightly helps her damage, which can be valuable at higher Constellations.\n\nRegarding Substats:\nCrit Rate: Only more useful than Crit DMG when using Favonius Codex.",
    "builds": [
      {
        "name": "SUPPORT\n ✩",
        "artifactMainStats": "Sands - Energy Recharge / ATK%\nGoblet - ATK%\nCirclet - Healing Bonus / ATK% / Crit Rate*\n\n*Crit Rate is only an option worth considering if Charlotte is using Favonius Codex",
        "artifactSubStats": "1. Energy Recharge*\n2. ATK%\n3. Crit Rate*\n4. Flat ATK\n5. Crit DMG\n\n* Energy Recharge should be prioritized until requirements are met.",
        "talentPriority": "1. Burst\n2. Skill",
        "abilityTips": "",
        "weapons": [
          "prototype_amber",
          "favonius_codex",
          "thrilling_tales_of_dragon_slayers",
          "oathsworn_eye",
          "wine_and_song"
        ],
        "artifactSets": [
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "noblesse_oblige"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "tenacity_of_the_millelith"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "ocean_hued_clam"
            }
          },
          {
            "type": "double",
            "options": [
              {
                "type": "set",
                "id": "emblem_of_severed_fate"
              },
              {
                "type": "group",
                "id": "18-atk"
              }
            ]
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "maiden_beloved"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "blizzard_strayer"
            }
          }
        ]
      }
    ]
  },
  {
    "nameId": "qiqi",
    "element": "cryo",
    "weapon": "sword",
    "notes": "SUPPORT\nQiqi's Burst has an 80 energy cost with her skill not generating any energy until [C1]. Energy Recharge will greatly benefit Qiqi, while her Burst should be kept as a last resort.\nQiqi's Burst allows other characters to maximize DPS field time while offering healing from being off-field. At Ascension 4, her Normal Attack applies the healing talisman onto an enemy with a cooldown of 30 seconds.\n\nRegarding Weapon and Artifact Choices:\nSacrificial Sword and Tenacity of the Millelith (4): Using Tenacity of the Millelith (4) allows Qiqi to give the team a decent ATK boost while staying in enemy melee reach with Skill active. Sacrificial Sword increases the uptime of her Skill, which in turn increases the uptime of the team's ATK boost. If you find that your Qiqi's heals are often more than enough, you may consider switching her to this artifact set. Do note that other characters might utilize Sacrificial Sword more than Qiqi, such as Xingqiu, Kazuha, etc.\nOcean Hued Clam (4): This ranking assumes Qiqi does not get her Elemental Burst up often and is instead relying mainly on her Elemental Skill for healing. If she is in a team which funds her enough energy particles, or if she acts as the on-field DPS, this set can overtake Tenacity of the Millelith (4).",
    "builds": [
      {
        "name": "SUPPORT\n✩",
        "artifactMainStats": "Sands - ATK% / Energy Recharge \nGoblet - ATK%\nCirclet - Healing Bonus / ATK%\n",
        "artifactSubStats": "1. ATK%\n2. Energy Recharge\n3. Flat ATK\n",
        "talentPriority": "1. Burst\n2. Skill",
        "abilityTips": "",
        "weapons": [
          "sacrificial_sword",
          "skyward_blade",
          "kagotsurube_isshin",
          "the_flute",
          "favonius_sword",
          "festering_desire",
          "amenoma_kageuchi",
          "skyrider_sword"
        ],
        "artifactSets": [
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "tenacity_of_the_millelith"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "ocean_hued_clam"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "maiden_beloved"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "group",
              "id": "18-atk"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "noblesse_oblige"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "emblem_of_severed_fate"
            }
          }
        ]
      }
    ]
  },
  {
    "nameId": "ganyu",
    "element": "cryo",
    "weapon": "bow",
    "notes": "MELT DPS\nGanyu's Level 2 Charged Shot applies two instances Cryo as they do not share the same ICD, which allows you to trigger Melt reaction twice for both damage instances. Charged Attack will be the majority of her damage output while neglecting her Skill/Burst damage contribution for most scenarios.\n\nRegarding Weapon Choices:\nAmos' Bow: This is an excellent weapon for Ganyu since her Level 2 Charge Shot Bloom extends arrow flight duration and you can get 3 stacks of Amos' Bow passive even on point blank range.\nHamayumi: Due to its passive, this weapon prefers Wanderer's Troupe (4) instead. At higher refinements, Hamayumi can outperform Thundering Pulse and Skyward Harp.\nScion of the Blazing Sun: At [R5], Scion of the Blazing Sun can outperform Thundering Pulse and Skyward Harp.  \nPrototype Crescent: At higher refinement levels with good uptime on its passive, it can potentially be on par with Skyward Harp. However, do bear in mind that not all enemies have weak spots that you can headshot, which does affect its performance significantly. \n\nRegarding Artifact Sets:\nShimenawa's Reminiscence (4) and Wanderer's Troupe (4): If you are able to squeeze 5 Charged Attacks during the 10 second buff duration, Shimenawa's Reminiscence (4) pulls ahead of Wanderer's Troupe (4). Due to it being very difficult to do, Wanderer's Troupe (4) will usually end up dealing more damage for most players. Note that unless you intend to artifact strongbox Wanderer's Troupe pieces, Shimenawa's Riminiscence (4) remains the better set to farm as the domain is greatly resin efficient.\n\nRegarding Talent Priority:\nGanyu's Elemental Burst is low priority on a Melt Build since most of the times, you don't cast her burst at all so that it doesn't steal your Melt reaction.\n\nFREEZE DPS\nFreeze Ganyu gives a lot of i-frames since you would be spamming Elemental Burst from all of your party members off cooldown. Ganyu's Elemental Burst can deal a ton of damage based on how grouped the enemies are, due to the quadratic scaling on her Elemental Burst.\n\nRegarding Weapon Choices: \nPolar Star: This weapon is much harder to optimize with, due to having a very high Crit Rate stat resulting in your Crit Rate going well above 100%. However, if optimised properly (i.e. very little Crit Rate substats), it performs similarly to The First Great Magic.\nAqua Simulacra: Due to the sheer amount of Crit stats you can get from Blizzard Strayer (4), Ganyu's ascension passive and this weapon itself, you can consider running an ATK% circlet, especially if it has better substats than your Crit DMG one.\nAmos' Bow: In quickswap heavy rotations (Ganyu Mona Venti Diona) where you usually don't do a lot of Charged Shots, this weapon performs worse than the other 5 star options listed.\nPrototype Crescent: Similar to the Melt Build, this weapon at higher refinement levels and good passive uptime can pull ahead of some of the 5 star options such as Thundering Pulse and Skyward Harp. However, do bear in mind that not all enemies have weak spots that you can headshot, which does affect its performance significantly. \n\nRegarding Artifact Sets:\nBlizzard Strayer (4): This set is the go to set for a Freeze team comp due to the huge stats it provides.\n\nOFF-FIELD DPS\nAn Off-field DPS Ganyu shines brightly on a Freeze comp as she has 100% Elemental Burst uptime and her Elemental Burst buffs party members' Cryo Damage. \n\nRegarding Weapon Choices:\nPrototype Crescent: This weapon might pull ahead of some of the other options if you activate the buff before casting Elemental Burst.\nElegy for the End: Offers party-wide Elemental Mastery and ATK buff which is quite nice on reaction heavy team comps.\n\nRegarding Artifact Sets:\nBlizzard Strayer (4): This set offers a huge amount of stats, use this set only if your Ganyu is used on a Freeze team.\nNoblesse Oblige (4): This set provides Ganyu with more utility so that she can buff your whole party's ATK by 20%.",
    "builds": [
      {
        "name": "MELT DPS\n✩",
        "artifactMainStats": "Sands - Elemental Mastery / ATK%\nGoblet - Cryo DMG\nCirclet - Crit Rate / DMG",
        "artifactSubStats": "1. Crit Rate / DMG\n2. Elemental Mastery\n3. ATK%\n4. Flat ATK",
        "talentPriority": "1. Normal Attack\n2. Skill\n3. Burst*",
        "abilityTips": "In some teams and situations, using Ganyu's Elemental Burst can be detrimental to overall damage due to stealing Pyro aura, thus reducing the amount of CAs melting.",
        "weapons": [
          "hunter_s_path",
          "the_first_great_magic",
          "amos_bow",
          "aqua_simulacra",
          "polar_star",
          "skyward_harp",
          "thundering_pulse",
          "scion_of_the_blazing_sun",
          "prototype_crescent"
        ],
        "artifactSets": [
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "shimenawa_s_reminiscence"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "wanderer_s_troupe"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "lavawalker"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "retracing_bolide"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "gilded_dreams"
            }
          },
          {
            "type": "choose-2",
            "options": [
              {
                "type": "set",
                "id": "blizzard_strayer"
              },
              {
                "type": "group",
                "id": "18-atk"
              },
              {
                "type": "group",
                "id": "80-em"
              }
            ]
          }
        ]
      },
      {
        "name": "FREEZE DPS\n✩",
        "artifactMainStats": "Sands - ATK%\nGoblet - Cryo DMG\nCirclet - Crit DMG",
        "artifactSubStats": "1. Crit Rate / DMG\n2. ATK%\n3. Energy Recharge\n4. Flat ATK",
        "talentPriority": "1. Burst \n2. Normal Attack\n3. Skill",
        "abilityTips": "Try to not overcap on Crit Rate (within the range of 25%-45% Crit Rate) since Ganyu's A1 passive only affects her Charged Shot and subsequent Blooms.",
        "weapons": [
          "polar_star",
          "the_first_great_magic",
          "aqua_simulacra",
          "thundering_pulse",
          "skyward_harp",
          "amos_bow",
          "prototype_crescent",
          "mouun_s_moon",
          "hunter_s_path"
        ],
        "artifactSets": [
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "blizzard_strayer"
            }
          },
          {
            "type": "choose-2",
            "options": [
              {
                "type": "set",
                "id": "blizzard_strayer"
              },
              {
                "type": "set",
                "id": "noblesse_oblige"
              },
              {
                "type": "group",
                "id": "18-atk"
              }
            ]
          }
        ]
      },
      {
        "name": "OFF-FIELD DPS",
        "artifactMainStats": "Sands - ATK% / Energy Recharge\nGoblet - Cryo DMG\nCirclet - Crit Rate / DMG",
        "artifactSubStats": "1. Energy Recharge (until needed)\n2. Crit Rate / DMG\n3. ATK%\n4. Elemental Mastery (on a non Freeze comp)\n5. Flat ATK",
        "talentPriority": "1. Burst\n2. Skill\n3. Normal Attack",
        "abilityTips": "When using her Elemental Burst, place her Elemental Skill in the AoE to taunt and keep enemies inside the zone for constant damage.\n\nMake sure to hit enemies with her skill's initial damage and her explosion damage as they both regen energy for her ult.",
        "weapons": [
          "aqua_simulacra",
          "thundering_pulse",
          "skyward_harp",
          "polar_star",
          "amos_bow",
          "alley_hunter",
          "the_stringless",
          "prototype_crescent",
          "blackcliff_warbow",
          "the_viridescent_hunt",
          "elegy_for_the_end"
        ],
        "artifactSets": [
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "blizzard_strayer"
            }
          },
          {
            "type": "double",
            "options": [
              {
                "type": "set",
                "id": "blizzard_strayer"
              },
              {
                "type": "set",
                "id": "noblesse_oblige"
              }
            ]
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "emblem_of_severed_fate"
            }
          },
          {
            "type": "choose-2",
            "options": [
              {
                "type": "set",
                "id": "blizzard_strayer"
              },
              {
                "type": "set",
                "id": "noblesse_oblige"
              },
              {
                "type": "set",
                "id": "emblem_of_severed_fate"
              },
              {
                "type": "group",
                "id": "18-atk"
              }
            ]
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "noblesse_oblige"
            }
          }
        ]
      }
    ]
  },
  {
    "nameId": "eula",
    "element": "cryo",
    "weapon": "claymore",
    "notes": "DPS\nEula is an on-field Physical damage dealer who deals a significant portion of her damage through her Elemental Burst. Her Normal Attacks also make up a large portion of her overall damage at low Constellation. Weapon rankings are assuming 130% ER minimum, Superconduct and 4pc Noblesse Oblige buff, otherwise no buffs. \n\nRegarding Weapon Choice:\nRedhorn Stonethresher: This weapon can overtake Wolf's Gravestone in terms of Eula's own damage if team provides enough ATK buffs, but Wolf's Gravestone can make up the damage difference by buffing team damage.\nVerdict: Weapon rankings are assuming no crystallize. \nThe Unforged: Weapon rankings are assuming no shield. With a shield this weapon performs similarly to Beacon of the Reed Sea and Wolf's Gravestone. \nAkuoumaru: This weapon will outperform Luxurious Sea-Lord at higher refinements. At [R5] it can perform similarly to Verdict and Skyward Pride.\nBeacon of the Reed Sea: Weapon ranking assumes one stack. At two stacks, it outperforms other weapon options. \nTidal Shadow: Weapon rankings are assuming the passive is active. At [R5] this weapon performs similarly to Serpent Spine [R1] at 5 stacks. \nSerpent Spine: Weapon rankings are assuming max stacks, in practice this often means running a shielder. At [R5] this weapon performs similarly to Beacon of the Reed Sea.\nRegarding weapons which provide Energy Recharge: In teams with low ER requirements on Eula (such as Triple Cryo + Raiden) these weapons lose some effectiveness. \n\nRegarding Artifact Sets:\nPale Flame (4): This is Eula's optimal artifact set and it relies on having a condition fulfilled in order to outperform Pale Flame (2) Bloodstained Chivalry (2). If you are able to sustain the conditional buff, you will be able to achieve a 50% Physical DMG Bonus + 18% ATK. Without using your Elemental Burst, you can sustain the Pale Flame's 4 piece set bonus because each stack lasts 7s and it refreshes per stack, and Eula's Elemental Skill cooldown is only 4 seconds when doing 1-taps, therefore you can keep the condition up. When using this set, it is recommended to not use Hold Skill cast until your Lightfall Sword is nearly about to end. This restriction is only for players who don't have Eula [C2+]. Please visit the Ability Tips for her combo.\nPale Flame (2) Bloodstained Chivalry (2): This is a non-conditional, consistent artifact set that provides you a constant 50% Physical DMG bonus. While that by itself is amazing, Pale Flame (4) can outperform this set because it also has another 18% ATK buff and is easily maintained through her low tap skill cooldown.",
    "builds": [
      {
        "name": "DPS\n ✩",
        "artifactMainStats": "Sands - ATK%\nGoblet - Physical DMG\nCirclet - Crit Rate / DMG",
        "artifactSubStats": "1. Crit Rate / DMG\n2. Energy Recharge*\n3. ATK%\n4. Flat ATK",
        "talentPriority": "1. Normal Attack = Burst\n2. Skill",
        "abilityTips": "Normal combo while no Burst:\nNA Spam > Tap Skill > NA Spam > Tap Skill\n\nBurst combo:\nTap Skill > Burst > 4 NA > Hold Skill > 4 NA\n\nBurst combo that generates more energy at the cost of slightly less DPS:\nTap Skill > Burst > Tap Skill > 4 NA > Dash Cancel > 2 NA > Hold Skill > 2 NA\n\n*NA = Normal Attack",
        "weapons": [
          "song_of_broken_pines",
          "wolf_s_gravestone",
          "beacon_of_the_reed_sea",
          "skyward_pride",
          "the_unforged",
          "redhorn_stonethresher",
          "serpent_spine",
          "ultimate_overlord_s_mega_magic_sword",
          "luxurious_sea_lord",
          "akuoumaru",
          "tidal_shadow",
          "prototype_archaic",
          "snow_tombed_starsilver",
          "skyrider_greatsword"
        ],
        "artifactSets": [
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "pale_flame"
            }
          },
          {
            "type": "double",
            "options": [
              {
                "type": "set",
                "id": "bloodstained_chivalry"
              },
              {
                "type": "set",
                "id": "pale_flame"
              }
            ]
          },
          {
            "type": "choose-2",
            "options": [
              {
                "type": "set",
                "id": "bloodstained_chivalry"
              },
              {
                "type": "set",
                "id": "pale_flame"
              },
              {
                "type": "group",
                "id": "18-atk"
              }
            ]
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "gladiator_s_finale"
            }
          },
          {
            "type": "double",
            "options": [
              {
                "type": "group",
                "id": "18-atk"
              },
              {
                "type": "group",
                "id": "18-atk"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "nameId": "kamisato_ayaka",
    "element": "cryo",
    "weapon": "sword",
    "notes": "DPS\nKamisato Ayaka is a pretty straightforward DPS that deals most of her damage from her Elemental Burst. She has very high scalings on her burst at the cost of it being 80 energy. You will likely need another Cryo battery on the team to provide energy for her (Diona, Kaeya, Rosaria, etc). She has a special dash (like Mona) and after she dashes, she will get a Cryo infusion on her Normal Attacks. Ensure you always have this bonus active to maximise your rotation damage.\n\nRegarding Main Stats Priority:\nCirclet main stat will be dependant on your overall stats, depending on your overall stats, one can be better than the other. Since Ayaka is able to get a lot of Crit Value from Blizzard Strayer (4) set, ascension passive, and also possibly weapons, ATK% circlets can be competitive to Crit ones, it also has a better drop rate, so don't throw away your good ATK% circlets.\n\nRegarding Weapon Choices:\nPrimordial Jade Cutter: With Blizzard Strayer (4) and Cryo Resonance, this weapon overcrits, so try to avoid getting Crit Rate substats.\nFinale of the Deep: Weapon rankings are assuming you clear the Life Bond. If you cannot clear the Life Bond, it performs similarly to Amenoma Kageuchi.\nAquila Favonia: While Aquila Favonia has Physical Damage% as a main stat, which is basically useless on Ayaka, it is still a good statstick as it has a high base ATK and ATK% buff from the passive, however, it's not a huge upgrade over the other 4 star options and there might be a character which can utilize this weapon better (such as Bennett).\nSkyward Blade: The Energy Recharge main stat provided from this sword makes Ayaka comfortable in terms of having a good burst uptime, try to avoid getting Energy Recharge substats since the weapon already provides you with enough Energy Recharge.\nAmenoma Kageuchi: Lowers Ayaka's Energy Recharge requirement which allows her to allocate some of her Energy Recharge substats to other offensive substats. \nHarbinger of Dawn: A good Crit statstick if you can keep the requirements up (having >90% HP).",
    "builds": [
      {
        "name": "DPS\n ✩",
        "artifactMainStats": "Sands - ATK%\nGoblet - Cryo DMG\nCirclet - Crit DMG / ATK% ",
        "artifactSubStats": "1. Crit DMG\n2. ATK%\n3. Energy Recharge\n4. Crit Rate*\n5. Flat ATK\n\nCrit Rate loses value here assuming you're running Blizzard Strayer (4), if you're not using that artifact set, then it has the same priority as Crit DMG (You still want to aim for 1:2 ratio in the end)",
        "talentPriority": "1. Burst\n2. Normal Attack\n3. Skill",
        "abilityTips": "Ayaka's Charged Attack, Elemental Skill and Elemental Burst is able to hit enemies inside sucked inside Venti's Elemental Burst.\n\nHer Elemental Burst also stays in place on frozen enemies and slightly knocks enemies away when they're not frozen.",
        "weapons": [
          "mistsplitter_reforged",
          "haran_geppaku_futsu",
          "light_of_foliar_incision",
          "primordial_jade_cutter",
          "summit_shaper",
          "finale_of_the_deep",
          "aquila_favonia",
          "skyward_blade",
          "finale_of_the_deep",
          "amenoma_kageuchi",
          "the_black_sword",
          "kagotsurube_isshin",
          "harbinger_of_dawn"
        ],
        "artifactSets": [
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "blizzard_strayer"
            }
          },
          {
            "type": "double",
            "options": [
              {
                "type": "set",
                "id": "blizzard_strayer"
              },
              {
                "type": "group",
                "id": "18-atk"
              }
            ]
          },
          {
            "type": "double",
            "options": [
              {
                "type": "group",
                "id": "18-atk"
              },
              {
                "type": "group",
                "id": "18-atk"
              }
            ]
          },
          {
            "type": "double",
            "options": [
              {
                "type": "set",
                "id": "blizzard_strayer"
              },
              {
                "type": "set",
                "id": "noblesse_oblige"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "nameId": "aloy",
    "element": "cryo",
    "weapon": "bow",
    "notes": "BURST SUPPORT\nAloy is much preferred as a Burst Support over Main DPS as getting coil stacks for her Cryo infusion can be quite unreliable. Aloy needs 4 coil stacks to get the Cryo infusion and you can only get 1 stack every 0.1 seconds which is quite hard to do considering the Bomblets are scattered all over the place. One thing to note regarding Aloy's coil stacks is that she can still get coil stacks even when she's off-field.\n\nAloy is very niche as she only performs well in certain comps and even then, she's still completely replaceable by other characters. She can be utilized on a Freeze team where she can be a battery and nuke at the same time since she provides 5 Cryo particles on her Elemental Skill. She can also be utilized on a Melt team where you can melt her Elemental Burst for quite a decent amount of damage.\n\nRegarding Weapon Choice:\nPolar Star: Forcing to get Polar Star stacks isn't worth due to consuming extra time to get those stacks.\nThe Stringless: Placement was considering Aloy is used on a Reverse Melt team. On Reverse Melt Aloy Stringless, especially at higher refinement levels, can pull ahead of Thundering Pulse.\nPrototype Crescent: Assumes the passive is active by proccing a weak point shot. This weapon especially at higher refinement levels can be as good as Skyward Harp.\nSacrificial Bow: A pretty decent option to make Aloy a Cryo battery as her Elemental Skill provides 5 Cryo particles.\n\nRegarding Artifact Sets:\nBlizzard Strayer (4): This artifact set is best used on a Freeze-focused Aloy as it provides a ton of Crit Value.\n+80 EM set (2): This artifact set bonus only benefits a Melt-focused Aloy, Elemental Mastery provides nothing on a Freeze Aloy.\nNoblesse Oblige (4): Aloy is one of the best Noblesse Oblige (4) holders since she has low energy requirements and cooldown for her Elemental Burst.\n\nRegarding Artifact Main Stat and Substats Priority: \nElemental Mastery is only an option if your Aloy is played on a Reverse Melt team as it provides nothing to a Freeze Aloy. ",
    "builds": [
      {
        "name": "BURST SUPPORT\n✩",
        "artifactMainStats": "Sands - ATK%  / Elemental Mastery*\nGoblet - Cryo DMG\nCirclet - Crit Rate / DMG",
        "artifactSubStats": "1. Crit Rate / DMG\n2. ATK%\n3. Elemental Mastery*\n4. Energy Recharge\n5. Flat ATK",
        "talentPriority": "1. Burst\n2. Skill ",
        "abilityTips": "",
        "weapons": [
          "thundering_pulse",
          "polar_star",
          "skyward_harp",
          "the_stringless",
          "amos_bow",
          "alley_hunter",
          "prototype_crescent",
          "predator",
          "sacrificial_bow"
        ],
        "artifactSets": [
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "blizzard_strayer"
            }
          },
          {
            "type": "double",
            "options": [
              {
                "type": "set",
                "id": "blizzard_strayer"
              },
              {
                "type": "set",
                "id": "noblesse_oblige"
              }
            ]
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "emblem_of_severed_fate"
            }
          },
          {
            "type": "choose-2",
            "options": [
              {
                "type": "set",
                "id": "blizzard_strayer"
              },
              {
                "type": "set",
                "id": "noblesse_oblige"
              },
              {
                "type": "set",
                "id": "emblem_of_severed_fate"
              },
              {
                "type": "group",
                "id": "18-atk"
              },
              {
                "type": "group",
                "id": "80-em"
              }
            ]
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "noblesse_oblige"
            }
          }
        ]
      }
    ]
  },
  {
    "nameId": "shenhe",
    "element": "cryo",
    "weapon": "polearm",
    "notes": "SUPPORT\nShenhe is a Support for Cryo characters, capable of providing damage buffs from her Elemental Skill and dealing damage while providing Cryo and Physical resistance shred from her Elemental Burst. Her Elemental Skill gives a few stacks of additional flat damage bonus to all nearby party members (5 stacks on Tap and 7 stacks on Hold). This additional flat damage bonus only works on Cryo attacks, so characters who don't use Cryo attacks don't benefit from Shenhe's Elemental Skill, do note that Cryo infusion from Anemo characters does act as a Cryo attack, so it benefits from Shenhe's Elemental Skill. Another thing to note is that the additional flat damage bonus Shenhe provides uses Shenhe's current ATK, so it doesn't snapshot.\n\nRegarding Weapon Choices:\nCalamity Queller: The passive of this weapon works perfectly with Shenhe's Elemental Skill because it's dynamic. This weapon also has high Base ATK which makes ATK% substats really effective.\nEngulfing Lightning: This weapon provides Energy Recharge and converts Energy Recharge to ATK, which benefits Shenhe a lot.\nVortex Vanquisher: This weapon's passive can't be stacked off-field, but it's still an ATK stat stick which provides Shenhe with a lot of ATK.\nFavonius Lance: With this weapon, it is better to have some Crit Rate on Shenhe for the weapon passive to proc (Do note that Cryo Resonance provides 15% Crit Rate on Cryo-imbued enemies, so the need for Crit Rate on Shenhe is lowered). With refinements especially, Favonius Lance can outperform 5* options under some conditions.\n\nRegarding Artifact Main Stats and Substats Priority:\nCrit Rate substats become more relevant when using Favonius Lance. \n",
    "builds": [
      {
        "name": "SUPPORT\n✩",
        "artifactMainStats": "Sands - ATK%  / Energy Recharge\nGoblet - ATK%\nCirclet - ATK%",
        "artifactSubStats": "1. Energy Recharge until requirement is met\n2. Atk%\n3. Crit Rate* / DMG\n4. Flat ATK",
        "talentPriority": "1. Skill\n2. Burst",
        "abilityTips": "",
        "weapons": [
          "calamity_queller",
          "engulfing_lightning",
          "vortex_vanquisher",
          "skyward_spine",
          "favonius_lance",
          "primordial_jade_winged_spear",
          "staff_of_homa",
          "wavebreaker_s_fin",
          "missive_windspear",
          "prototype_starglitter"
        ],
        "artifactSets": [
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "noblesse_oblige"
            }
          },
          {
            "type": "choose-2",
            "options": [
              {
                "type": "set",
                "id": "emblem_of_severed_fate"
              },
              {
                "type": "group",
                "id": "18-atk"
              },
              {
                "type": "group",
                "id": "18-atk"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "nameId": "wriothesley",
    "element": "cryo",
    "weapon": "catalyst",
    "notes": "MELT DPS\nWriothesley utilizes the Melt reaction to deal increased damage with his attacks. Weapon rankings assume you use Bennett. \n\nRegarding Weapon Choices:\nFlowing Purity: This weapon is more potent if you can reliably clear the Bond of Life. If you can, this weapon is equal or better than Ballad of the Boundless Blue [R5].\n\nMONO CRYO / FREEZE DPS\nWriothesley can use the Mono Cryo and Freeze teams to benefit from Cryo resonance. However, as Wriothesley's CA shatters, Freeze is not extremely consistent. Mono Cryo removes the Freeze aspect in order to slot another Cryo support. \n\nRegarding Weapon Choices:\nFlowing Purity: This weapon is more potent if you can reliably clear the Bond of Life. If you can, this weapon is equal or better than The Widsith.\n\nRegarding Artifact Set Choices:\nBlizzard Strayer (4): Wriothesley shatters Freeze which makes this set lose valuable uptime. Unlike Marechaussee Hunter (4), it cannot be used in Melt teams, and loses versatility.",
    "builds": [
      {
        "name": "MELT DPS\n ✩",
        "artifactMainStats": "Sands - ATK% / Elemental Mastery\nGoblet - Cryo DMG\nCirclet - Crit Rate / Crit DMG",
        "artifactSubStats": "1. Crit Rate / Crit DMG\n2. ATK%\n~= Elemental Mastery\n3. Flat ATK",
        "talentPriority": "1. Normal Attack\n2. Skill\n3. Burst",
        "abilityTips": "",
        "weapons": [
          "cashflow_supervision",
          "tulaytullah_s_remembrance",
          "a_thousand_floating_dreams",
          "lost_prayer_to_the_sacred_winds",
          "tome_of_the_eternal_flow",
          "skyward_atlas",
          "mappa_mare",
          "the_widsith",
          "ballad_of_the_boundless_blue",
          "flowing_purity"
        ],
        "artifactSets": [
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "marechaussee_hunter"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "shimenawa_s_reminiscence"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "gilded_dreams"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "echoes_of_an_offering"
            }
          },
          {
            "type": "choose-2",
            "options": [
              {
                "type": "set",
                "id": "blizzard_strayer"
              },
              {
                "type": "group",
                "id": "18-atk"
              },
              {
                "type": "group",
                "id": "80-em"
              }
            ]
          }
        ]
      },
      {
        "name": "MONO CRYO / FREEZE DPS\n ✩",
        "artifactMainStats": "Sands - ATK%\nGoblet - Cryo DMG\nCirclet - Crit DMG",
        "artifactSubStats": "1. Crit Rate / Crit DMG\n2. ATK%\n3. Flat ATK\n4. Energy Recharge",
        "talentPriority": "1. Normal Attack\n2. Skill\n3. Burst",
        "abilityTips": "",
        "weapons": [
          "cashflow_supervision",
          "tulaytullah_s_remembrance",
          "memory_of_dust",
          "tome_of_the_eternal_flow",
          "kagura_s_verity",
          "lost_prayer_to_the_sacred_winds",
          "skyward_atlas",
          "ballad_of_the_boundless_blue",
          "the_widsith",
          "flowing_purity"
        ],
        "artifactSets": [
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "marechaussee_hunter"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "blizzard_strayer"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "shimenawa_s_reminiscence"
            }
          },
          {
            "type": "choose-2",
            "options": [
              {
                "type": "set",
                "id": "blizzard_strayer"
              },
              {
                "type": "set",
                "id": "marechaussee_hunter"
              },
              {
                "type": "group",
                "id": "18-atk"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "nameId": "sucrose",
    "element": "anemo",
    "weapon": "catalyst",
    "notes": "EM SUPPORT\nSucrose's Ascension 4 Talent boosts the entire team's EM by 20% of Sucrose's total EM, this is why you want to stack as much Elemental Mastery as possible in her artifacts. As a support, most of Sucrose's value lies on her Ascension 1 and 4 talents, hence leveling her other talents (Normal Attack, Skill, Burst) is not required.\n\nRegarding Weapon Choices: \nThrilling Tales of Dragon Slayers: This weapon does not provide any EM, however it overtakes the other weapons on the list when it comes to buffing your team. It offers 48% ATK boost to the character you swap to which is equivalent to 1 main stat. This buffs your DPS more compared to Sacrificial Fragments which gives ~44EM, equivalent to only 2 substats.\nHakushin Ring: This weapon is a good option for teams where Sucrose can swirl Electro to trigger its damage-boosting passive. In Electro-Charged teams, she can buff Hydro DMG% as well.\nFavonius Codex: This weapon can be useful if you value the extra energy generation from the passive. You may need to get a few Crit Rate substats to trigger the passive reliably.\n\nThere are some team compositions in which Sucrose's Elemental Mastery is not a priority, such as Freeze teams or an Anemo battery for Xiao. In such situations it's better for Sucrose to use Thrilling Tales of the Dragon Slayers.",
    "builds": [
      {
        "name": "EM SUPPORT\n✩",
        "artifactMainStats": "Sands - Elemental Mastery \nGoblet - Elemental Mastery \nCirclet - Elemental Mastery",
        "artifactSubStats": "1. Elemental Mastery\n2. Energy Recharge\n3. ATK%\n4. Crit Rate / DMG",
        "talentPriority": "1. Skill\n2. Burst\n\n*Sucrose's Talent Levels are not a necessity.",
        "abilityTips": "When utilized as a Viridescent Venerer (4) artifact set holder, make sure you don't immediately swap away after casting Skill/Burst, you need to be on-field when the swirl reaction happens for you to trigger the 4-set effect.",
        "weapons": [
          "a_thousand_floating_dreams",
          "wandering_evenstar",
          "sacrificial_fragments",
          "thrilling_tales_of_dragon_slayers",
          "hakushin_ring",
          "magic_guide",
          "favonius_codex"
        ],
        "artifactSets": [
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "viridescent_venerer"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "instructor"
            }
          },
          {
            "type": "double",
            "options": [
              {
                "type": "group",
                "id": "80-em"
              },
              {
                "type": "group",
                "id": "80-em"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "nameId": "sayu",
    "element": "anemo",
    "weapon": "claymore",
    "notes": "SUPPORT\nSayu does more damage with EM builds and heals more with ATK hybrid builds, Healing Bonus circlet's can be used for better heals while maintaining respectable damage. Note that Sayu wants a large amount of Energy Recharge when used as the only Anemo slot on the team.\n\nRegarding Weapon Choices:\nWolf's Gravestone: This is a universal claymore that is capable of buffing your teammates along with providing more healing in Sayu's case. It is best used once you achieve your ER threshold.\nForest Regalia: When used in its niche with aggravate teams it can outpeform Katsuragikiri Nagamasa. Outside of that its just a Energy Recharge% stat stick.\n\nRegarding Artifact Sets:\nViridescent Venerer (4): The bread and butter artifact set for Anemo units, this set provides the ability to shred the enemy's elemental resistance while also buffing Sayu's Swirl damage output.\nOcean-Hued Clam (4): This artifact set trades Sayu's utility in favor of stronger healing and some extra damage. It is generally not recommended to farm this set for Sayu specifically.",
    "builds": [
      {
        "name": "SUPPORT\n✩",
        "artifactMainStats": "Sands - Energy Recharge / Elemental Mastery\nGoblet - Elemental Mastery / ATK%\nCirclet - Healing Bonus / Elemental Mastery",
        "artifactSubStats": "1. Energy Recharge\n2. Elemental Mastery\n3. ATK%\n4. Crit Rate**\n\n\n\n**Crit Rate only for\nFavonius Greatsword.",
        "talentPriority": "1. Burst\n2. Skill",
        "abilityTips": "Use hold Skill then immediately press it to generate more particles.",
        "weapons": [
          "favonius_greatsword",
          "wolf_s_gravestone",
          "katsuragikiri_nagamasa",
          "skyward_pride",
          "sacrificial_greatsword",
          "makhaira_aquamarine",
          "mailed_flower",
          "forest_regalia",
          "rainslasher",
          "bloodtainted_greatsword"
        ],
        "artifactSets": [
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "viridescent_venerer"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "noblesse_oblige"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "emblem_of_severed_fate"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "ocean_hued_clam"
            }
          }
        ]
      }
    ]
  },
  {
    "nameId": "shikanoin_heizou",
    "element": "anemo",
    "weapon": "catalyst",
    "notes": "Regarding Support Weapon Options:\nIn teams where Heizou's damage is less potent, or his goal is to support the team with 4VV and his A4, he can choose to run one of the following weapons.\nFavonius Codex: This weapon can help lower ER requirements for the team, as well as allow Heizou to run less ER on himself.\nThrilling Tales of Dragon Slayers: This weapon offers a colossal 48% ATK buff to a party member at the expense of Heizou's damage.\nHakushin Ring: In Electro-Charged teams, this can be used to buff both Anemo, Hydro, and Electro damage, and scales well with refines. It is recommended to run Anemo DMG based artifacts on this build.\nPrototype Amber: In teams where there is no healer, Shikanoin Heizou can use this weapon to help the team's survivability.\n\nANEMO DPS\nShikanoin Heizou's Anemo DPS build is roughly equal to his Elemental Mastery build assuming he isn't being used in an Electro-Charged team. He has very low Energy Recharge needs; At [C4] he can run 100% Energy Recharge.\n\nRegarding Weapon Choices:\nLost Prayer to the Sacred Winds: In teams where Shikanoin Heizou and Bennett are used in the same team, this weapon is better than Skyward Atlas.\nThe Widsith: The Widsith provides the highest possible critical hit single strike damage for Heizou. However, its long cooldown leads it to lack consistency, and it has a chance of obtaining the relatively useless EM buff for Anemo DPS Heizou.\n\nRegarding Artifact Sets:\nViridescent Venerer (4): Heizou should use this set unless someone else in the team has it.\n\nREACTION DPS\nShikanoin Heizou does not get the same benefits from an EM build as other Anemo users do. He still has to level his talents, and allocate substats into offensive substats such as attack and crit to equal Anemo DPS. However it is notiably better than Anemo DPS build if used in Electro-Charged teams.\n\nRegarding Artifact Sets:\nNoblesse Oblige (4): Only use this set if you already have a Viridescent Venerer (4) user on your team",
    "builds": [
      {
        "name": "\nANEMO DPS\n ✩",
        "artifactMainStats": "Sands - ATK%\nGoblet - Anemo DMG\nCirclet - Crit Rate / Crit DMG",
        "artifactSubStats": "1. Crit Rate / DMG\n2. ATK%\n3. Energy Recharge\n4. Elemental Mastery",
        "talentPriority": "1. Skill\n2. Normal Attack\n3. Burst",
        "abilityTips": "",
        "weapons": [
          "kagura_s_verity",
          "skyward_atlas",
          "lost_prayer_to_the_sacred_winds",
          "cashflow_supervision",
          "tome_of_the_eternal_flow",
          "tulaytullah_s_remembrance",
          "solar_pearl",
          "memory_of_dust",
          "the_widsith",
          "mappa_mare",
          "flowing_purity",
          "favonius_codex",
          "thrilling_tales_of_dragon_slayers",
          "hakushin_ring",
          "prototype_amber"
        ],
        "artifactSets": [
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "viridescent_venerer"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "golden_troupe"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "golden_troupe"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "desert_pavilion_chronicle"
            }
          },
          {
            "type": "choose-2",
            "options": [
              {
                "type": "set",
                "id": "golden_troupe"
              },
              {
                "type": "group",
                "id": "18-atk"
              },
              {
                "type": "group",
                "id": "80-em"
              }
            ]
          }
        ]
      },
      {
        "name": "\nREACTION DPS\n ✩",
        "artifactMainStats": "Sands - Elemental Mastery\nGoblet - Elemental Mastery\nCirclet - Elemental Mastery",
        "artifactSubStats": "1. Elemental Mastery\n2. ATK%\n3. Energy Recharge\n4. Crit Rate",
        "talentPriority": "1. Skill\n2. Normal Attack\n3. Burst",
        "abilityTips": "",
        "weapons": [
          "a_thousand_floating_dreams",
          "sacrificial_fragments",
          "wandering_evenstar",
          "mappa_mare",
          "favonius_codex",
          "thrilling_tales_of_dragon_slayers",
          "hakushin_ring",
          "prototype_amber"
        ],
        "artifactSets": [
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "viridescent_venerer"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "noblesse_oblige"
            }
          }
        ]
      }
    ]
  },
  {
    "nameId": "faruzan",
    "element": "anemo",
    "weapon": "bow",
    "notes": "SUPPORT\nAs the premier Anemo support unit for Anemo dps based teams, Faruzan combines both high Anemo damage buffing with Anemo resistance shredding to become a cornerstone of any team that wants to focus on Anemo damage. Though building her means primarly focusing on dealing with her high Energy Requirements.\n\nRegarding Weapon Choices:\nElegy for the End: Usually only a better option at higher constellation levels such as [C6] where her energy needs can be met without Favonius passive particles.\nSacrificial Bow: It's worth mentioning that the extra Pressurized Collapse from a second E wont give you any extra particles if it's within her 5.5 second particle generation cooldown.\n\nRegarding Artifact Sets:\nImportant Note: Faruzan's Energy Recharge requirements pre-C6 can be extremely high, so high that it can be difficult to build enough using a 4pc set bonus. As such, using Emblem of Severed Fate (2) with whatever artifact combination will give you the most Energy Recharge is a reasonable option. \nNoblesse Oblige (4): This is her best option in teams that either won't benefit significantly from Viridescent Venerer (4) shred, or teams that already have another unit holding the aforementioned set.\nTenacity of the Millelith (4): This has similar usage cases to Noblesse Oblige (4), except in that it requires Faruzan C6 for improved uptime through extra Pressurized Collapse activations.\nEmblem of Severed Fate (4): This set will give Faruzan her best personal damage output, assuming the team is already running Viridescent Venerer (4). Also if you're willing to invest more time farming substats it can potentially give you more Energy Recharge than running The Exile (2).\nGolden Troupe: This set is better than Emblem of Severed Fate (4) if Faruzan is C6 because of the pressurized collapse damage.",
    "builds": [
      {
        "name": "SUPPORT\n✩",
        "artifactMainStats": "Sands - Energy Recharge\nGoblet - Anemo DMG*\nCirclet - Crit Rate / DMG\n\n*Due to Faruzan's high Energy Recharge requirements pre-C6, it is acceptable to disregard running an Anemo goblet in favor of a goblet which provides more ER. A Crit Rate circlet should still be taken to ensure Favonius procs. ",
        "artifactSubStats": "1. Energy Recharge\n2. Crit Rate*\n3. Crit DMG\n4. ATK%\n5. Flat ATK\n\n*Only assumes higher priority than Crit DMG when using Favonius Warbow",
        "talentPriority": "1. Burst\n2. Skill\n3. Normal Attack",
        "abilityTips": "Regarding Optimal Rotations\n\nFor funneling particles to Faruzan:\nSkill --> Charged Shot --> Burst\n\nFor funneling particles to other units:\nSkill --> Burst --> Charged Shot\n\nAt C6 bear in mind the Charged shot portion of the rotation no longer becomes necessary since your burst will start activating the Pressurized Collapses instead.\n",
        "weapons": [
          "favonius_warbow",
          "elegy_for_the_end",
          "end_of_the_line",
          "fading_twilight",
          "sacrificial_bow"
        ],
        "artifactSets": [
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "viridescent_venerer"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "noblesse_oblige"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "scroll_of_the_hero_of_cinder_city"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "emblem_of_severed_fate"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "golden_troupe"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "tenacity_of_the_millelith"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "emblem_of_severed_fate"
            }
          }
        ]
      }
    ]
  },
  {
    "nameId": "lynette",
    "element": "anemo",
    "weapon": "sword",
    "notes": "OFF-FIELD DPS\nLynette serves as a burst-oriented Anemo unit, that unlike other Anemo units does not excel in any one category such as personal damage, crowd control and buffs. Her potential for crowd control is partially dependent on unlocking her C1 and C4, and neither her ATK buff nor her personal damage reach notably high levels. What truly distinguishes her among Anemo characters is her unique capability to utilize ousia-aligned attacks as a Fontaine character. This distinct trait enables her to neutralize specific enemy mechanics by triggering annihilation reactions, as part of the overall Arkhe mechanic.\n\nRegarding Weapon Choices:\nFreedom-Sworn: While this is her best buffing weapon it would be extremely difficult to meet her Energy requirements without a Energy Recharge weapon especially while primarly using her as an off-field unit.\nSacrificial Sword: Ideally you would want higher refinement levels as in [R3]+ so its cooldown aligns better with your rotation.\n\nRegarding Artifact Sets:\nNoblesse Oblige (4): This is a good option for her in teams that either won't benefit significantly from Viridescent Venerer (4) shred, or where putting it on her is the lowest total team damage loss.\nEmblem of Severed Fate (4): This set will give Lynette her best personal damage output, assuming the team is already running Viridescent Venerer (4).",
    "builds": [
      {
        "name": "OFF-FIELD DPS\n✩",
        "artifactMainStats": "Sands - Energy Recharge / ATK%\nGoblet - Anemo DMG\nCirclet - Crit Rate / DMG",
        "artifactSubStats": "1. Energy Recharge*\n2. Crit Rate**\n3. Crit DMG\n4. ATK%\n5. Flat ATK\n\n*Prioritize Energy Recharge until you meet the requirement.\n\n**Only assumes higher priority than Crit DMG when using Favonius Sword",
        "talentPriority": "1. Burst\n2. Skill",
        "abilityTips": "",
        "weapons": [
          "favonius_sword",
          "fleuve_cendre_ferryman",
          "sacrificial_sword",
          "amenoma_kageuchi",
          "skyward_blade",
          "freedom_sworn"
        ],
        "artifactSets": [
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "viridescent_venerer"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "emblem_of_severed_fate"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "noblesse_oblige"
            }
          },
          {
            "type": "double",
            "options": [
              {
                "type": "set",
                "id": "noblesse_oblige"
              },
              {
                "type": "group",
                "id": "18-atk"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "nameId": "jean",
    "element": "anemo",
    "weapon": "sword",
    "notes": "SUPPORT AND DAMAGE\nJean's Elemental Skill can be used to fling smaller mobs into the air to deal fall damage, and to stagger bigger ones. Her healing scales with ATK.\n\nRegarding Weapon Choices:\nAmenoma Kageuchi: This weapon can lower your ER% requirements, depending on the number of stacks on the passive and the refinement of this weapon. As such, at higher refines / more stacks on the passive, this weapon can perform better than Skyward Blade, while at lower refines / less stacks, it can perform worse.\nLion's Roar: Depending on passive uptime, it can be ranked much higher in terms of Jean's personal damage.\n\nRegarding Artifact Sets:\nViridescent Venerer (4): The bread and butter for Anemo characters in general, as it is commonly used for the 40% elemental resistance shred.\nNoblesse Oblige (4): Another option for providing utilities to the team. This set gives a 20% partywide ATK boost after Jean casts her Elemental Burst.\nOcean-Hued Clam (4): The best set for Jean's personal damage, as the damage it deals scales with Jean's burst healing. However, because Jean's total damage output is on the low end, it is generally recommended to prioritize utility options such as Noblesse Oblige (4) or Viridescent Venerer (4) over this set.\n\nRegarding Main Stats Priority:\nWhile typically Jean will heal enough that you do not need to try and build for as much healing as possible, when paired with Furina it can be beneficial swapping to an ATK% goblet and Healing Bonus circlet. This is to aid in building Fanfare points faster, and Jean's personal damage is not particularly significant to begin with. When building Jean in such a way, prioritize weapons which provide ATK% or Energy Recharge. If using Favonius Sword, a Crit Rate circlet can be taken to ensure more consistent procs. \n\nRegarding Talent Priorities: \nIf you prefer more damage than healing, prioritize Elemental Skill over Elemental Burst since it scales better.\nFor Support Jean, you can either go for more ATK for stronger heals, but relatively lower Burst uptime, or more ER for lower heals, but higher Burst uptime. Choosing between these two is up to personal preference, although if another Anemo character is on the team, Jean has very few energy problems and can potentially go for a full Sub DPS build.\n\nREACTION DPS\nReaction DPS Jean relies on her unique interaction regarding her Elemental Burst. If the active character if afflicted by Hydro / Pyro / Electro / Cryo, Jean's Burst will infuse them with Anemo and create a swirl trigger around the character. This interaction can be abused by using Bennett to consistantly infuse the active character with Pyro. This allows for an extremely high amount of Pyro Swirl triggers. These swirl's damage scales off of Jean's Elemental Mastery.",
    "builds": [
      {
        "name": "SUPPORT AND DAMAGE\n✩",
        "artifactMainStats": "Sands - ATK% / Energy Recharge\nGoblet - Anemo Damage / ATK%*\nCirclet - Crit Rate / DMG / Healing Bonus*\n\n*Check notes",
        "artifactSubStats": "1. Energy Recharge*\n2. Crit Rate = Crit DMG\n3. ATK%\n4. Elemental Mastery\n5. Flat ATK\n\n*Prioritize Energy Recharge until requirement is met",
        "talentPriority": "1. Burst = Skill*",
        "abilityTips": "",
        "weapons": [
          "primordial_jade_cutter",
          "freedom_sworn",
          "mistsplitter_reforged",
          "haran_geppaku_futsu",
          "skyward_blade",
          "festering_desire",
          "favonius_sword",
          "amenoma_kageuchi",
          "summit_shaper",
          "aquila_favonia",
          "the_flute",
          "sapwood_blade",
          "lion_s_roar"
        ],
        "artifactSets": [
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "viridescent_venerer"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "noblesse_oblige"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "ocean_hued_clam"
            }
          },
          {
            "type": "choose-2",
            "options": [
              {
                "type": "set",
                "id": "noblesse_oblige"
              },
              {
                "type": "set",
                "id": "emblem_of_severed_fate"
              },
              {
                "type": "group",
                "id": "18-atk"
              }
            ]
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "emblem_of_severed_fate"
            }
          }
        ]
      },
      {
        "name": "REACTION DPS",
        "artifactMainStats": "Sands - Energy Recharge / Elemental Mastery\nGoblet - Elemental Mastery\nCirclet - Elemental Mastery",
        "artifactSubStats": "1. Energy Recharge *until requirement\n2. Elemental Mastery\n3. ATK%",
        "talentPriority": "1. Burst = Skill*\n\n**talents are not large upgrades for Reaction DPS Jean",
        "abilityTips": "",
        "weapons": [
          "freedom_sworn",
          "xiphos_moonlight",
          "iron_sting",
          "toukabou_shigure",
          "favonius_sword",
          "dark_iron_sword"
        ],
        "artifactSets": [
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "viridescent_venerer"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "gilded_dreams"
            }
          },
          {
            "type": "double",
            "options": [
              {
                "type": "group",
                "id": "80-em"
              },
              {
                "type": "group",
                "id": "80-em"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "nameId": "venti",
    "element": "anemo",
    "weapon": "bow",
    "notes": "REACTION OFF-FIELD DPS\nThis build focuses on damage over ER because of his ER ascension stat. This weapon order is in the assumption of EM Venti\n\nRegarding Weapon Choices:\nFavonius Warbow: While terrible for personal damage, this weapon allows Venti to provide more energy for his teammates, while also covering his ER needs. Finding Crit Rate in substats is recommended for consistent passive procs. If Venti does significant damage with Elemental Reactions, or triggers other Elemental Reactions, the value of this weapon becomes lower.\nElegy for the End: The ATK buff of Elegy for the End DOES NOT buff Venti's burst if Venti is the one equipping the bow, but the EM buff affects Venti's Swirl reaction. This is due to Venti's burst snapshotting his stats (excluding EM toward transformative reactions such as Swirl) at the time of cast. While an [R1] Elegy for the End yields slightly lower Venti damage compared to an [R5] Stringless (~7% assuming 50% Elegy buff uptime), it provides a party-wide ATK and EM buff which can be better in terms of total team damage and comfortable ER.\nCloudforged: This weapon provides the most Elemental Mastery of any weapon. Venti can reliably achieve two stacks of the passive if he uses his Burst at least every 18s. This can make its performance slighlty better than listed here.\nAlley Hunter and Mouun's Moon: At [R5] These weapons perform better than Favonius Warbow.\n\nANEMO OFF-FIELD DPS\nRecommended only in situations where Venti recieves a lot of buffs from teammates (e.g. Bennett, Faruzan) and doesn't trigger reactions such as Aggravate or Electro-Charged.\n\nRegarding Weapon Choices:\nElegy for the End: Elegy is about equal to Alley Hunter in terms of DPS, but its teamwide buffs make it a more worthwhile choice on Venti.\n\nRegarding Mainstats: \nGoblet: The Goblet can be ATK% or Anemo DMG, generally choose the one with better substats. If Venti's Stormeye's absorbed element is further boosted (e.g. Shenhe for Cryo) then an ATK% Goblet will be preferred.",
    "builds": [
      {
        "name": "REACTION\nOFF-FIELD DPS\n✩",
        "artifactMainStats": "Sands - Elemental Mastery \nGoblet - Elemental Mastery \nCirclet - Elemental Mastery ",
        "artifactSubStats": "1. Elemental Mastery\n2. Energy Recharge\n3. ATK%\n4. Crit Rate / DMG\n5. Flat ATK\n\n",
        "talentPriority": "1. Burst\n2. Skill\n\n*For an Reaction-focused build, upgrading Venti's talent levels isn't a necessity. ",
        "abilityTips": "Make sure you don't immediately swap away after casting Burst, you need to be on-field for VV 4-set perk to proc on Swirl first.(E > Q to avoid this issue)\n\nYou can infuse elements onto Venti's Burst if you walk up with an element status on you. (e.g. Bennett Burst > Venti Burst > Walk up to infuse Pyro)\n\nCheck out this link to see which characters can hit the enemies sucked and ragdolled in Venti's burst. ",
        "weapons": [
          "elegy_for_the_end",
          "the_stringless",
          "windblume_ode",
          "polar_star",
          "favonius_warbow",
          "fading_twilight",
          "alley_hunter",
          "mouun_s_moon",
          "song_of_stillness"
        ],
        "artifactSets": [
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "viridescent_venerer"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "noblesse_oblige"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "gilded_dreams"
            }
          },
          {
            "type": "double",
            "options": [
              {
                "type": "group",
                "id": "80-em"
              },
              {
                "type": "group",
                "id": "80-em"
              }
            ]
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "instructor"
            }
          }
        ]
      },
      {
        "name": "ANEMO OFF-FIELD DPS",
        "artifactMainStats": "Sands - ATK%\nGoblet - ATK% / Anemo DMG\nCirclet Crit Rate / DMG",
        "artifactSubStats": "1. Crit Rate / DMG\n2. Energy Recharge\n3. ATK%\n4. Elemental Mastery\n5. Flat ATK",
        "talentPriority": "1. Burst\n2. Skill",
        "abilityTips": "Same as above",
        "weapons": [
          "polar_star",
          "elegy_for_the_end",
          "the_stringless",
          "aqua_simulacra",
          "hunter_s_path",
          "skyward_harp",
          "alley_hunter",
          "mouun_s_moon",
          "thundering_pulse",
          "the_first_great_magic",
          "song_of_stillness",
          "favonius_warbow"
        ],
        "artifactSets": [
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "viridescent_venerer"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "noblesse_oblige"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "emblem_of_severed_fate"
            }
          },
          {
            "type": "choose-2",
            "options": [
              {
                "type": "set",
                "id": "viridescent_venerer"
              },
              {
                "type": "set",
                "id": "noblesse_oblige"
              },
              {
                "type": "set",
                "id": "emblem_of_severed_fate"
              },
              {
                "type": "group",
                "id": "18-atk"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "nameId": "xiao",
    "element": "anemo",
    "weapon": "polearm",
    "notes": "DPS\nXiao has issues with energy generation because he cannot generate any particles with his Elemental Skill while his Burst is active, so it is not suggested to use his Elemental Skill during Elemental Burst.\nBefore swapping to Xiao, often you would cast the Skill of your Anemo battery (e.g Sucrose) and then cast his Skill twice followed by Burst. You will want to be half way through your Burst animation before the particles reach you, so this way you can start off your burst with a portion of the energy gauge already filled.\nYou'll want to pair Xiao with a battery, which would often be another Anemo character (e.g C6 Faruzan, Sucrose, Jean) to help with energy generation. Xiao's Elemental Burst ends when you swap to another character. Although he has two charges of his Elemental Skill, only ONE charge comes back per cooldown.\n\nRegarding Weapon Choices: \nWeapon rankings are assuming no buffs. Do note that weapon rankings can vary depending on your buff assumptions.\n**IMPORTANT NOTE** Weapon rankings are not assuming an Energy Recharge minimum. This means that weapons such as Skyward Spine, Engulfing Lightning and Favonius Lance will be stronger than reflected in this ranking with higher ER requirements. Xiao's Energy Recharge requirements will fluctuate significantly depending on your team and clear times. Please use the Energy Recharge Calculator for your own team. \nCalamity Queller: This weapon has a really high Base ATK, which means it benefits more from ATK% buffs (e.g. Thrilling Tales of the Dragon Slayers) if compared with other weapons.\nVortex Vanquisher: In teams with fewer ATK Buffs such as from Bennett / TTDS this weapon will perform slightly better than Calamity Queller, or when using Marechaussee Hunter (4) while shielded and fully stacked it can even perform slightly better than Staff of Homa in teams with Bennett and Faruzan. \nBlackcliff Pole: Weapon rankings are assuming 0 stacks due to the unreliability of the weapon passive. At 3 stacks, Blackcliff Pole performs similarly to Staff of the Scarlet Sands.\nProspector's Drill: Ranking assumes 1.5 stacks. At [R5], this weapon peforms similarly to Deathmatch. \nDeathmatch and Lithic Spear: At [R5] these weapons perform similarly to Staff of the Scarlet Sands. \nFavonius Lance: In teams with higher Energy Recharge Requirements, this weapon is slighty worse than Deathmatch.\n\nRegarding Artifact Sets: \nDesert Pavilion Chronicle (4): If Xiao has a weapon with low Base ATK in a team with a lot of external ATK buffs like Bennett or Thrilling Tales of the Dragons Slayers this artifact set can be equal to or better than Vermillion Hereafter (4).\nMarechaussee Hunter (4): At base, this set is generally worse than Vermillion Hereafter (4). However, it gains significant value with ATK% and Flat DMG buffs such as Bennett, TTDS, and Xianyun, this can make it equal to or better than Vermillion Hereafter (4). 4MH provides a significant amount of Crit Rate. Do keep in mind that due to Xiao's ascension stat being Crit Rate, it may be difficult to optimize around this set if using Crit Rate weapons. \nPrioritize +15% Anemo DMG set (2) over the other +18% ATK set (2) sets if there are external ATK% buff sources on your team. Emblem of Severed Fate (2) can be used if you lack Energy Recharge substats while using a non-Energy Recharge weapon.\n\nRegarding Artifact Main Stats: Anemo DMG% goblets are recommended for Xiao. ATK% goblets serve as a good alternative for him. If using Desert Pavilion Chronicle (4) ATK% Goblet may be preferred in teams without Bennett.",
    "builds": [
      {
        "name": "DPS\n ✩",
        "artifactMainStats": "Sands - ATK%\nGoblet - Anemo DMG / ATK%*\nCirclet - Crit Rate / DMG\n\n",
        "artifactSubStats": "1. Energy Recharge until requirement is met\n2. Crit Rate/DMG\n3. ATK%\n4. Elemental Mastery\n~= Flat ATK",
        "talentPriority": "1. Normal Attack\n2. Burst\n3. Skill",
        "abilityTips": "Regarding Xiao's Optimal Skill Rotation:\nSkill -> Skill -> Burst -> Plunge Combo\n\nRegarding Xiao's Plunge Combo:\nBest combo for Xiao when fighting a single target:\nNormal Attack -> Charged Attack -> High Plunge (no collision possible)\n\nNormal Attack -> Charged Attack -> Low Plunge (collision only possible on Low Plunge)\n\nHigh Plunge spam (collision possible on High Plunge)\n\nBest combo for Xiao when fighting multiple enemies:\nHigh Plunge spam ",
        "weapons": [
          "primordial_jade_winged_spear",
          "staff_of_homa",
          "lumidouce_elegy",
          "vortex_vanquisher",
          "calamity_queller",
          "staff_of_the_scarlet_sands",
          "crimson_moon_s_semblance",
          "deathmatch",
          "skyward_spine",
          "engulfing_lightning",
          "missive_windspear",
          "prospector_s_drill",
          "wavebreaker_s_fin",
          "favonius_lance",
          "white_tassel"
        ],
        "artifactSets": [
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "vermillion_hereafter"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "marechaussee_hunter"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "desert_pavilion_chronicle"
            }
          },
          {
            "type": "double",
            "options": [
              {
                "type": "set",
                "id": "emblem_of_severed_fate"
              },
              {
                "type": "group",
                "id": "18-atk"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "nameId": "kaedehara_kazuha",
    "element": "anemo",
    "weapon": "sword",
    "notes": "REACTION DPS & SUPPORT\nKazuha's 4th Ascension Passive encourages players to maximise Elemental Mastery in order to maximise his utility and increase his Elemental Reaction damage.\n\nRegarding Weapon Choices: \nThe ultimate goal is to try stack as much EM while getting enough ER for a consistent Burst uptime. Having any of the ER swords or a second Anemo character in the team will also help reduce the needs for ER and prioritize EM substats more.\n\nFavonius Sword: With this weapon, try to aim for some Crit Rate stats to trigger the weapon passive reliably.\nSacrificial Sword: It is generally not needed to use the additonal instance of Kazuha's Elemental Skill should Sacrificial Sword proc its passive, unless you absolutely need to use it for extra grouping.\nSapwood Blade: Only really viable at high refinement in specific Dendro teams where you can trigger Dendro reactions usually through swirling Electro/Hydro on enemies with Dendro applied to them (most consistently done in Aggravate reaction comps).\n\nRegarding Artifact Sets:\nThundering Fury (4): This is a niche build that excels only in AoE situations and with specific teams. Those teams include an off-field Hydro and Electro support to allow Kazuha to constantly trigger the 4pc effect and spam his Elemental Skill, aswell as another Anemo support to hold the Viridiscent Venerer (4) set. Such teams can be Kazuha + Kokomi + Fischl + Venti, with Barbara and Sucrose being weaker replacements for Kokomi and Venti. This team triggers multiple fall damage instances against enemies that can be Crowd Controlled by Kazuha. Fischl can use The Viridiscent Hunt bow to allow for more fall damage instances. **NOTE: This team performs very poorly in pure single target situations.",
    "builds": [
      {
        "name": "REACTION DPS & SUPPORT\n✩",
        "artifactMainStats": "Sands - Elemental Mastery / Energy Recharge\nGoblet - Elemental Mastery\nCirclet - Elemental Mastery\n",
        "artifactSubStats": "1. Energy Recharge*\n2. Elemental Mastery\n3. ATK% / Crit Rate**\n\n*Prioritize Energy Recharge until you meet the requirement. \n\n**Prioritize Crit Rate over ATK% if running Favonius",
        "talentPriority": "1. Burst\n2. Skill = NA*\n\n**For an EM-focused build, upgrading Kazuha's talent levels isn't a necessity.\n\n*Note that upgrading Kazuha's NA talent increases the damage of his plunge attacks. ",
        "abilityTips": "The element which is absorbed by Kazuha's elemental burst follows the priority of Pyro > Hydro > Electro > Cryo, and can be absorbed from both the active character and enemies. (i.e. Standing in Bennett 's Elemental Burst will result in Kazuha's Elemental Burst infusing Pyro as Bennett's Elemental Burst applies Pyro to the active character)\n",
        "weapons": [
          "freedom_sworn",
          "xiphos_moonlight",
          "xiphos_moonlight",
          "favonius_sword",
          "iron_sting",
          "toukabou_shigure",
          "sacrificial_sword",
          "fleuve_cendre_ferryman",
          "sapwood_blade",
          "skyward_blade",
          "skyrider_sword"
        ],
        "artifactSets": [
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "viridescent_venerer"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "instructor"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "thundering_fury"
            }
          }
        ]
      }
    ]
  },
  {
    "nameId": "wanderer",
    "element": "anemo",
    "weapon": "catalyst",
    "notes": "DPS\nExternal Buffs means the existance of a unit that provides ATK, or makes ATK less necessary (e.g. Bennett, Yun Jin)\nWanderer focuses on doing damage by activating his elemental skill and performing boosted normal attacks. It should be noted that in this state, he does not have knockback resistance so a shielder or other form of knockback immunity is recommended. It is not worth building ER to burst every rotation unless Wanderer is C2. Instead, bursting every other rotation is preferred.\n\nRegarding Weapon Choices:\nMemory of Dust: This weapon can pull farther ahead than other options if Wanderer is shielded. If shielded, it maintains its ranking without Bennett, and performs better than The Widsith with Bennett.\nDodoco Tales [R5]: This weapon uses a different rotation of E N1 CAx6 N1 CAx6 to maximize its passive. \nThe Widsith: Because Wanderer doesn't focus on Swirl damage, this weapon can be inconsistent if you get the EM buff. \n\nRegarding Artifact Sets:\nShimenawa's Reminiscence (4): If Wanderer is C2 or higher it is not recomended to run this set.\nEchoes of an Offering (4): If your ping is above 100, it is not recommended to run this set specifically\nBlizzard Strayer (4): This set synergizes well with the 20% Crit Rate that Wanderer gets from swirling Cryo. It is only recommended if you have close to 100% uptime on Freeze, which requires very specific teams. Despite this, with 100% Freeze uptime, this set is still worse than Desert Pavilion Chronicle (4).\nLavawalker (4): In teams with consistent Pyro application, this set is about equal to Echoes of an Offering (4).\nViridescent Venerer (4): In teams where the majority of the damage share is not linked to Wanderer, and there is no other viable holder of the set, he may use Viridescent Venerer (4).",
    "builds": [
      {
        "name": "DPS\n✩",
        "artifactMainStats": "Sands - ATK%\nGoblet - Anemo DMG\nCirclet - Crit Rate / DMG",
        "artifactSubStats": "1. Crit Rate / DMG\n2. ATK%\n3. Flat ATK\n4. Elemental Mastery\n5. Energy Recharge",
        "talentPriority": "1. Normal Attack\n2. Skill\n3. Burst\n\n**IF WANDERER IS C2, PRIORITIZE BURST OVER SKILL",
        "abilityTips": "Desert Pavilion and Signature Weapon Rotation: (Q) E CA (N3 repeat)\n\nSignature Weapon Rotation (non Desert Pavillion): (Q) E (N3 repeat) \n\nDesert Pavillion Rotation: (Q) E CA (N2C repeat)\n\nOther Artifact Sets Rotation: (Q) E (N2C repeat)\n\nShimenawa's Reminiscence Rotation: E (N2C repeat) (Q)\n\nSwirl Driver Rotation: E (N3C repeat)",
        "weapons": [
          "tulaytullah_s_remembrance",
          "memory_of_dust",
          "skyward_atlas",
          "lost_prayer_to_the_sacred_winds",
          "the_widsith",
          "kagura_s_verity",
          "tome_of_the_eternal_flow",
          "solar_pearl",
          "ballad_of_the_boundless_blue",
          "blackcliff_agate",
          "eye_of_perception",
          "mappa_mare",
          "frostbearer"
        ],
        "artifactSets": [
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "desert_pavilion_chronicle"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "shimenawa_s_reminiscence"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "echoes_of_an_offering"
            }
          },
          {
            "type": "double",
            "options": [
              {
                "type": "group",
                "id": "18-atk"
              },
              {
                "type": "group",
                "id": "18-atk"
              }
            ]
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "blizzard_strayer"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "lavawalker"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "viridescent_venerer"
            }
          }
        ]
      },
      {
        "name": "DPS (EXTERNAL ATK BUFFS)\n✩",
        "artifactMainStats": "Sands - ATK%\nGoblet - Anemo DMG\nCirclet - Crit Rate / DMG",
        "artifactSubStats": "1. Crit Rate / DMG\n2. ATK%\n3. Flat ATK\n4. Elemental Mastery\n5. Energy Recharge",
        "talentPriority": "1. Normal Attack\n2. Skill\n3. Burst\n\n**IF WANDERER IS C2, PRIORITIZE BURST OVER SKILL",
        "abilityTips": "",
        "weapons": [
          "tulaytullah_s_remembrance",
          "lost_prayer_to_the_sacred_winds",
          "the_widsith",
          "kagura_s_verity",
          "tome_of_the_eternal_flow",
          "skyward_atlas",
          "memory_of_dust",
          "solar_pearl",
          "ballad_of_the_boundless_blue",
          "blackcliff_agate",
          "eye_of_perception",
          "mappa_mare",
          "frostbearer"
        ],
        "artifactSets": [
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "desert_pavilion_chronicle"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "shimenawa_s_reminiscence"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "echoes_of_an_offering"
            }
          },
          {
            "type": "double",
            "options": [
              {
                "type": "group",
                "id": "18-atk"
              },
              {
                "type": "group",
                "id": "18-atk"
              }
            ]
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "blizzard_strayer"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "lavawalker"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "viridescent_venerer"
            }
          }
        ]
      }
    ]
  },
  {
    "nameId": "xianyun",
    "element": "anemo",
    "weapon": "catalyst",
    "notes": "PLUNGE ATTACK SUPPORT\nXianyun's main utilities are her jump height boost, healing, and Plunging Attack buff. While her healing is tied to her Burst Levels, the only way to increase her Plunging Attack buff is by increasing her total ATK.\n\nRegarding Weapon Choices:\nFavonius Codex: With high team Energy Recharge Requirements, this weapon pulls ahead in value.\nHakushin Ring: In teams with Electro units to benefit from the passive, this weapon ranks higher than Ballad of the Boundless Blue.\nThrilling Tales of Dragon Slayers: The value of this weapon depends on who and how reliably they can obtain the buff.\nPrototype Amber: At low refinements, this weapon is not worth using. The lower Xianyun's total Energy Recharge requirements, the worse this weapon performs. At [R5] this weapon is similar or better than Ballad of the Boundless Blue.\nWine and Song: Perform a dash to gain the ATK% from the passive.\n\nRegarding Artifact Sets:\nNoblesse Oblige (4): Better than Viridescent Venerer if someone else already has the set or if Pyro/Hydro/Cryo/Electro damage is not a large source of the team's damage.\nOcean Hued Clam (4) / Song of Days Past (4): In Single Target scenarios, Song of Days Past can be better than Ocean Hued Clam. However, Clam is more consistent.",
    "builds": [
      {
        "name": "HIGH ENERGY REQUIREMENT\nSUPPORT\n✩",
        "artifactMainStats": "Sands - ATK% / Energy Recharge\nGoblet - ATK%\nCirclet - ATK%",
        "artifactSubStats": "1. Energy Recharge\n2. ATK%\n3. Flat ATK\n\n**Crit Rate**\n\n*Prioritize Crit Rate if running Favonius\n",
        "talentPriority": "1. Burst\n2. Skill\n\n*Skill Talent levels are a very minor increase in damage and not a necessity",
        "abilityTips": "Most teams will not use all three uses of Xianyun's Skill, since it is too time intensive to do so. A simple E Q is the ideal rotation for most teams.",
        "weapons": [
          "crane_s_echoing_call",
          "favonius_codex",
          "oathsworn_eye",
          "wine_and_song",
          "ballad_of_the_boundless_blue",
          "hakushin_ring",
          "prototype_amber"
        ],
        "artifactSets": [
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "viridescent_venerer"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "noblesse_oblige"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "song_of_days_past"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "scroll_of_the_hero_of_cinder_city"
            }
          },
          {
            "type": "double",
            "options": [
              {
                "type": "group",
                "id": "18-atk"
              },
              {
                "type": "group",
                "id": "18-atk"
              }
            ]
          }
        ]
      },
      {
        "name": "LOW ENERGY REQUIREMENT\nSUPPORT\n✩",
        "artifactMainStats": "Sands - ATK% / Energy Recharge\nGoblet - ATK%\nCirclet - ATK%",
        "artifactSubStats": "1. Energy Recharge\n2. ATK%\n3. Flat ATK\n\n**Crit Rate**\n\n*Prioritize Crit Rate if running Favonius\n",
        "talentPriority": "1. Burst\n2. Skill\n\n*Skill Talent levels are a very minor increase in damage and not a necessity",
        "abilityTips": "",
        "weapons": [
          "crane_s_echoing_call",
          "skyward_atlas",
          "memory_of_dust",
          "cashflow_supervision",
          "thrilling_tales_of_dragon_slayers",
          "favonius_codex",
          "oathsworn_eye",
          "flowing_purity",
          "wine_and_song",
          "ballad_of_the_boundless_blue",
          "hakushin_ring",
          "frostbearer",
          "prototype_amber"
        ],
        "artifactSets": [
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "viridescent_venerer"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "noblesse_oblige"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "song_of_days_past"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "scroll_of_the_hero_of_cinder_city"
            }
          },
          {
            "type": "double",
            "options": [
              {
                "type": "group",
                "id": "18-atk"
              },
              {
                "type": "group",
                "id": "18-atk"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "nameId": "ningguang",
    "element": "geo",
    "weapon": "catalyst",
    "notes": "DPS\nDue to Ningguang having a really low Base ATK and no ATK conversion mechanics, external ATK buffers such as Bennett is recommended as a support for Ningguang to bump up her ATK stat.\n\nRegarding Weapon Choices:\nSkyward Atlas: Without Bennett, this weapon performs better than Lost Prayer to the Sacred Winds.\nMemory of Dust: Without Bennett, this weapon performs better than Lost Prayer to the Sacred Winds and Skyward Atlas.\nThe Widsith: At [R5] this weapon performs better than Kagura's Verity on average.\nFlowing Purity: Ningguang's best F2P weapon. Becomes stronger if you can clear the Bond of Life every rotation, which makes a healer more valuable in her team.\nSolar Pearl: At [R5] this weapon performs better than The Widsith [R5] and Kagura's Verity. It is recommended to add a Normal Attack before casing Ningguang's other abilities.\nHakushin Ring: This weapon performs better than Mappa Mare when an Electro character is in the party.\n\nRegarding Artifact Sets:\nNighttime Whispers in the Echoing Woods (4): This ranking assumes Ningguang consistently has a crystallize shield.\nEmblem of Severed Fate (2): This set performs worse than other options when Ningguang does not need to build Energy Recharge%.\nThundersoother (4): This set performs better than Archaic Petra (2) Emblem of Severed Fate (2) if an Electro aura is always present on the enemy.\nLavawalker (4): This set performs better than Archaic Petra (2) Emblem of Severed Fate (2) if a Pyro aura is always present on the enemy.\nArchaic Petra (4): This set tends to be the best set for overall team damage in many cases. However, Archaic Petra is extremely resin-inefficient to farm and is therefore only recommended to be farmed over time from the artifact strongbox.\nEmblem of Severed Fate (4): This set will perform better than Archaic Petra (2) +18% ATK set (2) if you need the Energy Recharge and you do not use Charge Attacks more than normal.\nHusk of Opulent Dreams (4): This set performs on par with Archaic Petra (2) +18% ATK set (2) with its inclusion in the strongbox it has become a strong generalist option.",
    "builds": [
      {
        "name": "DPS\n ✩",
        "artifactMainStats": "Sands - ATK%\nGoblet - Geo DMG\nCirclet - Crit Rate / DMG",
        "artifactSubStats": "1. Crit Rate / DMG\n2. ATK%\n3. Energy Recharge\n4. Flat ATK",
        "talentPriority": "1. Burst\n2. Normal Attack\n3. Skill",
        "abilityTips": "Ningguang's Elemental Skill has a 6 second internal cooldown on generating energy, so for the sake of maintaining Elemental Burst uptime, wait 6 seconds to cast again if you need energy. It also breaks when casted on top of another Geo Structure, you can intentionally use a structure to break your first screen.\n\n\n",
        "weapons": [
          "lost_prayer_to_the_sacred_winds",
          "kagura_s_verity",
          "skyward_atlas",
          "memory_of_dust",
          "solar_pearl",
          "the_widsith",
          "flowing_purity",
          "eye_of_perception",
          "dodoco_tales",
          "wine_and_song",
          "mappa_mare",
          "hakushin_ring"
        ],
        "artifactSets": [
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "nighttime_whispers_in_the_echoing_woods"
            }
          },
          {
            "type": "choose-2",
            "options": [
              {
                "type": "set",
                "id": "noblesse_oblige"
              },
              {
                "type": "set",
                "id": "archaic_petra"
              },
              {
                "type": "set",
                "id": "emblem_of_severed_fate"
              },
              {
                "type": "group",
                "id": "18-atk"
              }
            ]
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "husk_of_opulent_dreams"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "thundersoother"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "lavawalker"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "archaic_petra"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "emblem_of_severed_fate"
            }
          }
        ]
      }
    ]
  },
  {
    "nameId": "noelle",
    "element": "geo",
    "weapon": "claymore",
    "notes": "DPS\nIt's recommended to avoid building a DPS Noelle if she's not [C5+].\nNoelle DPS is best optimized at [C6] where she converts an additional 50% DEF into ATK. Her ability to sustain her team with shields, heals and AoE damage makes for a reliable DPS when your team is built around her.\n\nRegarding Weapon Choices:\nSerpent Spine: When using Husk of Opulent Dreams, Serpent Spine stacks are prioritized over Husk of Opulent Dreams stacks due to their conflicting nature in gaining stacks (On-Field vs Off-Field).\nSkyward Pride: Useful if you are unable to get ER from your substats. Does really well while its passive is active, but falls off in sustained fights. Comfort option that can lose to a high refined Whiteblind with stacks.\n\nRegarding Artifact Sets:\nMarechaussee Hunter (4): Optimal for personal damage by a few percentage points when paired with Furina.\nHusk of Opulent Dreams (4): Noelle snapshots her DEF on burst cast. To get the full 4 stacks' DEF% boost during your first burst, you need to wait 12 seconds off field before swapping in. In abyss, time spent before the chamber starts still generates stacks.\n\nDRIVER\nGenerally optimal when running multiple off-field DPS like Yelan, Xingqiu or Fischl. Instead of focusing on her own damage (but not neglecting it), Noelle takes a supportive role with Archaic Petra to buff her team, while still taking advantage of her AoE and strong defensive utility.\n\nRegarding Artifact Main Stats Priority:\nWhen driving a team with Furina, Noelle generally lacks DEF% from weapon, set bonus and team buffs. In order to counteract Furina's HP drain, especially with high HP units like Yelan, multiple DEF% mainstats may be required.",
    "builds": [
      {
        "name": "DPS\n ✩",
        "artifactMainStats": "Sands - DEF% / ATK%\nGoblet - Geo DMG\nCirclet - Crit Rate / DMG\n\nATK% sands when below C6 or below Talent Level 9 Burst.",
        "artifactSubStats": "1. Crit Rate / DMG\n2. Energy Recharge\n3. DEF%",
        "talentPriority": "1. Normal Attack\n2. Burst\n3. Skill",
        "abilityTips": "1 / 2 Targets: N1>N2>N3>N4>dash/hop\nThis isn't always feasible due to cast time (as well as knockback issues).\n\nMultiple Targets: N1>N2>N3>dash/hop\n\nWith Redhorn, using Charged Attack can become more effective. While spinning, opening and closing either the map or adventurer's handbook once will allow you to bypass the 5 second restriction.",
        "weapons": [
          "redhorn_stonethresher",
          "serpent_spine",
          "skyward_pride",
          "whiteblind"
        ],
        "artifactSets": [
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "marechaussee_hunter"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "husk_of_opulent_dreams"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "retracing_bolide"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "gladiator_s_finale"
            }
          }
        ]
      },
      {
        "name": "DRIVER\n✩",
        "artifactMainStats": "Sands - DEF%\nGoblet - Geo DMG / DEF%*\nCirclet - Crit Rate / DMG / DEF%*",
        "artifactSubStats": "1. Crit Rate / DMG\n2. Energy Recharge\n3. DEF%",
        "talentPriority": "1. Skill*\n2. Normal Attack = Burst\n\n*Dependence on Skill's talent level depends on your total DEF and whether Furina is in the team or not",
        "abilityTips": "",
        "weapons": [
          "favonius_greatsword"
        ],
        "artifactSets": [
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "archaic_petra"
            }
          }
        ]
      }
    ]
  },
  {
    "nameId": "gorou",
    "element": "geo",
    "weapon": "bow",
    "notes": "SUPPORT\nGorou is a Support character that can give increasing buffs to your party members from his Elemental Skill and Elemental Burst based on the number of Geo characters in your team (capped at 3). Casting his Elemental Skill sets up a banner which gives flat DEF (1 Geo), Interruption Resistance (2 Geo) and Geo DMG% Bonus (3 Geo) for your active character standing inside the banner radius. Casting his Elemental Burst creates a field following the active character which deals periodic damage and offers the same bonuses given by the Skill, destroying any placed banners in the process, it also pulls in nearby Elemental Shards created by Crystallize reactions. Due to his kit focusing on buffing DEF and Geo DMG, he's a specialised support geared towards Geo DPS that scales with DEF, such as Noelle or Itto. He can see niche use at [C6] with other Geo characters as well.\n\nRegarding Weapon Choices:\nElegy for the End: Elegy offers a helpful ER substat alongside an EM and ATK% buff for your teammates. While not directly useful in teams centered around Noelle or Itto, this could possibly be a good choice for future Geo DPS characters, or in a team which utilizes Geo Resonance.\n\nRegarding Artifact Sets:\nThe Exile (4): Casting Elemental Burst regenerates a total of 6 Energy for each of your party member. This set reduces your Energy Requirements by a bit for all of your party members, which can be quite beneficial. Do note that this is a 4 star set so you're potentially missing out on 5 star stat scaling, which is a 34% difference in mainstat value and 25% difference in individual substat value.\nNoblesse Oblige (4): The effectiveness of this set increases if you've already met the ER requirement for Gorou. At that point, you'd no longer need to run the recommended ER% sets, which means you can opt for this instead. \n\nRegarding Artifact Mainstats and Substats Priority:\nDEF% mainstats and substats (and potentially a Healing Bonus mainstat on Circlet) can be considered at [C4] due to being able to heal the active character based on his DEF during burst. This is useful if you plan to use him as a solo healer.\nCrit Rate circlet and substats can be considered when Gorou is using Favonius Warbow to trigger the passive comfortably.\nER% substats can usually be more important than getting the right mainstat, as Gorou's damage contribution to a team is negligible, while being able to get Energy for his Burst is a lot more important.",
    "builds": [
      {
        "name": "SUPPORT\n ✩",
        "artifactMainStats": "Sands - Energy Recharge\nGoblet - Geo DMG / DEF%*\nCirclet - Crit Rate / DEF%* / Healing Bonus*",
        "artifactSubStats": "1. Energy Recharge\n2. DEF%*\n3. Crit Rate*",
        "talentPriority": "1. Skill",
        "abilityTips": "[C2] extends the duration of Gorou's Elemental Burst from 9 seconds to 12 seconds if you can obtain the required Crystallize shields. This allows his teammates to gain the 3 Geo 15% Geo DMG% bonus for a longer duration, so it's preferable to use Burst as your last ability before swapping into your DPS. ",
        "weapons": [
          "favonius_warbow",
          "sacrificial_bow",
          "elegy_for_the_end"
        ],
        "artifactSets": [
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "the_exile"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "noblesse_oblige"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "emblem_of_severed_fate"
            }
          }
        ]
      }
    ]
  },
  {
    "nameId": "yun_jin",
    "element": "geo",
    "weapon": "polearm",
    "notes": "SUPPORT\nYun Jin is a Support character for Normal Attack focused characters who can deal off-field damage via her Elemental Burst. Yun Jin's Elemental Burst grants nearby party members 30 stacks of additional flat damage bonus on Normal Attacks which scales with Yun Jin's current DEF. This means that external DEF buffs like from Gorou's Elemental Skill and/or Burst doesn't provide much to Yun Jin since it only buffs active characters and not off-field ones.\n\nRegarding Weapon Choices:\nFavonius Lance: With this weapon, try to aim for some Crit Rate stats to trigger the weapon passive reliably.\nKitain Cross Spear: Although the EM mainstat isn't useful for Yun Jin, the passive decreases her Energy Recharge requirements by a lot, especially at higher refinements. It can reduce her ER% reqs depending on refinement. Note that she must cast Elemental Burst first before Skill, as the passive drains 3 energy initially when Skill is cast. This weapon can be left at level 1 while still getting full effect from the passive.\n\nRegarding Artifact Main Stats and Substats Priority:\nCrit Rate should only be considered when Yun Jin is equpping Favonius Lance to reliably proc the passive.",
    "builds": [
      {
        "name": "SUPPORT\n✩",
        "artifactMainStats": "Sands - DEF% / Energy Recharge\nGoblet - DEF%\nCirclet - DEF% / Crit Rate*",
        "artifactSubStats": "1. DEF%\n2. Energy Recharge\n3. Flat DEF\n4. Crit Rate*",
        "talentPriority": "1. Burst\n2. Skill",
        "abilityTips": "",
        "weapons": [
          "favonius_lance",
          "engulfing_lightning",
          "the_catch",
          "prototype_starglitter",
          "kitain_cross_spear"
        ],
        "artifactSets": [
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "husk_of_opulent_dreams"
            }
          },
          {
            "type": "double",
            "options": [
              {
                "type": "set",
                "id": "emblem_of_severed_fate"
              },
              {
                "type": "set",
                "id": "husk_of_opulent_dreams"
              }
            ]
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "noblesse_oblige"
            }
          }
        ]
      }
    ]
  },
  {
    "nameId": "zhongli",
    "element": "geo",
    "weapon": "polearm",
    "notes": "PHYSICAL DPS\nOptimal Physical Rotation:\nNormal Attack until Spear Kick -> Dodge/Jump Cancel -> Repeat\n\nSHIELD SUPPORT\nThis kind of playstyle is very straightforward; stack as much HP as possible. Prioritize HP scaling polearms such as Black Tassel and artifact sets such as Tenacity of the Millelith (4) to capitalize on Zhongli's Shield. Most of the time, especially on a HP-focused Zhongli, casting Elemental Burst is a DPS loss due to the cast time, which is why you'd only want to cast Elemental Burst for the Crowd Control it offers, and not for damage.\n\nNote that if paired with Xingqiu and/or Beidou, the damage reduction from orbitals from Xingqiu's Elemental Skill and Elemental Burst and/or Beidou's Elemental Burst can be utilized on Zhongli's shield, making it basically unbreakable.\n\nRegarding Artifact Main Stats and Substats Priority:\nCrit Rate should only be considered when Zhongli is equpping Favonius Lance to reliably proc the passive.\n\nRegarding Weapon Choices:\nFavonius Lance: Use this weapon over Black Tassel if you value the team energy (Note that you need to build some amount of Crit Rate if you are running Favonius Lance to trigger the passive)\n\nRegarding Artifact sets:\nArchaic Petra (4): Can be more useful than Tenacity of the Millelith (4) in teams that dont scale as well with ATK buffs or already have another Tenacity of the Millelith holder. Though it can be an awkward set to utlize well without extending rotation times, since the Holder of the set (Zhongli in this case) has to pickup the shard for the buff to take effect.\nTenacity of the Millelith (4): This set is best in slot for Shield HP, but it's usually inconsistent against Bosses and needs good Construct placement, due to it's inconsistency, it's better to use other buffing sets that are mentioned if they work for the team.\nDeepwood Memories (4): This set works best in Dendro reaction focused teams (Bloom/Burgeon/Hyperbloom/Spread) that prefer having Deepwood Memories on Zhongli so that they can run more damage focused sets such as Gilded Dreams / Flower of Paradise Lost instead for the highest overall damage gain. That said it means keeping the enemies near your pillar's to have good uptime on the Dendro resistance shred effect, which can be difficult with no grouping abilities in a team.\nInstructor (4): This set is usually only used in a few heavily reaction focused teams, such as Ganyu Melt or Hu Tao Vape, where you're maximising your damage in exchange for a weaker shield. Though Zhongli's shield is still usually more than strong enough even with fewer substat rolls to strengthen it.\n\nBURST SUPPORT\nZhongli can be utilized as a Geo Burst damage dealer due to his short Elemental Burst cooldown (12s) and low energy cost (40 Energy). His Elemental Skill Hold Cast (Shield) scales with HP and at Ascension 4, you would unlock a talent that allows your Elemental Burst to scale with 33% of Zhongli's Max HP, making him a great source of Shield and damage. Though in certain teams without either very high investment into his damage or enough time in the rotation to burst without extending rotation times his burst can be a DPS loss.\n\nRegarding Weapon Choices:\nFavonius Lance: If the team values the particles from this weapon, then it can be better than all the other options mentioned for overall team damage (Note that you need to build some amount of Crit Rate if you are running Favonius Lance to trigger the passive)\n\nRegarding Artifact Main Stats:\nATK sands provides more damage than HP sands, but it does have lesser Shield HP. If you want more Shield HP, you can consider running a HP sands.\n\nRegarding Artifact Sets:\nNoblesse Oblige (2) Archaic Petra (2): On lower ER requirements where Zhongli doesn't need to worry about his energy needs, this set pulls ahead of Emblem of Severed Fate (4).\nNoblesse Oblige (4): This set provides Zhongli more utility when casting his Elemental Burst, you can use this set on Zhongli if there is nobody else on the team who's equipping this set.\nTenacity of the Millelith (4): Just like Noblesse Oblige (4), this set provides Zhongli with more utility if his Elemental Skill hits an enemy. This set also provides Zhongli with stronger shields.",
    "builds": [
      {
        "name": "PHYSICAL DPS",
        "artifactMainStats": "Sands - ATK% / HP%\nGoblet - Physical DMG\nCirclet - Crit Rate / DMG",
        "artifactSubStats": "1. Crit Rate / DMG\n2. ATK%\n3. HP%\n4. Energy Recharge\n5. Flat ATK",
        "talentPriority": "1. Normal Attack\n2. Burst\n3. Skill",
        "abilityTips": "",
        "weapons": [
          "crescent_pike",
          "primordial_jade_winged_spear",
          "staff_of_homa",
          "vortex_vanquisher",
          "deathmatch",
          "skyward_spine",
          "dragonspine_spear",
          "blackcliff_pole",
          "white_tassel"
        ],
        "artifactSets": [
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "pale_flame"
            }
          },
          {
            "type": "double",
            "options": [
              {
                "type": "set",
                "id": "bloodstained_chivalry"
              },
              {
                "type": "set",
                "id": "pale_flame"
              }
            ]
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "gladiator_s_finale"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "group",
              "id": "18-atk"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "retracing_bolide"
            }
          }
        ]
      },
      {
        "name": "SHIELD SUPPORT\n✩",
        "artifactMainStats": "Sands - HP%\nGoblet - HP%\nCirclet - HP% / Crit Rate*",
        "artifactSubStats": "1. HP%\n2. Flat HP\n3. Energy Recharge",
        "talentPriority": "1. Skill\n2. Burst",
        "abilityTips": "",
        "weapons": [
          "black_tassel",
          "favonius_lance"
        ],
        "artifactSets": [
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "archaic_petra"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "scroll_of_the_hero_of_cinder_city"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "deepwood_memories"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "instructor"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "tenacity_of_the_millelith"
            }
          },
          {
            "type": "double",
            "options": [
              {
                "type": "set",
                "id": "tenacity_of_the_millelith"
              },
              {
                "type": "set",
                "id": "vourukasha_s_glow"
              }
            ]
          }
        ]
      },
      {
        "name": "BURST SUPPORT\n✩",
        "artifactMainStats": "Sands - ATK% / HP%*\nGoblet - Geo DMG \nCirclet - Crit Rate / DMG\n",
        "artifactSubStats": "1. Crit Rate / DMG\n2. ATK%\n3. HP%\n4. Energy Recharge\n5. Flat ATK\n6. Flat HP",
        "talentPriority": "1. Burst\n2. Skill\n",
        "abilityTips": "",
        "weapons": [
          "staff_of_homa",
          "lumidouce_elegy",
          "primordial_jade_winged_spear",
          "skyward_spine",
          "vortex_vanquisher",
          "calamity_queller",
          "deathmatch",
          "engulfing_lightning",
          "missive_windspear",
          "favonius_lance"
        ],
        "artifactSets": [
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "emblem_of_severed_fate"
            }
          },
          {
            "type": "double",
            "options": [
              {
                "type": "set",
                "id": "noblesse_oblige"
              },
              {
                "type": "set",
                "id": "archaic_petra"
              }
            ]
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "noblesse_oblige"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "tenacity_of_the_millelith"
            }
          }
        ]
      }
    ]
  },
  {
    "nameId": "albedo",
    "element": "geo",
    "weapon": "sword",
    "notes": "OFF-FIELD DPS\nAlbedo is a character that can summon a Geo Construct from his Elemental Skill which deals damage on a 2 second interval whenever enemies in the field are damaged. His Elemental Burst provides 125 EM to the party, which is good on teams that rely on amplification reactions, such as Vaporize. It is worth noting that since his stat priority is focused on DEF (Elemental Skill scaling), you might want to skip casting Elemental Burst if your team doesn't benefit from the 125 EM buff. Another option is to build him with ATK-DEF Hybrid, which ends up with lower Skill damage but higher Burst damage.\n\nSKILL ONLY\nRegarding Weapon Choices:\nHarbinger of Dawn: Albedo's Elemental Skill scales with Defense, which is why the Base ATK from the weapon doesn't matter that much. Harbinger of Dawn offers a lot of Crit stats which is why it is one of the strongest weapons for him despite being a 3 star weapon. The downside of this weapon is that you'd need to keep Albedo's HP at 90% or higher to benefit from the passive, so it might be annoying to use against certain enemies which has a HP lowering debuff, even when off-field, such as Corrosion.\nMistsplitter Reforged: Realistically you are only able to get 2 stacks of this weapon's passive and this requires setup. Generally just use Harbinger of Dawn instead and give your Mistsplitter Reforged to another sword DPS character.\nFreedom-Sworn: Equipping this weapon will decrease Albedo's own damage significantly but he is one of the better Freedom-Sworn holders since he can trigger the passive quite easily to buff your other party members.\nWolf-Fang: Weapon rankings use [R1]. At [R5], it performs better than Harbinger of Dawn due to it being unconditional. It's worth noting the Crit Rate passive of Wolf-Fang does not stack off-field, you can perform Skill>N1>Swap character instead of just Skill>Swap character, for two stacks instead of one, but the difference isn't significant. \n\nSKILL + BURST\nRegarding Weapon Choices:\nHarbinger of Dawn: Albedo's Elemental Skill scales with Defense, which is why the Base ATK from the weapon doesn't matter that much. Harbinger of Dawn offers a lot of Crit stats which is why it is one of the strongest weapons for him despite being a 3 star weapon. The downside of this weapon is that you'd need to keep Albedo's HP at 90% or higher to benefit from the passive, so it might be annoying to use against certain enemies which has a HP lowering debuff, even when off-field, such as Corrosion.\nMistsplitter Reforged: Realistically you are only able to get 2 stacks of this weapon's passive and this requires setup. Generally just use Harbinger of Dawn instead and give your Mistsplitter Reforged to another sword DPS character.\nFreedom-Sworn: Equipping this weapon will decrease Albedo's own damage significantly but he is one of the better Freedom-Sworn holders since he can trigger the passive quite easily to buff your other party members.\nWolf-Fang: Weapon rankings use [R1]. At [R5], it performs better than Primordial Jade Cutter. It's worth noting the Crit Rate passive of Wolf-Fang does not stack off-field, you can perform Burst>Skill>N1>Swap character instead of just Burst>Skill>Swap character, for more stacks, but the difference isn't significant. \n\nOFF-FIELD DPS\nRegarding Artifact Sets:\nHusk of Opulent Dreams (4): Due to Albedo's skill snapshotting upon cast, you need to either wait ~12 seconds before starting a domain/fight to reach max stacks or recast his skill to benefit from the DEF and Geo DMG bonus provided by the 4 piece set effect.\nGolden Troupe (4): With Cinnabar Spindle, this set performs similarly to Husk of Opulent Dreams (4), and slightly better than Husk with the addition of Gorou and another Geo teammate assuming Spindle still. With Harbinger of Dawn however, this set performs worse than Husk of Opulent Dreams (4). It performs worse if Albedo uses his Burst.\nTenacity of the Millelith (4): This set is used for the 4 piece set effect which has good uptime on Albedo. Worth noting that this set decreases your Elemental Skill damage by a lot if compared to the other offensive sets.\nNoblesse Oblige (4): If you don't have another character in your party that has this set, you can use this set on Albedo. You might want to get some Energy Recharge substats to maintain your Elemental Burst uptime for this. It is also worth noting that this set decreases your Elemental Skill damage by a lot if compared to the other offensive sets.\nArchaic Petra (4): This set is a niche option for Albedo. It is lower personal damage than several other set options, but can be a reasonable option in some teams for buffing other characters. Do note that the 4pc bonus requires you to pick the shard up on Albedo. \n\nRegarding Artifact Substats Priority:\nATK% and Energy Recharge substats are only valuable on a Hybrid Albedo that casts his Elemental Burst.",
    "builds": [
      {
        "name": "SKILL ONLY\nOFF-FIELD DPS ✩",
        "artifactMainStats": "Sands - DEF%\nGoblet - Geo DMG \nCirclet - Crit Rate / DMG / DEF%",
        "artifactSubStats": "1. Crit Rate / DMG\n2. DEF%\n3. ATK%*\n4. Energy Recharge*",
        "talentPriority": "1. Skill\n2. Burst*\n\n*Albedo's Burst is not used in some teams, namely Geo teams such as Itto, Albedo, Gorou, Flexible. In such cases, you do not need to level it.\n",
        "abilityTips": "Albedo's Elemental Skill particle generation is completely RNG like Zhongli, but with better odds.",
        "weapons": [
          "uraku_misugiri",
          "cinnabar_spindle",
          "harbinger_of_dawn",
          "primordial_jade_cutter",
          "light_of_foliar_incision",
          "haran_geppaku_futsu",
          "mistsplitter_reforged",
          "freedom_sworn"
        ],
        "artifactSets": [
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "husk_of_opulent_dreams"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "golden_troupe"
            }
          },
          {
            "type": "choose-2",
            "options": [
              {
                "type": "set",
                "id": "archaic_petra"
              },
              {
                "type": "set",
                "id": "husk_of_opulent_dreams"
              },
              {
                "type": "set",
                "id": "golden_troupe"
              }
            ]
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "archaic_petra"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "tenacity_of_the_millelith"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "noblesse_oblige"
            }
          }
        ]
      },
      {
        "name": "SKILL + BURST\nOFF-FIELD DPS\n✩",
        "artifactMainStats": "Sands - DEF%\nGoblet - Geo DMG \nCirclet - Crit Rate / DMG / DEF%",
        "artifactSubStats": "1. Crit Rate / DMG\n2. DEF%\n3. ATK%*\n4. Energy Recharge*",
        "talentPriority": "1. Skill\n2. Burst*\n\n*Albedo's Burst is not used in some teams, namely Geo teams such as Itto, Albedo, Gorou, Flexible. In such cases, you do not need to level it.\n",
        "abilityTips": "",
        "weapons": [
          "uraku_misugiri",
          "primordial_jade_cutter",
          "cinnabar_spindle",
          "light_of_foliar_incision",
          "mistsplitter_reforged",
          "haran_geppaku_futsu",
          "harbinger_of_dawn"
        ],
        "artifactSets": [
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "husk_of_opulent_dreams"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "golden_troupe"
            }
          },
          {
            "type": "choose-2",
            "options": [
              {
                "type": "set",
                "id": "archaic_petra"
              },
              {
                "type": "set",
                "id": "husk_of_opulent_dreams"
              },
              {
                "type": "set",
                "id": "golden_troupe"
              }
            ]
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "archaic_petra"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "tenacity_of_the_millelith"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "noblesse_oblige"
            }
          }
        ]
      }
    ]
  },
  {
    "nameId": "arataki_itto",
    "element": "geo",
    "weapon": "claymore",
    "notes": "DPS\nArataki Itto is a Geo DPS Character who takes advantage of his Elemental Burst's ATK boost and Geo infusion to deal significant damage during its uptime. His combos involve stacking and unleashing his Charged Attacks, named Arataki Kesagiri. Arataki Kesagiri consumes no stamina and can be casted continuously as long as he has Superlative Superstrength stacks. Superlative Superstrength is capped at 5 stacks at any given time, and Itto gets those stacks when his 2nd and 4th Normal Attack string hits an enemy. Activating his Elemental Burst allows his 1st and 3rd Normal Attack to also generate stacks. Itto's Elemental Skill deals damage to enemies on cast and summons a taunt, Ushi, which is considered a Geo Construct. This initial cast damage grants Itto 1 Superlative Superstrength stack, and upon Ushi leaving the field, Itto is granted another stack. When Ushi takes damage, Itto gains a stack (capped at 1 stack per 2 seconds). Itto's Elemental Burst converts his Normal and Charged Attacks into Geo DMG, increases Itto's Normal Attack Speed and converts a portion of Itto's current DEF to ATK.\n\nRegarding Weapon Choices:\nSerpent Spine: When using Husk of Opulent Dreams, Serpent Spine stacks are prioritized over Husk of Opulent Dreams stacks due to their conflicting nature in gaining stacks (On-Field vs Off-Field).\nSkyward Pride: Can be a great or bad weapon for Itto depending on your ER needs. The less Energy Recharge you need (due to particle generation from your party members or ER from subs), the less useful this weapon becomes.\nWhiteblind: Your rotations often start with 1 stack of this weapon, and due to Itto's Burst snapshotting DEF on cast, you're unable to take advantage of further DEF% from the stacks.\n\nRegarding Artifact Sets: \nRetracting Bolide (4): This set grants you an additional 40% Normal and Charged Attack DMG when shielded. Crystallize can be unreliable so a consistent shielder is preferred, such as Zhongli.",
    "builds": [
      {
        "name": "DPS\n ✩",
        "artifactMainStats": "Sands - DEF%\nGoblet - Geo DMG\nCirclet - Crit Rate / DMG",
        "artifactSubStats": "1. Energy Recharge*\n2. Crit Rate / DMG\n3. DEF%\n4. ATK%\n5. Flat DEF\n6. Flat ATK\n\n*Prioritize Energy Recharge until you meet the requirement.",
        "talentPriority": "1. Normal Attack\n2. Burst\n3. Skill",
        "abilityTips": "",
        "weapons": [
          "redhorn_stonethresher",
          "serpent_spine",
          "skyward_pride",
          "whiteblind"
        ],
        "artifactSets": [
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "husk_of_opulent_dreams"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "desert_pavilion_chronicle"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "retracing_bolide"
            }
          },
          {
            "type": "choose-2",
            "options": [
              {
                "type": "set",
                "id": "archaic_petra"
              },
              {
                "type": "set",
                "id": "emblem_of_severed_fate"
              },
              {
                "type": "set",
                "id": "husk_of_opulent_dreams"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "nameId": "navia",
    "element": "geo",
    "weapon": "claymore",
    "notes": "DPS\nNavia is a DPS that doesn't demand much field time. While most of her DPS is frontloaded into her Skill, she can stay on-field to take advantage of her 4s Geo conversion window. Her Burst lets her generate Crystal Shrapnel stacks and is important to use every rotation.\n\nRegarding Weapon Choices:\nTidal Shadow: Assumes Navia is able to be healed consistently. Otherwise, it is not recommended to use this weapon.",
    "builds": [
      {
        "name": "DPS\n✩",
        "artifactMainStats": "Sands - ATK% / Energy Recharge\nGoblet - Geo DMG\nCirclet - Crit Rate / DMG",
        "artifactSubStats": "1. Energy Recharge*\n2. Crit Rate / DMG\n3. ATK%\n4. Flat ATK\n\n*Prioritize Energy Recharge until you meet the requirement.",
        "talentPriority": "1. Skill\n2. Burst\n~= Normal Attack",
        "abilityTips": "Full Combo:\nE N3D N2 E N3D N2\n\nThe final N2 is omitted if units like Fischl or Xiangling are used during Bennett's Burst before Navia.",
        "weapons": [
          "serpent_spine",
          "beacon_of_the_reed_sea",
          "redhorn_stonethresher",
          "wolf_s_gravestone",
          "the_unforged",
          "skyward_pride",
          "ultimate_overlord_s_mega_magic_sword",
          "tidal_shadow",
          "prototype_archaic",
          "katsuragikiri_nagamasa"
        ],
        "artifactSets": [
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "nighttime_whispers_in_the_echoing_woods"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "golden_troupe"
            }
          },
          {
            "type": "choose-2",
            "options": [
              {
                "type": "set",
                "id": "archaic_petra"
              },
              {
                "type": "set",
                "id": "emblem_of_severed_fate"
              },
              {
                "type": "group",
                "id": "18-atk"
              }
            ]
          },
          {
            "type": "double",
            "options": [
              {
                "type": "set",
                "id": "marechaussee_hunter"
              },
              {
                "type": "set",
                "id": "golden_troupe"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "nameId": "chiori",
    "element": "geo",
    "weapon": "sword",
    "notes": "OFF-FIELD DPS\nChiori is an off-field damage dealer focusing on her automation dolls (Skill DMG). While there is an incentive to play her in teams which have a Geo Construct (pre-C1), she is still a good option even in Geo teams which do not have a Geo Construct (such as with Navia). \n\nRegarding Weapon Choices:\nHarbinger of Dawn [R5]: Ranking is assuming the passive is active. Chiori can usually have good uptime on the Harbinger of Dawn passive as she is primarily used as an off-field character, along with having good synergy with certain Geo characters like Zhongli who provide a shield. If using Furina however uptime may be problematic depending on how strong your teamwide healing is, or if facing enemies where corrosion is present.\nMistsplitter Reforged: Ranking assumes one stack on the passive. \nCinnabar Spindle [R5]: Ranking is assuming one doll. This weapon performs slightly worse than Harbinger of Dawn [R5] with 2 dolls.\nWolf-Fang: At [R5] this weapon performs close to Primordial Jade Cutter.\n\nRegarding Artifact Sets:\nGolden Troupe (4) outperforms Husk of Opulent Dreams (4) if you are ignoring Chiori's Burst completely. Husk of Opulent Dreams (4) can outperform Golden Troupe (4) if you are using Chiori's burst more frequently.",
    "builds": [
      {
        "name": "OFF-FIELD DPS\n✩",
        "artifactMainStats": "Sands - DEF%\nGoblet - Geo DMG\nCirclet - Crit Rate / DMG",
        "artifactSubStats": "1. Crit Rate / DMG\n2. DEF%\n3. ATK%\n4. Flat DEF\n5. Flat ATK\n6. Energy Recharge*\n\n*Chiori is not Burst reliant and can opt to Burst less often. It is not recommended to build ER% at the expense of offensive stats. ER% gains in value at C2+ when Bursting is needed to summon an additional doll.",
        "talentPriority": "1. Skill\n2. Burst\n",
        "abilityTips": "",
        "weapons": [
          "uraku_misugiri",
          "primordial_jade_cutter",
          "harbinger_of_dawn",
          "cinnabar_spindle",
          "light_of_foliar_incision",
          "haran_geppaku_futsu",
          "mistsplitter_reforged",
          "splendor_of_tranquil_waters",
          "wolf_fang"
        ],
        "artifactSets": [
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "golden_troupe"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "husk_of_opulent_dreams"
            }
          },
          {
            "type": "choose-2",
            "options": [
              {
                "type": "set",
                "id": "archaic_petra"
              },
              {
                "type": "set",
                "id": "husk_of_opulent_dreams"
              },
              {
                "type": "set",
                "id": "golden_troupe"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "nameId": "collei",
    "element": "dendro",
    "weapon": "bow",
    "notes": "SUPPORT\nCollei is a Bow User who provides off-field support in Dendro application and damage.\n\nRegarding Weapon Choices:\nPolar Star: While this weapon provides the highest personal damage, it is generally not recommended as team buffs provide more teamwide damage over a small increase in personal damage. \nSacrificial Bow: Not recommended below [R4] due to it delaying rotation, possibly resulting in damage loss.\n\nRegarding Artifact Sets: \nTenacity of the Millelith (4): Collei's Sprout damage counts as Skill damage, which allows her to be able to keep Tenacity of the Millelith (4) up during important damage windows. Generally an alternative to Noblesse Oblige (4) or Deepwood Memories (4) (or if you are already running both in a team).\nGilded Dreams (4): This set is only used in a team where Collei is used to trigger reactions (i.e. Bloom/Burning teams), and does not benefit Collei if she is used as an aura. \nThe Exile (4): An alternative option if they are placed in the same team as Cyno to help his Energy Recharge needs.\n\nShout out to Emiliabyss#1641 for providing an in-depth reference. ",
    "builds": [
      {
        "name": "SUPPORT\n ✩",
        "artifactMainStats": "Sands - Energy Recharge / ATK% / Elemental Mastery\nGoblet - Dendro DMG / Elemental Mastery*\nCirclet - Crit Rate / DMG / Elemental Mastery*\n\n**Prioritize Energy Recharge if her Energy Requirements are not met.",
        "artifactSubStats": "1. Energy Recharge \n2. Crit Rate / DMG\n3. ATK% / Elemental Mastery \n",
        "talentPriority": "1. Burst \n2. Skill\n",
        "abilityTips": "Typical Collei Rotation: \nSkill > Burst > Swap\nRotation with Polar Star:\nN1 > tap Charged Attack > Skill > Burst > Swap\n\n",
        "weapons": [
          "elegy_for_the_end",
          "polar_star",
          "sacrificial_bow",
          "favonius_warbow"
        ],
        "artifactSets": [
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "deepwood_memories"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "noblesse_oblige"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "tenacity_of_the_millelith"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "instructor"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "gilded_dreams"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "the_exile"
            }
          }
        ]
      }
    ]
  },
  {
    "nameId": "yaoyao",
    "element": "dendro",
    "weapon": "polearm",
    "notes": "SUPPORT:\nYaoyao focuses on healing and applying Dendro with her Elemental Skill and Burst. She can be used in a wide range of team archetypes, but do note her Dendro application from her Elemental Skill alone is generally insufficient for Bloom/Hyperbloom/Burgeon teams as a solo Dendro option. \n\nRegarding Weapon Choices:\nFavonius Lance: This weapon is a good generalist option for Yaoyao, providing Energy Recharge with a useful passive. \nRightful Reward: This weapon performs worse if you are not planning to use Yaoyao's Elemental Burst.\nKitain Cross Spear: This weapon can be better than Favonius Lance in teams where Yaoyao has a significant amount of Bloom ownership.\n\nRegarding Artifact Sets: \nDeepwood Memories (4): This set is the default option in teams where you care about reducing Dendro resistance and nobody else on the team is using it. \nTenacity of the Millelith (4): This set is a good option in teams where reducing Dendro resistance is not important, such as Yaoyao, Anemo, two Electro damage dealers (Aggravate).\nInstructor (4): Similarly to Tenacity, this set can be a good option in teams where reducing Dendro resistance is not important, or if someone else on the team is already using Deepwood Memories. Do note that Yaoyao has to trigger a reaction on-field to provide the 4pc bonus. Additionally, your stat potential on this set will be limited as it does not come in 5* rarity. \nOcean-Hued Clam (4): This set is a good option in teams where you on-field Yaoyao and a supportive set is not needed. \nFlower of Paradise Lost (4)/Gilded Dreams (4)/EM (2) set mixes: These sets are specifically for Nilou Bloom teams where Yaoyao has a significant amount of Bloom ownership and is built with Elemental Mastery. Do note that Ocean-Hued Clam (4) can still be better in these teams, assuming you on-field Yaoyao. \n\nRegarding Mainstat and Substat Choices:\nIn a Bloom team where Yaoyao has a significant amount of Bloom ownership, Elemental Mastery is preferred as a mainstat on your Goblet and Circlet, Elemental Mastery can also be used on your Sands if an Energy Recharge Sands is not required. Additionally, Elemental Mastery substats become good. ",
    "builds": [
      {
        "name": "SUPPORT\n ✩",
        "artifactMainStats": "Sands - HP% / Energy Recharge%\nGoblet - HP%\nCirclet - Healing Bonus%\n\n\n\n\n\n\n\n\n",
        "artifactSubStats": "1. Energy Recharge% until requirement is met\n2. HP%\n3. Crit Rate*\n4. Flat HP\n\n*Try to build some Crit Rate through substats if using Favonius Lance. Crit Rate is not important on other weapons. ",
        "talentPriority": "1. Burst \n2. Skill\n\n*Prioritize her Elemental Skill if you do not spend time on-field with Yaoyao after using her Burst.",
        "abilityTips": "The additional Yueguis summoned by the Burst are removed when Yaoyao leaves the field.\n\nIf using Favonius Lance, you can perform Skill followed by two Normal Attacks in order to trigger the passive. ",
        "weapons": [
          "favonius_lance",
          "dialogues_of_the_desert_sages",
          "black_tassel",
          "rightful_reward",
          "moonpiercer",
          "kitain_cross_spear"
        ],
        "artifactSets": [
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "deepwood_memories"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "tenacity_of_the_millelith"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "instructor"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "ocean_hued_clam"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "maiden_beloved"
            }
          },
          {
            "type": "double",
            "options": [
              {
                "type": "set",
                "id": "emblem_of_severed_fate"
              },
              {
                "type": "group",
                "id": "20-hp"
              }
            ]
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "flower_of_paradise_lost"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "gilded_dreams"
            }
          },
          {
            "type": "double",
            "options": [
              {
                "type": "group",
                "id": "80-em"
              },
              {
                "type": "group",
                "id": "80-em"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "nameId": "kaveh",
    "element": "dendro",
    "weapon": "claymore",
    "notes": "SUPPORT:\nKaveh focuses on being the onfield unit for Bloom teams, boosting their damage with his Elemental Burst, and applying Dendro to create Bloom Cores. His self-healing allows these teams to not need an additional defensive unit.\n\nRegarding Weapon Choices:\nWolf's Gravestone and Song of Broken Pines: In teams where the teamwide ATK% from the passive is not significant for team damage, it is advised not to use these weapons.\n\nRegarding Artifacts:\nDeepwood Memories (4): Do not use this set on Kaveh if another character is already using it.\nOcean Hued Clam (4): This set has the potential to outclass Deepwood Memories (4) as long as another user can hold Deepwood Memories. It gets notably better at C1.\nFlower of Paradise Lost (4): This set can be better than Ocean Hued Clam (4) if Kaveh triggers the majority of Blooms in your team.\n\nRegarding Main Stats:\nCirclet: Crit Rate is only for Favonius Greatsword.",
    "builds": [
      {
        "name": "BLOOM / BURGEON DRIVER ✩",
        "artifactMainStats": "Sands - Energy Recharge / Elemental Mastery\nGoblet - Elemental Mastery\nCirclet - Elemental Mastery / Crit Rate*",
        "artifactSubStats": "1. Energy Recharge\n2. Elemental Mastery\n3. Crit Rate*",
        "talentPriority": "1. Burst\n2. Normal Attack\n3. Skill",
        "abilityTips": "Kaveh's best combo is N3D, which is 3 Normal Attacks canceled at the end with a Dash. ",
        "weapons": [
          "favonius_greatsword",
          "sacrificial_greatsword",
          "mailed_flower",
          "wolf_s_gravestone",
          "song_of_broken_pines",
          "makhaira_aquamarine",
          "katsuragikiri_nagamasa",
          "skyward_pride",
          "forest_regalia",
          "rainslasher"
        ],
        "artifactSets": [
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "deepwood_memories"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "flower_of_paradise_lost"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "instructor"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "gilded_dreams"
            }
          }
        ]
      }
    ]
  },
  {
    "nameId": "kirara",
    "element": "dendro",
    "weapon": "sword",
    "notes": "SHIELD SUPPORT:\nKirara can support the team by providing shields. She has the option to remain off-field for the majority of rotations, or stay onfield to drive and apply Dendro.\n\nRegarding Weapon Choices:\nSapwood Blade: While worse than some other options in terms of shield strength, the Leaf of Consciousness buff can make it a stronger option overall. \nFavonius Sword: Kirara's Energy Recharge requirements are generally low, however the passive can still be useful for generating energy for the rest of your team. \nFreedom Sworn: An option in teams which value the buff, though there are generally better users of this weapon. \n\nRegarding Artifacts:\nInstructor (4): While worse for shield strength, this set is a great option when using Kirara in Aggravate teams for the teamwide EM buff. \nDeepwood Memories (4): This set should be used in teams which involve a relevant amount of Dendro damage and nobody else is using it. \nTenacity of the Millelith (4): This set is an option when using Kirara on-field. \n\nRegarding Main Stats:\nCirclet: Crit Rate is only for Favonius Sword. \n\nRegarding Substats:\nCrit Rate: only for Favonius Sword.",
    "builds": [
      {
        "name": "SHIELD SUPPORT\n ✩",
        "artifactMainStats": "Sands: HP% / Energy Recharge%\nGoblet: HP%\nCirclet: HP% / Crit Rate%*",
        "artifactSubStats": "1. Energy Recharge%*\n2. HP%\n3. Crit Rate*\n4. Flat HP\n\n*Prioritize Energy Recharge until requirement is met",
        "talentPriority": "1. Skill\n2. Burst",
        "abilityTips": "",
        "weapons": [
          "key_of_khaj_nisut",
          "sapwood_blade",
          "the_dockhand_s_assistant",
          "favonius_sword",
          "freedom_sworn",
          "sacrificial_sword"
        ],
        "artifactSets": [
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "instructor"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "deepwood_memories"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "noblesse_oblige"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "tenacity_of_the_millelith"
            }
          },
          {
            "type": "double",
            "options": [
              {
                "type": "set",
                "id": "tenacity_of_the_millelith"
              },
              {
                "type": "set",
                "id": "vourukasha_s_glow"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "nameId": "tighnari",
    "element": "dendro",
    "weapon": "bow",
    "notes": "QUICKSWAP DPS\nTighnari's standard build revolves around him doing his Elemental Skill, Three Clusterbloom Arrows, an Elemental Burst, and promptly swapping out to another character. \n\nRegarding Weapon Choices:\nThe First Great Magic: Weapon ranking is assuming two Gimmick stacks. It performs a bit worse in solo Dendro, but still remains a good option. \nElegy for the End: If Tighnari does not need the Energy Recharge that Elegy for the End provides, this weapon will perform worse than Scion of the Blazing Sun for his personal damage.\nScion of the Blazing Sun: At [R5] this weapon is slightly worse than Thundering Pulse.\nSlingshot: Significantly worse when fighting from a long range.\nRange Gauge: This weapon is strong if you can get three passive stacks. At [R5] with three passive stacks, this weapon performs similarly to Thundering Pulse.\nSong of Stillness: Weapon ranking assumes passive is active. At [R5], it performs similarly to Prototype Crescent [R5].\nFading Twilight: If Tighnari does not need the Energy Recharge this weapon provides, it is similar to Prototype Crescent in terms of damage.\nPrototype Crescent: At [R5], this weapon is better than Slingshot. Notably, this weapon is heavily reliant on enemies having weakspots.\n\nRegarding Artifact Sets:\nGilded Dreams: This set becomes slightly better than Wanderer's Troupe if Tighnari uses his Burst every time he uses his Skill.\nDeepwood Memories (4): This is by far Tighnari's best set if no one else on the team is using it.\n\nRegarding Artifact Mainstats and Substats:\nEnergy Recharge: It is usually beneficial for Tighnari to use his Burst every time he uses his Skill if possible. His Energy Recharge needs vary widely, but provided they are low enough to be reachable, Bursting every Skill is a large DPS increase.",
    "builds": [
      {
        "name": "QUICK SWAP DPS\n ✩",
        "artifactMainStats": "Sands - ATK% / Elemental Mastery / Energy Recharge*\nGoblet - Dendro DMG\nCirclet - Crit Rate / DMG",
        "artifactSubStats": "1. Crit Rate / DMG\n2. Elemental Mastery\n~= ATK%\n3. Energy Recharge*",
        "talentPriority": "1. Normal Attack\n2. Burst\n3. Skill",
        "abilityTips": "There are three recommended combos that Tighnari can perform:\n1. Skill -> Charged Attack -> Burst -> Charged Attack (x2) - This is the most mechanically difficult combo. However, this combo allows Tighnari to have both his Burst effected by A1 and funnel particles from his Skill to his next Burst.\n2. Skill -> Charged Attack (x3) -> Burst - Allows Tighnari's Burst to benefit from A1. However, this combo doesn't allow Tighnari to funnel particles from his Skill into his next Burst.\n3. Skill -> Burst -> Charged Attack (x3) - Simplest combo to use, and generally weakest combo though it allows prefunneling. His Burst does not benefit from A1 in this combo. It is recommended at C4 due to the EM buff.\n",
        "weapons": [
          "hunter_s_path",
          "aqua_simulacra",
          "polar_star",
          "the_first_great_magic",
          "skyward_harp",
          "thundering_pulse",
          "elegy_for_the_end",
          "amos_bow",
          "fading_twilight",
          "scion_of_the_blazing_sun",
          "the_viridescent_hunt",
          "range_gauge",
          "windblume_ode",
          "song_of_stillness",
          "prototype_crescent"
        ],
        "artifactSets": [
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "wanderer_s_troupe"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "gilded_dreams"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "emblem_of_severed_fate"
            }
          },
          {
            "type": "choose-2",
            "options": [
              {
                "type": "set",
                "id": "deepwood_memories"
              },
              {
                "type": "group",
                "id": "18-atk"
              },
              {
                "type": "group",
                "id": "80-em"
              }
            ]
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "deepwood_memories"
            }
          }
        ]
      }
    ]
  },
  {
    "nameId": "nahida",
    "element": "dendro",
    "weapon": "catalyst",
    "notes": "Regarding Artifact Main Stats:\nNahida has several viable combinations of main stats. The general rule of thumb is that the more EM mainstats you use, the better ATK%/Crit weapons will perform relatively.\n\nDPS & SUPPORT\nNahida can provide both damage, Dendro application, and buffs to her teammates. As such her build is focused on both maximizing her buff and her damage simultaneously.\n\nRegarding Weapon Choices:\nWandering Evenstar: If teammates significantly benefit from the Flat Attack this weapon gives, it has the potential to rival A Thousand Floating Dreams.\nThe Widsith, Lost Prayer to the Sacred Winds, and Solar Pearl: These weapons tend to perform better if Nahida is played on-field.\nSkyward Atlas, and Memory of Dust: The fewer the reactions Nahida triggers, the more potent these options become.\nFavonius Codex: This weapon has the potential to rival A Thousand Floating Dreams if Nahida can actively trigger the passive multiple times by attacking on-field. Favonius Codex also has the potential to be a good weapon on Nahida in teams where her Energy Recharge requirement is high, or if your team values the additional particles. \nHakushin Ring: This weapon should only be used if Nahida is used in Quicken or Hyperbloom teams.\nThrilling Tales of Dragon Slayers: This weapon sacrifices a lot of Nahida's personal damage for buffing potential. Generally not worth the trade, but can be usable in teams where Nahida's damage share is already low.\nPrototype Amber: Only to be used if the team otherwise lacks survivability.\n\nRegarding Artifact Sets:\nDeepwood Memories (4): This is her best set if no one else is wearing this set.\nTenacity of the Millelith (4): In teams where Nahida's damage share is relatively low and there is another holder of Deepwood Memories and/or no need for the set at all, this can be Nahida's best set.\nFlower of Paradise Lost (4): This set is niche, but very powerful in Bloom teams where Nahida triggers the Bloom reaction.",
    "builds": [
      {
        "name": "DPS & SUPPORT ✩",
        "artifactMainStats": "Sands - Elemental Mastery\nGoblet - Elemental Mastery / Dendro DMG\nCirclet - Elemental Mastery / Crit Rate / DMG",
        "artifactSubStats": "1. Energy Recharge (Until Requirement)\n2. Crit Rate / Crit DMG\n~= Elemental Mastery\n3. ATK%",
        "talentPriority": "1. Skill\n2. Burst\n3. Normal Attack",
        "abilityTips": "",
        "weapons": [
          "a_thousand_floating_dreams",
          "kagura_s_verity",
          "sacrificial_fragments",
          "wandering_evenstar",
          "the_widsith",
          "sacrificial_jade",
          "skyward_atlas",
          "lost_prayer_to_the_sacred_winds",
          "memory_of_dust",
          "solar_pearl",
          "favonius_codex",
          "mappa_mare",
          "magic_guide",
          "hakushin_ring",
          "thrilling_tales_of_dragon_slayers",
          "prototype_amber"
        ],
        "artifactSets": [
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "deepwood_memories"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "gilded_dreams"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "golden_troupe"
            }
          },
          {
            "type": "choose-2",
            "options": [
              {
                "type": "set",
                "id": "deepwood_memories"
              },
              {
                "type": "group",
                "id": "80-em"
              },
              {
                "type": "group",
                "id": "80-em"
              }
            ]
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "tenacity_of_the_millelith"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "flower_of_paradise_lost"
            }
          }
        ]
      }
    ]
  },
  {
    "nameId": "alhaitham",
    "element": "dendro",
    "weapon": "sword",
    "notes": "SPREAD DPS\nThis playstyle maximizes Alhaitham's kit, leveraging both Spread reactions and his Elemental Mastery-scaling skill for significant damage. The high on-field Dendro application rate, coupled with flexible team compositions, establishes Alhaitham as a top-tier Spread DPS, especially in Quicken/Quickbloom teams, emphasizing the importance of prioritizing leveling to 90/90 for optimal performance.\n\nRegarding Weapon Choices:\nLight of Foliar Incision: This weapon prefers EM sands even in situations with fewer or no Spread procs such as in Bloom/Burgeon/Hyperbloom teams.\nToukabou Shigure: This ranking assumes single-target situations, in AoE situations it starts falling behind weapons such as Iron Sting and Blackcliff Longsword.\nHarbinger of Dawn: If you can maintain near perfect uptime on its passive this weapon will perform similarly to weapons like Haran Geppaku Futsu.\nXiphos' Moonlight / Festering Desire: These weapons can perform similarly to The Black Sword in teams where you have higher Energy Recharge requirements or want to burst every rotation.\nWolf-Fang: At [R5], this weapon performs similarly to Haran Geppaku Futsu and Mistsplitter Reforged. \n\nRegarding Artifact Sets:\nGilded Dreams (4): This ranking assumes that you already have another Deepwood Memories holder on the team, if not then Deepwood Memories becomes his best set.\nDeepwood Memories (2) / Emblem of Severed Fate (2) / +80 EM set (2): These split set options can actually perform similarly to Gilded Dreams (4) or even surpass it in situations where you have higher Energy Recharge requirements or want to burst every rotation. Or even if they just have better substat rolls on them.\n\nRegarding Mainstat Priorities: Usually in Quicken/Quickbloom teams Alhaitham leans towards Elemental Mastery sands (roughly 5% or so difference usually). But in Bloom/Burgeon/Hyperbloom teams with, fewer to no Spread reactions, he skews more towards ATK% sands (unless you're using Light of Foliar Incision). Or even Energy Recharge sands if you're trying to burst every rotation for increased Dendro seed generation in those teams.\n\n",
    "builds": [
      {
        "name": "SPREAD DPS \n✩",
        "artifactMainStats": "Sands - Elemental Mastery / ATK%\nGoblet - Dendro DMG\nCirclet - Crit Rate / DMG",
        "artifactSubStats": "1. Energy Recharge* (Until Requirement)\n2. Crit Rate / DMG\n3. Elemental Mastery**\n4. ATK%\n5. Flat ATK\n\n* Certain quicken teams can run little to no Energy Recharge and simply burst every other rotation without a dps loss\n** If you're running under 200 Elemental Mastery this substat has priority over Crit",
        "talentPriority": "1. Skill\n2. Normal Attack\n~= Burst\n\n",
        "abilityTips": "Basic Rotations:\n\nBurst up = Q > E > N2D + 2N3D + N1C + 2N2C\n\nBurst down = E > N1C + 5N2C + N1",
        "weapons": [
          "light_of_foliar_incision",
          "primordial_jade_cutter",
          "mistsplitter_reforged",
          "haran_geppaku_futsu",
          "freedom_sworn",
          "wolf_fang",
          "toukabou_shigure",
          "the_black_sword",
          "summit_shaper",
          "iron_sting",
          "blackcliff_longsword",
          "harbinger_of_dawn",
          "xiphos_moonlight",
          "festering_desire",
          "skyward_blade"
        ],
        "artifactSets": [
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "gilded_dreams"
            }
          },
          {
            "type": "choose-2",
            "options": [
              {
                "type": "set",
                "id": "emblem_of_severed_fate"
              },
              {
                "type": "set",
                "id": "deepwood_memories"
              },
              {
                "type": "group",
                "id": "80-em"
              }
            ]
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "deepwood_memories"
            }
          }
        ]
      }
    ]
  },
  {
    "nameId": "baizhu",
    "element": "dendro",
    "weapon": "catalyst",
    "notes": "SUPPORT\nBaizhu provides teamwide healing through the use of his Elemental Skill, and heals the active character from his Burst. The shields generated from his Burst should be considered as interrupt resistance as opposed to a reliable form of damage mitigation for non-Bloom reaction related damage sources. Due to being a Dendro catalyst, Baizhu can work effectively in a large range of different Dendro team archetypes. \n\nRegarding Weapon Choices:\nHakushin Ring: This weapon is best used in Quicken teams when Baizhu is able to provide reasonable uptime on the buff. \nPrototype Amber: In addition to the amount of flat energy generation for the user, this weapon can provide significant team-wide healing when used in conjunction with Healing Bonus. It is a great option when using Baizhu with Furina for building Fanfare points from the second rotation onwards.\nFavonius Codex: Try to build some Crit Rate when using this weapon in order to trigger the passive effect more consistently. \nA Thousand Floating Dreams: This weapon can be considered in certain teams for the modest Elemental Mastery team buff it provides, though there are generally better uses for it. \n\nRegarding Artifact Sets:\nDeepwood Memories (4): Under AoE situations, it may be better for another party member to hold this set as Baizhu has lackluster AoE.\nInstructor (4): The Elemental Mastery gained from this set outweighs the reduction in A4 passive bonus from lower main stat values.\nNoblesse Oblige (4): In teams that benefit from ATK%, this set can be run over Instructor (4) if the additional sustain from higher HP values is preferred.\n\nRegarding Artifact Stats: \nWhile generally in teams that can benefit from Baizhu's Ascension 4 passive you want to build high HP (up to 50k) to maximize the buff it can provide, Healing Bonus circlet can be considered over HP% in teams where having more healing would be valuable. For example, using Healing Bonus circlet can allow for building Fanfare points faster when using Baizhu with Furina, moreover Healing Bonus circlet synergizes well with Prototype Amber's passive. \n",
    "builds": [
      {
        "name": "SUPPORT\n ✩",
        "artifactMainStats": "Sands - HP% / Energy Recharge\nGoblet - HP%\nCirclet - HP% / Healing Bonus*\n\n*Check notes ",
        "artifactSubStats": "1. Energy Recharge*\n2. HP%\n3. Flat HP\n4. Crit Rate*\n\n*Prioritize Energy Recharge until requirement is met. Crit Rate is only recommended when using Favonius Codex. ",
        "talentPriority": "1. Burst\n2. Skill\n\n",
        "abilityTips": "Baizhu's Elemental Skill has a 2-3 second delay between cast time and heal received, keep this in mind when swapping to low HP allies after Baizhu's rotation.\n",
        "weapons": [
          "jadefall_s_splendor",
          "prototype_amber",
          "favonius_codex",
          "hakushin_ring",
          "thrilling_tales_of_dragon_slayers",
          "a_thousand_floating_dreams"
        ],
        "artifactSets": [
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "deepwood_memories"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "ocean_hued_clam"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "instructor"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "noblesse_oblige"
            }
          },
          {
            "type": "choose-2",
            "options": [
              {
                "type": "set",
                "id": "tenacity_of_the_millelith"
              },
              {
                "type": "set",
                "id": "emblem_of_severed_fate"
              },
              {
                "type": "set",
                "id": "vourukasha_s_glow"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "nameId": "emilie",
    "element": "dendro",
    "weapon": "polearm",
    "notes": "OFF-FIELD DPS\nEmilie does not use the Burning reaction as her primary source of damage, but rather she uses the reaction to help her continuously deal Dendro damage. Thus, Emilie would rather build offensive stats rather than focus on building around the Burning reaction.\n\nRegarding Weapon Choices:\nDeathmatch: At [R5], this weapon will perform better than Engulfing Lightning, and it will perform a little worse than Staff of Homa if she is played in single-target.\n\nRegarding Artifact Sets:\nDeepwood Memories: This set has significantly less value on Emilie if someone else in the team can hold it.\n\nRegarding Substats:\nEnergy Recharge: Emilie does not need to burst every rotation in some teams, so ER% becomes less important. ",
    "builds": [
      {
        "name": "OFF-FIELD DPS\n ✩",
        "artifactMainStats": "Sands - ATK%\nGoblet - Dendro DMG\nCirclet - Crit Rate / DMG",
        "artifactSubStats": "1. Crit Rate / DMG\n2. ATK%\n3. ER%*\n4. Flat ATK",
        "talentPriority": "1. Skill\n2. Burst",
        "abilityTips": "",
        "weapons": [
          "lumidouce_elegy",
          "calamity_queller",
          "staff_of_homa",
          "engulfing_lightning",
          "staff_of_the_scarlet_sands",
          "primordial_jade_winged_spear",
          "crimson_moon_s_semblance",
          "deathmatch",
          "skyward_spine",
          "missive_windspear",
          "lithic_spear",
          "prospector_s_drill",
          "favonius_lance",
          "kitain_cross_spear"
        ],
        "artifactSets": [
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "unfinished_reverie"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "deepwood_memories"
            }
          },
          {
            "type": "single",
            "option": {
              "type": "set",
              "id": "golden_troupe"
            }
          },
          {
            "type": "choose-2",
            "options": [
              {
                "type": "set",
                "id": "deepwood_memories"
              },
              {
                "type": "set",
                "id": "golden_troupe"
              },
              {
                "type": "group",
                "id": "18-atk"
              }
            ]
          }
        ]
      }
    ]
  }
] as const satisfies {
  nameId: CharacterId;
  element: Element;
  weapon: WeaponType;
  notes: string;
  builds: {
    name: string;
    weapons: WeaponId[];
    artifactSets: (
      { type: "single", option: ArtifactSetChoice }
      | {
        type: "choose-2",
        options: ArtifactSetChoice[]
      }
      | {
        type: "double",
        options: [ArtifactSetChoice, ArtifactSetChoice]
      }
    )[];
    artifactMainStats: string;
    artifactSubStats: string;
    talentPriority: string;
    abilityTips: string;
  }[];
}[];
export type ArtifactSetChoice = { type: "set", id: ArtifactId } | { type: "group", id: ArtifactGroupId };
export default characterBuilds;
export type CharacterBuild = typeof characterBuilds[number];
