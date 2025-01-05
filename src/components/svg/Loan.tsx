import { SvgProps } from './types';

export const Loan = (props: SvgProps) => {
  const { fill = '#B1B1B1', width, height, size, className } = props || {};

  return (
    <svg
      width={size || width || '25'}
      height={size || height || '25'}
      className={className}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_14_1257)">
        <path
          d="M14.4923 15.3372C18.6873 15.3372 22.1002 11.8971 22.1002 7.66863C22.1002 3.44019 18.6873 0 14.4923 0C10.2974 0 6.88452 3.44014 6.88452 7.66858C6.88452 11.897 10.2974 15.3372 14.4923 15.3372ZM12.0477 10.0616C12.269 9.72331 12.7227 9.62835 13.061 9.84975C13.5539 10.1722 13.7399 10.2019 14.3903 10.1973C15.0252 10.1931 15.3936 9.71994 15.4672 9.28202C15.503 9.06901 15.5167 8.54886 14.872 8.32097C14.1159 8.05365 13.3421 7.74812 12.8037 7.32586C12.2654 6.9036 12.0188 6.17464 12.1604 5.42358C12.3139 4.60936 12.8818 3.96121 13.6427 3.73205C13.6496 3.73 13.6563 3.72835 13.6632 3.7263V3.44882C13.6632 3.04457 13.9909 2.71684 14.3952 2.71684C14.7994 2.71684 15.1272 3.04457 15.1272 3.44882V3.68018C15.6243 3.79886 15.9715 4.02631 16.1125 4.13167C16.4363 4.37376 16.5026 4.83242 16.2605 5.15625C16.0185 5.48009 15.5598 5.54635 15.236 5.30421C15.086 5.19207 14.6714 4.95101 14.0649 5.13376C13.7106 5.24053 13.6187 5.59013 13.599 5.6947C13.5603 5.9002 13.6037 6.09281 13.7072 6.17391C14.0803 6.46661 14.7521 6.72578 15.3599 6.94064C16.4808 7.33684 17.1041 8.37529 16.9109 9.5247C16.8161 10.0887 16.5323 10.6119 16.1119 10.9981C15.8256 11.2613 15.4923 11.4488 15.1272 11.556V11.8883C15.1272 12.2926 14.7994 12.6203 14.3952 12.6203C13.9909 12.6203 13.6632 12.2926 13.6632 11.8883V11.629C13.1899 11.5716 12.7926 11.4236 12.2595 11.0748C11.9213 10.8535 11.8264 10.3999 12.0477 10.0616Z"
          fill={fill}
        />
        <path
          d="M2.77442 17.7967H1.1054C0.701148 17.7967 0.373413 18.1245 0.373413 18.5287V24.267C0.373413 24.6712 0.701148 24.999 1.1054 24.999H2.77447V17.7967H2.77442Z"
          fill={fill}
        />
        <path
          d="M24.4118 17.7456C23.0399 16.3736 20.8075 16.3736 19.4356 17.7456L17.2428 19.9383L16.3441 20.8371C15.9809 21.2003 15.4882 21.4044 14.9746 21.4044H10.6044C10.2097 21.4044 9.87009 21.101 9.85149 20.7068C9.83168 20.2858 10.1671 19.9383 10.5837 19.9383H15.0257C15.9188 19.9383 16.6934 19.3025 16.8469 18.4227C16.8822 18.2206 16.9006 18.0129 16.9006 17.8009C16.9007 17.3959 16.5725 17.0673 16.1676 17.0673H13.7337C12.9382 17.0673 12.1744 16.7065 11.3656 16.3244C10.5174 15.9237 9.64024 15.5094 8.61463 15.4411C7.71761 15.3814 6.81853 15.4796 5.94225 15.7326C5.00399 16.0036 4.32954 16.8371 4.24775 17.7996C4.24463 17.7993 4.24145 17.7993 4.23828 17.7991V24.9965L16.8493 25C17.7163 25 18.5316 24.6623 19.1448 24.0491L24.4117 18.7822C24.6981 18.4961 24.6981 18.0319 24.4118 17.7456Z"
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="clip0_14_1257">
          <rect width="25" height="25" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};