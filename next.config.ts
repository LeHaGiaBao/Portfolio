import nextra from 'nextra';

const withNextra = nextra({
  // ... Other Nextra config options
});

// You can include other Next.js configuration options here, in addition to Nextra settings:
export default withNextra({
  sassOptions: {
    implementation: 'sass-embedded',
  },
  i18n: {
    locales: ['vi'],
    defaultLocale: 'vi',
  },
  compiler: {
    styledComponents: true,
  },
});
