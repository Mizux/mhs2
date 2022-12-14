// Atk: speed > power > technical > speed
// Weapons: slash, pierce, blunt
// Parts: Head, Body, Stomach, Wings, Legs, Tail
// Elements: water, fire, dragon

// [id, monster name, isHatchable?, normal Atk, Enraged Atk, Weapon Weakness, Element Weakness]
// Weapon Weakness: [weapons, [part, weapons], ...]

const data = [
  //['000', 'Unknown', true, 'power technical speed', 'power technical speed', ['slash pierce blunt', ['Part', 'slash pierce blunt']], 'none water fire ice thunder dragon'],
  ['001', 'Aptonoth', true, 'power', '', ['slash pierce'], 'fire'],
  ['002', 'Larinoth', false, 'technical', '', ['slash pierce'], 'water'],
  ['004', 'Velociprey', false, 'speed', '', ['slash pierce'], 'ice'],
  ['005', 'Velocidrome', true, 'speed', 'power', ['slash'], 'ice'],
  ['006', 'Kulu-Ya-Ku', true, 'technical', 'power', '', 'water'],
  ['007', 'Bnahabra (Blue)', false, 'technical', '', ['blunt'], 'fire'],
  ['008', 'Konchu (Yellow)', false, 'technical', '', ['blunt'], 'fire'],
  ['009', 'Yian Kut-Ku', true, 'technical', 'speed', [['Head', 'pierce']], 'ice'],
  ['010', 'Bullfango', false, 'power', '', ['slash'], 'thunder'],
  ['011', 'Bulldrome', true, 'power', '', ['slash'], 'thunder'],
  ['012', 'Pukei-Pukei', true, 'technical', 'power', [['Head', 'blunt'], ['Body', 'slash'], ['Tail', 'slash']], 'thunder'],
  ['013', 'Apceros', true, 'power', '', ['blunt'], 'thunder'],
  ['014', 'Slagtoth (Green)', false, 'power', '', ['slash'], 'thunder'],
  ['015', 'Gargwa', false, 'speed', '', ['pierce'], 'fire'],
  ['016', 'Jaggi', false, 'speed', '', ['slash'], 'fire'],
  ['017', 'Jaggia', false, 'power', '', ['pierce'], 'fire'],
  ['018', 'Great Jaggi', true, 'technical', 'speed', ['slash'], 'fire'],
  ['019', 'Ludroth', false, 'power', '', ['blunt'], 'fire'],
  ['020', 'Royal Ludroth', true, 'power', 'technical', [['Head', 'slash'], ['Stomach', 'slash']], 'fire'],
  ['021', 'Tetsucabra', false, 'power', '', ['slash', ['Rock', 'blunt']], 'water'],
  ['022', 'Arzuros', true, 'power', 'technical', [['Stomach', 'slash blunt'], ['Legs', 'blunt']], 'fire'],
  ['023', 'Qurupeco', true, 'technical', 'power', [['Head', 'blunt'], ['Body', 'slash']], 'ice'],
  ['024', 'Blue Yian Kut-Ku', true, 'technical', 'speed', [['Head', 'pierce']], 'water'],
  ['025', 'Tigrex', true, 'speed', 'power', [], 'thunder'],
  ['026', 'Monoblos', true, 'speed', 'power', [], 'thunder'],
  ['027', 'Paolumu', true, 'technical', 'speed', [['Neck', 'pierce'], ['Body', 'slash blunt']], 'fire'],
  ['028', 'Basarios', true, 'technical', 'power', [['Head', 'blunt'], ['Wings', 'pierce'], ['Stomach', 'blunt'], ['Tail', 'slash']], 'water'],
  ['029', 'Unknown', true, 'unknown', '', 'slash pierce blunt', ''],
  ['030', 'Unknown', true, 'unknown', '', 'slash pierce blunt', ''],
  ['031', 'Unknown', true, 'unknown', '', 'slash pierce blunt', ''],
  ['032', 'Unknown', true, 'unknown', '', 'slash pierce blunt', ''],
  ['033', 'Unknown', true, 'unknown', '', 'slash pierce blunt', ''],
  ['034', 'Unknown', true, 'unknown', '', 'slash pierce blunt', ''],
  ['035', 'Unknown', true, 'unknown', '', 'slash pierce blunt', ''],
  ['036', 'Unknown', true, 'unknown', '', 'slash pierce blunt', ''],
  ['037', 'Unknown', true, 'unknown', '', 'slash pierce blunt', ''],
  ['040', 'Unknown', true, 'unknown', '', 'slash pierce blunt', ''],
  ['041', 'Unknown', true, 'unknown', '', 'slash pierce blunt', ''],
  ['042', 'Unknown', true, 'unknown', '', 'slash pierce blunt', ''],
  ['043', 'Unknown', true, 'unknown', '', 'slash pierce blunt', ''],
  ['044', 'Unknown', true, 'unknown', '', 'slash pierce blunt', ''],
  ['045', 'Unknown', true, 'unknown', '', 'slash pierce blunt', ''],
  ['046', 'Unknown', true, 'unknown', '', 'slash pierce blunt', ''],
  ['047', 'Unknown', true, 'unknown', '', 'slash pierce blunt', ''],
  ['050', 'Unknown', true, 'unknown', '', 'slash pierce blunt', ''],
  ['051', 'Unknown', true, 'unknown', '', 'slash pierce blunt', ''],
  ['052', 'Unknown', true, 'unknown', '', 'slash pierce blunt', ''],
  ['053', 'Unknown', true, 'unknown', '', 'slash pierce blunt', ''],
  ['054', 'Unknown', true, 'unknown', '', 'slash pierce blunt', ''],
  ['055', 'Unknown', true, 'unknown', '', 'slash pierce blunt', ''],
  ['056', 'Unknown', true, 'unknown', '', 'slash pierce blunt', ''],
  ['057', 'Unknown', true, 'unknown', '', 'slash pierce blunt', ''],
  ['060', 'Unknown', true, 'unknown', '', 'slash pierce blunt', ''],
  ['061', 'Unknown', true, 'unknown', '', 'slash pierce blunt', ''],
  ['062', 'Unknown', true, 'unknown', '', 'slash pierce blunt', ''],
  ['063', 'Unknown', true, 'unknown', '', 'slash pierce blunt', ''],
  ['064', 'Unknown', true, 'unknown', '', 'slash pierce blunt', ''],
  ['065', 'Unknown', true, 'unknown', '', 'slash pierce blunt', ''],
  ['066', 'Unknown', true, 'unknown', '', 'slash pierce blunt', ''],
  ['067', 'Unknown', true, 'unknown', '', 'slash pierce blunt', ''],
  ['070', 'Unknown', true, 'unknown', '', 'slash pierce blunt', ''],
  ['071', 'Unknown', true, 'unknown', '', 'slash pierce blunt', ''],
  ['072', 'Unknown', true, 'unknown', '', 'slash pierce blunt', ''],
  ['073', 'Unknown', true, 'unknown', '', 'slash pierce blunt', ''],
  ['074', 'Unknown', true, 'unknown', '', 'slash pierce blunt', ''],
  ['075', 'Unknown', true, 'unknown', '', 'slash pierce blunt', ''],
  ['076', 'Unknown', true, 'unknown', '', 'slash pierce blunt', ''],
  ['077', 'Unknown', true, 'unknown', '', 'slash pierce blunt', ''],
  ['100', 'Unknown', true, 'unknown', '', 'slash pierce blunt', ''],
  ['101', 'Unknown', true, 'unknown', '', 'slash pierce blunt', ''],
  ['102', 'Unknown', true, 'unknown', '', 'slash pierce blunt', ''],
  ['103', 'Unknown', true, 'unknown', '', 'slash pierce blunt', ''],
  ['104', 'Unknown', true, 'unknown', '', 'slash pierce blunt', ''],
  ['105', 'Unknown', true, 'unknown', '', 'slash pierce blunt', ''],
  ['106', 'Unknown', true, 'unknown', '', 'slash pierce blunt', ''],
  ['107', 'Unknown', true, 'unknown', '', 'slash pierce blunt', ''],
  ['110', 'Unknown', true, 'unknown', '', 'slash pierce blunt', ''],
  ['111', 'Unknown', true, 'unknown', '', 'slash pierce blunt', ''],
  ['112', 'Unknown', true, 'unknown', '', 'slash pierce blunt', ''],
  ['113', 'Unknown', true, 'unknown', '', 'slash pierce blunt', ''],
  ['114', 'Unknown', true, 'unknown', '', 'slash pierce blunt', ''],
  ['115', 'Unknown', true, 'unknown', '', 'slash pierce blunt', ''],
  ['116', 'Unknown', true, 'unknown', '', 'slash pierce blunt', ''],
  ['117', 'Unknown', true, 'unknown', '', 'slash pierce blunt', ''],
  ['120', 'Unknown', true, 'unknown', '', 'slash pierce blunt', ''],
  ['121', 'Unknown', true, 'unknown', '', 'slash pierce blunt', ''],
  ['122', 'Unknown', true, 'unknown', '', 'slash pierce blunt', ''],
  ['123', 'Unknown', true, 'unknown', '', 'slash pierce blunt', ''],
  ['124', 'Unknown', true, 'unknown', '', 'slash pierce blunt', ''],
  ['125', 'Unknown', true, 'unknown', '', 'slash pierce blunt', ''],
  ['126', 'Unknown', true, 'unknown', '', 'slash pierce blunt', ''],
  ['127', 'Unknown', true, 'unknown', '', 'slash pierce blunt', ''],
  ['130', 'Unknown', true, 'unknown', '', 'slash pierce blunt', ''],
  ['131', 'Unknown', true, 'unknown', '', 'slash pierce blunt', ''],
  ['132', 'Unknown', true, 'unknown', '', 'slash pierce blunt', ''],
  ['133', 'Unknown', true, 'unknown', '', 'slash pierce blunt', ''],
  ['134', 'Unknown', true, 'unknown', '', 'slash pierce blunt', ''],
  ['135', 'Unknown', true, 'unknown', '', 'slash pierce blunt', ''],
  ['136', 'Unknown', true, 'unknown', '', 'slash pierce blunt', ''],
  ['137', 'Unknown', true, 'unknown', '', 'slash pierce blunt', ''],
  ['140', 'Unknown', true, 'unknown', '', 'slash pierce blunt', ''],
  ['141', 'Unknown', true, 'unknown', '', 'slash pierce blunt', ''],
  ['142', 'Unknown', true, 'unknown', '', 'slash pierce blunt', ''],
];

export default data;
