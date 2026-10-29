import "./Title.css";

export const Title = ({
  children,
  size = "md",
  weight = "normal",
  color,
  as: Tag = "p",
  className = "",
}) => {
  return (
    <Tag
      className={`paragraph paragraph--${size} paragraph--${weight} ${className}`.trim()}
      style={color ? { color } : undefined}
    >
      {children}
    </Tag>
  );
};
