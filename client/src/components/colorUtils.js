export const setAlpha = (rgbaString, alpha = 1) => {
    const rgbaValues = rgbaString.split(',')

    rgbaValues[3] = alpha.toString();

    const updatedRgbaString = rgbaValues.join(',') + ')';

    return updatedRgbaString; 
}
