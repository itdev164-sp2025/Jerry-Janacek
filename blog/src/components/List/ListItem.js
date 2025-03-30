import React, { Children } from "react";
import PropTypes from "prop-types"

import { BaseContainer } from "../BaseContainer";

export const ListItem = ({ Children, ...rest}) => (
    <BaseContainer as='li' {...rest}>
        {Children}
    </BaseContainer>
)

ListItem.PropTypes = {
    children: PropTypes.node.isRequired
}