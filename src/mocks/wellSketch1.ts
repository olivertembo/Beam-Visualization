/*
Well3_Zonal Flow Control_wellsketch
Oil Producer, zonal flow control completion, fibre across reservoir
*/

const elements = [
  {
    shape: <const>'casing',
    title: '9.625in 53.5lb/ft casing',
    shoe: false,
    OD: 9.625,
    weight: 53.5,
    ID: '8.535',
    crossover: true,
    crossover_OD: 13.375,
    colour: 'light grey',
    top: 40,
    bottom: 2000,
  },
  {
    shape: <const>'casing',
    title: '9.625in 53.5lb/ft casing',
    shoe: false,
    OD: 5.5,
    weight: 53.5,
    ID: '4.8',
    crossover: false,
    colour: 'light grey',
    top: 500,
    bottom: 3000,
  },
  {
    shape: <const>'open_hole',
    title: '8.5in open hole',
    rat_hole: true,
    size: 8.5,
    colour: 'orange',
    top: 2000,
    bottom: 4000,
  },
  {
    shape: <const>'tubing',
    title: '5.5in 17lb/ft tubing',
    OD: 5.5,
    weight: 17,
    ID: '4.892',
    crossover: false,
    crossover_OD: 7,
    colour: 'light grey',
    top: 40,
    bottom: 1900,
  },
  {
    shape: <const>'tubing',
    title: '4.5in 12.6lb/ft tubing',
    OD: 4.5,
    weight: 12.6,
    ID: '3.958',
    crossover: true,
    crossover_OD: 5.5,
    colour: 'light grey',
    outer: 4.5,
    inner: 3.958,
    top: 1900,
    bottom: 1950,
  },
  {
    shape: <const>'tubing',
    title: '5.5in 17lb/ft tubing',
    OD: 5.5,
    weight: 17,
    ID: '4.892',
    crossover: true,
    crossover_OD: 4.5,
    colour: 'light grey',
    top: 1950,
    bottom: 3950,
  },
  {
    shape: <const>'packer',
    title: '5.5in x 9.625in packer',
    internal_OD: 9.625,
    external_OD: 5.5,
    colour: 'dark grey',
    depth: 1880.3,
  },
  {
    shape: <const>'packer',
    title: '4.5in x 9.625in packer',
    internal_OD: 9.625,
    external_OD: 4.5,
    colour: 'dark grey',
    depth: 1930.57,
  },
  {
    shape: <const>'custom_element',
    title: 'sliding sleeve',
    internal_OD: 5.5,
    external_OD: 6.5,
    fill: true,
    colour: 'dark grey',
    top: 2200,
    bottom: 2203,
  },
  {
    shape: <const>'custom_element',
    title: 'sliding sleeve',
    internal_OD: 5.5,
    external_OD: 6.5,
    fill: true,
    colour: 'dark grey',
    top: 2400,
    bottom: 2403,
  },
  {
    shape: <const>'packer',
    title: '5.5in x 8.5in packer',
    internal_OD: 5.5,
    external_OD: 8.5,
    colour: 'dark grey',
    depth: 2600.02,
  },
  {
    shape: <const>'custom_element',
    title: 'pressure command sleeve',
    internal_OD: 5.5,
    external_OD: 6.5,
    fill: true,
    colour: 'dark grey',
    depth: 2700,
  },
  {
    shape: <const>'custom_element',
    title: 'pressure command sleeve',
    internal_OD: 5.5,
    external_OD: 6.5,
    fill: true,
    colour: 'dark grey',
    depth: 3000.91,
  },
  {
    shape: <const>'packer',
    title: '5.5in x 8.5in packer',
    internal_OD: 5.5,
    external_OD: 8.5,
    colour: 'dark grey',
    depth: 3200,
  },
  {
    shape: <const>'custom_element',
    title: 'pressure command sleeve',
    internal_OD: 5.5,
    external_OD: 6.5,
    fill: true,
    colour: 'dark grey',
    depth: 3300,
  },
  {
    shape: <const>'custom_element',
    title: 'pressure command sleeve',
    internal_OD: 5.5,
    external_OD: 6.5,
    fill: true,
    colour: 'dark grey',
    depth: 3600,
  },
  {
    shape: <const>'packer',
    title: '5.5in x 8.5in packer',
    internal_OD: 5.5,
    external_OD: 8.5,
    colour: 'dark grey',
    depth: 3730,
  },
  {
    shape: <const>'custom_element',
    title: 'pressure command sleeve',
    internal_OD: 5.5,
    external_OD: 6.5,
    fill: true,
    colour: 'dark grey',
    depth: 3790,
  },
  {
    shape: <const>'custom_element',
    title: 'pressure command sleeve',
    internal_OD: 5.5,
    external_OD: 6.5,
    fill: true,
    colour: 'dark grey',
    depth: 3850,
  },
  {
    shape: <const>'tubing',
    title: '4.5in 12.6lb/ft tubing',
    OD: 4.5,
    weight: 12.6,
    ID: '3.958',
    crossover: true,
    crossover_OD: 5.5,
    colour: 'light grey',
    outer: 4.5,
    inner: 3.958,
    top: 3850,
    bottom: 3990,
  },
  {
    shape: <const>'custom_element',
    title: 'Turn-Around Sub',
    internal_OD: 0,
    external_OD: 4.5,
    fill: false,
    colour: 'red',
    top: 3900,
    bottom: 3903,
  },
  {
    shape: <const>'custom_element',
    title: 'RFID command sleeve',
    internal_OD: 5.5,
    external_OD: 6.5,
    fill: true,
    colour: 'dark grey',
    depth: 3920,
  },
];

export default {
  data: elements,
  shape: <const>'casing',
  title: 'Casing title',
  depthFrom: 0,
  depthTo: 0,
  widthFrom: 0,
  widthTo: 0,
  onDepthChange: () => { },
  onWidthChange: () => { },
  onError: () => { },
};
