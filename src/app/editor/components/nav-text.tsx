const NavText: React.FC<{ text: string; className: string }> = ({
  text,
  className,
}) => {
  return <span className={className}>{text}</span>;
};

export default NavText;
