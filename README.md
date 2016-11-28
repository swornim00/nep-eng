# nep-eng [![Build Status](https://travis-ci.org/bravegurkha/nep-eng.svg?branch=master)](https://travis-ci.org/bravegurkha/nep-eng)

Translate English words into Nepali.

![](Dharahara.jpg)

# How to install

```sh

  $ npm install -g nep-eng

```

# How to use?

```js
  'use strict';

  var NepaliWords = require('nep-eng');
  var traslatedWord = NepaliWords.translate("yellow")
  console.log(translatedWord) // Prints Nepali Translation of Yellow

```

# Data Source

  Data Used here are extracted from [nirooj56/Nepdict](https://github.com/nirooj56/Nepdict).

# License

 [MIT](https://opensource.org/licenses/mit-license.php) &copy; Swornim Shrestha  
