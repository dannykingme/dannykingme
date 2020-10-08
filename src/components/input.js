/* eslint-disable react/prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable react/no-multi-comp */
/* eslint-disable jsx-a11y/anchor-has-content */

import React, { Component } from "react"
import PropTypes from "prop-types"
import { Icon, Box, Spinner, Hyperlink } from "./common"

export default class Input extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: "",
      active: false,
      empty: true,
      reveal: false,
      help: false,
      touched: false,
      editable: !this.props.clipboard
    }
    this.handleFocus = this.handleFocus.bind(this)
    this.handleBlur = this.handleBlur.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleReveal = this.handleReveal.bind(this)
    this.handleHelp = this.handleHelp.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
    this.activeError = null
  }

  componentWillMount() {
    if (this.props.value) {
      this.setState({ value: this.props.value })
      this.setState({ empty: this.props.value === "" })
    }
  }

  componentWillUpdate(nextProps, nextState) {
    // The error shows only once the input has been touched and blurred or if
    // an error has shown and isn't fixed yet.
    if (
      (!nextState.active && nextState.touched) ||
      (nextState.active && this.activeError)
    ) {
      const { value, validations } = nextProps
      const firstFailedValidation =
        validations &&
        validations.find(item => item.validation(value).error !== null)
      this.activeError = firstFailedValidation
        ? firstFailedValidation.errorMessage(value)
        : null
    } else {
      this.activeError = null
    }
  }

  handleChange(event) {
    // console.log(!this.props.clipboard);
    if (this.state.editable) {
      if (this.props.onChange) {
        this.props.onChange(event)
      }
      this.setState({ value: event.target.value })
      this.setState({ empty: event.target.value === "" })
    }
  }

  handleClick(event) {
    if (this.props.clipboard) {
      event.target.select()
    }
  }

  handleFocus() {
    this.setState({ active: true, touched: true })
  }

  handleBlur() {
    this.setState({ active: false })
  }

  handleReveal() {
    this.setState({ reveal: !this.state.reveal })
  }

  handleHelp() {
    this.setState({ help: !this.state.help })
  }

  handleCancel(event) {
    if (this.props.onChange) {
      this.props.onChange(event)
    }
    this.setState({ value: "" })
    this.setState({ empty: true })
  }

  render() {
    const { value, active, empty, reveal, help } = this.state
    const {
      className,
      name,
      loading,
      fuzzy,
      clipboard,
      href,
      center,
      type,
      spellCheck,
      disabled,
      children,
      onChange,
      required,
      optional,
      Area,
      ...rest
    } = this.props

    return (
      <Box
        className={{
          input: true,
          adaptive: true,
          adapt: active || !empty,
          active,
          clipboard,
          center,
          [className]: className
        }}
        {...rest}
      >
        {Area ? (
          <textarea
            className="input-area input-text"
            name={name}
            // type={type === 'password' && reveal ? 'text' : type}
            value={value}
            spellCheck={spellCheck}
            onClick={this.handleClick}
            onChange={this.handleChange}
            onBlur={this.handleBlur}
            onFocus={this.handleFocus}
            disabled={disabled}
            required={required}
          />
        ) : (
          <input
            className="input-text"
            name={name}
            type={type === "password" && reveal ? "text" : type}
            value={value}
            spellCheck={spellCheck}
            onClick={this.handleClick}
            onChange={this.handleChange}
            onBlur={this.handleBlur}
            onFocus={this.handleFocus}
            disabled={disabled}
            required={required}
          />
        )}
        <div className="input-label">
          {typeof children === "string" ? (
            <span>
              {children}
              {optional && <span> (optional)</span>}
            </span>
          ) : (
            children
          )}
          {this.activeError ? (
            <span className="label-error">&nbsp;{this.activeError}</span>
          ) : null}
          {type === "password" && (
            <button className="label-help" onClick={this.handleHelp}>
              <Icon times />
            </button>
          )}
        </div>
        {(loading || typeof loading === "undefined") && <Spinner />}
        {fuzzy && !loading && !empty && (
          <button className="label-cancel" onClick={this.handleCancel}>
            <Icon times />
          </button>
        )}
        {type === "password" && (!empty || reveal) && (
          <button className="aside" onClick={this.handleReveal}>
            {reveal ? <Icon hide /> : <Icon reveal />}
          </button>
        )}
        {help && (
          <div className="drawer">
            <div className="drawer-item make">
              <Hyperlink>{"Reset password?"}</Hyperlink>
            </div>
          </div>
        )}
        {href && <a className="adaptive-link" href={href} aria-label={name} />}
      </Box>
    )
  }
}

Input.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  onClick: PropTypes.func,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  spellCheck: PropTypes.bool,
  clipboard: PropTypes.bool,
  center: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.node,
  loading: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  validations: PropTypes.arrayOf(
    PropTypes.shape({
      validation: PropTypes.func.isRequired,
      errorMessage: PropTypes.func.isRequired
    })
  )
}

Input.defaultProps = {
  type: "text",
  loading: false
}

export const Select = ({ children, options, defaultValue }) => (
  <div className="select active">
    <select className="dropdown" defaultValue={defaultValue}>
      <option disabled value aria-label="select" />
      {options.map(option => (
        <option value={option} key={option}>
          {option}
        </option>
      ))}
    </select>
    <div className="label">{children}</div>
    <Icon dropdown className="dropdown" />
  </div>
)
