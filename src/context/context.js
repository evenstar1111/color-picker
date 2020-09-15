import {createContext} from 'react';


const colorData = {
  background: {
    rgb: { r: 0, g: 0, b: 0, a: 1, },
    hex: '#000000',
  },
  foreground: {
    rgb: { r: 255, g: 255, b: 255, a: 1, },
    hex: '#FFFFFF',
  }
}

const Context = createContext({});

export {colorData, Context as default}