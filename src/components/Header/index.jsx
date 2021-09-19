import React from 'react';

import { WrapperHeader, NavMenu, MenuItem, ContentHeader } from './styles';

const Header = props => {

    return(
        <WrapperHeader>
            <ContentHeader>
                <NavMenu>
                    <MenuItem>v1.0.1</MenuItem>
                    <MenuItem href="/">Gitlab</MenuItem>
                </NavMenu>
            </ContentHeader>
        </WrapperHeader>
    );
};

export default Header;
