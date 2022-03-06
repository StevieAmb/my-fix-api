const homeRepairs =  [
{  
  id: 1,
  areaOfHome: 'Kitchen',
  project: 'Leaky Faucet',
  toolsNeeded: ['pliers', 'hex key', 'phillips screwdriver', 'allen wrench', 'faucet cartridge'],
  videos: "https://www.youtube.com/embed/F4LeAVpTdds" 
},
{
  id: 2,
  areaOfHome: 'Kitchen',
  project: 'Fix Garbage Disposal',
  toolsNeeded: ['allen wrench', 'bowl', 'lock nut', 'screwdriver', 'gloves', 'needlenose pliers'],
  videos: "https://www.youtube.com/embed/cdG520BhkNQ"
},
{
  id: 3,
  areaOfHome: 'Kitchen',
  project: 'Crooked Or Uneven Loose Cabinet Doors',
  toolsNeeded: ['screwdriver'],
  videos: "https://www.youtube.com/embed/MMSF7HVFbEI" 
},
{
  id: 4,
  areaOfHome: 'Bathroom',
  project: 'Fix Loose Sink Drain Stopper', 
  toolsNeeded: ['towels', 'sink drain rod kit'],
  videos: "https://www.youtube.com/embed/lg_SyIE8uK0" 
 },
{
  id: 5,
  areaOfHome: 'Bathroom',
  project: 'Fix a Slow Draining Tub',
  toolsNeeded: ['tub-drain remover', 'small screwdriver', 'screwdriver', 'towel', 'plastic bag'],
  videos:"https://www.youtube.com/embed/_LFP7KdGB_U"
},
{
  id: 6,
  areaOfHome: 'Bathroom',
  project: 'Rocking Or Shaking Toilet',
  toolsNeeded: ['flange repair kit', 'toilet floor bolt', 'flange screw bolts', 'drill', 'screwdriver', 'foam/wax seal', 'washers', 'nuts', 'crescent wrench'],
  videos: "https://www.youtube.com/embed/3HTnSGVjV6c"
},
{
  id: 7,
  areaOfHome: 'Bedroom',
  project: 'Remove Window Sill',
  toolsNeeded: ['6-in-1 tool', 'hammer', 'x-acto knife', 'pry bar'],
  videos: "https://www.youtube.com/embed/-CfUizgEGCI" 
},
{
  id: 8,
  areaOfHome: 'Bedroom',
  project: 'Replace Window Sill',
  toolsNeeded: ['liquid nails', 'window sill', 'gloves', 'microfiber', 'hammer'],
  videos: "https://www.youtube.com/embed/4YzhWtBmkfE"
},
{
  id: 9,
  areaOfHome: 'Bedroom',
  project: 'Rescreen Window',
  toolsNeeded: ['flathead screwdriver', 'scissors', 'utility knife', 'spline roller', 'screen', 'spline'],
  videos: "https://www.youtube.com/embed/UMDuYmHTabU" 
},
{
  id: 10,
  areaOfHome: 'Miscellaneous',
  project: 'Fix Or Replace a Doorknob',
  toolsNeeded: ['screwdriver', 'drill', 'door bolt/latch', 'doorknob', 'screws', 'flathead screwdriver', 'latch collar'],
  videos: "https://www.youtube.com/embed/Dt2waefcQOc" 
},
{
  id: 11,
  areaOfHome: 'Miscellaneous',
  project: 'Scratches on HardWood Floors',
  toolsNeeded: ['stain pen', 'can of stain', 'rag', 'melted wax', 'crayon', 'heat gun', 'blow dryer', 'stainable wood filler', 'painter/s tape', 'wipe-on poly', 'painter/s tool', 'sanding sponge', 'sandpaper'],
  videos: "https://www.youtube.com/embed/CTTTm4zT9uM" 
},
{
  id: 12,
  areaOfHome: 'Miscellaneous',
  project: 'Fix Your Top-Loading Washing Machine Agitator',
  toolsNeeded: ['agitator dogs', 'needle nose pliers', '7/16th socket', '10in extension bar'],
  videos: "https://www.youtube.com/embed/JBhZhkQwCTA" 
},
{
  id: 13,
  areaOfHome: 'Kitchen',
  project: 'Fix Kitchen Sink Strainer',
  toolsNeeded: ['plumber/s putty', 'channellock pliers', 'bucket', 'hacksaw', 'sink stopper', 'flat screwdriver', 'kitchen strainer', 'brass nut', 'paper ring', 'rubber gasket', 'top hat gasket'],
  videos: "https://www.youtube.com/embed/iQaDgfc-MYI" 
},
{
  id: 14,
  areaOfHome: 'Miscellaneous',
  project: 'Fix Dishwasher',
  toolsNeeded: ['gloves', 'screwdriver', ' 6mm socket', 'pliers', 'vaccuum hose', 'reversable screwdriver', 'pick'],
  videos: "https://www.youtube.com/embed/lc7rh3ADZUk" 
},
{
  id: 15,
  areaOfHome: 'Kitchen',
  project: 'Fix Cabinet Shelves',
  toolsNeeded: ['drawer corner brackets', 'screwdriver', 'screws', 'drill'],
  videos: "https://www.youtube.com/embed/64YlPj8ugro" 
},
{
  id: 16,
  areaOfHome: 'Bathroom',
  project: 'Broken Toilet Handle',
  toolsNeeded: ['toilet tank lever', 'pliers'],
  videos: "https://www.youtube.com/embed/y_gysAOzMaI" 
},
{
  id: 17,
  areaOfHome: 'Bathroom',
  project: 'Fix Bathroom Towel Bar',
  toolsNeeded: ['flathead screwdriver', 'piece of paper', 'phillips head screwdriver', 'drill bit'],
  videos: "https://www.youtube.com/embed/UYYDjvPTDfs" 
},
{
  id: 18,
  areaOfHome: 'Bathroom',
  project: 'Loose Toilet Seat',
  toolsNeeded: ['slotted screwdriver', 'adjustable wrench', 'measuring tape', 'replacement toilet seat', 'bolt', 'washers', 'clever nut'],
  videos: "https://www.youtube.com/embed/y4ql6AANARU" 
},
{
  id: 19,
  areaOfHome: 'Bedroom',
  project: 'Fix Broken Drawers',
  toolsNeeded: ['drill', 'speed square', 'pencil', 'screws', 'drill bit', 'wood glue', 'rag'],
  videos: "https://www.youtube.com/embed/98gPMdsInZo" 
},
{
  id: 20,
  areaOfHome: 'Bedroom',
  project: 'Busted Bedroom Door Latch',
  toolsNeeded: ['flathead screwdriver', 'hammer', 'phillips head screwdriver', 'metal cobalt file', 'pencil', 'toothpick', 'superglue', 'utility knife', 'hammer', 'trim nail', 'drill', 'titanium drill bit', '1in chisel', 'wood filler', 'caulk'],
  videos: "https://www.youtube.com/embed/UcWRcbK4Ra4" 
},
{
  id: 21,
  areaOfHome: 'Bedroom',
  project: 'Sticking Bedroom Door',
  toolsNeeded: ['bucket', 'diagonal cutters', 'hammer', '8in crescent wrench', 'scraps of plywood'],
  videos: "https://www.youtube.com/embed/AzRqVgkjZaY" 
},
{
  id: 22,
  areaOfHome: 'Miscellaneous',
  project: 'Baseboard Repairs',
  toolsNeeded: ['sandpaper', 'wood glue', 'wood filler', 'x-acto knife', 'damp rag'],
  videos: "https://www.youtube.com/embed/VKy9YU5dBYc" 
},
{
  id: 23,
  areaOfHome: 'Miscellaneous', 
  project: 'Wobbly Chair Legs',
  toolsNeeded: ['drill', 'tape', 'marker', 'chisel', 'sandpaper', 'wood glue', 'artist paintbrush', 'rubber mallet'],
  videos: "https://www.youtube.com/embed/dKqIVWTpIiA" 
},
{
  id: 24,
  areaOfHome: 'Miscellaneous',
  project: 'Remove Stain From Carpet',
  toolsNeeded: ['denatured alcohol', 'old toothbrush', 'light-colored rags', 'wet/dry vaccuum', 'baking soda', 'spoon', 'dish soap', 'water', 'spray bottle', 'acetone', 'paper towels', 'hydrogen peroxide'],
  videos: "https://www.youtube.com/embed/ZDEscYyxZ0U" 
}
]

module.exports = { homeRepairs }