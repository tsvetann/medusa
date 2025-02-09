import React from "react"
import { IconProps } from ".."

const IconCircleStackSolid: React.FC<IconProps> = ({
  iconColorClassName,
  ...props
}) => {
  return (
    <svg
      width={props.width || 20}
      height={props.height || 20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M17.5 5.3125C17.5 7.55583 14.1417 9.375 10 9.375C5.85833 9.375 2.5 7.55583 2.5 5.3125C2.5 3.06917 5.85833 1.25 10 1.25C14.1417 1.25 17.5 3.06917 17.5 5.3125Z"
        className={
          iconColorClassName ||
          "tw-fill-medusa-icon-secondary dark:tw-fill-medusa-icon-secondary-dark"
        }
      />
      <path
        d="M10 10.625C12.2375 10.625 14.325 10.1367 15.8983 9.28419C16.4774 8.97677 17.0097 8.58843 17.4792 8.13086C17.4925 8.23169 17.5 8.33419 17.5 8.43753C17.5 10.6809 14.1417 12.5 10 12.5C5.85833 12.5 2.5 10.6809 2.5 8.43753C2.5 8.33419 2.5075 8.23169 2.52083 8.13086C2.99035 8.58841 3.52264 8.97675 4.10167 9.28419C5.67417 10.1367 7.7625 10.625 10 10.625Z"
        className={
          iconColorClassName ||
          "tw-fill-medusa-icon-secondary dark:tw-fill-medusa-icon-secondary-dark"
        }
      />
      <path
        d="M10 13.75C12.2375 13.75 14.325 13.2617 15.8983 12.4092C16.4774 12.1018 17.0097 11.7134 17.4792 11.2559C17.4925 11.3567 17.5 11.4592 17.5 11.5625C17.5 13.8059 14.1417 15.625 10 15.625C5.85833 15.625 2.5 13.8059 2.5 11.5625C2.5 11.4592 2.5075 11.3567 2.52083 11.2559C2.99034 11.7134 3.52263 12.1018 4.10167 12.4092C5.67417 13.2617 7.7625 13.75 10 13.75Z"
        className={
          iconColorClassName ||
          "tw-fill-medusa-icon-secondary dark:tw-fill-medusa-icon-secondary-dark"
        }
      />
      <path
        d="M10 16.875C12.2375 16.875 14.325 16.3867 15.8983 15.5342C16.4774 15.2268 17.0097 14.8384 17.4792 14.3809C17.4925 14.4817 17.5 14.5842 17.5 14.6875C17.5 16.9309 14.1417 18.75 10 18.75C5.85833 18.75 2.5 16.9309 2.5 14.6875C2.5 14.5842 2.5075 14.4817 2.52083 14.3809C2.99034 14.8384 3.52263 15.2268 4.10167 15.5342C5.67417 16.3867 7.7625 16.875 10 16.875Z"
        className={
          iconColorClassName ||
          "tw-fill-medusa-icon-secondary dark:tw-fill-medusa-icon-secondary-dark"
        }
      />
    </svg>
  )
}

export default IconCircleStackSolid
