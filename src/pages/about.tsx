import React, { Fragment, ReactElement } from 'react';

import { injectIntl } from 'gatsby-plugin-intl';

const About = (): ReactElement => {
  return (
    <Fragment>
      <p></p>
      <img
        src={'https://www.codewars.com/users/nguyenchitien195/badges/large'}
      />
    </Fragment>
  );
};

export default injectIntl(About);
