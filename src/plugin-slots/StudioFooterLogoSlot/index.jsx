import React from 'react';
import { PluginSlot } from '@openedx/frontend-plugin-framework';
import { Hyperlink, Image } from '@openedx/paragon';

const StudioFooterLogoSlot = () => (
  <PluginSlot id="org.openedx.frontend.layout.studio_footer_logo.v1" idAliases={['studio_footer_logo_slot']}>
    <Hyperlink destination="https://weuplearning.com" className="float-right">
      <Image
        width="120px"
        alt="Powered by Open edX"
        src="https://weuplearning.com/wp-content/uploads/2022/12/logoBlanc-300x104.png"
      />
    </Hyperlink>
  </PluginSlot>
);

export default StudioFooterLogoSlot;
