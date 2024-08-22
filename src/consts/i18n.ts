import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import TextMapCHS from './textmaps/CHS.json';
import TextMapCHT from './textmaps/CHT.json';
import TextMapDE from './textmaps/DE.json';
import TextMapEN from './textmaps/EN.json';
import TextMapES from './textmaps/ES.json';
import TextMapFR from './textmaps/FR.json';
import TextMapID from './textmaps/ID.json';
import TextMapIT from './textmaps/IT.json';
import TextMapJP from './textmaps/JP.json';
import TextMapKR from './textmaps/KR.json';
import TextMapPT from './textmaps/PT.json';
import TextMapRU from './textmaps/RU.json';
import TextMapTH from './textmaps/TH.json';
import TextMapTR from './textmaps/TR.json';
import TextMapVI from './textmaps/VI.json';
import UICHS from '../locales/CHS.json';
import UICHT from '../locales/CHT.json';
import UIDE from '../locales/DE.json';
import UIEN from '../locales/EN.json';
import UIES from '../locales/ES.json';
import UIFR from '../locales/FR.json';
import UIID from '../locales/ID.json';
import UIIT from '../locales/IT.json';
import UIJP from '../locales/JP.json';
import UIKR from '../locales/KR.json';
import UIPT from '../locales/PT.json';
import UIRU from '../locales/RU.json';
import UITH from '../locales/TH.json';
import UITR from '../locales/TR.json';
import UIVI from '../locales/VI.json';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      chs: {
        translation: {
          dm: {
            ...TextMapCHS
          },
          ui: {
            ...UICHS
          }
        }
      },
      cht: {
        translation: {
          dm: {
            ...TextMapCHT
          },
          ui: {
            ...UICHT
          }
        }
      },
      de: {
        translation: {
          dm: {
            ...TextMapDE
          },
          ui: {
            ...UIDE
          }
        }
      },
      en: {
        translation: {
          dm: {
            ...TextMapEN
          },
          ui: {
            ...UIEN
          }
        }
      },
      es: {
        translation: {
          dm: {
            ...TextMapES
          },
          ui: {
            ...UIES
          }
        }
      },
      fr: {
        translation: {
          dm: {
            ...TextMapFR
          },
          ui: {
            ...UIFR
          }
        }
      },
      id: {
        translation: {
          dm: {
            ...TextMapID
          },
          ui: {
            ...UIID
          }
        }
      },
      it: {
        translation: {
          dm: {
            ...TextMapIT
          },
          ui: {
            ...UIIT
          }
        }
      },
      jp: {
        translation: {
          dm: {
            ...TextMapJP
          },
          ui: {
            ...UIJP
          }
        }
      },
      kr: {
        translation: {
          dm: {
            ...TextMapKR
          },
          ui: {
            ...UIKR
          }
        }
      },
      pt: {
        translation: {
          dm: {
            ...TextMapPT
          },
          ui: {
            ...UIPT
          }
        }
      },
      ru: {
        translation: {
          dm: {
            ...TextMapRU
          },
          ui: {
            ...UIRU
          }
        }
      },
      th: {
        translation: {
          dm: {
            ...TextMapTH
          },
          ui: {
            ...UITH
          }
        }
      },
      tr: {
        translation: {
          dm: {
            ...TextMapTR
          },
          ui: {
            ...UITR
          }
        }
      },
      vi: {
        translation: {
          dm: {
            ...TextMapVI
          },
          ui: {
            ...UIVI
          }
        }
      }
    }
  });

export default i18n;
