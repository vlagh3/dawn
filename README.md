# dawn

<p align="center">
  <img src="https://i.imgur.com/vjfMONS.png">
</div>

<p align="center">
  <img src="https://i.imgur.com/cTT6yNk.png">
  <a href="https://b-coimbra.github.io/dawn/">LIVE PREVIEW</a>
</div>

## Installation
- Brave
  - Go to `brave://settings/` and under the **On startup** section check the **Open a specific page or set of pages**
  - Add the file path: `file:///home/you_username/path/to/dawn/index.html`
  - Unfortunetaly Brave [doesn't have support for custom URLs in new tabs](https://community.brave.com/t/change-customize-blank-new-tab-page/45216)
- Firefox
  - Under `about:preferences#home` choose the **Custom URLs** option and add the file path: `file:///home/you_username/path/to/dawn/index.html`


> NOTE: for development purposes you can just start a local http server from the repository *(e.g `python -m http.server`, `php -S localhost:8080`)*

## Keybindings

- <kbd>Numrow</kbd> Switch tabs
- <kbd>t</kbd> Open the create task panel
  - <kbd>Enter</kbd> Create a task
  - <kbd>Tab</kbd> Go to next field
- <kbd>s</kbd> Open the search dialog
- <kbd>Esc</kbd> Close the edit/create task panel (when field is focused)

## Configuration

For now, some settings can be tweaked by changing the `GLOBAL_CONFIG` object located in `./userconfig.js`.

### Disabling a component

To disable a component, put their name into the list of `disabled` components:

```js
const GLOBAL_CONFIG = new Config({
    // ...
    disabled: ['todo-list'] // search-bar, crypto-rate, current-time, weather-forecast, status-bar
});
```

### Clock

Change the clock format in the status bar using [strftime.org](https://strftime.org) format.

Config example (`userconfig.js`):

```js
const GLOBAL_CONFIG = new Config({
    // ...
    clock: 'h:i p',        // 13:30 PM
    clock: 'do B Y - h:i', // 18th January 2021 - 13:30
    clock: 'h:i - m/b/Y'   // 13:30 - 3/Jul/2021
});
```

### Weather temperature

Change your location and temperature scale (celius, fahrenheit) like such:

```js
const GLOBAL_CONFIG = new Config({
  // ...
  temperature: {
    location: 'New York',
    scale: 'C'
  }
});
```

### Crypto status

For the live crypto status, provide a crypto coin and a FIAT currency. Example:

```js
const GLOBAL_CONFIG = new Config({
  // ...
  crypto: {
    coin: 'ETH', // BTC, LINK, DOGE etc
    currency: 'USD', // EUR, JPY, BRL etc
    refreshIn: 15 // refresh time (in seconds)
  },
});
```

## Features
  
  - [X] No external libraries
  - [X] Web component based
  - [X] Status bar components
    - [X] Clock/Date
    - [X] Live crypto
    - [X] Current weather
      - [ ] `REFACTOR` Show weather location on hover
    - [ ] `MAYBE` RSS reader
    - [ ] Add new panels
    - [ ] Store last visited panel
  - [X] Quick search panel
  - [ ] Todo/schedule panel
    - [X] Reordering
    - [X] Task priority
    - [ ] Task reminder
      - [ ] `MAYBE` Sync todo with google calendar
    - [X] Link to external URL
    - [X] Filter by task status (TODO/DONE)
    - [ ] Filter by task priority
    - [X] Clean all tasks button
    - [X] Edit task button
    - [ ] `MAYBE` Subtasks w/ progress bar
    - [ ] `MAYBE` Subsections for todo DEADLINE ("today", "upcoming")
  - [ ] Links section
    - [ ] Add new links button
    - [ ] Add link icon
    - [ ] Drag/drop reorganize
  - [ ] Configuration
    - [X] Disable components
    - [ ] Change keybindings
    - [ ] Import/export settings
    - [ ] Randomize banner gifs
    - [ ] Toggle status bar sections
    - [ ] Status bar tab indicator (roman numerals, hiragana, numbers)
    - [ ] Colorscheme manipulation
    - [ ] `MAYBE` Optional sound fx
  - [ ] `REFACTOR` Unify storage into a single JSON object
  - [ ] Create favicon
  - [ ] Keybinding cheatsheet
  - [ ] Verify updates on startup
