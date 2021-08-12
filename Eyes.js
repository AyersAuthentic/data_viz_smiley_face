export const Eyes = ({eyeOffsetX, eyeOffsetY, eyeRadius}) => (
  <>
    <circle
      cx={-eyeOffsetX}
      cy={-eyeOffsetY}
      r={eyeRadius}
      fill="green"
    />
    <circle
      cx={eyeOffsetX}
      cy={-eyeOffsetY}
      r={eyeRadius}
      fill="green"
    />
  </>
);