import React from 'react';

import HtmlIcon from '../public/assets/icons/html.png';
import CssIcon from '../public/assets/icons/css.png';
import JavascriptIcon from '../public/assets/icons/javascript.png';

export default function getCategoryIcon(categoryName: string): React.ReactNode | null {
  switch (categoryName.toLowerCase()) {
    case 'html':
      return <img src={HtmlIcon} alt={categoryName} />
    case 'css':
      return <img src={CssIcon} alt={categoryName} />
    case 'javascript':
      return <img src={JavascriptIcon} alt={categoryName} />
    default:
      return null;
  }
}