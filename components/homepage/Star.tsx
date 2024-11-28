
const Star = ({ filled }:any) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        style={{ fill: filled ? filled : '#23FF53' }}
      >
        <g clipPath="url(#clip0)">
          <path d="M10.0008 15.218L4.12295 18.5081L5.43572 11.9012L0.490234 7.3278L7.17943 6.53469L10.0008 0.417969L12.8222 6.53469L19.5113 7.3278L14.5659 11.9012L15.8787 18.5081L10.0008 15.218Z" />
        </g>
        <defs>
          <clipPath id="clip0">
            <rect width="20" height="20" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  };
  
  export default Star;
  