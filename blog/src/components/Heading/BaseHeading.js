import React from "react";
import PropTypes from 'prop-types'
import { Heading } from "rebass";

const BaseHeading = ({ children, ...rest }) =>
    <heading {...rest}>
        { children }
    </heading>

    BaseHeading.PropTypes = {
        children: PropTypes.node.isRequired
    }

    export { BaseHeading }