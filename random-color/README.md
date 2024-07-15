# 🎨 Random Color Generator
This package provides utilities for generating random colors in various formats (HEX, RGB, RGBA, HSL, RGB with percentages) in JavaScript/TypeScript applications.

<div align="center">

![GitHub Repo stars](https://img.shields.io/github/stars/MattEzekiel/random-color-generator)
![GitHub watchers](https://img.shields.io/github/watchers/MattEzekiel/random-color-generator)
![GitHub forks](https://img.shields.io/github/forks/MattEzekiel/random-color-generator)

![Version](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fraw.githubusercontent.com%2FMattEzekiel%2Frandom-color-generator%2Fmaster%2Fpackage.json&query=version&label=version)
[![License](https://img.shields.io/badge/License-MIT-blue)](#license "Go to license section")

[![Made with Node](https://img.shields.io/badge/node-%3D%3E20-20)](https://nodejs.org)
[![Package - Yarn](https://img.shields.io/badge/yarn-%3E%3D1-blue?logo=yarn&logoColor=white)](https://classic.yarnpkg.com)
[![Package - TypeScript](https://img.shields.io/github/package-json/dependency-version/MattEzekiel/random-color-generator/dev/typescript?logo=typescript&logoColor=white)](https://www.npmjs.com/package/typescript)

[![NPM Package Downloads](https://img.shields.io/npm/dy/random-color-generator)](https://www.npmjs.com/package/random-color-generator)
![GitHub Downloads (all assets, all releases)](https://img.shields.io/github/downloads/MattEzekiel/random-color-generator/total?label=github%20downloads)

![GitHub Issues](https://img.shields.io/github/issues/MattEzekiel/random-color-generator)
![Pull Requests](https://img.shields.io/github/issues-pr/MattEzekiel/random-color-generator)

[![Github Sponsors](https://img.shields.io/badge/Sponsor-30363D?&logo=GitHub-Sponsors&logoColor=#EA4AAA)](https://github.com/sponsors/mattezekiel)
[![BuyMeACoffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-ffdd00?&logo=buy-me-a-coffee&logoColor=black)](https://cafecito.app/mattezekiel)

</div>

## Installation

You can install the package via npm:
### npm
```bash
npm install random-color-generator-ts
```

### yarn
```bash
yarn install random-color-generator-ts
```

### pnpm
```bash
pnpm add random-color-generator-ts
```

## Usage
### Generate Random Hex Color
Import the 'RandomHexColor' function from 'random-color-generator':

```bash
import { RandomHexColor } from 'random-color-generator';

console.log(RandomHexColor()); // Outputs a random color in hex format
```
### Generate Random RGB
Import the 'RandomRgbColor' function from 'random-color-generator':

```bash
import { RandomRgbColor } from 'random-color-generator';

console.log(RandomRgbColor()); // Outputs a random color in RGB format
```
### Generate Random RGBA Color
Import the 'RandomRgbaColor' function from 'random-color-generator':
```bash
import { RandomRgbaColor } from 'random-color-generator';

console.log(RandomRgbaColor()); // Outputs a random color in RGBA format
```
### Generate Random HSL Color
Import the 'RandomHslColor' function from 'random-color-generator':
```bash
import { RandomHslColor } from 'random-color-generator';

console.log(RandomHslColor()); // Outputs a random color in HSL format
```
### Generate Random RGB Percent Color
Import the 'RandomRgbPercentColor' function from 'random-color-generator':
```bash
import { getRandomRgbPercentColor } from 'random-color-generator';

console.log(getRandomRgbPercentColor()); // Outputs a random color in RGB percent format
```

## Contributing and Issue Tracking
If you're interested in contributing to this project or want to report an issue, please check out our [CONTRIBUTING.md](https://github.com/MattEzekiel/random-color-generator/blob/master/CONTRIBUTING.md) guide for detailed information on how to get involved.

## Code of conduct
Respect our [CODE OF CONDUCT](https://github.com/MattEzekiel/random-color-generator/blob/master/CODE_OF_CONDUCT.md)

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/MattEzekiel/random-color-generator/blob/master/LICENSE.md) file for details.
