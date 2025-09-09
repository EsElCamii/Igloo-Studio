import React from 'react';

type IconName = 
  | 'envelope' | 'phone' | 'map-marker-alt' | 'clock' | 'paper-plane' 
  | 'headphones' | 'music' | 'microphone' | 'desktop' | 'wave-square' | 'video'
  | 'chevron-down' | 'arrow-left' | 'calendar' | 'tag' | 'external-link' | 'play'
  | 'instagram' | 'facebook' | 'youtube' | 'linkedin' | 'award' | 'times'
  | 'home' | 'search' | 'user' | 'menu' | 'close' | 'info' | 'check' | 'plus' | 'minus'
  | 'star' | 'heart' | 'share' | 'download' | 'upload' | 'cog' | 'bell' | 'comment'
  | 'image' | 'camera' | 'file' | 'link' | 'bookmark' | 'print' | 'folder' | 'trash'
  | 'edit' | 'save' | 'sync' | 'refresh' | 'lock' | 'unlock' | 'eye' | 'eye-slash'
  | 'arrow-right' | 'arrow-up' | 'arrow-down' | 'chevron-up' | 'chevron-right' | 'chevron-left'
  | 'ellipsis-h' | 'ellipsis-v' | 'circle' | 'square' | 'check-circle' | 'times-circle'
  | 'bars' | 'gamepad';

interface IconProps extends React.HTMLAttributes<HTMLElement> {
  name: IconName;
  type?: 'solid' | 'regular' | 'light' | 'duotone' | 'brands';
  className?: string;
  style?: React.CSSProperties;
}

const Icon: React.FC<IconProps> = ({ 
  name, 
  type = 'solid', 
  className = '', 
  style = {},
  ...props 
}) => {
  // Map the icon type to the appropriate Font Awesome class prefix
  const prefix = {
    solid: 'fas',
    regular: 'far',
    light: 'fal',
    duotone: 'fad',
    brands: 'fab'
  }[type];

  return (
    <i 
      className={`${prefix} fa-${name} inline-flex items-center justify-center leading-none align-middle text-center ${className}`} 
      style={style}
      {...props}
    />
  );
};

export { Icon };

// Example usage:
// <Icon name="envelope" />
// <Icon name="phone" type="solid" className="mr-2" />
// <Icon name="github" type="brands" />
