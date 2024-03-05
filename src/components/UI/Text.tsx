import styled from "styled-components";

interface TextProps {
  children: React.ReactNode;
  fontSize?: string;
  color?: string;
  fontWeight?: string;
}

const StyledText = styled.p<TextProps>`
  ${({ theme, color, fontSize, fontWeight }) => `
    color: ${color ? theme.colors.primary[color] : theme.colors.secondary};
    font-weight: ${fontWeight ? theme.fontWeight[fontWeight] : 0};
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
  return (
    <StyledText color={color} fontSize={fontSize} fontWeight={fontWeight}>
      {children}
    </StyledText>
  );
}
