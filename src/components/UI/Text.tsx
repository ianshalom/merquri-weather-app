import styled from "styled-components";

interface TextProps {
  children: React.ReactNode;
  fontSize?: string;
  color?: string;
  fontWeight?: string;
}

const StyledText = styled.p<TextProps>`
  ${({ theme, color, fontSize }) => `
    color: ${color ? theme.colors.primary[color] : theme.colors.black};
    font-size: ${fontSize ? theme.fontSize[fontSize] : theme.fontSize.title}
    };
`}
`;

export default function Text({
  children,
  fontSize,
  color,
  fontWeight,
}: TextProps) {
  console.log(fontWeight, fontSize);
  return (
    <StyledText color={color} fontSize={fontSize} fontWeight={fontWeight}>
      {children}
    </StyledText>
  );
}
