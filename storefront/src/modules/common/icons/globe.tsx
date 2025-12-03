import React from "react"

import { IconProps } from "types/icon"

const Globe: React.FC<IconProps> = ({
  size = "20",
  color = "currentColor",
  ...attributes
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...attributes}
    >
      <path
        d="M10 18.3333C14.6024 18.3333 18.3333 14.6024 18.3333 10C18.3333 5.39763 14.6024 1.66667 10 1.66667C5.39763 1.66667 1.66667 5.39763 1.66667 10C1.66667 14.6024 5.39763 18.3333 10 18.3333Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.66667 10H18.3333"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 1.66667C12.0844 3.94863 13.269 6.91003 13.3333 10C13.269 13.09 12.0844 16.0514 10 18.3333C7.91561 16.0514 6.73104 13.09 6.66667 10C6.73104 6.91003 7.91561 3.94863 10 1.66667Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Globe
