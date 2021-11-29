const GLOBAL_CONFIG = new Config({
  crypto: {
    coin: 'ETH',
    currency: 'USD',
    refreshIn: 60
  },
  temperature: {
    location: 'Bucharest',
    scale: 'C'
  },
  clock: 'h:i p - m b',
  search: {
    engines: {
      g: ['https://google.com/search?q=', 'Google'],
      d: ['https://duckduckgo.com/?q=', 'DuckDuckGo'],
      y: ['https://youtube.com/results?search_query=', 'Youtube'],
      w: ['https://en.wikipedia.org/w/index.php?search=', 'Wikipedia'],
      h: ['https://github.com/search?q=', 'Github'],
      b: ['https://wiby.me/?q=', 'Wiby']
    }
  },
  disabled: ["todo-list"]
});
