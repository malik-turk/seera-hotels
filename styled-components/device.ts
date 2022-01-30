import DeviceSize from '../type/DeviceSizes';

const size: DeviceSize = {
    mobile: '425px',
    tablet: '768px',
    desktop: '1024px'
}

export const device: DeviceSize = {
    mobile: `(max-width: 600px)`,
    tablet: `(max-width: ${size.tablet})`,
    desktop: `(min-width: ${size.desktop})`,
};
