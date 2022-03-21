import * as FontAwesome from 'react-icons/fa';
import * as IonIcons4 from 'react-icons/io';
import * as MaterialDesign from 'react-icons/md';

export const icons = {
  chevronLeft: MaterialDesign.MdChevronLeft,
  chevronRight: MaterialDesign.MdChevronRight,
  chevronDown: MaterialDesign.MdOutlineExpandMore,
  play: MaterialDesign.MdPlayCircleOutline,
  close: MaterialDesign.MdOutlineClose,
  plus: MaterialDesign.MdAdd,
  minus: MaterialDesign.MdOutlineRemove,
  facebook: FontAwesome.FaFacebook,
  twitter: FontAwesome.FaTwitter,
  instagram: FontAwesome.FaInstagram,
  youtube: FontAwesome.FaYoutube,
  arrowUp: FontAwesome.FaArrowUp,
  whatsApp: FontAwesome.FaWhatsapp,
  alert: IonIcons4.IoMdAlert,
  menu: IonIcons4.IoIosMenu,
};

export type IconComponentProps = {
  name: keyof typeof icons;
  className?: string;
  size?: string | number;
  color?: string;
};

export default function IconComponent({ name, ...props }: IconComponentProps) {
  const IconFromName = icons[name];
  return <IconFromName {...props} />;
}
