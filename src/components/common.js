/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-has-content */

import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import { PortalWithState as CommonPortal } from "react-portal"
import BodyClassName from "react-body-classname"
import input from "./input"
// import icon from "./icon" // TODO breaks in production
import button from "./button"

// export const Icon = icon // TODO breaks in production (see above)
export const Button = button
export const Portal = CommonPortal

export const Input = ({ ...props }) => <input {...props} />

Input.defaultProps = {
  spellCheck: false,
  autoCapitalize: "off",
  autoComplete: "off",
  autoCorrect: "off"
}

export const Hyperlink = ({ className, href, children, ...rest }) => {
  return (
    <a className={classNames(className, "hyperlink")} href={href} {...rest}>
      {children}
    </a>
  )
}

Hyperlink.defaultProps = {
  className: "",
  href: "#"
}

Hyperlink.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string.isRequired
}

export const Buttons = ({ className, ...rest }) => (
  <div className={classNames("buttons", className)} {...rest} />
)

export const Overlay = ({ children, className, onClose, ...rest }) => {
  const handleClose = () => {
    if (onClose) {
      onClose()
    }
  }
  return (
    <BodyClassName className="overlay-active">
      <div className={classNames("overlay", className)} {...rest}>
        <div className={classNames("overlay-background")} />
        <div className={classNames("overlay-foreground")}>
          {children}
          <button
            className="overlay-close"
            disabled={!onClose}
            onClick={handleClose}
          >
            <i class="icon icon-times">
              <svg class="icon-shapes" viewBox="0 0 100 100">
                <path
                  class="icon-shape shape-times stroke"
                  d="M82.5,82.5l-65-65 M82.5,17.5l-65,65"
                ></path>
              </svg>
            </i>
          </button>
        </div>
      </div>
    </BodyClassName>
  )
}

export const Divider = props => (
  <div className="dividers">
    <div className="divider divider-left" />
    {props.content && <div className="divider-content">{props.content}</div>}
    <div className="divider divider-right" />
  </div>
)

// export const Spinner = ({ className, ...rest }) => (
//   <div className={classNames("spinner", className)} {...rest}>
//     <Icon loading />
//   </div>
// )

export const Box = ({ children, className, ...rest }) => {
  const edges = (
    <div className="edges">
      <div className="edge edge-top" />
      <div className="edge edge-right" />
      <div className="edge edge-bottom" />
      <div className="edge edge-left" />
    </div>
  )
  if (children) {
    return (
      <div className={classNames("box", className)} {...rest}>
        {edges}
        {children}
      </div>
    )
  }
  return edges
}

// export const Markdown = ({ content }) => (
//   remark().use(reactRenderer, {
//     remarkReactComponents: {
//       a: Hyperlink,
//     },
//   }).processSync(content).contents
// );
