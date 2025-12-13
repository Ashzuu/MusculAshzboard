import {definePreset} from "@primeuix/themes";
import Aura from "@primeuix/themes/aura";
import {Preset} from "@primeuix/themes/types";

export const MyCustomPreset:Preset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '#eaebf3',
      100: '#cacee3',
      200: '#aab1d2',
      300: '#8b94c2',
      400: '#6b77b1',
      500: '#0D155E',
      600: '#0b1250',
      700: '#090e42',
      800: '#070b34',
      900: '#050726',
      950: '#020413'
    },
    colorScheme: {
      light: {
        surface: {
          0: '#ffffff',
          50: '#f8f9fa',
          100: '#f1f3f5',
          200: '#e9ecef',
          300: '#dee2e6',
          400: '#ced4da',
          500: '#adb5bd',
          600: '#868e96',
          700: '#495057',
          800: '#343a40',
          900: '#212529',
        },

        border: {
          color: '#CDCDCD'
        },
        text: {
          color: '#4B4B4B',
          mutedColor: '#7F7F7F',
          hoverColor: '#0D155E'
        }
      },
      dark: {
        border: {
          color: '#4B4B4B'
        },
        text: {
          color: '#ffffff',
          mutedColor: '#CDCDCD'
        }
      }
    },
    formField: {
      border: {
        color: '#CDCDCD'
      },
      color: '#4B4B4B'
    }
  },
  // Extension pour ajouter ta couleur secondaire (Opposé)
  // PrimeNG n'a pas de slot "secondary" sémantique par défaut, on l'ajoute ici
  extend: {
    primitive: {
      orange: {
        50: '#fff3e0',
        100: '#ffe0b2',
        200: '#ffcc80',
        300: '#ffb74d',
        400: '#ffa726',
        500: '#C24E00',
        600: '#fb8c00',
        700: '#f57c00',
        800: '#ef6c00',
        900: '#e65100',
        950: '#b83b00'
      }
    },
    semantic: {
      secondary: {
        color: '{orange.500}',
        hoverColor: '{orange.600}',
        activeColor: '{orange.700}'
      }
    }
  }
});