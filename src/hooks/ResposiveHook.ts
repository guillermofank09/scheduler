import { useMediaQuery } from "react-responsive";
import { BREAKPOINTS } from "helpers/constants";

export const useIsMobile = () => {
  const matches = useMediaQuery({ maxDeviceWidth: BREAKPOINTS.MOBILE });
  return matches;
};

export const useIsNotMobile = () => {
  return !useIsMobile();
};
