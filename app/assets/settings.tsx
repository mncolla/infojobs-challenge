import { PropsWithChildren } from "react";

interface SettingsIconProps extends PropsWithChildren {
  color?: string;
  width?: string;
  height?: string;
}

export const SettingsIcon = ({
  color = "none",
  width = "25",
  height = "24",
}: SettingsIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 25 24"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clipRule="evenodd"
        d="M21.7459 13.9998L20.0659 12.6898C20.1128 12.2511 20.1128 11.8086 20.0659 11.3698L21.7459 9.99981C22.0963 9.69573 22.1915 9.19059 21.9759 8.77981L20.1859 5.67981C19.9409 5.28497 19.4562 5.11095 19.0159 5.25981L17.0159 6.05981C16.6465 5.81375 16.2547 5.60282 15.8459 5.42981L15.5459 3.32981C15.4852 2.858 15.0816 2.50592 14.6059 2.50981H11.0459C10.5736 2.50527 10.1712 2.85198 10.1059 3.31981L9.84594 5.42981C9.44695 5.61525 9.06542 5.83613 8.70594 6.08981L6.70594 5.28981C6.27111 5.11931 5.77705 5.29394 5.54594 5.69981L3.72594 8.81981C3.53122 9.22047 3.625 9.70161 3.95594 9.99981L5.63594 11.3098C5.63594 11.5298 5.63594 11.7498 5.63594 11.9698C5.63594 12.1898 5.63594 12.4098 5.63594 12.6298L3.95594 13.9998C3.60555 14.3039 3.51032 14.809 3.72594 15.2198L5.51594 18.3198C5.76098 18.7147 6.24572 18.8887 6.68594 18.7398L8.68594 17.9398C9.05108 18.1956 9.43946 18.4166 9.84594 18.5998L10.1459 20.6998C10.2066 21.1716 10.6103 21.5237 11.0859 21.5198H14.6859C15.1583 21.5243 15.5606 21.1776 15.6259 20.7098L15.8459 18.5998C16.245 18.4146 16.6266 18.1937 16.9859 17.9398L18.9859 18.7398C19.4208 18.9103 19.9148 18.7357 20.1459 18.3298L21.9559 15.2098C22.171 14.8059 22.0845 14.3076 21.7459 13.9998ZM12.8459 15.2698C11.0536 15.2698 9.59966 13.8187 9.596 12.0264C9.59235 10.2341 11.0404 8.77718 12.8327 8.76984C14.625 8.7625 16.0849 10.2075 16.0959 11.9998C16.1013 12.8652 15.7612 13.697 15.1511 14.3108C14.5411 14.9247 13.7114 15.2698 12.8459 15.2698Z"
        fill="black"
      />
    </svg>
  );
};
