export interface ConnectivityItem {
  title: string;
  category: string;
  description: string;
  highlight?: string;
}

export const CONNECTIVITY_HIGHLIGHTS: ConnectivityItem[] = [
  {
    title: 'Pune Intl Exhibition & Convention Centre (PIECC)',
    category: 'Landmark',
    description: 'Directly opposite the project — Pune’s premier global trade and convention landmark.',
    highlight: 'Directly Opposite',
  },
  {
    title: 'COEP Moshi Campus & District Court',
    category: 'Education & Civic',
    description: 'New COEP Technological University Moshi campus and PCMC District Court.',
    highlight: '1.0 km • 2 Mins',
  },
  {
    title: 'Moshi High Street & Spine Road',
    category: 'Arterial Transit',
    description: 'Immediate access onto Moshi High Street Road and seamless link to Spine Road.',
    highlight: '0.2 km - 1.0 km',
  },
  {
    title: 'Global Talent International School & City Pride',
    category: 'Schools',
    description: 'Premier CBSE & ICSE academic institutions situated within immediate radius.',
    highlight: '1.5 km',
  },
  {
    title: 'Adarsha Multispeciality Hospital',
    category: 'Healthcare',
    description: 'Round-the-clock emergency medical care and multi-speciality healthcare facility.',
    highlight: '1.8 km',
  },
  {
    title: 'Bhosari MIDC & Chakan Industrial Belt',
    category: 'Employment Hubs',
    description: 'Direct transit to major automotive manufacturing and engineering corporate clusters.',
    highlight: '10 Mins Commute',
  },
];
