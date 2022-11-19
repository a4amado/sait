

module.exports = {
  i18n: {
    defaultLocale: 'ar',
    locales: ['en', 'ar'],
    localePath: typeof window != 'undefined' ?
      require('path').resolve('./public/locales') :
      './public/locales',
    localeDetection: false,
  }


}