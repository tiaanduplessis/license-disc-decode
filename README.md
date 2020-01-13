
# license-disc-decode
[![package version](https://img.shields.io/npm/v/license-disc-decode.svg?style=flat-square)](https://npmjs.org/package/license-disc-decode)
[![package downloads](https://img.shields.io/npm/dm/license-disc-decode.svg?style=flat-square)](https://npmjs.org/package/license-disc-decode)
[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)
[![package license](https://img.shields.io/npm/l/license-disc-decode.svg?style=flat-square)](https://npmjs.org/package/license-disc-decode)
[![make a pull request](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

> Decode barcode string when scanning License disc

## Table of Contents

- [Usage](#usage)
- [Install](#install)
- [Contribute](#contribute)
- [License](#License)


## Usage

```js
import discDecode from "license-disc-decode"
const strFromBarcodeScan = '%MVL1CC08%0168%1001A6GK%1%1001055W4R60%CA419547%HXV436S%Sedan (closed top) / Sedan (toe-kap)%MERCEDES-BENZ%W203%Grey / Grys%WDC2030422R249727%27194030818686%2015-02-28%'

console.log(discDecode(strFromBarcodeScan))
// status: "1"
// controlNumber: "1001055W4R60"
// vehicleRegistrationNumber: "CA419547"
// licenseNumber: "HXV436S"
// description: "Sedan (closed top) / Sedan (toe-kap)"
// make: "MERCEDES-BENZ"
// model: "W203"
// color: "Grey / Grys"
// vin: "WDC2030422R249727"
// engineNumber: "27194030818686"
// expiryDate: "2015-02-28"
// country: "Germany"
// manufacturer: "DaimlerChrysler"
// details: "20304"
// securityCode: "2"
// year: 2002
// assemblyPlant: "R"
// serialNumber: "249727"
// possibleYears: Array[1]
```

## Install

This project uses [node](https://nodejs.org) and [npm](https://www.npmjs.com). 

```sh
$ npm install license-disc-decode
$ # OR
$ yarn add license-disc-decode
```

## Contribute

1. Fork it and create your feature branch: `git checkout -b my-new-feature`
2. Commit your changes: `git commit -am "Add some feature"`
3. Push to the branch: `git push origin my-new-feature`
4. Submit a pull request

## License

MIT 
    