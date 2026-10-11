import {
  ArrowUpLeft,
  ArrowLeft,
  ArrowUpRight,
  Orbit,
  Shapes,
  ScanLine,
  UsersRound,
  BookOpen,
  Sparkles,
  Building2,
  GraduationCap,
  HeartHandshake,
  Mail,
  Phone,
  Menu,
  X,
  Plus,
  Minus,
  Check,
  MessageCircle,
  Send,
  Instagram,
  Linkedin,
  MoveUpLeft,
} from "lucide-react";

const icons = {
  arrow: ArrowUpLeft,
  left: ArrowLeft,
  external: ArrowUpRight,
  orbit: Orbit,
  shapes: Shapes,
  scan: ScanLine,
  people: UsersRound,
  book: BookOpen,
  spark: Sparkles,
  building: Building2,
  school: GraduationCap,
  heart: HeartHandshake,
  mail: Mail,
  phone: Phone,
  menu: Menu,
  close: X,
  plus: Plus,
  minus: Minus,
  check: Check,
  chat: MessageCircle,
  send: Send,
  instagram: Instagram,
  linkedin: Linkedin,
  move: MoveUpLeft,
};
export type IconName = keyof typeof icons;
export function Icon({
  name,
  size = 24,
  className = "",
}: {
  name: IconName;
  size?: number;
  className?: string;
}) {
  const Component = icons[name];
  return (
    <Component
      size={size}
      strokeWidth={1.5}
      className={className}
      aria-hidden="true"
    />
  );
}
