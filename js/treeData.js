// Hierarchiczna struktura sefirot do D3
export const treeData = {
  name: 'Keter',
  children: [
    {
      name: 'Chokhmah',
      children: [
        { name: 'Binah' }
      ]
    },
    {
      name: 'Chesed',
      children: [
        { name: 'Gevurah' }
      ]
    },
    {
      name: 'Tiferet',
      children: [
        { name: 'Netzach' },
        { name: 'Hod' }
      ]
    },
    { name: 'Yesod', children: [{ name: 'Malkuth' }] }
  ]
};
