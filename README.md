# Ashby BART — a <a href='https://github.com/kyleamathews/typography.js'>Typography.js</a> theme

A theme for Typography.js by <a href='https://richwerden.com'>Rich</a>

## Install
```bash
npm install --save typography typography-theme-ashby-bart
```
## Usage
```javascript
import Typography from 'typography'
import Ashby from 'typography-theme-ashby-bart'

const typography = new Typography(Ashby)
```
## More on theme

Ashby BART splits colors and some text variables into their own objects within a separate `constants.js` file for easier experimentation. Font-families and weights are defined within the Typography theme object. The fonts used in the Ashby BART theme are "Quicksand" for headers and "EB Garamond" for body-text. Both are available from the https://fonts.google.com CDN.