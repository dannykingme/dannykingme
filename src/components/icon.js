/* eslint-disable react/prop-types */
/* eslint-disable react/forbid-foreign-prop-types */

import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import piles from "../data/piles.json"
import paths from "../data/paths.json"

const Shape = ({ shape, className, ...rest }) => {
  const type = shape.split("-")[0]
  const name = shape.split(type)[1].substr(1)
  return (
    <path
      className={classNames("icon-shape", `shape-${name}`, type, className)}
      {...rest}
    />
  )
}

const Shapes = ({ className, ...rest }) => (
  <svg
    className={classNames("icon-shapes", className)}
    viewBox={"0 0 100 100"}
    {...rest}
  />
)

const Icon = ({ style, className, ...rest }) => {
  const { warn } = console
  const name = Object.keys(rest)[0]
  let id = name

  if (!piles[name]) {
    warn(`iconpile "${name}" is undefined`)
    id = "delete"
  }

  return (
    <i className={classNames("icon", `icon-${id}`, className)} style={style}>
      <Shapes>
        {piles[id].map(n => (
          <Shape shape={n} d={paths[n]} key={n} />
        ))}
      </Shapes>
    </i>
  )
}

Icon.propTypes = {}
Icon.defaultProps = {}
Object.keys(piles).forEach(icon => {
  Icon.propTypes[icon] = PropTypes.bool
  Icon.defaultProps[icon] = false
})

export default Icon
