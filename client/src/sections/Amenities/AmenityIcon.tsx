import React from 'react';
import {
  Waves,
  Sparkles,
  HeartHandshake,
  Footprints,
  Building,
  Trophy,
  PartyPopper,
  Film,
  Dumbbell,
  Activity,
  Flame,
  Target,
  Smile,
  Baby,
  Sun,
  Compass,
  Trees,
  Tent,
  Droplets,
  Flower2,
  Zap,
  ShieldCheck,
  Laptop,
  PackageCheck,
  CheckCircle2,
} from 'lucide-react';

interface AmenityIconProps {
  name: string;
  className?: string;
}

export const AmenityIcon: React.FC<AmenityIconProps> = ({ name, className = 'w-4 h-4' }) => {
  switch (name) {
    case 'Waves':
      return <Waves className={className} />;
    case 'Sparkles':
      return <Sparkles className={className} />;
    case 'HeartHandshake':
      return <HeartHandshake className={className} />;
    case 'Footprints':
      return <Footprints className={className} />;
    case 'Building':
      return <Building className={className} />;
    case 'Trophy':
      return <Trophy className={className} />;
    case 'PartyPopper':
      return <PartyPopper className={className} />;
    case 'Film':
      return <Film className={className} />;
    case 'Dumbbell':
      return <Dumbbell className={className} />;
    case 'Activity':
      return <Activity className={className} />;
    case 'Flame':
      return <Flame className={className} />;
    case 'Target':
      return <Target className={className} />;
    case 'Smile':
      return <Smile className={className} />;
    case 'Baby':
      return <Baby className={className} />;
    case 'Sun':
      return <Sun className={className} />;
    case 'Compass':
      return <Compass className={className} />;
    case 'Trees':
      return <Trees className={className} />;
    case 'Tent':
      return <Tent className={className} />;
    case 'Droplets':
      return <Droplets className={className} />;
    case 'Flower2':
      return <Flower2 className={className} />;
    case 'Zap':
      return <Zap className={className} />;
    case 'ShieldCheck':
      return <ShieldCheck className={className} />;
    case 'Laptop':
      return <Laptop className={className} />;
    case 'PackageCheck':
      return <PackageCheck className={className} />;
    default:
      return <CheckCircle2 className={className} />;
  }
};
