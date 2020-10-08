/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-has-content */

import React from "react"
import classNames from "classnames"
import { Icon, Spinner } from "./common"

const Button = ({ className, submit, slot, children, loading, ...rest }) => {
  let Element

  const selector = classNames("button", className, { slot, loading })

  if (submit || rest.type === "submit") {
    Element = ({ ...props }) => <button type="submit" {...props} />
  } else {
    Element = ({ ...props }) => <a {...props} />
  }

  return (
    <Element className={selector} {...rest}>
      {slot && <div className="button-slot">{slot}</div>}
      {children && <span className="children">{children}</span>}
      {loading && <Spinner />}
    </Element>
  )
}

const Twitch = ({ className, ...rest }) => (
  <Button
    className={classNames(className, "connect-button", "twitch")}
    href={"/twitch/login"}
    slot={<Icon twitch />}
    {...rest}
  >
    Sign in with Twitch
  </Button>
)

const Streamlabs = ({ className, ...rest }) => (
  <Button
    className={classNames(className, "streamlabs-button")}
    slot={<img src="https://yaboijt.com/img/social/streamlabs.svg" alt="" />}
    {...rest}
  >
    Connect Streamlabs
  </Button>
)

const Muxy = ({ className, ...rest }) => (
  <Button
    className={classNames(className, "muxy-button")}
    slot={
      <img
        src="https://muxy.io/wp-content/uploads/2016/01/muxy_mascot-300x300.png"
        alt=""
      />
    }
    {...rest}
  >
    Connect Muxy
  </Button>
)

const Streamtip = ({ className, ...rest }) => (
  <Button
    className={classNames(className, "streamtip-button")}
    slot={
      <img
        src="http://twitchtoolbox.com/media/logos/hfhsz4etekbbx4wmojyr.png"
        alt=""
      />
    }
    {...rest}
  >
    Connect Streamtip
  </Button>
)

const registry = {
  Twitch,
  Streamlabs,
  Muxy,
  Streamtip
}

export default props => {
  const firstProp = Object.keys(props)[0]
  const typeOfButton = registry[firstProp]
  if (!typeOfButton) {
    return <Button {...props} />
  }
  const cleanProps = Object.assign({}, props)
  delete cleanProps[firstProp]
  return React.createElement(typeOfButton, cleanProps)
}
