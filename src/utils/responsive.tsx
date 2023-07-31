import { RESPONSIVE_SIZE } from "../constants";

/**
 * @description Return is the screen is responsive or not
 * @param {number} width
 * @returns {boolean}
 */
const isResponsive = (width: number): boolean => {
  return width <= RESPONSIVE_SIZE || false;
};

export { isResponsive };
